import './App.css';
import { useState, useEffect } from 'react';
import SearchBox from './components/searchBox';
import Navbar from './components/Navbar';
import Headline from './components/Headline';
import { Switch, Route } from "react-router-dom";
import {getNews} from './services/headlines';
import Banner from './components/Banner';
import { sources } from './sources';
 
function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("coding");

  const handleFormSubmit = (val) => {
    setSearchValue(val)
  }

    useEffect(() => {
        let mounted = true;
        getNews(searchValue)
            .then(articles => {
                if(mounted) {
                    setData(articles)
                }
            })
            return () => mounted = false;
    }, [searchValue])

    
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'> 
          <Navbar
            handleFormSubmit={handleFormSubmit}
            search={searchValue}
          />
          <Banner 
           sources={sources}
          />
          <SearchBox
           data={data} 
           searchValue={searchValue}
           />
        </Route>
        <Route  path="/headline">
          <Headline 
          />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
