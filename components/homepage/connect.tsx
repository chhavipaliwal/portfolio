'use client';

import type React from 'react';

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
  const [selectedService, setSelectedService] =
    useState<ServiceType>('Product design');
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
    'Packaging'
  ];

  const budgets: BudgetType[] = ['1K-5K', '5K-10K', '10K-50K', 'more than 50K'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ selectedService, selectedBudget, name, email });
  };

  return (
    <div className="flex min-h-screen -translate-y-60 items-center justify-center rounded-t-[74px] bg-black p-4 font-neue-Helvetica-Condensed-light text-white">
      <div className="w-full max-w-4xl">
        <h1 className="mb-16 text-5xl font-bold">
          Please tell us about your project
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-16">
            <h2 className="mb-6 text-2xl">Service</h2>
            <div className="flex flex-wrap gap-4">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  className={`relative rounded-full border border-gray-700 px-6 py-3 transition-colors hover:border-gray-500 ${
                    selectedService === service ? 'border-gray-400' : ''
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  {selectedService === service && (
                    <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  )}
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

          <button
            type="submit"
            className="rounded-full bg-white px-8 py-3 text-black transition-colors hover:bg-gray-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
