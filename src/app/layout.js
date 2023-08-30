import './globals.css'
import Header from "@/components/layout/Header.jsx"

export const metadata = {
  title: 'App React',
  description: 'React project with Next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Header />{children}</body>
    </html>
  )
}
