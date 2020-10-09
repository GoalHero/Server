import Matter from "matter-js";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let pose = 0;
let tick = 0;
let consecutive = 0;
let randomizer = getRandomInt(5);
let direction = "left";

let directionObj = { left: -1, right: 1 };

export const monsterWalking = (entities) => {
  let engine = entities["physics"].engine;
  let monster = entities.initialMonster.body;
  const walkLeft = () => {
    entities.initialMonster.face = -1;
    Matter.Body.applyForce(monster, monster.position, { x: -0.15, y: 0 });
  };
  const walkRight = () => {
    entities.initialMonster.face = 1;
    Matter.Body.applyForce(monster, monster.position, { x: 0.15, y: 0 });
  }
  tick += 1;
  if (tick % 5 === 0) {
    pose = pose + 1;
    if (pose > 5) {
      pose = 0;
    }
    entities.initialMonster.pose = `00${pose}`;
  }
  if (consecutive < randomizer) {
    if (direction === 'left') {
   walkLeft()
    } else {
   walkRight()
    }
  } else {
    let randomDirection = getRandomInt(1)
    if (randomDirection === 0) {
      direction = 'left'
    } else {
      direction = 'right'
    }
  } 
};
