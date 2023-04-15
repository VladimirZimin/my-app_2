import React from 'react';
import styled from 'styled-components';

const TaskUl = styled.ul`
  width: 600px;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;

  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  & + li {
    margin-top: 12px;
  }
`;

const TaskText = styled.p`
  flex: 0 0 60%;
  width: 500px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 0px;
  border-radius: 3px;
`;

const TaskActions = styled.section`
  display: flex;
  justify-content: center;
  /* flex-grow: 1; */
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  margin-left: 4px;
  padding: 8px 24px;
  color: #fff;
  background-color: #3f51b5;
  border: 0;
  outline: 0;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  font: inherit;
  text-transform: uppercase;
  user-select: none;
  transition: background-color 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #303f9f;
  }
`;

const TaskList = ({ tasks, onRemoveTask, onUpdateTask }) => (
  <TaskUl>
    {tasks.map(({ id, text, completed }) => (
      <TaskItem key={id}>
        <TaskText>{text}</TaskText>

        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onUpdateTask(id)}
          />
          Completed
        </label>

        <TaskActions>
          <Button type="button" onClick={() => onRemoveTask(id)}>
            Delete
          </Button>
        </TaskActions>
      </TaskItem>
    ))}
  </TaskUl>
);

export default TaskList;
