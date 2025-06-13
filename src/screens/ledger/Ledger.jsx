import React, { useState } from 'react';
import { Plus, Minus, Settings, Edit2, Trash2, X, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import Category from "./Category.jsx";
import Types from "./Types.jsx";

const Ledger = () => {
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showTypeModal, setShowTypeModal] = useState(false);
    const [showTransactionForm, setShowTransactionForm] = useState(false);

    return (
        <div className="min-h-dvh bg-gradient-to-br from-red-50 via-white to-red-50 p-4">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-3">
                        Budgetify
                    </h1>
                    <p className="">Your personal finance ledger</p>
                </div>

                <div className="flex flex-wrap gap-4 mb-8 justify-end">
                    <button
                        onClick={() => setShowTypeModal(!showTypeModal)}
                        className="flex items-center gap-2 border border-red-600 py-3 px-4 rounded-lg text-red-600 font-semibold hover:bg-red-600 hover:text-white transition duration-200"
                    >
                        <Settings className="w-5 h-5" />
                        Manage Types
                    </button>

                    <button
                        onClick={() => setShowCategoryModal(!showCategoryModal)}
                        className="flex items-center gap-2 border border-red-600 py-3 px-4 rounded-lg text-red-600 font-semibold hover:bg-red-600 hover:text-white transition duration-200"
                    >
                        <Settings className="w-5 h-5" />
                        Manage Categories
                    </button>

                    <button
                        onClick={() => setShowTransactionForm(true)}
                        className="flex items-center gap-2 bg-red-600 py-3 px-4 rounded-lg text-white font-semibold"
                    >
                        <Plus className="w-5 h-5" />
                        Add Transaction
                    </button>
                </div>

                <div className="bg-red-600/30 backdrop-blur-lg rounded-lg border overflow-hidden">
                    <div className="p-6 border-b-2 border-white/80">
                        <h2 className="text-xl font-semibold">Recent Transactions</h2>
                    </div>

                    <div className="divide-y divide-white/60">
                        {[].length === 0 ? (
                            <div className="p-8 text-center">
                                No transactions yet. Add your first transaction to get started!
                            </div>
                        ) : (
                            [].map((transaction) => {
                                return (
                                    <div key={transaction.id} className="p-6 hover:bg-white/5 transition-colors">

                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                {showTransactionForm && (
                    <div></div>
                )}

                {showTypeModal && (
                    <Types setShowTypeModal={setShowTypeModal} showTypeModal={showTypeModal}/>
                )}

                {showCategoryModal && (
                    <Category setShowCategoryModal={setShowCategoryModal} showCategoryModal={showCategoryModal}/>
                )}
            </div>
        </div>
    );
};

export default Ledger;