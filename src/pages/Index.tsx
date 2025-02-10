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

      {/* Our Programs Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-neon text-xl font-anton tracking-wider mb-4">// OUR PROGRAMS</h2>
            <p className="text-gray-light">Select an your routine with our growing library of workouts led by our world-class trainers.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group relative">
              <img 
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f"
                alt="Yoga" 
                className="w-full h-[300px] object-cover rounded-lg brightness-75 group-hover:brightness-100 transition-all"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-anton tracking-wide mb-2">YOGA</h3>
                <p className="text-gray-light text-sm">Unleash your practice through traditional yoga flows with us.</p>
                <div className="h-1 w-24 bg-neon mt-4"></div>
              </div>
            </div>

            <div className="group relative">
              <img 
                src="https://images.unsplash.com/photo-1434596922112-19c563067271"
                alt="Cardio and HIT" 
                className="w-full h-[300px] object-cover rounded-lg brightness-75 group-hover:brightness-100 transition-all"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-anton tracking-wide mb-2">CARDIO AND HIT</h3>
                <p className="text-gray-light text-sm">Intense your practice through traditional yoga flows with us.</p>
                <div className="h-1 w-24 bg-neon mt-4"></div>
              </div>
            </div>

            <div className="group relative">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                alt="Strength Training" 
                className="w-full h-[300px] object-cover rounded-lg brightness-75 group-hover:brightness-100 transition-all"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-anton tracking-wide mb-2">STRENGTH TRAINING</h3>
                <p className="text-gray-light text-sm">Master your practice through traditional yoga flows with us.</p>
                <div className="h-1 w-24 bg-neon mt-4"></div>
              </div>
            </div>

            <div className="group relative">
              <img 
                src="https://images.unsplash.com/photo-1517637382994-f02da38c6728"
                alt="Mobility" 
                className="w-full h-[300px] object-cover rounded-lg brightness-75 group-hover:brightness-100 transition-all"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-anton tracking-wide mb-2">MOBILITY</h3>
                <p className="text-gray-light text-sm">Enhance your practice through traditional yoga flows with us.</p>
                <div className="h-1 w-24 bg-neon mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-neon text-xl font-anton tracking-wider mb-4">// MEMBERSHIP</h2>
            <p className="text-gray-light">Select an your routine with our growing library of workouts led by our world-class trainers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-800 p-8 rounded-lg hover:border-neon transition-colors">
              <div className="bg-neon text-black text-xs font-bold w-fit px-4 py-1 rounded-full mb-6">CLUB 01</div>
              <h3 className="text-3xl font-anton mb-2">1 DAY PASS</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-light">PRICE STARTS FROM</span>
                <span className="text-2xl font-anton">FREE</span>
              </div>
              <button className="w-full border border-white text-white hover:bg-white hover:text-black font-bold py-3 rounded-full transition-colors">
                SELECT
              </button>
            </div>

            <div className="border border-neon p-8 rounded-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon text-black text-xs font-bold px-4 py-1 rounded-full">
                RECOMMENDED BY USERS
              </div>
              <div className="bg-neon text-black text-xs font-bold w-fit px-4 py-1 rounded-full mb-6">CLUB 02</div>
              <h3 className="text-3xl font-anton mb-2">1 MONTH PASS</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-light">PRICE STARTS FROM</span>
                <span className="text-2xl font-anton">$20.00</span>
              </div>
              <button className="w-full bg-neon text-black hover:bg-white font-bold py-3 rounded-full transition-colors">
                SELECT
              </button>
            </div>

            <div className="border border-gray-800 p-8 rounded-lg hover:border-neon transition-colors">
              <div className="bg-neon text-black text-xs font-bold w-fit px-4 py-1 rounded-full mb-6">CLUB 03</div>
              <h3 className="text-3xl font-anton mb-2">1 WEEK PASS</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-light">PRICE STARTS FROM</span>
                <span className="text-2xl font-anton">$14.99</span>
              </div>
              <button className="w-full border border-white text-white hover:bg-white hover:text-black font-bold py-3 rounded-full transition-colors">
                SELECT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What They Say Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-neon text-xl font-anton tracking-wider mb-4">// WHAT THEY SAY</h2>
            <p className="text-gray-light">Select an your routine with our growing library of workouts led by our world-class trainers.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-xl font-anton leading-relaxed mb-8">
                "SINCE JOINING RAYCLUB, I HAVE SEEN INCREASED STRENGTH, SIZE AND ENERGY LEVELS! THE STAFF AT RG IS KNOWLEDGEABLE AND ACCESSIBLE. THEY APPROACH FITNESS ON A LEVEL I HAVEN'T EXPERIENCED AT OTHER GYMS!"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  alt="Profile" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">Debby Carburtor</h4>
                  <p className="text-sm text-gray-light">Sportslover</p>
                  <p className="text-sm text-gray-light">NewYork</p>
                </div>
              </div>
            </div>

            <div className="bg-neon text-black p-8 rounded-lg">
              <p className="text-xl font-anton leading-relaxed mb-8">
                "I TOOK THE BIG PLUNGE AND ENLISTED A PERSONAL TRAINER LAST SUMMER AT RG. SHE DESIGNED AN EXERCISE PROGRAM CUSTOMIZED TO TARGET WEIGHT LOSS, INCREASE STRENGTH AND IN GENERAL GETTING INTO BETTER SHAPE."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Profile" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">Janet Kent</h4>
                  <p className="text-sm text-gray-800">Student</p>
                  <p className="text-sm text-gray-800">California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
