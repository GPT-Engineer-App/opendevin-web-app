import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Package2, Home, Project, Task, Settings, User } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          <div className="w-full flex-1">{/* Add nav bar content here! */}</div>
          <UserDropdown />
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
        <footer className="border-t p-4 text-center text-sm text-muted-foreground">
          <nav className="flex justify-center space-x-4">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            <a href="/contact-us" className="hover:underline">Contact Us</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>OpenDevin</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          <SidebarNavLink to="/" icon={<Home className="h-4 w-4" />}>
            Dashboard
          </SidebarNavLink>
          <SidebarNavLink to="/projects" icon={<Project className="h-4 w-4" />}>
            Projects
          </SidebarNavLink>
          <SidebarNavLink to="/tasks" icon={<Task className="h-4 w-4" />}>
            Tasks
          </SidebarNavLink>
          <SidebarNavLink to="/settings" icon={<Settings className="h-4 w-4" />}>
            Settings
          </SidebarNavLink>
          <SidebarNavLink to="/profile" icon={<User className="h-4 w-4" />}>
            Profile
          </SidebarNavLink>
        </nav>
      </div>
      <div className="p-4">
        <Button variant="destructive" className="w-full">Logout</Button>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <Package2 className="h-6 w-6" />
          <span>OpenDevin</span>
        </NavLink>
        <SidebarNavLink to="/" icon={<Home className="h-4 w-4" />}>
          Dashboard
        </SidebarNavLink>
        <SidebarNavLink to="/projects" icon={<Project className="h-4 w-4" />}>
          Projects
        </SidebarNavLink>
        <SidebarNavLink to="/tasks" icon={<Task className="h-4 w-4" />}>
          Tasks
        </SidebarNavLink>
        <SidebarNavLink to="/settings" icon={<Settings className="h-4 w-4" />}>
          Settings
        </SidebarNavLink>
        <SidebarNavLink to="/profile" icon={<User className="h-4 w-4" />}>
          Profile
        </SidebarNavLink>
      </nav>
      <div className="p-4">
        <Button variant="destructive" className="w-full">Logout</Button>
      </div>
    </SheetContent>
  </Sheet>
);

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarNavLink = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {icon}
    {children}
  </NavLink>
);

export default Layout;