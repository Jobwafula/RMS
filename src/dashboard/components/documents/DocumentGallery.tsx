// src/components/documents/DocumentGallery.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Image, Download } from "lucide-react";

interface Document {
  id: string;
  name: string;
  type: 'image' | 'pdf' | 'doc';
  size: string;
  date: string;
  associatedWith: string;
}

export function DocumentGallery() {
  const documents: Document[] = [
    { id: '1', name: 'Lease_Agreement_A101.pdf', type: 'pdf', size: '2.4 MB', date: '2023-01-15', associatedWith: 'Alex Johnson' },
    { id: '2', name: 'Property_Photo_Sunrise.jpg', type: 'image', size: '1.2 MB', date: '2022-12-05', associatedWith: 'Sunrise Apartments' },
    { id: '3', name: 'Maintenance_Request_Form.pdf', type: 'pdf', size: '0.8 MB', date: '2023-03-22', associatedWith: 'Maria Garcia' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />;
      case 'image': return <Image className="w-5 h-5 text-blue-500" />;
      default: return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Documents</CardTitle>
        <Button variant="outline">Upload New</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                {getIcon(doc.type)}
                <div>
                  <div className="font-medium">{doc.name}</div>
                  <div className="text-sm text-gray-500">
                    {doc.size} • {new Date(doc.date).toLocaleDateString()} • {doc.associatedWith}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}