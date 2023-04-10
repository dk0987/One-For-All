import './SearchedResult.css';
import '../../../index.css';

import { useState } from 'react';

function SearchedResult({ data }) {
    // URL -> https://api.dictionaryapi.dev/api/v2/entries/en/{wor}

    return (
        <div className="searchedResult | bg-clr-400">

            {
                
            data.map((word) => (
                <div>
                    <h1 className='fs-800 bold start letter-spacing'>{word.word}</h1>
                    <h4 className='fs-500 semi-bold start'>{word.phonetic}</h4>

                    {word.meanings.map((meaning) => (
                        <div className="container">
                            <h3 className='fs-400 capital start letter-spacing'>{meaning.partOfSpeech}</h3>
                            {meaning.definitions.map(definations => (
                                <div className="container">
                                        <p className='fs-300 semi-bold italic start'>*{definations.definition}</p>
                                    <p className='fs-300 semi-bold italic start'>Ex.{definations.example}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}

        </div>
    );
}

export default SearchedResult;