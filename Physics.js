import Matter from 'matter-js';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { monsterWalking } from './MonsterWalking';

let tick = 0;
let attackingtick = 0;
let pose = 0;
let allowJump = true;
let attacking = false;

let monsterHealth = 100;
let charHealth = 100;


const { width, height } = Dimensions.get('screen');

export const Physics = (entities, { touches, time }) => {
  let engine = entities['physics'].engine;
  let char = entities.initialChar.body;

  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      if (t.event.pageY > height / 1.1 && t.event.pageX > width / 1.25) {
        pose = 0;
        attacking = true;
      } else if (t.event.pageY < height / 3) {
        if (allowJump) {
          allowJump = false;
          Matter.Body.applyForce(char, char.position, { x: 0, y: 3 });
        }
      } else if (t.event.pageX < width / 2) {
        entities.initialChar.face = -1;
        Matter.Body.applyForce(char, char.position, { x: -0.15, y: 0});
      } else {
        entities.initialChar.face = 1;
        Matter.Body.applyForce(char, char.position, { x: 0.15, y: 0});
      }

    });

  Matter.Engine.update(engine, time.delta);
  monsterWalking(entities);

  if (!attacking) {
    entities.initialChar.state = 'idle';
  } else if (attacking) {
    if (attackingtick === 5) {
      attacking = false;
      attackingtick = 0;
    }
    entities.initialChar.state = 'attacking';
    attackingtick += 1;
  }
  if (tick % 100 === 0) {
    allowJump = true;
  }
  tick += 1;
  if (tick % 5 === 0) {
    pose = pose + 1;
    if (pose > 5) {
      pose = 0;
    }
  }

  entities.initialChar.pose = `00${pose}`;
  return entities;
};
