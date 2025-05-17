import './App.css';
import CardBox from './components/card_box/CardBox';
import sejong_logo from './assets/images/sejong_logo.png';
import UnderlineText from './components/underline_text/UnderlineText';
import React, { useState } from 'react';

function App() {
  // return (
  //   <div className="App">
  //     <CardBox
  //       logo={sejong_logo}
  //       alt=""
  //       onClick={() => window.open('https://ecampus.sejong.ac.kr', '_blank')}
  //     />
  //     <CardBox
  //       logo={sejong_logo}
  //       alt=""
  //       onClick={() => window.open('https://ecampus.sejong.ac.kr', '_blank')}
  //     />
  //   </div>
  // );


  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <UnderlineText 
        text="Buy online" 
        isActive={activeIndex === 0}
        onClick={() => handleClick(0)} 
      />
      <UnderlineText 
        text="Buy in store" 
        isActive={activeIndex === 1}
        onClick={() => handleClick(1)} 
      />
    </div>
  );
}

export default App;
