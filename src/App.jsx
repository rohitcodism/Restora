import { Home } from "./Pages/Home"
import { Order } from "./Pages/Order"
import { Cart } from "./Pages/Cart"
import { Showcase } from "./Pages/Showcase"
import { Menu } from "./Pages/Menu"
import { Route, Routes } from "react-router-dom"

function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/showcase/:id" element={<Showcase />} />
      </Routes>
    </>
  )
}

export default App
