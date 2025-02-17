import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyFunctions from './Function/MyFunctions.jsx'
import MyPromises from './Function/MyPromises.jsx'
import MyPromisesAll from './Function/MyPromisesAll.jsx'
import MyPromisesRace from './Function/MyPromisesRace.jsx'
import MyFetchAPIs from './Function/MyFetchAPIs.jsx'
import MyFetchPost from './Function/MyFetchPost.jsx'
import MyFetchPut from './Function/MyFetchPut.jsx'
import MyFetchBlob from './Function/MyFetchBlob.jsx'

createRoot(document.getElementById('root')).render(

    /* <App /> */
    /* <MyFunctions /> */
    /* <MyPromises/> */
    /* < MyPromisesAll /> */
    /* { <MyPromisesRace/> } */
    // < MyFetchAPIs /> 
    // <MyFetchPost/>
    //<MyFetchPut />

    < MyFetchBlob />
)
