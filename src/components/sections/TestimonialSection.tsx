import { useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with this team has completely revolutionized how we operate. Their deep understanding of our industry coupled with their technical expertise allowed us to implement a solution that exceeded our expectations. Our efficiency has increased dramatically, and we are finally leveraging our data effectively.",
    author: "Sarah Jenkins",
    title: "Chief Operations Officer",
    initial: "S"
  },
  {
    quote: "SBS provided an unparalleled ERP integration experience. From the initial consultation to the final deployment, their team was incredibly responsive and proactive. We have seen a 40% reduction in operational bottlenecks since going live.",
    author: "Mark Thompson",
    title: "Chief Technology Officer",
    initial: "M"
  },
  {
    quote: "Their healthcare digital transformation solutions have streamlined our hospital's entire workflow. Ensuring compliance across DHA and regional standards was critical for us, and they handled it with absolute precision.",
    author: "Dr. Emily Chen",
    title: "Hospital Director",
    initial: "E"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-50 px-4 text-center">
      <h2 className="text-3xl font-bold text-[#003366] mb-4">
        What Our <span className="text-lime-500">Clients Say</span>
      </h2>
      <p className="text-gray-500 mb-12 max-w-3xl mx-auto">
        Hear directly from organizations that trusted SBS Superior Business Solutions to execute their digital transformation initiatives with precision and impact.
      </p>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative flex flex-col md:flex-row items-center md:items-start gap-8 text-left min-h-[300px]">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-lime-400 rounded-l-2xl"></div>
        
        <div className="shrink-0 flex flex-col items-center">
           <div className="w-24 h-24 rounded-full bg-blue-50 border-4 border-white shadow-md flex items-center justify-center text-blue-500 mb-4 overflow-hidden">
              <span className="text-4xl font-bold font-serif">{testimonials[activeIndex].initial}</span>
           </div>
           <div className="text-yellow-400 flex gap-1 text-sm">
             {'★★★★★'}
           </div>
        </div>

        <div className="flex-1 transition-opacity duration-300" key={activeIndex}>
          <Quote className="w-10 h-10 text-gray-200 mb-4" />
          <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
            "{testimonials[activeIndex].quote}"
          </p>
          <div>
            <h4 className="font-bold text-[#003366] text-lg">{testimonials[activeIndex].author}</h4>
            <p className="text-gray-500 text-sm">{testimonials[activeIndex].title}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === idx ? 'bg-[#005599] scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
