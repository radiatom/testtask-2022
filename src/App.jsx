import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hello from "./components/Hello/Hello";
import Request from "./components/Request/Request";
import Working from "./components/Working/Working";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Header />
        </div>
      </header>
      <main className="App-main">
        <Hello />
        <div className="container">
          <Working />
          <Request/>
        </div>
      </main>
      <footer className="App-footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
