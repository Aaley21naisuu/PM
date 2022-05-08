const createNav = () => {
    let nav = document.querySelector('.navbar');
     nav.innerHTML = `
    <a href="index.html"><img src="img/LOGO.png" alt=""></a>
                <div class="nav-links" id="navLinks">
                       
                    
                    <ul>
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="#">PRODUCT</a></li>
                        <li><a href="#">SHOPS</a></li>
                        <li><a href="#">ABOUT</a></li>
                        
                        <li><a href="#"><img src="img/user1.png" alt=""></a></li>
                        <li><a href="#"><img src="img/cart1.png" alt=""></a></li>
                    </ul>
                    
                </div>    
                <div class="search">
                    <input type="text" class="search-text" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>

    `;
}

createNav();