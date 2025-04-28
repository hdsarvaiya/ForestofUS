import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Register from "@/pages/register";
import Login from "@/pages/login";
import Events from "@/pages/events";
import Initiatives from "@/pages/initiatives";
import Team from "@/pages/team";
import { AnimatePresence } from "framer-motion";
import React, { useState , useEffect} from 'react';
import Loader from "@/components/loader";


function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />
        <Route path="/events" component={Events} />
        <Route path="/initiatives" component={Initiatives} />
        <Route path="/team" component={Team} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {isLoading && <Loader />}
        {!isLoading && <Router />}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
