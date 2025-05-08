import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: 'Your Financial Guide',
    description: 'Certified financial advisor offering tailored financial services like credit help, loans, insurance, and more.',
  };

export default function Home() {
    return (
        <div className="portfolio_container flex items-center">

            <div className="hero_container">
                <div className="left">
                    <div className="social_icon">
                        <Link href="https://www.facebook.com/share/17vWV6DTNA/">
                            <i className="fa-brands fa-facebook-f"></i>

                        </Link>
                       
                        <Link href="https://www.instagram.com/cityfinserv.in">
                            <i className="fa-brands fa-instagram"></i>

                        </Link>
                        <Link href="https://whatsapp.com/channel/0029VbAMyCGATRSpz7NrNk1v">
                            <i className="fa-brands fa-whatsapp"></i>

                        </Link>
                       
                    </div>
                    <div className="content">
                        <h2>Hi I Am <div className="name">&nbsp;Mohd Kaseem</div></h2>
                        <h1>Financial Advisor.</h1>
                        <p>Certified Financial Advisor offering expert guidance on Insurance, Credit Cards, Loans, Savings Accounts, and more. I help Individuals and Businesses make smart financial choices with personalized advice and trusted solutions build Link secure financial future.</p>
                        <div className="buttons flex mb-4 flex-wrap gap-3">
                            <Link href="/services/insurance"><button>Car & Bike Insurance</button></Link>
                            <Link href="/services/accounts"><button>Open Bank Account</button></Link>
                            <Link href="https://sales.gromo.in/c/-_0mBdc_ZAyqZwog-I9AB?versionCode=null" target="_blank"><button>Check CIBIL Score</button></Link>
                            <Link href="https://sales.gromo.in/m/-_0mBdc_ZAyqZwog-I9AB" target="_blank"><button>Mutual Fund</button></Link>
                            <Link href="/services/loans"><button>Get Loans</button></Link>
                            <Link href="/services/credit-cards"><button>Credit Card</button></Link>
                            <Link href="https://sales.gromo.in/Mohd/WQLY0055/check-challan" target="_blank"><button>Challan Info</button></Link>
                        </div>
                        {/* <div className="partners flex flex-wrap gap-3">
                           <Link  href=""> <div className="h-14 w-28 items-center justify-center flex rounded-xl p-3 bg-white"><Image width={"100"} height={"100"}  src="/gromo.png" alt="" /></div></Link>
                           <Link  href=""> <div className="h-14 w-28 items-center justify-center flex rounded-xl p-3 bg-white"><Image width={"100"} height={"100"}  src="/IOB.NS_BIG.png" alt="" /></div></Link>
                           <Link  href=""> <div className="h-14 w-24 items-center justify-center flex rounded-xl p-3 bg-white overflow-hidden "><Image width={"80"} height={"100"}  src="/lic-logo-png-transparent.png" alt="" /></div></Link>
                           <Link  href=""> <div className="h-14 w-24 items-center justify-center flex rounded-xl p-3 bg-white overflow-hidden "><Image width={"95"} height={"100"}  src="/csc.png" alt="" /></div></Link>
                           <Link  href=""> <div className="h-14 w-15 items-center justify-center flex rounded-xl p-3 bg-white"><Image width={"40"} height={"100"}  src="/KOTAKBANK.NS.png" alt="" /></div></Link>
                        </div> */}
                    </div>
                </div>
                <div className="right"></div>
            </div>
            <div className="design ">
                <div className="circle"></div>
                <div className="circle "></div>
            </div>
        </div>
    );
}
 