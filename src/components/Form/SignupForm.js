import React, { Component } from 'react';

const Subscription = {
  FREE: 'free',
  PRO: 'pro',
  VIP: 'VIP',
};

class SingupForm extends Component {
  state = {
    login: '',
    password: '',
    agreed: false,
    subscription: null,
    age: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ inputValue: evt.target.value });
  };

  // handleEmailChange = evt => {
  //   this.setState({ login: evt.target.value });
  // };

  // handlePasswordChange = evt => {
  //   this.setState({ password: evt.target.value });
  // };

  handleChange = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  handleAgreedChange = evt => {
    this.setState({ agreed: evt.target.checked });
  };

  handleSubscriptionChange = evt => {
    const { value } = evt.target;

    this.setState({ subscription: value });
  };

  render() {
    const { login, password, agreed, subscription, age } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="1qwe">login: </label>
          <input
            id="1qwe"
            type="text"
            value={login}
            name="login"
            onChange={this.handleChange}
          />

          <br />

          <label>
            password:{' '}
            <input
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
          </label>

          <br />

          <label>
            Choose your age
            <select name="age" value={age} onChange={this.handleChange}>
              <option value="" disabled>
                ...
              </option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </label>

          <br />

          <div role="group">
            <label>
              <input
                type="radio"
                value={Subscription.FREE}
                checked={Subscription.FREE === subscription}
                onChange={this.handleSubscriptionChange}
              />
              Free
            </label>
            <label>
              <input
                type="radio"
                value={Subscription.PRO}
                checked={Subscription.PRO === subscription}
                onChange={this.handleSubscriptionChange}
              />
              Pro
            </label>
            <label>
              <input
                type="radio"
                value={Subscription.VIP}
                checked={Subscription.VIP === subscription}
                onChange={this.handleSubscriptionChange}
              />
              VIP
            </label>
          </div>

          <br />

          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={this.handleAgreedChange}
            />
            Подтвердить данные
          </label>

          <br />

          <button type="submit" disabled={!agreed}>
            Зарегистрироваться как {login}
          </button>
        </form>
      </div>
    );
  }
}

export default SingupForm;
