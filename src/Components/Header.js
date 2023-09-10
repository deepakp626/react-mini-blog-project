import React from 'react'

export default function Header(props) {
  return (
    <header className="masthead" 
    style={{backgroundImage: 'url("img/'+props.img+'")'}}>
    <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="site-heading">
                    <h1>{props.title}</h1>
                    <span className="subheading">A Blog Theme by Start Bootstrap</span>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}




// export default function Header() {
//   return (
//     <header className='masthead  border-2 border-orange-400 h-[50vh] bg-cover '
//     style={{backgroundImage:'url("public/img/images.jpeg")'}}>
//         <div className='overlay'></div>
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-lg-8 col-md-10 mx-auto'>
//                     <div className='page-heading   text-center my-[4rem]'>
//                         <h1 className='font-[800] text-[5rem]'>Blogger</h1>
//                         <span className='subheading'>A blog theme by start bootstrap</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </header>
//   )
// }
