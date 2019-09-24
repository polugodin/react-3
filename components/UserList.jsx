import React, { Component } from 'react';

import { getUsers } from '../sources/users'

class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            firstName: 'test'
        }

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    onClick() {
        const { firstName } = this.state; 
        getUsers(firstName).then(res => this.setState({ users: res.data }));     
    }

    componentDidMount() {
        const { firstName } = this.state; 
        getUsers(firstName).then(res => this.setState({ users: res.data }));
    }

    render() {
        const { users } = this.state;
        const {onChange, onClick} = this;

        return (
            <div>
                <h2>Users</h2>
                firstName <input type="text" onChange={onChange} />
                <button onClick={onClick}>get users</button>
                {
                    users.length === 0 ? (<div>Нет данных</div>) :
                    (<ul>
                        {users.map((item, index) =>
                            <li key={index}><b>{item.firstName}</b> {item.secondName}</li> )}
                    </ul>)
                }
            </div>
        );
    }
}

export default UserList;
