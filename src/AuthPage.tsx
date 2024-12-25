import { Separator } from "./components/ui/separator";
import logo from './assets/pie.png';
import logo2 from './assets/logo.png';
import { Code2 } from "lucide-react";
import { FaBitbucket, FaGithub, FaGitlab } from 'react-icons/fa';
import { VscAzureDevops } from 'react-icons/vsc';
import { GoKey } from 'react-icons/go';
import { useState } from "react";

const AuthPage = () => {
    const [activeTab, setActiveTab] = useState("saas");

    return (
        <div className="relative flex flex-row bg-background w-screen h-screen">
            <div className="relative lg:grid lg:grid-cols-2 w-full">
                {/* Left Side */}
                <div className="bg-white shadow-xl justify-center hidden lg:flex">
                    <div className="absolute bottom-0 left-0">
                        <img src={logo2} className="h-72" alt="Logo2" />
                    </div>

                    {/* First Card */}
                    <div className="w-1/2 relative flex items-center justify-center min-h-screen">
                        <div className="w-full bg-white shadow-xl rounded-3xl -mt-32">
                            <h3 className="text-xl font-semibold tracking-tight p-6">
                                AI to Detect & Autofix Bad Code
                            </h3>
                            <Separator className="my-2" />
                            <div className="flex justify-between p-6 gap-4">
                                <div>
                                    <p className="text-xl font-bold">30+</p>
                                    <p className="text-gray-600 text-sm">Language Support</p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold">10K+</p>
                                    <p className="text-gray-600 text-sm">Developers</p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold">100K+</p>
                                    <p className="text-gray-600 text-sm">Hours Saved</p>
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="w-full flex justify-end absolute mt-44 ml-12">
                            <div className="w-60 bg-white shadow-xl rounded-3xl p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img src={logo} className="w-12 h-12 rounded-full" alt="Logo" />
                                    </div>
                                    <div className="items-center">
                                        <div className="text-blue-600 text-md font-bold">
                                            <span className="mr-1">↑ 14%</span>
                                        </div>
                                        <div className="text-sm">This Week</div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-black-600 text-md">Issues Fixed</p>
                                    <p className="text-3xl font-bold">500K+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full bg-gray-50 flex flex-col lg:items-center justify-center">
                    <div className="w-full flex items-center justify-center mt-14">
                        <div className="w-11/12 rounded-xl shadow-xl bg-white">
                            <div className="text-center pt-6">
                                <div className="flex justify-center gap-2 text-2xl">
                                    <Code2 className="w-8 h-8" />
                                    CodeAnt AI
                                </div>
                                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mt-8">
                                    Welcome to CodeAnt AI
                                </h1>
                            </div>

                            {/* Tabs Section */}
                            <div className="p-6">
                                <div className="flex justify-center">
                                    <button
                                        className={`w-full text-xl font-bold px-4 py-2 ${activeTab === "saas" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
                                        onClick={() => setActiveTab("saas")}
                                    >
                                        SAAS
                                    </button>
                                    <button
                                        className={`w-full text-xl font-bold px-4 py-2 ${activeTab === "self-hosted" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
                                        onClick={() => setActiveTab("self-hosted")}
                                    >
                                        Self Hosted
                                    </button>
                                </div>
                                <Separator className="my-6" />

                                {/* Tabs Content */}
                                {activeTab === "saas" && (
                                    <div className="w-full flex justify-center pb-6">
                                        <div className="lg:w-3/4 w-full flex flex-col justify-center gap-4">
                                            <button className="w-full flex justify-center gap-4 px-4 py-4 text-xl font-semibold text-gray-700 border border-gray-300 rounded-md bg-white shadow-md hover:bg-gray-100">
                                                <FaGithub className="text-2xl" />
                                                Sign in with Github
                                            </button>
                                            <button className="w-full flex justify-center gap-4 px-4 py-4 text-xl font-semibold text-gray-700 border border-gray-300 rounded-md bg-white shadow-md hover:bg-gray-100">
                                                <FaBitbucket className="text-2xl text-blue-500" />
                                                Sign in with Bitbucket
                                            </button>
                                            <button className="w-full flex justify-center gap-4 px-4 py-4 text-xl font-semibold text-gray-700 border border-gray-300 rounded-md bg-white shadow-md hover:bg-gray-100">
                                                <VscAzureDevops className="text-2xl text-blue-600" />
                                                Sign in with Azure Devops
                                            </button>
                                            <button className="w-full flex justify-center gap-4 px-4 py-4 text-xl font-semibold text-gray-700 border border-gray-300 rounded-md bg-white shadow-md hover:bg-gray-100">
                                                <FaGitlab className="text-2xl text-orange-600" />
                                                Sign in with GitLab
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "self-hosted" && (
                                    <div className="w-full flex justify-center pb-6">
                                        <div className="lg:w-3/4 w-full flex flex-col justify-center gap-4">
                                            <button className="w-full flex justify-center gap-4 px-4 py-4 text-xl font-semibold text-gray-700 border border-gray-300 rounded-md bg-white shadow-md hover:bg-gray-100">
                                                <FaGitlab className="text-2xl text-orange-600" />
                                                Self Hosted GitLab
                                            </button>
                                            <button className="w-full flex justify-center gap-4 px-4 py-4 text-xl font-semibold text-gray-700 border border-gray-300 rounded-md bg-white shadow-md hover:bg-gray-100">
                                                <GoKey className="text-2xl" />
                                                Sign in with SSO
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mb-10 mt-6 text-center text-sm text-gray-500">
                        By signing up you agree to the{" "}
                        <a href="/privacy-policy" className="underline font-medium">
                            Privacy Policy
                        </a>
                        .
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
