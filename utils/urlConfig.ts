const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? `${process.env.NEXT_PUBLIC_BASE_URL}` : `${process.env.NEXT_PUBLIC_BASE_URL_PROD}`;
// export const server = dev ? 'http://localhost:3000/' : 'https://marvinespira.vercel.app/';
