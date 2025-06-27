// FILE: src/lessons/PythonLambdaFunctions/visuals.jsx
import React from 'react';
import { ArrowRight, Plus, CheckCircle, ArrowDown, Hash } from 'lucide-react'; // Replaced Numbers with Hash
import CodeBlock from '../../components/CodeBlock.jsx';

export const LambdaInfographicVisual = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <h3 className="font-semibold text-sky-400 mb-2 text-center">Lambda Functions Infographic</h3>
        <svg width="100%" height="200" viewBox="0 0 400 200" className="mx-auto">
            <rect x="0" y="0" width="400" height="200" fill="#1e293b" rx="10" />
            <text x="200" y="30" textAnchor="middle" fill="#38bdf8" fontSize="16" fontWeight="bold">Python Lambda Functions</text>
            <rect x="20" y="50" width="170" height="60" fill="#334155" stroke="#38bdf8" strokeWidth="2" rx="5" />
            <text x="105" y="70" textAnchor="middle" fill="#ffffff" fontSize="12">Anonymous</text>
            <text x="105" y="90" textAnchor="middle" fill="#94a3b8" fontSize="10">No named definition</text>
            <rect x="210" y="50" width="170" height="60" fill="#334155" stroke="#38bdf8" strokeWidth="2" rx="5" />
            <text x="295" y="70" textAnchor="middle" fill="#ffffff" fontSize="12">Single Expression</text>
            <text x="295" y="90" textAnchor="middle" fill="#94a3b8" fontSize="10">One operation only</text>
            <rect x="20" y="120" width="170" height="60" fill="#334155" stroke="#38bdf8" strokeWidth="2" rx="5" />
            <text x="105" y="140" textAnchor="middle" fill="#ffffff" fontSize="12">Multiple Arguments</text>
            <text x="105" y="160" textAnchor="middle" fill="#94a3b8" fontSize="10">Accepts any number</text>
            <rect x="210" y="120" width="170" height="60" fill="#334155" stroke="#38bdf8" strokeWidth="2" rx="5" />
            <text x="295" y="140" textAnchor="middle" fill="#ffffff" fontSize="12">Higher-Order</text>
            <text x="295" y="160" textAnchor="middle" fill="#94a3b8" fontSize="10">Works with map(), filter()</text>
        </svg>
    </div>
);

export const LambdaExecutionFlowchart = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <h3 className="font-semibold text-sky-400 mb-2 text-center">Lambda Function Execution Flowchart</h3>
        <svg width="100%" height="300" viewBox="0 0 300 300" className="mx-auto">
            <rect x="0" y="0" width="300" height="300" fill="#1e293b" rx="10" />
            <rect x="50" y="20" width="200" height="40" fill="#334155" stroke="#38bdf8" rx="5" />
            <text x="150" y="40" textAnchor="middle" fill="#ffffff" fontSize="12">Define Lambda: lambda x, y: x + y</text>
            <path d="M150 60 L150 80" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <rect x="50" y="80" width="200" height="40" fill="#334155" stroke="#38bdf8" rx="5" />
            <text x="150" y="100" textAnchor="middle" fill="#ffffff" fontSize="12">Pass Arguments: (5, 6)</text>
            <path d="M150 120 L150 140" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <rect x="50" y="140" width="200" height="40" fill="#334155" stroke="#38bdf8" rx="5" />
            <text x="150" y="160" textAnchor="middle" fill="#ffffff" fontSize="12">Evaluate Expression: 5 + 6</text>
            <path d="M150 180 L150 200" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <rect x="50" y="200" width="200" height="40" fill="#334155" stroke="#38bdf8" rx="5" />
            <text x="150" y="220" textAnchor="middle" fill="#ffffff" fontSize="12">Return Result: 11</text>
            <path d="M150 240 L150 260" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <rect x="50" y="260" width="200" height="40" fill="#334155" stroke="#38bdf8" rx="5" />
            <text x="150" y="280" textAnchor="middle" fill="#ffffff" fontSize="12">End</text>
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                    <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8" />
                </marker>
            </defs>
        </svg>
    </div>
);

export const AdditionVisual = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center font-mono">
        <h3 className="font-semibold text-sky-400 mb-2">Lambda Addition Visualization</h3>
        <div className="flex items-center justify-center space-x-2">
            <div className="p-2 bg-slate-700 rounded">lambda a, b: a + b</div>
            <ArrowRight className="text-slate-500" />
            <div className="p-2 bg-emerald-800 rounded text-emerald-400">5 + 6 = 11</div>
        </div>
        <CodeBlock>{`addition = lambda a, b: a + b\nprint(addition(5, 6))  # 11`}</CodeBlock>
    </div>
);

export const EvenCheckVisual = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center font-mono">
        <h3 className="font-semibold text-sky-400 mb-2">Lambda Even Check Visualization</h3>
        <div className="flex items-center justify-center space-x-2">
            <div className="p-2 bg-slate-700 rounded">lambda num: num % 2 == 0</div>
            <ArrowRight className="text-slate-500" />
            <div className="p-2 bg-emerald-800 rounded text-emerald-400">12 → True</div>
        </div>
        <CodeBlock>{`is_even = lambda num: num % 2 == 0\nprint(is_even(12))  # True`}</CodeBlock>
    </div>
);

export const ThreeNumberAdditionVisual = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center font-mono">
        <h3 className="font-semibold text-sky-400 mb-2">Lambda Three Number Addition Visualization</h3>
        <div className="flex items-center justify-center space-x-2">
            <div className="p-2 bg-slate-700 rounded">
                <Hash className="inline w-4 h-4 mr-1" />
                lambda x, y, z: x + y + z
            </div>
            <ArrowRight className="text-slate-500" />
            <div className="p-2 bg-emerald-800 rounded text-emerald-400">12 + 13 + 14 = 39</div>
        </div>
        <CodeBlock>{`add_three = lambda x, y, z: x + y + z\nprint(add_three(12, 13, 14))  # 39`}</CodeBlock>
    </div>
);

export const MapLambdaSquareVisual = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center font-mono">
        <h3 className="font-semibold text-sky-400 mb-2">Lambda with map() Visualization</h3>
        <div className="flex flex-col items-center space-y-2">
            <div className="p-2 bg-slate-700 rounded">[1, 2, 3, 4, 5, 6]</div>
            <div className="p-2 bg-slate-700 rounded">lambda x: x ** 2</div>
            <ArrowDown className="text-slate-500" />
            <div className="p-2 bg-emerald-800 rounded text-emerald-400">[1, 4, 9, 16, 25, 36]</div>
        </div>
        <CodeBlock>{`numbers = [1, 2, 3, 4, 5, 6]\nsquared_numbers = list(map(lambda x: x ** 2, numbers))\nprint(squared_numbers)`}</CodeBlock>
    </div>
);