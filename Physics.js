import React, { Component } from 'react';
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import Character from './Character'
import Floor from './Floor'

const { width, height } = Dimensions.get("screen")

export const Physics = (entities, { touches, time }) => {
    let engine = entities["physics"].engine;
    let char = entities.initialChar.body;
  
    touches.filter(t => t.type === "press").forEach(t => {
      console.log('touch 1')
      if (t.event.pageX < width / 2) {
        Matter.Body.applyForce(char, char.position, {x: -0.05, y: 0.02})
      } else {
        Matter.Body.applyForce(char, char.position, {x: 0.05, y: 0.02})
      }
    });
  
    Matter.Engine.update(engine, time.delta);
  
    return entities;
  };