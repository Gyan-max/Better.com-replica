'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'

export default function Start() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleLoanPurposeSelect = () => {
    setCurrentStep(1)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Welcome Section */}
            {currentStep === 0 && (
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Hi, I&apos;m Betsy!
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    What can I help you with?
                  </p>
                </div>

                {/* Loan Purpose Options */}
                <div className="space-y-4 mb-12">
                  <button
                    onClick={() => handleLoanPurposeSelect()}
                    className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left border-2 border-transparent hover:border-green-500"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Buying a home</h3>
                        <p className="text-gray-600">Get pre-approved for your purchase</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleLoanPurposeSelect()}
                    className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left border-2 border-transparent hover:border-green-500"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Refinancing my mortgage</h3>
                        <p className="text-gray-600">Lower your rate or payment</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleLoanPurposeSelect()}
                    className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left border-2 border-transparent hover:border-green-500"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Get cash from my home</h3>
                        <p className="text-gray-600">Tap into your home equity</p>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">$100B</div>
                    <div className="text-gray-600 text-sm">home loans funded entirely online</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">400K</div>
                    <div className="text-gray-600 text-sm">customers who chose a Better Mortgage</div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white/50 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-4">
                    After a few questions, you&apos;ll unlock:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Custom mortgage rates
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Exclusive offers
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      A personalized dashboard
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Application Form Steps */}
            {currentStep > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Let&apos;s get you pre-approved
                  </h2>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 5) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Step {currentStep} of 5</p>
                </div>

                {/* Form content based on current step */}
                <div className="min-h-[300px]">
                  {currentStep === 1 && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Where are you in the homebuying process?
                      </h3>
                      <div className="space-y-3">
                        {[                        'I haven&apos;t started looking yet',
                        'I&apos;m browsing and researching',
                        'I&apos;m actively looking',
                        'I found a home and made an offer',
                        'I have a signed purchase agreement'
                        ].map((option, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentStep(2)}
                            className="w-full text-left p-4 border border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        What&apos;s your estimated purchase price?
                      </h3>
                      <div className="space-y-4">
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-500">$</span>
                          <input
                            type="number"
                            placeholder="Enter amount"
                            className="w-full pl-8 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <p className="text-sm text-gray-600">
                          Don&apos;t worry, this is just an estimate. We&apos;ll help you find the right price range.
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(3)}
                        className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        Continue
                      </button>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Tell us about yourself
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="First name"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Last name"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <input
                          type="email"
                          placeholder="Email address"
                          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <input
                          type="tel"
                          placeholder="Phone number"
                          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <button
                        onClick={() => setCurrentStep(4)}
                        className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        Continue
                      </button>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        What&apos;s your annual income?
                      </h3>
                      <div className="space-y-4">
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-500">$</span>
                          <input
                            type="number"
                            placeholder="Annual income"
                            className="w-full pl-8 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <p className="text-sm text-gray-600">
                          Include salary, bonuses, and other regular income.
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(5)}
                        className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        Continue
                      </button>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Great! You&apos;re pre-approved
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Based on your information, you could qualify for a loan up to <strong>$450,000</strong>.
                      </p>
                      
                      <div className="bg-green-50 rounded-lg p-6 mb-8">
                        <h4 className="font-semibold text-gray-900 mb-4">                        Your next steps:</h4>
                        <ul className="text-left space-y-2 text-sm">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Download your pre-approval letter
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Start shopping for homes
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Connect with a loan specialist
                          </li>
                        </ul>
                      </div>

                      <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-4">
                        Download Pre-approval Letter
                      </button>
                      
                      <button className="w-full border border-green-600 text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                        View Dashboard
                      </button>
                    </div>
                  )}
                </div>

                {/* Back Button */}
                {currentStep > 1 && currentStep < 5 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="mt-6 text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer - only show on initial step */}
      {currentStep === 0 && (
        <div className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-green-400 font-bold text-xl mb-2">Better</div>
            <p className="text-sm text-gray-400 mb-4">
              Better Mortgage Corporation is a direct lender dedicated to providing a fast, 
              transparent digital mortgage experience backed by superior customer support.
            </p>
            <p className="text-xs text-gray-500">
              © 2025 Better Home & Finance Holding Company and/or its affiliates. 
              Better is a family of companies.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
