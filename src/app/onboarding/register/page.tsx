"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    const [formData, setFormData] = useState<{
        fullName: string
        myKadNumber: string
        mobileNumber: string
        workLocation: string
        monthlyCommitment: string
    }>({
        fullName: '',
        myKadNumber: '',
        mobileNumber: '',
        workLocation: '',
        monthlyCommitment: '',
    })

    const [errors, setErrors] = useState<{
        fullName?: string
        mobileNumber?: string
        workLocation?: string
    }>({})

    const [bankStatement, setBankStatement] = useState(false)
    const [utilitiesStatement, setUtilitiesStatement] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: undefined,
            })
        }
    }

    const validateForm = () => {
        const newErrors: typeof errors = {}

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required'
        }
        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile number is required'
        }
        if (!formData.workLocation.trim()) {
            newErrors.workLocation = 'Work location is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = () => {
        if (validateForm()) {
            const dataToStore = {
                ...formData,
            }
            localStorage.setItem('userData', JSON.stringify(dataToStore))
            router.push('/onboarding/loadingRegister')
        }
    }

    return (
        <div className="min-h-screen bg-white px-8 py-10">
            <div className="max-w-md mx-auto space-y-6">
                <h1 className="text-2xl font-bold text-center mb-8">
                    Let`s get you started!
                </h1>

                <div className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full name as per MyKad"
                            className={`w-full px-4 py-3 rounded-lg border ${errors.fullName
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-purple-100 focus:border-purple-500'
                                } focus:outline-none`}
                            onChange={handleInputChange}
                        />
                        {errors.fullName && (
                            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                        )}
                    </div>

                    <input
                        type="text"
                        name="myKadNumber"
                        placeholder="MyKad number"
                        className="w-full px-4 py-3 rounded-lg border border-purple-100 focus:outline-none focus:border-purple-500"
                        onChange={handleInputChange}
                    />

                    <div>
                        <input
                            type="tel"
                            name="mobileNumber"
                            placeholder="Mobile number"
                            className={`w-full px-4 py-3 rounded-lg border ${errors.mobileNumber
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-purple-100 focus:border-purple-500'
                                } focus:outline-none`}
                            onChange={handleInputChange}
                        />
                        {errors.mobileNumber && (
                            <p className="mt-1 text-sm text-red-500">{errors.mobileNumber}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="workLocation"
                            placeholder="Current work location"
                            className={`w-full px-4 py-3 rounded-lg border ${errors.workLocation
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-purple-100 focus:border-purple-500'
                                } focus:outline-none`}
                            onChange={handleInputChange}
                        />
                        {errors.workLocation && (
                            <p className="mt-1 text-sm text-red-500">{errors.workLocation}</p>
                        )}
                    </div>

                    <input
                        type="number"
                        name="monthlyCommitment"
                        placeholder="Monthly Commitment Amount (RM)"
                        className="w-full px-4 py-3 rounded-lg border border-purple-100 focus:outline-none focus:border-purple-500"
                        onChange={handleInputChange}
                    />

                    <div className="space-y-2">
                        <p className="text-gray-600">
                            Copy of Bank Statement (for the last 6 months)
                        </p>
                        {bankStatement ? (
                            <div className="flex items-center space-x-2 text-green-600">
                                <span>Uploaded</span>
                                <button
                                    onClick={() => setBankStatement(false)}
                                    className="text-red-500 text-sm hover:text-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setBankStatement(true)}
                                className="block w-24 px-4 py-2 text-purple-600 border border-purple-600 rounded-lg cursor-pointer text-center hover:bg-purple-50"
                            >
                                Upload
                            </button>
                        )}
                    </div>

                    <div className="space-y-2">
                        <p className="text-gray-600">Copy of Utilities / Phone Bills</p>
                        {utilitiesStatement ? (
                            <div className="flex items-center space-x-2 text-green-600">
                                <span>Uploaded</span>
                                <button
                                    onClick={() => setUtilitiesStatement(false)}
                                    className="text-red-500 text-sm hover:text-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setUtilitiesStatement(true)}
                                className="block w-24 px-4 py-2 text-purple-600 border border-purple-600 rounded-lg cursor-pointer text-center hover:bg-purple-50"
                            >
                                Upload
                            </button>
                        )}
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-300 disabled:cursor-not-allowed"
                        disabled={
                            !formData.fullName ||
                            !formData.mobileNumber ||
                            !formData.workLocation ||
                            !formData.monthlyCommitment
                        }
                    >
                        I`m ready!
                    </button>
                </div>
            </div>
        </div>
    )
}
