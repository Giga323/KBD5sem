const db = require('../database.js')

class TechInspectionController {

    async createTechInspection(req, res) {
        const {data, cause, result, equipmentId} = req.body
        const newTechInspection = db.query(
            'insert into tech_inspection (data, cause, result, equipmentId) values ($1, $2, $3, $4)',
            [data, cause, result, equipmentId]
        )
        res.json(newTechInspection)
    }

    async getTechInspections(req, res) {
        const allTechInspections = await db.query('select * from tech_inspection')
        res.json(allTechInspections)
    }

    async getTechInspection(req, res) {
        const id = req.params.id
        const techInspection = await db.query('select * from tech_inspection where id = $1', [id])
        res.json(techInspection['rows'][0])
    }

    async updateTechInspection(req, res) {
        const {id, data, cause, result, equipmentId} = req.body
        const newTechInspection = await db.query(
            'update tech_inspection set data = $2, cause = $3, result = $4, equipmentId = $5 where id = $1',
            [id, data, cause, result, equipmentId]
        )
        res.json(newTechInspection)
    }

    async deleteTechInspection(req, res) {
        const id = req.params.id
        await db.query(
            'delete from tech_inspection where id = $1',
            [id]
        )
        res.json("Tech inspection was deleted")
    }

}

module.exports = new TechInspectionController()