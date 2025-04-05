
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


if (!localStorage.getItem("count")) {
    localStorage.setItem("count", JSON.stringify({ likecount: 0 }));
}


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

   
    updateLikeCountDisplay();
}


function like_count(element) {
    let countData = JSON.parse(localStorage.getItem("count"));
    countData.likecount += 1;

    localStorage.setItem("count", JSON.stringify(countData));

    element.querySelector(".like-count").textContent = countData.likecount;
}


function updateLikeCountDisplay() {
    let countData = JSON.parse(localStorage.getItem("count"));
    document.querySelectorAll(".like-count").forEach(el => {
        el.textContent = countData.likecount;
    });
}


function loadProducts_Nature() { loadProducts("Nature"); }
function loadProducts_Portrait() { loadProducts("Portrait"); }
function loadProducts_College() { loadProducts("College"); }
function loadProducts_Beach() { loadProducts("Beach"); }

function shuffleElements(containerSelector) {
    let container = document.querySelector(containerSelector);
    let elements = Array.from(container.children);

    elements.sort(() => Math.random() - 0.5);

    elements.forEach(el => container.appendChild(el));
}


loadProducts();


