import React from 'react'

export default function Footer() {
  return (
    <footer className="border-top">
    <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <ul className="list-inline text-center">
                    <li className="list-inline-item">
                        <a href="#!">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                </ul>
                <div className="small text-center text-muted fst-italic">Copyright &copy; Your Website 2023</div>
            </div>
        </div>
    </div>
</footer>
  )
}


// export default function Footer() {
//   return (
//     <footer>
//         <div className='container py-[2rem]'>
//             <div className='row'>
//                 <div className='col-lg-8 col-md-10 mx-auto'>
//                     <ul className='list-inline text-center  md:flex justify-center'>
//                         <li className='list-inline-item'>
//                             <a href='#'>
//                                 <span className='fa-stack fa-lg'>
//                                     <i className='fas fa-circle fa-stack-2x'></i>
//                                     <i className='fab fa-twitter fa-stack-1x fa-inverse'></i>
//                                 </span>
//                             </a>
//                         </li>
//                         <li className='list-inline-item'>
//                             <a href='#'>
//                                 <span className='fa-stack fa-lg'>
//                                     <i className='fas fa-circle fa-stack-2x'></i>
//                                     <i className='fab fa-facebook fa-stack-1x fa-inverse'></i>
//                                 </span>
//                             </a>
//                         </li>
//                         <li className='list-inline-item'>
//                             <a href='#'>
//                                 <span className='fa-stack fa-lg'>
//                                     <i className='fas fa-circle fa-stack-2x'></i>
//                                     <i className='fab fa-github fa-stack-1x fa-inverse'></i>
//                                 </span>
//                             </a>
//                         </li>
//                     </ul>  
//                     <p className='text-center py-[2rem]'>Copyright &copy; your Website 2023</p> 
//                 </div>
//             </div>
//         </div>
//     </footer>
//   )
// }
