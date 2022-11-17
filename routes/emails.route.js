let Email = require("../models/email.model").Email;
let uniqid = require("uniqid");
let express = require("express");
let router = express.Router();
let authMiddleware = require("../middleware/auth");

router.get('/', authMiddleware, async (req, resp) => {
    resp.send(await Email.find());
});

router.post('/', async (req, resp) => {
    let reqBoby = req.body;
    let newEmail = new Email({
        id: uniqid(),
        name: reqBoby.name,
        text: reqBoby.text,
        email: reqBoby.email,
        date: new Date()
    });
    await newEmail.save();
    resp.send("Accepted");
});

router.delete("/:id", authMiddleware, async (req, resp) => {
    await Email.deleteOne({id: req.params.id});
    resp.send("Deleted");
});

module.exports = router;
