import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Eye, Mail, Code, Rocket, Users } from "lucide-react";

export default function Home() {
  const { data: projects } = useQuery({
    queryKey: ["/api/projects/featured"],
  });

  const { data: blogs } = useQuery({
    queryKey: ["/api/blogs"],
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Full Stack
                <span className="block text-gradient">
                  Developer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Building exceptional web experiences with modern technologies. 
                Passionate about clean code, user experience, and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/projects">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all">
                    <Eye className="w-4 h-4 mr-2" />
                    View Projects
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Alex Johnson - Full Stack Developer" 
                className="w-80 h-80 rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-white bg-opacity-20 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse hidden lg:block"></div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{Array.isArray(projects) ? projects.length : 0}+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">30+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
