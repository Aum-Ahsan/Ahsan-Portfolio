import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./pages/Hero";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-4xl gradient-text">Projects Coming Soon</h1></div>} />
              <Route path="/skills" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-4xl gradient-text">Skills Coming Soon</h1></div>} />
              <Route path="/articles" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-4xl gradient-text">Articles Coming Soon</h1></div>} />
              <Route path="/contact" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-4xl gradient-text">Contact Coming Soon</h1></div>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
