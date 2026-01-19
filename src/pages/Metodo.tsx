import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Metodo = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Método FULL
        </h1>
        <p className="text-muted-foreground mb-8">
          Landing page em construção. Vamos criar em seguida!
        </p>
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Lobby
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Metodo;
