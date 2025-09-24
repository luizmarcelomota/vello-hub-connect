import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Hub Vello
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#recursos" className="text-foreground hover:text-primary transition-colors">
            Recursos
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:block">
            Entrar
          </Button>
          <Button variant="default" className="bg-gradient-primary hover:shadow-glow">
            Conectar Loja
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;