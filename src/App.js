import './App.css';
import NavBar from './component/navBar';
import Main from './component/mainComponent';
import Cart from './component/cartComponent';
import Contact from './component/contactComponent';
import Footer from './component/footerComponent';




function App() {
  return (
    <div className="App">
  <NavBar></NavBar>  
  <Main></Main>
  <Cart></Cart>
  <Contact></Contact>
  <Footer></Footer>
    </div>
  );
}

export default App;
