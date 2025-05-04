import Link from "next/link"


const Navbar = () => {
  return (
    <ul className="nav_list z-50">
      <Link href="/"><li className="flex items-center"><p className=" text-2xl sm:text-4xl text-amber-400">{"<"}</p><p className=" sm:text-2xl text-green-400">City</p><p className=" sm:text-2xl text-amber-200" >Finserv</p><p className="text-2xl sm:text-4xl text-amber-400">{">"}</p></li></Link>
      <Link href="/services"><li>SERVICE</li></Link>
      <Link href="/about"><li>ABOUT</li></Link>
      <Link href="/contact"><li> CONTACT US</li></Link>
    </ul>
  )
}

export default Navbar