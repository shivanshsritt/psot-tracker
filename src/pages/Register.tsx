
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, Phone, Smartphone, ArrowRight, Lock, User, AtSign, Check, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Email registration form schema
const emailFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  confirmPassword: z.string().min(6, { message: 'Confirm password is required' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Phone registration form schema
const phoneFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
});

type EmailFormValues = z.infer<typeof emailFormSchema>;
type PhoneFormValues = z.infer<typeof phoneFormSchema>;

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("email");
  const [phoneVerificationStep, setPhoneVerificationStep] = useState<number>(1);
  const [otpValue, setOtpValue] = useState("");
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  
  // Email registration form
  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  // Phone registration form
  const phoneForm = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneFormSchema),
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  // Handle email registration
  const onEmailSubmit = (data: EmailFormValues) => {
    console.log('Email registration with:', data);
    
    // Simulate successful registration
    toast({
      title: "Registration successful",
      description: "Welcome to PostEngage! You can now log in.",
    });
    
    // Redirect to login page
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  // Handle phone registration first step (sending OTP)
  const onPhoneSubmit = (data: PhoneFormValues) => {
    console.log('Phone registration with:', data);
    
    // Simulate sending OTP
    toast({
      title: "Verification code sent",
      description: `We've sent a 6-digit code to ${data.phone} (simulated)`,
    });
    
    // Move to OTP verification step
    setPhoneVerificationStep(2);
  };

  // Handle OTP verification
  const verifyOtp = () => {
    setIsVerifyingOtp(true);
    
    // Simulate OTP verification (timeout to mimic API call)
    setTimeout(() => {
      setIsVerifyingOtp(false);
      
      if (otpValue.length === 6) {
        // Successfully verified
        toast({
          title: "Phone verified",
          description: "Registration successful! You can now log in.",
        });
        
        // Redirect to login page
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        // Failed verification
        toast({
          title: "Verification failed",
          description: "Please enter a valid 6-digit code",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-28 pb-12 px-4 flex items-center justify-center">
        <div className="w-full max-w-md animate-fade-in">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-display font-bold text-center">Create an Account</CardTitle>
              <CardDescription className="text-center">
                Choose your preferred method to sign up
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-4 bg-amber-50 border-amber-200 text-amber-800">
                <AlertCircle className="h-4 w-4 text-amber-800" />
                <AlertDescription>
                  This is a demo application. No actual SMS will be sent and any OTP code with 6 digits will be accepted.
                </AlertDescription>
              </Alert>
              
              <Tabs defaultValue="email" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </TabsTrigger>
                  <TabsTrigger value="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Phone</span>
                  </TabsTrigger>
                </TabsList>
                
                {/* Email Registration Tab */}
                <TabsContent value="email">
                  <Form {...emailForm}>
                    <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-4">
                      <FormField
                        control={emailForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input className="pl-10" placeholder="John Doe" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={emailForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input className="pl-10" placeholder="you@example.com" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={emailForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input className="pl-10" type="password" placeholder="••••••••" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={emailForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input className="pl-10" type="password" placeholder="••••••••" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full mt-2">
                        Create Account
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
                
                {/* Phone Registration Tab */}
                <TabsContent value="phone">
                  {phoneVerificationStep === 1 ? (
                    <Form {...phoneForm}>
                      <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-4">
                        <FormField
                          control={phoneForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                  <Input className="pl-10" placeholder="John Doe" {...field} />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={phoneForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                  <Input 
                                    className="pl-10" 
                                    placeholder="Enter your phone number" 
                                    type="tel"
                                    {...field} 
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" className="w-full mt-2 flex items-center justify-center gap-2">
                          <span>Send Verification Code</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </form>
                    </Form>
                  ) : (
                    <div className="space-y-6">
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-medium">Verify Your Phone</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Enter the 6-digit code sent to your phone
                        </p>
                        <p className="text-xs text-amber-600 mt-2">
                          (In this demo, enter any 6 digits to proceed)
                        </p>
                      </div>
                      
                      <div className="flex justify-center mb-6">
                        <InputOTP 
                          maxLength={6}
                          value={otpValue}
                          onChange={(value) => setOtpValue(value)}
                          render={({ slots }) => (
                            <InputOTPGroup>
                              {slots.map((slot, index) => (
                                <InputOTPSlot key={index} {...slot} index={index} />
                              ))}
                            </InputOTPGroup>
                          )}
                        />
                      </div>
                      
                      <Button 
                        onClick={verifyOtp} 
                        className="w-full" 
                        disabled={isVerifyingOtp || otpValue.length !== 6}
                      >
                        {isVerifyingOtp ? (
                          <span className="flex items-center justify-center gap-2">
                            <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                            <span>Verifying...</span>
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Check className="h-4 w-4" />
                            <span>Verify & Complete</span>
                          </span>
                        )}
                      </Button>
                      
                      <div className="text-center">
                        <Button 
                          variant="link" 
                          className="text-sm text-gray-500"
                          onClick={() => setPhoneVerificationStep(1)}
                        >
                          Back to phone entry
                        </Button>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
              
              <div className="mt-6 text-center text-sm">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/login')}>
                    Sign in
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
