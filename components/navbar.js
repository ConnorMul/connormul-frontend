import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4">
            <Link href="/">
                Home
            </Link>
            <Link href="/projects">
                Projects
            </Link>
            <Link href="/about">
                Who's Connor?
            </Link>
            <Link href="/contact">
                Contact
            </Link>
        </nav>
    )
}