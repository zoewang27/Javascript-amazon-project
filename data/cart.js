export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
},


];

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