import './App.css';
import React from 'react';
import Content from './Components/Content/Content.jsx';
import Subscribe from './Components/Subscribe/Subscribe.jsx';
import PracticeAdvice from './Components/PracticeAdvice/PracticeAdvice.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Section2 from './Components/Section2/Section2.jsx';

function App() {
  return (
    <div className="App">
          <Header/>
<Section2/>
      <Content />
      <PracticeAdvice />
      <Subscribe />
      <Footer /> 
    </div>
  );
}

export default App;