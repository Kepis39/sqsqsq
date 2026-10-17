import "../Header/header.scss"
import { Link } from "react-router-dom"
export default function Pag1_section1() {
  return (
    <>
    <header>
            <nav>
                <div>
               <ul>
            <li><Link to="/">SUPPLEMENT</Link></li>
            <li><Link>LASER</Link></li>
            <li><Link>REVIEWS</Link></li>
            <li><Link>JOURNAL</Link></li>
            <li><Link>ABOUT</Link></li>
               </ul>
               </div>

                <div>

                </div>

                <div>
               <ul>
            <li><Link to="/">HELP & SUPPORT</Link></li>
            <li><Link>ACTIVATE</Link></li>
            <li><Link>ACCOUNT</Link></li>
               </ul>
               <button>BUY</button>
               </div>
            </nav>
        </header>
    </>
  )
}