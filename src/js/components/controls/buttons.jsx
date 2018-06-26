import React, { Component } from 'react';
import styled from 'styled-components';
import { backgroundProps } from '../../styled-components/props-receivers';
import { CenterWrapper } from '../../styled-components';
import { getColor } from '../../helpers.js';

function handleMouseDown(e) {
  console.log(e.target.id);
  window.ee.emit('START_MOVE', e.target.id);
}

function handleMouseUp(e) {
  window.ee.emit('MOVE_END');
}

function handleTouchStart(e) {
  console.log(e.target.id);
  window.ee.emit('START_MOVE', e.target.id);
}

function handleTouchEnd() {
  window.ee.emit('MOVE_END');
}

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Container = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 900px) {
    height: 100%; 
    flex-basis: 50%;
  };
`;

const Wrapper = styled.div`
  height: 80%;
  width: 90%;
  position: relative;
`;

const Div = styled.div`
  width: 50%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 0;
  outline: none;
  border: 0;
  display: block;
  width: 45%;
  height: 30%; 
  position: absolute;
  ${backgroundProps}; 
`;

const Up = Button.extend`
  top: 0;
  left: 50%;
  transform: translateX(-50%)
`;

const Down = Button.extend`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Right = Button.extend`
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 45%; 
`;

const Left = Button.extend`
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 45%; 
`;

const Push = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  ${backgroundProps};
`;

var ControlButtons = ({ colorIndex }) => {
  let color = getColor(colorIndex);
  let props = {
   onTouchStart: handleTouchStart,
   onTouchEnd: handleTouchEnd,
   onMouseDown: handleMouseDown,
   onMouseUp: handleMouseUp,
   background: color
  };

  return (
    <CenterWrapper>
      <Container height='100%'>
        <Wrapper>
          <Up id='up'{...props}></Up>
          <Right id='right' {...props}></Right>
          <Down id='down' {...props}></Down>
          <Left id='left' {...props}></Left>
        </Wrapper>
      </Container>
      <Container>
        <Push
          id='push'
          background={color}
          onTouchStart={handleTouchStart}
        ></Push>
      </Container>
    </CenterWrapper>
  )
}

export default ControlButtons;
