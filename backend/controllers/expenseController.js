const Expense = require('../models/Expense');

// Add a new expense
exports.addExpense = async (req, res) => {
    try{
        const{title,amount, ctegory, date} = req.body;

        const expense = await Expense.create({
            title,
            amount,
            category,
            date,
            user: req.user._id
        });

        res.status(201).json(expense);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

//Get user expenses
exports.getExpenses = async(req, res) => {
    try{
        const expenses = await Expense.find({user: req.user._id}).sort({date: -1});
        res.json(expenses);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

//Update Expense
exports.updateExpense = async(req, res) => {
    try{
        const expense = await Expense.findById(req.params.id);
        if(!expense){
            return res.status(404).json({message: 'Expense not found'});
        }

        if(expense.user.toString() !== req.user._id.toString()){
            return res.status(401).json({message: 'Not authorized'});
        }

        expense.title = req.body.title || expense.title;
        expense.amount = req.body.amount || expense.amount;
        expense.category = req.boy.category || expense.category;
        expense.date = req.body.date || expense.date;

        const updatedExpense = await expense.save();
        res.json(updatedExpense);
    } catch(error){
        res.status(500).json({message: error.mesage});
    }
};

//Delete Expense
exports.deleteExpense = async(req, res) => {
    try{
        const expense = await Expense.findById(req.params.id);

        if(!expense){
            return res.status(404).json({message: 'Expense not found'});
        }
        if(expense.user.toString() !== req.user._id.toString()){
            return res.status(401).json({message: 'Not authorized'});
        }
        await expense.deleteOne();
        res.json({message: 'Expense removed'});

    
    } catch(error){
        res.status(500).json({message: error.message});
    }
};