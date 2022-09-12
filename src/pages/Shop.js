import { useContext } from 'react'
import CardDisplay from '../components/CardDisplay'
import Load from '../components/Load'
import {ItemContext} from '../context/ItemsProd'
const Shop=(props)=>{
const obj=useContext(ItemContext)
// const [products,setProducts]=useState(null)
// useEffect(()=>{
//    setProducts(obj.items)
// })
    return(
        <>
<div style={{margin:"150px 14px 50px",marginTop:"165px",width:"98vw",height:"100vh",display:"flex",flexWrap:"wrap"}}>
{
obj.items===null? <><Load /></>:
obj.items.map((val,index)=>{
        // props.lenOfItemArr(obj.items.length)
        return(
            <>
            <CardDisplay 
            product={val}
            key={index}
            index={index}
            option="shop"
            />
            </>
        )
    })
}
</div>

        </>
    )
}
export default Shop