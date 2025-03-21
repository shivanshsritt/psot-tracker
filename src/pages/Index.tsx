
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Share2, BarChart2, Users, Shield } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Share2 className="h-6 w-6 text-blue-500" />,
      title: 'Streamlined Sharing',
      description: 'Quickly share pre-approved content across multiple social media platforms with just a few clicks.'
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      title: 'Engagement Metrics',
      description: 'Track likes, shares, and click-through rates to measure the impact of your social media presence.'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: 'Team Collaboration',
      description: 'Enable your entire team to amplify your company\'s message consistently and effectively.'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: 'Brand Protection',
      description: 'Maintain brand consistency with pre-approved content managed by your marketing team.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-slide-up">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                Empower Your Team's Social Presence
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Share <span className="text-primary">Pre-approved</span> Content on Social Media
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Make it easy for your employees to share company content and track engagement metrics across platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative order-first md:order-last animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
                  alt="Dashboard preview"
                  className="object-cover w-full h-full opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
              </div>
              <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Features Designed for Team Sharing</h2>
            <p className="text-xl text-gray-600">
              Everything your team needs to amplify your company's social media presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Amplify Your Team's Social Presence?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of companies already using PostEngage to coordinate their social media strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-blue-50"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
