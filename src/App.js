import "./App.css";
import { Data } from "./config/index";
import Carousel from "./component/Carousel";
function App() {
  return (
    <div className="container">
      <Carousel
        data={Data}
        transitionDuration={4000}
        autoPlay
        onHover
        showDots
        actionColor={"skyblue"}
      />
    </div>
  );
}

export default App;
