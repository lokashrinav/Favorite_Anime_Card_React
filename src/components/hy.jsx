import React from 'react';
import './BlueBox.css'
import BlackBox1 from './components2/BlackBox1.jsx'
import BlackBox2 from './components2/BlackBox2.jsx'
import BlackBox3 from './components2/BlackBox3.jsx'

function BlueBox() {
  return (
    <div className="hey">
      <div className="blue-box">
        <div id="sleep"><img src="src/components/footagecrate-4k-anime-fire-constant@2X.png" /></div>
        <div className="title">
          Favorite Anime
        </div>
        <div className="fired">
          <BlackBox1></BlackBox1>
          <BlackBox2></BlackBox2>
          <BlackBox3></BlackBox3>
        </div>
      </div>
    </div>
  );
}

export default BlueBox;