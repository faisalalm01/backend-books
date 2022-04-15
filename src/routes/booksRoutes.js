const booksRoutes = require ("express").Router();
const booksControllers = require("../controllers/booksControllers");
// const booksControllers = require("../controllers/booksControllers")
// const authMiddleware = require("../helpers/authMiddleware");

booksRoutes.get("/",
//  authMiddleware.checkLogin, 
booksControllers.getAllBooks);
booksRoutes.post("/",
// authMiddleware.checkLogin,
booksControllers.postBooks);
booksRoutes.get("/:id",booksControllers.getDataById);
booksRoutes.delete("/:id",
// authMiddleware.checkLogin,
booksControllers.deleteDataById);
booksRoutes.put("/:id",
// authMiddleware.checkLogin, 
booksControllers.putDataById);

module.exports = booksRoutes;
