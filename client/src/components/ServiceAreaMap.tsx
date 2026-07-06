/**
 * Service Area Map Component
 * 
 * Displays a Google Map with a circular radius overlay showing the service coverage area
 * for a specific business location.
 */

import { useEffect, useRef } from "react";
import { MapView } from "./Map";

interface ServiceAreaMapProps {
  /** Center coordinates of the service area */
  center: google.maps.LatLngLiteral;
  /** Radius in miles */
  radiusMiles: number;
  /** Location name for the marker */
  locationName: string;
  /** Optional custom height (default: 400px) */
  height?: string;
}

export function ServiceAreaMap({
  center,
  radiusMiles,
  locationName,
  height = "400px",
}: ServiceAreaMapProps) {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Convert miles to meters (1 mile = 1609.34 meters)
    const radiusMeters = radiusMiles * 1609.34;

    // Add a marker at the center location
    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: center,
      title: locationName,
    });

    // Add a circle overlay to show the service radius
    const circle = new google.maps.Circle({
      map,
      center,
      radius: radiusMeters,
      fillColor: "#0f766e", // Teal color matching brand
      fillOpacity: 0.15,
      strokeColor: "#0f766e",
      strokeOpacity: 0.6,
      strokeWeight: 2,
    });

    // Fit the map to show the entire circle
    map.fitBounds(circle.getBounds()!);
  };

  return (
    <div className="w-full rounded-lg overflow-hidden border border-gray-200 shadow-md" style={{ height }}>
      <MapView
        className="w-full h-full"
        initialCenter={center}
        initialZoom={10}
        onMapReady={handleMapReady}
      />
    </div>
  );
}
