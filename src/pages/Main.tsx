import React from 'react';
import ReactMarkdown from 'react-markdown';
import '@scss/Main.scss';

const markdown = `
    오버테일 CHALLENGE Github 사용방법 
    학습에 사용하고 있습니다~
`

const Main=() => {
    return (
        <div className='MainTitle'>
            <h1>Hello, World!</h1>
            <h2>Wellcome, ERICA Game Development Society</h2>
            <h2><b>\\ OVERTALE //</b></h2>
            <hr/>
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </div>
    )
}

export default Main;