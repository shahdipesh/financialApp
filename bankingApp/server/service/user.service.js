var queries = require("../mysql/queries");
var mysql = require("../mysql/mysql-connection");

module.exports = {
  getUser: async (username, password) => {
    var [data]= await (mysql.pool.query(queries.getUser, [username, password]));
return (data)
  },
};
