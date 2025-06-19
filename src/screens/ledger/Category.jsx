import {Edit2, Trash2, X} from "lucide-react";
import React, {useEffect, useState} from "react";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

const api_url = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("budgetifyAccessToken")

const Category = ({setShowCategoryModal, showCategoryModal}) =>{
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({ name: "" });

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

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const config = {headers:{Authorization: `Bearer ${token}`}};
            category.id ? await axios.patch(`${api_url}/ledger/categories/${category.id}/`, category, config) : await axios.post(`${api_url}/ledger/categories/`, category, config)
            setTimeout(()=>{
                fetchCategories();
                setCategory({ name: ""});
                toast.success(category.id ? "Successfully updated category" : "Successfully added a new category");
            }, 1000)
        }catch (e) {
            console.log(e)
        }
    }

    const handleDelete = async (id) =>{
        try {
            if(confirm("Sure to delete category")){
                await axios.delete(`${api_url}/ledger/categories/${id}/`, {
                    headers:{Authorization: `Bearer ${token}`}
                });
                setTimeout(()=>{
                    fetchCategories();
                    toast.success("Successfully deleted category!");
                }, 1000)
            }
        }catch (e) {
            toast.error("Try again later.");
            console.log(e);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return(
        <div className="fixed inset-0 bg-red-300/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Toaster />
            <div className="bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Manage Categories</h2>
                    <button
                        onClick={() => {
                            setShowCategoryModal(!showCategoryModal);
                        }}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form className="mb-6 p-4 bg-red-200/50 rounded-xl" onSubmit={(e) => handleSubmit(e)}>
                    <h3 className="text-lg font-medium mb-4">
                        {category.id? "Update Category" : "Add New Category"}
                    </h3>

                    <div className="grid gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">{category.id? "Update name" : "Category name *"}</label>
                            <input
                                type="text"
                                value={category.name}
                                onChange={(e) => setCategory({...category, name: e.target.value})}
                                className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                                placeholder="Category name"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 shadow-lg text-white py-2 rounded-lg font-medium"
                        >
                            {category.id? "Update " : "Add "}
                            Category
                        </button>

                        <button
                            type="button"
                            className="px-4 py-2 bg-slate-600 text-white rounded-lg"
                            onClick={() => setCategory({name: "", id: ""})}
                        >
                            Cancel
                        </button>
                    </div>
                </form>

                <div className="space-y-2">
                    <h3 className="text-lg font-medium mb-4">Existing Categories</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {categories.map((category) => (
                            <div key={category.id} className="flex items-center justify-between p-3 bg-black/10 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <span className="font-medium">{category.name}</span>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setCategory(category)}
                                        className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" onClick={() => handleDelete(category.id)}/>
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;