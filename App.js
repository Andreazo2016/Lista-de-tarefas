import React from 'react';
import {YellowBox} from 'react-native';
import ListTask  from './src/ListTask';


YellowBox.ignoreWarnings(['Warning:...'])
export default function App() {
  return (
   <ListTask />
  );
}
