
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Facebook, Linkedin, Twitter, Share2, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface PostCardProps {
  id: string;
  title: string;
  content: string;
  image?: string;
  category: string;
  date: string;
}

const PostCard = ({ id, title, content, image, category, date }: PostCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast.success('Post copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareOnPlatform = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    let url = '';
    
    // In a real implementation, these would open the respective sharing dialogs
    // with the prepared content. For now, we'll just show a toast message.
    switch (platform) {
      case 'twitter':
        toast.success('Sharing on Twitter');
        break;
      case 'facebook':
        toast.success('Sharing on Facebook');
        break;
      case 'linkedin':
        toast.success('Sharing on LinkedIn');
        break;
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="p-0">
        {image && (
          <div className="relative h-48 w-full overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
            <div className="absolute top-2 left-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-md text-primary">
                {category}
              </span>
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent className={cn("p-6", !image && "pt-6")}>
        <div className="mb-1 text-xs text-gray-500">{date}</div>
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{content}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-wrap gap-2">
        <Button 
          size="sm" 
          variant="outline" 
          className="flex items-center gap-1 flex-1" 
          onClick={() => handleShareOnPlatform('twitter')}
        >
          <Twitter className="h-4 w-4 text-[#1DA1F2]" />
          <span className="text-xs font-medium">Twitter</span>
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          className="flex items-center gap-1 flex-1" 
          onClick={() => handleShareOnPlatform('facebook')}
        >
          <Facebook className="h-4 w-4 text-[#1877F2]" />
          <span className="text-xs font-medium">Facebook</span>
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          className="flex items-center gap-1 flex-1" 
          onClick={() => handleShareOnPlatform('linkedin')}
        >
          <Linkedin className="h-4 w-4 text-[#0A66C2]" />
          <span className="text-xs font-medium">LinkedIn</span>
        </Button>
        <Button 
          size="sm" 
          variant="secondary" 
          className="flex items-center gap-1 w-full mt-2" 
          onClick={handleCopyToClipboard}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="text-xs font-medium">{copied ? 'Copied!' : 'Copy Text'}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
