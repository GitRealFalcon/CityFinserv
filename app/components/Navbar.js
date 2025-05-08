'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"


const Navbar = () => {

    const router = useRouter();
   

  const HandleChange = (e) => {
    let selected ="/services/" + e.target.value 
    if (selected) {
      
      selected !== "/services/service"?router.push(selected):""
      
    }
    
  }
 

  return (
    <ul className="nav_list z-50">
      <Link href="/"><li className="flex items-center"><p className=" text-2xl sm:text-4xl text-amber-400">{"<"}</p><p className=" sm:text-2xl text-green-400">City</p><p className=" sm:text-2xl text-amber-200" >Finserv</p><p className="text-2xl sm:text-4xl text-amber-400">{">"}</p></li></Link>
      <Link href="/offers"><li>Get Offers</li></Link>
      {/* <Link href="/about"><li>ABOUT</li></Link>
      <Link href="/contact"><li> CONTACT US</li></Link> */}
     <select onChange={HandleChange} value="service" name="service" className="" >
        <option value="service">SERVICES</option>
        <option className="text-black" value="insurance" >Insurance</option>
        <option className="text-black" value="credit-cards" >Credit Cards</option>
        <option className="text-black" value="loans" >Loans</option>
        <option className="text-black" value="accounts" >Bank Account</option>
      </select>

    </ul>
  )
}

export default Navbar