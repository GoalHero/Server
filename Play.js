import React from 'react';
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import Character from './Character'

export default class Play extends React.Component {
  render() {
     return (
          <GameEngine style={styles.container}
          entities={{ initialChar: {
              body: initialChar, 
              size: [charSize, charSize], 
              color: 'purple', 
              renderer: Character
          }
          }}>
             <StatusBar hidden={true} />
          </GameEngine>
      );
    }
  }


const { width, height } = Dimensions.get("screen")
const charSize = Math.trunc(Math.max(width, height) * 0.075);
const initialChar = Matter.Bodies.rectangle(width / 2, height / 2, charSize, charSize);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  
