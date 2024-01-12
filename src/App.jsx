import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import CommentSection from "./components/CommentSection";

function App() {
  return (
    <div className="p-0 m-0">
      <h1 className="flex justify-center text-lg font-extrabold m-3 p-3 bg-purple-950 text-white ">
        React 101
      </h1>
      <Counter initialValue={25} />
      <CommentSection />
      {/* <Comment name={"id labore ex et quam laborum"} email={"Eliseo@gardner.biz"} body={"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"}/> */}
    </div>
  );
}

export default App;
