import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Palette, Droplet } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes: { name: "azul" | "oscuro" | "morado"; icon: JSX.Element; label: string }[] = [
    { name: "azul", icon: <Droplet className="h-4 w-4 text-blue-500" />, label: "Azul" },
    { name: "oscuro", icon: <Moon className="h-4 w-4" />, label: "Oscuro" },
    { name: "morado", icon: <Palette className="h-4 w-4" />, label: "Morado" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <motion.div whileHover={{ rotate: 15 }} whileTap={{ scale: 0.9 }}>
            {theme === "oscuro" && <Moon className="h-4 w-4" />}
            {theme === "azul" && <Droplet className="h-4 w-4 text-blue-500" />}
            {theme === "morado" && <Palette className="h-4 w-4" />}
          </motion.div>
          <span className="sr-only">Elegir tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-1">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={theme === t.name ? "bg-accent " : ""}
          >
            <div className="flex items-center">
              {t.icon}
              <span className="ml-2">{t.label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
