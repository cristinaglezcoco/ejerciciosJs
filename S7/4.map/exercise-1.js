const users = [
{id: 1, name: 'Abel'}, 
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'}, 
{id:4, name: 'Amanda'}];

const usersName = users.map(function (user) {
    return user.name;
});

console.log(usersName);

//arrow function 
//const userName = users.map(user => user.name);