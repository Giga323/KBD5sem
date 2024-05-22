const db = require('../database')

class EquipmentController {

    async createEquipment(req, res) {
        const {name} = req.body
        const newEquipment = db.query(
            'insert into equipment (name) values ($1)', [name]
        )
        res.json(newEquipment)
    }

    async getAllEquipment(req, res) {
        const allEquipment = await db.query('select * from equipment')
        res.json(allEquipment)
    }

    async getEquipment(req, res) {
        const id = req.params.id
        const equipment = await db.query('select * from equipment where id = $1', [id])
        res.json(equipment['rows'][0])
    }

    async updateEquipment(req, res) {
        const {id, name} = req.body
        const newEquipment = await db.query(
            'update equipment set name = $1 where id = $2',
            [name, id]
        )
        res.json(newEquipment)
    }

    async deleteEquipment(req, res) {
        const id = req.params.id
        await db.query(
            'delete from equipment where id = $1',
            [id]
        )
        res.json("Equipment was deleted")
    }

}

module.exports = new EquipmentController()