import type { Metadata } from 'next';
import { Navigation } from '@/app/components/navigation';
import './style/index.scss';

export const metadata: Metadata = {
  title: 'Acid Archive',
  description: 'Document, Share, and Explore Acid Patterns ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="content-container">{children}</div>
      </body>
    </html>
  );
}
