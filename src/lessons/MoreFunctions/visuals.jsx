import React, { useState } from 'react';
import { ArrowRight, Check, X, Shield, ShoppingCart, Repeat, Thermometer, Sigma, FileText, Mail } from 'lucide-react';

export const TempConversionVisual = () => {
    const [step, setStep] = useState(0);
    const steps = [
        { label: 'Input: 25°C', desc: 'Start with temperature = 25, unit = "C"' },
        { label: 'Formula: (25 * 9/5) + 32', desc: 'Apply Celsius to Fahrenheit conversion' },
        { label: 'Result: 77°F', desc: 'Output after calculation' },
    ];

    return (
        <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center">
            <Thermometer size={48} className="mx-auto text-sky-400 mb-2" />
            <div className="space-y-2">
                {steps.map((s, i) => (
                    <div
                        key={i}
                        className={`p-2 rounded-md cursor-pointer transition-colors ${
                            step === i ? 'bg-slate-700 text-emerald-400' : 'text-slate-300 hover:bg-slate-700'
                        }`}
                        onClick={() => setStep(i)}
                    >
                        <p className="font-mono text-lg">{s.label}</p>
                        <p className="text-sm text-slate-400">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PasswordStrengthVisual = () => {
    const [step, setStep] = useState(0);
    const steps = [
        { label: 'Length >= 8', status: true, desc: 'Checks if password length is at least 8 characters' },
        { label: 'Has Digit', status: true, desc: 'Verifies at least one digit (0-9)' },
        { label: 'Has Lowercase', status: true, desc: 'Ensures at least one lowercase letter (a-z)' },
        { label: 'Has Uppercase', status: true, desc: 'Confirms at least one uppercase letter (A-Z)' },
        { label: 'Has Special Char', status: true, desc: 'Checks for special characters (!@#$%^&*)' },
    ];

    return (
        <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
            <h4 className="font-bold text-white text-center mb-3">Password Criteria (Str0ngPw!)</h4>
            <ul className="space-y-2 text-sm">
                {steps.map((s, i) => (
                    <li
                        key={i}
                        className={`flex items-center p-2 rounded-md cursor-pointer ${
                            step >= i ? 'bg-slate-700' : ''
                        }`}
                        onClick={() => setStep(i)}
                    >
                        {s.status ? (
                            <Check size={16} className="text-green-400 mr-2" />
                        ) : (
                            <X size={16} className="text-red-400 mr-2" />
                        )}
                        <div>
                            <span className="font-mono">{s.label}</span>
                            <p className="text-xs text-slate-400">{s.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const ShoppingCartVisual = () => {
    const [step, setStep] = useState(0);
    const items = [
        { name: 'Apple', price: 0.5, quantity: 4, total: 2.0 },
        { name: 'Banana', price: 0.3, quantity: 6, total: 1.8 },
        { name: 'Orange', price: 0.7, quantity: 3, total: 2.1 },
    ];
    const steps = [
        ...items.map((item, i) => ({
            label: `${item.name}: ${item.quantity} x $${item.price}`,
            desc: `Calculate ${item.name} cost: $${item.total.toFixed(2)}`,
        })),
        { label: 'Total: $5.90', desc: 'Sum of all item costs' },
    ];

    return (
        <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
            <h4 className="font-bold text-white text-center mb-3 flex items-center justify-center">
                <ShoppingCart className="mr-2" /> Cart Total
            </h4>
            <div className="font-mono text-sm space-y-2">
                {steps.map((s, i) => (
                    <div
                        key={i}
                        className={`p-2 rounded-md cursor-pointer ${
                            step >= i ? 'text-emerald-400' : 'text-slate-300'
                        } ${i === steps.length - 1 ? 'border-t border-slate-600 pt-4' : ''}`}
                        onClick={() => setStep(i)}
                    >
                        <p>{s.label}</p>
                        <p className="text-xs text-slate-400">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PalindromeVisual = () => {
    const [step, setStep] = useState(0);
    const steps = [
        { label: '"A man a plan a canal Panama"', desc: 'Original input string' },
        { label: '"amanaplanacanalpanama"', desc: 'Lowercase, spaces removed' },
        { label: 's == s[::-1] → True', desc: 'Compare string with its reverse' },
    ];

    return (
        <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center">
            {steps.map((s, i) => (
                <div
                    key={i}
                    className={`p-2 rounded-md cursor-pointer ${
                        step >= i ? 'text-emerald-400' : 'text-slate-300'
                    }`}
                    onClick={() => setStep(i)}
                >
                    <p className="font-mono text-lg">{s.label}</p>
                    <p className="text-sm text-slate-400">{s.desc}</p>
                    {i < steps.length - 1 && (
                        <ArrowRight className="text-slate-500 my-2 mx-auto rotate-90" />
                    )}
                </div>
            ))}
        </div>
    );
};

export const FactorialVisual = () => {
    const [step, setStep] = useState(0);
    const steps = [
        { label: 'factorial(5)', desc: 'Start with n = 5' },
        { label: '5 * factorial(4)', desc: 'Recursive call for n = 4' },
        { label: '4 * factorial(3)', desc: 'Recursive call for n = 3' },
        { label: '3 * factorial(2)', desc: 'Recursive call for n = 2' },
        { label: '2 * factorial(1)', desc: 'Recursive call for n = 1' },
        { label: '1 * factorial(0)', desc: 'Recursive call for n = 0' },
        { label: 'factorial(0) = 1', desc: 'Base case reached' },
        { label: 'Result: 120', desc: 'Final result: 5 * 4 * 3 * 2 * 1' },
    ];

    return (
        <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 text-sm font-mono">
            {steps.map((s, i) => (
                <div
                    key={i}
                    className={`pl-${Math.min(i, 6) * 4} border-l-2 border-slate-600 p-2 rounded-md cursor-pointer ${
                        step >= i ? 'text-emerald-400' : 'text-slate-300'
                    }`}
                    onClick={() => setStep(i)}
                >
                    <p>{s.label}</p>
                    <p className="text-xs text-slate-400">{s.desc}</p>
                </div>
            ))}
        </div>
    );
};

export const WordFrequencyVisual = () => {
    const [step, setStep] = useState(0);
    const steps = [
        { label: '"Hello, world. How are you? My name is Krish. Krish"', desc: 'Input text from file' },
        { label: 'Split into words', desc: 'Break lines into individual words' },
        { label: 'Clean words: lowercase, remove punctuation', desc: 'Normalize words for counting' },
        { label: "{'hello': 1, 'world': 1, 'how': 1, 'are': 1, 'you': 1, 'my': 1, 'name': 1, 'is': 1, 'krish': 2}", desc: 'Final word frequency dictionary' },
    ];

    return (
        <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center">
            <FileText size={40} className="text-sky-400 mb-2" />
            {steps.map((s, i) => (
                <div
                    key={i}
                    className={`p-3 w-full text-center rounded-lg cursor-pointer ${
                        step >= i ? 'bg-slate-700 text-emerald-300' : 'text-slate-300'
                    }`}
                    onClick={() => setStep(i)}
                >
                    <p className="font-mono">{s.label}</p>
                    <p className="text-xs text-slate-400">{s.desc}</p>
                    {i < steps.length - 1 && (
                        <ArrowRight className="text-slate-500 my-2 mx-auto rotate-90" />
                    )}
                </div>
            ))}
        </div>
    );
};

export const EmailValidationVisual = () => {
    const [step, setStep] = useState(0);
    const steps = [
        { label: 'Input: "username@gmail.com"', desc: 'Email to validate' },
        { label: '^[a-zA-Z0-9.+_-]+', desc: 'Match username part before @' },
        { label: '@', desc: 'Match the @ symbol' },
        { label: '[a-zA-Z0-9.-]+', desc: 'Match domain name' },
        { label: '\\.[a-zA-Z]{2,}$', desc: 'Match top-level domain' },
        { label: 'Result: True', desc: 'Valid email format' },
    ];

    return (
        <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
            <h4 className="font-bold text-white text-center mb-3">Email Regex Breakdown</h4>
            <div className="font-mono text-xs space-y-2">
                {steps.map((s, i) => (
                    <div
                        key={i}
                        className={`p-2 rounded-md cursor-pointer ${
                            step >= i ? 'text-sky-300' : 'text-slate-400'
                        }`}
                        onClick={() => setStep(i)}
                    >
                        <p>{s.label}</p>
                        <p className="text-slate-400">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};