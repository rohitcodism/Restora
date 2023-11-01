import { Home } from "./Pages/Home"
import { Order } from "./Pages/Order"
import { Cart } from "./Pages/Cart"
import { Showcase } from "./Pages/Showcase"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
