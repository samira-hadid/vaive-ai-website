import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 sm:py-8 lg:py-4 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-14 lg:gap-16 mb-12 sm:mb-14 lg:mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <img 
              src="/lovable-uploads/c034295e-0f3f-4ce7-9391-9f4852421390.PNG" 
              alt="VAIVE.AI" 
              className="h-6 sm:h-7 lg:h-8 w-auto mb-6 sm:mb-7 lg:mb-8"
            />
            <p className="text-white/50 text-sm sm:text-base leading-relaxed font-light tracking-wide">
              Your AI co-pilot for modern GST litigation practice management. 
              Built by professionals, for professionals.
            </p>
          </div>
          
          <div className="justify-items-center">
            <h4 className="font-light mb-6 sm:mb-7 lg:mb-8 text-white tracking-widest uppercase text-sm">Contact us</h4>
            <ul className="space-y-4 sm:space-y-5 lg:space-y-6 text-sm text-white/50">
            <li>info@vaive.ai</li>
            <li>+91 99xxxxxxxx</li>
              </ul>
          </div>
          
          <div className="justify-items-center">
            <h4 className="font-light mb-6 sm:mb-7 lg:mb-8 text-white tracking-widest uppercase text-sm">Follow us on:</h4>
            <ul className="space-y-4 sm:space-y-5 lg:space-y-6 text-sm text-white/50">
              <li className='flex'>
                <a href="https://www.linkedin.com/in/vaive-ai" className="flex-1 hover:text-white transition-colors duration-300 font-light tracking-wide me-4"><Linkedin /></a>
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
