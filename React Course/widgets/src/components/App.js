import React, { useState } from 'react';
import Accordion from './Accordion/Accordion';
import Search from './Search/Search';
import Dropdown from './Dropdown/Dropdown';
import Translate from './Translate/Translate';
import Route from './Route/Route';
import Header from './Header/Header';
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
            <Header />
            <Route path='/'>
                <Accordion className='accordion' items={items} />
            </Route>
            <Route path='/search'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown selected={selected} changeSelected={changeSelected} options={options} label='Select a color' />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
}

export default App;