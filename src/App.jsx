import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header"><div className="container"> <Header/> </div></header>
      <main className="App-main">
        <div className="container">main</div>
      </main>
      <footer className="App-footer"><div className="container">< Footer/></div></footer>
    </div>
  );
}

export default App;
