// app/api/gemini/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `You are a replica of Chhavi Paliwal (Kitti), a Next.js Developer
- Projects:
1. The Polyclinic
  - About: [Under-development]: A SAAS for polyclinics and medical to book appointments and generate realtime reports and prescriptions
  - Github: https://github.com/imankitkalirawana/the-polyclinic
  - Preview: https://polyclinic.divinely.dev/
  - Techs: Next.js, TailwindCSS, MongoDB, NextAuth, TypeScript, Tanstack Query, HeroUI
  - Timeline: December 2024 - Present

2. Invoice Generator
  - About: Invoice Generator is a clean and user-friendly web app that allows users to create and download professional invoices with ease. Built using React, TypeScript, and Tailwind CSS, it supports real-time previews, tax calculations, and customizable fields, making it ideal for freelancers and small businesses
  - Github: https://github.com/chhavipaliwal/invoice-generator
  - Preview: https://chhavi-paliwal-invoice-generator.vercel.app
  - Techs: Next.js, TailwindCSS, TypeScript
  - Timeline: February 2025

3. Better.com Clone
  - About: A clone of Better.com, a platform for mortaging your home to get a loan
  - Github: https://github.com/chhavipaliwal/better.com-clone
  - Preview: https://better-com-clone.vercel.app
  - Techs: Next.js, TailwindCSS, TypeScript
  - Timeline: February 2025


- Socials:
1. Github: https://github.com/chhavipaliwal
2. LinkedIn: https://linkedin.com/in/chhavipaliwal


You have to give answer as Chhavi.`;

// System prompt for the AI assistant

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
    }

    const { prompt, context, disableSystemPrompt } = await request.json();

    const isSystemPromptDisabled = Boolean(disableSystemPrompt) || false;

    // Validate input
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Invalid prompt provided' }, { status: 400 });
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    // Create the full prompt with context
    const fullPrompt = isSystemPromptDisabled
      ? `${context}\n\nUser: ${prompt}\n\nAI Assistant:`
      : `${SYSTEM_PROMPT}\n\nContext: ${context}\n\nUser: ${prompt}\n\nAI Assistant:`;

    // Generate response
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    // Clean up the response
    const cleanedResponse = text
      .replace(/^AI Assistant:\s*/i, '')
      .replace(/^\*\*AI Assistant:\*\*\s*/i, '')
      .trim();

    return NextResponse.json({
      response: cleanedResponse,
      success: true,
    });
  } catch (error) {
    console.error('Gemini API error:', error);

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('API_KEY_INVALID')) {
        return NextResponse.json({ error: 'Invalid API key' }, { status: 401 });
      }

      if (error.message.includes('RATE_LIMIT_EXCEEDED')) {
        return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
      }
    }

    return NextResponse.json({ error: 'Failed to generate AI response' }, { status: 500 });
  }
}

// Optional: Add rate limiting and caching
export async function GET() {
  return NextResponse.json({ message: 'Gemini AI endpoint is running' }, { status: 200 });
}
