function navbar() {
    return `
    <nav>
    <div class="navbarCommonToAll">

    <div id = "navbar1">
    <a href = ""><p>Asia's first brand with MADE SAFE certified products</p></a>
    <a href = ""><p id = "navt">Free Shippping above 399 | COD Available | Extra 5% OFF
        on prepaid orders | Shop Now
    </p>
   </a>
    <span class="iconify" data-icon="bytesize:user"></span>
    </div>
    
<div id = "nav2">
    <div id="nav2Logo">
    <a href="HOME.html"><img id = "logo" src = "https://media.loylty.com/movies/bannerimg_20210730184309563.jpg">
    </a>
  </div>

    <div id = "nav2search">
        <input id = "srch" type = "text" placeholder = "Search for products.."><button id = "btn"><span class="iconify" style="margin-bottom: -6px;padding-right: 2px; font-size: 22px; color: white;" data-icon="ant-design:search-outlined"></span>Search</button>
    </div>
     
    <div  id="nav2icon1">
    <a href = "cart.html"><span class="iconify" data-icon="bytesize:cart"></span>Cart</a> 
    </div>
    <div id="nav2icon2">
    <a href = "signup.html" id="changingName"><span class="iconify" data-icon="bytesize:user"></span>Login</a>
</div>
</div>
<div id = "nav3">
    <p id="homet">HOME</p>
    
    <div class="dropdown"> <p>BABY</p> <div class="dropdown-content">
        <ul class = "inline">
            <li class="bold">Explore</li>
            <li>New Launchers</li>
            <li>Best Sellers</li>
            <li>combos</li>
            <li>Gift Packs</li>
        </ul>
        
        <ul class = "inline">
            <li class="bold">Baby</li>
            <li>Baby Shampoo</li>
            <li>Baby Oralcare</li>
            <li>Baby Oil</li>
            <li>Baby Skin</li>
            <li>Baby Bath</li>
            <li>Baby Diaper</li>
        </ul>

        <ul class = "inline">
            <li class="blue">See All</li>
        </ul>
    </div> </div>

    <div  id="beauty" class="dropdown"> <p>BEAUTY</p> <div class="dropdown-content">
    <ul class = "inline">
            <li class="bold">Explore</li>
            <li>New Launchers</li>
            <li>Best Sellers</li>
            <li>combos</li>
            <li>Gift Packs</li>
        </ul>

        <ul class = "inline">
            <li class="bold">Beauty</li>
            <li>Face</li>
            <li>Hair</li>
            <li>Body</li>
        </ul>

        <ul class = "inline">
            <li class="blue">See All</li>
        </ul>
    </div> </div>

    <div  id="hair" class="dropdown"> <p>HAIR</p> <div class="dropdown-content">
    <ul class = "inline">
            <li class="bold">Explore</li>
            <li>New Launchers</li>
            <li>Best Sellers</li>
            <li>combos</li>
            <li>Gift Packs</li>
        </ul>

        <ul class = "inline">
            <li class="bold">Hair</li>
            <a id="shampoo" href="products.html"><li>Shampoo</li></a>
            <li>conditioner</li>
            <li>Hair Oil</li>
            <li>Hair Mask</li>
            <li>Hair Serum</li>
        </ul>

        <ul class = "inline">
            <li class="blue">See All</li>
        </ul>
    </div> </div>

    <div  id="face" class="dropdown"> <p>FACE</p> <div class="dropdown-content">
    <ul class = "inline">
            <li class="bold">Explore</li>
            <li>New Launchers</li>
            <li>Best Sellers</li>
            <li>combos</li>
            <li>Gift Packs</li>
        </ul>

        <ul class = "inline">
            <li class="bold">Face</li>
            <li>Face Wash</li>
            <li>Face Mask</li>
            <li>Face Cream</li>
            <li>Face Serum</li>
            <li>Face Scrum</li>
            <li>Face Toner</li>
            <li>Face Gel</li>
            <li>Face Sheet Mask</li>
        </ul>

        <ul class = "inline">
            <li class="blue">See All</li>
        </ul>
    </div> </div>

    <div  id="body" class="dropdown"> <p>BODY</p> <div class="dropdown-content">
    <ul class = "inline">
            <li class="bold">Explore</li>
            <li>New Launchers</li>
            <li>Best Sellers</li>
            <li>combos</li>
            <li>Gift Packs</li>
        </ul>

        <ul class = "inline">
            <li class="bold">Bodyy</li>
            <li>Body Butter</li>
            <li>Body Wash</li>
            <li>Body Lotion</li>
            <li>Body Scrub</li>
            <li>Hand Cream</li>
        </ul>

        <ul class = "inline">
            <li class="blue">See All</li>
        </ul>
    </div> </div>

    <p id="gift" class="hometxt">GIFT PACKS</p>
    <p class="hometxt">ALL PRODUCTS</p>
    <p class="hometxt">BLOG</p>
    <p class="hometxt">PLANT GOODNESS</p>
    <p class="hometxt">STORE LOCATOR</p>
</div> 

</div>

  </nav>
   `;
  }
  
  export default navbar;
  