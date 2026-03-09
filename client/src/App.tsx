import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Jurisdictions from "./pages/Jurisdictions";
import FreeZones from "./pages/FreeZones";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Industries from "./pages/Industries";
import FAQ from "./pages/FAQ";
import WhyUs from "./pages/WhyUs";
import HowItWorks from "./pages/HowItWorks";
import ThankYou from "./pages/ThankYou";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/services/:slug"} component={Services} />
      <Route path={"/jurisdictions"} component={Jurisdictions} />
      <Route path={"/free-zones"} component={FreeZones} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={Blog} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/quote"} component={Quote} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/industries"} component={Industries} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/why-us"} component={WhyUs} />
      <Route path={"/how-it-works"} component={HowItWorks} />
      <Route path={"/thank-you"} component={ThankYou} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Navbar />
            <Router />
            <Footer />
            <WhatsAppButton />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
