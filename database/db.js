import Sequelize from 'sequelize';

const Conn = new Sequalize(
    'relay', //these are all default
    'postgres', //name
    'postgres', //password
    {
        dialext: 'mysqyl',
        host: 'localhost'
    }
);

const TradersData = Conn.define('trader', {

})

const TradersUsers = Conn.define('users', {

})