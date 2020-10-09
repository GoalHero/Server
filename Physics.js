import Matter from "matter-js";
import { StyleSheet, StatusBar, Dimensions } from 'react-native'


let tick = 0;
let walkingtick = 0;
let pose = 0;
let walkingpose = 0;

let walking = false;

const { width, height } = Dimensions.get("screen")

export const Physics = (entities, { touches, time }) => {
    let engine = entities["physics"].engine;
    let char = entities.initialChar.body;

    touches.filter(t => t.type === "press").forEach(t => {
      entities.initialChar.pose = "005"
      entities.initialChar.state = "walking"
      walking = true;
      if (t.event.pageX < width / 2) {
        entities.initialChar.face = -1
        Matter.Body.applyForce(char, char.position, {x: -0.15, y: 1.8})
      } else {
        entities.initialChar.face = 1
        Matter.Body.applyForce(char, char.position, {x: 0.15, y: 1.8})
      }
    });

    Matter.Engine.update(engine, time.delta);

    if (!walking) {
      tick += 1
      if (tick % 5 === 0) {
        pose = pose + 1;
        if (pose > 5) {
          pose = 0
        }
        entities.initialChar.pose = `00${pose}`
      }
    } else {
      if (walkingtick === 3) {
        entities.initialChar.state = "idle"
        walking = false;
        walkingtick = 0;
      }
      walkingtick += 1
    }

    return entities;
  };
