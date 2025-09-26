'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
]

export const HeroHeader = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // Function to close the menu, useful for mobile link clicks
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="dark">
            <nav className="fixed inset-x-0 top-0 z-50">
                <div
                    className={cn(
                        'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300',
                        isScrolled ? 'mt-2' : 'mt-4'
                    )}>
                    <div className={cn(
                        'relative flex h-16 items-center justify-between transition-all duration-300',
                         isScrolled ? 'rounded-2xl border border-white/10 bg-black/50 backdrop-blur-lg px-6' : ''
                    )}>

                        {/* Logo */}
                        <div className="flex-shrink-0">
    {/* The outer Link is removed. Props are now passed to Logo. */}
    <Logo aria-label="home" onClick={closeMenu} />
</div>
                        
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-neutral-300 hover:text-white transition-colors duration-200">
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTAs */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-4">
                             <Button asChild variant="outline" size="sm">
                                <Link href="#">Hire Us</Link>
                            </Button>
                             
                        </div>
                        
                        {/* Mobile Menu Button */}
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

                {/* Mobile Menu Panel */}
                {menuOpen && (
                    <div className="lg:hidden">
                        <div className="space-y-4 px-4 pb-5 pt-3 bg-neutral-900 border-b border-white/10 mx-4 rounded-b-lg">
                           {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white">
                                    {item.name}
                                </Link>
                            ))}
                            <div className="border-t border-neutral-700 pt-4 flex flex-col space-y-3">
                                <Button asChild variant="outline" size="sm">
                                    <Link href="#" onClick={closeMenu}>Login</Link>
                                </Button>
                                <Button asChild size="sm">
                                    <Link href="#" onClick={closeMenu}>Sign Up</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}