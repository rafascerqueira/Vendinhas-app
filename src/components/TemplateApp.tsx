import { Headerbar } from "./Headerbar";
import { Sidebar } from "./Sidebar";

export function TemplateApp({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row box-border">
      <div className="sm:fixed">
        <Sidebar />
      </div>
      <div className="hidden sm:flex px-24 mx-3 h-screen"></div>
      <div className="flex-auto">
        <Headerbar />
        <div className="dark:text-gray-200">{children}</div>
      </div>
    </div>
  );
}
