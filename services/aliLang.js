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
async function  adddata(data) {
  //use Json format in postman or else data will be undefined
  const result = await db.query(
      `INSERT INTO feedback_table  (name, institute_name, course_specialisation, feedback) 
    VALUES 
    ("${data.Name}","${data.insitutename}","${data.course}","${data.feedback}")`
  );
  let message = `Error in creating data ${data.Name}`;

if (result.affectedRows) {
  message = `Data Added successfully Welcome ${data.Name}`;
}

return {message};
}
async function Show(page = 1) {//1 will only render 1-10 in list 2 will render from 10-20
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
      `SELECT * FROM feedback_table `
  );
  const data = helper.emptyOrRows(rows);
  // const meta = { page };

  return {
      data,
      // meta
  }
}
module.exports = {
    getMultiple,
    create,
    deletewallet,
    adddata,
    Show,
}