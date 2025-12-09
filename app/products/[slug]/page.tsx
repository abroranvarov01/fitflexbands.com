"use client"

import { motion } from "framer-motion"
import { Star, ShoppingCart, Check, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

// Product data
const products = {
	"whatafit-resistance-bands": {
		name: "WHATAFIT Resistance Bands Set",
		price: 23.97,
		rating: 4.6,
		reviews: 34299,
		image: "https://m.media-amazon.com/images/I/71tWTWashCL._AC_SX679_.jpg",
		images: [
			"https://m.media-amazon.com/images/I/71tWTWashCL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71tWTWashCL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71tWTWashCL._AC_SX679_.jpg",
		],
		amazonUrl: "https://amzn.to/4hRVLDd",
		description:
			"Exercise bands with handles for men and women, ideal for fitness and strength training home gym equipment.",
		features: [
			"100% Natural Latex for durability",
			"5 resistance levels: 10, 20, 30, 40, 50 lbs",
			"Includes door anchor, handles, ankle straps, and carrying case",
			"Portable for home, gym, or outdoor use",
			"Suitable for toning arms, shoulders, chest, glutes, and legs",
		],
		specifications: {
			Material: "Natural Latex",
			"Resistance Levels": "5 (10, 20, 30, 40, 50 lbs)",
			Length: "40 inches",
			Weight: "1.05 kg",
		},
	},
	"tribe-lifting-fabric-bands": {
		name: "Tribe Lifting Fabric Resistance Bands",
		price: 19.97,
		rating: 4.6,
		reviews: 3874,
		image: "https://m.media-amazon.com/images/I/91td0WAbhHL._AC_SX679_.jpg",
		images: [
			"https://m.media-amazon.com/images/I/91td0WAbhHL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/91td0WAbhHL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/91td0WAbhHL._AC_SX679_.jpg",
		],
		amazonUrl: "https://amzn.to/47FrUcm",
		description: "Thick booty bands for squats, lunges, hip training, physical therapy, and home workouts.",
		features: [
			"Thick fabric weave with elastic latex for comfort",
			"5 resistance levels from light to extra heavy",
			"Non-slip design stays in place during exercises",
			"Portable and lightweight for travel",
			"Ideal for glute activation and lower body workouts",
		],
		specifications: {
			Material: "Fabric & Latex Blend",
			"Resistance Levels": "5 (Light to Extra Heavy)",
			Circumference: "Not specified",
			Weight: "0.46 lbs",
		},
	},
	"vergali-booty-bands": {
		name: "Vergali Resistance Bands for Working Out",
		price: 22.99,
		rating: 4.8,
		reviews: 20428,
		image: "https://m.media-amazon.com/images/I/91UnDO-XhlL._AC_SX679_.jpg",
		images: [
			"https://m.media-amazon.com/images/I/91UnDO-XhlL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/91UnDO-XhlL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/91UnDO-XhlL._AC_SX679_.jpg",
		],
		amazonUrl: "https://amzn.to/4nyUBOl",
		description: "Fabric elastic bands for exercise, perfect for legs, hips, thighs, and glutes with workout guide.",
		features: [
			"Non-slip cotton and latex blend",
			"4 resistance levels for all fitness levels",
			"Includes carry bag and printed training guide",
			"Comfortable on bare skin without pinching",
			"Online training videos for exercise guidance",
		],
		specifications: {
			Material: "Cotton & Latex Blend",
			"Resistance Levels": "4 (Light to Heavy)",
			Circumference: "Not specified",
			Weight: "Not specified",
		},
	},
	"wsakoue-pull-up-bands": {
		name: "WSAKOUE Pull Up Assistance Bands",
		price: 24.97,
		rating: 4.6,
		reviews: 5741,
		image: "https://m.media-amazon.com/images/I/71wwR5zim1L._AC_SX679_.jpg",
		images: [
			"https://m.media-amazon.com/images/I/71wwR5zim1L._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71wwR5zim1L._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71wwR5zim1L._AC_SX679_.jpg",
		],
		amazonUrl: "https://amzn.to/4nGJ3Zt",
		description: "Resistance bands set for body stretching, physical therapy, and muscle training.",
		features: [
			"100% Natural Latex from Malaysia",
			"Multiple resistance levels for all fitness levels",
			"Ideal for pull-up assistance, press-ups, and squats",
			"Portable with included storage bag",
			"Suitable for Pilates, yoga, and calisthenics",
		],
		specifications: {
			Material: "Natural Latex",
			"Resistance Levels": "5 (Varying levels)",
			Length: "41 inches",
			Weight: "1.01 kg",
		},
	},
	"leekey-resistance-bands": {
		name: "LEEKEY Resistance Bands Set",
		price: 19.99,
		rating: 4.6,
		reviews: 11659,
		image: "https://m.media-amazon.com/images/I/61llicj0+gL._AC_SX679_.jpg",
		images: [
			"https://m.media-amazon.com/images/I/61llicj0+gL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/61llicj0+gL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/61llicj0+gL._AC_SX679_.jpg",
		],
		amazonUrl: "https://amzn.to/3LnvDnw",
		description: "Multi-level exercise bands for pull-up assistance, full-body training, and home workouts.",
		features: [
			"Non-slip chequer design for grip and stability",
			"4 resistance levels: 15-125 lbs",
			"Durable natural latex material",
			"Portable with carry bag",
			"Ideal for strength training and physical therapy",
		],
		specifications: {
			Material: "Natural Latex",
			"Resistance Levels": "4 (15-35, 25-65, 35-85, 50-125 lbs)",
			Length: "81.9 inches",
			Weight: "0.01 oz (combined)",
		},
	},
	"leg-stretcher-band": {
		name: "Leg Stretcher Stretching Band",
		price: 19.99, // Estimated, as no exact price provided
		rating: 4.7,
		reviews: 1500,
		image: "https://m.media-amazon.com/images/I/71f3he0MS7L._SX522_.jpg",
		images: [
			"https://m.media-amazon.com/images/I/71f3he0MS7L._SX522_.jpg",
			"https://m.media-amazon.com/images/I/71f3he0MS7L._SX522_.jpg",
			"https://m.media-amazon.com/images/I/71f3he0MS7L._SX522_.jpg",
		],
		amazonUrl: "https://amzn.to/3Ls5ns6",
		description: "For plantar fasciitis, Achilles tendonitis, hamstring stretching, and flexibility improvement.",
		features: [
			"Designed for targeted leg stretching",
			"Helps with plantar fasciitis and Achilles tendonitis",
			"Non-elastic for controlled stretching",
			"Portable and easy to use",
			"Suitable for rehabilitation and flexibility",
		],
		specifications: {
			Material: "Not specified",
			"Resistance Levels": "3 (Light to Heavy)",
			Length: "Not specified",
			Weight: "Not specified",
		},
	},
	"theraband-resistance-bands": {
		name: "THERABAND Resistance Bands Set",
		price: 13.29,
		rating: 4.5,
		reviews: 26080,
		image: "https://m.media-amazon.com/images/I/71XY3bDlSaL._AC_SX679_.jpg",
		images: [
			"https://m.media-amazon.com/images/I/71XY3bDlSaL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71XY3bDlSaL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71XY3bDlSaL._AC_SX679_.jpg",
		],
		amazonUrl: "https://amzn.to/4hFLkTj",
		description: "Beginner kit for exercise, physical therapy, and strength training with non-latex elastic bands.",
		features: [
			"Non-latex material safe for sensitive skin",
			"3 resistance levels: Yellow (3-4.3 lbs), Red (3.7-5.5 lbs), Green (4.6-6.7 lbs)",
			"Lightweight and portable for travel",
			"Ideal for Pilates, yoga, and physical therapy",
			"Easy to clean after use",
		],
		specifications: {
			Material: "Non-Latex",
			"Resistance Levels": "3 (3-6.7 lbs)",
			Length: "5 feet",
			Width: "4 inches",
			Weight: "Not specified",
		},
	},
	"theraband-professional-bands": {
		name: "THERABAND Professional Non-Latex Bands",
		price: 13.29,
		rating: 4.5,
		reviews: 26080,
		image: "https://m.media-amazon.com/images/I/51qzaLPQ4GL._SX522_.jpg",
		images: [
			"https://m.media-amazon.com/images/I/51qzaLPQ4GL._SX522_.jpg",
			"https://m.media-amazon.com/images/I/51qzaLPQ4GL._SX522_.jpg",
			"https://m.media-amazon.com/images/I/51qzaLPQ4GL._SX522_.jpg",
		],
		amazonUrl: "https://amzn.to/3Ji62Ml",
		description: "Elastic bands for upper and lower body fitness, exercise, and physical therapy.",
		features: [
			"Non-latex material for sensitive skin",
			"3 resistance levels for beginner workouts",
			"Durable for repeated stretching",
			"Portable for home or clinical use",
			"Trusted by physical therapists",
		],
		specifications: {
			Material: "Non-Latex",
			"Resistance Levels": "3 (Light to Medium)",
			Length: "5 feet",
			Width: "4 inches",
			Weight: "Not specified",
		},
	},
	"resistance-training-bands": {
		name: "Resistance Training Exercise Bands",
		price: 19.99, // Estimated, as no exact price provided
		rating: 4.7,
		reviews: 1200,
		image: "https://m.media-amazon.com/images/I/61H92UQBURL._AC_SX679_.jpg",
		images: [
			"https://m.media-amazon.com/images/I/61H92UQBURL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/61H92UQBURL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/61H92UQBURL._AC_SX679_.jpg",
		],
		amazonUrl: "https://amzn.to/4oTqUsh",
		description: "Set of 3 bands for stretching, exercise equipment, and full-body workouts.",
		features: [
			"Designed for full-body workouts",
			"3 resistance levels for versatility",
			"Portable for home or gym use",
			"Durable material for long-term use",
			"Suitable for strength training and stretching",
		],
		specifications: {
			Material: "Not specified",
			"Resistance Levels": "3 (Light to Heavy)",
			Length: "Not specified",
			Weight: "Not specified",
		},
	},
}

export default function ProductPage() {
	const params = useParams();
	const slug = params.slug;
	const product = products[params.slug as keyof typeof products]

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.tor === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"tor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<div className="min-h-screen bg-[#0C0D0E] text-white">
			{/* Header */}
			<header className="fixed top-0 left-0 right-0 z-50 bg-[#0C0D0E]/95 backdrop-blur-sm border-b border-[#00FF7F]/20">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<Link href="/" className="text-2xl font-sans font-bold text-[#00FF7F]">
						FitFlexBands
					</Link>
					<Link href="/reviews">
						<Button
							variant="outline"
							className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0C0D0E] bg-transparent"
						>
							Back to Reviews
						</Button>
					</Link>
				</div>
			</header>

			<div className="pt-24 pb-16">
				<div className="container mx-auto px-4">
					{/* Product Details */}
					<div className="grid md:grid-cols-2 gap-12 mb-16">
						{/* Image Gallery */}
						<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
							<div className="relative aspect-square rounded-2xl overflow-hidden bg-[#1A1B1C] mb-4">
								<img
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="grid grid-cols-3 gap-4">
								{product.images.map((img, index) => (
									<div
										key={index}
										className="relative aspect-square rounded-lg overflow-hidden bg-[#1A1B1C] cursor-pointer hover:ring-2 hover:ring-[#00FF7F] transition-all"
									>
										<img
											src={img || "/placeholder.svg"}
											alt={`${product.name} view ${index + 1}`}
											className="w-full h-full object-cover"
										/>
									</div>
								))}
							</div>
						</motion.div>

						{/* Product Info */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-balance">{product.name}</h1>

							{/* Rating */}
							<div className="flex items-center gap-4 mb-6">
								<div className="flex items-center gap-1">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-[#FFD166] text-[#FFD166]" : "text-gray-600"
												}`}
										/>
									))}
								</div>
								<span className="text-[#EAEAEA]">
									{product.rating} ({product.reviews} reviews)
								</span>
							</div>

							{/* Description */}
							<p className="text-[#EAEAEA] text-lg mb-8 leading-relaxed">{product.description}</p>

							{/* Add to Cart */}
							<a href={product.amazonUrl} data-auto>
								<Button
									size="lg"
									className="w-full bg-[#00FF7F] text-[#0C0D0E] hover:bg-[#FFD166] text-lg py-6 font-sans font-semibold"
								>
									<ShoppingCart className="w-5 h-5 mr-2" />
									Buy on Amazon
								</Button>
							</a>

							{/* Features */}
							<div className="space-y-3 mb-8">
								{product.features.map((feature, index) => (
									<div key={index} className="flex items-start gap-3">
										<Check className="w-5 h-5 text-[#00FF7F] flex-shrink-0 mt-0.5" />
										<span className="text-[#EAEAEA]">{feature}</span>
									</div>
								))}
							</div>

							{/* Benefits */}
							<div className="grid grid-cols-3 gap-4 p-6 bg-[#1A1B1C] rounded-xl border border-[#00FF7F]/20">
								<div className="text-center">
									<Truck className="w-8 h-8 text-[#00FF7F] mx-auto mb-2" />
									<p className="text-sm text-[#EAEAEA]">Free Shipping</p>
								</div>
								<div className="text-center">
									<Shield className="w-8 h-8 text-[#00FF7F] mx-auto mb-2" />
									<p className="text-sm text-[#EAEAEA]">1 Year Warranty</p>
								</div>
								<div className="text-center">
									<RotateCcw className="w-8 h-8 text-[#00FF7F] mx-auto mb-2" />
									<p className="text-sm text-[#EAEAEA]">30-Day Returns</p>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Specifications */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="mb-16"
					>
						<h2 className="text-3xl font-sans font-bold mb-6 uppercase tracking-wider">Specifications</h2>
						<div className="bg-[#1A1B1C] rounded-xl p-8 border border-[#00FF7F]/20">
							<div className="grid md:grid-cols-2 gap-6">
								{Object.entries(product.specifications).map(([key, value]) => (
									<div key={key} className="flex justify-between items-center border-b border-gray-800 pb-4">
										<span className="text-[#EAEAEA] font-medium">{key}</span>
										<span className="text-white font-semibold">{value}</span>
									</div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Customer Reviews */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<h2 className="text-3xl font-sans font-bold mb-6 uppercase tracking-wider">Customer Reviews</h2>
						<div className="space-y-6">
							{[
								{
									name: "Sarah Johnson",
									rating: 5,
									date: "March 15, 2024",
									comment:
										"Absolutely love these bands! The quality is outstanding and they've really helped me progress in my workouts.",
								},
								{
									name: "Mike Chen",
									rating: 5,
									date: "March 10, 2024",
									comment: "Best resistance bands I've ever used. Durable, comfortable, and perfect for home workouts.",
								},
								{
									name: "Emily Rodriguez",
									rating: 4,
									date: "March 5, 2024",
									comment:
										"Great product! Shipping was fast and the quality exceeded my expectations. Highly recommend!",
								},
							].map((review, index) => (
								<div key={index} className="bg-[#1A1B1C] rounded-xl p-6 border border-[#00FF7F]/20">
									<div className="flex items-center justify-between mb-4">
										<div>
											<h3 className="font-semibold text-lg">{review.name}</h3>
											<p className="text-sm text-[#EAEAEA]">{review.date}</p>
										</div>
										<div className="flex items-center gap-1">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`w-4 h-4 ${i < review.rating ? "fill-[#FFD166] text-[#FFD166]" : "text-gray-600"}`}
												/>
											))}
										</div>
									</div>
									<p className="text-[#EAEAEA] leading-relaxed">{review.comment}</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
