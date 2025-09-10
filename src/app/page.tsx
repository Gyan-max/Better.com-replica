import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-16">
        <section className="bg-gradient-to-b from-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                The first
                <span className="text-green-600"> AI-powered</span>
                <br />
                Mortgage
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Our tech unlocks lower rates, higher chances of approval, and a lightning‑fast process 
                from approval to closing. Over $100 billion funded.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/start" 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Start my pre-approval
                </Link>
                <div className="text-gray-500 text-sm">
                  3 min | No hard credit check
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">$100B</div>
                <div className="text-gray-600">home loans funded entirely online</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">400K</div>
                <div className="text-gray-600">customers who chose Better Mortgage</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">4.4</div>
                <div className="text-gray-600">out of 5 stars on Trustpilot</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Find out why we&apos;re better.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">One Day Mortgage</h3>
                <p className="text-gray-600">
                  Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter 
                  takes weeks for traditional lenders. We do it in a single day.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Better HELOC</h3>
                <p className="text-gray-600">
                  Your express lane to getting cash from your home with our Home Equity Line of Credit. 
                  Access up to 90% of your home equity as cash in as little as 7 days.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Insurance</h3>
                <p className="text-gray-600">
                  Shop, bundle, and save on insurance coverage for home, auto, life, and more with 
                  Better Cover.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Got questions? We&apos;ve got answers
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Our loan experts are here to help you every step of the way
            </p>
            <Link 
              href="/start" 
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get started today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
