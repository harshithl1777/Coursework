import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Convert from '../Convert/Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [selectedLang, setLang] = useState(options[2]);
    const [inputText, setInputText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                <label className='label'>Enter some text</label>
                <input value={inputText} onChange={e => setInputText(e.target.value)}/>
                </div>
            </div>
            <br></br>
            <Dropdown options={options} 
                label='Select a language'
                selected={selectedLang} changeSelected={setLang} 
            />
            <h3 className='ui header'>Output</h3>
            <Convert language={selectedLang} input={inputText} />
        </div>
    );
}

export default Translate;