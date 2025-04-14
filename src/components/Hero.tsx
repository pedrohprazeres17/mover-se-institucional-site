
import { Carousel } from "./ui/carousel";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-b from-accent/50 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Bem-vindo ao <span className="gradient-text">Programa SER</span>
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Promovendo bem-estar e desenvolvimento integral para universitários
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Comece Agora <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1">
            <Card className="overflow-hidden">
              <img
                src="/lovable-uploads/a244de56-85b3-4b36-b51e-055c891a2f43.png"
                alt="Projeto Mover-se"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
