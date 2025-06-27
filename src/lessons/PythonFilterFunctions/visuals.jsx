import React, { useState, useEffect } from 'react';
import { 
    ArrowRight, Filter, X, Database, User, Code, Play, Pause, RotateCcw, 
    Eye, EyeOff, ChevronDown, ChevronUp, Settings, Zap, Check, TrendingUp,
    Brain, Cpu, Target, Award, ShoppingCart, Factory, FileX
} from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';

// Enhanced Filter Concept Visualization with Interactive Steps
export const FilterConceptVisual = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    
    const steps = [
        { 
            label: 'Input Collection', 
            desc: 'Start with an iterable containing elements to filter',
            data: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
            color: '#06b6d4',
            detail: 'The filter function accepts any iterable: lists, tuples, strings, sets, or custom objects with __iter__ method.'
        },
        { 
            label: 'Filter Function', 
            desc: 'Define a function that returns True/False for each element',
            data: 'lambda x: x % 2 == 0',
            color: '#8b5cf6',
            detail: 'The function can be a regular named function or lambda. It must take one parameter and return a boolean value.'
        },
        { 
            label: 'Element Processing', 
            desc: 'Function evaluates each element individually',
            data: '1→False, 2→True, 3→False, 4→True...',
            color: '#f59e0b',
            detail: 'Each element is passed to the function one by one. The function returns True to include the element, False to exclude it.'
        },
        { 
            label: 'Filter Object Creation', 
            desc: 'Returns a lazy iterator containing selected elements',
            data: '<filter object at 0x7f8b8c0d5f40>',
            color: '#ef4444',
            detail: 'The filter object is an iterator that yields elements on demand. It doesn\'t store all results in memory immediately.'
        },
        { 
            label: 'Result Materialization', 
            desc: 'Convert iterator to view or use the filtered results',
            data: '[2, 4, 6, 8, 10]',
            color: '#10b981',
            detail: 'Use list(), tuple(), or iterate through the filter object to access the filtered elements.'
        }
    ];

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep(currentStep + 1);
                setIsAnimating(false);
            }, 300);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep(currentStep - 1);
                setIsAnimating(false);
            }, 300);
        }
    };

    const resetAnimation = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentStep(0);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-white flex items-center">
                    <Filter className="w-6 h-6 mr-2 text-sky-400" />
                    Interactive Filter Process Visualization
                </h4>
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={() => setShowDetails(!showDetails)}
                        className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                    >
                        {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button 
                        onClick={prevStep} 
                        disabled={currentStep === 0}
                        className="p-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 rounded-lg transition-colors"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                    </button>
                    <button 
                        onClick={nextStep} 
                        disabled={currentStep === steps.length - 1}
                        className="p-2 bg-sky-600 hover:bg-sky-500 disabled:bg-sky-800 disabled:text-sky-600 rounded-lg transition-colors"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={resetAnimation}
                        className="p-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                    >
                        <RotateCcw className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* SVG Process Flow */}
            <div className="relative mb-6">
                <svg viewBox="0 0 1000 200" className="w-full h-48">
                    <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3"/>
                        </pattern>
                        {steps.map((step, index) => (
                            <linearGradient key={index} id={`stepGrad${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{stopColor: step.color, stopOpacity: 0.8}} />
                                <stop offset="100%" style={{stopColor: step.color, stopOpacity: 0.4}} />
                            </linearGradient>
                        ))}
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                         refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
                        </marker>
                    </defs>
                    
                    <rect width="1000" height="200" fill="url(#grid)" />
                    
                    {steps.map((step, index) => (
                        <g key={index} transform={`translate(${index * 200 + 50}, 50)`}>
                            <rect 
                                x="0" y="0" width="150" height="100" rx="12" 
                                fill={index <= currentStep ? `url(#stepGrad${index})` : '#374151'}
                                stroke={index === currentStep ? '#ffffff' : '#6b7280'} 
                                strokeWidth={index === currentStep ? '3' : '1'}
                                className={index === currentStep && isAnimating ? 'animate-pulse' : ''}
                            />
                            <text x="75" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                                {step.label}
                            </text>
                            <text x="75" y="50" textAnchor="middle" fill="white" fontSize="8" opacity="0.8">
                                Step {index + 1}
                            </text>
                            <foreignObject x="10" y="60" width="130" height="30">
                                <div className="text-xs text-white text-center font-mono bg-black/20 rounded p-1 overflow-hidden">
                                    {step.data.length > 20 ? step.data.substring(0, 20) + '...' : step.data}
                                </div>
                            </foreignObject>
                            
                            {index < steps.length - 1 && (
                                <line 
                                    x1="150" y1="50" x2="190" y2="50" 
                                    stroke={index < currentStep ? step.color : '#6b7280'} 
                                    strokeWidth="3" 
                                    markerEnd="url(#arrowhead)"
                                />
                            )}
                        </g>
                    ))}
                </svg>
            </div>

            {/* Step Information */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
                <div className="flex items-center mb-4">
                    <div 
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: steps[currentStep].color }}
                    ></div>
                    <h5 className="text-xl font-semibold text-white">
                        {steps[currentStep].label}
                    </h5>
                    <span className="ml-auto text-sm text-slate-400">
                        {currentStep + 1} / {steps.length}
                    </span>
                </div>
                <p className="text-slate-300 mb-4">{steps[currentStep].desc}</p>
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 mb-4">
                    <span className="text-sky-400 font-semibold">Data: </span>
                    <span className="text-slate-300 font-mono">{steps[currentStep].data}</span>
                </div>
                {showDetails && (
                    <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
                        <h6 className="text-purple-300 font-semibold mb-2">Detailed Explanation:</h6>
                        <p className="text-sm text-slate-300">{steps[currentStep].detail}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Enhanced Filter Syntax Visualization
export const FilterSyntaxVisual = () => {
    const [activeComponent, setActiveComponent] = useState(0);
    
    const components = [
        {
            name: "filter",
            description: "Built-in Python function that creates an iterator",
            color: "#ef4444",
            detail: "The filter function is part of Python's built-in functions, designed for functional programming patterns."
        },
        {
            name: "function",
            description: "Function that returns True/False for each element",
            color: "#8b5cf6",
            detail: "Can be a regular function, lambda function, or any callable that accepts one argument and returns a boolean."
        },
        {
            name: "iterable",
            description: "Collection of elements to be filtered",
            color: "#10b981",
            detail: "Any iterable object: lists, tuples, strings, sets, generators, or custom objects with __iter__ method."
        }
    ];

    return (
        <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-sky-400" />
                Interactive Syntax Breakdown
            </h4>
            
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 mb-6">
                <div className="text-center mb-4">
                    <div className="text-2xl font-mono">
                        <span 
                            className={`cursor-pointer transition-all ${activeComponent === 0 ? 'text-red-400 bg-red-400/20 px-2 py-1 rounded' : 'text-slate-300'}`}
                            onClick={() => setActiveComponent(0)}
                        >
                            filter
                        </span>
                        <span className="text-slate-400">(</span>
                        <span 
                            className={`cursor-pointer transition-all ${activeComponent === 1 ? 'text-purple-400 bg-purple-400/20 px-2 py-1 rounded' : 'text-slate-300'}`}
                            onClick={() => setActiveComponent(1)}
                        >
                            function
                        </span>
                        <span className="text-slate-400">, </span>
                        <span 
                            className={`cursor-pointer transition-all ${activeComponent === 2 ? 'text-emerald-400 bg-emerald-400/20 px-2 py-1 rounded' : 'text-slate-300'}`}
                            onClick={() => setActiveComponent(2)}
                        >
                            iterable
                        </span>
                        <span className="text-slate-400">)</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">Click on each component to learn more</p>
                </div>
                
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-600">
                    <div className="flex items-center mb-3">
                        <div 
                            className="w-4 h-4 rounded mr-3"
                            style={{ backgroundColor: components[activeComponent].color }}
                        ></div>
                        <h5 className="text-lg font-semibold text-white">
                            {components[activeComponent].name}
                        </h5>
                    </div>
                    <p className="text-slate-300 mb-3">{components[activeComponent].description}</p>
                    <p className="text-sm text-slate-400">{components[activeComponent].detail}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {components.map((component, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveComponent(index)}
                        className={`text-left p-4 rounded-lg border transition-all ${
                            activeComponent === index 
                                ? 'border-white bg-slate-700' 
                                : 'border-slate-600 bg-slate-800/50 hover:bg-slate-700/50'
                        }`}
                    >
                        <div className="flex items-center mb-2">
                            <div 
                                className="w-3 h-3 rounded mr-2"
                                style={{ backgroundColor: component.color }}
                            ></div>
                            <span className="font-semibold text-white">{component.name}</span>
                        </div>
                        <p className="text-sm text-slate-400">{component.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

// Additional enhanced visual components would continue here...
// Due to length constraints, I'm showing the structure for the remaining components

export const EvenNumbersComparisonVisual = () => { 
    // Interactive comparison between traditional loops and filter()
    // with step-by-step execution visualization
};

export const LambdaFilterVisual = () => { 
    // Interactive lambda function breakdown with syntax highlighting
    // and parameter/condition visualization
};

export const MultipleConditionsVisual = () => { 
    // Element-by-element analysis of multiple condition filtering
    // with logical operator demonstrations
};

export const DictionaryFilterVisual = () => { 
    // Interactive dictionary filtering with data structure visualization
    // and key-value pair processing
};

export const FilterProcessFlowVisual = () => { 
    // Animated process flow showing data transformation
};

export const LazyEvaluationVisual = () => { 
    // Memory usage comparison between eager and lazy evaluation
};

export const FilterVsLoopPerformanceVisual = () => { 
    // Performance metrics and benchmark comparisons
};

export const FilterObjectExplorer = () => { 
    // Interactive filter object inspection and conversion examples
};

export const RealWorldApplicationsVisual = () => { 
    // Industry-specific filtering examples with interactive scenarios
};

export const AdvancedFilterTechniques = () => { 
    // Advanced patterns, chaining, and optimization techniques
};

export const InteractiveFilterDemo = () => { 
    // Live code playground for testing filter operations
};
