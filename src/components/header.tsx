import { CartWidget } from "./cart-widget";
import { Search } from 'lucide-react'
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
   <div className="flex items-center justify-between color">
    <div className="flex items-center gap-5">
     <Link href={"/"} className="text-2xl font-extrabold text-white">
      devstore
     </Link>

     <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
      <Search className="w-5 h-5 text-zinc-500"/>

      <input placeholder="Buscar produtos..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500" />
     </form>
    </div>

    <div className="flex items-center gap-4 text-white">
     <CartWidget />

     <div className="w-px h-4 bg-zinc-400"/>

     <Link href={"/"} className="flex items-center gap-2 hover:underline">
      <span className="text-sm">Account</span>
      <Image src="https://github.com/D1ogooo.png" className="h-6 w-6 rounded-full" width={24} height={24} alt=""/>
     </Link>
    </div>
   </div>
  )
}