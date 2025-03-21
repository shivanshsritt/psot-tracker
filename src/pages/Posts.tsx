
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, FilterX } from 'lucide-react';

const Posts = () => {
  // Sample posts data
  const allPosts = [
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
    {
      id: '3',
      title: 'Company Named Top Workplace for 2023',
      content: "We're honored to be recognized as one of the top workplaces for 2023. This achievement reflects our commitment to creating a positive and innovative work environment.",
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Company News',
      date: 'May 8, 2023',
    },
    {
      id: '4',
      title: 'New Partnership Announcement',
      content: "We're thrilled to announce our new strategic partnership with Industry Leader Inc. Together, we'll be working to revolutionize the industry with groundbreaking solutions.",
      image: 'https://images.unsplash.com/photo-1553484771-11998c592b9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Partnership',
      date: 'May 5, 2023',
    },
    {
      id: '5',
      title: 'Tips for Remote Work Productivity',
      content: 'Our team has compiled their best practices for staying productive while working remotely. Check out these helpful tips to boost your efficiency and maintain work-life balance.',
      image: 'https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Advice',
      date: 'April 28, 2023',
    },
    {
      id: '6',
      title: 'Industry Conference Highlights',
      content: 'Our team attended the Global Tech Summit last week. Here are the key takeaways and trends that will shape the industry in the coming year.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Event',
      date: 'April 22, 2023',
    },
  ];

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Get unique categories for filter
  const categories = ['all', ...new Set(allPosts.map(post => post.category))];
  
  // Filter posts based on search term and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Page Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-display font-bold mb-2">Content Library</h1>
            <p className="text-gray-600">Browse and share pre-approved content across your social networks.</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4 animate-slide-up">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search posts..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full sm:w-48">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {(searchTerm || categoryFilter !== 'all') && (
                <Button 
                  variant="outline" 
                  className="flex items-center gap-1" 
                  onClick={resetFilters}
                >
                  <FilterX className="h-4 w-4" />
                  <span>Reset</span>
                </Button>
              )}
            </div>
            
            <div className="text-sm text-gray-500">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
              {filteredPosts.map((post, index) => (
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
          ) : (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-gray-500 text-lg">No posts matching your filters.</p>
              <Button 
                variant="link" 
                className="mt-2" 
                onClick={resetFilters}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Posts;
