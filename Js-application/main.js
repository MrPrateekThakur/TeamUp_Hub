function getProducts() {
    var data = [{ "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"] }, { "id": 2, "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...", "price": 899, "discountPercentage": 17.94, "rating": 4.44, "stock": 34, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/2/1.jpg", "https://i.dummyjson.com/data/products/2/2.jpg", "https://i.dummyjson.com/data/products/2/3.jpg", "https://i.dummyjson.com/data/products/2/thumbnail.jpg"] }, { "id": 3, "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 1249, "discountPercentage": 15.46, "rating": 4.09, "stock": 36, "brand": "Samsung", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/3/1.jpg"] }, { "id": 4, "title": "OPPOF19", "description": "OPPO F19 is officially announced on April 2021.", "price": 280, "discountPercentage": 17.91, "rating": 4.3, "stock": 123, "brand": "OPPO", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/4/1.jpg", "https://i.dummyjson.com/data/products/4/2.jpg", "https://i.dummyjson.com/data/products/4/3.jpg", "https://i.dummyjson.com/data/products/4/4.jpg", "https://i.dummyjson.com/data/products/4/thumbnail.jpg"] }, { "id": 5, "title": "Huawei P30", "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.", "price": 499, "discountPercentage": 10.58, "rating": 4.09, "stock": 32, "brand": "Huawei", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/5/1.jpg", "https://i.dummyjson.com/data/products/5/2.jpg", "https://i.dummyjson.com/data/products/5/3.jpg"] }, { "id": 6, "title": "MacBook Pro", "description": "MacBook Pro 2021 with mini-LED display may launch between September, November", "price": 1749, "discountPercentage": 11.02, "rating": 4.57, "stock": 83, "brand": "Apple", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/6/1.png", "https://i.dummyjson.com/data/products/6/2.jpg", "https://i.dummyjson.com/data/products/6/3.png", "https://i.dummyjson.com/data/products/6/4.jpg"] }, { "id": 7, "title": "Samsung Galaxy Book", "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", "price": 1499, "discountPercentage": 4.15, "rating": 4.25, "stock": 50, "brand": "Samsung", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/7/1.jpg", "https://i.dummyjson.com/data/products/7/2.jpg", "https://i.dummyjson.com/data/products/7/3.jpg", "https://i.dummyjson.com/data/products/7/thumbnail.jpg"] }, { "id": 8, "title": "Microsoft Surface Laptop 4", "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.", "price": 1499, "discountPercentage": 10.23, "rating": 4.43, "stock": 68, "brand": "Microsoft Surface", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/8/1.jpg", "https://i.dummyjson.com/data/products/8/2.jpg", "https://i.dummyjson.com/data/products/8/3.jpg", "https://i.dummyjson.com/data/products/8/4.jpg", "https://i.dummyjson.com/data/products/8/thumbnail.jpg"] }, { "id": 9, "title": "Infinix INBOOK", "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 1099, "discountPercentage": 11.83, "rating": 4.54, "stock": 96, "brand": "Infinix", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/9/1.jpg", "https://i.dummyjson.com/data/products/9/2.png", "https://i.dummyjson.com/data/products/9/3.png", "https://i.dummyjson.com/data/products/9/4.jpg", "https://i.dummyjson.com/data/products/9/thumbnail.jpg"] }, { "id": 10, "title": "HP Pavilion 15-DK1056WM", "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", "price": 1099, "discountPercentage": 6.18, "rating": 4.43, "stock": 89, "brand": "HP Pavilion", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg", "images": ["https://i.dummyjson.com/data/products/10/1.jpg", "https://i.dummyjson.com/data/products/10/2.jpg", "https://i.dummyjson.com/data/products/10/3.jpg", "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"] }, { "id": 11, "title": "perfume Oil", "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil", "price": 13, "discountPercentage": 8.4, "rating": 4.26, "stock": 65, "brand": "Impression of Acqua Di Gio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/11/1.jpg", "https://i.dummyjson.com/data/products/11/2.jpg", "https://i.dummyjson.com/data/products/11/3.jpg", "https://i.dummyjson.com/data/products/11/thumbnail.jpg"] }, { "id": 12, "title": "Brown Perfume", "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml", "price": 40, "discountPercentage": 15.66, "rating": 4, "stock": 52, "brand": "Royal_Mirage", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/12/1.jpg", "https://i.dummyjson.com/data/products/12/2.jpg", "https://i.dummyjson.com/data/products/12/3.png", "https://i.dummyjson.com/data/products/12/4.jpg", "https://i.dummyjson.com/data/products/12/thumbnail.jpg"] }, { "id": 13, "title": "Fog Scent Xpressio Perfume", "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men", "price": 13, "discountPercentage": 8.14, "rating": 4.59, "stock": 61, "brand": "Fog Scent Xpressio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/13/1.jpg", "https://i.dummyjson.com/data/products/13/2.png", "https://i.dummyjson.com/data/products/13/3.jpg", "https://i.dummyjson.com/data/products/13/4.jpg", "https://i.dummyjson.com/data/products/13/thumbnail.webp"] }, { "id": 14, "title": "Non-Alcoholic Concentrated Perfume Oil", "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil", "price": 120, "discountPercentage": 15.6, "rating": 4.21, "stock": 114, "brand": "Al Munakh", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/14/1.jpg", "https://i.dummyjson.com/data/products/14/2.jpg", "https://i.dummyjson.com/data/products/14/3.jpg", "https://i.dummyjson.com/data/products/14/thumbnail.jpg"] }, { "id": 15, "title": "Eau De Perfume Spray", "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality", "price": 30, "discountPercentage": 10.99, "rating": 4.7, "stock": 105, "brand": "Lord - Al-Rehab", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/15/1.jpg", "https://i.dummyjson.com/data/products/15/2.jpg", "https://i.dummyjson.com/data/products/15/3.jpg", "https://i.dummyjson.com/data/products/15/4.jpg", "https://i.dummyjson.com/data/products/15/thumbnail.jpg"] }, { "id": 16, "title": "Hyaluronic Acid Serum", "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid", "price": 19, "discountPercentage": 13.31, "rating": 4.83, "stock": 110, "brand": "L'Oreal Paris", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/16/1.png", "https://i.dummyjson.com/data/products/16/2.webp", "https://i.dummyjson.com/data/products/16/3.jpg", "https://i.dummyjson.com/data/products/16/4.jpg", "https://i.dummyjson.com/data/products/16/thumbnail.jpg"] }, { "id": 17, "title": "Tree Oil 30ml", "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,", "price": 12, "discountPercentage": 4.09, "rating": 4.52, "stock": 78, "brand": "Hemani Tea", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/17/1.jpg", "https://i.dummyjson.com/data/products/17/2.jpg", "https://i.dummyjson.com/data/products/17/3.jpg", "https://i.dummyjson.com/data/products/17/thumbnail.jpg"] }, { "id": 18, "title": "Oil Free Moisturizer 100ml", "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.", "price": 40, "discountPercentage": 13.1, "rating": 4.56, "stock": 88, "brand": "Dermive", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/18/1.jpg", "https://i.dummyjson.com/data/products/18/2.jpg", "https://i.dummyjson.com/data/products/18/3.jpg", "https://i.dummyjson.com/data/products/18/4.jpg", "https://i.dummyjson.com/data/products/18/thumbnail.jpg"] }, { "id": 19, "title": "Skin Beauty Serum.", "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m", "price": 46, "discountPercentage": 10.68, "rating": 4.42, "stock": 54, "brand": "ROREC White Rice", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/19/1.jpg", "https://i.dummyjson.com/data/products/19/2.jpg", "https://i.dummyjson.com/data/products/19/3.png", "https://i.dummyjson.com/data/products/19/thumbnail.jpg"] }, { "id": 20, "title": "Freckle Treatment Cream- 15gm", "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.", "price": 70, "discountPercentage": 16.99, "rating": 4.06, "stock": 140, "brand": "Fair & Clear", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/20/1.jpg", "https://i.dummyjson.com/data/products/20/2.jpg", "https://i.dummyjson.com/data/products/20/3.jpg", "https://i.dummyjson.com/data/products/20/4.jpg", "https://i.dummyjson.com/data/products/20/thumbnail.jpg"] }, { "id": 21, "title": "- Daal Masoor 500 grams", "description": "Fine quality Branded Product Keep in a cool and dry place", "price": 20, "discountPercentage": 4.81, "rating": 4.44, "stock": 133, "brand": "Saaf & Khaas", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/21/1.png", "https://i.dummyjson.com/data/products/21/2.jpg", "https://i.dummyjson.com/data/products/21/3.jpg"] }, { "id": 22, "title": "Elbow Macaroni - 400 gm", "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm", "price": 14, "discountPercentage": 15.58, "rating": 4.57, "stock": 146, "brand": "Bake Parlor Big", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/22/1.jpg", "https://i.dummyjson.com/data/products/22/2.jpg", "https://i.dummyjson.com/data/products/22/3.jpg"] }, { "id": 23, "title": "Orange Essence Food Flavou", "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item", "price": 14, "discountPercentage": 8.04, "rating": 4.85, "stock": 26, "brand": "Baking Food Items", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/23/1.jpg", "https://i.dummyjson.com/data/products/23/2.jpg", "https://i.dummyjson.com/data/products/23/3.jpg", "https://i.dummyjson.com/data/products/23/4.jpg", "https://i.dummyjson.com/data/products/23/thumbnail.jpg"] }, { "id": 24, "title": "cereals muesli fruit nuts", "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji", "price": 46, "discountPercentage": 16.8, "rating": 4.94, "stock": 113, "brand": "fauji", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/24/1.jpg", "https://i.dummyjson.com/data/products/24/2.jpg", "https://i.dummyjson.com/data/products/24/3.jpg", "https://i.dummyjson.com/data/products/24/4.jpg", "https://i.dummyjson.com/data/products/24/thumbnail.jpg"] }, { "id": 25, "title": "Gulab Powder 50 Gram", "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds", "price": 70, "discountPercentage": 13.58, "rating": 4.87, "stock": 47, "brand": "Dry Rose", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/25/1.png", "https://i.dummyjson.com/data/products/25/2.jpg", "https://i.dummyjson.com/data/products/25/3.png", "https://i.dummyjson.com/data/products/25/4.jpg", "https://i.dummyjson.com/data/products/25/thumbnail.jpg"] }, { "id": 26, "title": "Plant Hanger For Home", "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf", "price": 41, "discountPercentage": 17.86, "rating": 4.08, "stock": 131, "brand": "Boho Decor", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/26/1.jpg", "https://i.dummyjson.com/data/products/26/2.jpg", "https://i.dummyjson.com/data/products/26/3.jpg", "https://i.dummyjson.com/data/products/26/4.jpg", "https://i.dummyjson.com/data/products/26/5.jpg", "https://i.dummyjson.com/data/products/26/thumbnail.jpg"] }, { "id": 27, "title": "Flying Wooden Bird", "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm", "price": 51, "discountPercentage": 15.58, "rating": 4.41, "stock": 17, "brand": "Flying Wooden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/27/1.jpg", "https://i.dummyjson.com/data/products/27/2.jpg", "https://i.dummyjson.com/data/products/27/3.jpg", "https://i.dummyjson.com/data/products/27/4.jpg", "https://i.dummyjson.com/data/products/27/thumbnail.webp"] }, { "id": 28, "title": "3D Embellishment Art Lamp", "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)", "price": 20, "discountPercentage": 16.49, "rating": 4.82, "stock": 54, "brand": "LED Lights", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/28/1.jpg", "https://i.dummyjson.com/data/products/28/2.jpg", "https://i.dummyjson.com/data/products/28/3.png", "https://i.dummyjson.com/data/products/28/4.jpg", "https://i.dummyjson.com/data/products/28/thumbnail.jpg"] }, { "id": 29, "title": "Handcraft Chinese style", "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate", "price": 60, "discountPercentage": 15.34, "rating": 4.44, "stock": 7, "brand": "luxury palace", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/29/1.jpg", "https://i.dummyjson.com/data/products/29/2.jpg", "https://i.dummyjson.com/data/products/29/3.webp", "https://i.dummyjson.com/data/products/29/4.webp", "https://i.dummyjson.com/data/products/29/thumbnail.webp"] }, { "id": 30, "title": "Key Holder", "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality", "price": 30, "discountPercentage": 2.92, "rating": 4.92, "stock": 54, "brand": "Golden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/30/1.jpg", "https://i.dummyjson.com/data/products/30/2.jpg", "https://i.dummyjson.com/data/products/30/3.jpg", "https://i.dummyjson.com/data/products/30/thumbnail.jpg"] }];

    return data;
}

function createHeader() {
    var mainDiv = document.querySelector("#mainDiv");

    var header = document.createElement("header");
    header.setAttribute("style", "width: 100%; height: 70px; position: sticky; top: 0; z-index: 30;");
    header.setAttribute("class", "bg-dark d-flex justify-content-around align-items-center");

    var logoDiv = document.createElement("div");
    logoDiv.setAttribute("style", "width: 20%; height: 50px;");
    // logoDiv.setAttribute("class", "d-flex justify-content-center align-items-center");

    var logoImg = document.createElement("h1");
    logoImg.setAttribute("style", "color: red; display: flex; align-items: center;");
    logoImg.innerHTML = `E<h4 style="color: white;">~Commerce</h4>`;

    var searchDiv = document.createElement("input");
    searchDiv.setAttribute("type", "search");
    searchDiv.setAttribute("style", "width: 40%; height: 40px; padding:10px; border-radius: 5px; box-sizing: border-box;");
    searchDiv.setAttribute("placeholder", "Search product");
    searchDiv.setAttribute("id", "searchInput");
    searchDiv.addEventListener("keyup", () => {
        searchOption()
    });

    var signDiv = document.createElement("div");
    signDiv.setAttribute("style", "width: 20%; height: 70px; font-size: 20px; color: white;");
    signDiv.setAttribute("class", "d-flex justify-content-around align-items-center");
    signDiv.setAttribute("id", "MenuDiv");

    if (iSLoggedIn()) {
        let currentUser = sessionStorage.getItem("Current user");

        let cartList = JSON.parse(localStorage.getItem("Cart List"));
        let totalProduct;
        if (cartList) {

            let user = cartList.find((user) => {
                return user.email == currentUser;
            });

            totalProduct = user.cartItems.length;
        } else{
            totalProduct = 0;
        }

        var viewCart = document.createElement("span");
        viewCart.innerHTML = `<i class="fa-solid fa-cart-shopping" style="color: #ffffff;" id="shoppingIcon"> &nbsp;&nbsp;` + totalProduct + `</i>`;
        viewCart.setAttribute("role", "button");
        viewCart.setAttribute("id", "viewCart");

        viewCart.addEventListener("click", () => {
            viewCartPage(mainDiv);
        });

        var signOut = document.createElement("span");
        signOut.innerHTML = "Sign Out";
        signOut.setAttribute("role", "button");

        signOut.addEventListener("click", () => {
            SignOut(signDiv);
        });

        signDiv.appendChild(viewCart);
        signDiv.appendChild(signOut);
    } else {
        beforeSignIn(signDiv);
    }

    mainDiv.appendChild(header);

    header.appendChild(logoDiv);
    header.appendChild(searchDiv);
    header.appendChild(signDiv);

    logoDiv.appendChild(logoImg);
}

function searchOption() {
    let search = document.querySelector("#searchInput").value;
    let productList = JSON.parse(localStorage.getItem("ProductList"));

    let filterData = productList.filter((product) => {
        return product.title.toUpperCase().includes(search.toUpperCase());
    });

    document.querySelector("#cartContainer").remove();

    if (filterData.length == 0)
        createCart(productList);
    else
        createCart(filterData);
}

function viewCartPage() {
    let mainDiv = document.querySelector("#mainDiv");
    mainDiv.innerHTML = "";

    let container = document.createElement("div");
    container.setAttribute("style", "width: 100%; gap: 50px; ");
    container.setAttribute("class", "row mt-5 justify-content-center");

    var tableDiv = document.createElement("div");
    tableDiv.setAttribute("class", "col-sm-12 col-md-8 text-center shadow");
    tableDiv.innerHTML = "<h1><u> Cart List </u></h1>";

    var table = document.createElement("table");
    table.setAttribute("class", "table shadow");
    table.setAttribute("style", "text-align: center;");

    var thead = document.createElement("thead");
    thead.setAttribute("class", "bg-primary");

    let tr1 = document.createElement("tr");

    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");
    var th6 = document.createElement("th");

    th1.innerHTML = "S.No";
    th2.innerHTML = "Name";
    th3.innerHTML = "Price";
    th4.innerHTML = "Quantity";
    th5.innerHTML = "Total";

    var sno = 1;

    var tbody = document.createElement("tbody");

    let CurrentUser = sessionStorage.getItem("Current user");
    let cartList = JSON.parse(localStorage.getItem("Cart List"));

    let userObj = cartList.find((user) => {
        return user.email == CurrentUser;
    });

    let cartItem = userObj.cartItems;
    for (let index in cartItem) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");     // S.No.
        td1.setAttribute("class", "bg-secondary");
        td1.innerHTML = sno;
        sno++;

        let td2 = document.createElement("td");     // Name
        td2.innerHTML = cartItem[index].title + " <img src='" + cartItem[index].thumbnail + "' style=' height: 4rem;'>";

        let td3 = document.createElement("td");     // Price
        td3.innerHTML = cartItem[index].price;

        let td4 = document.createElement("td");     // Quantity
        td4.innerHTML = "<input onchange='qtyChange(" + cartItem[index].id + "," + index + ")' type='number' min='1' id='qtyInput" + index + "' value='" + getqty(cartItem[index].id) + "' style='width: 50px;'>";

        let td5 = document.createElement("td");     // Total
        td5.innerHTML = cartItem[index].price * getqty(cartItem[index].id);
        td5.setAttribute("id", "total" + index);

        let td6 = document.createElement("td");     // Delete icon
        // td6.setAttribute("role","button ");
        td6.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        td6.addEventListener("click", () => {
            removeProduct(index);
        });

        table.appendChild(tr);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
    }

    let orderDetail = document.createElement("div");
    orderDetail.setAttribute("class", "col-sm-12 mt-5 col-md-3 p-3 border text-center shadow bg-dark text-white");
    orderDetail.setAttribute("style", "height: 15rem; border-radius: 10px; position: sticky; top: 10em;");
    orderDetail.innerHTML = "<h1 style=`filter: drop-shadow(30px 10px 4px #4444dd);`>Order Detail</h1>";

    let TotalItem = document.createElement("p");
    TotalItem.innerHTML = "<b>Total Item : </b>" + cartItem.length;

    let TotalAmmount = document.createElement("p");
    TotalAmmount.setAttribute("id", "TotalAmount");
    TotalAmmount.innerHTML = "<b>Total Bill Amount : </b>" + getTotalAmount();

    let checkOut = document.createElement("button");
    checkOut.setAttribute("style", "border: none; width: 90%; height: 40px; background-color: #ffc107; border-radius: 5px;");
    checkOut.innerText = "Check Out";

    checkOut.addEventListener("click", () => {
        checkoutPage(mainDiv);
    });

    let backToHome = document.createElement("button");
    backToHome.setAttribute("class", "btn btn-secondary");
    backToHome.setAttribute("style", "margin-left: 50%; transform: translate(-50%, 10px);");
    backToHome.innerText = "Back to Home";

    backToHome.addEventListener("click", () => {
        mainDiv.innerHTML = "";

        createHeader();
        createCart(JSON.parse(localStorage.getItem("ProductList")));
    });

    let hr = document.createElement("hr");
    orderDetail.appendChild(hr);
    orderDetail.appendChild(TotalAmmount);
    orderDetail.appendChild(TotalItem);
    orderDetail.appendChild(checkOut);

    mainDiv.appendChild(container);
    mainDiv.appendChild(backToHome);

    container.appendChild(tableDiv);
    container.appendChild(orderDetail);

    tableDiv.appendChild(table);

    table.appendChild(thead);
    table.appendChild(tbody);

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    tr1.appendChild(th6);

    thead.appendChild(tr1);
}

function removeProduct(index) {
    let currentUser = sessionStorage.getItem("Current user");
    let cartList = JSON.parse(localStorage.getItem("Cart List"));

    // alert(cartList[0].email);

    let user = cartList.find((user) => {
        return user.email == currentUser;
    });

    user.cartItems.splice(index, 1);

    let userIndex = cartList.findIndex((user) => {
        return user.email == currentUser;
    });

    cartList.splice(userIndex, 1, user);

    localStorage.setItem("Cart List", JSON.stringify(cartList));
    viewCartPage();
}

function checkoutPage(mainDiv) {
    mainDiv.innerHTML = "";
    mainDiv.setAttribute("style", "background-image: url(image/checkout1.avif);");

    let container = document.createElement("div");
    container.setAttribute("class", "container position-relative");
    container.setAttribute("style", "height: 100vh; weidth: 100vw;");

    let form = document.createElement("form");
    form.setAttribute("class", "row p-5 flex-column form position-absolute text-center");
    form.setAttribute("style", "width: 30rem; box-shadow: 0px 0px 100px black; gap:20px; border-radius: 10px; top: 50%; left: 50%; transform: translate(-50%, -50%); backdrop-filter: blur(2rem);");
    form.innerHTML = "<h1 class=`bg-dark w-`><u>Delivery details</u></h1> <br>";

    let nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "form-group d-flex justify-content-between text-white");

    let colon1 = document.createElement("p");
    colon1.innerHTML = ":";

    let colon2 = document.createElement("p");
    colon2.innerHTML = ":";

    let colon3 = document.createElement("p");
    colon3.innerHTML = ":";

    let nameLabel = document.createElement("label");
    nameLabel.innerText = "Name  "

    let nameInput = document.createElement("input");
    nameInput.setAttribute("style", "width: 65%;");
    nameInput.setAttribute('class', 'form-control');
    nameInput.setAttribute('placeholder', 'Enter Your Name');

    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(colon1);
    nameDiv.appendChild(nameInput);

    let emailDiv = document.createElement("div");
    emailDiv.setAttribute("class", "form-group d-flex justify-content-between text-white");

    let emailLabel = document.createElement("label");
    emailLabel.innerText = "Email  "

    let emailInput = document.createElement("input");
    emailInput.setAttribute("style", "width: 65%;");
    emailInput.setAttribute('class', 'form-control');
    emailInput.setAttribute('placeholder', 'Enter Your Email Address');

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(colon2);
    emailDiv.appendChild(emailInput);

    let contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "d-flex justify-content-between text-white");

    let contactLabel = document.createElement("label");
    contactLabel.innerText = "Contact No.";

    let colon4 = document.createElement("span");
    colon4.innerHTML = ":";

    let contactInput = document.createElement("input");
    contactInput.setAttribute("class", "form-control");
    contactInput.setAttribute("style", "width: 65%;");
    contactInput.setAttribute('placeholder', 'Enter Your Contact Number');

    contactDiv.appendChild(contactLabel);
    contactDiv.appendChild(colon4);
    contactDiv.appendChild(contactInput);

    let addressDiv = document.createElement("div");
    addressDiv.setAttribute("class", "d-flex justify-content-between text-white");

    let addressLabel = document.createElement("label");
    addressLabel.innerText = "Address"
    addressDiv.appendChild(addressLabel);
    addressDiv.appendChild(colon3);

    let addressInput = document.createElement("p");
    addressInput.innerHTML = `<textarea id="address" style="" cols="26" rows="3" class="form-control" placeholder="Enter Your Address"></textarea>`;

    addressDiv.appendChild(addressInput);

    let buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "btn-group");
    buttonDiv.setAttribute("style", "gap: 10px;");

    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "btn btn-warning");
    saveButton.innerHTML = "Save";

    let backButton = document.createElement("button");
    backButton.setAttribute("class", "btn btn-secondary");
    backButton.innerHTML = "Back";

    backButton.addEventListener("click", () => {
        mainDiv.setAttribute("style", "background-image: none;");
        viewCartPage();
    });

    form.appendChild(nameDiv);
    form.appendChild(emailDiv);
    form.appendChild(contactDiv);
    form.appendChild(addressDiv);
    form.appendChild(buttonDiv);

    buttonDiv.appendChild(backButton);
    buttonDiv.appendChild(saveButton);

    container.appendChild(form);

    mainDiv.appendChild(container);
}

function getqty(productId) {
    let cartLIst = JSON.parse(localStorage.getItem("Cart List"));
    let currentUser = sessionStorage.getItem("Current user");

    let user = cartLIst.find((user) => {
        return user.email == currentUser;
    });

    let product = user.cartItems.find((product) => {
        return product.id == productId;
    });

    return product.qty;
}

function qtyChange(productId, index) {
    var qty = document.querySelector("#qtyInput" + index).value;
    var currentUser = sessionStorage.getItem("Current user");
    var cartList = JSON.parse(localStorage.getItem("Cart List"));

    var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
    var cartItems = currentUserCartList.cartItems;

    var productIndex = cartItems.findIndex((obj) => { return obj.id == productId });
    var product = cartItems[productIndex];
    product.qty = qty;

    cartItems.splice(productIndex, 1, product);
    currentUserCartList.cartItems = cartItems;

    let userIndex = cartList.findIndex((user) => {
        return user.email == currentUser;
    });

    cartList.splice(userIndex, 1, currentUserCartList);

    localStorage.setItem("Cart List", JSON.stringify(cartList));

    let total = document.querySelector("#total" + index);
    total.innerHTML = "" + ((product.price * 1) * qty);

    let totalAmount = document.querySelector("#TotalAmount");
    totalAmount.innerHTML = "<b>Total Bill Amount : </b>" + getTotalAmount();
}

function getTotalAmount() {
    let cartList = JSON.parse(localStorage.getItem("Cart List"));
    let currentUser = sessionStorage.getItem("Current user");

    let user = cartList.find((user) => {
        return user.email == currentUser;
    });

    let totalPrice = 0;
    for (let item of user.cartItems) {
        totalPrice += ((item.price * 1) * (item.qty * 1));
    }

    return totalPrice;
}

function SignOut(MenuDiv) {
    sessionStorage.clear();
    MenuDiv.innerHTML = "";

    beforeSignIn(MenuDiv);
}

function beforeSignIn(signDiv) {
    var signIn = document.createElement("span");
    signIn.innerHTML = "Sign In";
    signIn.setAttribute("role", "button");

    signIn.addEventListener("click", () => {
        signInComponent();
    });

    var signUp = document.createElement("span");
    signUp.innerHTML = "Sign Up";
    signUp.setAttribute("role", "button");

    signUp.addEventListener("click", () => {
        signUpComponent();
    });

    signDiv.appendChild(signUp);
    signDiv.appendChild(signIn);
}

function signInComponent() {
    var mainDiv = document.querySelector('#mainDiv');
    mainDiv.innerHTML = "";

    var form = document.createElement("form");
    form.setAttribute(`style`, `width: 35rem; height: 20rem; position: absolute; top: 50%;
    left: 50%; transform: translate(-50%, -50%); padding: 20px; background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; border-radius: 50px;`);
    form.setAttribute("class", "form form-group d-flex flex-column align-items-center justify-content-around rounded-circle p-5");

    var signin = document.createElement("h3");
    signin.innerHTML = "<u>Sign In</u>";

    var email = document.createElement("input");
    email.setAttribute("class", "form-control");
    email.setAttribute("placeholder", "Enter Email Address");
    email.setAttribute("type", "email");
    email.setAttribute("id", "email");

    var password = document.createElement("input");
    password.setAttribute("class", "form-control");
    password.setAttribute("placeholder", "Enter Password");
    password.setAttribute("type", "password");
    password.setAttribute("id", "password");

    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-secondary");
    button.innerHTML = "Sign In";

    button.addEventListener("click", () => {
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;

        signIn(email, password);
    });

    var alreadySignIn = document.createElement("span");
    alreadySignIn.setAttribute("class", "text-danger");
    alreadySignIn.setAttribute("role", "button");
    alreadySignIn.innerHTML = "Create a new account ?";
    alreadySignIn.addEventListener("click", () => {
        signUpComponent();
    });

    form.appendChild(signin);
    form.appendChild(email);
    form.appendChild(password);
    form.appendChild(button);
    form.appendChild(alreadySignIn);

    mainDiv.appendChild(form);
}

function signIn(email, password) {
    var userList = JSON.parse(localStorage.getItem("userList"));

    var user = userList.find((user) => {
        return (user.email == email) && (user.password == password);
    });

    if (user) {
        alert("Logged in Successfully....");

        sessionStorage.setItem("IsLoggedIn", "true");
        sessionStorage.setItem("Current user", user.email);

        document.querySelector("#mainDiv").innerHTML = "";

        createHeader();
        createCart(JSON.parse(localStorage.getItem("ProductList")));
    } else {
        window.alert("Username or Password is wrong....");
    }
}

function signUpComponent() {
    var mainDiv = document.querySelector('#mainDiv');
    mainDiv.innerHTML = "";

    var form = document.createElement("form");
    form.setAttribute("style", `width: 35rem; height: 20rem; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 40px; background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;`);

    form.setAttribute("class", "form form-group d-flex flex-column align-items-center justify-content-around rounded-circle");

    var signin = document.createElement("h3");
    signin.innerHTML = "<u>Sign Up</u>";

    var email = document.createElement("input");
    email.setAttribute("class", "form-control");
    email.setAttribute("placeholder", "Enter Email Address");
    email.setAttribute("type", "email");
    email.setAttribute("id", "email");

    var password = document.createElement("input");
    password.setAttribute("class", "form-control");
    password.setAttribute("placeholder", "Enter Password");
    password.setAttribute("type", "password");
    password.setAttribute("id", "password");

    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-secondary");
    button.innerHTML = "Sign Up";

    button.addEventListener("click", () => {
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;

        if (isUserExist(email)) {
            alert("Already registered.....");
        } else {
            var user = { email: email, password: password };
            var userList = JSON.parse(localStorage.getItem("userList"));

            userList.push(user);
            localStorage.setItem("userList", JSON.stringify(userList));
            alert("Registered successfully....");

            signInComponent();
        }
    });

    var alreadySignIn = document.createElement("span");
    alreadySignIn.setAttribute("class", "text-danger");
    alreadySignIn.setAttribute("role", "button");
    alreadySignIn.innerHTML = "Already have an account ?";
    alreadySignIn.addEventListener("click", () => {
        signInComponent();
    });

    form.appendChild(signin);
    form.appendChild(email);
    form.appendChild(password);
    form.appendChild(button);
    form.appendChild(alreadySignIn);

    mainDiv.appendChild(form);
}

function isUserExist(email) {
    var userList = JSON.parse(localStorage.getItem("userList"));
    var user = userList.find((user) => { return user.email == email });

    console.log(user);
    return !!user;
}

function createCart(data) {
    var mainDiv = document.querySelector("#mainDiv");
    var buttonId = 1;

    var productDiv = document.createElement("div");
    productDiv.setAttribute("class", "container-fluid d-flex flex-wrap justify-content-around p-2");
    productDiv.setAttribute("style", "border: 1px solid;");
    productDiv.setAttribute("id", "cartContainer");

    for (let product of data) {
        var productCard = document.createElement("div");
        productCard.setAttribute("style", "width: 30%; height: 500px; box-shadow: 15px 15px 13px black");
        productCard.setAttribute("class", "mt-5 d-flex align-items-center justify-content-between flex-column");

        var img = document.createElement("img");
        img.setAttribute("src", product.thumbnail);
        img.setAttribute("style", "width: 100%; height: 60%;")

        var title = document.createElement("h4");
        title.innerHTML = product.title;

        var cartButton = document.createElement("button");
        cartButton.setAttribute("style", "border: none; width: 90%; height: 40px; background-color: #ffc107; border-radius: 5px;");
        cartButton.setAttribute("class", "mb-4");
        cartButton.innerHTML = "Add To Cart";

        cartButton.addEventListener("click", () => {
            if (iSLoggedIn()) {
                saveProductToCart(product);
            } else {
                alert("Sign In first...");
            }
        });

        var priceElement = document.createElement("h3");
        priceElement.setAttribute("style", "color: green; flex-direction: row-reverse;");
        priceElement.setAttribute("class", "d-flex justify-content-between");

        var originalPrice = document.createElement("h3");
        originalPrice.innerHTML = product.price;
        originalPrice.setAttribute("style", "margin-right: 15px; color: red; text-decoration: line-through;");

        var disPrice = product.price - (product.price * (product.discountPercentage / 100));
        priceElement.innerHTML = "Rs." + disPrice.toFixed(2);

        var viewMore = document.createElement("h5");
        viewMore.innerHTML = "View More";
        viewMore.setAttribute("role", "button");

        viewMore.addEventListener("click", () => {
            productDetail(product);
        });

        productDiv.appendChild(productCard);
        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(priceElement);
        priceElement.appendChild(originalPrice);
        productCard.appendChild(viewMore);
        productCard.appendChild(cartButton);

        buttonId++;
    }

    mainDiv.appendChild(productDiv);
}

function productDetail(product) {
    let mainDiv = document.querySelector("#mainDiv");
    mainDiv.innerHTML = "";

    let container = document.createElement("section");
    container.setAttribute("class", "container mt-5");

    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row justify-content-center align-item-center");

    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "col-sm-12 col-md-6 d-flex justify-content-center flex-column align-items-center");
    imageDiv.setAttribute("style", "height: 30rem;");

    let detailDiv = document.createElement("div");
    detailDiv.setAttribute("class", "d-flex flex-column jutify-content-between col-sm-12 col-md-6 bg-secondary text-white bg-gradient");
    detailDiv.setAttribute("style", "height: 30rem; padding: 20px; box-sizing: border-box; position: relative;");

    let currentImage = document.createElement("img");
    currentImage.setAttribute("style", "height: 18rem; width: 25rem; box-shadow: 10px 10px 10px black;");
    currentImage.setAttribute("src", product.thumbnail);

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    imageDiv.appendChild(currentImage);
    imageDiv.appendChild(br2);
    imageDiv.appendChild(br1);

    let lowerDiv = document.createElement("div");
    imageDiv.appendChild(lowerDiv);

    for (let productImg of product.images) {

        let img = document.createElement("img");
        img.setAttribute("src", productImg);
        img.setAttribute("class", "m-2");
        img.setAttribute("style", "height: 5rem; width: 5rem;");

        img.addEventListener("click", () => {
            let temp = currentImage.src;
            currentImage.src = img.src;
            img.src = temp;
        });
        lowerDiv.appendChild(img);
    }

    let title = document.createElement("h3");
    title.innerHTML = product.title;

    let description = document.createElement("p");
    description.innerHTML = "<b> Description : </b> <br>" + product.description;

    let rating = document.createElement("h5");
    rating.innerHTML = "Rating : " + product.rating;

    let price = document.createElement("h4");
    price.innerHTML = "M.R.P. : " + product.price;

    let stock = document.createElement("p");
    stock.innerHTML = "<b>In Stock</b> : " + product.stock;

    let brand = document.createElement("p");
    brand.innerHTML = "<b> Brand <b/>: " + product.brand;

    let category = document.createElement("p");
    category.innerHTML = "<b> Category <b/>: " + product.category;

    var cartButton = document.createElement("button");
    cartButton.setAttribute("style", "border: none; width: 90%; height: 40px; background-color: #ffc107; border-radius: 5px; bottom: 20px; position: absolute;");
    cartButton.innerHTML = "Add To Cart";

    cartButton.addEventListener("click", () => {
        if (iSLoggedIn()) {
            saveProductToCart(product);
        } else {
            alert("Sign In first...");
        }
    });

    let backToHome = document.createElement("button");
    backToHome.setAttribute("class", "btn btn-secondary");
    backToHome.setAttribute("style", "margin-left: 50%; transform: translate(-50%, 10px);");
    backToHome.innerText = "Back to Home";

    backToHome.addEventListener("click", () => {
        mainDiv.innerHTML = "";

        createHeader();
        createCart(JSON.parse(localStorage.getItem("ProductList")));
    });

    detailDiv.appendChild(title);
    detailDiv.appendChild(description);
    detailDiv.appendChild(rating);
    detailDiv.appendChild(price);
    detailDiv.appendChild(stock);
    detailDiv.appendChild(brand);
    detailDiv.appendChild(category);
    detailDiv.appendChild(cartButton);

    rowDiv.appendChild(imageDiv);
    rowDiv.appendChild(detailDiv);

    container.appendChild(rowDiv);
    container.appendChild(backToHome);

    mainDiv.appendChild(container);
}

function saveProductToCart(product) {
    let CurrentUser = sessionStorage.getItem("Current user");
    let cartList = JSON.parse(localStorage.getItem("Cart List"));

    let currentUserInCart = cartList.find((user) => {
        return user.email == CurrentUser;
    });

    if (currentUserInCart) {
        let userCartItems = currentUserInCart.cartItems;

        let productObj = userCartItems.find((obj) => { return obj.id == product.id; });

        if (productObj) {
            alert("This product is already added");
        } else {
            let index = cartList.findIndex((obj) => { return obj.email == CurrentUser });
            cartList.splice(index, 1);

            product.qty = 1;
            userCartItems.push(product);
            cartList.push(currentUserInCart);

            let shoppingIcon = document.querySelector("#shoppingIcon");
            shoppingIcon.innerHTML = "&nbsp;&nbsp;" + userCartItems.length;

            localStorage.setItem("Cart List", JSON.stringify(cartList));

            alert("Product added successfully....");
        }
    } else {
        let obj = { email: CurrentUser, cartItems: [] };
        product.qty = 1;

        obj.cartItems.push(product);
        cartList.push(obj);

        localStorage.setItem("Cart List", JSON.stringify(cartList));

        alert("Product added successfully....");
    }
}

function iSLoggedIn() {
    return !!sessionStorage.getItem("IsLoggedIn");
}