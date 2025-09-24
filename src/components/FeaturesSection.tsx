import { Card } from "@/components/ui/card";
import { 
  Store, 
  BarChart3, 
  Smartphone, 
  Headphones, 
  Zap, 
  Shield 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Store,
      title: "Integração Completa",
      description: "Conecte sua loja em minutos com nossa API avançada e interface intuitiva."
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Monitore vendas, clientes e performance com relatórios detalhados em tempo real."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Gerencie seu negócio de qualquer lugar com nossa plataforma responsiva."
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Nossa equipe está sempre pronta para ajudar você a crescer seu negócio."
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Automatize processos repetitivos e foque no que realmente importa."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Seus dados e dos seus clientes protegidos com criptografia de ponta."
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            Recursos que fazem a diferença
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra como o Hub Vello pode transformar seu e-commerce com ferramentas 
            poderosas e integração seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-primary/10"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;