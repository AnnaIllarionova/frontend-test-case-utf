import { Provider} from 'react-redux'

import './App.css'
import { ProductList } from './components/product-list/product-list'
import { Cart } from './components/card/card'
import { Header } from './components/header/header'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="main-content">
          <ProductList />
          <Cart />
        </div>
      </div>
    </Provider>
  )
}

export default App
