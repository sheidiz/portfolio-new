import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sheila Diz | Portfolio ",
  description: "Full Stack Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex text-gray-950`}>
        <div className="flex-1">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
