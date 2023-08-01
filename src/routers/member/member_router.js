const router = require("express").Router();

const memberCtrl = require("../../controller/member/member_ctrl");

router.get("/", (req,res)=>{
    console.log("/member 연동");
    res.send("/member 연동");
})
router.get("/list", memberCtrl.list);
router.get("/register_form", memberCtrl.registerForm);

router.get("/login", memberCtrl.login);
router.get("/register_form", memberCtrl.registerForm);
router.post("/register", memberCtrl.register);
router.get("/info", memberCtrl.info);
router.get("/modify_form", memberCtrl.modify_form);
router.get("/modify", memberCtrl.modify);



module.exports = router;