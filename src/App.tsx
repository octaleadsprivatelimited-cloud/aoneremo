import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RenovationPage from "./pages/RenovationPage";
import InteriorsPage from "./pages/InteriorsPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import BeforeAfterPage from "./pages/BeforeAfterPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/renovation" element={<RenovationPage />} />
          <Route path="/renovation/:slug" element={<ServiceDetailPage />} />
          <Route path="/interiors" element={<InteriorsPage />} />
          <Route path="/interiors/:slug" element={<ServiceDetailPage />} />
          <Route path="/before-after" element={<BeforeAfterPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<Index />} />
          <Route path="/testimonials" element={<Index />} />
          <Route path="/faq" element={<Index />} />
          <Route path="/blog" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
