import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  padding: 10px;
  border: 1px solid black;
`;

const Title = styled.h2`
  line-height: 1.3;
`;

const Button = styled.button`
  background-color: ${props => props.color};
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 250ms linear;

  &.isActive {
    transform: scale(1.2);
  }
`;

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    if (index === this.state.activeOptionIdx) {
      return 'isActive';
    }
  };

  render() {
    // const activeOptionLabel = this.props.options[this.state.activeOptionIdx]
    // const activeOptionColor = this.props.options[this.state.activeOptionIdx]

    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    const { color } = options[activeOptionIdx];

    return (
      <Wrapper>
        <Title>Color Picker</Title>
        <p>
          Выбран цвет: {label} / {color}
        </p>
        <div>
          {options.map(({ label, color }, index) => (
            <Button
              key={label}
              className={this.makeOptionClassName(index)}
              color={color}
              onClick={() => this.setActiveIdx(index)}
            ></Button>
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default ColorPicker;
