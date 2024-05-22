const db = require('../database')

class EmployeeController {

    async createEmployee(req, res) {
        const {jobTitle, fullName} = req.body
        const newEmployee = await db.query(
            `insert into employee (job_title, full_name) values ($1, $2)`,
            [jobTitle, fullName])
        res.json(newEmployee)
    }

    async getEmployees(req, res) {
        const employees = await db.query('select * from employee')
        res.json(employees)
    }

    async getEmployee(req, res) {
        const id = req.params.id
        const employee = await db.query('select * from employee where id = $1', [id])
        res.json(employee['rows'][0])
    }

    async updateEmployee(req, res) {
        const {id, jobTitle, fullName} = req.body
        const newEmployee = await db.query(
            'update employee set job_title = $1, full_name = $2 where id = $3',
            [jobTitle, fullName, id]
        )
        res.json(newEmployee)
    }

    async deleteEmployee(req, res) {
        const id = req.params.id
        await db.query(
            'delete from employee where id = $1',
            [id]
        )
        res.json("Employee was deleted")
    }

}

module.exports = new EmployeeController()