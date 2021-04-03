import React, { useState } from 'react';
import './accordion.css';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const dropdownClicked = (index) => {
        if (activeIndex !== index) {
            setActiveIndex(index);
        } else {
            setActiveIndex(null);
        }
    }
    
    const renderAccordions = items.map((item, index) => {
        const status = (index === activeIndex) ? 'active' : null;
        return (
            <React.Fragment key={index} >
                <div className={`${status} title`} onClick={() => dropdownClicked(index)}> 
                    <i className='dropdown icon' ></i>
                    {item.title}
                </div>
                <div className={`${status} content`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className='ui styled accordion'>{renderAccordions}</div>
    );
}

export default Accordion;