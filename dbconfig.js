const config = {
    user: 'sgmk',
    password: 'Admin',
    server: 'localhost',
    database: 'WebAPI',
    options:{
        trustedconnection: true,
        enableArithAort: true,
        instancename: 'SQLEXPRESS',
        trustServerCertificate: true
    },
    port: 49815
}

module.exports = config;