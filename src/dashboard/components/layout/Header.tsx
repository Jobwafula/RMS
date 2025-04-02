import { Bell, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Mobile Sidebar Trigger */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 px-0 pt-10">
              {/* Mobile Sidebar Content */}
              <div className="px-6 py-2">
                <h1 className="text-xl font-bold">RentalManager</h1>
              </div>
              <nav className="mt-6 space-y-1 px-4">
                {[
                  { href: "/dashboard", icon: "LayoutDashboard", label: "Dashboard" },
                  { href: "/properties", icon: "Home", label: "Properties" },
                  // Add other navigation items
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                  >
                    {/* Dynamic icon rendering would go here */}
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden flex-1 md:flex">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search properties, tenants..."
              className="pl-9 focus-visible:ring-0"
            />
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary"></span>
          </Button>

         

          
        </div>
      </div>
    </header>
  )
}