import React from 'react'

const Newnavbar = () => {
  return (<div>
    {/* //  !-- ======= Top Bar ======= --! */}
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
  
        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">{" "}</a></li>
            <li><a class="nav-link scrollto active" href="#hero">{" "}</a></li>
            <li><a class="nav-link scrollto active" href="#hero">{" "}</a></li>
            <li><a class="nav-link scrollto active" href="#hero">{" "}</a></li>
            <li><a class="nav-link scrollto active" href="#hero">{" "}</a></li>
            <li><a class="nav-link scrollto active" href="#hero">Blog</a></li>
            <li><a class="nav-link scrollto" href="#about">Gallery</a></li>
            <li><a class="nav-link scrollto" href="#menu">tendances</a></li>
            <li><a class="nav-link scrollto" href="#specials">participants</a></li>
            <li class="dropdown"><a href="#"><span>name</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Profil</a></li>
                <li><a href="#">A Propos </a></li>
                <li><a href="#"> Nous Contacter</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}
  
        <a href="#book-a-table" class="book-a-table-btn scrollto">Book a table</a>
  
      </div>
    </header>
    {/* <!-- End Header --> */}
    </div>
  )
}

export default Newnavbar