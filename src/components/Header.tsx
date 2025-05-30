
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features", "pricing", "about"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      // If we're at the top of the page, no section is active
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const getLinkClasses = (section: string) => {
    const baseClasses = "transition-all duration-300 font-light text-sm tracking-widest uppercase cursor-pointer";
    return activeSection === section 
      ? `${baseClasses} text-white font-medium border-b border-white/50 pb-1`
      : `${baseClasses} text-white/70 hover:text-white`;
  };

  const getMobileLinkClasses = (section: string) => {
    const baseClasses = "transition-all duration-300 font-light tracking-wide text-base cursor-pointer";
    return activeSection === section 
      ? `${baseClasses} text-white font-medium`
      : `${baseClasses} text-white/70 hover:text-white`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={()=>{scrollToSection("hero")}}>
            <img 
              src="/lovable-uploads/c034295e-0f3f-4ce7-9391-9f4852421390.PNG" 
              alt="VAIVE.AI" 
              className="h-8 sm:h-12 lg:h-10 w-auto me-4"
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 lg:space-x-12">
              <span 
                onClick={() => scrollToSection("features")}
                className={getLinkClasses("features")}
              >
                Features
              </span>
              <span 
                onClick={() => scrollToSection("pricing")}
                className={getLinkClasses("pricing")}
              >
                Pricing
              </span>
              <span 
                onClick={() => scrollToSection("about")}
                className={getLinkClasses("about")}
              >
                About us
              </span>
            </div>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/5 border-0 hover:border-0 transition-all duration-300 font-light tracking-wide text-sm px-4 py-2"
              onClick={() => window.location.href = '/login'}
            >
              <a href="https://platform.vaive.ai/">Login</a>
            </Button>
            <Button 
              className="bg-white text-black hover:bg-gray-100 transition-all duration-300 font-light tracking-wide text-sm px-4 py-2 rounded-full"
              onClick={() => window.location.href = '/signup'}
            >
              <a href="https://platform.vaive.ai/sign-up/">Sign Up</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 sm:mt-8 pb-6 sm:pb-8 border-t border-white/10">
            <div className="flex flex-col space-y-4 sm:space-y-6 pt-6 sm:pt-8">
              <span 
                onClick={() => scrollToSection("features")}
                className={getMobileLinkClasses("features")}
              >
                Products
              </span>
              <span 
                onClick={() => scrollToSection("pricing")}
                className={getMobileLinkClasses("pricing")}
              >
                Pricing
              </span>
              <span 
                onClick={() => scrollToSection("about")}
                className={getMobileLinkClasses("about")}
              >
                Company
              </span>
              <div className="pt-4 sm:pt-6 flex flex-col space-y-3">
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/5 border-0 w-full justify-start font-light text-base py-3"
                  onClick={() => window.location.href = '/login'}
                >
                  Login
                </Button>
                <Button 
                  className="bg-white text-black hover:bg-gray-100 w-full justify-start font-light text-base py-3 rounded-full"
                  onClick={() => window.location.href = '/signup'}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
