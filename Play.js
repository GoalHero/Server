import React from 'react';
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import Character from './Character'
import Floor from './Floor'
import { Physics } from './Physics'
import Ceiling from './Ceiling'
import Wall from './Wall'
import Boundary from './Boundary'

const engine = Matter.Engine.create({ enableSleeping: false });
const world = engine.world;
const { width, height } = Dimensions.get("screen")
const charSize = Math.trunc(Math.max(width, height) * 0.075);
const initialChar = Matter.Bodies.rectangle(0, height / 2, charSize, charSize);
const floorSize = Math.trunc(Math.max(width, height) * 0.075);
const ceilingSize = Math.trunc(Math.max(width, height) * 0.075);
const boundarySize = Math.trunc(Math.max(width, height) * 0.009);
const floor = Matter.Bodies.rectangle(0, height - floorSize / 2, width, floorSize, { isStatic: true });
const ceiling = Matter.Bodies.rectangle(0, 0, width, ceilingSize, { isStatic: true });
const wall = Matter.Bodies.rectangle(0, 0, width, height, { isStatic: true });
const leftBoundary = Matter.Bodies.rectangle(-width / 2 - boundarySize, height / 2, boundarySize, height, { isStatic: true });
const rightBoundary = Matter.Bodies.rectangle(width / 2 + boundarySize, height / 2, boundarySize, height, { isStatic: true });


Matter.World.add(world, [initialChar, floor, ceiling, leftBoundary, rightBoundary]);

export default class Play extends React.Component {
  render() {
    return (
        <GameEngine
        style={styles.container}
        systems={[Physics]}
        entities={{
            physics: {
              engine: engine,
              world: world
            },
            initialChar: {
              body: initialChar,
              size: [charSize, charSize],
              color: 'purple',
              renderer: Character
            },
            floor: {
              body: floor,
              size: [width, floorSize],
              color: "green",
              renderer: Floor
            }, 
            ceiling: {
              body: ceiling, 
              size: [width, ceilingSize], 
              color: "green",
              renderer: Ceiling
            }, 
            wall: {
              body: wall, 
              size: [width, height], 
              color: "clear", 
              renderer: Wall 
            }, 
            rightBoundary: {
              body: rightBoundary, 
              size: [boundarySize, height], 
              color: 'clear', 
              renderer: Boundary
            },
            leftBoundary: {
              body: leftBoundary, 
              size: [boundarySize, height], 
              color: 'clear', 
              renderer: Boundary
            }
        }}>
            <StatusBar hidden={true} />
        </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

