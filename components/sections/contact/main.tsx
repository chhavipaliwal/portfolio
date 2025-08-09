'use client';
import React from 'react';
import {
  Avatar,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  useDisclosure,
  Link as NextLink,
} from '@nextui-org/react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { toast } from 'sonner';
import WorkButton from '@/components/animata/button/work-button';
import { sendMail } from '@/lib/server-actions';

const Main = () => {
  const submittedModal = useDisclosure();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().notRequired(),
    message: Yup.string().required('Message is required').min(10).max(2000),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await sendMail({
          from: values.email,
          subject: 'Contact Form Submission',
          message: `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nMessage: ${values.message}`,
        })
          .then(() => {
            formik.resetForm();
            submittedModal.onOpenChange();
          })
          .catch((error) => {
            toast.error('An error occurred. Please try again later.');
            console.error(error);
          });
      } catch (error) {
        toast.error('An error occurred. Please try again later.');
        console.error(error);
      }
    },
  });

  return (
    <>
      <section className="relative flex flex-col gap-12 pb-8 font-manrope md:flex-row">
        <div className="relative hidden w-full overflow-hidden rounded-3xl md:block md:w-[40%]">
          <Image src={'/chhavi.jpeg'} alt="" className="shadow-lg" />
          <Button
            as={Link}
            href="/"
            // color="foreground"
            variant="light"
            className="absolute top-3 z-10 w-fit"
            startContent={<Icon icon="akar-icons:arrow-left" />}
          >
            Back
          </Button>
          <div className="absolute bottom-0 left-0 z-10 flex h-1/2 w-full bg-gradient-to-t from-black to-transparent">
            <div className="flex w-full flex-col items-start justify-end gap-2 p-8">
              <h3 className="text-xl text-white">Contact Me</h3>
              <p className="text-[12px] text-white md:max-w-xs">
                Ask about my projects, pricing, implementation or anything else. I am always
                available to help.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-8 md:w-[60%]">
          <Button
            as={Link}
            href="/"
            // color="foreground"
            variant="light"
            className="w-fit translate-x-[-10px] gap-2 md:hidden"
            startContent={<Icon icon="akar-icons:arrow-left" />}
          >
            Back
          </Button>
          <Input
            placeholder="John Doe"
            size="lg"
            label="Name"
            labelPlacement="outside"
            className="group"
            classNames={{
              inputWrapper: ['group-hover:bg-default'],
            }}
            autoComplete="given-name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            isInvalid={formik.touched.name && formik.errors.name ? true : false}
            errorMessage={formik.errors.name}
            isRequired
          />

          <Input
            placeholder="johndoe@example.com"
            size="lg"
            label="Email Address"
            labelPlacement="outside"
            isRequired
            className="group"
            classNames={{
              inputWrapper: ['group-hover:bg-default'],
            }}
            autoComplete="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            isInvalid={formik.touched.email && formik.errors.email ? true : false}
            errorMessage={formik.errors.email}
          />
          <Input
            placeholder="+91 1234567890"
            size="lg"
            label="Phone Number"
            labelPlacement="outside"
            className="group"
            classNames={{
              inputWrapper: ['group-hover:bg-default'],
            }}
            autoComplete="tel"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            isInvalid={formik.touched.phone && formik.errors.phone ? true : false}
            errorMessage={formik.errors.phone}
          />
          <Textarea
            placeholder="Your message here"
            size="lg"
            label="Message"
            labelPlacement="outside"
            className="group"
            classNames={{
              inputWrapper: ['group-hover:bg-default'],
            }}
            isRequired
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            isInvalid={formik.touched.message && formik.errors.message ? true : false}
          />

          <WorkButton
            className="w-full border-gray-200"
            onClick={() => formik.handleSubmit()}
            isLoading={formik.isSubmitting}
          />
        </div>
      </section>
      <Modal
        isOpen={submittedModal.isOpen}
        onOpenChange={submittedModal.onOpenChange}
        backdrop="blur"
        radius="lg"
        className="rounded-3xl"
      >
        <ModalContent className="px-4">
          {(onClose) => (
            <>
              <ModalHeader className="mt-8 flex flex-col items-center gap-1">
                <Icon
                  fontSize={50}
                  icon="tabler:circle-check-filled"
                  className="mb-4 text-success"
                />
                <h2 className="text-xl leading-[20px]">Congratulations</h2>
                <p className="text-center font-sans text-[12px] text-foreground-500">
                  Your message has been sent successfully.
                </p>
              </ModalHeader>
              <ModalBody className="mb-4 rounded-2xl bg-default p-4">
                <h3 className="text-sm uppercase">What&apos;s next?</h3>
                <p className="text-sm text-foreground-500">
                  I will get back to you within 24 hours. In the meantime, you can check my{' '}
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/chhavipaliwal"
                    target="_blank"
                    className="text-primary"
                  >
                    GitHub
                  </a>{' '}
                  or{' '}
                  <a href="/#projects" className="text-primary">
                    Portfolio
                  </a>{' '}
                  to get more information.
                </p>
                <Button variant="bordered" as={Link} href="/" color="primary" size="lg">
                  Go to Home
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Main;
