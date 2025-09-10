'use client'

import { useState, useEffect, useCallback } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

interface MortgageCalculation {
  monthlyPayment: number
  principalAndInterest: number
  propertyTaxes: number
  homeownersInsurance: number
  hoaFees: number
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000)
  const [downPayment, setDownPayment] = useState(60000)
  const [loanLength, setLoanLength] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)
  const [zipCode, setZipCode] = useState('10007')
  const [propertyTaxes, setPropertyTaxes] = useState(0)
  const [homeownersInsurance, setHomeownersInsurance] = useState(0)
  const [hoaFees, setHoaFees] = useState(0)

  const [calculation, setCalculation] = useState<MortgageCalculation>({
    monthlyPayment: 0,
    principalAndInterest: 0,
    propertyTaxes: 0,
    homeownersInsurance: 0,
    hoaFees: 0
  })

  const calculateMortgage = useCallback(() => {
    const principal = homePrice - downPayment
    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPayments = loanLength * 12

    const monthlyPI = principal * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)

    const monthlyTaxes = propertyTaxes / 12
    const monthlyInsurance = homeownersInsurance / 12
    const monthlyHOA = hoaFees / 12

    const totalMonthlyPayment = monthlyPI + monthlyTaxes + monthlyInsurance + monthlyHOA

    setCalculation({
      monthlyPayment: totalMonthlyPayment,
      principalAndInterest: monthlyPI,
      propertyTaxes: monthlyTaxes,
      homeownersInsurance: monthlyInsurance,
      hoaFees: monthlyHOA
    })
  }, [homePrice, downPayment, loanLength, interestRate, propertyTaxes, homeownersInsurance, hoaFees])

  useEffect(() => {
    calculateMortgage()
  }, [calculateMortgage])

  const downPaymentPercentage = (downPayment / homePrice) * 100

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Calculator Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Estimate your monthly mortgage payments
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Calculator Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Home Price */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Home price
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">$</span>
                        <input
                          type="number"
                          value={homePrice}
                          onChange={(e) => setHomePrice(Number(e.target.value))}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <input
                        type="range"
                        min="100000"
                        max="2000000"
                        step="10000"
                        value={homePrice}
                        onChange={(e) => setHomePrice(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    {/* Down Payment */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Down payment
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">$</span>
                        <input
                          type="number"
                          value={downPayment}
                          onChange={(e) => setDownPayment(Number(e.target.value))}
                          className="w-full pl-8 pr-16 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <span className="absolute right-3 top-3 text-gray-500">
                          {downPaymentPercentage.toFixed(0)}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max={homePrice * 0.5}
                        step="1000"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    {/* Length of Loan */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Length of loan
                      </label>
                      <select
                        value={loanLength}
                        onChange={(e) => setLoanLength(Number(e.target.value))}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value={15}>15 years</option>
                        <option value={20}>20 years</option>
                        <option value={25}>25 years</option>
                        <option value={30}>30 years</option>
                      </select>
                    </div>

                    {/* Interest Rate */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interest rate
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          step="0.01"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full pr-8 py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <span className="absolute right-3 top-3 text-gray-500">%</span>
                      </div>
                    </div>

                    {/* ZIP Code */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP code
                      </label>
                      <input
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter ZIP code"
                      />
                    </div>

                    {/* Property Taxes */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property taxes (yearly)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">$</span>
                        <input
                          type="number"
                          value={propertyTaxes}
                          onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Homeowners Insurance */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Homeowners insurance (yearly)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">$</span>
                        <input
                          type="number"
                          value={homeownersInsurance}
                          onChange={(e) => setHomeownersInsurance(Number(e.target.value))}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* HOA Fees */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        HOA fees (monthly)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">$</span>
                        <input
                          type="number"
                          value={hoaFees}
                          onChange={(e) => setHoaFees(Number(e.target.value))}
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly payment</h3>
                  
                  <div className="text-4xl font-bold text-green-600 mb-6">
                    {formatCurrency(calculation.monthlyPayment)}/mo
                  </div>

                  <Link
                    href="/start"
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors block text-center mb-6"
                  >
                    Get pre-approved
                  </Link>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Monthly payment breakdown</h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Principal & interest</span>
                        <span className="font-medium">{formatCurrency(calculation.principalAndInterest)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Property taxes</span>
                        <span className="font-medium">{formatCurrency(calculation.propertyTaxes)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Homeowners insurance</span>
                        <span className="font-medium">{formatCurrency(calculation.homeownersInsurance)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">HOA fees</span>
                        <span className="font-medium">{formatCurrency(calculation.hoaFees)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Simple steps to get pre-approved
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Share a few details</h3>
                <p className="text-gray-600">                Tell us about your income, credit, and home goals—it takes as little as 3 minutes 
                and won&apos;t affect your credit score.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">See your homebuying budget</h3>
                <p className="text-gray-600">                In minutes, we&apos;ll show you exactly how much you can get pre-approved for—so you 
                know your price range before you shop.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get your pre-approval letter</h3>
                <p className="text-gray-600">
                  Download your letter instantly and start touring homes with confidence 
                  (and a stronger offer in hand).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Check your homebuying power
            </h2>
            <p className="text-xl text-green-100 mb-8">
              See what you qualify for in as little as 3 minutes – no credit impact
            </p>
            <Link 
              href="/start" 
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              See what I qualify for
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
