const express=require("express");
const pool=require("../pool.js");
const router=express.Router();

router.get("/login/:uname&:upwd",function(req,res){
    var $uname=req.params.uname;
    var $upwd=req.params.upwd;
    var sql="select uname,upwd from wjyh_user where uname=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        };
    });
});
module.exports=router;