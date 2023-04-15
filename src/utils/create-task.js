import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

export default function createTask() {
  let idx = Math.random();

  return {
    id: idx,
    text: lorem.generateSentences(3),
    completed: false,
  };
}
