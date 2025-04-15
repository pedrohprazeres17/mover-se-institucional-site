
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "Estudante usando laptop"
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Laptop em uma mesa"
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Estudante estudando"
  },
  {
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    alt: "Ambiente relaxante"
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Natureza e bem-estar"
  }
];

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contato');
  };

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
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={handleGetStarted}
            >
              Comece Agora <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1">
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {bannerImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
