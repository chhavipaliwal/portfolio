'use client';

import type React from 'react';
import DiscussText from '../ui/animate';
import Link from 'next/link';

import { useFormik } from 'formik';
import { sendMail } from '@/lib/server-actions';
import { toast } from 'sonner';
import { addToast } from '@heroui/react';

type BudgetType = '1K-5K' | '5K-10K' | '10K-50K' | 'more than 50K';

export default function ProjectInquiryForm() {
  const budgets: BudgetType[] = ['1K-5K', '5K-10K', '10K-50K', 'more than 50K'];

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      budget: budgets[0],
      projectDetails: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      if (!values.name || !values.email || !values.projectDetails) {
        addToast({
          title: 'Please fill all the fields',
          description: 'Please fill all the fields',
          color: 'danger',
        });
        return;
      }

      await sendMail({
        from: values.email,
        subject: 'Project Inquiry',
        message: `Name: ${values.name}\nEmail: ${values.email}\nBudget: ${values.budget}\nProject Details: ${values.projectDetails}`,
      })
        .then(() => {
          addToast({
            title: 'Email sent successfully',
            description: 'I will get back to you soon',
            color: 'success',
          });
          formik.resetForm();
        })
        .catch((error) => {
          addToast({
            title: 'Failed to send email',
            description: 'Please try again later',
            color: 'danger',
          });
          console.error(error);
        });
    },
  });

  return (
    <div className="h-screen font-neue-Helvetica-Condensed-light">
      <div className="-mt-72 flex min-h-screen items-center justify-center bg-black p-6 text-white">
        <div className="mb-16 w-full max-w-4xl" id="contact">
          <h1 className="mb-16 mt-16 text-xl font-bold">Please tell me about your project</h1>

          <div>
            <div className="mb-16">
              <h2 className="mb-6 text-2xl">Budget in INR</h2>
              <div className="flex flex-wrap gap-4">
                {budgets.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    className={`rounded-full px-6 py-3 ${
                      formik.values.budget === budget
                        ? 'bg-white text-black'
                        : 'border border-gray-700 transition-colors hover:border-gray-500'
                    }`}
                    onClick={() => formik.setFieldValue('budget', budget)}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-4 block text-2xl">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="w-full border-b border-gray-700 bg-transparent pb-2 transition-colors focus:border-white focus:outline-none"
                  required
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="email" className="mb-4 block text-2xl">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  value={formik.values.projectDetails}
                  onChange={formik.handleChange}
                  placeholder="Please tell us about your project"
                  className="w-full border-b border-gray-700 bg-transparent pb-2 transition-colors focus:border-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              aria-label="Let's Collaborate"
              onClick={() => formik.handleSubmit()}
            >
              <DiscussText
                text="DISCUSS PROJECT"
                className="font-neue-Helvetica text-5xl text-primary underline decoration-2 underline-offset-4 md:text-7xl"
                isLoading={formik.isSubmitting}
              />
            </button>
          </div>
        </div>
      </div>
      <footer className="-translate-y-30 mb-10 rounded-t-3xl bg-white p-6 font-neue-Helvetica-Medium shadow-md md:rounded-t-[80px] md:p-16">
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="space-y-6">
            <div>
              <p className="mb-4 mt-6 text-lg font-medium text-gray-700">get in touch</p>
              <a
                className="text-3xl font-bold text-black md:text-5xl"
                href="mailto:kittipaliwal@gmail.com"
              >
                kittipaliwal@gmail.com
              </a>
            </div>
          </div>

          <div className="text-md mt-10 grid grid-cols-3 gap-10 font-medium text-black md:mt-0 md:grid-cols-3 md:text-lg">
            {/* Column 1 */}
            <div className="space-y-4">
              <Link href="https://chhavii.in/" className="block hover:text-gray-600">
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
