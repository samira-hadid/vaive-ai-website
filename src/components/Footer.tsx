import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-20 sm:py-12 lg:py-8 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-14 lg:gap-16 mb-12 sm:mb-14 lg:mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <img 
              src="/lovable-uploads/vaiveAiLogo.png" 
              alt="VAIVE.AI" 
              className="h-10 sm:h-11 lg:h-12 w-auto mb-0"
            />
            <p className="text-white/50 text-sm sm:text-base leading-relaxed font-light tracking-wide">
              Your AI co-pilot for modern GST litigation practice management. 
              Built by professionals, for professionals.
            </p>
          </div>
          
          <div className="justify-items-center">
            <h4 className="font-light mb-2 sm:mb-3 lg:mb-4 text-white tracking-widest uppercase text-sm">Contact us</h4>
            <ul className="space-y-1 sm:space-y-1 lg:space-y-1 text-sm text-white/50">
            <li>info@vaive.ai</li>
            <li>+91 9871399306</li>
              </ul>
          </div>
          
          <div className="justify-items-center">
            <h4 className="font-light mb-2 sm:mb-3 lg:mb-4 text-white tracking-widest uppercase text-sm">Follow us on:</h4>
            <ul className="space-y-4 sm:space-y-5 lg:space-y-6 text-sm text-white/50">
              <li className='flex'>
                <a href="https://www.linkedin.com/company/vaive-ai" className="flex-1 hover:text-white transition-colors duration-300 font-light tracking-wide me-4"><Linkedin /></a>
                <a href="https://www.instagram.com/vaive.ai?igsh=MXE3OXlvMng1YzFsbA%3D%3D&utm_source=qr" className="flex-1 hover:text-white transition-colors duration-300 font-light tracking-wide me-4"><Instagram /></a>
                <a href="https://youtube.com/@vaiveai?si=KQcfnorgzQPwCo3q" className="flex-1 hover:text-white transition-colors duration-300 font-light tracking-wide"><Youtube /></a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 sm:pt-10 lg:pt-6 text-sm text-white/40 font-light tracking-widest grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 ">
          <div  className="sm:col-span-1 lg:col-span-3">
              <p>&copy; 2025 VAIVE.AI              All rights reserved.</p>
          </div>
          <div className="lg:justify-items-end">
              <p>
                <a href="/terms" className="hover:text-white transition-colors duration-300 font-light tracking-wide me-4">Terms</a>
                 | 
                 <a href="/policy" className="hover:text-white transition-colors duration-300 font-light tracking-wide ms-4">Privacy Policy</a>
                 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
