import { Home, Users, Package, Settings, LogOut } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';

const menuItems = [
  { id: 'principal' as const, label: 'Principal', icon: Home },
  { id: 'clientes' as const, label: 'Clientes', icon: Users },
  { id: 'produtos' as const, label: 'Produtos', icon: Package },
  { id: 'configuracoes' as const, label: 'Configurações', icon: Settings },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { currentTab, setCurrentTab, isConnected, logout } = useApp();

  return (
    <div className="flex h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-xl font-bold text-sidebar-foreground">Hub Integration</h1>
          {isConnected && (
            <div className="mt-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-sidebar-foreground">Conectado</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentTab(item.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        {isConnected && (
          <div className="p-4 border-t border-sidebar-border">
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="w-full"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Desconectar
            </Button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}