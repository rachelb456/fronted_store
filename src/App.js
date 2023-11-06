
import './App.css';
import './bootstrap.css'
import './w3/w3.css'
import './w3/w3pro.css'
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store'
import { Home } from './components/home';
import { Routing } from './components/routing';
import { AddApdateProduct } from './components/addApdateProduct';


function App() {

  return (
    <div>

      <Provider store={store}>
        <BrowserRouter>
          <Routing></Routing>
        </BrowserRouter>
       
      </Provider>
 {/* <AddApdateProduct></AddApdateProduct> */}
    </div>
  );
}

export default App;
