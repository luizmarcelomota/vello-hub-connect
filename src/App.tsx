import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider, useApp } from "@/contexts/AppContext";
import { Layout } from "@/components/Layout";
import { PrincipalTab } from "@/components/tabs/PrincipalTab";
import { ClientesTab } from "@/components/tabs/ClientesTab";
import { ProdutosTab } from "@/components/tabs/ProdutosTab";
import { ConfiguracoesTab } from "@/components/tabs/ConfiguracoesTab";

const queryClient = new QueryClient();

function AppContent() {
  const { currentTab } = useApp();

  const renderCurrentTab = () => {
    switch (currentTab) {
      case 'principal':
        return <PrincipalTab />;
      case 'clientes':
        return <ClientesTab />;
      case 'produtos':
        return <ProdutosTab />;
      case 'configuracoes':
        return <ConfiguracoesTab />;
      default:
        return <PrincipalTab />;
    }
  };

  return (
    <Layout>
      {renderCurrentTab()}
    </Layout>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <AppContent />
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
