import "./App.css";
import Products from "./components/Products";
import Slider from "./components/slider";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Slider />
        <Products />
      </div>
    </>
  );
}

export default App;
