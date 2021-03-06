import React from 'react';
import './AboutPage.css';

const getExecBoard = () => {
    return (
        <article className='ExecBoard'>
            <h2 className='ExecBoard-h'>Executive Board</h2>
            <p className='ExecBoard-p'><strong>President - </strong>Isabella Gransbury</p>
            <p className='ExecBoard-p'><strong>Vice-President - </strong> Justin Adams</p>
            <p className='ExecBoard-p'><strong>Secretary - </strong> Simeon Niesler</p>
        </article>
    );
};

const aboutPage = (props) => (
    <div>
        {getExecBoard()}
        <br />
        <h2><strong><a href = 'mailto: umwacm@gmail.com'>Contact Us</a></strong></h2>
    </div>
);

export default aboutPage;