import Transaction from "../models/Transaction.js";

//Creates a transaction
export const createTransaction = async (req, res) => {
  try {
    const { amount, type, category, date, notes } = req.body;
      if (!amount || !type || !category) {
        return res.status(400).json({
          message: "Amount, type and category are required",
        });
      }

      if (!["income", "expense"].includes(type)) {
        return res.status(400).json({
          message: "Type must be income or expense",
        });
      }
    const transaction = await Transaction.create({
      amount,
      type,
      category,
      date,
      notes,
      createdBy: req.user._id,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Get all transactions (with filters)
export const getTransactions = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    let filter = {
      createdBy: req.user._id,
    };

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }

    const transactions = await Transaction.find(filter).sort({ date: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a transaction
export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    // ensure user owns it for security
    if (transaction.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const updated = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete transaction
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    // ensure user owns it for the security
    if (transaction.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await transaction.deleteOne();

    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};