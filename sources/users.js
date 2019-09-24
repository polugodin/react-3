import Axios from 'axios';

const getUsers = firstName => Axios.get('/users', { params: { firstName: firstName } } );

export { getUsers };
