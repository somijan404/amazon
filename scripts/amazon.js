const products = [{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
 rating:{
  stars: 4.5,
  count: 87
 },
 priceCents: 1099
 }, {
  image:'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Composite Basketball',
  rating:{
    stars: 4,
    count: 127
   },
   priceCents: 2095
}, {
  image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton Tshirt - 2 Pack - Teal',
  rating:{
    stars: 4.5,
    count: 56
   },
   priceCents: 799
}
];
let productsHTML = '';

products.forEach(product => {
 productsHTML += `
 <div class="product">
  <img src="${product.image}" alt="${product.name}">
  <h2 class="product-title">${product.name}</h2>
  <div class="product-rating">
   <div class="product-rating-stars" ${product.rating.stars * 10}%;"></div>
   <span class="product-rating-count">${product.rating.count} reviews</span>
  </div>
  <span class="product-price">${product.priceCents / 100}</span>
 </div>
 `;

});
console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;

