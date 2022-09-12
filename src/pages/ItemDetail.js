import {useContext}  from 'react';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Load from '../components/Load';
import Button from '@mui/material/Button';
import {ItemContext} from '../context/ItemsProd'
export default function SimplePaper() {
const arrOfProd=useContext(ItemContext)
// const [product,setProduct]=useState(arrOfProd.items)
const obj=useParams()
// useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     .then(response=>response.json())
//     .then(res=>{
//         setProduct(res[obj.id])
//         console.log(product)
//     })
// },[setProduct])
if(arrOfProd.items===null){
    return(
        <>
        <Load/>
        </>
    )
}else{
  return (
<div style={{margin:"200px",padding:"35px",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Paper elevation={3} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
    <img src={arrOfProd.items[obj.id].image} width="663" height="879" alt="..."/>
      <h1><b>Title:</b>{" "+arrOfProd.items[obj.id].title}</h1>
      <h3><b>Price:</b>{" "+arrOfProd.items[obj.id].price+" Rs"}</h3>
      <p><b>Description:</b>{" "+arrOfProd.items[obj.id].description}</p>
      <Rating name="read-only" value={arrOfProd.items[obj.id].rating.rate} readOnly /> 
      <p><b>In stock:</b>{" "+arrOfProd.items[obj.id].rating.count} </p>
      <p><b>category:</b>{" "+arrOfProd.items[obj.id].category}</p>
      <Button variant="contained" onClick={()=>{alert("Order Is Placed !!! You will recieved order within a 15 days!!! Thank You :)")}}>Order</Button>
      </Paper>
</div>
  );
}
}
// category: "jewelery"
// description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection."
// id: 5
// image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
// price: 695
// rating: {rate: 4.6, count: 400}
// title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"