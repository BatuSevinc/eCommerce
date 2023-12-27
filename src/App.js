import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Home, CategoryProduct, ProductSingle, Cart, Search} from './pages'
import {Header,Sidebar,Footer} from './components'
import store from './store/store'
import { Provider } from 'react-redux'
import './App.scss'
const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Sidebar/>
        <Routes>
          {/* home page route */}
          <Route path='/' element={<Home/>} />
          {/* single product route */}
          <Route path='/product/:id' element={<ProductSingle/>} />
          {/* categories wise product listing route */}
          <Route path='/category/:category' element={<CategoryProduct/>} />
          {/* cart */}
          <Route path='/cart' element={<Cart/>}/>
          {/* searched products */}
          <Route path='/search/:searchTerm' element={<Search/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App