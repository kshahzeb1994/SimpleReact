import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCPShpq9wPLbO6K-RHozsI9vBa_jgTZhs8';

//create a new component that produces some HTML
const App = () => {
    return <div>viva la rasa! I Lie, I Cheat, I Steal</div>;
}

//Take this component's generated HTML and put is on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
