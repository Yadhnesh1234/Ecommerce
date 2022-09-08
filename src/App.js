//files
import {Switch,Route,Link} from 'react-router-dom'
import './app.css'
import { useState } from 'react'
import BottomNav from './components/BottomNav'
import {ErrorBoundary} from 'react-error-boundary'
//Components
import Navbar from './components/Navbar'
//Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import WishList from './pages/WishList'
import AddForm from './pages/AddForm'
import ItemDetail from './pages/ItemDetail'
//context
import { ProdContextProvider } from './context/CartProd'
import {WishContextProvider} from './context/WishProd'

function ErrorHandler({error}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

function App() {
  const [login,setLogin]=useState(false)
  const [profile,setProfile]=useState("")
  const [lenOfItem,setLenOfItem]=useState(0)
  function setLoginStatus(status,profName){
    setLogin(status)
    setProfile(profName)
  }
  function lenOfItemArr(len){
    setLenOfItem(len)
  }
return(
  <>
<ErrorBoundary FallbackComponent={ErrorHandler}>
<ProdContextProvider>
<WishContextProvider>
<Navbar loginStatus={login} profile={profile} />
<Switch>
<Route path="/" exact>
<Home/>
</Route>
<Route path="/login" exact>
  <Login setLoginStatus={setLoginStatus}/>
</Route>
<Route path="/shop" exact>
  <Shop lenOfItemArr={lenOfItemArr}/>
</Route>
<Route path="/cart" exact>
  <Cart />
</Route>
<Route path="/form" exact>
  <AddForm/>
</Route>
<Route path="/wishlist" exact>
  <WishList />
</Route>
<Route path="/detail/:id" exact>
  <ItemDetail/>
</Route>
<Route path="*" exact>
  <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <img src="images/notFound.gif" alt="..."/>
    <Link to="/">Get Back to Home</Link>
  </div>
</Route>
</Switch>
{
login===true?
<BottomNav lenOfItem={lenOfItem}/>:""
}
</WishContextProvider>
</ProdContextProvider>
</ErrorBoundary>
  </>
)
}


export default App;
