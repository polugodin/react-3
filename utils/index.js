const getData = (data, count) => {
    return data.slice(0, count);
};

const getUsers = (data, firstName) => {
    return data.filter(item => item.firstName.includes(firstName));
}

module.exports = {
    getData,
    getUsers
};
