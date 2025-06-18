"use client"

import { Button } from "@/components/ui/button"
import { Bell, LogOut, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/features/auth/hooks/useAuth"

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const { logout } = useAuth();

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search..."
              className="md:w-[100px] lg:w-[300px]"
            />
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => logout()}
            title="ออกจากระบบ"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
} 