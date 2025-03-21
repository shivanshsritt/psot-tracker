
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Metrics from "./pages/Metrics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Add smooth scrolling behavior and prevent FOUC
  useEffect(() => {
    // Smooth scrolling for the whole page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Prevent FOUC
    document.body.classList.add('fouc-ready');
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
      document.body.classList.remove('fouc-ready');
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/metrics" element={<Metrics />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
