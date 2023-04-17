import React, { Component } from 'react';
import Counter from './components/Counter/Counter';
import Layout from './components/Layout/Layout';
import Product from './components/Counter/Product';
import Section from './utils/Section';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';
import SingupForm from './components/Form/SignupForm';
import FormikForm from './components/FormikForm/FormikForm';
import { ProductReviewForm } from './components/FormikForm/ProductReviewForm';

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
    wishes: [],
    balance: 0,
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

  render() {
    const { balance } = this.state;

    return (
      <Layout>
        <Section title={'SHOP + COUNTER'}>
          <h2>balance: {balance}</h2>
          <Counter step={10} replenishment={this.replenishment} />
          <Product buyProduct={this.buyProduct} />
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
