import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export default function DeliveryMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !(window as any).google) return;

    const lorientCenter = { lat: 47.7482, lng: -3.3667 };
    const google = (window as any).google;

    const map = new google.maps.Map(mapRef.current, {
      center: lorientCenter,
      zoom: 13,
      styles: [
        {
          featureType: "all",
          elementType: "geometry",
          stylers: [{ saturation: -20 }]
        }
      ],
    });

    new google.maps.Circle({
      strokeColor: "#FBEEDC",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#E84C3D",
      fillOpacity: 0.2,
      map,
      center: lorientCenter,
      radius: 4000,
    });

    const cities = [
      { name: "Lorient", lat: 47.7482, lng: -3.3667 },
      { name: "Lanester", lat: 47.7631, lng: -3.3397 },
      { name: "Quéven", lat: 47.7867, lng: -3.4167 },
      { name: "Pont-Scorff", lat: 47.8333, lng: -3.4000 },
      { name: "Rédené", lat: 47.8500, lng: -3.4667 },
      { name: "Guidel", lat: 47.7833, lng: -3.5000 },
      { name: "Larmor-Plage", lat: 47.7083, lng: -3.3833 },
      { name: "Moëlan-sur-Mer", lat: 47.8167, lng: -3.6333 },
      { name: "Quimperlé", lat: 47.8719, lng: -3.5486 },
    ];

    cities.forEach((city) => {
      new google.maps.Marker({
        position: { lat: city.lat, lng: city.lng },
        map,
        title: city.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 6,
          fillColor: "#E84C3D",
          fillOpacity: 0.9,
          strokeColor: "#FBEEDC",
          strokeWeight: 2,
        },
      });
    });
  }, []);

  return (
    <section className="py-20 px-6 bg-background" id="zone">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-8 text-foreground" data-testid="text-map-title">
          Zone de livraison
        </h2>
        
        <div 
          ref={mapRef} 
          className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg mb-6"
          data-testid="map-container"
        ></div>
        
        <div className="bg-[hsl(30,70%,93%)] p-6 rounded-lg border-l-4 border-primary max-w-2xl mx-auto">
          <p className="text-center text-foreground font-medium" data-testid="text-map-legend">
            Zone SoiréeXpress – livraison entre 1h30 et 5h (minimum 30 €)
          </p>
        </div>
      </div>
    </section>
  );
}
