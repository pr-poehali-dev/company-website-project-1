import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import MarketplacePage from "./pages/services/MarketplacePage";
import FinancePage from "./pages/services/FinancePage";
import AutomationPage from "./pages/services/AutomationPage";
import AiDesignPage from "./pages/services/AiDesignPage";
import LegalServicesPage from "./pages/services/LegalServicesPage";
import LegalTechPage from "./pages/LegalTechPage";
import HybridBotPage from "./pages/HybridBotPage";
import CasesPage from "./pages/CasesPage";
import CaseDetailPage from "./pages/CaseDetailPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import ContactsPage from "./pages/ContactsPage";
import CabinetPage from "./pages/CabinetPage";
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/uslugi" element={<Layout><ServicesPage /></Layout>} />
          <Route path="/uslugi/menedzhment-marketpleysov" element={<Layout><MarketplacePage /></Layout>} />
          <Route path="/uslugi/finansovaya-analitika" element={<Layout><FinancePage /></Layout>} />
          <Route path="/uslugi/avtomatizatsiya-biznesa" element={<Layout><AutomationPage /></Layout>} />
          <Route path="/uslugi/ai-dizayn-uslugi" element={<Layout><AiDesignPage /></Layout>} />
          <Route path="/uslugi/yuridicheskie-uslugi" element={<Layout><LegalServicesPage /></Layout>} />
          <Route path="/legaltech" element={<Layout><LegalTechPage /></Layout>} />
          <Route path="/hybrid-bot-marketplace" element={<Layout><HybridBotPage /></Layout>} />
          <Route path="/keisy" element={<Layout><CasesPage /></Layout>} />
          <Route path="/keisy/:slug" element={<Layout><CaseDetailPage /></Layout>} />
          <Route path="/o-nas" element={<Layout><AboutPage /></Layout>} />
          <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
          <Route path="/blog/:slug" element={<Layout><BlogArticlePage /></Layout>} />
          <Route path="/kontakty" element={<Layout><ContactsPage /></Layout>} />
          <Route path="/cabinet" element={<Layout><CabinetPage /></Layout>} />
          <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;