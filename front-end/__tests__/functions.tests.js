import { sayHello } from '../src/services/stateFunctions';

test('greets the makers', () => {
  const greeting = sayHello();

  expect(greeting).toEqual(
    '🔫 💣 🔎 🎈 🎁 🔥'
  );
});