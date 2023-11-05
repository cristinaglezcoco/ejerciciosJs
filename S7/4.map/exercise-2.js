const users = [
{id: 1, name: 'Abel'}, 
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'}, 
{id:4, name: 'Amanda'}];

const usersName = users.map(function (user) {
    //const userNames = user.name => esto significa que lo metes en una variable, no es obligatorio, y abajo pondrías el nombre de la variable, ya que su valor es user.name
    if(user.name[0] === 'A') { // se puede usar charArt para los carácteres, en este caso posición 0 user.name.charArt(0)
        user.name = 'Anacleto';
    }
    return user.name;
});

console.log(usersName);