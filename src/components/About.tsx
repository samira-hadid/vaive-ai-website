
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About = () => {
  const [titleRef, titleIntersecting] = useIntersectionObserver();
  const [contentRef, contentIntersecting] = useIntersectionObserver();
  const [statsRef, statsIntersecting] = useIntersectionObserver();

  return (
    <section id="about" className="py-20 sm:py-32 lg:py-40 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 sm:mb-18 lg:mb-20 transition-all duration-1000 ${
              titleIntersecting ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-16'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 sm:mb-10 lg:mb-12 tracking-tight font-serif leading-tight">
              About
              <span className="block font-light bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                VAIVE.AI
              </span>
            </h2>
          </div>
          
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 ${
              contentIntersecting ? 'opacity-100' : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed space-y-8 sm:space-y-10 lg:space-y-12 font-light tracking-wide">
              <p>
                At Vaive.ai, we are redefining how Chartered Accountants, Legal Advisors & Professionals 
                manage litigation, client management and documentation. Built by professionals for professionals, 
                our platform combines the precision of legal expertise with the power of artificial intelligence 
                to streamline and simplify complex workflows.
              </p>
              
              <p>
                Starting with GST litigation, Vaive.ai is on a mission to become a one-stop solution for every 
                aspect of a professional's practice — from client onboarding and document management to automated 
                legal drafting and case tracking. Our smart tools not only enhance accuracy but also save valuable 
                time, letting you focus on what matters most — your clients.
              </p>
              
              <p>
                With AI-driven insights, auto-fetching capabilities, dynamic drafting engines, and intelligent 
                trackers, we ensure that every user experiences efficiency at scale. We're not just another software. 
                We're your AI co-pilot for modern practice management.
              </p>
            </div>
          </div>

          <div 
            ref={statsRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-14 lg:gap-16 mt-24 sm:mt-28 lg:mt-32 transition-all duration-1000 ${
              statsIntersecting ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-16'
            }`}
          >
            {[
              { number: "100%", label: "AUTOMATED NOTICE RETRIEVAL" },
              { number: "4x", label: "IMPROVEMENT IN RESPONSE" },
              { number: "95%", label: "Time Saved" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-500 font-serif">
                  {stat.number}
                </div>
                <div className="text-white/50 tracking-widest uppercase text-xs sm:text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
