import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Montserrat, Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"

const bebasNeue = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bebas-neue",
})

const montserrat = Montserrat({
	weight: ["400", "600"],
	subsets: ["latin", "cyrillic"],
	variable: "--font-montserrat",
})

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	variable: "--font-inter",
})

export const metadata: Metadata = {
	title: "FitFlexBands - Эластичные ленты для тренировок",
	description: "Лучшие эластичные ленты и фиксаторы для тренировок дома и в зале",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru" className={`${bebasNeue.variable} ${montserrat.variable} ${inter.variable}`}>
			<body className="antialiased">
				{children}
				<Footer />
			</body>
		</html>
	)
}
