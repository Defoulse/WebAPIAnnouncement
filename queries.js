var config = require('./dbconfig');
const sql = require('mssql');

async function getAnnouncements() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query("select * from Announcement")
        return result.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

async function getAnnouncement(Id) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('input_parameter', sql.Int, Id)
        .query("select * from Announcement where Id = @input_parameter")
        return result.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

module.exports = {
    getAnnouncements: getAnnouncements,
    getAnnouncement: getAnnouncement
}