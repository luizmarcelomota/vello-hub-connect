import { 
  BarChart3, 
  Plus, 
  Workflow, 
  FileText, 
  Users, 
  HelpCircle,
  Settings,
  Plug,
  Home,
  TrendingUp
} from "lucide-react";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: TrendingUp, label: "Campanhas", path: "/campanhas" },
  { icon: Plus, label: "Nova Campanha", path: "/nova-campanha" },
  { icon: Workflow, label: "Fluxos", path: "/fluxos" },
  { icon: FileText, label: "Relatórios", path: "/relatorios" },
  { icon: Users, label: "Público", path: "/publico" },
];

const fluxosItems = [
  { icon: Workflow, label: "Todos os Fluxos", path: "/fluxos/todos" },
  { icon: FileText, label: "Templates", path: "/fluxos/templates" },
];

const supportItems = [
  { icon: HelpCircle, label: "Central de Ajuda", path: "/ajuda" },
];

const configItems = [
  { icon: Plug, label: "Integração", path: "/integration" },
  { icon: Settings, label: "Configurações", path: "/configuracoes" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">Fleezy</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-6">
        {/* Main Navigation */}
        <div>
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`
                  }
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Fluxos Section */}
        <div>
          <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            FLUXOS
          </h3>
          <ul className="space-y-2">
            {fluxosItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`
                  }
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            SUPORTE
          </h3>
          <ul className="space-y-2">
            {supportItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`
                  }
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Configuration Section */}
        <div>
          <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            CONFIGURAÇÕES
          </h3>
          <ul className="space-y-2">
            {configItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`
                  }
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}