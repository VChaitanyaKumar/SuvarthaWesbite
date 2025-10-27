export default function SuvarthaServices() {
  const services = [
    {
      day: "SUN",
      title: "Sunday Fellowship",
      subtitle: "Malayalam/English Service",
      time: "10:00 AM - 1:00 PM",
      timezone: "GMT",
      link: "Join on Zoom",
      bgColor: "bg-emerald-600",
      illustration: "church"
    },
    {
      day: "TUE", 
      title: "Tuesday Service",
      subtitle: "Evening Prayer & Fellowship",
      time: "7:00 PM - 8:30 PM",
      timezone: "GMT",
      link: "Join on Zoom",
      bgColor: "bg-blue-600",
      illustration: "prayer"
    }
  ];

  const childrenServices = [
    {
      day: "SAT",
      title: "Kids Church",
      subtitle: "Fun & Learning for Children",
      time: "3:30 PM - 5:00 PM",
      timezone: "GMT",
      link: "Join on Zoom",
      bgColor: "bg-orange-500",
      illustration: "kids"
    },
    {
      day: "SUN",
      title: "Kids Bible School", 
      subtitle: "Bible Stories & Activities",
      time: "9:00 AM - 10:00 AM",
      timezone: "GMT",
      link: "Join on Zoom",
      bgColor: "bg-purple-500",
      illustration: "book"
    }
  ];

  const ChurchIllustration = () => (
    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
      <rect x="60" y="120" width="80" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
      <polygon points="50,120 100,80 150,120" fill="#fca5a5" stroke="#dc2626" strokeWidth="2"/>
      <rect x="90" y="140" width="20" height="40" fill="#92400e"/>
      <circle cx="85" cy="105" r="3" fill="#fbbf24"/>
      <circle cx="115" cy="105" r="3" fill="#fbbf24"/>
      <rect x="95" y="90" width="10" height="15" fill="#92400e"/>
      <rect x="99" y="85" width="2" height="10" fill="#92400e"/>
      <rect x="95" y="88" width="10" height="2" fill="#92400e"/>
    </svg>
  );

  const PrayerIllustration = () => (
    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="80" r="25" fill="#fde68a"/>
      <rect x="85" y="105" width="30" height="40" fill="#bfdbfe"/>
      <rect x="75" y="115" width="15" height="30" fill="#fde68a"/>
      <rect x="110" y="115" width="15" height="30" fill="#fde68a"/>
      <circle cx="90" cy="75" r="2" fill="#374151"/>
      <circle cx="110" cy="75" r="2" fill="#374151"/>
      <path d="M95 85 Q100 90 105 85" stroke="#374151" strokeWidth="2" fill="none"/>
      <path d="M80 120 Q85 115 90 120" stroke="#374151" strokeWidth="2" fill="none"/>
      <path d="M110 120 Q115 115 120 120" stroke="#374151" strokeWidth="2" fill="none"/>
    </svg>
  );

  const KidsIllustration = () => (
    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
      <circle cx="80" cy="70" r="20" fill="#fde68a"/>
      <circle cx="120" cy="70" r="20" fill="#fde68a"/>
      <rect x="65" y="90" width="25" height="30" fill="#fca5a5"/>
      <rect x="110" y="90" width="25" height="30" fill="#a7f3d0"/>
      <rect x="60" y="100" width="10" height="20" fill="#fde68a"/>
      <rect x="70" y="100" width="10" height="20" fill="#fde68a"/>
      <rect x="115" y="100" width="10" height="20" fill="#fde68a"/>
      <rect x="125" y="100" width="10" height="20" fill="#fde68a"/>
      <circle cx="75" cy="65" r="2" fill="#374151"/>
      <circle cx="85" cy="65" r="2" fill="#374151"/>
      <circle cx="115" cy="65" r="2" fill="#374151"/>
      <circle cx="125" cy="65" r="2" fill="#374151"/>
    </svg>
  );

  const BookIllustration = () => (
    <svg className="w-32 h-32" viewBox="0 0 200 200" fill="none">
      <rect x="70" y="80" width="60" height="80" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2"/>
      <rect x="75" y="85" width="50" height="70" fill="#ffffff"/>
      <line x1="80" y1="95" x2="120" y2="95" stroke="#374151" strokeWidth="2"/>
      <line x1="80" y1="105" x2="115" y2="105" stroke="#374151" strokeWidth="1"/>
      <line x1="80" y1="115" x2="110" y2="115" stroke="#374151" strokeWidth="1"/>
      <line x1="80" y1="125" x2="118" y2="125" stroke="#374151" strokeWidth="1"/>
      <rect x="85" y="135" width="20" height="15" fill="#fbbf24"/>
    </svg>
  );

  const renderIllustration = (type: string) => {
    switch (type) {
      case 'church': return <ChurchIllustration />;
      case 'prayer': return <PrayerIllustration />;
      case 'kids': return <KidsIllustration />;
      case 'book': return <BookIllustration />;
      default: return <ChurchIllustration />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join with us to experience God's presence & to taste the living manna
          </p>
        </div>

        {/* Main Services */}
        <div className="max-w-6xl mx-auto mb-24">
          {services.map((service, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Illustration */}
                <div className="flex-shrink-0">
                  {renderIllustration(service.illustration)}
                </div>
                
                {/* Content Block */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row overflow-hidden">
                    {/* Left Color Block */}
                    <div className={`${service.bgColor} p-8 md:p-12 flex flex-col justify-center items-center md:items-start text-white min-w-[200px]`}>
                      <div className="text-4xl md:text-5xl font-black mb-2">
                        {service.day}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold">
                        {service.time}
                      </div>
                      <div className="text-sm opacity-90 mt-1">
                        {service.timezone}
                      </div>
                    </div>
                    
                    {/* Right Content Block */}
                    <div className="bg-white p-8 md:p-12 flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {service.subtitle}
                      </p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
                      >
                        {service.link}
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Children's Ministry Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-pink-400 text-white px-8 py-4 rounded-full shadow-lg">
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="font-bold text-xl">Children's Ministry</span>
          </div>
        </div>

        {/* Children's Services */}
        <div className="max-w-6xl mx-auto">
          {childrenServices.map((service, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Illustration */}
                <div className="flex-shrink-0 order-2 lg:order-1">
                  {renderIllustration(service.illustration)}
                </div>
                
                {/* Content Block */}
                <div className="flex-1 w-full order-1 lg:order-2">
                  <div className="flex flex-col md:flex-row overflow-hidden">
                    {/* Left Color Block */}
                    <div className={`${service.bgColor} p-8 md:p-12 flex flex-col justify-center items-center md:items-start text-white min-w-[200px]`}>
                      <div className="text-4xl md:text-5xl font-black mb-2">
                        {service.day}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold">
                        {service.time}
                      </div>
                      <div className="text-sm opacity-90 mt-1">
                        {service.timezone}
                      </div>
                    </div>
                    
                    {/* Right Content Block */}
                    <div className="bg-white p-8 md:p-12 flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {service.subtitle}
                      </p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
                      >
                        {service.link}
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Online Connection Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Join Us Online
            </h3>
            <p className="text-xl mb-6 opacity-90">
              All services are available on Zoom
            </p>
            <div className="text-2xl font-bold mb-2">
              Zoom ID: 356383230
            </div>
            <a 
              href="#" 
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-colors group"
            >
              Join Meeting
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}