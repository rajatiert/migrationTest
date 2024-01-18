import express from 'express';
import { getMenu , getMenuById} from '../controller/menuItemControllers.js';
import { getMenuIds } from '../controller/menu.js';
const router = express.Router();

router.get('/',(req, res) =>{res.send("Home Route");});
router.get('/getMenu',getMenuIds);
router.get('/getAllMenu',getMenu);
router.get('/getMenu/id=:id',getMenuById);

export default router;