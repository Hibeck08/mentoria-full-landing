import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Lobby = lazy(() => import("./pages/Lobby"));
const Mentoria = lazy(() => import("./pages/Mentoria"));
const FullAdelphi = lazy(() => import("./pages/FullAdelphi"));
const Questoes = lazy(() => import("./pages/Questoes"));
const Masterclass = lazy(() => import("./pages/Masterclass"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/mentoria" element={<Mentoria />} />
            <Route path="/adelphi" element={<FullAdelphi />} />
            <Route path="/questoes" element={<Questoes />} />
            <Route path="/masterclass" element={<Masterclass />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
