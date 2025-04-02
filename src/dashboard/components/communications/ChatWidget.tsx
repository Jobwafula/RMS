// src/components/communications/ChatWidget.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: string;
  sender: 'user' | 'tenant';
  name: string;
  text: string;
  timestamp: string;
}

export function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'tenant', name: 'Alex Johnson', text: 'Hi, I wanted to report a leak in the kitchen faucet.', timestamp: '10:30 AM' },
    { id: '2', sender: 'user', name: 'You', text: 'Thanks for letting me know. I\'ll send a plumber tomorrow morning.', timestamp: '10:32 AM' },
    { id: '3', sender: 'tenant', name: 'Alex Johnson', text: 'Great, thanks! What time should I expect them?', timestamp: '10:33 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: Date.now().toString(),
        sender: 'user',
        name: 'You',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage('');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tenant Communication</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 h-64 overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id} className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.sender === 'tenant' && (
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="https://i.pravatar.cc/150?u=alex@example.com" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                )}
                <div className={`max-w-xs ${message.sender === 'user' ? 'bg-indigo-100' : 'bg-gray-100'} rounded-lg p-3`}>
                  {message.sender === 'tenant' && <div className="text-sm font-medium">{message.name}</div>}
                  <p>{message.text}</p>
                  <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}