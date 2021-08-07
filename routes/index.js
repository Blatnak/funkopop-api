const router = require("express").Router();
const usersRoutes = require("./users");
const funkosRoutes = require("./funkos");

router.use("/users", usersRoutes);
router.use("/funkos", funkosRoutes);

router.use("/", function(request, response) {
    return response.send("Welcome to the Funko checklist API")
});

module.exports = router;