import {Edit2, Trash2, X} from "lucide-react";
import React, {useEffect, useState} from "react";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

const api_url = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("budgetifyAccessToken")

const Types = ({setShowTypeModal, showTypeModal}) =>{
    const [types, setTypes] = useState([]);
    const [type, setType] = useState({ name: "", description: "" });

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
            type.slug ? await axios.patch(`${api_url}/ledger/types/${type.slug}/`, type, config) : await axios.post(`${api_url}/ledger/types/`, type, config)
            setTimeout(()=>{
                fetchTypes();
                setType({ name: "", slug:"", description: ""});
                toast.success(type.slug ? "Successfully updated type" : "Successfully added a new type");
            }, 1000)
        }catch (e) {
            console.log(e)
        }
    }

    const handleDelete = async (slugId) =>{
        try {
            if(confirm("Sure to delete type")){
                await axios.delete(`${api_url}/ledger/types/${slugId}/`, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                });
                setTimeout(()=>{
                    fetchTypes();
                    toast.success("Successfully deleted type!");
                }, 1000)
            }
        }catch (e) {
            toast.error("Try again later.");
            console.log(e);
        }
    }

    useEffect(() => {
        fetchTypes();
    }, []);

    return(
        <div className="fixed inset-0 bg-red-300/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Toaster />
            <div className="bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Manage types</h2>
                    <button
                        onClick={() => {
                            setShowTypeModal(!showTypeModal);
                        }}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form className="mb-6 p-4 bg-red-200/50 rounded-xl" onSubmit={(e) => handleSubmit(e)}>
                    <h3 className="text-lg font-medium mb-4">
                        {type.slug? "Update Type" : "Add New Type"}
                    </h3>

                    <div className="grid gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">{type.slug? "Update name" : "Name *"}</label>
                            <input
                                type="text"
                                value={type.name}
                                onChange={(e) => setType({...type, name: e.target.value})}
                                className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                                placeholder="Category name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">{type.slug? "Update description" : "Description *"}</label>
                            <textarea
                                value={type.description}
                                onChange={(e) => setType({...type, description: e.target.value})}
                                className="resize-none block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                                placeholder="Description"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 shadow-lg text-white py-2 rounded-lg font-medium"
                        >
                            {type.slug? "Update " : "Add "}
                            Type
                        </button>

                        <button
                            type="button"
                            className="px-4 py-2 bg-slate-600 text-white rounded-lg"
                            onClick={() => setType({name: "", slug: "", description: ""})}
                        >
                            Cancel
                        </button>
                    </div>
                </form>

                <div className="space-y-2">
                    <h3 className="text-lg font-medium mb-4">Existing types</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {types.map((type) => (
                            <div key={type.id} className="flex items-center justify-between p-3 relative bg-black/10 rounded-lg">
                                <div className="flex flex-col gap-1">
                                    <span className="font-medium">{type.name}</span>
                                    <span className="text-sm">{type.description}</span>
                                </div>

                                { !type.is_default &&
                                    <div className="flex gap-2 absolute top-1 right-1">
                                        <button
                                            onClick={() => setType(type)}
                                            className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" onClick={() => handleDelete(type.slug)}/>
                                        </button>
                                    </div>
                                }

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Types;