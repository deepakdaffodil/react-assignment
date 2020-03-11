import React from 'react';
import DimensionsApp from './DimensionsApp';

// usage not relevant for now as we have created Hoc to provide the height and event handler
let divHeight;
window.setDivHeight = height => divHeight = height;


class App extends React.Component {
  render() {
    console.log(divHeight);
    return (
      <div className="App">
        <DimensionsApp />
      </div>
    );
  }
}

export default App;
