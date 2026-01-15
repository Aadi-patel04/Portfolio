import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h3 className="text-sm text-gray-500">Call</h3>
                        <a href="tel:8299113966" className="block text-lg font-medium text-gray-900">8299113966</a>

                        <h3 className="mt-4 text-sm text-gray-500">Email</h3>
                        <a href="mailto:aadipatel0042@gmail.com" className="block text-lg font-medium text-gray-900">aadipatel0042@gmail.com</a>
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-500">Details</h3>
                        <ul className="mt-2 flex gap-4">
                            <li>
                                <a href="#" aria-label="LeetCode" className="text-gray-600 hover:text-blue-600">LeetCode</a>
                            </li>
                            <li>
                                <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-sky-500">Twitter</a>
                            </li>
                            <li>
                                <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-700">LinkedIn</a>
                            </li>
                            <li>
                                <a href="#" aria-label="Github" className="text-gray-600 hover:text-pink-500">Github</a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Aditya Patel. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
