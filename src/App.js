import './App.css';
import SearchBox from './components/searchBox';
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
                  <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

     <SearchBox />
    </div>
  );
}

export default App;
