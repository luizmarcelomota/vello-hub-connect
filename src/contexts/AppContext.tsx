import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface AppConfig {
  appClientId: string;
  callbackUrl: string;
  clientsEndpoint: string;
  productsEndpoint: string;
}

export interface Client {
  name: string;
  email: string;
  phone: string;
}

export interface Product {
  name: string;
  value: string;
}

export interface AppState {
  config: AppConfig;
  accessToken: string | null;
  isConnected: boolean;
  clients: Client[];
  products: Product[];
  currentTab: 'principal' | 'clientes' | 'produtos' | 'configuracoes';
}

interface AppContextType extends AppState {
  updateConfig: (config: Partial<AppConfig>) => void;
  setAccessToken: (token: string | null) => void;
  setCurrentTab: (tab: AppState['currentTab']) => void;
  connectToHub: () => void;
  fetchClients: () => Promise<void>;
  fetchProducts: () => Promise<void>;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultConfig: AppConfig = {
  appClientId: '',
  callbackUrl: `${window.location.origin}/callback`,
  clientsEndpoint: '',
  productsEndpoint: '',
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<AppConfig>(() => {
    const stored = localStorage.getItem('hubIntegration_config');
    return stored ? { ...defaultConfig, ...JSON.parse(stored) } : defaultConfig;
  });

  const [accessToken, setAccessTokenState] = useState<string | null>(() => {
    return localStorage.getItem('hubIntegration_token');
  });

  const [isConnected, setIsConnected] = useState<boolean>(() => {
    return !!localStorage.getItem('hubIntegration_token');
  });

  const [clients, setClients] = useState<Client[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentTab, setCurrentTab] = useState<AppState['currentTab']>('principal');

  // Salvar config no localStorage
  useEffect(() => {
    localStorage.setItem('hubIntegration_config', JSON.stringify(config));
  }, [config]);

  // Verificar token no retorno do OAuth
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('access_token');
    
    if (token) {
      setAccessToken(token);
      // Limpar URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const updateConfig = (newConfig: Partial<AppConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const setAccessToken = (token: string | null) => {
    setAccessTokenState(token);
    setIsConnected(!!token);
    
    if (token) {
      localStorage.setItem('hubIntegration_token', token);
    } else {
      localStorage.removeItem('hubIntegration_token');
    }
  };

  const generateState = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const connectToHub = () => {
    if (!config.appClientId) {
      alert('Configure o APP_CLIENT_ID primeiro na aba Configurações');
      setCurrentTab('configuracoes');
      return;
    }

    const state = generateState();
    localStorage.setItem('hubIntegration_state', state);

    // Simular redirecionamento OAuth (em produção seria para o Hub real)
    const authUrl = new URL('https://hub-demo.example.com/oauth/authorize');
    authUrl.searchParams.set('client_id', config.appClientId);
    authUrl.searchParams.set('redirect_uri', config.callbackUrl);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('state', state);

    // Para demonstração, simular retorno com token
    setTimeout(() => {
      const simulatedToken = 'demo_token_' + Math.random().toString(36).substring(2, 15);
      setAccessToken(simulatedToken);
      alert('Conexão simulada realizada com sucesso! Token obtido: ' + simulatedToken);
    }, 1000);
  };

  const fetchClients = async () => {
    if (!accessToken || !config.clientsEndpoint) return;

    try {
      // Simular dados para demonstração
      const simulatedClients: Client[] = [
        { name: 'João Silva', email: 'joao@email.com', phone: '(11) 99999-0001' },
        { name: 'Maria Santos', email: 'maria@email.com', phone: '(11) 99999-0002' },
        { name: 'Pedro Costa', email: 'pedro@email.com', phone: '(11) 99999-0003' },
      ];
      
      setClients(simulatedClients);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  const fetchProducts = async () => {
    if (!accessToken || !config.productsEndpoint) return;

    try {
      // Simular dados para demonstração
      const simulatedProducts: Product[] = [
        { name: 'Produto A', value: 'R$ 199,90' },
        { name: 'Produto B', value: 'R$ 299,90' },
        { name: 'Produto C', value: 'R$ 399,90' },
      ];
      
      setProducts(simulatedProducts);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const logout = () => {
    setAccessToken(null);
    setClients([]);
    setProducts([]);
    setCurrentTab('principal');
  };

  // Buscar dados quando conectado
  useEffect(() => {
    if (isConnected) {
      fetchClients();
      fetchProducts();
    }
  }, [isConnected]);

  return (
    <AppContext.Provider
      value={{
        config,
        accessToken,
        isConnected,
        clients,
        products,
        currentTab,
        updateConfig,
        setAccessToken,
        setCurrentTab,
        connectToHub,
        fetchClients,
        fetchProducts,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}