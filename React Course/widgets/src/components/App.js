import React, { useState } from 'react';
import Accordion from './Accordion/Accordion';
import Search from './Search/Search';
import Dropdown from './Dropdown/Dropdown';
import Translate from './Translate/Translate';
import './app.css';

const items = [
    { title: 'What is React?', content: 'React is a front-end JavaScript framework' },
    { title: 'Why use React?', content: 'React can help you get a job' },
    { title: 'How do you use React?', content: 'Download the npm package and get hacking!'}
];


const options = [
    {
        label: 'The Color Red',
        value: 'Red'
    },
    {
        label: 'The Color Green',
        value: 'Green'
    },
    {
        label: 'The Color Blue',
        value: 'Blue'
    }
];

const App = () => {
    const [selected, changeSelected] = useState(options[0]);
    return (
        <div className='page-container'>
            {/* <Accordion className='accordion' items={items} /> */}
            {/* <Search /> */}
            {/* <Dropdown 
                selected={selected} 
                changeSelected={changeSelected} options={options} 
                label='Select a color' 
            /> */}
            <Translate />
        </div>
    );
}

export default App;