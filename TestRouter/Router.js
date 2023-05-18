const Demo = require('../Controller/Demo')
const hello = require('../Controller/Hello')
const express=require('express')




const router=express.Router()
router.route('/demo').get(Demo)
router.route('/hello').get(hello)



module.exports=router 