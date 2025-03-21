
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real app, this would connect to an authentication service
    console.log('Login attempt with:', data);
    
    // Simulate successful login
    toast({
      title: "Login successful",
      description: "Welcome back to PostEngage!",
    });
    
    // Redirect to dashboard after successful login
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-28 pb-12 px-4 flex items-center justify-center">
        <div className="w-full max-w-md animate-fade-in">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-display font-bold">Welcome Back</h1>
              <p className="text-gray-600 mt-2">Sign in to your PostEngage account</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button type="submit" className="w-full">Sign In</Button>
                </div>
              </form>
            </Form>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/register')}>
                  Sign up
                </Button>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
