'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="shrink-0 z-50">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image
                            src="/logo.png"
                            alt="MillennialC Logo"
                            width={220} // Slightly responsive base size
                            height={70}
                            className="w-40 sm:w-48 md:w-56 h-auto object-contain" // Tailwind responsive widths
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[16px] font-semibold leading-[1.7] tracking-[-0.02em] text-[#111111]">
                    <Link href="/" className="hover:text-black/70 transition-colors font-manrope">Home</Link>
                    <Link href="/services" className="hover:text-black/70 transition-colors font-manrope">Angebot</Link>
                    <Link href="/about" className="hover:text-black/70 transition-colors font-manrope">Über uns</Link>
                    <Link href="/how-we-work" className="hover:text-black/70 transition-colors font-manrope">So arbeiten wir</Link>
                    <Link href="/blogs" className="hover:text-black/70 transition-colors font-manrope">Blog</Link>
                    <Link href="/kontakt" className="hover:text-black/70 transition-colors font-manrope">Kontakt</Link>
                </nav>

                {/* Desktop CTA Button */}
                <div className="hidden lg:flex shrink-0">
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center h-[43px] pt-[8px] pr-[8px] pb-[8px] pl-[16px] gap-[12px] rounded-[16px] border border-gray-300 bg-white text-[15px] font-medium text-gray-900 transition-colors hover:bg-gray-50 whitespace-nowrap cursor-pointer"
                    >
                        Angebot anfragen
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100/50 shrink-0">
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="lg:hidden z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                        aria-label="Toggle Navigation"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer (Shows on smaller screens when open) */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-white pt-24 pb-6 px-6 overflow-y-auto flex flex-col h-screen">
                    {/* Mobile Navigation Links */}
                    <nav className="flex flex-col gap-6 text-lg justify-start items-start">
                        <Link
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full border-b border-gray-100 pb-4 font-medium text-gray-800 hover:text-black"
                        >
                            Home
                        </Link>
                        <Link
                            href="/patients-first-book-site"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full border-b border-gray-100 pb-4 font-medium text-gray-800 hover:text-black"
                        >
                            Angebot
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full border-b border-gray-100 pb-4 font-medium text-gray-800 hover:text-black"
                        >
                            Über uns
                        </Link>
                        <Link
                            href="/how-we-work"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full border-b border-gray-100 pb-4 font-medium text-gray-800 hover:text-black"
                        >
                            So arbeiten wir
                        </Link>
                        <Link
                            href="/blogs"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full border-b border-gray-100 pb-4 font-medium text-gray-800 hover:text-black"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/kontakt"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full border-b border-gray-100 pb-4 font-medium text-gray-800 hover:text-black"
                        >
                            Kontakt
                        </Link>
                    </nav>

                    {/* Mobile CTA Button (Bottom of drawer) */}
                    <div className="mt-8 flex flex-col">
                        <Link
                            href="/kontakt"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                            }}
                            className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-black text-white px-6 py-4 text-[16px] font-medium transition-colors hover:bg-gray-800 cursor-pointer"
                        >
                            Angebot anfragen <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header