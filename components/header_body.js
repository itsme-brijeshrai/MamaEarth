function header_body(){
    return `
    <div id="header1" class="container-fluid">
    <div class="tag1">Asia's 1st Brand with MADE SAFE Certified Products</div>
    <div>Buy for 599 and Get 2 Ubtan Bestsellers Free | Use Coupon - UBTAN2B | Click to shop</div>
    <div class="tag2"><i class="fa-solid fa-user"></i></div>
</div>
<div id="header2" class="container-fluid">
    <div><img src="img/mamaearth-logo.webp" alt="MamaEarth"></div>
    <div><input type="search" onclick="searchData()" placeholder="Search for products...">
        <button type="button" class="btn btn-primary"><span><i class="fa-solid fa-magnifying-glass"></i>
        </span>Search</button></div>
    <div id="log">
        <div><i class="fa-solid fa-cart-shopping"></i>Cart</div>
        <div><i class="fa-solid fa-user"></i>Login</div>
    </div>
</div>`
}
export default header_body;