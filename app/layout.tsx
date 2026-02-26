import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NP Services LLC | Premium Residential & Commercial Remodeling',
  description:
    'NP Services LLC delivers excellence in residential and commercial remodeling - from bathroom renovations to complete home transformations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
