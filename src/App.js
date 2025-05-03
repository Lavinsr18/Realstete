import Header from "./components/header";
import Footer from "./components/footer";
import ContactSlide from "./components/contatctslide";
import Thumbnails from "./components/thumbnail";
import AnimationSection from "./components/animationselection";
import GetInTouch from "./components/GetInTouch";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Thumbnails />
      <AnimationSection />
      <GetInTouch />
      <Footer />
      <ContactSlide />
    </div>
  );
}
export default App;
