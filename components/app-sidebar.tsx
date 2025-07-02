"use client"

import * as React from "react"

import { TbLayoutGridRemove } from "react-icons/tb";

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { LogoSection } from "@/components/logo-section"
import { BsCartPlus } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard/home",
      icon: TbLayoutGridRemove,
      isActive: true
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: IoWarningOutline,
      items: [
        {
          title: "Add new",
          url: "/dashboard/projects/create",
        },
      ]
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
      icon: BsCartPlus,
      items:[
        {
          title: "Add new",
          url: "/dashboard/categories/create",
        }
      ]
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="!bg-violet-700">
      <SidebarHeader className="mt-3 mb-5">
        <LogoSection/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
