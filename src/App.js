import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
