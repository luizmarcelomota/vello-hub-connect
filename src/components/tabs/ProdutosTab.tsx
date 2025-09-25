import { Package, RefreshCw } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function ProdutosTab() {
  const { products, isConnected, fetchProducts } = useApp();

  if (!isConnected) {
    return (
      <div className="p-6 max-w-4xl">
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Conecte-se ao Hub
          </h2>
          <p className="text-muted-foreground">
            Para visualizar os produtos, é necessário estar conectado ao Hub.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Produtos</h1>
          <p className="text-muted-foreground">
            Lista de produtos sincronizados do Hub.
          </p>
        </div>
        
        <Button onClick={fetchProducts} variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          Atualizar
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Lista de Produtos ({products.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {products.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Nenhum produto encontrado.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}