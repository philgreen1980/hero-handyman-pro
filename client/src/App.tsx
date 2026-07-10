import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./lib/trpc";
import { useState, useEffect, lazy, Suspense } from "react";
import { useLocation } from "wouter";
import superjson from "superjson";

// Pages
const Home = lazy(() => import("./pages/Home"));
const BrandPreview = lazy(() => import("./pages/BrandPreview"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const DeckRepair = lazy(() => import("./pages/DeckRepair"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const CityPage = lazy(() => import("./pages/CityPage"));
const Projects = lazy(() => import("./pages/Projects"));
const Reviews = lazy(() => import("./pages/Reviews"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const HandymanServices = lazy(() => import("./pages/HandymanServices"));
const DeckRepairService = lazy(() => import("./pages/DeckRepairService"));
const DeckConstructionService = lazy(() => import("./pages/DeckConstructionService"));
const PorchRepairService = lazy(() => import("./pages/PorchRepairService"));
const ExteriorCarpentryService = lazy(() => import("./pages/ExteriorCarpentryService"));
const DoorRepairService = lazy(() => import("./pages/DoorRepairService"));
const DrywallRepairService = lazy(() => import("./pages/DrywallRepairService"));
const TrimCarpentryService = lazy(() => import("./pages/TrimCarpentryService"));
const HomeRepairService = lazy(() => import("./pages/HomeRepairService"));
const SeniorAccessibilityService = lazy(() => import("./pages/SeniorAccessibilityService"));
const CeilingFanService = lazy(() => import("./pages/CeilingFanService"));
const FaucetRepairService = lazy(() => import("./pages/FaucetRepairService"));
const OFallonHandyman = lazy(() => import("./pages/OFallonHandyman"));
const EdwardsvilleHandyman = lazy(() => import("./pages/EdwardsvilleHandyman"));
const BellevilleHandyman = lazy(() => import("./pages/BellevilleHandyman"));
const StLouisHandyman = lazy(() => import("./pages/StLouisHandyman"));
const CollinsvilleHandyman = lazy(() => import("./pages/CollinsvilleHandyman"));
const GlenCarbonHandyman = lazy(() => import("./pages/GlenCarbonHandyman"));
const StCharlesHandyman = lazy(() => import("./pages/StCharlesHandyman"));
const FentonHandyman = lazy(() => import("./pages/FentonHandyman"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const TrustedLocalPartners = lazy(() => import("./pages/TrustedLocalPartners"));
const Membership = lazy(() => import("./pages/Membership"));
const MemberDashboard = lazy(() => import("./pages/MemberDashboard"));
const GBPDesPeres = lazy(() => import("./pages/GBPDesPeres"));
const GBPOFallon = lazy(() => import("./pages/GBPOFallon"));
const GBPEdwardsville = lazy(() => import("./pages/GBPEdwardsville"));
// import { SimpleChatButton } from "./components/LiveChat"; // Removed - redundant CTA
const DeckRepairPage = lazy(() => import("./pages/services/DeckRepairPage"));
const BathroomRemodelingPage = lazy(() => import("./pages/services/BathroomRemodelingPage"));
const DoorInstallationPage = lazy(() => import("./pages/services/DoorInstallationPage"));
const WindowInstallationPage = lazy(() => import("./pages/services/WindowInstallationPage"));
const PorchRepairPage = lazy(() => import("./pages/services/PorchRepairPage"));
const WindowInstallationOFallon = lazy(() => import("./pages/services/WindowInstallationOFallon"));
const WindowInstallationEdwardsville = lazy(() => import("./pages/services/WindowInstallationEdwardsville"));
const PorchRepairOFallon = lazy(() => import("./pages/services/PorchRepairOFallon"));
const PorchRepairEdwardsville = lazy(() => import("./pages/services/PorchRepairEdwardsville"));
const WindowInstallationBelleville = lazy(() => import("./pages/services/WindowInstallationBelleville"));
const WindowInstallationCollinsville = lazy(() => import("./pages/services/WindowInstallationCollinsville"));
const PorchRepairBelleville = lazy(() => import("./pages/services/PorchRepairBelleville"));
const PorchRepairCollinsville = lazy(() => import("./pages/services/PorchRepairCollinsville"));
const AdminLeads = lazy(() => import("./pages/admin/AdminLeads"));
const AdminEstimatorLeads = lazy(() => import("./pages/admin/AdminEstimatorLeads"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const GuideLanding = lazy(() => import("./pages/guide/GuideLanding"));
const CompleteGuide = lazy(() => import("./pages/guide/CompleteGuide"));
const Checklist = lazy(() => import("./pages/guide/Checklist"));
const GBPAudit = lazy(() => import("./pages/guide/GBPAudit"));
const ReviewTemplates = lazy(() => import("./pages/guide/ReviewTemplates"));
const WindowInstallation = lazy(() => import("./pages/WindowInstallation"));
const BathroomRemodeling = lazy(() => import("./pages/BathroomRemodeling"));
const DeckBuilding = lazy(() => import("./pages/DeckBuilding"));
const HandymanNearMe = lazy(() => import("./pages/HandymanNearMe"));
const HandymanServicePackages = lazy(() => import("./pages/HandymanServicePackages"));
const WindowInstallationOFallonIL = lazy(() => import("./pages/location-services/WindowInstallationOFallonIL"));
const WindowInstallationEdwardsvilleIL = lazy(() => import("./pages/location-services/WindowInstallationEdwardsvilleIL"));
const BathroomRemodelingOFallonIL = lazy(() => import("./pages/location-services/BathroomRemodelingOFallonIL"));
const BathroomRemodelingEdwardsvilleIL = lazy(() => import("./pages/location-services/BathroomRemodelingEdwardsvilleIL"));
const DeckBuildingOFallonIL = lazy(() => import("./pages/location-services/DeckBuildingOFallonIL"));
const DeckBuildingEdwardsvilleIL = lazy(() => import("./pages/location-services/DeckBuildingEdwardsvilleIL"));
const DeckRepairStLouisMO = lazy(() => import("./pages/location-services/DeckRepairStLouisMO"));
const DoorInstallationOFallonIL = lazy(() => import("./pages/location-services/DoorInstallationOFallonIL"));
const DoorInstallationEdwardsvilleIL = lazy(() => import("./pages/location-services/DoorInstallationEdwardsvilleIL"));
const WindowInstallationReviews = lazy(() => import("./pages/reviews/WindowInstallationReviews"));
const BathroomRemodelingReviews = lazy(() => import("./pages/reviews/BathroomRemodelingReviews"));
const DeckBuildingReviews = lazy(() => import("./pages/reviews/DeckBuildingReviews"));
const DoorInstallationReviews = lazy(() => import("./pages/reviews/DoorInstallationReviews"));
const DeckRepairReviews = lazy(() => import("./pages/reviews/DeckRepairReviews"));
const HandymanReviews = lazy(() => import("./pages/reviews/HandymanReviews"));
const DrywallRepair = lazy(() => import("./pages/DrywallRepair"));
const DoorInstallation = lazy(() => import("./pages/DoorInstallation"));
const CarpentryServices = lazy(() => import("./pages/CarpentryServices"));
const DrywallRepairEdwardsville = lazy(() => import("./pages/DrywallRepairEdwardsville"));
const DeckRepairEdwardsville = lazy(() => import("./pages/DeckRepairEdwardsville"));
const DoorInstallationEdwardsville = lazy(() => import("./pages/DoorInstallationEdwardsville"));
const CarpentryServicesEdwardsville = lazy(() => import("./pages/CarpentryServicesEdwardsville"));
const DrywallRepairOFallon = lazy(() => import("./pages/DrywallRepairOFallon"));
const DeckRepairOFallon = lazy(() => import("./pages/DeckRepairOFallon"));
const DoorInstallationOFallon = lazy(() => import("./pages/DoorInstallationOFallon"));
const CarpentryServicesOFallon = lazy(() => import("./pages/CarpentryServicesOFallon"));
const HandymanChesterfieldMO = lazy(() => import("./pages/HandymanChesterfieldMO"));
const HandymanKirkwoodMO = lazy(() => import("./pages/HandymanKirkwoodMO"));
const HandymanBallwinMO = lazy(() => import("./pages/HandymanBallwinMO"));
const HandymanStCharlesMO = lazy(() => import("./pages/HandymanStCharlesMO"));
const DrywallRepairChesterfield = lazy(() => import("./pages/DrywallRepairChesterfield"));
const DoorRepairEdwardsville = lazy(() => import("./pages/DoorRepairEdwardsville"));
const DoorRepairOFallon = lazy(() => import("./pages/DoorRepairOFallon"));
const DrywallRepairBallwin = lazy(() => import("./pages/DrywallRepairBallwin"));
const DeckRepairBallwin = lazy(() => import("./pages/DeckRepairBallwin"));
const DoorRepairBallwin = lazy(() => import("./pages/DoorRepairBallwin"));
const CarpentryServicesBallwin = lazy(() => import("./pages/CarpentryServicesBallwin"));
const DeckRepairChesterfield = lazy(() => import("./pages/DeckRepairChesterfield"));
const DoorInstallationChesterfield = lazy(() => import("./pages/DoorInstallationChesterfield"));
const CarpentryServicesChesterfield = lazy(() => import("./pages/CarpentryServicesChesterfield"));
const DoorRepairChesterfield = lazy(() => import("./pages/DoorRepairChesterfield"));
const DrywallRepairBelleville = lazy(() => import("./pages/DrywallRepairBelleville"));
const DeckRepairBelleville = lazy(() => import("./pages/DeckRepairBelleville"));
const DoorRepairBelleville = lazy(() => import("./pages/DoorRepairBelleville"));
const DoorRepairCollinsville = lazy(() => import("./pages/DoorRepairCollinsville"));
const DrywallRepairCollinsville = lazy(() => import("./pages/DrywallRepairCollinsville"));
const DeckRepairCollinsville = lazy(() => import("./pages/DeckRepairCollinsville"));
const CarpentryServicesCollinsville = lazy(() => import("./pages/CarpentryServicesCollinsville"));
const CarpentryServicesBelleville = lazy(() => import("./pages/CarpentryServicesBelleville"));
const DrywallRepairGlenCarbon = lazy(() => import("./pages/DrywallRepairGlenCarbon"));
const DeckRepairGlenCarbon = lazy(() => import("./pages/DeckRepairGlenCarbon"));
const DoorRepairGlenCarbon = lazy(() => import("./pages/DoorRepairGlenCarbon"));
const CarpentryServicesGlenCarbon = lazy(() => import("./pages/CarpentryServicesGlenCarbon"));
const DoorInstallationCollinsville = lazy(() => import("./pages/DoorInstallationCollinsville"));
const DoorInstallationGlenCarbon = lazy(() => import("./pages/DoorInstallationGlenCarbon"));
const DrywallRepairStCharles = lazy(() => import("./pages/DrywallRepairStCharles"));
const DeckRepairStCharles = lazy(() => import("./pages/DeckRepairStCharles"));
const DoorRepairStCharles = lazy(() => import("./pages/DoorRepairStCharles"));
const CarpentryServicesStCharles = lazy(() => import("./pages/CarpentryServicesStCharles"));
const DoorInstallationStCharles = lazy(() => import("./pages/DoorInstallationStCharles"));
const DoorInstallationBallwin = lazy(() => import("./pages/DoorInstallationBallwin"));
const DoorInstallationBelleville = lazy(() => import("./pages/DoorInstallationBelleville"));
const HandymanOFallonMO = lazy(() => import("./pages/HandymanOFallonMO"));
const VAHomeModifications = lazy(() => import("./pages/VAHomeModifications"));
const HandymanStLouisMO = lazy(() => import("./pages/HandymanStLouisMO"));
const HandymanBellevilleIL = lazy(() => import("./pages/HandymanBellevilleIL"));
const DrywallRepairOFallonMO = lazy(() => import("./pages/DrywallRepairOFallonMO"));
const DeckRepairOFallonMO = lazy(() => import("./pages/DeckRepairOFallonMO"));
const DoorInstallationOFallonMO = lazy(() => import("./pages/DoorInstallationOFallonMO"));
const DoorRepairOFallonMO = lazy(() => import("./pages/DoorRepairOFallonMO"));
const CarpentryServicesOFallonMO = lazy(() => import("./pages/CarpentryServicesOFallonMO"));
const PricingHub = lazy(() => import("./pages/PricingHub"));
const EstimatorPage = lazy(() => import("./pages/EstimatorPage"));
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const HandymanCosts2026 = lazy(() => import("./pages/blog/HandymanCosts2026"));
const HowToChooseHandyman = lazy(() => import("./pages/blog/HowToChooseHandyman"));
const SpringRepairChecklist = lazy(() => import("./pages/blog/SpringRepairChecklist"));
const BellevilleHomeRepairs = lazy(() => import("./pages/blog/BellevilleHomeRepairs"));
const DrywallRepairCostOFallon = lazy(() => import("./pages/blog/DrywallRepairCostOFallon"));
const DeckRepairCostOFallon = lazy(() => import("./pages/blog/DeckRepairCostOFallon"));
const DoorRepairCostOFallon = lazy(() => import("./pages/blog/DoorRepairCostOFallon"));
const WinterHomeRepairsIllinois = lazy(() => import("./pages/blog/WinterHomeRepairsIllinois"));
const DeckRepairSigns = lazy(() => import("./pages/blog/DeckRepairSigns"));
const HandymanVsContractor = lazy(() => import("./pages/blog/HandymanVsContractor"));
const EdwardsvilleHomeRepairs = lazy(() => import("./pages/blog/EdwardsvilleHomeRepairs"));
const HomeMaintenanceTipsMetroEast = lazy(() => import("./pages/blog/HomeMaintenanceTipsMetroEast"));
const DrywallRepairReviews = lazy(() => import("./pages/reviews/DrywallRepairReviews"));
// Service+City combo pages
const DrywallRepairOFallonCombo = lazy(() => import("./pages/service-city/DrywallRepairOFallon"));
const DeckRepairBellevilleCombo = lazy(() => import("./pages/service-city/DeckRepairBelleville"));
const DoorRepairSwanseaCombo = lazy(() => import("./pages/service-city/DoorRepairSwansea"));
const CeilingFanCollinsvilleCombo = lazy(() => import("./pages/service-city/CeilingFanCollinsville"));
const FenceRepairEdwardsvilleCombo = lazy(() => import("./pages/service-city/FenceRepairEdwardsville"));
const FenceRepairService = lazy(() => import("./pages/FenceRepairService"));
const HandymanShilohIL = lazy(() => import("./pages/HandymanShilohIL"));
const HandymanSwanseaIL = lazy(() => import("./pages/HandymanSwanseaIL"));
const HandymanFairviewHeightsIL = lazy(() => import("./pages/HandymanFairviewHeightsIL"));
const HandymanServicesStLouis = lazy(() => import("./pages/HandymanServicesStLouis"));
const WindowRepairCostOFallon = lazy(() => import("./pages/blog/WindowRepairCostOFallon"));
// MetroEastServiceArea removed - page does not exist yet
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
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-10 w-10 border-4 border-primary border-t-transparent" /></div>}>
      <Switch>
        <Route path="/" component={Home} />
        {/* Brand Preview — staging page for brand refresh approval */}
        <Route path="/brand-preview" component={BrandPreview} />
        
        {/* Admin */}
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/leads" component={AdminLeads} />
        <Route path="/admin/estimator-leads" component={AdminEstimatorLeads} />
        
        {/* VA Home Modifications Landing Page */}
        <Route path="/va-home-modifications" component={VAHomeModifications} />
        
        {/* St. Louis MO Hub Page */}
        <Route path="/handyman-st-louis-mo" component={HandymanStLouisMO} />
        
        {/* Belleville IL Hub Page */}
        <Route path="/handyman-belleville-il" component={HandymanBellevilleIL} />
        
        {/* New IL City Hub Pages */}
        <Route path="/handyman-shiloh-il" component={HandymanShilohIL} />
        <Route path="/handyman-swansea-il" component={HandymanSwanseaIL} />
        <Route path="/handyman-fairview-heights-il" component={HandymanFairviewHeightsIL} />
        
        {/* Service+City Combo Pages */}
        <Route path="/service-areas/drywall-repair-ofallon-il/" component={DrywallRepairOFallonCombo} />
        <Route path="/service-areas/deck-repair-belleville-il/" component={DeckRepairBellevilleCombo} />
        <Route path="/service-areas/door-repair-swansea-il/" component={DoorRepairSwanseaCombo} />
        <Route path="/service-areas/ceiling-fan-installation-collinsville-il/" component={CeilingFanCollinsvilleCombo} />
        <Route path="/service-areas/fence-repair-edwardsville-il/" component={FenceRepairEdwardsvilleCombo} />
        <Route path="/handyman-services/fence-repair/" component={FenceRepairService} />
        
        {/* Services */}
        <Route path="/services/" component={Services} />
        <Route path="/services/deck-repair" component={DeckRepairPage} />
        <Route path="/services/bathroom-remodeling" component={BathroomRemodelingPage} />
        <Route path="/services/door-installation" component={DoorInstallationPage} />
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
        <Route path="/handyman-packages/" component={HandymanServicePackages} />
        <Route path="/handyman-services-st-louis/" component={HandymanServicesStLouis} />
        
        {/* City Landing Pages */}
        <Route path="/service-areas/ofallon-handyman-services/" component={OFallonHandyman} />
        <Route path="/service-areas/edwardsville-handyman-services/" component={EdwardsvilleHandyman} />
        <Route path="/edwardsville-il/">
          <Redirect to="/gbp/edwardsville-il/" />
        </Route>
        <Route path="/service-areas/belleville-handyman-services/" component={BellevilleHandyman} />
        <Route path="/belleville-il/">
          <Redirect to="/handyman-belleville-il" />
        </Route>
        <Route path="/service-areas/st-louis-mo-handyman/" component={StLouisHandyman} />
        <Route path="/service-areas/st-louis-handyman-services/">
          <Redirect to="/service-areas/st-louis-mo-handyman/" />
        </Route>

        {/* GSC Soft 404 / Canonical Redirect Fixes */}
        <Route path="/handyman-services/exterior-carpentry/">
          <Redirect to="/carpentry-services/" />
        </Route>
        <Route path="/service-areas/ofallon-il/">
          <Redirect to="/gbp/ofallon-il/" />
        </Route>
        <Route path="/service-areas/edwardsville-il/">
          <Redirect to="/gbp/edwardsville-il/" />
        </Route>
        <Route path="/service-areas/chesterfield-mo/">
          <Redirect to="/handyman-chesterfield-mo" />
        </Route>
        <Route path="/service-areas/ofallon-il-handyman/">
          <Redirect to="/gbp/ofallon-il/" />
        </Route>
        <Route path="/service-areas/edwardsville-il-handyman/">
          <Redirect to="/gbp/edwardsville-il/" />
        </Route>
        <Route path="/service-areas/belleville-il-handyman/">
          <Redirect to="/handyman-belleville-il" />
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
        <Route path="/handyman-collinsville-il" component={CollinsvilleHandyman} />
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
        <Route path="/reviews/drywall-repair/" component={DrywallRepairReviews} />
        
        {/* Membership */}
        <Route path="/membership/" component={Membership} />
        <Route path="/dashboard/membership/" component={MemberDashboard} />
        
        {/* Legal Pages */}
        <Route path="/terms/" component={Terms} />
        <Route path="/privacy/" component={Privacy} />
        
        {/* Trusted Partners Page */}
        <Route path="/trusted-local-partners/" component={TrustedLocalPartners} />
        
        {/* GBP Pages - New URLs with state suffixes */}
        <Route path="/gbp/des-peres-mo/" component={GBPDesPeres} />
        <Route path="/gbp/ofallon-il/" component={GBPOFallon} />
        <Route path="/gbp/edwardsville-il/" component={GBPEdwardsville} />
        
        {/* GBP Pages - 301-style redirects from alternate URLs to canonical versions */}
        <Route path="/gbp/des-peres"><Redirect to="/gbp/des-peres-mo/" /></Route>
        <Route path="/gbp/ofallon"><Redirect to="/gbp/ofallon-il/" /></Route>
        <Route path="/gbp/edwardsville"><Redirect to="/gbp/edwardsville-il/" /></Route>
        
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
        <Route path="/handyman-kirkwood-mo" component={HandymanKirkwoodMO} />
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

        {/* Pricing Hub */}
        <Route path="/handyman-pricing/" component={PricingHub} />
        <Route path="/estimator/" component={EstimatorPage} />

        {/* Blog */}
        <Route path="/blog/" component={BlogIndex} />
        <Route path="/blog/2026-handyman-costs-metro-east-il/" component={HandymanCosts2026} />
        <Route path="/blog/how-to-choose-handyman-st-louis/" component={HowToChooseHandyman} />
        <Route path="/blog/spring-home-repair-checklist-edwardsville-ofallon/" component={SpringRepairChecklist} />
        <Route path="/blog/home-repairs-belleville-il/" component={BellevilleHomeRepairs} />
        <Route path="/blog/drywall-repair-cost-ofallon-il/" component={DrywallRepairCostOFallon} />
        <Route path="/blog/deck-repair-cost-ofallon-il/" component={DeckRepairCostOFallon} />
        <Route path="/blog/door-repair-cost-ofallon-il/" component={DoorRepairCostOFallon} />
        <Route path="/blog/common-home-repairs-after-winter-illinois/" component={WinterHomeRepairsIllinois} />
        <Route path="/blog/signs-your-deck-needs-repair/" component={DeckRepairSigns} />
        <Route path="/blog/handyman-vs-contractor-metro-east-il/" component={HandymanVsContractor} />
        <Route path="/blog/home-repairs-edwardsville-il/" component={EdwardsvilleHomeRepairs} />
        <Route path="/blog/home-maintenance-tips-metro-east-il/" component={HomeMaintenanceTipsMetroEast} />
        <Route path="/blog/window-repair-cost-ofallon-il/" component={WindowRepairCostOFallon} />

        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
      </Suspense>
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
