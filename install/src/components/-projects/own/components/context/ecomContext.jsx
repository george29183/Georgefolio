import { createContext, useState } from "react";
import all_Products from "../ecommerce/components/assets/allProduct";
export const Ecomcontext = createContext(null)

const EcomContextProvider = (props)=>{
    const [cartItem,setCartItem] = useState(0)
    const [cart,addCart] = useState([])
    const [wishlists,setWishlist] = useState([])
    const [quan,setQuan] = useState(null)
    const [showPopup, setShowPopup] = useState(false);
    const [aside,setAside] = useState(false)

    const showPopups = () => {
      setShowPopup(true);
  
      // Hide the popup after a delay
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    };

    const quantity = (item)=>{
        item.quantity += 1
    }
    const deleteItem = (item)=>{
      setQuan(item.quantity-=1)
      setCartItem(cartItem-1)
     return quan
  }
  const completeDelete = (item)=>{
    setCartItem(cartItem-item.quantity)
    setQuan(item.quantity=0)
    
   return quan
  }
  const addItem = (item)=>{
    setQuan(item.quantity+=1)
    setCartItem(cartItem+1)
   return quan
}
    const total = (item)=>{
      return Math.round(item.price-item.price*(item.discountPercentage/100))*item.quantity
    }
    
      const allTotal = ()=>{
        let totaly = 0
        cart.map(item=>{
          
            return totaly += Math.round(item.price-item.price*(item.discountPercentage/100))*item.quantity
        })
        if(totaly>0){
          return totaly
        }else{
          return 0
        }
      }
      
      const shippingFee = ()=>{
        let first = allTotal()
        const fee = 5.6
        let theFee = Math.floor((fee/100)*first)
        if(theFee>120){
          return 120
        }else{
          return theFee
        }
         
       

      }
     
     const addToWishlist = (item)=>{
         setWishlist([...wishlists,item])
     }
     const removeFromWishlist = (item) => {
      setWishlist((prevWishlists) => prevWishlists.filter((wishlistItem) => wishlistItem !== item));
    };
    


    const contextValue = {cartItem,all_Products,setCartItem,addCart,cart,quantity,total,allTotal,deleteItem,shippingFee,addItem,showPopup,showPopups,completeDelete,aside,setAside,addToWishlist,wishlists,removeFromWishlist}
    return(
        <Ecomcontext.Provider value={contextValue}>
            {props.children}
        </Ecomcontext.Provider>
    )
}

export default EcomContextProvider