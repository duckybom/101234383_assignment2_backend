const express = require('express');
const employeeModel = require('../models/employee');
const app = express()


app.get('/api/v1/employees', async (req, res) => {
    const employees = await employeeModel.find({})
    try {
        res.status(200).send(employees)
    } catch (err) {
        throw res.status(500).send(err)
    }
})

app.post('/api/v1/employees', async (req, res) => {
  const employee = new employeeModel(req.body)
  try {
      await employee.save()
      res.status(201).send(employee)
  } catch (err) {
      res.status(500).send(err)
  }
})

app.get('/api/v1/employees/:id', async (req, res) => {
    try {
        const employee = await employeeModel.findById(req.params.id)
        res.status(200).send(employee)  
    } catch (err) {
        res.status(500).send("No Employee with Id found")
    }
})

app.put('/api/v1/employees/:id', async (req, res) => {
    try {
        await employeeModel.findByIdAndUpdate(req.params.id, req.body)
        employee = await employeeModel.save()
        res.status(200).send(employee)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.delete('/api/v1/employees/:id', async (req, res) => {
    try {
        const employee = await employeeModel.findByIdAndDelete(req.params.id)
        if (!employee) res.status(404).send("No Employee found")
        res.status(200).send("Employee is deleted.")
    } catch (err) {  
        res.status(500).send("No Employee with Id found")
    }
})

module.exports = app