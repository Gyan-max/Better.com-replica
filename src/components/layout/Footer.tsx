import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mortgage-calculator" className="hover:text-green-400 transition-colors">Mortgage calculator</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Home affordability calculator</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Free mortgage calculator</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Mortgage calculator with taxes</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Rent vs buy calculator</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Buy a home</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Sell a home</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Media</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Partner With Us</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Learning center</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@better.com" className="hover:text-green-400 transition-colors">hello@better.com</a></li>
              <li><a href="tel:415-523-8837" className="hover:text-green-400 transition-colors">415-523-8837</a></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Glossary</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-green-400 transition-colors">NMLS Consumer Access</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Disclosures & Licensing</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Affiliated Business</Link></li>
              <li><Link href="#" className="hover:text-green-400 transition-colors">Browser Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <div className="text-2xl font-bold text-green-400 mb-4">Better</div>
          <p className="text-sm text-gray-400 mb-4">
            Better is a family of companies serving all your homeownership needs.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.99-5.366 11.99-11.99C24.007 5.367 18.641.001 12.017.001zm0 21.785c-5.406 0-9.798-4.392-9.798-9.798 0-5.405 4.392-9.797 9.798-9.797 5.405 0 9.797 4.392 9.797 9.797 0 5.406-4.392 9.798-9.797 9.798z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Legal Text */}
          <div className="text-xs text-gray-400 max-w-4xl mx-auto leading-relaxed">
            <p className="mb-4">
              © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. 
              Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; 
              Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. 
              All rights reserved.
            </p>
            <p className="mb-4">
              Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 
              1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. 
              Not available in all states. Equal Housing Lender.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
