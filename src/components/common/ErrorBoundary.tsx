import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-card border border-border rounded-2xl shadow-lg p-8 text-center space-y-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Something went wrong</h1>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              {this.state.error && process.env.NODE_ENV === 'development' && (
                <pre className="text-xs text-muted-foreground bg-muted p-4 rounded mt-4 text-left overflow-auto max-h-40">
                  {this.state.error.toString()}
                </pre>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default" onClick={this.handleReload} className="w-full sm:w-auto">
                <RefreshCw className="h-4 w-4 mr-2" />
                Reload Page
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

