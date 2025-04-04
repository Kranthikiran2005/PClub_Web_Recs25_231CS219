/*
const products = [
    { id: 1, name: "NITK", imgSrc: "./images/1.jpeg", caption: "NITK Garden", category:"Nature"||"Portrait"||"college" },
    { id: 2, namle: "NITK", imgSrc: "./images/2.jpeg", caption: "Plants", category:"Portrait"  },
    { id: 3, name: "NITK", imgSrc: "./images/3.jpeg", caption: "Front-Gate", category:"Nature" },
    { id: 4, name: "NITK", imgSrc: "./images/4.jpeg", caption: "Plants", category:"Nature" },
    { id: 5, name: "NITK", imgSrc: "./images/7.jpeg", caption: "Main Building", category:"Portrait" },
    { id: 6, name: "NITK", imgSrc: "./images/8.jpeg", caption: "Street Light", category:"Portrait" },
    { id: 7, name: "NITK", imgSrc: "./images/16.jpeg",  caption: "Hello", category: "Beach"||"Nature" ,},
    { id: 8, name: "NITK",  imgSrc: "./images/18.jpeg",  caption: "Hello", category: "Beach"||"portrait"},
    { id: 9, name: "NITK",  imgSrc: "./images/9.jpeg", caption: "Hello",  category: "college"||"Nature"},
    { id: 10, name: "NITK", imgSrc: "./images/10.jpeg", caption: "Hello", category: "college"||"Portrait" },
    { id: 11, name: "NITK",  imgSrc: "./images/11.jpeg", caption: "Hello",  category: "college"},
    { id: 12, name: "NITK",  imgSrc: "./images/12.jpeg",  caption: "Hello",  category: "college"||"portrait"}
];

let count={ likecount:0};

localStorage.setItem("count",JSON.stringify(count));

function removeProducts() {
    document.querySelectorAll(".flipcard").forEach(el => el.remove());
}

function loadProducts() {

    removeProducts();
    
    const container = document.querySelector(".grid"); // Corrected selection
    
    if (!container) {
        console.error("Container with class 'grid' not found!");
        return;
    }

    products.forEach(product => {
        
        const card = document.createElement("div");
        card.classList.add("flipcard");

        const ic = document.createElement("div");
        ic.classList.add("inner-card");

        const fc = document.createElement("div");
        fc.classList.add("front-card");

        const bc = document.createElement("div");
        bc.classList.add("back-card");

        const image = document.createElement("img");
        image.src = product.imgSrc;

        bc.innerHTML = product.caption;

        fc.appendChild(image); // Corrected variable name
        ic.appendChild(fc);
        ic.appendChild(bc);
        card.appendChild(ic);
        container.appendChild(card);
    });
}



function loadProducts_Nature() {

    removeProducts();
    
    const container = document.querySelector(".grid"); // Corrected selection
    
    if (!container) {
        console.error("Container with class 'grid' not found!");
        return;
    }

    products.forEach(product => {
        if(product.category==="Nature")
        {
        const card = document.createElement("div");
        card.classList.add("flipcard");

        
        const ic = document.createElement("div");
        ic.classList.add("inner-card");

        const fc = document.createElement("div");
        fc.classList.add("front-card");

        const bc = document.createElement("div");
        bc.classList.add("back-card");


        const image = document.createElement("img");
        image.src = product.imgSrc;

        bc.innerHTML = product.caption;
        bc.addEventListener("click", function() {
            alert("Div Clicked!");
          });

        fc.appendChild(image); // Corrected variable name
        ic.appendChild(fc);
        ic.appendChild(bc);
        card.appendChild(ic);
        container.appendChild(card);
        }
    });
}

function loadProducts_Portrait() {

    removeProducts();
    
    const container = document.querySelector(".grid");
    
    if (!container) {
        console.error("Container with class 'grid' not found!");
        return;
    }

    products.forEach(product => {
        if(product.category==="Portrait")
        {
        const card = document.createElement("div");
        card.classList.add("flipcard");

        const ic = document.createElement("div");
        ic.classList.add("inner-card");

        const fc = document.createElement("div");
        fc.classList.add("front-card");

        const bc = document.createElement("div");
        bc.classList.add("back-card");

        const image = document.createElement("img");
        image.src = product.imgSrc;

        bc.innerHTML = product.caption;

        fc.appendChild(image); 
        ic.appendChild(fc);
        ic.appendChild(bc);
        card.appendChild(ic);
        container.appendChild(card);
        }
    });
}

function loadProducts_college() {

    removeProducts();
    
    const container = document.querySelector(".grid"); 
    
    if (!container) {
        console.error("Container with class 'grid' not found!");
        return;
    }

    products.forEach(product => {
        if(product.category==="college")
        {
        const card = document.createElement("div");
        card.classList.add("flipcard");

        const ic = document.createElement("div");
        ic.classList.add("inner-card");

        const fc = document.createElement("div");
        fc.classList.add("front-card");

        const bc = document.createElement("div");
        bc.classList.add("back-card");

        const image = document.createElement("img");
        image.src = product.imgSrc;

        bc.innerHTML = product.caption;

        fc.appendChild(image); // Corrected variable name
        ic.appendChild(fc);
        ic.appendChild(bc);
        card.appendChild(ic);
        container.appendChild(card);
        }
    });
}

function loadProducts_Beach() {

    removeProducts();
    
    const container = document.querySelector(".grid"); // Corrected selection
    
    if (!container) {
        console.error("Container with class 'grid' not found!");
        return;
    }

    products.forEach(product => {
        if(product.category==="Beach")
        {
        const card = document.createElement("div");
        card.classList.add("flipcard");

        const ic = document.createElement("div");
        ic.classList.add("inner-card");

        const fc = document.createElement("div");
        fc.classList.add("front-card");

        const bc = document.createElement("div");
        bc.classList.add("back-card");

        const image = document.createElement("img");
        image.src = product.imgSrc;

        bc.innerHTML = product.caption;

        fc.appendChild(image); // Corrected variable name
        ic.appendChild(fc);
        ic.appendChild(bc);
        card.appendChild(ic);
        container.appendChild(card);
        }

    });

   
}

loadProducts();

function shuffleElements(containerSelector) {
    let container = document.querySelector(containerSelector);
    let elements = Array.from(container.children);
    
    elements.sort(() => Math.random() - 0.5);
  

    elements.forEach(el => container.appendChild(el));
  }

  function like_count()
  {
    let x=  JSON.parse(localStorage.getItem("count"));

    let k= Number(x.likecount);

    k= k+1;
    
    console.log(k);

    let count={ likecount:k};

    localStorage.setItem("count",JSON.stringify(count));

  }
*/

const products = [
    { id: 1, name: "NITK", imgSrc: "1.jpeg", caption: "NITK Garden", category: "Nature" },
    { id: 2, name: "NITK", imgSrc: "./images/2.jpeg", caption: "Plants", category: "Portrait" },
    { id: 3, name: "NITK", imgSrc: "./images/3.jpeg", caption: "Front-Gate", category: "Nature" },
    { id: 4, name: "NITK", imgSrc: "./images/4.jpeg", caption: "Plants", category: "Nature" },
    { id: 5, name: "NITK", imgSrc: "./images/7.jpeg", caption: "Main Building", category: "Portrait" },
    { id: 6, name: "NITK", imgSrc: "./images/8.jpeg", caption: "Street Light", category: "Portrait" },
    { id: 7, name: "NITK", imgSrc: "./images/16.jpeg", caption: "Hello", category: "Beach" },
    { id: 8, name: "NITK", imgSrc: "./images/18.jpeg", caption: "Hello", category: "Beach" },
    { id: 9, name: "NITK", imgSrc: "./images/9.jpeg", caption: "Hello", category: "College" },
    { id: 10, name: "NITK", imgSrc: "./images/10.jpeg", caption: "Hello", category: "College" },
    { id: 11, name: "NITK", imgSrc: "./images/11.jpeg", caption: "Hello", category: "College" },
    { id: 12, name: "NITK", imgSrc: "./images/12.jpeg", caption: "Hello", category: "College" }
];

// Initialize like count in localStorage if not set
if (!localStorage.getItem("count")) {
    localStorage.setItem("count", JSON.stringify({ likecount: 0 }));
}

// Function to remove all products before loading new ones
function removeProducts() {
    document.querySelectorAll(".flipcard").forEach(el => el.remove());
}

// Function to load all products
function loadProducts(filterCategory = null) {
    removeProducts();

    const container = document.querySelector(".grid");
    if (!container) {
        console.error("Container with class 'grid' not found!");
        return;
    }

    products.forEach(product => {
        // If a filter is applied, only show matching category
        if (filterCategory && product.category !== filterCategory) return;

        const card = document.createElement("div");
        card.classList.add("flipcard");

        const ic = document.createElement("div");
        ic.classList.add("inner-card");

        const fc = document.createElement("div");
        fc.classList.add("front-card");

        const bc = document.createElement("div");
        bc.classList.add("back-card");

        const image = document.createElement("img");
        image.src = product.imgSrc;

        bc.innerHTML = `${product.caption} <br> like: <span class="like-count">0</span>`; // Add like icon & count

        // Add click event for likes
        bc.addEventListener("click", function () {
            like_count(this);
        });

        fc.appendChild(image);
        ic.appendChild(fc);
        ic.appendChild(bc);
        card.appendChild(ic);
        container.appendChild(card);
    });

    // Update displayed like count
    updateLikeCountDisplay();
}

// Function to update like count
function like_count(element) {
    let countData = JSON.parse(localStorage.getItem("count"));
    countData.likecount += 1;

    localStorage.setItem("count", JSON.stringify(countData));

    // Update count visually on the clicked card
    element.querySelector(".like-count").textContent = countData.likecount;
}

// Function to update all like count displays when loading products
function updateLikeCountDisplay() {
    let countData = JSON.parse(localStorage.getItem("count"));
    document.querySelectorAll(".like-count").forEach(el => {
        el.textContent = countData.likecount;
    });
}

// Functions to load category-specific products
function loadProducts_Nature() { loadProducts("Nature"); }
function loadProducts_Portrait() { loadProducts("Portrait"); }
function loadProducts_College() { loadProducts("College"); }
function loadProducts_Beach() { loadProducts("Beach"); }

// Function to shuffle elements
function shuffleElements(containerSelector) {
    let container = document.querySelector(containerSelector);
    let elements = Array.from(container.children);

    elements.sort(() => Math.random() - 0.5);

    elements.forEach(el => container.appendChild(el));
}

// Load all products initially
loadProducts();


