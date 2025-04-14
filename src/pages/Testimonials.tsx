
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    course: "Psicologia",
    text: "O Programa SER mudou minha vida universitária. As atividades me ajudaram a lidar melhor com o estresse e fazer novos amigos.",
  },
  {
    name: "João Santos",
    course: "Engenharia",
    text: "Participar do grupo de corrida me ajudou não só na saúde física, mas também na mental. Recomendo a todos os estudantes!",
  },
  {
    name: "Ana Costa",
    course: "Medicina",
    text: "As aulas de yoga são um momento de paz na minha semana agitada. O programa é essencial para manter o equilíbrio.",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 gradient-text">Depoimentos</h1>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <p className="text-lg text-gray-600 italic mb-4">
                          "{testimonial.text}"
                        </p>
                        <div className="text-right">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-gray-500">{testimonial.course}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
