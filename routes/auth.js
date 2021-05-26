const router = require('express').Router();
const User = require('../model/User');
const bodyParser = require('body-parser');
const Joi = require('joi');

const schema = {
    name: Joi.string().min(6).max(30).required(),
    email: Joi.string().min(6).max(30).required(),
    password: Joi.string().min(6).required(),
}

router.post('/register', async (req, res)=>{
    //lets validate user
    // const validation = Joi.validate(req.body, schema)
    // res.send(validation)
    // console.log(validation);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    });
    // console.log('user', user);
    try {
        const savedUser = await user.save();
        console.log(`saved User: ${savedUser}`);
        res.send(savedUser);
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;