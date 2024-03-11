import About from "./components/About";
import Banner from "./components/Banner";
import Experties from "./components/Experties";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Experties/>
      <Footer/>
    </div>
  )
}

export default App;
