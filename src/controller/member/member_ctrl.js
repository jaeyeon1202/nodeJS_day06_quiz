const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");
oracledb.autoCommit = true;

const ser = require("../../service/member/member_service");

const list = async(req,res) =>{
    const list = await ser.getList();
    console.log("controller list: ", list);
    res.render("member/list", {list});
}

const login = (req,res) =>{
    res.render("member/login");
}

const registerForm = (req,res) =>{
    res.render("member/register_form");
}
const register = async (req,res) =>{
    console.log("register", req.body);
    let msg = await ser.insert(req.body);
    res.send(msg);
}
const info = async (req,res) =>{
    console.log("123",req.query);
    const member = await ser.getMember(req.query);
    console.log("리스트", member);
    res.render("member/info", {member});
}
const modify_form = async(req,res)=>{
    console.log("ctrl modify(쿼리): ", req.query);
    console.log("ctrl modify(파람스): ", req.params);
    console.log("ctrl modify(바디): ", req.body);

    const member = await ser.getMember(req.query);
    console.log("ctrl modify(겟멤버): ", member);

    res.render("member/modify_form", {member});
}
const modify = async (req,res) =>{
    console.log("컨트롤러 모바파이: ",req.body);
    const msg = await ser.modify(req.body);
    res.send(msg);
}

module.exports ={modify_form, modify, info, register, login, registerForm, list};