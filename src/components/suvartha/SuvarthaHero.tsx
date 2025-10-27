export default function SuvarthaHero() {
  return (
    <section id="home" className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Top Badge */}
        <div className="inline-block bg-emerald-600/30 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-emerald-400/50">
          <span className="text-sm font-medium">2025 - YEAR OF REPLENISHMENT</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Welcome to<br />
          <span className="text-emerald-200">
            Suvartha Ministries UK
          </span>
        </h1>

        {/* Scripture Reference */}
        <p className="text-xl md:text-2xl mb-6 font-medium opacity-90">Jeremiah 31:25</p>
        
        {/* Scripture Quote */}
        <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
          "For I have satiated the weary soul, and I have replenished every sorrowful soul."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-white text-emerald-800 px-10 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Join Our Services</span>
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Us
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}