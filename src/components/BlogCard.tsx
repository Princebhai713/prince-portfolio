import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import type { Blog } from "@shared/schema";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
      {blog.imageUrl && (
        <img 
          src={blog.imageUrl} 
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{formatDate(blog.createdAt!)}</span>
          <span className="mx-2">•</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{blog.readTime} min read</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <button className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
          Read More 
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </CardContent>
    </Card>
  );
}
