import { useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { apiRequest } from "@/lib/queryClient";
import { 
  FolderOpen, 
  FileText, 
  Mail, 
  Eye, 
  LogOut,
  Settings,
  Plus,
  Inbox
} from "lucide-react";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { isAuthenticated, isLoading } = useAuth();

  const { data: stats } = useQuery({
    queryKey: ["/api/admin/stats"],
    enabled: isAuthenticated,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest("POST", "/api/admin/logout");
    },
    onSuccess: () => {
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully.",
      });
      setLocation("/admin");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/admin");
    }
  }, [isAuthenticated, isLoading, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const dashboardCards = [
    {
      title: "Total Projects",
      value: (stats && typeof stats.projects === 'number') ? stats.projects : 0,
      icon: FolderOpen,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      action: () => setLocation("/admin/projects"),
      actionLabel: "Manage Projects"
    },
    {
      title: "Blog Posts",
      value: (stats && typeof stats.blogs === 'number') ? stats.blogs : 0,
      icon: FileText,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      action: () => setLocation("/admin/blogs"),
      actionLabel: "Manage Blog"
    },
    {
      title: "Messages",
      value: (stats && typeof stats.messages === 'number') ? stats.messages : 0,
      icon: Mail,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      action: () => setLocation("/admin/messages"),
      actionLabel: "View Messages"
    },
    {
      title: "Unread Messages",
      value: (stats && typeof stats.unreadMessages === 'number') ? stats.unreadMessages : 0,
      icon: Inbox,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      action: () => setLocation("/admin/messages"),
      actionLabel: "View Inbox"
    }
  ];

  const quickActions = [
    {
      title: "Manage Projects",
      description: "Add, edit, or delete portfolio projects",
      icon: Settings,
      href: "/admin/projects",
      color: "bg-primary hover:bg-primary/90"
    },
    {
      title: "Manage Blog",
      description: "Create and edit blog posts",
      icon: Plus,
      href: "/admin/blogs",
      color: "bg-secondary hover:bg-secondary/90"
    },
    {
      title: "View Messages",
      description: "Check contact form submissions",
      icon: Inbox,
      href: "/admin/messages",
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard</h2>
          <Button 
            variant="destructive" 
            onClick={handleLogout}
            disabled={logoutMutation.isPending}
          >
            <LogOut className="w-4 h-4 mr-2" />
            {logoutMutation.isPending ? "Logging out..." : "Logout"}
          </Button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {dashboardCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{card.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                    </div>
                    <div className={`${card.bgColor} p-3 rounded-full`}>
                      <IconComponent className={`${card.iconColor} w-6 h-6`} />
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-3 w-full"
                    onClick={card.action}
                  >
                    {card.actionLabel}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{action.title}</h3>
                  <p className="text-gray-600 mb-4">{action.description}</p>
                  <Button 
                    className={action.color}
                    onClick={() => setLocation(action.href)}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {action.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
