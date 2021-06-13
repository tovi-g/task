const router=require('express').Router();
const userController=require('../controllers/user.controller');
const ProductController=require('../controllers/product.controller');
const OrderController=require('../controllers/order.controller');
const {checkUserJwt} =require('../middlewares/checkPrimission')


router.post('/register',userController.newUser);
router.post('/login',userController.Login);


router.post('/addProduct',ProductController.newProduct);
router.get('/getAll',ProductController.getAllProducts);

router.post('/newOrder',checkUserJwt,OrderController.newOrder);

module.exports=router