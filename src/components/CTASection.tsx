import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Setup gratuito em menos de 5 minutos",
    "Suporte técnico especializado incluído", 
    "Integração com as principais plataformas",
    "Sem taxas de setup ou mensalidades iniciais"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pronto para começar?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Conecte sua loja ao Hub Vello hoje mesmo e veja seus resultados crescerem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6 group"
            >
              Conectar Loja Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
            >
              Falar com Especialista
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            Mais de 1.000 lojas conectadas no último mês • Sem compromisso
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;