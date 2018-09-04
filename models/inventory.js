module.exports = function (sequelize, Sequelize) {

    var Inventory = sequelize.define("inventory", {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            field: '#',
            notEmpty: true
        },
        genre: {
            type: Sequelize.STRING,
            field: 'genre',
            notEmpty: true
        },
        artist: {
            type: Sequelize.STRING,
            field: 'artist',
            notEmpty: true
        },
        album: {
            type: Sequelize.STRING,
            field: 'album',
            notEmpty: true
        },
        price: {
            type: Sequelize.DECIMAL(2,2),
            field: 'price',
            notEmpty: true
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }

    });
    return Inventory;
};

