import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageSquare,
  User,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { XIcon } from '@/components/ui/x-logo';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/lib/emailjs-config';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { serviceId, templateId, publicKey } = emailjsConfig;

      // Adiciona a data e hora atual ao formulário
      const currentDate = new Date();
      const formattedDate = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(currentDate);

      if (formRef.current) {
        // Adiciona o campo time ao formulário
        const timeInput = document.createElement('input');
        timeInput.type = 'hidden';
        timeInput.name = 'time';
        timeInput.value = formattedDate;
        formRef.current.appendChild(timeInput);

        // Adiciona o campo from_name como cópia do name para compatibilidade
        const fromNameInput = document.createElement('input');
        fromNameInput.type = 'hidden';
        fromNameInput.name = 'from_name';
        fromNameInput.value = formData.name;
        formRef.current.appendChild(fromNameInput);

        // Adiciona o campo reply_to como cópia do email para compatibilidade
        const replyToInput = document.createElement('input');
        replyToInput.type = 'hidden';
        replyToInput.name = 'reply_to';
        replyToInput.value = formData.email;
        formRef.current.appendChild(replyToInput);

        console.log("Enviando formulário com os dados:", {
          serviceId,
          templateId,
          publicKey,
          formData,
          time: formattedDate
        });

        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );

        // Remove os campos adicionados após o envio
        formRef.current.removeChild(timeInput);
        formRef.current.removeChild(fromNameInput);
        formRef.current.removeChild(replyToInput);

        toast({
          title: language === 'pt' ? "Mensagem enviada com sucesso!" : "Message sent successfully!",
          description: language === 'pt' 
            ? "Obrigado pelo contato. Retornarei em breve." 
            : "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: language === 'pt' ? "Erro ao enviar mensagem" : "Error sending message",
        description: language === 'pt'
          ? "Por favor, tente novamente ou entre em contato diretamente por email."
          : "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alexsanderaugusto142019@gmail.com',
      href: 'mailto:alexsanderaugusto142019@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(31) 98256-8421',
      href: 'tel:+5531982568421'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Belo Horizonte, Minas Gerais',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Alexsander532',
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alexsander-augusto-lima-9b49221b4',
      color: 'hover:text-blue-400'
    },
    {
      icon: XIcon,
      label: 'X (Twitter)',
      href: 'https://x.com/AlexDev2025',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`lg:col-span-1 w-full transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="glass-card hover-glow h-fit w-full">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-5 md:mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 md:w-7 md:h-7 text-primary mr-2 md:mr-3" />
                  Let's Connect
                </h3>
                
                <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start group max-w-full">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform shrink-0">
                        <info.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                      </div>
                      <div className="overflow-hidden max-w-[calc(100%-3rem)]">
                        <p className="text-xs md:text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="font-medium hover:text-primary transition-colors text-xs sm:text-sm md:text-base break-all"
                            style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-xs sm:text-sm md:text-base break-words">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-3 md:mb-4">Follow Me</h4>
                  <div className="flex space-x-3 md:space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 md:p-3 rounded-full glass-card hover:bg-primary/10 hover:border-primary/40 
                        transition-all duration-300 hover-glow group"
                      >
                        <social.icon className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-5 sm:mt-6 md:mt-8 p-2 sm:p-3 md:p-4 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success mr-2" />
                    <span className="text-success font-medium text-xs sm:text-sm md:text-base">Available for freelance projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <Card className="glass-card hover-glow">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-5 md:mb-6 flex items-center">
                  <Send className="w-6 h-6 md:w-7 md:h-7 text-primary mr-2 md:mr-3" />
                  Send a Message
                </h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="name" className="flex items-center text-xs md:text-sm">
                        <User className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass-card border-glass-border focus:border-primary/50 text-sm md:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="email" className="flex items-center text-xs md:text-sm">
                        <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass-card border-glass-border focus:border-primary/50 text-sm md:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="subject" className="text-xs md:text-sm">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="glass-card border-glass-border focus:border-primary/50 text-sm md:text-base"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="message" className="text-xs md:text-sm">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="glass-card border-glass-border focus:border-primary/50 min-h-[120px] md:min-h-[150px] text-sm md:text-base"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <div className="pt-2 md:pt-4">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-gradient-primary hover-glow px-6 py-2 md:py-3 text-sm md:text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">Sending...</span>
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Response time:</strong> I typically respond within 24 hours. 
                    For urgent inquiries, feel free to reach out directly via phone or email.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;