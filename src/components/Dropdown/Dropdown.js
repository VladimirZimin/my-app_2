import React, { Component } from 'react';
import styled from 'styled-components';

const DropdownWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 400px;
  margin-bottom: 100px;
  padding: 20px;
  border: 1px solid black;
`;

const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  padding: 20px;
  text-align: center;
  background-color: teal;
  color: white;
  box-sizing: border-box;
`;

const Button = styled.button.attrs({ type: 'button' })`
  margin-left: 10px;
  padding: 5px 10px;
`;

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    return (
      <DropdownWrap>
        <Button onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </Button>
        {/* <Button onClick={this.hide}>Hide</Button> */}
        {this.state.visible && <Menu>Menu</Menu>}
      </DropdownWrap>
    );
  }
}

export default Dropdown;
