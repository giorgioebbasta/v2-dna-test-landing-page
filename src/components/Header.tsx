import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: 'Signed Out',
      description: 'You have been signed out successfully.',
    });
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      {/* Mobile version - logo only */}
      <div className="md:hidden">
        {/* Logo section */}
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center">
          <a 
            href="https://www.holifya.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src="/lovable-uploads/2b3fd25b-1ca6-4335-a493-38d9a74cd75f.png" 
              alt="Holifya Logo" 
              className="h-8 hover:opacity-80 transition-opacity cursor-pointer"
            />
          </a>
        </div>
      </div>

      {/* Desktop version - logo and nav */}
      <div className="hidden md:flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div>
          <a 
            href="https://www.holifya.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src="/lovable-uploads/2b3fd25b-1ca6-4335-a493-38d9a74cd75f.png" 
              alt="Holifya Logo" 
              className="h-10 hover:opacity-80 transition-opacity cursor-pointer"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          {user && isAdmin ? (
            <>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Admin</span>
              </div>
              <Link 
                to="/portal-a8f3b2e9/migrate-analytics" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Import Analytics
              </Link>
              <Link 
                to="/portal-a8f3b2e9/dashboard" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <Link to="/portal-a8f3b2e9/login">
              <Button variant="outline" size="sm" className="gap-2">
                <Shield className="h-4 w-4" />
                Admin Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
