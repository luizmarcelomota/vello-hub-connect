import { Sidebar } from "@/components/Sidebar";
import { IntegrationContent } from "@/components/IntegrationContent";

const Integration = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 bg-muted/20">
        <IntegrationContent />
      </main>
    </div>
  );
};

export default Integration;