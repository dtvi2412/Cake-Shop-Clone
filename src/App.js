
import "./App.scss";
import About from "./Components/About/About";
import Customers from "./Components/Customers/Customers";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Instagram from "./Components/Instagram/Instagram";
import OurBlog from "./Components/OurBlog/OurBlog";
import Slider from "./Components/Slider/Slider";
import SlideShow from "./Components/SlideShow/SlideShow";
import VideoThumbnailCom from "./Components/VideoThumbnail/VideoThumbnail";
function App() {
  return (
    <div className="app">
     <Header/>
     <Slider/>
     <About/>
     <SlideShow/>
    <VideoThumbnailCom/>
    <Customers/>
    <OurBlog/>
    <Instagram/>
    <Footer/>
    </div>
  );
}

export default App;
