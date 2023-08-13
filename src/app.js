import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import store from './Store/store';
import { Provider } from 'react-redux';

function App() {
    return (
      <div className="App">
        <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
        </Provider>
      </div>
    );
  }
  export default App;