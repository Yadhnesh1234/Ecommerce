import { useState,useContext } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ItemContext} from '../context/ItemsProd'
export default function AddForm(props) {
  const [enteredImage, setEnteredImage] = useState("");
  const obj=useContext(ItemContext)
  const [form, setForm] = useState({
    title: "",
    desc: "",
    size: "",
    price: "",
    cat:"",
    count:""
  })
const handleSubmit=(e)=>{
  e.preventDefault()
  obj.setItemsData(
    {
     title: form.title,
     price: form.price,
     description: form.desc,
     image: enteredImage,
     category:form.cat,
     rating:{rate:0,count:form.count}
    }
  )
  alert("New Item is Added !!! ")
}
const handleChange = (event) => {
  if (event.target.name === "img") {
    var fread = new FileReader();
    fread.readAsDataURL(event.target.files[0]);
    fread.onloadend = function (event) {
      setEnteredImage(event.target.result);
    };
    setEnteredImage(event.target.files[0]);   
  }
  else
  {
    setForm((prev)=>{
      return {
      ...prev,
      [event.target.name] : event.target.value
      }
      })
  }    
};
  return (
    <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <Box
      sx={{
        width: 496,
        height: 599,
        backgroundColor: 'white',
        boxShadow:"2px 2px 10px black",
        display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",overflow:"auto"
      }}
    >
<form onSubmit={handleSubmit} style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"400px"}}>
<h1><b style={{textDecoration:"underline"}}>Add Custom Item</b></h1>
<div>
<Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'none',
        border:"2px solid blue",
        marginLeft:"20px",
        borderRadius:"4px",
      }}
    ><img src={enteredImage} alt="" width="295" height="295" style={{borderRadius:"4px"}}/></Box>
    <TextField
  id="outlined-name"
//   value={name}
  onChange={handleChange}
  type="file"
  name="img"
/>
</div>
<div style={{marginTop:"8px"}}>
<TextField
  id="outlined-name"
  label="Title"
  value={form.title}
  name="title"
  onChange={handleChange}
/>
</div>
<div style={{marginTop:"8px"}}>
<TextField
     id="outlined-multiline-static"
     label="Description"
     multiline
     rows={4}
     value={form.desc}
     name="desc"
     onChange={handleChange}
/>
</div>
<div style={{marginTop:"8px"}}>
<TextField
  id="outlined-name"
  label="Size"
  value={form.size}
  name="size"
  onChange={handleChange}

/>
</div>
<div style={{marginTop:"8px"}}>
<TextField
  id="outlined-name"
  label="Price"
  onChange={handleChange}
  value={form.price}
  name="price"
/>
</div>
<div style={{marginTop:"8px"}}>
<TextField
  id="outlined-name"
  label="Category"
  onChange={handleChange}
  value={form.cat}
  name="cat"
/>
</div>
<div style={{marginTop:"8px"}}>
<TextField
  id="outlined-name"
  label="Count"
  onChange={handleChange}
  value={form.count}
  name="count"
/>
</div>
<div style={{marginTop:"8px"}}>
<Button type="submit" variant="contained">Add</Button>
</div>
    </form>
    </Box>
    </div>
  );
}