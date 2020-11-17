import './App.css';
import { useState, useEffect } from 'react';
import SearchBox from './components/searchBox';
import Navbar from './components/Navbar';
import Headline from './components/Headline';
import { Switch, Route } from "react-router-dom";
import {getNews} from './services/headlines';

function App() {
  const [data, setData] = useState([]);

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
          <SearchBox data={data} />
        </Route>
        <Route exact path='/mao' component={Headline} />
     </Switch>
    </div>
  );
}

export default App;
