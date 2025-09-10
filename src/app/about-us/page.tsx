import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our mission
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                We&apos;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
              </h2>
            </div>
          </div>
        </section>

        {/* Status Quo Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  The status quo is broken
                </h2>
                <p className="text-lg text-gray-600 mb-6">                The traditional processes around homeownership are opaque and stressful. Fees aren&apos;t transparent 
                and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees 
                and slow, painful processes. It&apos;s a system set up to benefit insiders — not you.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Better.com CEO, <span className="text-green-600 font-semibold">Vishal Garg</span>, set out to change that.
                </p>
                <                button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Read Vishal&apos;s story
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-gray-400 text-6xl">📷</div>
              </div>
            </div>
          </div>
        </section>

        {/* How We're Changing Things Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                How we&apos;re changing things
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, 
                and mortgages account for $15 trillion. Yet home finance operates in the same way it has 
                for decades — through opaque systems and expensive intermediaries whose interests are 
                misaligned with consumers&apos;.
              </p>
              <p className="text-lg text-gray-600">
                That&apos;s why Better.com is redefining the homeownership process from the ground up. We&apos;re using 
                technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
              </p>
            </div>
          </div>
        </section>

        {/* Backed By Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Backed by
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
              {[
                'SoftBank', 'Ally', 'Citi', 'Ping An', 'Goldman Sachs', 'Kleiner Perkins', 'American Express'
              ].map((company, index) => (
                <div key={index} className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                  <div className="text-gray-600 font-semibold">{company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Company timeline
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    year: '2014',
                    description: 'After Vishal Garg&apos;s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.'
                  },
                  {
                    year: '2015',
                    description: 'Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).'
                  },
                  {
                    year: '2016',
                    description: 'Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.'
                  },
                  {
                    year: '2017',
                    description: 'Better expands into the real estate market with Better Real Estate.'
                  },
                  {
                    year: '2018',
                    description: 'Better Mortgage partners with Ally Bank to build Ally powered by Better.'
                  },
                  {
                    year: '2019',
                    description: 'Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.'
                  },
                  {
                    year: '2022',
                    description: 'Better Mortgage becomes the first fintech to fund $100B home loans entirely online.'
                  },
                  {
                    year: '2023',
                    description: 'Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.'
                  },
                  {
                    year: 'Today',
                    description: 'You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.'
                  }
                ].map((milestone, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-24 flex-shrink-0">
                      <div className="text-2xl font-bold text-green-600">{milestone.year}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700">{milestone.description}</p>
                      {milestone.year === 'Today' && (
                        <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                          Get started
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
