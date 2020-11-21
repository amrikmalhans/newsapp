import './App.css';
import { useState, useEffect } from 'react';
import SearchBox from './components/searchBox';
import Navbar from './components/Navbar';
import Headline from './components/Headline';
import { Switch, Route } from "react-router-dom";
import {getNews} from './services/headlines';

function App() {
  const [data, setData] = useState([]);
  const [headlineData, setHeadlineData] =useState(null);
  
  const handleClick = (stuff) => {
    setHeadlineData(stuff)
  }
    useEffect(() => {
        let mounted = true;
        getNews()
            .then(articles => {
                if(mounted) {
                    setData(articles)
                }
            })
            return () => mounted = false;
    }, [])

    
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'> 
          <Navbar/>
          <SearchBox
           handler={handleClick}
           data={data} 
           />
        </Route>
        <Route  path="/headline">
          <Headline 
           headlineData={headlineData}
          />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
