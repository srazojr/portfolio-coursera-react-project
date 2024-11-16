import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <header><Header></Header></header>
      <nav><Nav></Nav></nav>
      <main><Main></Main></main>
      <footer><Footer></Footer></footer>
    </>
  );
}

export default App;
