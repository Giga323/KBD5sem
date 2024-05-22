const express = require('express')
const employeeRouter = require('./routes/employees.routes.js')
const equipmentRouter = require('./routes/equipment.routes.js')
const techInspectionRouter = require('./routes/techInspections.routes.js')
const productionAreasRouter = require('./routes/productionAreas.routes.js')
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api/', employeeRouter)
app.use('/api/', equipmentRouter)
app.use('/api/', techInspectionRouter)
app.use('/api/', productionAreasRouter)



app.listen(PORT, () => console.log(`server started on port ${PORT}`))
