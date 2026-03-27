"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon } from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "Sign Out",
    // email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "HRD SHOP",
      logo: (
        <GalleryVerticalEndIcon />
      ),
      plan: "ADMAIN V2.0",
    },
  ],
  navMain: [
    {
      title: "Products",
      url: "/products",
      icon: (
        <TerminalSquareIcon />
      ),
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Customers",
      url: "#",
      icon: (
        <BotIcon />
      ),
    },
    {
      title: "Categories",
      url: "#",
      icon: (
        <BookOpenIcon />
      )
    },
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon />
      )
    },
  ],
  
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
