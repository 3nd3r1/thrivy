"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";

const Navbar = () => {
    return (
        <header className="w-full bg-white shadow-md fixed z-50">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/questionnaire">Questionnaire</Link>
                    </li>
                    <li>
                        <Link href="/companies">Companies</Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="md:hidden">
                            <Menu className="w-6 h-6 text-gray-700" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-4 bg-white shadow-lg rounded-lg">
                        <ul className="space-y-3">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/questionnaire">Questionnaire</Link>
                            </li>
                            <li>
                                <Link href="/companies">Companies</Link>
                            </li>
                        </ul>
                    </PopoverContent>
                </Popover>
            </nav>
        </header>
    );
};
export default Navbar;
