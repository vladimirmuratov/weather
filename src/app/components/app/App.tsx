import React from 'react';
import styles from './App.module.css';
import {Header} from "../header/Header";
import {MineBlock} from "../mine-block/mine-block";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <MineBlock/>
        </div>
    );
}

export default App;
