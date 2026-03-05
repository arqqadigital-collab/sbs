import Navbar from '@/components/layout/Navbar';

const Hero = () => (
  <header className="relative overflow-hidden min-h-[600px] flex flex-col bg-[#003366]">
    {/* Video Background */}
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="https://res.cloudinary.com/dcjufshrh/video/upload/v1772449781/Untitled-1_jykftk.mp4" type="video/mp4" />
    </video>

    {/* Dark overlay to ensure text remains legible over the video */}
    <div className="absolute inset-0 bg-[#001133]/60 z-0"></div>

    <Navbar />

    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10 mt-12 mb-24">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6 drop-shadow-lg">
        Transforming Complexity into Digital Clarity
      </h1>
      <p className="text-blue-50 text-lg md:text-xl max-w-2xl mb-10 drop-shadow-md font-medium">
        End-to-end digital transformation for modern enterprises and healthcare organizations.
      </p>
      <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded transition-colors shadow-lg shadow-lime-500/30 uppercase tracking-wide text-sm">
        Start Your Digital Transformation
      </button>
    </div>
  </header>
);

export default Hero;
