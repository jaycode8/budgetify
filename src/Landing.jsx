import React from 'react';
import { ArrowRight, DollarSign, TrendingUp, PieChart, Shield } from 'lucide-react';
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">

            <header className="border-b border-gray-100 bg-black/10 sticky top-0 left-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-1">
                        <a href="/" className="flex items-center">
                            <img src="/images/logo.png" alt="Budgetify Logo" className="h-16 w-auto" />
                        </a>
                        <div className="flex items-center space-x-4">
                            <Link to="/signin" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Sign In
                            </Link>
                            <Link to="/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Take Control of Your
                            <span className="text-red-600 block">Monthly Budget</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Track your expenses, monitor your spending habits, and achieve your financial goals with Budgetify's simple and intuitive budgeting tools.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Everything you need to manage your funds
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Simple, powerful tools to help you understand where your funds goes and make better financial decisions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expense Tracking</h3>
                            <p className="text-gray-600">
                                Log and categorize every expense to see exactly where your money goes each month.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <PieChart className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Reports</h3>
                            <p className="text-gray-600">
                                Beautiful charts and graphs that make understanding your spending patterns effortless.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Budget Goals</h3>
                            <p className="text-gray-600">
                                Set monthly budgets for different categories and track your progress in real-time.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
                            <p className="text-gray-600">
                                Your financial data is encrypted and secure. We never share your personal information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Ready to take control of your finances?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join thousands of users who have already transformed their financial habits with Budgetify.
                    </p>
                    <Link to="/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center">
                        Create Your Free Account
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <a href="/" className="flex items-center mb-4 md:mb-0">
                            <img src="/images/logo.png" alt="Budgetify Logo" className="h-8 w-auto mr-3" />
                            <span className="text-xl font-semibold">Budgetify</span>
                        </a>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                        <p>&copy; {new Date().getFullYear()} Budgetify. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;