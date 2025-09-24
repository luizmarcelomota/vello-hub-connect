import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Conecte sua loja ao{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Hub Vello
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A plataforma completa para gerenciar e expandir seu e-commerce. 
                Conecte sua loja, automatize processos e aumente suas vendas com facilidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6 group"
              >
                Conectar Minha Loja
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
              >
                Ver Demonstração
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Setup Rápido</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">100% Seguro</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Mais Vendas</p>
              </div>
            </div>
          </div>

          <div className="lg:order-2">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Hub Vello Platform Interface" 
                className="rounded-2xl shadow-elegant w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;