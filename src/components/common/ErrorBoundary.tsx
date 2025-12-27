import React, { Component, ErrorInfo, ReactNode } from 'react';

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

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: '#ffffff',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            maxWidth: '500px',
            width: '100%',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            padding: '32px',
            textAlign: 'center'
          }}>
            <div>
              <h1 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#111827'
              }}>
                Something went wrong
              </h1>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                marginBottom: '24px'
              }}>
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              {this.state.error && process.env.NODE_ENV === 'development' && (
                <pre style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  backgroundColor: '#f3f4f6',
                  padding: '16px',
                  borderRadius: '8px',
                  marginTop: '16px',
                  textAlign: 'left',
                  overflow: 'auto',
                  maxHeight: '160px'
                }}>
                  {this.state.error.toString()}
                </pre>
              )}
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              justifyContent: 'center',
              marginTop: '24px'
            }}>
              <button
                onClick={this.handleReload}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#ea580c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                style={{
                  padding: '12px 24px',
                  backgroundColor: 'transparent',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

