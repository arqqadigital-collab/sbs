import { Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import GlowingButton from '@/components/ui/GlowingButton';

const ContactSection = () => (
  <section className="py-24 bg-gray-50 relative overflow-hidden">
    <div 
      className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
      style={{ 
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    ></div>

    <div className="px-4 md:px-8 max-w-6xl mx-auto relative z-10">
      <h2 className="text-3xl font-bold text-[#003366] text-center mb-16 uppercase tracking-wider">
        Start Your Next <span className="text-lime-500">Big Move</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">
        
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          
          <div className="bg-lime-500 mix-blend-multiply p-8 rounded-xl text-white shadow-lg flex-1 border border-lime-400/20">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-white" />
              Global Offices
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-lime-400/50 pb-2">
                <span className="font-semibold text-lime-50">USA:</span>
                <a href="tel:+14073735356" className="hover:text-white transition-colors text-sm">+1 (407) 3735356</a>
              </li>
              <li className="flex justify-between items-center border-b border-lime-400/50 pb-2">
                <span className="font-semibold text-lime-50">UAE:</span>
                <a href="tel:+971044277705" className="hover:text-white transition-colors text-sm">(+971) 044277705</a>
              </li>
              <li className="flex justify-between items-center border-b border-lime-400/50 pb-2">
                <span className="font-semibold text-lime-50">Qatar:</span>
                <a href="tel:+97444267499" className="hover:text-white transition-colors text-sm">+974 4426 7499</a>
              </li>
              <li className="flex justify-between items-center border-b border-lime-400/50 pb-2">
                <span className="font-semibold text-lime-50">SA:</span>
                <a href="tel:+966115030522" className="hover:text-white transition-colors text-sm">+966 11 503 0522</a>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span className="font-semibold text-lime-50">Cairo:</span>
                <a href="tel:+20224725260" className="hover:text-white transition-colors text-sm">+2 (02) 24725260</a>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a4b8c] mix-blend-multiply p-8 rounded-xl text-white shadow-lg shrink-0 border border-blue-400/20">
             <h4 className="font-bold mb-6 text-xl">Connect With Us</h4>
             <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/superior-business-solutions-sbs/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-lime-500 hover:text-white transition-all" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5"/>
                </a>
                <a href="https://x.com/SBSUAE" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-lime-500 hover:text-white transition-all" aria-label="Twitter">
                  <Twitter className="w-5 h-5"/>
                </a>
                <a href="https://www.facebook.com/superiorbusinesssolution/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-lime-500 hover:text-white transition-all" aria-label="Facebook">
                  <Facebook className="w-5 h-5"/>
                </a>
                <a href="https://www.instagram.com/superiorbusinesssolution/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-lime-500 hover:text-white transition-all" aria-label="Instagram">
                  <Instagram className="w-5 h-5"/>
                </a>
             </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 bg-white mix-blend-multiply p-8 rounded-xl border border-gray-100 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Area of inquiry</label>
                 <select className="w-full p-3 rounded bg-white border border-gray-200 text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" defaultValue="">
                    <option value="" disabled>Select an area...</option>
                    <option value="erp">ERP & Enterprise Systems</option>
                    <option value="healthcare">Healthcare Digital Transformation</option>
                    <option value="tech_services">Technology & Professional Services</option>
                    <option value="other">Other Inquiry</option>
                 </select>
              </div>
            </div>

            <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
               <textarea rows={4} className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"></textarea>
            </div>

            <div className="flex justify-end pt-2">
               <GlowingButton type="button" className="w-full md:w-auto">
                  Send Message
               </GlowingButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
