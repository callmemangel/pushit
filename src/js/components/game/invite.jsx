import React from 'react';
import { Square, InviteInput, InviteWrapper, Label, RightLabel } from '../../styled-components';

const RightSquare = Square.extend`
  position: absolute;
  top: -12px;
  right: 0px;
`;

const LeftSquare = Square.extend`
  margin-top: 5px;
`;


let Invite = props => (
  <InviteWrapper>
    <Label red htmlFor='code'>invite code</Label>
    {props.mode == 'start' && <RightSquare pink small></RightSquare>}
    <InviteInput id='code' value={props.code} disabled={true}/> 
    {props.mode == 'start' && <LeftSquare blue small></LeftSquare>}
    <RightLabel pink htmlFor='code'>4max</RightLabel>
  </InviteWrapper>
)

export default Invite;
