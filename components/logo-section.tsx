import * as React from "react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  
} from "@/components/ui/sidebar"
import { ImSpinner9 } from "react-icons/im";


export function LogoSection() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
            >
              <div className="flex-1 flex gap-2 items-center justify-center"> 
                <div className="aspect-square size-8">
                 <ImSpinner9 size={26} className="text-blue-800"/>
                </div>
                <div className="text-left text-lg leading-tight">
                 Eskanor
                </div>
              </div>
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
