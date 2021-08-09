const router = require('express').Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser
} = require('../controllers/users');

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/create-user", createUser);
router.put("/:id", updateUser);

module.exports = router;