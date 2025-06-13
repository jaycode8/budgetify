import React, { useState } from 'react';
import { Eye, EyeOff, Lock, ArrowRight, User, Mail, Phone, UserCheck } from 'lucide-react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const api_url = import.meta.env.VITE_API_URL;

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        username: '',
        email: '',
        phone_number: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await axios.post(`${api_url}/users/register/`, formData);

            setTimeout(() => {
                toast.success("User created successfully!");
            }, 1000)

            setTimeout(() => {
                navigate('/signin');
            }, 2500);
        }catch (e) {
            // console.log(Object.values(e.response.data)[0][0]);
            setTimeout(()=>{
                toast.error(e.status === 500 ? "Could not complete action. Try again later!" : Object.values(e.response.data)[0][0]);
            },1500)
        }finally {
            setTimeout(()=>{
                setIsLoading(false);
            },2000)
        }
    };

    return (
        <div className="min-h-dvh bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4">
            <Toaster />
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-12 text-center">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <UserCheck className="w-8 h-8 text-red-600" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-red-100">Join us and get started today</p>
                </div>

                <div className="px-8 py-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                    First Name *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        id="first_name"
                                        name="first_name"
                                        type="text"
                                        required
                                        value={formData.first_name}
                                        onChange={handleInputChange}
                                        className="block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                                        placeholder="First name"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="middle_name" className="block text-sm font-medium text-gray-700">
                                    Middle Name
                                </label>
                                <input
                                    id="middle_name"
                                    name="middle_name"
                                    type="text"
                                    value={formData.middle_name}
                                    onChange={handleInputChange}
                                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                                    placeholder="Middle name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                    Last Name *
                                </label>
                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    required
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white text-sm"
                                    placeholder="Last name"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                                    placeholder="Choose a username"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                                    Phone Number *
                                </label>
                                <div className="relative py-[0.12rem] border border-gray-300 rounded-lg bg-gray-50">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <PhoneInput
                                        id="phone_number"
                                        name="phone_number"
                                        defaultCountry="ke"
                                        value={formData.phone_number}
                                        onChange={(phone) =>
                                            setFormData({
                                                ...formData,
                                                phone_number: phone,
                                            })
                                        }
                                        className="block group w-full pl-10 pr-0 py-1 borders rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                                    placeholder="Create a strong password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                Password must be at least 8 characters long
                            </p>
                        </div>

                        <div className="flex items-start">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-0.5"
                            />
                            <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
                                I agree to the{' '}
                                <a href="#" className="text-red-600 hover:text-red-500 font-medium">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-red-600 hover:text-red-500 font-medium">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={handleSubmit}
                            className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-semibold transition ${
                                isLoading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-red-600 to-red-700 shadow-lg'
                            }`}
                        >
                            {isLoading ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Social Signup Buttons */}
                    <div className="relative my-8 hidden">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or sign up with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 hidden">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google
                        </button>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                            </svg>
                            Apple
                        </button>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/signin" className="font-medium text-red-600 hover:text-red-500 transition duration-200">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;