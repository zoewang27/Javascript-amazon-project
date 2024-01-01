export const cart = [];

export function addToCart(productId){
  let matchingItem; 

  cart.forEach((CartItem)=>{ //循环对比cart里面的productId
   if (productId === CartItem.productId) { 
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
}