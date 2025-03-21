
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetricsCard from '@/components/MetricsCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Share2, ThumbsUp, ExternalLink, Users, 
  BarChart2, Twitter, Facebook, Linkedin, 
  Calendar, Download, RefreshCw 
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Metrics = () => {
  // State for time period filter
  const [timePeriod, setTimePeriod] = useState('30days');

  // Sample metrics data
  const overviewMetrics = [
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

  // Sample data for platform metrics
  const platformMetrics = [
    {
      title: 'Twitter Shares',
      value: 624,
      icon: <Twitter className="h-5 w-5 text-[#1DA1F2]" />,
      change: 15.2,
    },
    {
      title: 'Facebook Shares',
      value: 389,
      icon: <Facebook className="h-5 w-5 text-[#1877F2]" />,
      change: 8.7,
    },
    {
      title: 'LinkedIn Shares',
      value: 272,
      icon: <Linkedin className="h-5 w-5 text-[#0A66C2]" />,
      change: 22.3,
    },
  ];

  // Sample data for engagement chart
  const engagementData = [
    { day: 'Mon', shares: 42, likes: 65, clicks: 32 },
    { day: 'Tue', shares: 38, likes: 59, clicks: 36 },
    { day: 'Wed', shares: 55, likes: 80, clicks: 40 },
    { day: 'Thu', shares: 61, likes: 75, clicks: 48 },
    { day: 'Fri', shares: 48, likes: 62, clicks: 38 },
    { day: 'Sat', shares: 32, likes: 45, clicks: 24 },
    { day: 'Sun', shares: 29, likes: 40, clicks: 22 },
  ];

  // Sample data for platform comparison chart
  const platformData = [
    { name: 'Twitter', shares: 624, engagement: 1842, clicks: 920 },
    { name: 'Facebook', shares: 389, engagement: 1250, clicks: 735 },
    { name: 'LinkedIn', shares: 272, engagement: 980, clicks: 590 },
  ];

  // Sample data for top posts table
  const topPosts = [
    { id: 1, title: 'Introducing Our New Product Line', shares: 215, engagement: 426, clicks: 198 },
    { id: 2, title: 'Join Our Upcoming Webinar', shares: 182, engagement: 362, clicks: 154 },
    { id: 3, title: 'Company Named Top Workplace for 2023', shares: 156, engagement: 312, clicks: 136 },
    { id: 4, title: 'New Partnership Announcement', shares: 142, engagement: 284, clicks: 120 },
    { id: 5, title: 'Tips for Remote Work Productivity', shares: 118, engagement: 236, clicks: 96 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Metrics Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 animate-fade-in">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">Engagement Metrics</h1>
              <p className="text-gray-600">Detailed analytics on your content's performance across platforms.</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <Select value={timePeriod} onValueChange={setTimePeriod}>
                <SelectTrigger className="w-[180px]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <RefreshCw className="h-4 w-4" />
                  <span>Refresh</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Overview Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-slide-up">
            {overviewMetrics.map((metric, index) => (
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

          {/* Tabs for different metric views */}
          <Tabs defaultValue="overview" className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="platforms">Platforms</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Engagement Over Time Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Engagement Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={engagementData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="shares" 
                          stroke="#3b82f6" 
                          strokeWidth={2}
                          activeDot={{ r: 8 }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="likes" 
                          stroke="#10b981" 
                          strokeWidth={2} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="clicks" 
                          stroke="#f59e0b" 
                          strokeWidth={2} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Top Posts Table */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Top Performing Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Post Title</th>
                          <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Shares</th>
                          <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Engagement</th>
                          <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Clicks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topPosts.map((post) => (
                          <tr key={post.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm text-gray-900">{post.title}</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-right">{post.shares}</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-right">{post.engagement}</td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-right">{post.clicks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Platforms Tab */}
            <TabsContent value="platforms" className="space-y-8">
              {/* Platform Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {platformMetrics.map((metric, index) => (
                  <MetricsCard
                    key={index}
                    title={metric.title}
                    value={metric.value}
                    icon={metric.icon}
                    change={metric.change}
                  />
                ))}
              </div>

              {/* Platform Comparison Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Platform Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={platformData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="shares" fill="#3b82f6" name="Shares" />
                        <Bar dataKey="engagement" fill="#10b981" name="Engagement" />
                        <Bar dataKey="clicks" fill="#f59e0b" name="Clicks" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Content Tab - Placeholder for future implementation */}
            <TabsContent value="content">
              <Card className="p-8 text-center">
                <CardContent>
                  <BarChart2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Detailed content performance metrics will be available in a future update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Users Tab - Placeholder for future implementation */}
            <TabsContent value="users">
              <Card className="p-8 text-center">
                <CardContent>
                  <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    User activity and engagement metrics will be available in a future update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Metrics;
