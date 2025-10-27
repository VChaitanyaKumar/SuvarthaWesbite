export default function SuvarthaContact() {
  const contactMethods = [
    {
      title: "Give Us A Call",
      subtitle: "+44 7427527524",
      description: "Call us for prayer requests or general inquiries",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Send Us A Mail",
      subtitle: "suvarthaministriesuk@gmail.com",
      description: "Email us your questions or prayer requests",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Come Visit Us",
      subtitle: "Pegasus House, 17 Burleys Way, Leicester, LE1 3BH, UK",
      description: "Join us for worship every Sunday at 10:00 AM",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Get in touch with us for any questions or prayer requests.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className={`bg-white text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${method.color}`}>
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                {index === 0 && (
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{method.title}</h3>
              <p className="text-emerald-600 font-bold mb-4 text-lg">{method.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}