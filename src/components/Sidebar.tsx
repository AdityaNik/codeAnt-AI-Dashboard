import { Home, Code2, Cloud, HelpCircle, Settings, PhoneCall, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: Home, label: 'Repositories', active: true },
  { icon: Code2, label: 'AI Code Review' },
  { icon: Cloud, label: 'Cloud Security' },
  { icon: HelpCircle, label: 'How to Use' },
  { icon: Settings, label: 'Settings' },
];

const downItems = [
  { icon: PhoneCall, label: 'Support' },
  { icon: LogOut, label: 'Logout' }
];

const Sidebar = () => {
  return (
    <div className="border-r bg-card p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 px-2 mb-8">
        <Code2 className="h-8 w-8" />
        <span className="font-bold text-xl">CodeAnt AI</span>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="overflow-auto">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-md text-md bg-inherit",
                item.active ? "bg-blue-600 text-white" : ""
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </div>
        <div>
          {downItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 p-3 rounded-md text-md bg-inherit"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;