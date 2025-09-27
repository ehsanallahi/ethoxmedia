'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

// Updated navigation links to match the screenshot
const menuItems = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Cases', href: '#cases' },
]

export function Navbar() {
    const [menuOpen, setMenuOpen] = React.useState(false)

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="dark fixed inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                <div className="relative flex h-16 items-center justify-between">

                    {/* ====== Logo ====== */}
                    <div className="flex-shrink-0">
                        <Logo aria-label="home" onClick={closeMenu} />
                    </div>
                    
                    {/* ====== Desktop Menu (Pill Shape) ====== */}
                    <div className="hidden lg:flex items-center justify-center bg-neutral-900/80 border border-neutral-700/80 backdrop-blur-sm rounded-full px-6 py-2">
                        <div className="flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-neutral-300 hover:text-white transition-colors duration-200">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* ====== Desktop CTA (Hire Us Button) ====== */}
                    <div className="hidden lg:flex items-center">
                        <Button asChild size="sm" className="bg-neutral-900/80 border border-neutral-700/80 backdrop-blur-sm rounded-full hover:bg-neutral-800">
                           <Link href="#" className="flex items-center space-x-2">
                                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className='text-white'>Hire Us</span>
                           </Link>
                        </Button>
                    </div>
                    
                    {/* ====== Mobile Menu Button ====== */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
                            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-neutral-800 focus:outline-none">
                            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ====== Mobile Menu Panel ====== */}
            {menuOpen && (
                <div className="lg:hidden">
                    <div className="space-y-1 px-4 pb-3 pt-2 bg-neutral-900 border border-neutral-800 mx-4 rounded-lg shadow-lg">
                       {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeMenu}
                                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white">
                                {item.name}
                            </Link>
                        ))}
                        <div className="border-t border-neutral-700 pt-4 mt-4">
                            <Button asChild size="sm" className="w-full bg-neutral-900/80 border border-neutral-700/80 backdrop-blur-sm rounded-full hover:bg-neutral-800">
                                <Link href="#" onClick={closeMenu}>
                                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                                    <span className='text-white'>Hire Us</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}