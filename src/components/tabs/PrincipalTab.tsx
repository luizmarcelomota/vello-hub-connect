import { Link, Loader2 } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export function PrincipalTab() {
  const { isConnected, connectToHub, config } = useApp();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      await connectToHub();
    } finally {
      setIsConnecting(false);
    }
  };

  const hasConfig = config.appClientId && config.clientsEndpoint && config.productsEndpoint;

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Integração com Hub</h1>
        <p className="text-muted-foreground">
          Conecte-se ao Hub para sincronizar seus dados de clientes e produtos.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Status Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="w-5 h-5" />
              Status da Conexão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span className="font-medium">
                  {isConnected ? 'Conectado ao Hub' : 'Desconectado'}
                </span>
              </div>
              
              {!isConnected && (
                <Button 
                  onClick={handleConnect} 
                  disabled={!hasConfig || isConnecting}
                  className="min-w-[140px]"
                >
                  {isConnecting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Conectando...
                    </>
                  ) : (
                    'Conectar ao Hub'
                  )}
                </Button>
              )}
            </div>
            
            {!hasConfig && !isConnected && (
              <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800">
                  Configure os dados necessários na aba <strong>Configurações</strong> antes de conectar.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Configuration Status */}
        <Card>
          <CardHeader>
            <CardTitle>Status da Configuração</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">APP_CLIENT_ID</span>
                <span className={`text-sm px-2 py-1 rounded ${config.appClientId ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {config.appClientId ? 'Configurado' : 'Não configurado'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">URL de Callback</span>
                <span className={`text-sm px-2 py-1 rounded ${config.callbackUrl ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {config.callbackUrl ? 'Configurado' : 'Não configurado'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Endpoint de Clientes</span>
                <span className={`text-sm px-2 py-1 rounded ${config.clientsEndpoint ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {config.clientsEndpoint ? 'Configurado' : 'Não configurado'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Endpoint de Produtos</span>
                <span className={`text-sm px-2 py-1 rounded ${config.productsEndpoint ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {config.productsEndpoint ? 'Configurado' : 'Não configurado'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Message */}
        {isConnected && (
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Conexão Estabelecida!
                </h3>
                <p className="text-green-700">
                  Seus dados estão sendo sincronizados. Acesse as abas <strong>Clientes</strong> e <strong>Produtos</strong> para visualizar as informações.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}