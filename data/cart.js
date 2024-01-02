 /* model */

export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
   cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    },{
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    },
    ];
}

//数据保存本地，localStorage只能保存string，所以先用JSON.stringify转为string
//无论什么时候更新cart，都要保存到localStorage
//使用localStorage我们能保存数据，就算refresh page ，或者去不同的pages
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}



export function addToCart(productId){
  //1, loop through the cart and find the product
  let matchingItem; 
  cart.forEach((cartItem)=>{ //循环对比cart里面的productId
   if (productId === cartItem.productId) { 
     matchingItem = cartItem; //找到后赋值给matchingItem
   }
  })

  if (matchingItem){ //如果matchingItem不为空，即在cart中存在
   matchingItem.quantity += 1; //则数量+1
  } else{ //否则，则将该产品加入到cart中
   cart.push({
     productId: productId,
     quantity: 1,
     deliveryOptionaId: '1' //默认选第一个；
     })
  }
  saveToStorage()
}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  })

  cart = newCart
  saveToStorage()
}

//点击选项时，更新所选的选项
export function updateDeliveryOption(productId, deliveryOptionId){
  //1, loop through the cart and find the product
  let matchingItem; 
  cart.forEach((cartItem)=>{ 
   if (productId === cartItem.productId) { 
     matchingItem = cartItem; 
   }
  })

  //2,update the deliveryOptionId of the product
  matchingItem.deliveryOptionId = deliveryOptionId;

  //3，update localStoreage
  saveToStorage()
}