import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PageMetabolismo from "./pages/PageMetabolismo";
import PageSintomi from "./pages/PageSintomi";
import PageCaffeina from "./pages/PageCaffeina";

// Lazy load the advertorial page for better performance
const PageDietaNonFunziona = React.lazy(() => import("./pages/PageDietaNonFunziona"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="overflow-x-hidden">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/metabolismo" element={<PageMetabolismo />} />
                <Route path="/sintomi" element={<PageSintomi />} />
                <Route path="/caffeina" element={<PageCaffeina />} />
                <Route 
                  path="/dieta-non-funziona" 
                  element={
                    <Suspense fallback={
                      <div className="min-h-screen bg-white flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-12 h-12 border-4 border-[#0A121A] border-t-transparent rounded-full animate-spin mx-auto"></div>
                          <p className="text-[#768289]">Caricamento...</p>
                        </div>
                      </div>
                    }>
                      <PageDietaNonFunziona />
                    </Suspense>
                  } 
                />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
