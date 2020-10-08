import React from 'react';
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import Character from './Character'
import Floor from './Floor'

const engine = Matter.Engine.create({ enableSleeping: false });
const world = engine.world;

const Physics = (entities, { touches, time }) => {
  let engine = entities["physics"].engine;
  let char = entities.initialChar.body;

  touches.filter(t => t.type === "press").forEach(t => {
    console.log('touch')
    if (t.event.pageX < width / 2) {
      Matter.Body.applyForce(char, char.position, {x: -0.01, y: 0})
    } else {
      Matter.Body.applyForce(char, char.position, {x: 0.01, y: 0})
    }
  });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

const { width, height } = Dimensions.get("screen")
const charSize = Math.trunc(Math.max(width, height) * 0.075);
const initialChar = Matter.Bodies.rectangle(0, height / 2, charSize, charSize);

const floorSize = Math.trunc(Math.max(width, height) * 0.075);
const floor = Matter.Bodies.rectangle(0, height - floorSize / 2, width, floorSize, { isStatic: true });

Matter.World.add(world, [initialChar, floor]);

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

