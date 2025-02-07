function Product(title, price) {
    this.title = title;
    this.price = price;
}

const TShirt = new Product("T-Shirt", 45);
const Hoodie = new Product("Hoodie", 65);
const Jacket = new Product("Jacket", 70);

const createTShirt = (title, price) => {
    let product = document.querySelector('.t-shirt');

    product.innerHTML = `
    <div class="product-card">
        <div class="product-image">
            <img src="img/Stagefright-T-Shirt-Front.jpg" alt="product image here">
        </div>
        <div class="product-description">
            <div class="product-name">
                <h3>${title}</h3>
            </div>
            <div class="product-price">
                <h3>$${price}</h3>
            </div>
            <div class="link-button">
                <a href="#">Sold Out</a>
            </div>
        </div>
    </div>`
}

const createHoodie = (title, price) => {
    let product = document.querySelector('.hoodie');

    product.innerHTML = `
    <div class="product-card">
        <div class="product-image">
            <img src="img/Stagefright-Hoodie-Front.jpg" alt="product image here">
        </div>
        <div class="product-description">
            <div class="product-name">
                <h3>${title}</h3>
            </div>
            <div class="product-price">
                <h3>$${price}</h3>
            </div>
            <div class="link-button">
                <a href="#">Sold Out</a>
            </div>
        </div>
    </div>`
}

const createJacket = (title, price) => {
    let product = document.querySelector('.jacket');

    product.innerHTML = `
    <div class="product-card">
        <div class="product-image">
            <img src="img/Stagefright-Jacket-Front.jpg" alt="product image here">
        </div>
        <div class="product-description">
            <div class="product-name">
                <h3>${title}</h3>
            </div>
            <div class="product-price">
                <h3>$${price}</h3>
            </div>
            <div class="link-button">
                <a href="#">Sold Out</a>
            </div>
        </div>
    </div>`
}

createTShirt(TShirt.title, TShirt.price);
createHoodie(Hoodie.title, Hoodie.price);
createJacket(Jacket.title, Jacket.price);