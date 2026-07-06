import { Sparkles, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface SeasonalPromoBannerProps {
  city: string;
  promotion: {
    title: string;
    description: string;
    discount: string;
    validUntil: string;
  };
}

export function SeasonalPromoBanner({ city, promotion }: SeasonalPromoBannerProps) {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-6 px-4 rounded-lg shadow-lg border-2 border-orange-400">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="bg-white/20 p-2 rounded-full">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                {promotion.title}
              </h3>
              <p className="text-orange-50 text-sm md:text-base mb-2">
                {promotion.description}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Valid until {promotion.validUntil}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold text-2xl shadow-md">
              {promotion.discount}
            </div>
            <Link href={`/#contact?city=${encodeURIComponent(city)}`}>
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold shadow-md"
              >
                Claim Offer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
