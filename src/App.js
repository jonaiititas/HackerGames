import React, {} from 'react';
import './App.css';
import NavHeader from "./NavHeader";
import Map from "./Map";

function App() {


    return (
        <div className="App">
            <header>
                <NavHeader a={6}/>
            </header>
            <Map/>

        </div>
    );
}


export default App;
