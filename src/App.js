import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Sidebar from "./component/Sidebar/Sidebar";
import Feed from "./component/Feed/Feed";
import Widgets from "./component/Widgets/Widgets";
import Login from "./component/Login/Login";
import {useStateValue} from './StateProvider'

function App() {
    const [{user}, dispatch] = useStateValue();
    return (
        // bem naming convection
        <div className="app">
            {!user ? (<Login/>) : (
                <>
                    <Header/>
                    <div className='app__body'>
                        <Sidebar/>
                        <Feed/>
                        <Widgets/>
                    </div>
                </>
            )}

        </div>
    );
}

export default App;
