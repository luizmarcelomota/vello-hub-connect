import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stores = [
  {
    id: "vtex",
    name: "VTEX",
    icon: "🔺",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    connected: false,
  },
  {
    id: "nuvemshop",
    name: "Nuvemshop",
    icon: "⭕",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    connected: false,
  },
  {
    id: "olist",
    name: "Olist Tiny",
    icon: "olist",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    connected: false,
  },
  {
    id: "hubvello",
    name: "Hub Vello",
    icon: "🏪",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    connected: false,
  },
];

const comingSoonStores = [
  {
    id: "tray",
    name: "Tray",
    icon: "📦",
    bgColor: "bg-gray-100",
    iconColor: "text-gray-600",
  },
  {
    id: "shopify",
    name: "Shopify",
    icon: "🛍️",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export function IntegrationContent() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-foreground">Integração</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          Últimos 30 dias
        </div>
      </div>

      {/* Connect Store Section */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <div className="w-4 h-4 border border-muted-foreground rounded-sm mr-3"></div>
          <span className="text-lg font-medium text-foreground">Conecte uma loja</span>
        </div>

        {/* Available Stores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {stores.map((store) => (
            <Card key={store.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full ${store.bgColor} flex items-center justify-center mb-4`}>
                  <span className={`text-xl ${store.iconColor}`}>
                    {store.icon}
                  </span>
                </div>
                <h3 className="font-medium text-foreground mb-4">{store.name}</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                >
                  Conectar
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-foreground mb-4">Em breve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {comingSoonStores.map((store) => (
              <Card key={store.id} className="p-6 opacity-60">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full ${store.bgColor} flex items-center justify-center mb-4`}>
                    <span className={`text-xl ${store.iconColor}`}>
                      {store.icon}
                    </span>
                  </div>
                  <h3 className="font-medium text-foreground mb-4">{store.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    Em breve
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}