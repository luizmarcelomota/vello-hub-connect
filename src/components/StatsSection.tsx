const StatsSection = () => {
  const stats = [
    {
      number: "10K+",
      label: "Lojas Conectadas",
      description: "Empresas confiam no Hub Vello"
    },
    {
      number: "250M+",
      label: "Transações",
      description: "Processadas com segurança"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Disponibilidade garantida"
    },
    {
      number: "24/7",
      label: "Suporte",
      description: "Atendimento especializado"
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            Números que <span className="bg-gradient-primary bg-clip-text text-transparent">impressionam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a milhares de empresários que já transformaram seus negócios
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;