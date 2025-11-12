import {
  Target,
  Users,
  Leaf,
  Zap,
  Globe,
  DollarSign,
  Ship,
  Award,
  TrendingUp,
  MapPin,
  Calendar,
  ChevronRight,
  Truck,
  Factory,
  Sparkles,
} from "lucide-react";

export default function ConceptNote() {
  return (
    <div className=" bg-white">
      {/* WELCOME SECTION */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full mb-6">
              <span className="font-bold text-sm tracking-wide">
                SECOND EDITION
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                WELCOME
              </span>
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-green-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Nigeria – Morocco Business Week (2nd NMBW) / Investment Summit
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <Calendar
                  className="text-green-600 flex-shrink-0 mt-1"
                  size={32}
                />
                <div>
                  <p className="text-sm text-green-700 font-semibold mb-1">
                    DATE
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    8th – 11th December 2025
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <MapPin
                  className="text-green-600 flex-shrink-0 mt-1"
                  size={32}
                />
                <div>
                  <p className="text-sm text-green-700 font-semibold mb-1">
                    LOCATION
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    Lagos • Kano • Abuja
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl mb-6">
              <h3 className="text-2xl font-bold mb-4">Theme</h3>
              <p className="text-lg leading-relaxed">
                Advancing Nigeria – Morocco Trade & Investments through Economic
                Integration & Implementation
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The summit was designed to deepen the long existing cordial
              relations between the two nations that have long historic cultural
              ties with shared aspirations on economy, trade and investments.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This summit will serve as a platform for dialogue, knowledge
              exchange, and strategic partnerships, aligning with the broader
              vision of enhancing trade and investment flows between the two
              nations thereby presenting opportunity to explore new avenues for
              collaboration, share best practices, and collectively work towards
              achieving our shared economic objectives.
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGIC OBJECTIVES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                STRATEGIC OBJECTIVES
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Building on the momentum of the inaugural Casablanca edition,
              providing a dynamic, action-oriented platform to foster joint
              investments and unlock trade across key sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    $10 Billion
                  </h3>
                  <p className="text-green-600 font-semibold">
                    Annual Trade Potential
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Bilateral trade between Nigeria and Morocco holds the potential
                to exceed $10 billion annually
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    $7 Billion
                  </h3>
                  <p className="text-green-600 font-semibold">
                    Agriculture Trade Value
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Agriculture and agri-products alone projected to contribute
                approximately $7 billion
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Target,
                text: "Deepen bilateral trade and economic relations between Nigeria and Morocco through actionable partnerships",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: Factory,
                text: "Facilitate access to Nigerian raw materials and consumer markets for Moroccan industries",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: Users,
                text: "Promote joint ventures and the localization of Moroccan businesses in Nigeria, especially in agri-processing, dairy, solid minerals and solar energy",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: Globe,
                text: "Address key challenges around tariffs, certification, logistics, and investment policy alignment through implementation of existing agreements and leveraging AfCFTA",
                color: "from-orange-500 to-red-600",
              },
              {
                icon: Ship,
                text: "Establish direct maritime sea lane between Lagos and Moroccan port cities to reduce transit time and logistics cost to Morocco, Europe and beyond",
                color: "from-teal-500 to-green-600",
              },
              {
                icon: Award,
                text: "Establish new joint Trade and Investment Council to serve as a platform for networking, promoting investment opportunities, and knowledge exchange",
                color: "from-indigo-500 to-blue-600",
              },
            ].map((obj, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border-l-4 border-green-600"
              >
                <div className="flex items-start space-x-5">
                  <div
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${obj.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}
                  >
                    <obj.icon className="text-white" size={26} />
                  </div>
                  <p className="text-gray-800 text-lg leading-relaxed pt-2">
                    {obj.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORAL FOCUS */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                SECTORAL FOCUS & TRADE OPPORTUNITIES
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Agriculture & Agri-business",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: Zap,
                title: "Electricity & Renewable Energy",
                color: "from-yellow-500 to-orange-600",
              },
              {
                icon: Globe,
                title: "Digital Economy",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: DollarSign,
                title: "Banking & Finance",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: Users,
                title: "Tourism, Culture & Handicrafts",
                color: "from-red-500 to-rose-600",
              },
              {
                icon: Factory,
                title: "Mines & Steel",
                color: "from-gray-600 to-slate-700",
              },
            ].map((sector, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${sector.color}`}></div>
                <div className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}
                  >
                    <sector.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {sector.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGRICULTURE & AGRI-BUSINESS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Leaf className="text-green-600" size={48} />
              <h2 className="text-5xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  AGRICULTURE & AGRI-BUSINESS
                </span>
              </h2>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-4xl font-bold mb-4">$10 Billion</h3>
              <p className="text-xl mb-6">
                Nigeria imported food and agricultural products in 2023
                according to International Trade Administration
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <ChevronRight size={20} />
                  <span>World-class expertise in fertilizers (OCP)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight size={20} />
                  <span>Advanced irrigation systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight size={20} />
                  <span>Greenhouse technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight size={20} />
                  <span>New farming technologies</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Moroccan Agribusiness Investment",
                  desc: "Investment in Nigeria's food belt - approximately $7 billion opportunity in Nigerian market for agri-food products",
                },
                {
                  title: "Special Agro-Processing Zones",
                  desc: "Partnership for improvement of current production to attain food security and export excess",
                },
                {
                  title: "Livestock Trade Development",
                  desc: "Partnership with World Bank L-PRES project to improve milk quality and beef market development",
                },
              ].map((opp, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg border-l-4 border-green-600"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {opp.title}
                  </h4>
                  <p className="text-gray-700">{opp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Sparkles className="text-green-600 mr-3" size={28} />
              Key Opportunities
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Create an opportunity and template for Nigerian and Moroccan
              companies in the agriculture sector for knowledge exchange
              regarding Morocco's new agricultural techniques & innovative
              solutions to promote new agricultural practices, and to establish
              joint ventures and partnerships by taking advantage of Nigeria's
              vast arable land, dams and good climate to enhance agricultural
              production for food security and exports.
            </p>
          </div>
        </div>
      </section>

      {/* ELECTRICITY & RENEWABLE ENERGY */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Zap className="text-orange-600" size={48} />
              <h2 className="text-5xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  ELECTRICITY & RENEWABLE ENERGY
                </span>
              </h2>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-orange-600 to-yellow-600 text-white rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-transform">
              <h3 className="text-3xl font-bold mb-4">
                Morocco's Noor Solar Plant
              </h3>
              <p className="text-xl">
                The largest concentrated solar powered plant in the World
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-transform">
              <h3 className="text-3xl font-bold mb-4">Nigeria's Energy Gap</h3>
              <p className="text-xl">
                Significant energy access gaps especially for industrial use
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="text-orange-600 mr-3" size={32} />
              Opportunities
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Energy Collaboration
                  </h4>
                  <p className="text-gray-700">
                    Collaboration between Moroccan Energy companies and Nigeria
                    State governments, Regional development commissions,
                    Electricity Distribution companies, Rural Electrification
                    Agency on solar mini-grids, panel manufacturing, and energy
                    storage systems
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Factory className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Industrial Parks
                  </h4>
                  <p className="text-gray-700">
                    Joint development of renewable-powered industrial parks in
                    Nigeria to increase electricity generation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL ECONOMY & BANKING */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Digital Economy */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <Globe className="text-blue-600" size={40} />
                  <h2 className="text-4xl font-bold">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      DIGITAL ECONOMY
                    </span>
                  </h2>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mb-6"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Both countries are digital leaders in their sub-regions
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Startup incubation",
                  "E-commerce integration",
                  "Digital ID solutions",
                  "Cross-border fintech collaboration",
                  "Cybersecurity infrastructure",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="text-white" size={18} />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Banking & Finance */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <DollarSign className="text-purple-600" size={40} />
                  <h2 className="text-4xl font-bold">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      BANKING & FINANCE
                    </span>
                  </h2>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mb-6"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Essential for unlocking full potential of Nigeria-Morocco
                  trade relations
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Bank-to-bank cooperation",
                  "Correspondent banking & letters of credit",
                  "Bilateral payment systems",
                  "Fintech partnerships",
                  "Joint venture funding framework",
                  "Bilateral financial desks",
                  "Islamic finance and green bonds",
                  "Development finance collaboration",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="text-white" size={18} />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES HIGHLIGHTS */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">FEATURES HIGHLIGHTS</h2>
            <div className="w-32 h-1.5 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Opening Ceremony",
                desc: "Grand launch with dignitaries and stakeholders",
              },
              {
                title: "Exhibitions",
                desc: "Product showcases from both nations",
              },
              { title: "B2B Sessions", desc: "Curated business matching" },
              {
                title: "Panel Discussions",
                desc: "Sector-specific expert panels",
              },
              {
                title: "Site Tours",
                desc: "Visits to key trade hubs and facilities",
              },
              {
                title: "Networking Dinner",
                desc: "High-level connections with VIPs",
              },
              {
                title: "MoU Signings",
                desc: "Strategic partnership agreements",
              },
              {
                title: "Investment Pitches",
                desc: "Project presentations and funding",
              },
              {
                title: "Cultural Exchange",
                desc: "Showcasing heritage and handicrafts",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-green-100">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT SCHEDULE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EVENT PROGRAMME OVERVIEW
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {[
              {
                location: "Lagos",
                date: "December 8th – 9th",
                activities:
                  "Opening Ceremony, Exhibitions, B2B Sessions, Panel Sessions and Tours of key Trade Hubs around Lagos",
                color: "from-blue-500 to-blue-600",
              },
              {
                location: "Kano",
                date: "December 10th",
                activities:
                  "Stakeholder Roundtable on Agriculture & Commerce and Market visits",
                color: "from-green-500 to-green-600",
              },
              {
                location: "Abuja",
                date: "December 11th",
                activities:
                  "High-level Networking Dinner with Government officials, Captains of Industries and VIPs",
                color: "from-purple-500 to-purple-600",
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-green-100 transform hover:scale-105 transition-all"
              >
                <div className={`bg-gradient-to-r ${event.color} p-6`}>
                  <div className="flex items-center justify-between text-white">
                    <h3 className="text-3xl font-bold">{event.location}</h3>
                    <div className="flex items-center space-x-2">
                      <Calendar size={24} />
                      <span className="text-xl font-semibold">
                        {event.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {event.activities}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTICIPANTS & STAKEHOLDERS */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                PARTICIPANTS & STAKEHOLDERS
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Organizing Committee
            </h3>

            <div className="space-y-6">
              {[
                {
                  role: "Chairman",
                  name: "Vice Admiral A.Z. Gambo (Rtd.)",
                  title: "21st Chief of Naval Staff, Nigerian Navy",
                  color: "from-green-600 to-emerald-600",
                },
                {
                  role: "Vice Chairman",
                  name: "Amb. Usman Sarki",
                  title:
                    "Former Deputy Permanent Representative of Nigeria to the United Nations",
                  color: "from-blue-600 to-cyan-600",
                },
                {
                  role: "Secretary",
                  name: "Mahmoud Yola Abdulhamid",
                  title:
                    "CEO/Founder Spectre Trans-Trade Global; Lead Convener & Investment Facilitator",
                  color: "from-purple-600 to-pink-600",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-green-600"
                >
                  <div className="flex items-start space-x-5">
                    <div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${member.color} rounded-xl flex items-center justify-center`}
                    >
                      <Users className="text-white" size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-green-600 font-semibold mb-1">
                        {member.role}
                      </p>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h4>
                      <p className="text-gray-600">{member.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Committee Members
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700 font-medium">
                    Mohammed Rhali - Private Sector Liaison, Morocco
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700 font-medium">
                    Uba Dan Zainab - National Deputy Treasurer NACCIMA
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Key Stakeholders</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <ChevronRight size={20} />
                  <span>Government Officials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight size={20} />
                  <span>Private Sector Leaders</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight size={20} />
                  <span>Captains of Industry</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight size={20} />
                  <span>Investment Facilitators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC TRADE INFRASTRUCTURE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Ship className="text-blue-600" size={48} />
              <h2 className="text-5xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  STRATEGIC TRADE INFRASTRUCTURE
                </span>
              </h2>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-2xl mb-12 border-2 border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Maritime Trade Corridor Initiative
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A core objective of the Second Edition of the Nigeria–Morocco
              Business Week is to facilitate high-level dialogue on the
              development of a dedicated maritime trade corridor linking the
              Port of Lagos with major Moroccan port cities, such as Casablanca,
              Tangier, and Agadir.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This proposed sea route seeks to enhance efficiency and
              reliability of trade logistics, significantly reducing transit
              times and costs for goods moving between the two countries and
              onwards to European and global markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-600">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Truck className="text-blue-600 mr-3" size={28} />
                Benefits for Morocco
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Strategically position Morocco as a North African gateway for
                Nigerian exports, leveraging its advanced port infrastructure
                and preferential trade agreements, including the EU-Morocco
                Association Agreement.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-600">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Factory className="text-green-600 mr-3" size={28} />
                Benefits for Nigeria
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Enable Moroccan industries to secure more direct and
                cost-effective access to raw materials and intermediate goods
                from Nigeria, fostering a more integrated and resilient regional
                value chain.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Strategic Alignment</h3>
            <p className="text-lg leading-relaxed">
              This initiative aligns with the broader trade, industrial, and
              infrastructure development strategies of both nations. It also
              complements the objectives of the African Continental Free Trade
              Area (AfCFTA) by promoting intra-African connectivity, boosting
              regional competitiveness, and reinforcing continental trade
              facilitation and economic diplomacy.
            </p>
          </div>
        </div>
      </section>

      {/* TRADE PRODUCTS */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                PRODUCTS FOR EXPORT
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Morocco to Nigeria */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-green-600 text-white p-6 -m-8 mb-8">
                <h3 className="text-3xl font-bold flex items-center">
                  <span className="mr-3">🇲🇦</span>
                  Morocco → Nigeria
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Agro-Food Products
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Olives & Olive Oil",
                      "Dairy Milk",
                      "Wheat & Cereals",
                      "Argan Oil",
                      "Dates",
                      "Couscous",
                      "Sardines",
                      "Sugar",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 text-gray-700"
                      >
                        <ChevronRight
                          className="text-green-600 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Industrial Goods
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Fertilizers (OCP)",
                      "Solar Panels",
                      "Automotive Parts",
                      "Textiles",
                      "Pharmaceuticals",
                      "Electrical Cables",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 text-gray-700"
                      >
                        <ChevronRight
                          className="text-green-600 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nigeria to Morocco */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 -m-8 mb-8">
                <h3 className="text-3xl font-bold flex items-center">
                  <span className="mr-3">🇳🇬</span>
                  Nigeria → Morocco
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Agro-Food Products
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Tropical Fruits",
                      "Ginger",
                      "Red Chili Pepper",
                      "Garlic",
                      "Livestock",
                      "Sesame Seeds",
                      "Cashew Nuts",
                      "Shea Butter",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 text-gray-700"
                      >
                        <ChevronRight
                          className="text-green-600 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Industrial & Minerals
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Iron Ore",
                      "Lithium",
                      "Crude Oil & LNG",
                      "Cotton & Textiles",
                      "Building Materials",
                      "Aluminium",
                      "Wood Products",
                      "Coal",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 text-gray-700"
                      >
                        <ChevronRight
                          className="text-green-600 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPECTED OUTCOMES */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">EXPECTED OUTCOMES</h2>
            <div className="w-32 h-1.5 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Strategic MoUs & Agreements",
                desc: "Signing of joint ventures and investment agreements",
              },
              {
                icon: Factory,
                title: "Manufacturing Facilities",
                desc: "Establishment of Moroccan agri-processing facilities in Nigeria",
              },
              {
                icon: Globe,
                title: "Market Access",
                desc: "Greater access for Nigerian commodities to Moroccan and European markets",
              },
              {
                icon: TrendingUp,
                title: "Trade Barrier Resolution",
                desc: "Tangible steps toward resolving non-tariff barriers and certification challenges",
              },
              {
                icon: Ship,
                title: "Maritime Corridor",
                desc: "Launch of direct sea lane between Lagos and Moroccan ports",
              },
              {
                icon: Users,
                title: "AfCFTA Cooperation",
                desc: "Stronger regional cooperation aligned with AfCFTA goals",
              },
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <outcome.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{outcome.title}</h3>
                <p className="text-green-100 leading-relaxed">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              A Strategic Launchpad
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-green-200">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              This second edition of the Nigeria–Morocco Business Week (2nd
              NMBW)/Investment Summit is more than an event, it's a strategic
              launchpad for industrial transformation and trade diversification.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              By aligning Nigeria's vast resources and market potential with
              Morocco's technical expertise and investment capacity, the Summit
              will chart a path for sustainable development and mutual
              prosperity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
