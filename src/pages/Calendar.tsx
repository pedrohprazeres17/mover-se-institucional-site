
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const events = [
  {
    date: "2025-04-15",
    title: "Aula de Yoga",
    time: "14:00",
  },
  {
    date: "2025-04-16",
    title: "Grupo de Corrida",
    time: "07:00",
  },
  {
    date: "2025-04-17",
    title: "Jogos de Tabuleiro",
    time: "16:00",
  },
];

const Calendar = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 gradient-text">Calendário de Atividades</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <CalendarComponent mode="single" className="rounded-md border" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-6">Próximos Eventos</h2>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={`${event.date}-${event.title}`}
                    className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <p className="text-gray-600">
                      Data: {new Date(event.date).toLocaleDateString('pt-BR')}
                    </p>
                    <p className="text-gray-600">Horário: {event.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;
