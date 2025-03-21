
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetricsCard from '@/components/MetricsCard';
import PostCard from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Share2, Users, BarChart2, ExternalLink, ThumbsUp, MessageSquare, RefreshCw } from 'lucide-react';

const Dashboard = () => {
  // Sample data for metrics
  const metrics = [
    {
      title: 'Total Shares',
      value: 1285,
      icon: <Share2 className="h-5 w-5 text-blue-600" />,
      change: 12.5,
    },
    {
      title: 'Engagement Rate',
      value: 4.8,
      icon: <ThumbsUp className="h-5 w-5 text-blue-600" />,
      change: 2.3,
      isPercentage: true,
    },
    {
      title: 'Click-through Rate',
      value: 3.2,
      icon: <ExternalLink className="h-5 w-5 text-blue-600" />,
      change: -0.8,
      isPercentage: true,
    },
    {
      title: 'Active Users',
      value: 48,
      icon: <Users className="h-5 w-5 text-blue-600" />,
      change: 5,
    },
  ];

  // Sample data for recent posts
  const recentPosts = [
    {
      id: '1',
      title: 'Introducing Our New Product Line',
      content: "We're excited to announce the launch of our innovative new product line that's designed to transform how you work. Check out the details in the link below!",
      image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Product',
      date: 'May 15, 2023',
    },
    {
      id: '2',
      title: 'Join Our Upcoming Webinar',
      content: "Don't miss our webinar on \"Future Trends in Technology\" featuring industry experts. Register now to secure your spot!",
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Event',
      date: 'May 10, 2023',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 animate-fade-in">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">Dashboard</h1>
              <p className="text-gray-600">Overview of your sharing activity and engagement metrics.</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <RefreshCw className="h-4 w-4" />
                <span>Refresh</span>
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                <span>Share New Post</span>
              </Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-slide-up">
            {metrics.map((metric, index) => (
              <MetricsCard
                key={index}
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                change={metric.change}
                isPercentage={metric.isPercentage}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Posts */}
            <div className="lg:col-span-2 space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Posts</h2>
                <Link to="/posts" className="text-primary text-sm hover:underline">
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    image={post.image}
                    category={post.category}
                    date={post.date}
                  />
                ))}
              </div>
            </div>

            {/* Quick Links & Stats */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                  <CardDescription>Navigate to key sections</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link 
                    to="/posts" 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium">All Posts</span>
                    <ExternalLink className="h-4 w-4 text-gray-500" />
                  </Link>
                  <Link 
                    to="/metrics" 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium">Detailed Metrics</span>
                    <BarChart2 className="h-4 w-4 text-gray-500" />
                  </Link>
                  <Link 
                    to="/about" 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium">About Platform</span>
                    <Users className="h-4 w-4 text-gray-500" />
                  </Link>
                </CardContent>
              </Card>

              {/* Platform Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Stats</CardTitle>
                  <CardDescription>This month's activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Posts Created</span>
                    <span className="font-medium">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Posts Shared</span>
                    <span className="font-medium">142</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Link Clicks</span>
                    <span className="font-medium">1,245</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Social Reactions</span>
                    <span className="font-medium">847</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
