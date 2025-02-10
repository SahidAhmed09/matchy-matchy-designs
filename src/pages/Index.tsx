
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black font-inter">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-white">
            <h1 className="text-3xl font-anton text-neon tracking-wider">RAY CLUB</h1>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/programs" className="nav-link font-medium tracking-wide">PROGRAMS</Link>
            <Link to="/testimonials" className="nav-link font-medium tracking-wide">TESTIMONIALS</Link>
            <Link to="/contact" className="nav-link font-medium tracking-wide">CONTACT</Link>
            <button className="neon-button font-bold tracking-wide">
              SIGN IN FOR MEMBERS
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div>
              <h2 className="text-neon text-xl md:text-2xl mb-4 font-anton tracking-wider">WELCOME TO THE</h2>
              <h1 className="text-4xl md:text-7xl font-anton mb-8 leading-tight tracking-tight">
                <span className="relative">
                  <span className="absolute top-1/2 left-0 w-full h-1 bg-neon transform -translate-y-1/2"></span>
                  MOST WANTED
                </span>
                <br />
                ONLINE PERSONAL
                <br />
                TRAINING
              </h1>
              <button className="neon-button text-lg font-bold tracking-wider">
                JOIN NOW
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc"
                alt="Professional Bodybuilder" 
                className="w-full h-[600px] object-cover rounded-lg brightness-90"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Marquee */}
      <div className="marquee-container mt-12">
        <div className="marquee-content py-4 text-black font-bold tracking-wider">
          <span className="mx-8">NEW VIDEOS DAILY</span>
          <span className="mx-8">BEGINNERS FRIENDLY</span>
          <span className="mx-8">LIVE CONSULTANCY</span>
          <span className="mx-8">20+ TRAINERS</span>
          <span className="mx-8">TRAIN ANYWHERE</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
