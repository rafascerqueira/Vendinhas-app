import { Donutchart } from "../components/charts/Donutchart";
import { Linechart } from "../components/charts/Linechart";
import { TemplateApp } from "../components/TemplateApp";

export function Dashboard() {
  return (
    <TemplateApp>
      <div className="mx-12 md:mx-4">
        <div className="container mx-auto m-8 py-4 bg-gray-100 dark:bg-slate-700 rounded-lg">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex-1 max-w-md">
              <Donutchart />
            </div>
            <div className="flex-1 max-w-xl">
              <Linechart />
            </div>
          </div>
        </div>
      </div>
    </TemplateApp>
  );
}
