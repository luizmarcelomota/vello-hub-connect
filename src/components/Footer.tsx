import { ShoppingBag, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Hub Vello</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              A plataforma completa para conectar e gerenciar seu e-commerce 
              com eficiência e resultados comprovados.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Produto</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentação</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@hubvello.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 Hub Vello. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;