let productsHTML = '';


products.forEach((product) => {
  productsHTML += `
  <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents * 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected="" value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart
          " data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
  `;
})

document.querySelector('.products-grid')
.innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart') //对所有的button进行操作
.forEach((button) => {
  button.addEventListener('click',()=>{ //加监听
   const productId = button.dataset.productId; //获取ID；可以通过属性data-product-id的product-id获取到productID

   let matchingItem; 

   cart.forEach((item)=>{ //循环对比cart里面的productId
    if (productId === item.productId) { 
      matchingItem = item; //找到后赋值给matchingItem
    }
   })

   if (matchingItem){ //如果matchingItem不为空，即在cart中存在
    matchingItem.quantity += 1; //则数量+1
   } else{ //否则，则将该产品加入到cart中
    cart.push({
      productId: productId,
      quantity: 1
      })
   }
    console.log(cart)
  })
})