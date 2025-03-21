
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Share2, BarChart2, Users, Shield } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Unified Team Voice',
      description: 'Empower every employee to become a brand ambassador with consistent, approved messaging.'
    },
    {
      icon: <Share2 className="h-8 w-8 text-blue-500" />,
      title: 'Expanded Reach',
      description: "Amplify your content's reach by leveraging your entire team's social networks."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Brand Control',
      description: 'Maintain message consistency while giving employees flexibility to personalize.'
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-blue-500" />,
      title: 'Measurable Impact',
      description: 'Track engagement metrics across platforms to optimize your content strategy.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'David Kim',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About PostEngage</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to help companies unlock the full potential of employee advocacy on social media.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  PostEngage was founded in 2023 with a simple insight: A company's most powerful marketing channel is often untapped – its own employees.
                </p>
                <p>
                  We noticed that companies were struggling to coordinate social media efforts across their teams. Marketing departments would create great content, but distribution relied on manual processes and employee initiative.
                </p>
                <p>
                  That's why we built PostEngage – to create a streamlined system where approved content can be easily shared by employees while maintaining brand consistency and tracking engagement metrics.
                </p>
              </div>
            </div>
            <div className="relative order-first md:order-last animate-fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Benefits of Employee Advocacy</h2>
            <p className="text-xl text-gray-600">
              Why employee social sharing matters and how PostEngage makes it effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex gap-5 p-6 bg-white rounded-xl shadow-sm animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-blue-50 rounded-lg h-fit">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Meet the people building PostEngage to transform how teams share on social media.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join the Social Sharing Revolution</h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience how PostEngage can transform your team into powerful brand advocates.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
