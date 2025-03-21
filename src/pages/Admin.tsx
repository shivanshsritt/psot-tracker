import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { StatCard } from '@/components/StatCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { 
  Users, BookOpen, MessageSquare, ArrowUpRight, Download, 
  BarChart as BarChartIcon, PieChart as PieChartIcon, Activity, 
  CalendarDays, Globe, ShoppingCart, DollarSign, CreditCard,
  RefreshCw, Settings, Search
} from 'lucide-react';

// Sample data for statistics
const userStats = {
  totalUsers: 28423,
  activeUsers: 18543,
  newUsers: 2845,
  userGrowth: 14.5
};

const contentStats = {
  totalPosts: 6524,
  publishedPosts: 5842,
  draftPosts: 682,
  totalViews: 1284532
};

const engagementStats = {
  comments: 28541,
  likes: 145236,
  shares: 36524,
  avgEngagementRate: 8.2
};

const revenueStats = {
  totalRevenue: 142536,
  monthlyRevenue: 24536,
  subscriptions: 1845,
  conversionRate: 3.2
};

// Sample data for charts
const userActivityData = [
  { name: 'Jan', active: 2400, new: 1200 },
  { name: 'Feb', active: 3100, new: 1300 },
  { name: 'Mar', active: 4200, new: 1400 },
  { name: 'Apr', active: 3800, new: 1800 },
  { name: 'May', active: 4900, new: 2000 },
  { name: 'Jun', active: 5700, new: 2400 },
  { name: 'Jul', active: 6200, new: 2600 },
  { name: 'Aug', active: 6800, new: 2900 },
  { name: 'Sep', active: 7200, new: 3100 },
  { name: 'Oct', active: 7800, new: 3400 },
  { name: 'Nov', active: 8200, new: 3600 },
  { name: 'Dec', active: 9000, new: 4000 },
];

const revenueData = [
  { name: 'Jan', revenue: 14000 },
  { name: 'Feb', revenue: 16500 },
  { name: 'Mar', revenue: 18000 },
  { name: 'Apr', revenue: 21000 },
  { name: 'May', revenue: 19500 },
  { name: 'Jun', revenue: 22000 },
  { name: 'Jul', revenue: 25000 },
  { name: 'Aug', revenue: 28000 },
  { name: 'Sep', revenue: 30000 },
  { name: 'Oct', revenue: 27500 },
  { name: 'Nov', revenue: 32000 },
  { name: 'Dec', revenue: 35000 },
];

const sourceData = [
  { name: 'Organic Search', value: 45 },
  { name: 'Direct', value: 25 },
  { name: 'Social', value: 18 },
  { name: 'Referral', value: 12 },
];

const COLORS = ['#8B5CF6', '#10B981', '#F59E0B', '#EF4444'];

// Sample data for tables
const recentUsers = [
  { id: 1, name: 'John Smith', email: 'john@example.com', joined: '2023-12-15', status: 'active' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', joined: '2023-12-14', status: 'active' },
  { id: 3, name: 'Michael Brown', email: 'michael@example.com', joined: '2023-12-14', status: 'pending' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', joined: '2023-12-13', status: 'active' },
  { id: 5, name: 'Robert Wilson', email: 'robert@example.com', joined: '2023-12-13', status: 'inactive' },
];

const recentTransactions = [
  { id: 1, user: 'John Smith', amount: 49.99, date: '2023-12-15', status: 'complete' },
  { id: 2, name: 'Sarah Johnson', amount: 99.99, date: '2023-12-14', status: 'complete' },
  { id: 3, name: 'Michael Brown', amount: 149.99, date: '2023-12-14', status: 'pending' },
  { id: 4, name: 'Emily Davis', amount: 29.99, date: '2023-12-13', status: 'complete' },
  { id: 5, name: 'Robert Wilson', amount: 79.99, date: '2023-12-13', status: 'failed' },
];

const Admin = () => {
  const [dateRange, setDateRange] = useState('30days');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Admin Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">Overview of your platform metrics and statistics</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-[180px]">
                  <CalendarDays className="h-4 w-4 mr-2" />
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
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard 
              title="Total Users"
              value={userStats.totalUsers.toLocaleString()}
              icon={<Users className="w-6 h-6 text-violet-500" />}
              change={userStats.userGrowth}
              changeText="vs. last month"
            />
            <StatCard 
              title="Total Content"
              value={contentStats.totalPosts.toLocaleString()}
              icon={<BookOpen className="w-6 h-6 text-emerald-500" />}
              change={8.3}
              changeText="vs. last month"
            />
            <StatCard 
              title="Engagement"
              value={engagementStats.comments.toLocaleString()}
              icon={<MessageSquare className="w-6 h-6 text-amber-500" />}
              change={12.5}
              changeText="vs. last month"
            />
            <StatCard 
              title="Revenue"
              value={`$${revenueStats.totalRevenue.toLocaleString()}`}
              icon={<DollarSign className="w-6 h-6 text-blue-500" />}
              change={15.2}
              changeText="vs. last month"
            />
          </div>

          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Content
              </TabsTrigger>
              <TabsTrigger value="revenue" className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Revenue
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* User Activity Chart */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <BarChartIcon className="h-5 w-5 text-violet-500" />
                        User Activity
                      </span>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-72">
                      <LineChart data={userActivityData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="active" 
                          name="Active Users"
                          stroke="#8B5CF6" 
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="new" 
                          name="New Users"
                          stroke="#10B981" 
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Revenue Chart */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-blue-500" />
                        Revenue
                      </span>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-72">
                      <BarChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                        />
                        <Bar 
                          dataKey="revenue" 
                          name="Revenue ($)"
                          fill="#3B82F6" 
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* User Sources */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Globe className="h-5 w-5 text-amber-500" />
                      Traffic Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sourceData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {sourceData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Users */}
                <Card className="lg:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-violet-500" />
                        Recent Users
                      </span>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => navigate('/users')}>
                          View All
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentUsers.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.joined}</TableCell>
                            <TableCell>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                ${user.status === 'active' ? 'bg-green-100 text-green-800' : 
                                  user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-gray-100 text-gray-800'}`}>
                                {user.status}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Other tabs placeholders */}
            <TabsContent value="users">
              <Card className="p-8">
                <CardContent className="text-center pt-6">
                  <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Detailed user metrics and management will be available in a future update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="content">
              <Card className="p-8">
                <CardContent className="text-center pt-6">
                  <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Content analytics and management will be available in a future update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="revenue">
              <Card className="p-8">
                <CardContent className="text-center pt-6">
                  <DollarSign className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Detailed revenue reports will be available in a future update.
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

export default Admin;
