import './App.css'
import { ProductCard } from './components/productCard'

function App() {
  

  return (
    <>
      
      <h1 className='text-red-700'>Nethara Vidmantha</h1>

      <ProductCard name="Apple iPad" price="$499" image="https://www.apple.com/assets-www/en_WW/ipad/product_tile/xlarge/ipad_pro_1df5448cd_2x.png"/>
      <ProductCard name="Macbook Air" price="$899" image="https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_2fb165671.png"/>
      
      
    </>
  )
}

export default App
