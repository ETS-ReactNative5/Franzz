import React, { useEffect, useState } from 'react';

// import PopUpBox from './components/Channel/Container/Chat/PopUpBox';
// import PopUpButton from './components/Channel/Container/PopUpButtons/PopUpButton';
// import './components/Channel/Container/Chat/Styling/PopUpBoxStyling.css';
// import { mouseDownFunction } from './components/Channel/Container/Chat/Scripts/PopUpBoxScript';
// import PopUpButtonDisplay from './hooks/PopupButton';

import Channel from './components/Channel/Channel';
import Login from './components/Landing/Login';

// const ON = 'on';

const App = () => {
  // const { boxDisplay, clickedButton } = PopUpButtonDisplay('off');

  const title = 'JEK';

  return (
    <div>
      {title}
      <Channel />
      {/* { boxDisplay === ON && <PopUpBox mouseDown={mouseDownFunction} /> } */}
      {/* <PopUpButton toggleButton={clickedButton} /> */}
      <Login />
    </div>
  );
};

export default App;
