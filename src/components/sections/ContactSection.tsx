import { Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const ContactSection = () => (
  <section className="py-24 bg-white px-4 md:px-8 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-[#003366] text-center mb-16 uppercase tracking-wider">
      Start Your Next <span className="text-lime-500">Big Move</span>
    </h2>

    <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
      {/* Contact Info */}
      <div className="w-full md:w-1/3 space-y-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#005599]" />
            Global Offices
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
              <span className="font-semibold text-gray-800">USA:</span>
              <a href="tel:+14073735356" className="hover:text-blue-600 transition-colors">+1 (407) 3735356</a>
            </li>
            <li className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
              <span className="font-semibold text-gray-800">UAE:</span>
              <a href="tel:+971044277705" className="hover:text-blue-600 transition-colors">(+971) 044277705</a>
            </li>
            <li className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
              <span className="font-semibold text-gray-800">Qatar:</span>
              <a href="tel:+97444267499" className="hover:text-blue-600 transition-colors">+974 4426 7499</a>
            </li>
            <li className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
              <span className="font-semibold text-gray-800">SA:</span>
              <a href="tel:+966115030522" className="hover:text-blue-600 transition-colors">+966 11 503 0522</a>
            </li>
            <li className="flex justify-between items-center text-gray-600 pb-2">
              <span className="font-semibold text-gray-800">Cairo:</span>
              <a href="tel:+20224725260" className="hover:text-blue-600 transition-colors">+2 (02) 24725260</a>
            </li>
          </ul>
        </div>

        <div className="bg-[#5c85c4] p-6 rounded-lg text-white">
           <h4 className="font-bold mb-4">Connect With Us</h4>
           <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/superior-business-solutions-sbs/" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded hover:bg-white/40 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5"/>
              </a>
              <a href="https://x.com/SBSUAE" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded hover:bg-white/40 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5"/>
              </a>
              <a href="https://www.facebook.com/superiorbusinesssolution/" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded hover:bg-white/40 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5"/>
              </a>
              <a href="https://www.instagram.com/superiorbusinesssolution/" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded hover:bg-white/40 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5"/>
              </a>
           </div>
        </div>
      </div>

      {/* Form */}
      <div className="w-full md:w-2/3 bg-gray-50 p-8 rounded-xl border border-gray-100">
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
             <button type="button" className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded transition-colors w-full md:w-auto uppercase tracking-wide text-sm">
                Send Message
             </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
