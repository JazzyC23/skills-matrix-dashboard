export const metadata = {
  title: 'Skills Matrix',
  description: 'A simple dashboard to track skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}