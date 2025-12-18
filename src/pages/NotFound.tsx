import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl shadow-medium p-8 text-center space-y-4">
        <div>
          <span className="inline-flex items-center justify-center rounded-full bg-destructive/10 text-destructive px-3 py-1 text-xs font-semibold mb-3">
            404 - Page not found
          </span>
          <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">We couldn&apos;t find that page</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            The link may be broken, expired, or the page might have been moved. You can go back to the
            homepage and continue browsing.
          </p>
        </div>
        <Button variant="hero" size="lg" className="w-full md:w-auto justify-center" asChild>
          <Link to="/">
            <Home className="h-5 w-5" />
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
