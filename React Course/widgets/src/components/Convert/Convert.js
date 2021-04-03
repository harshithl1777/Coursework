import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, input }) => {
    const [output, setOutput] = useState('');
    const [debouncedInput, setDebouncedInput] = useState(input);

    useEffect(() => {
        const timer = setTimeout(() => { 
            setDebouncedInput(input);
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    })

    useEffect(() => {
            if (debouncedInput) {
                axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                    params: {
                        q: debouncedInput,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                })
                .then(({ data }) => setOutput(data.data.translations[0].translatedText))
                .catch((err) => console.log(err));
            } else {
                setOutput('');
            }
    }, [language, debouncedInput]);

    return (
        <div>{output}</div>
    );
}

export default Convert;