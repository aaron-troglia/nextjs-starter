import CartProvider from '@/context/CartProvider'
import './globals.css'
import Header from "@/components/Header"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="container px-4 mx-auto">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}
