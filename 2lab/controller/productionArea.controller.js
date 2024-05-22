const db = require('../database')

class ProductionAreaController {

    async createProductionArea(req, res) {
        const {name} = req.body
        const newProductionArea = db.query(
            'insert into production_area (name) values ($1)', [name]
        )
        res.json(newProductionArea)
    }

    async getProductionAreas(req, res) {
        const allProductionAreas = await db.query('select * from production_area')
        res.json(allProductionAreas)
    }

    async getProductionArea(req, res) {
        const id = req.params.id
        const productionArea = await db.query('select * from production_area where id = $1', [id])
        res.json(productionArea['rows'][0])
    }

    async updateProductionArea(req, res) {
        const {id, name} = req.body
        const newProductionArea = await db.query(
            'update production_area set name = $1 where id = $2',
            [name, id]
        )
        res.json(newProductionArea)
    }

    async deleteProductionArea(req, res) {
        const id = req.params.id
        await db.query(
            'delete from production_area where id = $1',
            [id]
        )
        res.json("Production area was deleted")
    }

}

module.exports = new ProductionAreaController()