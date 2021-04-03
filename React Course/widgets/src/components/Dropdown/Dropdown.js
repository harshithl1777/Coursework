import React, { useState, useEffect } from 'react';

const Dropdown = ({ options, label, selected, changeSelected }) => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        setMenuOpen(false);
    }, [selected]);

    const renderedOptions = options.map((option, index) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div key={index} className='item' onClick={() => changeSelected(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div className='ui form'>
            <div className="field">
                <label className="label">{label}</label>
                <div  onClick={() => setMenuOpen(!menuOpen)} className='ui selection dropdown visible active hidden'>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${(menuOpen) ? 'visible ' : ''}transition`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;