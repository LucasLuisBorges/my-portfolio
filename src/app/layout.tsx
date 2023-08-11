import '@/styles/globals.css';
import type { Metadata } from 'next';

import { DefaultLayout } from '@/components/default-layout';
import { fontMono } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={cn('bg-foreground text-primary min-h-screen', fontMono.className)}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
