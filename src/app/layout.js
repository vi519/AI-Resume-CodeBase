import Providers from './Provider';
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'Next.js with Redux',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
