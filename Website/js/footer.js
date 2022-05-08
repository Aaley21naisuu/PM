const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML =`
    <div class="footer-content">
        <img src="img/LOGO2.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Main Menu</li>
                <li><a href="#" class="footer-link">Home</a></li>
                <li><a href="#" class="footer-link">Product</a></li>
                <li><a href="#" class="footer-link">Shops</a></li>
                <li><a href="#" class="footer-link">About</a></li>
                

            </ul>
            <ul class="category">
                <li class="category-title">Find us on</li>
                <li><a href="#" class="footer-link">Facebook</a></li>
                <li><a href="#" class="footer-link">Instagram</a></li>
                <li><a href="#" class="footer-link">Twitter</a></li>

            </ul>

        </div>

    </div>

    <p class="footer-credit">CLECKHUDDERSFAX SELLS ONLINE STORE</p>
    `;
}

createFooter();