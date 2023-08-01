const memberDAO = require("../../database/member/member_dao");

const getList = async () => {
    const result = await memberDAO.getList();
    console.log("service getList: "+result);
    return result.rows;
}
const insert = async(body) =>{
    const result = await memberDAO.insert(body);
    console.log("service insert =>", result);
    let msg ="", url="";
    if(result==0){
        msg="문제발생";
        url="/member/register_form";
    }else{
        msg="등록 성공";
        url="/member/list";
    }
    const msgPack = getMessage(msg, url);
    return msgPack;
}
const getMessage =(msg,url)=>{
    return `<script>alert("${msg}"); location.href="${url}"; </script>`;
}
const getMember = (mName) =>{
    return memberDAO.getMember(mName);
}
const modify = async (body) =>{
    const result = await memberDAO.modify(body);
    let msg = "", url="";
    if(result==0){
        msg="문제발생";
        url="/member/modify_form?id="+body.id;
    }else{
        msg="수정되었습니다";
        url="/member/info"+body.id; //
    }
    return getMessage(msg,url);
}
module.exports = {modify, getMember, insert, getList};