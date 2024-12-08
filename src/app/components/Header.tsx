import Link from 'next/link';
import { GrContactInfo } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";


interface HeaderProps {
  bgColor?: string; 
}

export default function Header({ bgColor = '' }: HeaderProps) {
  return (
    <header className={`${bgColor} flex justify-between items-center py-4 px-4 md:px-8 bg-gray-50 shadow-md`}>
      <nav className="flex-1 flex justify-center gap-4 text-gray-700 hover:text-gray-900">
        <Link href="/">
          Home
        </Link>
        <Link href="/Shop">
          Shop
        </Link>
        <Link href="/contact">
          
         Contact
          
        </Link>
        <Link href="/About">
          About
        </Link>
      </nav>

      <div className="flex gap-4">
        <Link href="/c">
        <GrContactInfo /></Link>
        <Link href="/search">
        <CiSearch /></Link>
        <Link href="/favorites">
          <MdFavoriteBorder />
        </Link>
        <Link href="/cart">
          <IoCartOutline />
        </Link>
       
      </div>
    </header>
  );
}


  