
const Expenses = require('./../models/expense');

const create = async(req, res) =>{
    try {
        const expense = new Expenses(req.body);
        expense.user = req.id;
        const expenseData = await expense.save();
        res.sendStatus(201).json({message: 'tabla de gastos creada'});
    } catch (error) {
        
    }
    
}

const all = async(req, res) =>{
    try{
        let Expenses = await Expenses.findAll();
        res.json(Expenses);
    }catch(e){
        console.error(e);
    }
}

const addTo = async(req, res) => {
    try {
        const {amount} = req.body;
        let expenses= await Expenses.update(Expenses.amount.sum(amount), {
            where : {expenseID : req.params.id}
        });
        res.json({message:`todos los movimientos del usuario:${req.id}: ${expenses}`});
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

const substractFrom = async(req, res) =>{
    try {
        const {amount} = req.body;
        let expenses = await Expenses.update(amount = parseInt(Expenses.amount) - parseInt(amount), {
            where : {expenseID: req.params.id}
        });
        res.json(expenses);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

const deleteFrom = async(req, res) =>{
    try {
        let expenses = await Expenses.destroy({
            where : {expenseID : req.params.id}
        });
        res.json(expenses);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

const find = async(req, res) =>{
    try {
        let expenses = await Expenses.findOne({
            where : {expenseID : req.params.id}
        });
        res.json(expenses);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

module.exports = {create, all, addTo, substractFrom, deleteFrom, find};