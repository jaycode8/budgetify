import {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";

const api_url = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("budgetifyAccessToken")

const Expense = () =>{
    const [expense, setExpense] = useState({ title: "", amount: 0, category:"", budget_type:"", description: "" });
    const [categories, setCategories] = useState([]);
    const [types, setTypes] = useState([]);

    const fetchCategories = async () =>{
        try {
            const response = await axios.get(`${api_url}/ledger/categories/`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setCategories(response.data)
        }catch (e) {
            console.log(e)
        }
    };

    const fetchTypes = async () =>{
        try {
            const response = await axios.get(`${api_url}/ledger/types/`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setTypes(response.data)
        }catch (e) {
            console.log(e)
        }
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const config = {headers:{Authorization: `Bearer ${token}`}};
            await axios.post(`${api_url}/ledger/expenses/`, expense, config)
            setTimeout(()=>{
                setExpense({ title: "", amount: 0, category:"", budget_type:"", description: "" });
                toast.success("Record saved successfully");

            }, 1000)
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCategories();
        fetchTypes();
    }, []);

    return(
        <form className="mb-6 p-4 bg-red-200/50 rounded-xl" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="text-lg font-medium mb-4">
                Record Expense
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Expense Title</label>
                    <input
                        type="text"
                        value={expense.title}
                        onChange={(e) => setExpense({...expense, title: e.target.value})}
                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                        placeholder="Category title"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Amount Spent</label>
                    <input
                        type="number"
                        value={expense.amount}
                        onChange={(e) => setExpense({...expense, amount: e.target.value})}
                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                        placeholder="Amount Spent"
                        required
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Expense Category</label>
                    <select
                        name="category"
                        onChange={(e) => setExpense({...expense, category: e.target.value})}
                        className="block cursor-pointer w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                    >
                        <option value="">Select Category</option>
                        {
                            categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Expense Type</label>
                    <select
                        name="budget_type"
                        className="block cursor-pointer w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                        onChange={(e) => setExpense({...expense, budget_type: e.target.value})}
                    >
                        <option value="">Select Budget Type</option>
                        {
                            types.map((type) => (
                                <option key={type.id} value={type.id}>{type.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                    className="block resize-none w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                    name="description"
                    rows={5}
                    onChange={(e) => setExpense({...expense, description: e.target.value})}
                ></textarea>
            </div>

            <div className="flex gap-2 mt-4">
                <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 shadow-lg text-white py-2 rounded-lg font-medium"
                >
                    Record Expense
                </button>

                <button
                    type="button"
                    className="px-4 py-2 bg-slate-600 text-white rounded-lg"
                    onClick={() => setExpense({title: "", amount: 0, category:"", budget_type:"", description: ""})}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default Expense;