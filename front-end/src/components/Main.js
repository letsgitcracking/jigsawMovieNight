import React from 'react';
import { List } from './List'
import { Fetch } from './FetchMovie/Fetch';

export class Main extends React.Component {
    render() {
        return <div className='main'>
            <div> Jigsaw Movie Night
        </div>
            <List />
            <Fetch />
        </div>
    }
}