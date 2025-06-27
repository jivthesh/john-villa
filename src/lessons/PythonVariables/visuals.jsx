import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export const MemoryAllocationSVG = () => (
    <div className="flex justify-center items-center p-4 bg-slate-800 rounded-lg my-4 border border-slate-700">
        <svg width="300" height="150" viewBox="0 0 400 200" className="max-w-full h-auto">
            <rect x="10" y="10" width="380" height="180" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="200" y="40" fontFamily="Inter, sans-serif" fontSize="18" fill="#94a3b8" textAnchor="middle">Memory</text>
            <path d="M280,100 Q320,80 350,110" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            <circle cx="350" cy="110" r="4" fill="#38bdf8" />
            <g transform="translate(50, 70)">
                <rect width="120" height="60" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                <text x="60" y="35" fontFamily="Inter, sans-serif" fontSize="24" fill="#e2e8f0" textAnchor="middle">100</text>
            </g>
            <text x="110" y="155" fontFamily="Inter, sans-serif" fontSize="16" fill="#64748b" textAnchor="middle">variable 'a'</text>
            <rect x="250" y="80" width="130" height="50" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="315" y="108" fontFamily="monospace" fontSize="16" fill="#60a5fa" textAnchor="middle">a = 100</text>
        </svg>
    </div>
);

export const VariableBoxes = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
            <span className="text-xs uppercase text-sky-400 bg-sky-900/50 px-2 py-1 rounded-full">Integer</span>
            <p className="text-lg text-white mt-2 font-mono">age <span className="text-pink-400">=</span> <span className="text-emerald-400">54</span></p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
            <span className="text-xs uppercase text-amber-400 bg-amber-900/50 px-2 py-1 rounded-full">Float</span>
            <p className="text-lg text-white mt-2 font-mono">height <span className="text-pink-400">=</span> <span className="text-emerald-400">1.68</span></p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
            <span className="text-xs uppercase text-fuchsia-400 bg-fuchsia-900/50 px-2 py-1 rounded-full">String</span>
            <p className="text-lg text-white mt-2 font-mono">name <span className="text-pink-400">=</span> <span className="text-emerald-400">"Mike"</span></p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
            <span className="text-xs uppercase text-rose-400 bg-rose-900/50 px-2 py-1 rounded-full">Boolean</span>
            <p className="text-lg text-white mt-2 font-mono">is_adult <span className="text-pink-400">=</span> <span className="text-emerald-400">True</span></p>
        </div>
    </div>
);

export const NamingConventionChecklist = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h3 className="text-lg font-semibold text-emerald-400 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Valid
                </h3>
                <ul className="mt-2 space-y-2">
                    <li className="p-2 bg-slate-900 rounded-md font-mono text-slate-300">first_name</li>
                    <li className="p-2 bg-slate-900 rounded-md font-mono text-slate-300">_internal_var</li>
                    <li className="p-2 bg-slate-900 rounded-md font-mono text-slate-300">value123</li>
                    <li className="p-2 bg-slate-900 rounded-md font-mono text-slate-300">firstName</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-rose-400 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    Invalid
                </h3>
                <ul className="mt-2 space-y-2">
                    <li className="p-2 bg-slate-900 rounded-md font-mono text-slate-300">1variable <span className="text-rose-500 text-xs ml-2">(starts with number)</span></li>
                    <li className="p-2 bg-slate-900 rounded-md font-mono text-slate-300">first-name <span className="text-rose-500 text-xs ml-2">(contains hyphen)</span></li>
                    <li className="p-2 bg-slate-900 rounded-md font-mono text-slate-300">my variable <span className="text-rose-500 text-xs ml-2">(contains space)</span></li>
                    <li className="p-2 bg-slate-900 rounded-md font-mono text-slate-300">@variable <span className="text-rose-500 text-xs ml-2">(contains symbol)</span></li>
                </ul>
            </div>
        </div>
    </div>
);

export const DynamicTypingConceptSVG = () => (
    <div className="p-4 my-4 bg-slate-800 rounded-lg border border-slate-700 flex justify-center items-center">
        <svg width="450" height="180" viewBox="0 0 450 180" className="max-w-full h-auto">
            <g>
                <text x="10" y="20" fontFamily="Inter, sans-serif" fontSize="16" fill="#94a3b8">Variable Assignment</text>
                <rect x="10" y="30" width="130" height="40" rx="5" fill="#0f172a" stroke="#334155" />
                <text x="75" y="55" fontFamily="monospace" fontSize="14" fill="#e2e8f0" textAnchor="middle">age = 25</text>
                <path d="M145,50 L185,50" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                <g transform="translate(190, 10)">
                    <rect width="120" height="80" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                    <text x="60" y="35" fontFamily="Inter, sans-serif" fontSize="14" fill="#94a3b8" textAnchor="middle">Python</text>
                    <text x="60" y="55" fontFamily="Inter, sans-serif" fontSize="14" fill="#94a3b8" textAnchor="middle">Interpreter</text>
                </g>
                <text x="250" y="115" fontFamily="Inter, sans-serif" fontSize="12" fill="#64748b" textAnchor="middle">Determines Type</text>
                <text x="250" y="130" fontFamily="Inter, sans-serif" fontSize="12" fill="#64748b" textAnchor="middle">at Runtime</text>
                <path d="M315,50 L355,50" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                <g transform="translate(360, 30)">
                    <rect width="80" height="40" rx="5" fill="#0f172a" stroke="#334155" />
                    <text x="40" y="55" fontFamily="monospace" fontSize="14" fill="#a78bfa" textAnchor="middle" transform="translate(0, -30)">&lt;class 'int'&gt;</text>
                </g>
                <text x="400" y="20" fontFamily="Inter, sans-serif" fontSize="16" fill="#94a3b8" textAnchor="middle">Result</text>
            </g>
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" />
                </marker>
            </defs>
        </svg>
    </div>
);

export const DynamicTypingTimeline = () => (
    <div className="my-6 p-6 bg-slate-800 rounded-lg border border-slate-700">
        <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-600"></div>
            <div className="relative mb-8">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-sky-400 rounded-full ring-4 ring-slate-800"></div>
                <div className="w-[calc(50%-2rem)] text-right pr-8">
                    <p className="font-mono text-slate-300">var = 10</p>
                    <p className="text-xs text-sky-400">&lt;class 'int'&gt;</p>
                </div>
            </div>
            <div className="relative mb-8">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-fuchsia-400 rounded-full ring-4 ring-slate-800"></div>
                <div className="w-[calc(50%-2rem)] ml-[calc(50%+2rem)] pl-8">
                    <p className="font-mono text-slate-300">var = "hello"</p>
                    <p className="text-xs text-fuchsia-400">&lt;class 'str'&gt;</p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full ring-4 ring-slate-800"></div>
                <div className="w-[calc(50%-2rem)] text-right pr-8">
                    <p className="font-mono text-slate-300">var = 3.14</p>
                    <p className="text-xs text-amber-400">&lt;class 'float'&gt;</p>
                </div>
            </div>
        </div>
        <p className="text-center text-slate-400 text-sm mt-8 pt-4 border-t border-slate-700">Variable type changes dynamically at runtime.</p>
    </div>
);

export const UserInputFlow = () => (
    <div className="p-4 my-4 bg-slate-800 rounded-lg border border-slate-700 flex justify-center items-center">
        <svg width="400" height="300" viewBox="0 0 400 300" className="max-w-full h-auto">
            <defs>
                <marker id="flowArrow" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                    <polygon points="0 0, 8 3.5, 0 7" fill="#64748b" />
                </marker>
            </defs>
            <g>
                <rect x="80" y="20" width="240" height="50" rx="8" fill="#1e293b" stroke="#475569" />
                <text x="200" y="50" fontFamily="sans-serif" fontSize="14" fill="#e2e8f0" textAnchor="middle">User types '23' into input()</text>
            </g>
            <path d="M200,70 V100" stroke="#64748b" strokeWidth="2" markerEnd="url(#flowArrow)" />
            <text x="200" y="90" fontFamily="sans-serif" fontSize="12" fill="#94a3b8" textAnchor="middle">Returns as string by default</text>
            <g>
                <rect x="50" y="110" width="300" height="50" rx="8" fill="#1e293b" stroke="#475569" />
                <text x="200" y="140" fontFamily="monospace" fontSize="14" fill="#e2e8f0" textAnchor="middle">age stores '23' <tspan fill="#fuchsia-400">(type: str)</tspan></text>
            </g>
            <path d="M200,160 V190" stroke="#64748b" strokeWidth="2" markerEnd="url(#flowArrow)" />
            <text x="200" y="180" fontFamily="sans-serif" fontSize="12" fill="#94a3b8" textAnchor="middle">Apply int() or float()</text>
            <g>
                <rect x="50" y="200" width="300" height="50" rx="8" fill="#1e293b" stroke="#475569" />
                <text x="200" y="230" fontFamily="monospace" fontSize="14" fill="#e2e8f0" textAnchor="middle">age becomes 23 <tspan fill="#sky-400">(type: int)</tspan></text>
            </g>
        </svg>
    </div>
);

export const ArithmeticOperators = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-slate-600">
                        <th className="p-2 text-sky-300">Operator</th>
                        <th className="p-2 text-sky-300">Name</th>
                        <th className="p-2 text-sky-300">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-slate-700"><td className="p-2 font-mono text-pink-400">+</td><td className="p-2">Addition</td><td className="p-2">Adds two numbers</td></tr>
                    <tr className="border-b border-slate-700"><td className="p-2 font-mono text-pink-400">-</td><td className="p-2">Subtraction</td><td className="p-2">Subtracts the second number from the first</td></tr>
                    <tr className="border-b border-slate-700"><td className="p-2 font-mono text-pink-400">*</td><td className="p-2">Multiplication</td><td className="p-2">Multiplies two numbers</td></tr>
                    <tr className="border-b border-slate-700"><td className="p-2 font-mono text-pink-400">/</td><td className="p-2">Division</td><td className="p-2">Divides the first number by the second (always returns a float)</td></tr>
                    <tr className="border-b border-slate-700"><td className="p-2 font-mono text-pink-400">%</td><td className="p-2">Modulus</td><td className="p-2">Returns the remainder of the division</td></tr>
                    <tr className="border-b border-slate-700"><td className="p-2 font-mono text-pink-400">**</td><td className="p-2">Exponentiation</td><td className="p-2">Raises the first number to the power of the second</td></tr>
                    <tr><td className="p-2 font-mono text-pink-400">//</td><td className="p-2">Floor Division</td><td className="p-2">Divides and returns the integer part of the result</td></tr>
                </tbody>
            </table>
        </div>
    </div>
);

export const SimpleCalculator = () => {
    const [num1, setNum1] = useState('10.3');
    const [num2, setNum2] = useState('4.5');
    const [results, setResults] = useState(null);

    const calculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (isNaN(n1) || isNaN(n2)) {
            setResults({ error: "Please enter valid numbers." });
            return;
        }
        setResults({
            sum: n1 + n2, diff: n1 - n2, mul: n1 * n2, div: n1 / n2,
            quo: Math.floor(n1 / n2), rem: n1 % n2, pow: n1 ** n2,
        });
    };

    useState(() => { calculate(); }, []);

    return (
        <div className="my-4 p-6 bg-slate-800 rounded-lg border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} className="w-full p-2 bg-slate-900 border border-slate-600 rounded-md text-white" placeholder="First number" />
                <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} className="w-full p-2 bg-slate-900 border border-slate-600 rounded-md text-white" placeholder="Second number" />
            </div>
            <button onClick={calculate} className="w-full mt-4 py-2 px-4 bg-sky-600 text-white rounded-md hover:bg-sky-500 transition-colors flex items-center justify-center space-x-2">
                <Calculator size={18} />
                <span>Calculate</span>
            </button>
            {results && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                    {results.error ? <p className="text-rose-400">{results.error}</p> : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-mono">
                            <p>Sum: <span className="text-emerald-400">{results.sum.toFixed(2)}</span></p>
                            <p>Difference: <span className="text-emerald-400">{results.diff.toFixed(2)}</span></p>
                            <p>Product: <span className="text-emerald-400">{results.mul.toFixed(2)}</span></p>
                            <p>Division: <span className="text-emerald-400">{results.div.toFixed(2)}</span></p>
                            <p>Quotient: <span className="text-emerald-400">{results.quo}</span></p>
                            <p>Remainder: <span className="text-emerald-400">{results.rem.toFixed(2)}</span></p>
                            <p className="col-span-1 sm:col-span-2">Power: <span className="text-emerald-400">{results.pow.toExponential(4)}</span></p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};