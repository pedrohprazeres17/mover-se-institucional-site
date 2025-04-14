
import { 
  Activity, 
  HeartPulse, 
  Footprints,
  Gamepad2, 
  Dices,
  Music
} from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const activities = [
  {
    title: "Yoga",
    description: "Práticas de yoga para equilíbrio corpo e mente",
    icon: Activity,
  },
  {
    title: "Alongamento e Mobilidade",
    description: "Exercícios para melhorar a flexibilidade e mobilidade",
    icon: HeartPulse,
  },
  {
    title: "Caminhada e Corrida",
    description: "Grupo de corrida e caminhada ao ar livre",
    icon: Footprints,
  },
  {
    title: "Jogos Recreativos",
    description: "Atividades lúdicas e jogos em grupo",
    icon: Gamepad2,
  },
  {
    title: "Jogos de Tabuleiro",
    description: "Momentos de diversão e estratégia",
    icon: Dices,
  },
  {
    title: "Dança",
    description: "Expressão corporal através da dança",
    icon: Music,
  },
];

const Activities = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 gradient-text">Nossas Atividades</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <Card key={activity.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <activity.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{activity.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
