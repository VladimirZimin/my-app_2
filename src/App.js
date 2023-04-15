import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Counter from './components/Counter/Counter';
import Layout from './components/Layout/Layout';
import TaskList from './components/TaskList/TaskList';
import TaskEditor from './components/TaskEditor/TaskEditor';
// import createTask from './utils/create-task';
import Product from './components/Counter/Product';
import Section from './utils/Section';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';
import SingupForm from './components/Form/SignupForm';
import Filter from './components/Filter/Filter';
import FormikForm from './components/FormikForm/FormikForm';
import { ProductReviewForm } from './components/FormikForm/ProductReviewForm';
import { GlobalStyle } from './components/GlobalStyle';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const check = (balance, total) =>
  balance >= total ? balance - total : balance;

class App extends Component {
  state = {
    tasks: [],
    wishes: [],
    balance: 0,
    filter: '',
  };

  addTask = text => {
    // const task = createTask();

    const task = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  removeTask = taskId => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(task => task.id !== taskId),
      };
    });
  };

  buyProduct = (product, amount) => {
    const total = product.price * amount;

    if (this.state.balance >= total) {
      this.setState(prevState => ({
        balance: check(prevState.balance, total),
      }));
    }
  };

  replenishment = params => {
    this.setState(prevState => ({ balance: prevState.balance + params }));
  };

  // updateCompleted = taskId => {
  //   this.setState(prevState => {
  //     return {
  //       tasks: prevState.tasks.map(task => {
  //         if (task.id === taskId) {
  //           return {
  //             ...task,
  //             completed: !task.completed,
  //           };
  //         }

  //         return task;
  //       }),
  //     };
  //   });
  // };

  updateCompleted = taskId => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  changeFilter = filter => {
    this.setState({ filter: filter });
  };

  getVisibleTasks = () => {
    const { tasks, filter } = this.state;

    return tasks.filter(task =>
      task.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { tasks, balance, filter } = this.state;
    const visibleTasks = this.getVisibleTasks();

    return (
      <Layout>
        <GlobalStyle />
        <Section title={'SHOP + COUNTER'}>
          <h2>balance: {balance}</h2>
          <Counter step={10} replenishment={this.replenishment} />
          <Product buyProduct={this.buyProduct} />
        </Section>

        <Section title={'TODO'}>
          <TaskEditor onAddTask={this.addTask} />
          {visibleTasks.length > 0 && (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          )}

          {tasks.length > 0 && (
            <TaskList
              tasks={visibleTasks}
              onRemoveTask={this.removeTask}
              onUpdateTask={this.updateCompleted}
            />
          )}
        </Section>

        <Section title={'DROPDOWN'}>
          <Dropdown />
        </Section>

        <Section title={'COLORPICKER'}>
          <ColorPicker options={colorPickerOptions} />
        </Section>

        <Section title={'FORM'}>
          <SingupForm />
        </Section>

        <Section title={'FORMIK'}>
          <FormikForm />
        </Section>
        <Section title={'FORMIK - ProductReviewForm'}>
          <ProductReviewForm />
        </Section>
      </Layout>
    );
  }
}

export default App;
