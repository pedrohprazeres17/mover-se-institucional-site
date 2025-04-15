
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const bannerImages = [
  {
    url: "/lovable-uploads/5c3c58f3-f5e1-455c-965c-f27a8303c16b.png",
    alt: "Projeto Mover-se"
  },
  {
    url: "/lovable-uploads/b925a13c-5ed5-4cdb-84e6-62a2f0008c58.png",
    alt: "FAE Runners"
  }
];

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/cadastro');
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
            <Carousel 
              className="w-full max-w-xl mx-auto" 
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                skipSnaps: false,
                startIndex: 0,
                watchDrag: false,
                duration: 3000,
                watchResize: true,
                inViewThreshold: 1,
              }}
            >
              <CarouselContent>
                {bannerImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-64 object-contain bg-white"
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
