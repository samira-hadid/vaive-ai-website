
import { Search, User, FileText, MessageSquare, Briefcase, Shield, Monitor, Scale } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isIntersecting 
          ? 'opacity-100' 
          : 'opacity-0 translate-y-16'
      }`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <div className="group relative mb-24 sm:mb-28 lg:mb-32">
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white/5 rounded-2xl mb-6 sm:mb-7 lg:mb-8 group-hover:bg-white/10 transition-all duration-700">
              <div className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                {feature.icon}
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-7 lg:mb-8 text-white font-serif tracking-tight leading-tight">
              {feature.title}
            </h3>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/60 mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-light max-w-4xl mx-auto tracking-wide">
              {feature.description}
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 ${feature.benefits.length===3?'lg:grid-cols-3':'lg:grid-cols-4'} gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto`}>
            {feature.benefits.map((benefit: string, benefitIndex: number) => (
              <div key={benefitIndex} className="text-left group/item">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 h-full hover:bg-white/8 hover:border-white/20 transition-all duration-500">
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light group-hover/item:text-white/90 transition-all duration-300">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const [titleRef, titleIntersecting] = useIntersectionObserver();

  const features = [
    {
      icon: <Search className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />,
      title: "Specialized GST Research Expert",
      description: "Instantly query vast GST databases, circulars, and case laws using AI. Get clear, citable answers and relevant precedents in seconds, directly within your workflow.",
      benefits: [
        "Drastically reduce hours spent on manual research",
        "Access up-to-date and precise GST information",
        "Formulate stronger, well-supported advisory for clients",
        "Easily grasp complex provisions and their interpretations"
      ]
    },
    {
      icon: <User className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />,
      title: "Client Management",
      description: "A dedicated workspace to manage all your clients in one place. Feed client details, generate and store invoices, engagement letters, and to-dos.",
      benefits: [
        "Streamline client onboarding with AI-powered precision",
        "Reduce manual effort in creating invoices and ELs",
        "Ensure any team member can pick up client work",
        "Stay on top with smart notes and to-dos"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />,
      title: "Litigation Management",
      description: "A centralized, AI-powered platform to effortlessly organize, track, and manage every aspect of your GST litigation — from notices and appeals to response drafting and case status monitoring — all in one place.",
      benefits: [
        "Get a clear, unified view of all ongoing litigation",
        "Track critical dates, hearings, and submission timelines",
        "Proactively inform clients and manage expectations",
        "Keep all case-related files organized and accessible"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />,
      title: "Conversational AI Reply Drafting",
      description: "Upload the GST notice and let the tool handle the rest — from summarizing and analyzing to preparing a response draft based on guided inputs.",
      benefits: [
        "Expedite the notice reply process significantly",
        "Enhance the accuracy and thoroughness of your replies",
        "Let AI handle the reply drafting and framework",
        "Ensure a consistent tone and quality across replies"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />,
      title: "AI Professional Toolkit",
      description: "A suite of versatile AI tools to assist with document drafting, summarization, and contract risk analysis.",
      benefits: [
        "Document Drafter: AI-Powered assistant that generates legal documents like Net Worth Certificates, NDAs etc",
        "Summariser: Upload any document — from orders to case files — and get a concise, AI-generated summary",
        "Contract Analyser: Upload a contract and receive a clear risk report highlighting clauses that may pose legal risks"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-32 lg:py-40 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-24 sm:mb-28 lg:mb-32 transition-all duration-1000 ${
            titleIntersecting ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-16'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 sm:mb-10 lg:mb-12 tracking-tight font-serif leading-tight">
            Empower your <span style={{letterSpacing:'1.5px'}}>firm </span>
            <span className="block font-light">with Vaive.ai</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-4xl mx-auto font-light leading-relaxed tracking-wide px-4">
            Everything you need to streamline your GST litigation practice, from research to client management
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
