import React from 'react';

var LobbyInfo = (props) => (
  <p className={'lobby-info ' 
     + (props.mode != 'wait-friends' && props.mode != 'wait-online' ? 'hidden' : '')}>
    open www.pushed.com/play<br/>
    on your smartphone and<br/>
    insert code there<br/>
  </p>
)

export default LobbyInfo;
