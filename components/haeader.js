function header(){
    return `
    <nav class="navbar navbar-light bg-light">
    <div id="head1" class="container-fluid">
          <span class="navbar-text">
            Asia's 1st Brand with MADE SAFE Certified Products
          </span>
          <span class="navbar-tex">
            FLAT 500 Cashback on Orders Above 999 Today | Use Code - FLAT500 | Click To Shop Now
          </span>
          <span class="navbar-text">
            <i class="fa-solid fa-user"></i>
          </span>
        </div>
      </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="img/mamaearth-logo.webp" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-primary btn-outline-success" type="submit"><span class="search_icon"><i class="fa-solid fa-magnifying-glass"></i></span><span>Search</span></button>
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
                <li class="nav-item">
                  <a class="nav-link ml-auto" href="#"><span class="fa-carticon"><i class="fa-solid fa-cart-shopping"></i></span><span>Cart</span></a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="fa-loginicon"><i class="fa-solid fa-user"></i></span><span>Login</span>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Your Order</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Manage Address</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Contact Us</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="btn btn-primary" id="login-btn" href="#" role="button">Login</a></li>
                  </ul>
                </li>                
              </ul>
          </div>
        </div>
      </nav>
      <nav  class="navbar navbar-expand-lg navbar-light bg-light">
        <div id="nav-2" class="container-fluid">
          <!-- <a class="navbar-brand" href="#">Navbar</a> -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a id="home_bar" class="nav-link active" aria-current="page" href="#">HOME</a>
              <a class="nav-link active" aria-current="page" href="#">BABY</a>
              <a class="nav-link active" aria-current="page" href="#">BEAUTY</a>
              <a class="nav-link active" aria-current="page" href="#">HAIR</a>
              <a class="nav-link active" aria-current="page" href="#">FACE</a>
              <a class="nav-link active" aria-current="page" href="#">BODY</a>
              <a class="nav-link active" aria-current="page" href="#">GIFT PACKS</a>
              <a class="nav-link active" aria-current="page" href="#">ALL PRODUCTS</a>
              <a class="nav-link active" aria-current="page" href="#">BLOG</a>
              <a class="nav-link active" aria-current="page" href="#">PLANT GOODNESS</a>
              <a class="nav-link active" aria-current="page" href="#">STORE LOCATOR</a>
            </div>
          </div>
        </div>
      </nav>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="4000">
            <img src="img/img1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="img/img2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="img/img3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="img/img4.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="img/img5.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`
}
export default header;