
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-white">
            <h1 className="text-2xl font-bold text-neon">RAY CLUB</h1>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/programs" className="nav-link">PROGRAMS</Link>
            <Link to="/testimonials" className="nav-link">TESTIMONIALS</Link>
            <Link to="/contact" className="nav-link">CONTACT</Link>
            <button className="neon-button">
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
              <h2 className="text-neon text-xl md:text-2xl mb-4">WELCOME TO THE</h2>
              <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                MOST WANTED
                <br />
                ONLINE PERSONAL
                <br />
                TRAINING
              </h1>
              <button className="neon-button text-lg">
                JOIN NOW
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Fitness Training" 
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Marquee */}
      <div className="marquee-container mt-12">
        <div className="marquee-content py-4 text-black font-bold">
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
