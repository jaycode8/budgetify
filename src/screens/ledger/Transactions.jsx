import {Edit2, Trash2, X} from "lucide-react";
import {Toaster} from "react-hot-toast";
import Expense from "./Expense.jsx";
import {useState} from "react";
import Income from "./Income.jsx";

const Transactions = ({setShowTransactionModal, showTransactionModal}) =>{
    const [toggleForm, setToggleForm] = useState(false);

    return(
        <div className="fixed inset-0 bg-red-300/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Toaster />
            <div className="bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                    <button className={`${toggleForm ? "bg-gradient-to-r from-red-600 to-red-700" : "bg-gradient-to-r from-green-600 to-green-700"} text-white font-bold p-2 rounded-md`} onClick={()=> setToggleForm(!toggleForm)}>{toggleForm? "Record Expense":"Record Income"}</button>
                    <button
                        onClick={() => {
                            setShowTransactionModal(!showTransactionModal);
                        }}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                {
                    toggleForm ? <Income/> : <Expense/>
                }
            </div>
        </div>
    )
}

export default Transactions;