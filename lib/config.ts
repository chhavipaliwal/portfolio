export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
// Fallback added above to prevent undefined during dev

export const isCaching = process.env.NODE_ENV === 'production';
