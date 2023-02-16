const db = require('./db');
const helper = require('../helper');
const config = require('../config');
async function getMultiple(page = 1) {//1 will only render 1-10 in list 2 will render from 10-20
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT address FROM wallet LIMIT ${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}

module.exports = {
    getMultiple,
}