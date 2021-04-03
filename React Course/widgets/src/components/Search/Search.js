import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './search.css';

const Search  = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            if (term) {
                    axios.get('https://en.wikipedia.org/w/api.php', {
                        params: {
                            action: 'query',
                            list: 'search',
                            origin: '*',
                            format: 'json',
                            srsearch: term
                        }
                    })
                    .then(({ data }) => {
                        console.log(data.query.search);
                        setResults(data.query.search);
                    });
            }
        }, 600);

        return () => {
            clearTimeout(timeoutID);
        }
    }, [term]);

    const renderResults = () => {
        return results.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <div className='right floated content'>
                        <a href={`https://en.wikipedia.org/wiki/${item.title}`}className='ui button'>Go to page</a>
                    </div>
                    <div className="content">
                        <div className='header'>
                            {item.title}
                        </div>
                        <span dangerouslySetInnerHTML={{ __html: item.snippet.replace(/class/g, 'className') }}></span>
                    </div>
                    <br />
                </div>
            );
        });
    }

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} onChange={(e) => setTerm(e.target.value)} className="input" />
                </div>
            </div>
            <div className='ui celled list'>{renderResults()}
            
            </div>
        </div>
    );
}

export default Search;