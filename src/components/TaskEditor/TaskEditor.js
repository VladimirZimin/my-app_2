import React, { Component } from 'react';
import styled from 'styled-components';

const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 400px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 16px;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
`;

export const Input = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 100%;
  outline: 0;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #2b32b2;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #3f51b5;
  border: 0;
  outline: 0;
  padding: 8px 24px;
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

class TaskEditor extends Component {
  state = {
    text: '',
  };

  handleChange = evt => {
    this.setState({ text: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onAddTask(this.state.text); // передали в App

    this.setState({ text: '' }); // reset
  };

  render() {
    const { text } = this.state;

    return (
      <TaskForm onSubmit={this.handleSubmit}>
        <Label>
          Text
          <Input type="text" value={text} onChange={this.handleChange} />
        </Label>

        <Button type="submit">add task</Button>
      </TaskForm>
    );
  }
}

export default TaskEditor;

// <Task>
//   <button type="button" onClick={onAddTask}>
//     Добавить таск
//   </button>
// </Task>
