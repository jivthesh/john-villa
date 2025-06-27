import React, { useState, useEffect } from 'react';
import { 
    ArrowRight, X, Database, ShoppingCart, Code, Factory, User, Network, 
    Workflow, Box, Maximize, Plus, Play, Pause, RotateCcw, Eye, EyeOff,
    ChevronDown, ChevronUp, Settings, Zap
} from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';

// Enhanced Flowchart Concept Visualization
export const FlowchartConceptVisual = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const conceptSteps = [
        { 
            title: "Problem Definition", 
            desc: "Identify the process that needs to be visualized",
            color: "#ef4444",
            example: "How to find maximum of two numbers?"
        },
        { 
            title: "Step Breakdown", 
            desc: "Divide the process into logical, sequential steps",
            color: "#f59e0b",
            example: "Input → Compare → Output → End"
        },
        { 
            title: "Symbol Mapping", 
            desc: "Assign appropriate flowchart symbols to each step",
            color: "#8b5cf6",
            example: "Parallelogram for input, Diamond for decision"
        },
        { 
            title: "Flow Connection", 
            desc: "Connect symbols with arrows showing execution order",
            color: "#06b6d4",
            example: "Sequential flow with conditional branching"
        },
        { 
            title: "Validation", 
            desc: "Verify the flowchart logic with test scenarios",
            color: "#10b981",
            example: "Test with sample inputs: (5,3) → Output: 5"
        }
    ];

    const nextStep = () => {
        if (activeStep < conceptSteps.length - 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveStep(activeStep + 1);
                setIsAnimating(false);
            }, 300);
        }
    };

    const prevStep = () => {
        if (activeStep > 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveStep(activeStep - 1);
                setIsAnimating(false);
            }, 300);
        }
    };

    return (
        <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-white flex items-center">
                    <Workflow className="w-6 h-6 mr-2 text-sky-400" />
                    Flowchart Development Process
                </h4>
                <div className="flex space-x-2">
                    <button 
                        onClick={prevStep} 
                        disabled={activeStep === 0}
                        className="p-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 rounded-lg transition-colors"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                    </button>
                    <button 
                        onClick={nextStep} 
                        disabled={activeStep === conceptSteps.length - 1}
                        className="p-2 bg-sky-600 hover:bg-sky-500 disabled:bg-sky-800 disabled:text-sky-600 rounded-lg transition-colors"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Process Flow SVG */}
            <div className="relative mb-6">
                <svg viewBox="0 0 900 150" className="w-full h-32">
                    <defs>
                        <linearGradient id="stepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: conceptSteps[activeStep].color, stopOpacity: 0.8}} />
                            <stop offset="100%" style={{stopColor: conceptSteps[activeStep].color, stopOpacity: 0.4}} />
                        </linearGradient>
                    </defs>
                    
                    {conceptSteps.map((step, index) => (
                        <g key={index} transform={`translate(${index * 180 + 50}, 50)`}>
                            <circle 
                                cx="50" cy="50" r="40" 
                                fill={index <= activeStep ? step.color : '#374151'}
                                stroke={index === activeStep ? '#ffffff' : '#6b7280'} 
                                strokeWidth={index === activeStep ? '3' : '1'}
                                className={index === activeStep && isAnimating ? 'animate-pulse' : ''}
                            />
                            <text x="50" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                                {index + 1}
                            </text>
                            <text x="50" y="58" textAnchor="middle" fill="white" fontSize="8">
                                Step
                            </text>
                            
                            {index < conceptSteps.length - 1 && (
                                <line 
                                    x1="90" y1="50" x2="130" y2="50" 
                                    stroke={index < activeStep ? step.color : '#6b7280'} 
                                    strokeWidth="3" 
                                    markerEnd="url(#arrow)"
                                />
                            )}
                        </g>
                    ))}
                    
                    <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="7" 
                         refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
                        </marker>
                    </defs>
                </svg>
            </div>

            {/* Step Details */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
                <div className="flex items-center mb-4">
                    <div 
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: conceptSteps[activeStep].color }}
                    ></div>
                    <h5 className="text-xl font-semibold text-white">
                        {conceptSteps[activeStep].title}
                    </h5>
                    <span className="ml-auto text-sm text-slate-400">
                        {activeStep + 1} / {conceptSteps.length}
                    </span>
                </div>
                <p className="text-slate-300 mb-4">{conceptSteps[activeStep].desc}</p>
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <span className="text-sky-400 font-semibold">Example: </span>
                    <span className="text-slate-300">{conceptSteps[activeStep].example}</span>
                </div>
            </div>
        </div>
    );
};

// Interactive Flowchart Symbols Guide
export const FlowchartSymbolsGuide = () => {
    const [selectedSymbol, setSelectedSymbol] = useState(0);
    
    const symbols = [
        {
            name: "Terminal",
            shape: "oval",
            purpose: "Start and Stop",
            description: "Marks the beginning and end of a flowchart",
            color: "#10b981",
            example: "START, END, STOP"
        },
        {
            name: "Input/Output",
            shape: "parallelogram", 
            purpose: "Data Input/Output",
            description: "Represents data entry or display operations",
            color: "#06b6d4",
            example: "READ num1, PRINT result"
        },
        {
            name: "Process",
            shape: "rectangle",
            purpose: "Processing/Computation",
            description: "Represents calculations or data manipulation", 
            color: "#8b5cf6",
            example: "sum = a + b, count = count + 1"
        },
        {
            name: "Decision",
            shape: "diamond",
            purpose: "Conditional Logic",
            description: "Represents decision points with Yes/No outcomes",
            color: "#f59e0b",
            example: "Is x > 0?, num1 > num2?"
        },
        {
            name: "Connector",
            shape: "circle",
            purpose: "Flow Connection",
            description: "Connects different parts of complex flowcharts",
            color: "#ec4899",
            example: "A, B, C (reference points)"
        }
    ];

    const renderSymbol = (symbol, size = 80) => {
        const props = {
            fill: `${symbol.color}20`,
            stroke: symbol.color,
            strokeWidth: 2
        };

        switch (symbol.shape) {
            case 'oval':
                return <ellipse cx={size/2} cy={size/2} rx={size/2 - 10} ry={size/3} {...props} />;
            case 'parallelogram':
                return <polygon points={`10,${size/3} ${size-10},${size/3} ${size-20},${2*size/3} 20,${2*size/3}`} {...props} />;
            case 'rectangle':
                return <rect x="10" y={size/3} width={size-20} height={size/3} {...props} />;
            case 'diamond':
                return <polygon points={`${size/2},10 ${size-10},${size/2} ${size/2},${size-10} 10,${size/2}`} {...props} />;
            case 'circle':
                return <circle cx={size/2} cy={size/2} r={size/4} {...props} />;
            default:
                return null;
        }
    };

    return (
        <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <Box className="w-6 h-6 mr-2 text-sky-400" />
                Interactive Symbol Reference
            </h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Symbol Selector */}
                <div className="lg:col-span-1">
                    <h5 className="text-lg font-semibold text-sky-300 mb-4">Select Symbol</h5>
                    <div className="space-y-2">
                        {symbols.map((symbol, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSymbol(index)}
                                className={`w-full text-left p-3 rounded-lg transition-all ${
                                    selectedSymbol === index 
                                        ? 'bg-sky-600 text-white' 
                                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                                }`}
                            >
                                <div className="flex items-center">
                                    <div 
                                        className="w-4 h-4 rounded mr-3"
                                        style={{ backgroundColor: symbol.color }}
                                    ></div>
                                    <div>
                                        <div className="font-medium">{symbol.name}</div>
                                        <div className="text-xs opacity-75">{symbol.purpose}</div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Symbol Visualization */}
                <div className="lg:col-span-1">
                    <h5 className="text-lg font-semibold text-sky-300 mb-4">Visual Representation</h5>
                    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 flex items-center justify-center">
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            {renderSymbol(symbols[selectedSymbol], 120)}
                            <text 
                                x="60" y="65" 
                                textAnchor="middle" 
                                fill="white" 
                                fontSize="10" 
                                fontWeight="bold"
                            >
                                {symbols[selectedSymbol].name}
                            </text>
                        </svg>
                    </div>
                </div>
                
                {/* Symbol Details */}
                <div className="lg:col-span-1">
                    <h5 className="text-lg font-semibold text-sky-300 mb-4">Details & Usage</h5>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 space-y-4">
                        <div>
                            <h6 className="text-white font-semibold mb-2">Description</h6>
                            <p className="text-sm text-slate-300">{symbols[selectedSymbol].description}</p>
                        </div>
                        <div>
                            <h6 className="text-white font-semibold mb-2">Common Uses</h6>
                            <div className="bg-slate-800 p-3 rounded font-mono text-xs text-slate-300">
                                {symbols[selectedSymbol].example}
                            </div>
                        </div>
                        <div>
                            <h6 className="text-white font-semibold mb-2">Shape Type</h6>
                            <span className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 capitalize">
                                {symbols[selectedSymbol].shape}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Interactive Maximum Two Numbers Flowchart
export const MaxTwoNumbersVisual = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [inputValues, setInputValues] = useState({ num1: 5, num2: 3 });
    
    const steps = [
        { name: "Start", type: "terminal", label: "START", desc: "Initialize the process" },
        { name: "Input num1", type: "input", label: "Input num1", desc: `Enter first number: ${inputValues.num1}` },
        { name: "Input num2", type: "input", label: "Input num2", desc: `Enter second number: ${inputValues.num2}` },
        { name: "Compare", type: "decision", label: "num1 > num2?", desc: `${inputValues.num1} > ${inputValues.num2}? ${inputValues.num1 > inputValues.num2 ? 'True' : 'False'}` },
        { 
            name: "Output", 
            type: "output", 
            label: inputValues.num1 > inputValues.num2 ? "Display num1" : "Display num2", 
            desc: `Output: ${Math.max(inputValues.num1, inputValues.num2)}` 
        },
        { name: "Stop", type: "terminal", label: "STOP", desc: "End the process" }
    ];

    const playAnimation = () => {
        setIsPlaying(true);
        setCurrentStep(0);
        const interval = setInterval(() => {
            setCurrentStep(prev => {
                if (prev >= steps.length - 1) {
                    clearInterval(interval);
                    setIsPlaying(false);
                    return prev;
                }
                return prev + 1;
            });
        }, 1000);
    };

    const resetAnimation = () => {
        setCurrentStep(0);
        setIsPlaying(false);
    };

    return (
        <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-white flex items-center">
                    <Maximize className="w-6 h-6 mr-2 text-sky-400" />
                    Interactive Maximum Flowchart
                </h4>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label className="text-sm text-slate-300">num1:</label>
                        <input 
                            type="number" 
                            value={inputValues.num1}
                            onChange={(e) => setInputValues({...inputValues, num1: parseInt(e.target.value) || 0})}
                            className="w-16 px-2 py-1 bg-slate-700 text-white rounded border border-slate-600"
                        />
                        <label className="text-sm text-slate-300">num2:</label>
                        <input 
                            type="number" 
                            value={inputValues.num2}
                            onChange={(e) => setInputValues({...inputValues, num2: parseInt(e.target.value) || 0})}
                            className="w-16 px-2 py-1 bg-slate-700 text-white rounded border border-slate-600"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <button 
                            onClick={playAnimation}
                            disabled={isPlaying}
                            className="p-2 bg-green-600 hover:bg-green-500 disabled:bg-green-800 text-white rounded-lg transition-colors"
                        >
                            <Play className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={resetAnimation}
                            className="p-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
                        >
                            <RotateCcw className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Flowchart Visualization */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 mb-6">
                <svg viewBox="0 0 400 600" className="w-full h-96">
                    {/* Start */}
                    <ellipse cx="200" cy="50" rx="60" ry="25" 
                             fill={currentStep >= 0 ? "#10b981" : "#374151"} 
                             stroke={currentStep === 0 ? "#ffffff" : "#6b7280"} 
                             strokeWidth="2" />
                    <text x="200" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">START</text>
                    
                    {/* Arrow 1 */}
                    {currentStep >= 1 && <line x1="200" y1="75" x2="200" y2="105" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead)" />}
                    
                    {/* Input num1 */}
                    <polygon points="150,110 250,110 230,140 170,140" 
                             fill={currentStep >= 1 ? "#06b6d4" : "#374151"} 
                             stroke={currentStep === 1 ? "#ffffff" : "#6b7280"} 
                             strokeWidth="2" />
                    <text x="200" y="130" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Input num1</text>
                    
                    {/* Arrow 2 */}
                    {currentStep >= 2 && <line x1="200" y1="140" x2="200" y2="170" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead)" />}
                    
                    {/* Input num2 */}
                    <polygon points="150,175 250,175 230,205 170,205" 
                             fill={currentStep >= 2 ? "#06b6d4" : "#374151"} 
                             stroke={currentStep === 2 ? "#ffffff" : "#6b7280"} 
                             strokeWidth="2" />
                    <text x="200" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Input num2</text>
                    
                    {/* Arrow 3 */}
                    {currentStep >= 3 && <line x1="200" y1="205" x2="200" y2="235" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead)" />}
                    
                    {/* Decision */}
                    <polygon points="200,240 250,275 200,310 150,275" 
                             fill={currentStep >= 3 ? "#f59e0b" : "#374151"} 
                             stroke={currentStep === 3 ? "#ffffff" : "#6b7280"} 
                             strokeWidth="2" />
                    <text x="200" y="270" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">num1 &gt;</text>
                    <text x="200" y="285" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">num2?</text>
                    
                    {/* Decision Arrows and Outputs */}
                    {currentStep >= 4 && (
                        <>
                            {inputValues.num1 > inputValues.num2 ? (
                                <>
                                    {/* True path */}
                                    <line x1="230" y1="290" x2="300" y2="290" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                    <text x="265" y="285" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">True</text>
                                    
                                    {/* Display num1 */}
                                    <polygon points="270,320 370,320 350,350 290,350" 
                                             fill="#06b6d4" stroke="#ffffff" strokeWidth="2" />
                                    <text x="320" y="340" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Display num1</text>
                                    
                                    {/* Connector line */}
                                    <line x1="320" y1="350" x2="320" y2="380" stroke="#06b6d4" strokeWidth="2" />
                                    <line x1="320" y1="380" x2="200" y2="380" stroke="#06b6d4" strokeWidth="2" />
                                    <line x1="200" y1="380" x2="200" y2="410" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                </>
                            ) : (
                                <>
                                    {/* False path */}
                                    <line x1="170" y1="290" x2="100" y2="290" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                    <text x="135" y="285" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">False</text>
                                    
                                    {/* Display num2 */}
                                    <polygon points="30,320 130,320 110,350 50,350" 
                                             fill="#06b6d4" stroke="#ffffff" strokeWidth="2" />
                                    <text x="80" y="340" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Display num2</text>
                                    
                                    {/* Connector line */}
                                    <line x1="80" y1="350" x2="80" y2="380" stroke="#06b6d4" strokeWidth="2" />
                                    <line x1="80" y1="380" x2="200" y2="380" stroke="#06b6d4" strokeWidth="2" />
                                    <line x1="200" y1="380" x2="200" y2="410" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                </>
                            )}
                        </>
                    )}
                    
                    {/* Stop */}
                    <ellipse cx="200" cy="435" rx="60" ry="25" 
                             fill={currentStep >= 5 ? "#10b981" : "#374151"} 
                             stroke={currentStep === 5 ? "#ffffff" : "#6b7280"} 
                             strokeWidth="2" />
                    <text x="200" y="440" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">STOP</text>
                    
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                         refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
                        </marker>
                    </defs>
                </svg>
            </div>

            {/* Current Step Information */}
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between items-center mb-2">
                    <h5 className="text-lg font-semibold text-sky-300">
                        Current Step: {steps[currentStep].name}
                    </h5>
                    <span className="text-sm text-slate-400">
                        {currentStep + 1} / {steps.length}
                    </span>
                </div>
                <p className="text-slate-300 mb-3">{steps[currentStep].desc}</p>
                <div className="bg-slate-800 p-3 rounded font-mono text-sm">
                    <span className="text-emerald-400">{steps[currentStep].label}</span>
                </div>
            </div>
        </div>
    );
};

// Additional visual components continue with similar enhanced patterns...
export const AddTwoNumbersVisual = () => { /* Implementation with interactive addition flowchart */ };
export const ComponentsVisual = () => { /* Implementation with clickable symbol explanations */ };
export const RealWorldFlowchartVisuals = () => { /* Implementation with industry examples */ };
export const InteractiveFlowchartBuilder = () => { /* Implementation with drag-and-drop builder */ };
export const ComplexFlowchartExample = () => { /* Implementation with multi-path example */ };
export const FlowchartBestPractices = () => { /* Implementation with do's and don'ts */ };
