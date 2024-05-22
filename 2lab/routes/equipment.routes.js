const Router = require("express")
const router = new Router()
const equipmentController = require('../controller/equipment.controller')

router.post('/equipment', equipmentController.createEquipment)
router.get('/equipment', equipmentController.getAllEquipment)
router.get('/equipment/:id', equipmentController.getEquipment)
router.put('/equipment', equipmentController.updateEquipment)
router.delete('/equipment/:id', equipmentController.deleteEquipment)

module.exports = router
