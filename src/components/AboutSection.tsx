import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Download,
} from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";

const AboutSection = () => {
  const resumeUrl = Links.resume;
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handledownload = () => {
    toast({
      title: "Descargando CV",
      description: "Tu descarga comenzará en breve.",
    });
  };

  return (
    <section id="sobre-mi" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          Sobre Mí
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Biografía
              </h3>
              <p className="text-muted-foreground">
                Estudiante de ingeniería de software apasionado por diseñar soluciones innovadoras.
                Especializándome en desarrollo full-stack, combino
                habilidades técnicas con pensamiento creativo para
                crear aplicaciones centradas en el usuario. Me interesa profundamente la informática,
                disfruto armando PCs y explorando nuevas tecnologías y soy un aficionado a los videojuegos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />{" "}
                      Educación
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium">Ciclo Superior en Desarrollo de Aplicaciones Multiplataformas</p>
                      <p className="text-sm text-muted-foreground">
                        IES San Juan de la Rambla
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2024 - Presente
                      </p>
                      <p className="text-sm text-muted-foreground">
                        También hice un Ciclo Medio de Sistemas Microinformáticos y Redes
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" /> Experiencia
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">
                          Ciclo Medio en Sistemas Microinformáticos y Redes
                        </p>
                        <p className="text-sm text-muted-foreground">
                          IES San Juan de la Rambla
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Desde septiembre de 2022 hasta junio de 2024
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Ciclo Superior de Desarrollo de Aplicaciones Multiplataformas</p>
                        <p className="text-sm text-muted-foreground">
                          IES San Juan de la Rambla
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Desde septiembre de 2024 hasta junio de 2026 (en curso)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/me.png"
                  alt="Aathif Zahir"
                  loading="lazy"
                />
                <AvatarFallback>AZ</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                3.41 GPA
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold">Kilian Omar</h3>
              <p className="text-muted-foreground">
                Estudiante de Ingeniería de Software
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <Badge variant="outline" className="bg-primary/10">
                HTML
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                JS
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Python
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                SQL
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="gap-2" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Curr-culum-Kilian-Omar-Rodr-guez-D-az.pdf">
                  <Download className="w-4 h-4" />
                  Descargar Curriculum
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
