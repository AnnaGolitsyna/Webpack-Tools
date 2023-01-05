import { createNewTask } from './createTask';

it('should new task', () => {
  const text = 'task 6';
  const done = false;
  const time = 1672220432765;

  expect(createNewTask()).toEqual({
    text: 'task 6',
    done: false,
    time: 1672220432765,
  });
});
