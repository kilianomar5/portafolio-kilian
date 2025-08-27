import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, MapPin, Phone } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { Links } from "@/data/links";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = {
      access_key: "deafb91f-f38c-469c-8887-7e4088415608",
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Mensaje no enviado");

      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por tu mensaje. Me pondré en contacto contigo pronto.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "No se pudo enviar el mensaje",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-14 bg-background">
      <div className="section-container">
        <h2 className="section-heading">Contáctame</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          ¿Tienes alguna pregunta o quieres trabajar juntos? No dudes en enviarme un
          mensaje. ¡Me encantaría saber de ti!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Información de contacto
              </h3>
              <p className="text-muted-foreground">
                Completa el formulario y me pondré en contacto contigo lo antes posible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    <a href={`mailto:${Links.emailonly}`}>{Links.emailonly}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Teléfono</h4>
                  <p className="text-sm text-muted-foreground">
                    <span>{Links.phone}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Ubicación</h4>
                  <p className="text-sm text-muted-foreground">
                    {Links.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Sígueme en mis redes 
              </h3>
              <div className="flex space-x-4">
                <a
                  href={Links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={Links.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaDiscord size={20} />
                </a>
                <a
                  href={Links.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form
              className="space-y-6 bg-card p-6 rounded-lg shadow-sm border border-border"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="6c14b370-ac51-45bc-b933-1a3ed381b3d1"
              />
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Escribe tu nombre..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Escribe tu correo electrónico..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="¿En qué puedo ayudarte?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
