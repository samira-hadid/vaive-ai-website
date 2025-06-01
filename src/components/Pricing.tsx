
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const PricingCard = ({ plan, index }: { plan: any, index: number }) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0 translate-y-16'
        }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={`relative group h-full ${plan.popular ? 'scale-100 sm:scale-105' : ''}`}>
        {plan.popular && (
          <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 z-10">
            <span className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide">
              Most Popular
            </span>
          </div>
        )}

        <div className={`absolute -inset-0.5 bg-gradient-to-r from-white/10 to-gray-300/5 rounded-3xl opacity-0 transition-opacity duration-700 ${plan.popular ? 'opacity-100' : 'group-hover:opacity-100'
          }`}></div>

        <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 h-full hover:bg-black/70 hover:border-white/20 transition-all duration-700">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 sm:mb-6 tracking-wide">{plan.name}</h3>
            <div className="mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">{plan.price}</div>
              <div className="text-white/50 ml-2 sm:ml-3 font-light tracking-wide text-sm sm:text-base">{plan.period}</div>
              <div className="min-h-6 text-white/50 ml-2 sm:ml-3 font-light tracking-wide text-sm sm:text-base">{plan.users}</div>
            </div>
            <p className="min-h-16 text-white/60 text-sm sm:text-base font-light leading-relaxed tracking-wide">{plan.description}</p>
          </div>

          <ul className="space-y-3 sm:space-y-3 lg:space-y-4 mb-8 sm:mb-10 lg:mb-12">
            {plan.features.map((feature: string, featureIndex: number) => (
              <li key={featureIndex} className="flex items-start text-white/70 font-light">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 mr-3 sm:mr-4 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm leading-relaxed tracking-wide">{feature}</span>
              </li>
            ))}
          </ul>
          <a href={plan.btnLink}>
            <Button
              className={`w-full rounded-full font-light transition-all duration-500 py-4 sm:py-5 lg:py-6 text-sm sm:text-base tracking-wide ${plan.popular
                ? 'bg-white text-black hover:bg-gray-100 hover:scale-105'
                : 'bg-transparent text-white hover:bg-white/10 border border-white/30 hover:border-white/60'
                }`}
              size="lg"
            >
              {plan.btnLabel}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [titleRef, titleIntersecting] = useIntersectionObserver();

  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "per month",
      users: " ",
      description: "Explore core features and experience the platform at no cost.",
      features: [
        "Up to 5 queries/day",
        "Advanced GST Query Assistant",
        "Full-Suite Drafting Tools",
        "Clause-Level Contract Analysis",
        "Conversational AI for GST Reply Drafting -  2 lifetime uploads"
      ],
      btnLabel: 'Get started',
      btnLink: 'https://platform.vaive.ai/',
      popular: false
    },
    {
      name: "Individual",
      price: "₹600",
      period: "per month",
      users: "  ",
      description: "Designed for independent practitioners ready to simplify GST workflows.",
      features: [
        "Unlimited queries",
        "Advanced GST Query Assistant",
        "Full-Suite Drafting Tools",
        "Clause-Level Contract Analysis",
        "Conversational AI for GST Reply Drafting -  10 monthly uploads",
        "Access to the latest GST updates",
        "Dedicated Support Team",
        "Access to high end AI model"
      ],
      btnLabel: 'Contact us',
      btnLink: 'https://tally.so/r/wzoKGg',
    },
    {
      name: "Firm",
      price: "₹2,000",
      period: "per month",
      users: "upto 4 users",
      description: "Advanced solutions for growing teams with complex litigation workflows.",
      features: [
        "Unlimited queries",
        "Advanced GST Query Assistant",
        "Full-Suite Drafting Tools",
        "Clause-Level Contract Analysis",
        "Conversational AI for GST Reply Drafting -  30 monthly uploads",
        "GST Litigation Management",
        "Automatic GST Notice Fetching",
        "Client Management System",
        "Invoice & EL Generation",
        "Access to the latest GST updates",
        "Dedicated Support Team",
        "Access to high end AI model"
      ],
      popular: false,
      btnLabel: 'Contact us',
      btnLink: 'https://tally.so/r/wzoKGg',
    }
  ];

  return (
    <section id="pricing" className="py-10 sm:py-10 lg:py-10 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-24 sm:mb-28 lg:mb-32 transition-all duration-1000 ${titleIntersecting ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-16'
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 sm:mb-10 lg:mb-12 tracking-tight font-serif leading-tight">
            Simple, Transparent
            <span className="block font-light">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-4xl mx-auto font-light leading-relaxed tracking-wide px-4">
            Choose the plan that best fits your firm's needs. All plans include core features with no hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto mb-16 sm:mb-18 lg:mb-20">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        <div className="text-center px-4">
          <p className="text-white/50 mb-6 sm:mb-8 font-light tracking-wide text-sm sm:text-base">More than 4 users? No problem—contact us for a custom solution that fits your team.</p>
          <a className='hover:text-white' href="https://tally.so/r/wzoKGg"><Button
            variant="ghost"
            className="border border-white/20 text-white hover:text-white hover:bg-white/10 hover:border-white/40 rounded-full px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 font-light tracking-wide text-sm sm:text-base w-full sm:w-auto"
          >
            Contact Sales for Custom Plans
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
