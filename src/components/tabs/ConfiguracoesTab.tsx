import { Settings, Save } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function ConfiguracoesTab() {
  const { config, updateConfig } = useApp();
  const { toast } = useToast();
  const [formData, setFormData] = useState(config);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    updateConfig(formData);
    toast({
      title: "Configurações salvas",
      description: "As configurações foram salvas com sucesso.",
    });
  };

  const handleReset = () => {
    const defaultConfig = {
      appClientId: '',
      callbackUrl: `${window.location.origin}/callback`,
      clientsEndpoint: '',
      productsEndpoint: '',
    };
    setFormData(defaultConfig);
    updateConfig(defaultConfig);
    toast({
      title: "Configurações resetadas",
      description: "As configurações foram resetadas para os valores padrão.",
      variant: "destructive",
    });
  };

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Configurações</h1>
        <p className="text-muted-foreground">
          Configure os dados necessários para a integração com o Hub.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Dados de Integração
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="appClientId">APP_CLIENT_ID *</Label>
              <Input
                id="appClientId"
                value={formData.appClientId}
                onChange={(e) => handleInputChange('appClientId', e.target.value)}
                placeholder="Digite o ID do cliente da aplicação"
              />
              <p className="text-sm text-muted-foreground">
                Identificador único fornecido pelo Hub para sua aplicação.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="callbackUrl">URL de Callback *</Label>
              <Input
                id="callbackUrl"
                value={formData.callbackUrl}
                onChange={(e) => handleInputChange('callbackUrl', e.target.value)}
                placeholder="https://seu-dominio.com/callback"
              />
              <p className="text-sm text-muted-foreground">
                URL para onde o Hub redirecionará após a autenticação.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientsEndpoint">Endpoint de Clientes *</Label>
              <Input
                id="clientsEndpoint"
                value={formData.clientsEndpoint}
                onChange={(e) => handleInputChange('clientsEndpoint', e.target.value)}
                placeholder="https://api.hub.com/clients"
              />
              <p className="text-sm text-muted-foreground">
                URL da API para buscar a lista de clientes.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="productsEndpoint">Endpoint de Produtos *</Label>
              <Input
                id="productsEndpoint"
                value={formData.productsEndpoint}
                onChange={(e) => handleInputChange('productsEndpoint', e.target.value)}
                placeholder="https://api.hub.com/products"
              />
              <p className="text-sm text-muted-foreground">
                URL da API para buscar a lista de produtos.
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={handleSave} className="flex-1">
              <Save className="w-4 h-4 mr-2" />
              Salvar Configurações
            </Button>
            
            <Button variant="outline" onClick={handleReset}>
              Resetar
            </Button>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Informações Importantes:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Todos os campos marcados com * são obrigatórios</li>
              <li>• Os dados são salvos localmente no seu navegador</li>
              <li>• A URL de callback deve estar registrada no Hub</li>
              <li>• Os endpoints devem retornar dados no formato JSON especificado</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}