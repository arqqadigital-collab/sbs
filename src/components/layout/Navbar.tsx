import { Search } from 'lucide-react';

const Navbar = () => (
  <nav className="relative flex justify-center items-center py-6 px-4 md:px-8 text-white z-10 w-full">
    {/* Desktop Layout */}
    <div className="hidden md:flex items-center justify-between w-full max-w-7xl">
      <div className="flex items-center gap-6 lg:gap-10 flex-1 justify-end pr-8 lg:pr-16 text-sm font-medium">
        <a href="#" className="hover:text-lime-400 transition-colors">Products</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Solutions</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Company</a>
      </div>

      <div className="flex-shrink-0 z-20">
        <img 
          src="https://res.cloudinary.com/dcjufshrh/image/upload/v1771751101/Logo_aia3du.png" 
          alt="TechSync Logo" 
          className="h-12 lg:h-16 object-contain" 
        />
      </div>

      <div className="flex items-center gap-6 lg:gap-10 flex-1 justify-start pl-8 lg:pl-16 text-sm font-medium relative">
        <a href="#" className="hover:text-lime-400 transition-colors">Blog</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Pricing</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Resources</a>

        {/* Search Icon floated to the right edge */}
        <button className="absolute right-0 p-2 hover:bg-white/10 rounded-full transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>

    {/* Mobile Layout Fallback */}
    <div className="flex md:hidden justify-between items-center w-full">
      <img 
        src="https://res.cloudinary.com/dcjufshrh/image/upload/v1771751101/Logo_aia3du.png" 
        alt="TechSync Logo" 
        className="h-10 object-contain" 
      />
      <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
        <Search className="w-5 h-5" />
      </button>
    </div>
  </nav>
);

export default Navbar;
