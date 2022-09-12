import React, {createContext,useState,useEffect} from "react";
const ItemContext = createContext();
const ItemContextProvider = ({ children }) => {
const [items,setItems]=useState(null)
// var items=[]())
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(response=>response.json())
  .then(res=>{
    setItems(res)
    // items.push(...res)
  })
},[])
function setItemsData(data){
console.log(data)
setItems((prev)=>{
return[
   ...prev,
    data
]
})
// items.push(data)
console.log(items)
}
function deleteItemInProd(id){
setItems((prev)=>{
return(
prev.filter((val,index)=>{
 return id!==index
})
)
})
}
  return (
    <ItemContext.Provider value={{items,setItemsData,deleteItemInProd}}>
      {children}
    </ItemContext.Provider>
  );
};

export {ItemContext,ItemContextProvider };