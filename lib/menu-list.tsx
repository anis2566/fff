import {
  Users,
  Settings,
  LayoutGrid,
  FileSignature,
  LucideIcon,
  Pen,
  List,
  Radio,
  CircleCheck,
  BadgeX,
  BadgePercent,
  CircleDollarSign,
  Layers3,
  Medal,
  RefreshCcwDot,
  Ban,
  File,
  CalendarDays,
  Calendar,
  UserCog,
  GitCompareArrows,
  SquareStack,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/admin",
          label: "Dashboard",
          active: pathname === "/admin",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Main",
      menus: [
        {
          href: "",
          label: "Category",
          active: pathname.includes("/admin/category"),
          icon: Layers3,
          submenus: [
            {
              href: "/admin/category/create",
              label: "Create",
              active: pathname === "/admin/category/create",
              icon: Pen,
            },
            {
              href: "/admin/category",
              label: "List",
              active: pathname === "/admin/category",
              icon: List,
            },
          ],
        },
      ],
    },
  ];
}

export function getMenuListScout(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/scout",
          label: "Dashboard",
          active: pathname === "/scout",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Event",
          active: pathname.includes("/scout/event"),
          icon: Calendar,
          submenus: [
            {
              href: "/scout/event",
              label: "List",
              active: pathname === "/scout/event",
              icon: List,
            },
            {
              href: "/scout/event/app",
              label: "Applications",
              active: pathname === "/scout/event/app",
              icon: File,
            },
          ],
        },
        {
          href: "",
          label: "Training",
          active: pathname.includes("/scout/training"),
          icon: GitCompareArrows,
          submenus: [
            {
              href: "/scout/training",
              label: "List",
              active: pathname === "/scout/training",
              icon: List,
            },
            {
              href: "/scout/training/app",
              label: "Applications",
              active: pathname === "/scout/training/app",
              icon: File,
            },
          ],
        },
        {
          href: "",
          label: "Unit",
          active: pathname.includes("/scout/unit"),
          icon: Layers3,
          submenus: [
            {
              href: "/scout/unit",
              label: "Manage",
              active: pathname === "/scout/unit",
              icon: Settings,
            },
            {
              href: "/scout/unit/request",
              label: "Request",
              active: pathname === "/scout/unit/request",
              icon: Radio,
            },
          ],
        },
        {
          href: "/scout/profile",
          label: "Profile",
          active: pathname.includes("/scout/profile"),
          icon: UserCog,
          submenus: [],
        },
      ],
    },
  ];
}