import './App.css';
import { useState, useEffect } from 'react';
import SearchBox from './components/searchBox';
import Navbar from './components/Navbar';
import Headline from './components/Headline';
import { Switch, Route } from "react-router-dom";
import Banner from './components/Banner';
import { sources } from './sources';
import SignUp from './components/signUp';

import firebase from './firebase';

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("coding");
  const [className, setClassName] = useState("source");

  const handleClass = (className) => {
    setClassName(className)
  }

  const handleFormSubmit = (val) => {
    setSearchValue(val)
  }

    useEffect(() => {
        const fetchData =  () => {
          const db = firebase.firestore()
          const data = db.collection("headlines").doc('coding')
          data.get().then(doc => {
           setData(doc.data().articles)
          })
        }
        fetchData();
    }, [])

    const handleSourceClick = (sourceData) => {
        sourceData === undefined ? console.error("nothing found") : setData(sourceData.articles);
    }
    
    
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
           handleSourceClick={handleSourceClick}
           className={className}
           handleClass={handleClass}
          />
          <SearchBox
           data={data} 
           searchValue={searchValue}
           />
        </Route>
        <Route path="/headline">
          <Headline 
          />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
