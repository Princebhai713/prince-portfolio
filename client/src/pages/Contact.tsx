import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertMessage) => {
      return await apiRequest("POST", "/api/messages", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertMessage) => {
    mutation.mutate(data);
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      bgColor: "bg-gray-100 hover:bg-gray-200"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com",
      bgColor: "bg-gray-100 hover:bg-gray-200"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      bgColor: "bg-gray-100 hover:bg-gray-200"
    },
    {
      icon: Globe,
      label: "Website",
      href: "#",
      bgColor: "bg-gray-100 hover:bg-gray-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          className="h-12" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          className="h-12" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project inquiry, collaboration, etc." 
                          className="h-12" 
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project or inquiry..."
                          rows={6}
                          className="resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={mutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {mutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-8">
            <div className="gradient-primary p-8 rounded-2xl text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>pb6620113@email.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>+91 8176899837</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${social.bgColor} p-4 rounded-lg text-center transition-colors group`}
                  >
                    <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-gray-900 mb-2 mx-auto" />
                    <p className="text-sm font-medium text-gray-700">{social.label}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
