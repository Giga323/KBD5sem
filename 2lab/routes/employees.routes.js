const Router = require("express")
const router = new Router()
const employeeController = require('../controller/employee.controller')

router.post('/employee', employeeController.createEmployee)
router.get('/employee', employeeController.getEmployees)
router.get('/employee/:id', employeeController.getEmployee)
router.put('/employee', employeeController.updateEmployee)
router.delete('/employee/:id', employeeController.deleteEmployee)

module.exports = router
