const Pool = require("pg").Pool;

const pol = new Pool ({
    user: "postgres",
    password: "qwerty12345",
    database: "data_siswa",
    host: "localhost",
    port: 5432
});

module.exports = pol;