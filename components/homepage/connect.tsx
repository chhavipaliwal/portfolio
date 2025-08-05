'use client';

import type React from 'react';
import DiscussText from '../ui/animate';
import Link from 'next/link';

import { useState } from 'react';

type ServiceType =
  | 'Web design'
  | 'Product design'
  | 'Web development'
  | 'Branding'
  | 'Graphics'
  | 'Packaging';
type BudgetType = '1K-5K' | '5K-10K' | '10K-50K' | 'more than 50K';

export default function ProjectInquiryForm() {
  const [selectedService, setSelectedService] = useState<ServiceType>('Product design');
  const [selectedBudget, setSelectedBudget] = useState<BudgetType>('1K-5K');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services: ServiceType[] = [
    'Web design',
    'Web development',
    'Branding',
    'Graphics',
    'Packaging',
  ];

  const budgets: BudgetType[] = ['1K-5K', '5K-10K', '10K-50K', 'more than 50K'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen font-neue-Helvetica-Condensed-light">
      <div className="flex min-h-screen -translate-y-72 items-center justify-center rounded-t-[74px] bg-black p-4 text-white">
        <div className="w-full max-w-4xl" id="contact">
          <h1 className="mb-16 mt-32 text-5xl font-bold">Please tell me about your project</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-16">
              <h2 className="mb-6 text-2xl">Service</h2>
              <div className="flex flex-wrap gap-4">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    className={`rounded-full px-6 py-3 ${
                      selectedService === service
                        ? 'bg-white text-black'
                        : 'border border-gray-700 transition-colors hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="mb-6 text-2xl">Budget in USD</h2>
              <div className="flex flex-wrap gap-4">
                {budgets.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    className={`rounded-full px-6 py-3 ${
                      selectedBudget === budget
                        ? 'bg-white text-black'
                        : 'border border-gray-700 transition-colors hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedBudget(budget)}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-8">
                <div>
                  <label htmlFor="name" className="mb-4 block text-2xl">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b border-gray-700 bg-transparent pb-2 transition-colors focus:border-white focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-4 block text-2xl">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-gray-700 bg-transparent pb-2 transition-colors focus:border-white focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-4 block text-2xl">
                  Project Details
                </label>
                <input
                  id="projectDetails"
                  type="text"
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Please tell us about your project"
                  className="w-full border-b border-gray-700 bg-transparent pb-2 transition-colors focus:border-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <button type="submit" aria-label="Let's Collaborate">
              <DiscussText
                text="DISCUSS PROJECT"
                className="font-neue-Helvetica text-7xl text-primary underline decoration-2 underline-offset-4"
              />
            </button>
          </form>
        </div>
      </div>
      <footer className="-translate-y-48 rounded-t-[80px] bg-white p-10 font-neue-Helvetica-Medium shadow-md md:p-16">
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="space-y-6">
            <div>
              <p className="mb-6 text-lg font-medium text-gray-700">get in touch</p>
              <a
                className="text-3xl font-bold text-black md:text-5xl"
                href="mailto:kittipaliwal@gmail.com"
              >
                kittipaliwal@gmail.com
              </a>

              <div className="mb-0 mt-10 text-sm text-gray-400">@chhavi 2025</div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 text-lg font-medium text-black md:mt-0 md:grid-cols-3">
            {/* Column 1 */}
            <div className="space-y-4">
              <Link href="https://chhavi.divinely.dev/" className="block hover:text-gray-600">
                portfolio
              </Link>
              <Link href="#about" className="block hover:text-gray-600">
                about
              </Link>
              <Link href="#expertise" className="block hover:text-gray-600">
                expertise
              </Link>
              <Link href="#contact" className="block hover:text-gray-600">
                contact us
              </Link>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <Link href="https://t.me/+918193907462" className="block hover:text-gray-600">
                telegram
              </Link>
              <Link href="https://wa.me/918193907462" className="block hover:text-gray-600">
                whatsapp
              </Link>
              <Link href="https://x.com/PaliwalChhavi" className="block hover:text-gray-600">
                x
              </Link>
              <Link href="https://instagram.com/kittious" className="block hover:text-gray-600">
                instagram
              </Link>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <Link href="https://github.com/chhavipaliwal" className="block hover:text-gray-600">
                github
              </Link>
              <Link
                href="https://www.linkedin.com/in/chhavipaliwal/"
                className="block hover:text-gray-600"
              >
                linkedin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
