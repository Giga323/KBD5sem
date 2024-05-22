const Router = require("express")
const router = new Router()
const techInspectionController = require('../controller/techInspection.controller')

router.post('/techInspection', techInspectionController.createTechInspection)
router.get('/techInspection', techInspectionController.getTechInspections)
router.get('/techInspection/:id', techInspectionController.getTechInspection)
router.put('/techInspection', techInspectionController.updateTechInspection)
router.delete('/techInspection/:id', techInspectionController.deleteTechInspection)

module.exports = router
