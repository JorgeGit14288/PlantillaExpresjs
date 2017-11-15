const configDB = {
    user: "test",
    password: "amor",
    server: "ASUS\\SQLEXPRESS",
    database: "PruebasDb",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}
module.exports = configDB;