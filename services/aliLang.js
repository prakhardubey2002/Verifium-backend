const db = require('./db');
const helper = require('../helper');
const config = require('../config');
async function getMultiple(page = 1) {//1 will only render 1-10 in list 2 will render from 10-20
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT address FROM wallet `
    );
    const data = helper.emptyOrRows(rows);
    // const meta = { page };

    return {
        data,
        // meta
    }
}
async function create(data) {
    const result = await db.query(
        `INSERT INTO wallet (address) 
      VALUES 
      ("${data.isAddress}")`
    );
    let message = `Error in creating Wallet address for ${data.isAddress} `;

  if (result.affectedRows) {
    message = `Wallet address created successfully for ${data.isAddress}`;
  }

  return {message};
}
async function deletewallet(address){
    const a =address.toString();
    const result = await db.query(
        `DELETE FROM wallet  WHERE address='${a}'`
    )
    let message = `Error in delete Wallet address for ${a}`;

    if (result.affectedRows) {
      message = `Wallet address deleted successfully for ${a}`;
    }
  
    return {message};
}
module.exports = {
    getMultiple,
    create,
    deletewallet
}