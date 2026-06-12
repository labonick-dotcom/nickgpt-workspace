export const metadata = {
  title: "Coach Ian — AI Sales Coach",
  description: "Your enterprise sales coach, in your pocket.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0a0f", color: "#e8e8ea" }}>
        {children}
      </body>
    </html>
  );
}
