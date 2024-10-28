class Cart {
    constructor(){
       this.products = []
       this.total = 0
   }
   
   addProduct(product){
       this.products.push(product)
       this.total += product.price
   }

   removeProduct(index){
       let price = this.products[index].price
       this.products.splice(index,  1)
       this.total -= price
   }
}

module.exports = {
   Cart
}