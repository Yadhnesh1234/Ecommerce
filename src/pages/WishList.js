import { useContext} from "react"
import {WishContext} from "../context/WishProd"
import CardDisplay from "../components/CardDisplay"
const WishList=()=>{
    const obj=useContext(WishContext)
    return(
        <>
<div style={{margin:"50px",marginTop:"165px",width:"98vw",height:"100vh",display:"flex",flexWrap:"wrap"}}>
{
    obj.wish.map((val,index)=>{   
    return(
        <>
        <CardDisplay 
        product={val}
        key={index}
        index={index}
        option="wish"
        />
        </>
    )
    })
}
</div>
        </>
    )
}
export default WishList