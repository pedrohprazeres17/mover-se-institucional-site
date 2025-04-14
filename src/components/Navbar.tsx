
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { title: "Início", href: "/" },
    { title: "Sobre", href: "/sobre" },
    { title: "Atividades", href: "/atividades" },
    { title: "Calendário", href: "/calendario" },
    { title: "Depoimentos", href: "/depoimentos" },
    { title: "Contato", href: "/contato" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold gradient-text">
          Mover-se
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-lg text-gray-600 hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
