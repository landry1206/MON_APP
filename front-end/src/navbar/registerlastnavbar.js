import React from 'react'

const registerlastnavbar = () => {
  return (
    <div>{/* //  !-- ======= Top Bar ======= --! */}
    <section id="topbar" class="d-flex align-items-center fixed-top topbar-transparent">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
       
      </div> 
    </section>
  
    {/* <!-- ======= Header ======= --> */}
    <header id="header" class="fixed-top d-flex align-items-center header-transparent bg-dark">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  
        <div class="logo me-auto">
          <h1><a href="index.html">MUSEE 237</a></h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
        </div>
  
        
        {/* <!-- .navbar --> */}
  
        <a href="#book-a-table" class="book-a-table-btn scrollto">s'enregistrer</a>
  
      </div>
    </header>
    {/* <!-- End Header --> */}</div>
  )
}

export default registerlastnavbar