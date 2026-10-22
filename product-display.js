const container = document.getElementById("product-container");

if (container && typeof products !== "undefined") {
  const category = "Tiny Garden";

  const filteredProducts = products.filter(product =>
    product.categories.includes(category)
  );

  container.innerHTML = filteredProducts.map(product => `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p>Code: ${product.code}</p>
        ${product.size ? `<p>Size: ${product.size}</p>` : ""}
      </div>
    </div>
  `).join("");
}
