import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">Start Bootstrap</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
                <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/post">Sample Post</Link></li>
                <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/contact">Contact</Link></li>
                <li className="nav-item">
                    <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/contact" onClick={props.login} >
                   { (props.status) ? "Logout":"Login"}
                    </Link></li>
            </ul>
        </div>
    </div>
</nav>
</>
  )
}



// export default function NavBar() {
//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light fixed-top border-2 border-blue-500  py-[1rem]"
//       id="mainNav"
//     >
//       <div className="container flex justify-around border-2 border-red-400">
//         <div>
//           <a className="navbar-brand" href="index.html">
//             Start Bootstrap
//           </a>
//           <button
//             className="navbar-toggler navbar-toggler-right  sm:hidden"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarResponsive"
//             aria-controls="navbarResponsive"
//             aria-expanded="false"
//             aria-label="Toggle navigation "
//           >
//             Menu
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//         <div className="navbar-collapse" id="navbarResponsive">
//           <ul className="navbar-nav-ml-auto text-black hidden  sm:flex sm:gap-[1rem]">
//             <li className="nav-item">
//               <a className="nav-link " href="index.html">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="about.html">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="post.html">
//                 Sample Post
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="contact.html">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// for bootstrap
// export default function NavBar() {
//     return (
//           <nav className='navbar navbar-expand-lg navbar-light fixed-top flex bg-red-300 ' id="mainNav">

//               <div className='container'>
//                   <a className='navbar-brand' href='index.html'>Start Bootstrap</a>
//                   <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle="collapse"
//                   data-target="#navbarResponsive" aria-controls="navbarResponsive"
//                   aria-expanded="false" aria-label='Toggle navigation '>
//                       Menu
//                       <i className='fas fa-bars'></i>
//                   </button>
//                   <div className='navbar-collapse' id="navbarResponsive">
//                   <ul className='navbar-nav-ml-auto text-black '>
//                           <li className='nav-item'>
//                               <a className='nav-link ' href='index.html'>Home</a>
//                           </li>
//                           <li className='nav-item'>
//                               <a className='nav-link' href='about.html'>About</a>
//                           </li>
//                           <li className='nav-item'>
//                               <a className='nav-link' href='post.html'>Sample Post</a>
//                           </li>
//                           <li className='nav-item'>
//                               <a className='nav-link' href='contact.html'>Contact</a>
//                           </li>
//                       </ul>
//                   </div>
//               </div>
//           </nav>
//     )
// }
