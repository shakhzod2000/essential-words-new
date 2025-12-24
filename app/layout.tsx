import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VocabMaster - Learn Vocabulary Through Interactive Quizzes',
  description: 'Master vocabulary 3x faster with interactive quizzes, adaptive learning, and spaced repetition techniques.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
