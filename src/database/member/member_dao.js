const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");
oracledb.autoCommit = true;

const getList = async () => {
    oracledb.outFormat = oracledb.OBJECT;
    let con = await oracledb.getConnection(dbConfig);
    let result = await con.execute("select * from members02");
    await con.close();
    console.log("dao detList: "+result);
    return result;
}
const insert = async (body)=>{
    let con = await oracledb.getConnection(dbConfig);
    const sql = `insert into members02(id, pwd, name, addr) values(:id, :pwd, :name, :addr)`;
    let result =0;
    try{
        result = await con.execute(sql,body);
        console.log("dao insert: ", result);
    }catch(err){
        console.log(err);
    }
    return result;
}
const getMember = async (mName) =>{
    const sql = "select * from members02 where id=:id";
    let con = await oracledb.getConnection(dbConfig);
    let member;
    try{
        member = await con.execute(sql, mName);
        console.log("dao getmemeber: ", member);
    }catch(err){
        console.log(err);
    }
    console.log("22222", member);
    return member.rows[0];
}
const modify = async(bidy) =>{
    const sql = `update members02 set pwd='${body.pwd}', name='${body.name}', addr='${body.addr}'`;
    let con = await oracledb.getConnection(dbConfig);
    let result=0;
    try{
        result=await con.execute(sql);
    }catch(err){
        console.log(err);
    }
    return result;
}
module.exports = {modify, getMember, insert, getList};