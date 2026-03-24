'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
    { href: '/', label: 'Home', exact: true },
    { href: '/services', label: 'Angebot' },
    { href: '/about', label: 'Über uns' },
    { href: '/blogs', label: 'Blog' },
    { href: '/kontakt', label: 'Kontakt' },
]

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        handleScroll() // run on mount
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (href: string, exact?: boolean) => {
        if (exact) return pathname === href
        return pathname === href || pathname.startsWith(href + '/')
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm'
                    : 'bg-transparent! border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="shrink-0 z-50">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image
                            src="/logo.png"
                            alt="MillennialC Logo"
                            width={220}
                            height={70}
                            className="w-40 sm:w-48 md:w-56 h-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[16px] font-semibold leading-[1.7] tracking-[-0.02em] text-[#111111]">
                    {navLinks.map(({ href, label, exact }) => {
                        const active = isActive(href, exact)
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`relative pb-[6px] font-manrope transition-colors group ${active ? 'text-[#111111]' : 'text-[#111111] hover:text-black/70'}`}
                            >
                                {label}
                                {/* Active underline */}
                                <span
                                    className={`absolute left-0 -bottom-px h-[2.5px] rounded-full transition-all duration-300 bg-[#6A4BFA]
                                        ${active ? 'w-full' : 'w-0 group-hover:w-full opacity-0 group-hover:opacity-60'}`}
                                />
                            </Link>
                        )
                    })}
                </nav>

                {/* Desktop CTA Button */}
                <div className="hidden lg:flex shrink-0">
                    <Link
                        href="/kontakt#kontakt-form"
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

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-white pt-24 pb-6 px-6 overflow-y-auto flex flex-col h-screen">
                    <nav className="flex flex-col gap-6 text-lg justify-start items-start">
                        {navLinks.map(({ href, label, exact }) => {
                            const active = isActive(href, exact)
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`w-full pb-4 font-medium transition-colors ${active
                                            ? 'text-[#6A4BFA] border-b-2 border-[#6A4BFA]'
                                            : 'text-gray-800 hover:text-black border-b border-gray-100'
                                        }`}
                                >
                                    {label}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Mobile CTA Button */}
                    <div className="mt-8 flex flex-col">
                        <Link
                            href="/kontakt#kontakt-form"
                            onClick={() => setIsMobileMenuOpen(false)}
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
