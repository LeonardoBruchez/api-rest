import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware"
import { ProductsController } from "../controllers/products-controller"

const productRoutes = Router()
const productsController = new ProductsController

productRoutes.get("/",productsController.index)

// Middleware local em uma rota específica.
productRoutes.post("/", myMiddleware,productsController.create)

export { productRoutes }