import React from 'react';
import './BlueBox.css'
import BlackBox1 from './components2/BlackBox1.jsx'

function BlueBox() {
  return (
    <div className="hey">
      <div className="blue-box">
        <div id="sleep"><img src="src/components/footagecrate-4k-anime-fire-constant@2X.png" /></div>
        <div className="title">
          Favorite Anime
        </div>
        <div className="fired">
          <BlackBox1 name="Naruto" link="https://myanimelist.net/anime/20/Naruto" source="src/components/components2/naruto.jpg"></BlackBox1>
          <BlackBox1 name="Bleach" link="https://myanimelist.net/anime/269/Bleach" source="src/components/components2/bleach.png"></BlackBox1>
          <BlackBox1 name="One Piece" link="https://myanimelist.net/anime/21/One_Piece" source="src/components/components2/onepiece.jpg"></BlackBox1>
          <BlackBox1 name="Code Geass" link="https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch" source="src/components/components2/code.jpg"></BlackBox1>
          <BlackBox1 name="Re:Zero" link="https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu?cat=anime" source="src/components/components2/rezero.jpg"></BlackBox1>
          <BlackBox1 name="Mob Psycho 100" link="https://myanimelist.net/anime/32182/Mob_Psycho_100" source="src/components/components2/mob.jpg"></BlackBox1>
          <BlackBox1 name="Jujutsu Kaisen" link="https://myanimelist.net/anime/40748/Jujutsu_Kaisen" source="src/components/components2/kaisen.jpg"></BlackBox1>
          <BlackBox1 name="Hell's Paradise" link="https://myanimelist.net/anime/46569/Jigokuraku" source="src/components/components2/paradise.jpg"></BlackBox1>
          <BlackBox1 name="Mashle: Magic and Muscles" link="https://myanimelist.net/anime/52211/Mashle" source="src/components/components2/mashle.jpg"></BlackBox1>
          <BlackBox1 name="Dr. Stone" link="https://myanimelist.net/anime/38691/Dr_Stone" source="src/components/components2/stone.jpg"></BlackBox1>
        </div>
      </div>
    </div>
  );
}

export default BlueBox;