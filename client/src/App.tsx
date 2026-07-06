import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./lib/trpc";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import superjson from "superjson";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import DeckRepair from "./pages/DeckRepair";
import ServiceAreas from "./pages/ServiceAreas";
import CityPage from "./pages/CityPage";
import Projects from "./pages/Projects";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import HandymanServices from "./pages/HandymanServices";
import DeckRepairService from "./pages/DeckRepairService";
import DeckConstructionService from "./pages/DeckConstructionService";
import PorchRepairService from "./pages/PorchRepairService";
import ExteriorCarpentryService from "./pages/ExteriorCarpentryService";
import DoorRepairService from "./pages/DoorRepairService";
import DrywallRepairService from "./pages/DrywallRepairService";
import TrimCarpentryService from "./pages/TrimCarpentryService";
import HomeRepairService from "./pages/HomeRepairService";
import SeniorAccessibilityService from "./pages/SeniorAccessibilityService";
import CeilingFanService from "./pages/CeilingFanService";
import FaucetRepairService from "./pages/FaucetRepairService";
import OFallonHandyman from "./pages/OFallonHandyman";
import EdwardsvilleHandyman from "./pages/EdwardsvilleHandyman";
import BellevilleHandyman from "./pages/BellevilleHandyman";
import StLouisHandyman from "./pages/StLouisHandyman";
import CollinsvilleHandyman from "./pages/CollinsvilleHandyman";
import GlenCarbonHandyman from "./pages/GlenCarbonHandyman";
import StCharlesHandyman from "./pages/StCharlesHandyman";
import FentonHandyman from "./pages/FentonHandyman";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import AboutRebrand from "./pages/AboutRebrand";
import TrustedLocalPartners from "./pages/TrustedLocalPartners";
import Membership from "./pages/Membership";
import MemberDashboard from "./pages/MemberDashboard";
import GBPDesPeres from "./pages/GBPDesPeres";
import GBPOFallon from "./pages/GBPOFallon";
import GBPEdwardsville from "./pages/GBPEdwardsville";
// import { SimpleChatButton } from "./components/LiveChat"; // Removed - redundant CTA
import DeckRepairPage from "./pages/services/DeckRepairPage";
import BathroomRemodelingPage from "./pages/services/BathroomRemodelingPage";
import DoorInstallationPage from "./pages/services/DoorInstallationPage";
import DoorReplacementPage from './pages/services/DoorReplacementPage';
import WindowInstallationPage from './pages/services/WindowInstallationPage';
import PorchRepairPage from './pages/services/PorchRepairPage';
import WindowInstallationOFallon from './pages/services/WindowInstallationOFallon';
import WindowInstallationEdwardsville from './pages/services/WindowInstallationEdwardsville';
import PorchRepairOFallon from './pages/services/PorchRepairOFallon';
import PorchRepairEdwardsville from './pages/services/PorchRepairEdwardsville';
import WindowInstallationBelleville from './pages/services/WindowInstallationBelleville';
import WindowInstallationCollinsville from './pages/services/WindowInstallationCollinsville';
import PorchRepairBelleville from './pages/services/PorchRepairBelleville';
import PorchRepairCollinsville from './pages/services/PorchRepairCollinsville';
import AdminLeads from "./pages/admin/AdminLeads";
import GuideLanding from "./pages/guide/GuideLanding";
import CompleteGuide from "./pages/guide/CompleteGuide";
import Checklist from "./pages/guide/Checklist";
import GBPAudit from "./pages/guide/GBPAudit";
import ReviewTemplates from "./pages/guide/ReviewTemplates";
import WindowInstallation from "./pages/WindowInstallation";
import BathroomRemodeling from "./pages/BathroomRemodeling";
import DeckBuilding from "./pages/DeckBuilding";
import HandymanNearMe from "./pages/HandymanNearMe";
import HandymanServicePackages from "./pages/HandymanServicePackages";
import WindowInstallationOFallonIL from "./pages/location-services/WindowInstallationOFallonIL";
import WindowInstallationEdwardsvilleIL from "./pages/location-services/WindowInstallationEdwardsvilleIL";
import BathroomRemodelingOFallonIL from "./pages/location-services/BathroomRemodelingOFallonIL";
import BathroomRemodelingEdwardsvilleIL from "./pages/location-services/BathroomRemodelingEdwardsvilleIL";
import DeckBuildingOFallonIL from "./pages/location-services/DeckBuildingOFallonIL";
import DeckBuildingEdwardsvilleIL from "./pages/location-services/DeckBuildingEdwardsvilleIL";
import DeckRepairStLouisMO from "./pages/location-services/DeckRepairStLouisMO";
import DoorInstallationOFallonIL from "./pages/location-services/DoorInstallationOFallonIL";
import DoorInstallationEdwardsvilleIL from "./pages/location-services/DoorInstallationEdwardsvilleIL";
import WindowInstallationReviews from "./pages/reviews/WindowInstallationReviews";
import BathroomRemodelingReviews from "./pages/reviews/BathroomRemodelingReviews";
import DeckBuildingReviews from "./pages/reviews/DeckBuildingReviews";
import DoorInstallationReviews from "./pages/reviews/DoorInstallationReviews";
import DeckRepairReviews from "./pages/reviews/DeckRepairReviews";
import HandymanReviews from "./pages/reviews/HandymanReviews";
import DrywallRepair from "./pages/DrywallRepair";
import DoorInstallation from "./pages/DoorInstallation";
import CarpentryServices from "./pages/CarpentryServices";
import DrywallRepairEdwardsville from "./pages/DrywallRepairEdwardsville";
import DeckRepairEdwardsville from "./pages/DeckRepairEdwardsville";
import DoorInstallationEdwardsville from "./pages/DoorInstallationEdwardsville";
import CarpentryServicesEdwardsville from "./pages/CarpentryServicesEdwardsville";
import DrywallRepairOFallon from "./pages/DrywallRepairOFallon";
import DeckRepairOFallon from "./pages/DeckRepairOFallon";
import DoorInstallationOFallon from "./pages/DoorInstallationOFallon";
import CarpentryServicesOFallon from "./pages/CarpentryServicesOFallon";
import HandymanChesterfieldMO from "./pages/HandymanChesterfieldMO";
import HandymanBallwinMO from "./pages/HandymanBallwinMO";
import HandymanStCharlesMO from "./pages/HandymanStCharlesMO";
import DrywallRepairChesterfield from "./pages/DrywallRepairChesterfield";
import DoorRepairEdwardsville from "./pages/DoorRepairEdwardsville";
import DoorRepairOFallon from "./pages/DoorRepairOFallon";
import DrywallRepairBallwin from "./pages/DrywallRepairBallwin";
import DeckRepairBallwin from "./pages/DeckRepairBallwin";
import DoorRepairBallwin from "./pages/DoorRepairBallwin";
import CarpentryServicesBallwin from "./pages/CarpentryServicesBallwin";
import DeckRepairChesterfield from "./pages/DeckRepairChesterfield";
import DoorInstallationChesterfield from "./pages/DoorInstallationChesterfield";
import CarpentryServicesChesterfield from "./pages/CarpentryServicesChesterfield";
import DoorRepairChesterfield from "./pages/DoorRepairChesterfield";
import DrywallRepairBelleville from "./pages/DrywallRepairBelleville";
import DeckRepairBelleville from "./pages/DeckRepairBelleville";
import DoorRepairBelleville from "./pages/DoorRepairBelleville";
import DoorRepairCollinsville from "./pages/DoorRepairCollinsville";
import DrywallRepairCollinsville from "./pages/DrywallRepairCollinsville";
import DeckRepairCollinsville from "./pages/DeckRepairCollinsville";
import CarpentryServicesCollinsville from "./pages/CarpentryServicesCollinsville";
import CarpentryServicesBelleville from "./pages/CarpentryServicesBelleville";
import DrywallRepairGlenCarbon from "./pages/DrywallRepairGlenCarbon";
import DeckRepairGlenCarbon from "./pages/DeckRepairGlenCarbon";
import DoorRepairGlenCarbon from "./pages/DoorRepairGlenCarbon";
import CarpentryServicesGlenCarbon from "./pages/CarpentryServicesGlenCarbon";
import DoorInstallationCollinsville from "./pages/DoorInstallationCollinsville";
import DoorInstallationGlenCarbon from "./pages/DoorInstallationGlenCarbon";
import DrywallRepairStCharles from "./pages/DrywallRepairStCharles";
import DeckRepairStCharles from "./pages/DeckRepairStCharles";
import DoorRepairStCharles from "./pages/DoorRepairStCharles";
import CarpentryServicesStCharles from "./pages/CarpentryServicesStCharles";
import DoorInstallationStCharles from "./pages/DoorInstallationStCharles";
import DoorInstallationBallwin from "./pages/DoorInstallationBallwin";
import DoorInstallationBelleville from "./pages/DoorInstallationBelleville";
import HandymanOFallonMO from "./pages/HandymanOFallonMO";
import DrywallRepairOFallonMO from "./pages/DrywallRepairOFallonMO";
import DeckRepairOFallonMO from "./pages/DeckRepairOFallonMO";
import DoorInstallationOFallonMO from "./pages/DoorInstallationOFallonMO";
import DoorRepairOFallonMO from "./pages/DoorRepairOFallonMO";
import CarpentryServicesOFallonMO from "./pages/CarpentryServicesOFallonMO";
function Router() {
  const [location] = useLocation();

  // Handle hash scrolling on page load and route changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  // make sure to consider if you need authentication for certain routes
  return (
    <>
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Admin */}
        <Route path="/admin/leads" component={AdminLeads} />
        
        {/* Services */}
        <Route path="/services/" component={Services} />
        <Route path="/services/deck-repair" component={DeckRepairPage} />
        <Route path="/services/bathroom-remodeling" component={BathroomRemodelingPage} />
        <Route path="/services/door-installation" component={DoorInstallationPage} />
        <Route path="/services/door-replacement" component={DoorReplacementPage} />
        <Route path="/services/window-installation" component={WindowInstallationPage} />
        <Route path="/services/porch-repair" component={PorchRepairPage} />
        <Route path="/services/window-installation-ofallon-il" component={WindowInstallationOFallon} />
        <Route path="/services/window-installation-edwardsville-il" component={WindowInstallationEdwardsville} />
        <Route path="/services/porch-repair-ofallon-il" component={PorchRepairOFallon} />
        <Route path="/services/porch-repair-edwardsville-il" component={PorchRepairEdwardsville} />
        <Route path="/services/window-installation-belleville-il" component={WindowInstallationBelleville} />
        <Route path="/services/window-installation-collinsville-il" component={WindowInstallationCollinsville} />
        <Route path="/services/porch-repair-belleville-il" component={PorchRepairBelleville} />
        <Route path="/services/porch-repair-collinsville-il" component={PorchRepairCollinsville} />
        <Route path="/services/handyman-home-repair/" component={ServiceDetail} />
        <Route path="/services/deck-porch-repair/" component={DeckRepair} />
        {/* Placeholder for other service pages using the template */}
        <Route path="/services/doors-windows/" component={ServiceDetail} />
        <Route path="/services/drywall-interior-repair/" component={ServiceDetail} />
        <Route path="/services/plumbing-fixtures/" component={ServiceDetail} />
        <Route path="/services/electrical-fixtures/" component={ServiceDetail} />
        
        {/* Service Areas */}
        <Route path="/service-areas/" component={ServiceAreas} />
        <Route path="/service-areas/ofallon-il-handyman/" component={CityPage} />
        <Route path="/service-areas/edwardsville-il-handyman/" component={CityPage} />
        
        {/* Other Pages */}
        <Route path="/projects/" component={Projects} />
        <Route path="/reviews/" component={Reviews} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/booking/" component={Booking} />
        <Route path="/handyman-services/" component={HandymanServices} />
        <Route path="/handyman-services/deck-repair/" component={DeckRepairService} />
        <Route path="/handyman-services/deck-construction/" component={DeckConstructionService} />
        <Route path="/handyman-services/porch-repair/" component={PorchRepairService} />
        <Route path="/handyman-services/door-repair/" component={DoorRepairService} />
        <Route path="/handyman-services/drywall-repair/" component={DrywallRepairService} />
        <Route path="/handyman-services/trim-carpentry/" component={TrimCarpentryService} />
        <Route path="/handyman-services/home-repair-services/" component={HomeRepairService} />
        <Route path="/handyman-services/senior-accessibility-upgrades/" component={SeniorAccessibilityService} />
        <Route path="/handyman-services/ceiling-fan-installation/" component={CeilingFanService} />
        <Route path="/handyman-services/faucet-install-and-repair/" component={FaucetRepairService} />
        <Route path="/handyman-services/window-installation/" component={WindowInstallation} />
        <Route path="/handyman-services/bathroom-remodeling/" component={BathroomRemodeling} />
        <Route path="/handyman-services/deck-building/" component={DeckBuilding} />
        <Route path="/handyman-near-me/" component={HandymanNearMe} />
        <Route path="/handyman-service-packages" component={HandymanServicePackages} />
        
        {/* City Landing Pages */}
        <Route path="/service-areas/ofallon-handyman-services/" component={OFallonHandyman} />
        <Route path="/service-areas/edwardsville-handyman-services/" component={EdwardsvilleHandyman} />
        <Route path="/service-areas/belleville-handyman-services/" component={BellevilleHandyman} />
        <Route path="/service-areas/st-louis-mo-handyman/" component={StLouisHandyman} />
        <Route path="/service-areas/st-louis-handyman-services/">
          <Redirect to="/service-areas/st-louis-mo-handyman/" />
        </Route>

        {/* GSC Soft 404 / Canonical Redirect Fixes */}
        <Route path="/handyman-services/exterior-carpentry/">
          <Redirect to="/carpentry-services/" />
        </Route>
        <Route path="/service-areas/ofallon-il/">
          <Redirect to="/service-areas/ofallon-handyman-services/" />
        </Route>
        <Route path="/service-areas/edwardsville-il/">
          <Redirect to="/service-areas/edwardsville-handyman-services/" />
        </Route>
        <Route path="/service-areas/chesterfield-mo/">
          <Redirect to="/handyman-chesterfield-mo" />
        </Route>
        <Route path="/service-areas/ofallon-il-handyman/">
          <Redirect to="/service-areas/ofallon-handyman-services/" />
        </Route>
        <Route path="/service-areas/edwardsville-il-handyman/">
          <Redirect to="/service-areas/edwardsville-handyman-services/" />
        </Route>
        <Route path="/service-areas/belleville-il-handyman/">
          <Redirect to="/service-areas/belleville-handyman-services/" />
        </Route>
        <Route path="/service-areas/collinsville-il-handyman/">
          <Redirect to="/service-areas/collinsville-handyman-services/" />
        </Route>
        <Route path="/service-areas/glen-carbon-il-handyman/">
          <Redirect to="/service-areas/glen-carbon-handyman-services/" />
        </Route>
        <Route path="/service-areas/st-charles-mo-handyman/">
          <Redirect to="/service-areas/st-charles-handyman-services/" />
        </Route>
        <Route path="/service-areas/fenton-mo-handyman/">
          <Redirect to="/service-areas/fenton-handyman-services/" />
        </Route>
        <Route path="/service-areas/collinsville-handyman-services/" component={CollinsvilleHandyman} />
        <Route path="/service-areas/glen-carbon-handyman-services/" component={GlenCarbonHandyman} />
        <Route path="/service-areas/st-charles-handyman-services/" component={StCharlesHandyman} />
        <Route path="/service-areas/fenton-handyman-services/" component={FentonHandyman} />
        
        {/* Location + Service Pages */}
        <Route path="/service-areas/window-installation-ofallon-il/" component={WindowInstallationOFallonIL} />
        <Route path="/service-areas/window-installation-edwardsville-il/" component={WindowInstallationEdwardsvilleIL} />
        <Route path="/service-areas/bathroom-remodeling-ofallon-il/" component={BathroomRemodelingOFallonIL} />
        <Route path="/service-areas/bathroom-remodeling-edwardsville-il/" component={BathroomRemodelingEdwardsvilleIL} />
        <Route path="/service-areas/deck-building-ofallon-il/" component={DeckBuildingOFallonIL} />
        <Route path="/service-areas/deck-building-edwardsville-il/" component={DeckBuildingEdwardsvilleIL} />
        <Route path="/service-areas/deck-repair-st-louis-mo/" component={DeckRepairStLouisMO} />
        <Route path="/service-areas/door-installation-ofallon-il/" component={DoorInstallationOFallonIL} />
        <Route path="/service-areas/door-installation-edwardsville-il/" component={DoorInstallationEdwardsvilleIL} />
        
        {/* Service Review Pages */}
        <Route path="/reviews/window-installation/" component={WindowInstallationReviews} />
        <Route path="/reviews/bathroom-remodeling/" component={BathroomRemodelingReviews} />
        <Route path="/reviews/deck-building/" component={DeckBuildingReviews} />
        <Route path="/reviews/door-installation/" component={DoorInstallationReviews} />
        <Route path="/reviews/deck-repair/" component={DeckRepairReviews} />
        <Route path="/reviews/handyman/" component={HandymanReviews} />
        
        {/* Membership */}
        <Route path="/membership/" component={Membership} />
        <Route path="/dashboard/membership/" component={MemberDashboard} />
        
        {/* Legal Pages */}
        <Route path="/terms/" component={Terms} />
        <Route path="/privacy/" component={Privacy} />
        
        {/* Trusted Partners Page */}
        <Route path="/trusted-local-partners/" component={TrustedLocalPartners} />
        
        {/* Rebrand Page */}
         <Route path="/about-rebrand" component={AboutRebrand} />
        {/* GBP Pages - New URLs with state suffixes */}
        <Route path="/gbp/des-peres-mo/" component={GBPDesPeres} />
        <Route path="/gbp/ofallon-il/" component={GBPOFallon} />
        <Route path="/gbp/edwardsville-il/" component={GBPEdwardsville} />
        
        {/* GBP Pages - Redirects from old URLs (for Google Business Profile links) */}
        <Route path="/gbp/des-peres" component={GBPDesPeres} />
        <Route path="/gbp/ofallon" component={GBPOFallon} />
        <Route path="/gbp/edwardsville" component={GBPEdwardsville} />
        
        {/* Regional Master Pages */}
        <Route path="/drywall-repair" component={DrywallRepair} />
        <Route path="/deck-repair" component={DeckRepair} />
        <Route path="/door-installation" component={DoorInstallation} />
        <Route path="/carpentry-services" component={CarpentryServices} />

        {/* Edwardsville IL Service Pages */}
        <Route path="/drywall-repair-edwardsville-il" component={DrywallRepairEdwardsville} />
        <Route path="/deck-repair-edwardsville-il" component={DeckRepairEdwardsville} />
        <Route path="/door-installation-edwardsville-il" component={DoorInstallationEdwardsville} />
        <Route path="/door-repair-edwardsville-il" component={DoorRepairEdwardsville} />
        <Route path="/carpentry-services-edwardsville-il" component={CarpentryServicesEdwardsville} />
        
        {/* O'Fallon IL Service Pages */}
        <Route path="/drywall-repair-ofallon-il" component={DrywallRepairOFallon} />
        <Route path="/deck-repair-ofallon-il" component={DeckRepairOFallon} />
        <Route path="/door-installation-ofallon-il" component={DoorInstallationOFallon} />
        <Route path="/door-repair-ofallon-il" component={DoorRepairOFallon} />
        <Route path="/carpentry-services-ofallon-il" component={CarpentryServicesOFallon} />
        
        {/* O'Fallon MO Location Pages */}
        <Route path="/handyman-ofallon-mo" component={HandymanOFallonMO} />
        <Route path="/drywall-repair-ofallon-mo" component={DrywallRepairOFallonMO} />
        <Route path="/deck-repair-ofallon-mo" component={DeckRepairOFallonMO} />
        <Route path="/door-installation-ofallon-mo" component={DoorInstallationOFallonMO} />
        <Route path="/door-repair-ofallon-mo" component={DoorRepairOFallonMO} />
        <Route path="/carpentry-services-ofallon-mo" component={CarpentryServicesOFallonMO} />

        {/* West St. Louis County MO Location Pages */}
        <Route path="/handyman-chesterfield-mo" component={HandymanChesterfieldMO} />
        <Route path="/handyman-ballwin-mo" component={HandymanBallwinMO} />
        <Route path="/handyman-st-charles-mo" component={HandymanStCharlesMO} />
        {/* Chesterfield MO Service Pages */}
        <Route path="/drywall-repair-chesterfield-mo" component={DrywallRepairChesterfield} />
        <Route path="/deck-repair-chesterfield-mo" component={DeckRepairChesterfield} />
        <Route path="/door-installation-chesterfield-mo" component={DoorInstallationChesterfield} />
        <Route path="/door-repair-chesterfield-mo" component={DoorRepairChesterfield} />
        <Route path="/carpentry-services-chesterfield-mo" component={CarpentryServicesChesterfield} />

        {/* Ballwin MO Service Pages */}
        <Route path="/drywall-repair-ballwin-mo" component={DrywallRepairBallwin} />
        <Route path="/deck-repair-ballwin-mo" component={DeckRepairBallwin} />
        <Route path="/door-repair-ballwin-mo" component={DoorRepairBallwin} />
        <Route path="/carpentry-services-ballwin-mo" component={CarpentryServicesBallwin} />
        <Route path="/door-installation-ballwin-mo" component={DoorInstallationBallwin} />

        {/* Belleville IL Service Pages */}
        <Route path="/drywall-repair-belleville-il" component={DrywallRepairBelleville} />
        <Route path="/deck-repair-belleville-il" component={DeckRepairBelleville} />
        <Route path="/door-repair-belleville-il" component={DoorRepairBelleville} />
        <Route path="/door-installation-belleville-il" component={DoorInstallationBelleville} />
        <Route path="/door-repair-collinsville-il" component={DoorRepairCollinsville} />
        <Route path="/drywall-repair-collinsville-il" component={DrywallRepairCollinsville} />
        <Route path="/deck-repair-collinsville-il" component={DeckRepairCollinsville} />
        <Route path="/carpentry-services-collinsville-il" component={CarpentryServicesCollinsville} />
        <Route path="/carpentry-services-belleville-il" component={CarpentryServicesBelleville} />
        <Route path="/drywall-repair-glen-carbon-il" component={DrywallRepairGlenCarbon} />
        <Route path="/deck-repair-glen-carbon-il" component={DeckRepairGlenCarbon} />
        <Route path="/door-repair-glen-carbon-il" component={DoorRepairGlenCarbon} />
        <Route path="/carpentry-services-glen-carbon-il" component={CarpentryServicesGlenCarbon} />
        <Route path="/door-installation-collinsville-il" component={DoorInstallationCollinsville} />
        <Route path="/door-installation-glen-carbon-il" component={DoorInstallationGlenCarbon} />
        <Route path="/drywall-repair-st-charles-mo" component={DrywallRepairStCharles} />
        <Route path="/deck-repair-st-charles-mo" component={DeckRepairStCharles} />
        <Route path="/door-repair-st-charles-mo" component={DoorRepairStCharles} />
        <Route path="/carpentry-services-st-charles-mo" component={CarpentryServicesStCharles} />
        <Route path="/door-installation-st-charles-mo" component={DoorInstallationStCharles} />
        
        {/* Guide Pages */}
        <Route path="/guide" component={GuideLanding} />
        <Route path="/guide/complete" component={CompleteGuide} />
        <Route path="/guide/checklist" component={Checklist} />
        <Route path="/guide/gbp-audit" component={GBPAudit} />
        <Route path="/guide/review-templates" component={ReviewTemplates} />
        
        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
    {/* <SimpleChatButton /> */} {/* Removed - redundant CTA that just scrolls to contact form */}
    </>
  );
}

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
          transformer: superjson,
        }),
      ],
    })
  );

  return (
    <ErrorBoundary>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </trpc.Provider>
    </ErrorBoundary>
  );
}

export default App;
