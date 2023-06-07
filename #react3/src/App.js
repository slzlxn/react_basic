import Body from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Children } from "./components/Children";
import "./App.css";

function App() {
  const name = "이정민";
  const footProps = {
    name: "이정민",
    location: "부산",
  };
  function handleClick() {
    console.log("함수명클릭");
  }
  const arrowClick = () => {
    console.log("화살표함수실행");
  };
  return (
    <div>
      <Header name={name} />
      <Body name={name} location="부산시" />
      <Footer {...footProps} />
      <Children>
        <div>children 컴포넌트</div>
      </Children>
      <button onClick={handleClick}>함수형 클릭</button>
      <button onClick={arrowClick}>화살표함수 클릭</button>
    </div>
  );
}

export default App;
