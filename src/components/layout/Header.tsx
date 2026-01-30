import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  {
    name: 'Why Us',
    href: '/why-choose-us',
    children: [
      { name: 'Why Choose Us', href: '/why-choose-us' },
      { name: 'The Problem', href: '/the-problem' },
      { name: 'Our Solution', href: '/our-solution' },
    ],
  },
  { name: 'Technology', href: '/technology' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-card/95 backdrop-blur-lg shadow-md border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <nav className="container-wide">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">IR</span>
            </div>
            <span className={cn(
              "text-xl font-bold transition-colors",
              scrolled ? "text-foreground" : "text-primary"
            )}>
              InsightResolve
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive(item.href)
                      ? 'text-accent'
                      : scrolled
                      ? 'text-foreground hover:text-accent hover:bg-accent/5'
                      : 'text-foreground/80 hover:text-accent hover:bg-accent/5'
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-xl border border-border/50 py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={cn(
                            'block px-4 py-2.5 text-sm transition-colors',
                            isActive(child.href)
                              ? 'text-accent bg-accent/5'
                              : 'text-foreground/80 hover:text-accent hover:bg-accent/5'
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/contact">Speak to an Expert</Link>
            </Button>
            <Button variant="accent" asChild>
              <Link to="/contact?demo=true">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn("w-6 h-6", scrolled ? "text-foreground" : "text-primary")} />
            ) : (
              <Menu className={cn("w-6 h-6", scrolled ? "text-foreground" : "text-primary")} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border/50 animate-fade-in">
          <div className="container-wide py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    'block px-4 py-3 text-base font-medium rounded-lg transition-colors',
                    isActive(item.href)
                      ? 'text-accent bg-accent/5'
                      : 'text-foreground hover:text-accent hover:bg-accent/5'
                  )}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={cn(
                          'block px-4 py-2 text-sm rounded-lg transition-colors',
                          isActive(child.href)
                            ? 'text-accent bg-accent/5'
                            : 'text-muted-foreground hover:text-accent hover:bg-accent/5'
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2 border-t border-border/50 mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Speak to an Expert</Link>
              </Button>
              <Button variant="accent" className="w-full" asChild>
                <Link to="/contact?demo=true">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
