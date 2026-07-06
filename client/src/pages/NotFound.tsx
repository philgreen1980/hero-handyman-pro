import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-secondary/20 p-6 rounded-full mb-6">
        <AlertTriangle className="h-16 w-16 text-secondary" />
      </div>
      <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Looks like this page needs a repair. The link you followed might be broken or the page has been moved.
      </p>
      <Link href="/">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
