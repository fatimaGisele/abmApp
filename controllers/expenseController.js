
const Expenses = require('./../models/expense');


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


module.exports = {addTo, substractFrom};