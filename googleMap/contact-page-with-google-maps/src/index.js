import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
import {get, ref, getDatabase, child} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js'

const firebaseConfig = {
  apiKey: "AIzaSyB9eIkzpFj2DwOvFn529jHl1H5RWGdOJzQ",
  authDomain: "potholes-cde20.firebaseapp.com",
  databaseURL: "https://potholes-cde20-default-rtdb.firebaseio.com",
  projectId: "potholes-cde20",
  storageBucket: "potholes-cde20.appspot.com",
  messagingSenderId: "97717487459",
  appId: "1:97717487459:web:4e8c2c5b130bef01c53556"
};

const fb = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase())

get(child(dbRef, "/users")).then((snapshot) => {
  console.log(snapshot.val())
  console.log(convertLocationData(snapshot.val()))

  ReactDOM.render(
    <React.StrictMode>
      <App locations={convertLocationData(snapshot.val())}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
})


function convertLocationData(badAswarthData){
  var goodData = []
  for (var i in badAswarthData){
    badAswarthData[i].split(",")
    goodData[goodData.length] = {
      address: '',
      lat: parseFloat(badAswarthData[i].split(",")[0]),
      lng: parseFloat(badAswarthData[i].split(",")[1]),
    }
  }
  return goodData;
}