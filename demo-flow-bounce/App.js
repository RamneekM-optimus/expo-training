import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';

import Navigation from './Components/Navigation';
import LoginScreen from './Screens/LoginScreen';
import {init, insertScreens} from './DB/db';

const listData = ["Screen1", "Screen2", "Screen3", "Screen4"];

export default function App(props) {
  console.log('app', props);
  useEffect(() => {
    init()
.then(() => {

})
.catch(err => {
  console.log(err);
});

// for(let i=0;i<4;i++) {
  insertScreens(11, listData[0])
  .then(() => {
    console.log("data inserted");
  })
  .catch(err => {
      console.log(err);
  });
// }

},[]);

  return <Navigation/>;
}
