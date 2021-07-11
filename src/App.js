import React from 'react';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import resumeData from './resumeData';


class App extends React.Component {
  render() {
    return <div className="App">
        <Header resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <Education resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>;
  }
}

export default App;
