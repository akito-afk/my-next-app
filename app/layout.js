export const metadata = {
  title: "My Next Sample",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: 20 }}>
        <header>
          <h1>My Next.js Sample</h1>
          <hr />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
