
import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import '../index.css';

const Hero = () => {
  return (
    <section id='hero' className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Pure black and white gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 via-black to-gray-700/5"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 md:w-96 md:h-96 bg-gray-300/1 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-[4rem] md:text-[4.75rem] lg:text-[5.5rem] font-light mb-8 sm:mb-10 lg:mb-12 leading-[0.9] tracking-[-0.02em] font-serif">
              Simplifying
              <span className="block font-light bg-gradient-to-r from-white via-gray-200 to-gray-400 mt-2 bg-clip-text text-transparent hero-heading">
                GST
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-12 sm:mb-14 lg:mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4">
              AI platform designed to simplify litigation, automate replies, and accelerate tax research for GST professionals.
            </p>
          </div>

          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-18 lg:mb-20 px-4" style={{ animationDelay: '0.6s' }}>
            <a href="https://tally.so/r/wzoKGg"><Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-12 md:px-4 lg:px-4 py-4 sm:py-5 lg:py-6 rounded-full font-medium transition-all duration-500 hover:scale-105 border-0 font-sans tracking-wide w-full sm:w-auto"
            >
              Request a Demo
            </Button>
            </a>
            <a className="hover:text-white" href="https://platform.vaive.ai/"><Button 
              size="lg" 
              variant="ghost" 
              className="border border-white/60 text-white hover:text-white hover:bg-white/10 hover:border-white/40 text-base sm:text-lg px-14 sm:px-14 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-full font-medium transition-all duration-500 group font-sans tracking-wide w-full sm:w-auto"
            >
              
              Try Now
            </Button>
            </a>
          </div>

          <div className="animate-fade-in text-xs sm:text-sm text-white/40 font-light tracking-widest uppercase px-4" style={{ animationDelay: '0.9s' }}>
            Trusted by GST professionals across India
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-white/30 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
