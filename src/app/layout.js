export const metadata = {
  title: 'Skills Matrix',
  description: 'Track skills across teams',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}