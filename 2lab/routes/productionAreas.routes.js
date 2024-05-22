const Router = require("express")
const router = new Router()
const productionAreasController = require('../controller/productionArea.controller')

router.post('/productionArea', productionAreasController.createProductionArea)
router.get('/productionArea', productionAreasController.getProductionAreas)
router.get('/productionArea/:id', productionAreasController.getProductionArea)
router.put('/productionArea', productionAreasController.updateProductionArea)
router.delete('/productionArea/:id', productionAreasController.deleteProductionArea)

module.exports = router
