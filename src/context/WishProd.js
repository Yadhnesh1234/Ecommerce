import React, {createContext,useState} from "react";
const WishContext = createContext();
const WishContextProvider = ({ children }) => {
const [wish,setWish]=useState([])
function setWishData(item){
setWish((prev)=>{
return[
    ...prev,
    item
]
})
}
  return (
    <WishContext.Provider value={{wish,setWishData}}>
      {children}
    </WishContext.Provider>
  );
};

export { WishContext, WishContextProvider };