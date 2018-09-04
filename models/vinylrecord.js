// module.exports = function (sequelize, Sequelizevr) {

//   var VinylRecord = sequelize.define("vinyl_record", {



//     master_id: {
//       type: Sequelizevr.INTEGER,
//       notEmpty: true
//     },

//     status: {
//       type: Sequelizevr.STRING,
//       notEmpty: true
//     },

//     title: {
//       type: Sequelizevr.STRING
//     },

//     joined_artists: {
//       type: Sequelizevr.TEXT
//     },
    
//     country: {
//       type: Sequelizevr.TEXT
//     },
    
//     releasedate: {
//       type: Sequelizevr.TEXT
//     },

//     notes: {
//       type: Sequelizevr.TEXT
//     },

//     last_update: {
//       type: Sequelizevr.DATE
//     },

//     status: {
//       type: Sequelizevr.ENUM('active', 'inactive'),
//       defaultValue: 'active'
//     }


//   });

//   return VinylRecord;

// }