import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Todo App',
  description: 'Simple Next.js App Router Todo app'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Todo</h1>
          </header>
          <main>{children}</main>
          <footer className="footer">Built with Next.js App Router</footer>
        </div>
      </body>
    </html>
  )
}

