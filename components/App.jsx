import React, {Component} from 'react';

import List from './List';
import UserList from './UserList';

import {getList} from '../sources/list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            count: 6
        };
    }

    componentDidMount() {
        getList({ count: this.state.count })
            .then(({ data }) => this.setState({ list: data }));
    }

    render() {
        const { list } = this.state;

        return (
            <div>
                <h3>ddd</h3>
                <List list={list}/>
                <UserList />
            </div>
        );
    }
}

export default App;
