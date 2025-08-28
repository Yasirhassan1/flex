import Link from "next/link"
export default function Header(){
    return(
        <header className="flex justify-between gap-3 h-[50px] bg-black text-white items-center px-4">
          <h1>LOGO</h1>
          <div className="center flex gap-3">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>Contact</Link>
          </div>
          <button className="bg-red-400 px-4 py-2 rounded-full">Sign Up</button>
        </header>
    )
}