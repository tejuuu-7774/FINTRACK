import Transaction from "../models/Transaction.js";

// Get dashboard summary
export const getDashboardSummary = async (req, res) => {
  try {
    const userId = req.user._id;

    // total income
    const incomeResult = await Transaction.aggregate([
      { $match: { createdBy: userId, type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalIncome = incomeResult[0]?.total || 0;

    // total expense
    const expenseResult = await Transaction.aggregate([
      { $match: { createdBy: userId, type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalExpense = expenseResult[0]?.total || 0;

    // net balance
    const netBalance = totalIncome - totalExpense;

    // category-wise breakdown
    const categoryBreakdown = await Transaction.aggregate([
      { $match: { createdBy: userId } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    // recent transactions
    const recentTransactions = await Transaction.find({
      createdBy: userId,
    })
      .sort({ date: -1 })
      .limit(5);

    res.json({
      totalIncome,
      totalExpense,
      netBalance,
      categoryBreakdown,
      recentTransactions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};