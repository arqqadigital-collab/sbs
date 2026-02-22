import { useState } from 'react';
import { Check } from 'lucide-react';

const tabData: Record<string, { title: string; description: string; capabilities: string[]; cta: string; image: string }> = {
  'ERP & Enterprise Systems': {
    title: 'Power Your Business with Scalable ERP Ecosystems',
    description: 'Our ERP Ecosystem features top-tier platforms including Odoo ERP Solutions, Microsoft Dynamics 365 (Business Central & CE), and Zoho Business Applications.',
    capabilities: [
      'ERP implementation & customization',
      'Financial & operational automation',
      'Real-time reporting & analytics',
      'Process optimization & system integration'
    ],
    cta: 'Explore ERP Solutions',
    image: 'https://res.cloudinary.com/dcjufshrh/image/upload/v1771751606/ERP_qrrm9a.png'
  },
  'Healthcare Digital Transformation': {
    title: 'Healthcare Digital Transformation',
    description: 'Enhance patient care and streamline operations with our advanced healthcare technology solutions. We integrate data securely to provide actionable insights.',
    capabilities: [
      'Comprehensive Electronic Health Records',
      'Secure Telemedicine Platforms',
      'Predictive Analytics for Patient Care',
      'Streamlined Billing Systems'
    ],
    cta: 'Discover Healthcare Solutions',
    image: 'https://res.cloudinary.com/dcjufshrh/image/upload/v1771751606/healthcare_k1ki2q.png'
  },
  'Technology & Professional Services': {
    title: 'Expert Support That Powers Successful Transformation',
    description: 'Leverage our specialized expertise and regional compliance knowledge to ensure your transformation projects are delivered securely, efficiently, and to the highest standards.',
    capabilities: [
      'AI Healthcare Transformation Consulting',
      'Compliance with DHA, DoH, ADHICS, and regional healthcare standards',
      'Staff Augmentation & Managed Services',
      'Implementation and Integration services'
    ],
    cta: 'Explore Technology Services',
    image: 'https://res.cloudinary.com/dcjufshrh/image/upload/v1771751607/technnology_lt7jfs.png'
  }
};

const TransformSection = () => {
  const [activeTab, setActiveTab] = useState('ERP & Enterprise Systems');
  
  const tabs = Object.keys(tabData);
  const currentContent = tabData[activeTab];

  return (
    <section className="py-24 bg-white px-4 md:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[#003366] mb-4">
        How We Transform <span className="text-lime-500">Your Business</span>
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Our solutions combine technology, automation, and industry expertise to help organizations modernize operations and accelerate digital growth.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === tab 
                ? 'bg-[#005599] text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row gap-12 text-left items-center min-h-[400px]">
        <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-xl h-64 md:h-96">
          <img 
            key={currentContent.image}
            src={currentContent.image}
            alt={currentContent.title} 
            className="w-full h-full object-cover animate-in fade-in duration-500"
          />
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply pointer-events-none"></div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-bold text-[#003366]">{currentContent.title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {currentContent.description}
          </p>
          <ul className="space-y-3">
            {currentContent.capabilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#005599] hover:bg-[#003366] text-white font-medium py-3 px-6 rounded transition-colors mt-4 uppercase text-sm tracking-wide">
            {currentContent.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
