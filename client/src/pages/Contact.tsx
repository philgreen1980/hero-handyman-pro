import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * /contact/ redirects to the homepage contact form section.
 * All "Get a Free Quote" buttons across the site link here.
 */
export default function Contact() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to the homepage contact section
    window.location.replace("/#contact");
  }, [setLocation]);

  return null;
}
