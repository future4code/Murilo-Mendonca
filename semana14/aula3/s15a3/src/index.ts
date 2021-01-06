import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app = express()

app.use(express.json())
app.use(cors())

// ENDPOINT 1:

app.get("/countries/all", (req: Request, res: Response) => {
    const result = countries.map(
        country => ({
            id: country.id,
            name: country.name
        })
    )
    res.status(200).send(result)
})

// ENDPOINT 2:

app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(country =>
        country.id === Number(req.params.id)
    )
    if (result) {
        res.status(200)
            .send(result)
    } else {
        res.status(404)
            .send("Country not found.")
    }
})

// ENDPOINT 3:

app.get("/countries/search", (req: Request, res: Response) => {

})

// ENDPOINT 4:

app.put("/countries/edit/:id", (req: Request, res: Response) => {
    const result = countries.findIndex(
        country => country.id === Number(req.params.id)
    )

    countries[result].name = req.body.name
    countries[result].capital = req.body.capital

    if (result) {
        res.status(200)
            .send(req.body)
    } else {
        res.status(404)
            .send("Not found")
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})