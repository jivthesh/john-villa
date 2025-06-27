import React, { useState, useEffect } from 'react';
import { 
    ArrowRight, Grid3X3, X, Database, Users, Code, Play, Pause, RotateCcw, 
    Eye, EyeOff, ChevronDown, ChevronUp, Settings, Zap, Search, Square,
    Triangle, Diamond, Hash, Layers, Target, Award, Plus, Minus
} from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';

// Flow Diagram Visualization Component
export const FlowDiagramVisual = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const stepTypes = {
        start: { shape: 'ellipse', color: '#10b981' },
        end: { shape: 'ellipse', color: '#ef4444' },
        process: { shape: 'rect', color: '#3b82f6' },
        decision: { shape: 'diamond', color: '#f59e0b' },
        input: { shape: 'parallelogram', color: '#8b5cf6' },
        output: { shape: 'parallelogram', color: '#06b6d4' },
        loop: { shape: 'hexagon', color: '#ec4899' }
    };

    const animateFlow = () => {
        setIsAnimating(true);
        setCurrentStep(0);
        
        const interval = setInterval(() => {
            setCurrentStep(prev => {
                if (prev >= steps.length - 1) {
                    clearInterval(interval);
                    setIsAnimating(false);
                    return prev;
                }
                return prev + 1;
            });
        }, 1000);
    };

    const renderShape = (step, index, x, y) => {
        const { shape, color } = stepTypes[step.type] || stepTypes.process;
        const isActive = index <= currentStep;
        const opacity = isActive ? 1 : 0.3;

        switch (shape) {
            case 'ellipse':
                return (
                    <g key={index}>
                        <ellipse 
                            cx={x} cy={y} rx="60" ry="25" 
                            fill={isActive ? color : '#374151'} 
                            opacity={opacity}
                            stroke={isActive ? '#ffffff' : '#6b7280'}
                            strokeWidth="2"
                        />
                        <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                            {step.text}
                        </text>
                    </g>
                );
            case 'rect':
                return (
                    <g key={index}>
                        <rect 
                            x={x - 60} y={y - 25} width="120" height="50" rx="8"
                            fill={isActive ? color : '#374151'} 
                            opacity={opacity}
                            stroke={isActive ? '#ffffff' : '#6b7280'}
                            strokeWidth="2"
                        />
                        <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
                            {step.text}
                        </text>
                    </g>
                );
            case 'diamond':
                return (
                    <g key={index}>
                        <polygon 
                            points={`${x},${y-30} ${x+50},${y} ${x},${y+30} ${x-50},${y}`}
                            fill={isActive ? color : '#374151'} 
                            opacity={opacity}
                            stroke={isActive ? '#ffffff' : '#6b7280'}
                            strokeWidth="2"
                        />
                        <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                            {step.text}
                        </text>
                    </g>
                );
            case 'parallelogram':
                return (
                    <g key={index}>
                        <polygon 
                            points={`${x-50},${y-25} ${x+70},${y-25} ${x+50},${y+25} ${x-70},${y+25}`}
                            fill={isActive ? color : '#374151'} 
                            opacity={opacity}
                            stroke={isActive ? '#ffffff' : '#6b7280'}
                            strokeWidth="2"
                        />
                        <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
                            {step.text}
                        </text>
                    </g>
                );
            default:
                return renderShape({ ...step, type: 'process' }, index, x, y);
        }
    };

    return (
        <div className="bg-slate-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h5 className="text-white font-semibold">Interactive Flow Diagram</h5>
                <button 
                    onClick={animateFlow}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
                    disabled={isAnimating}
                >
                    <Play className="w-4 h-4" />
                    <span>Animate Flow</span>
                </button>
            </div>
            
            <svg viewBox="0 0 800 600" className="w-full h-96">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                     refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
                    </marker>
                </defs>
                
                {/* Render steps */}
                {steps.map((step, index) => {
                    const x = 150 + (index % 3) * 200;
                    const y = 80 + Math.floor(index / 3) * 100;
                    return renderShape(step, index, x, y);
                })}
                
                {/* Render arrows */}
                {steps.map((_, index) => {
                    if (index >= steps.length - 1) return null;
                    
                    const x1 = 150 + (index % 3) * 200;
                    const y1 = 80 + Math.floor(index / 3) * 100;
                    const x2 = 150 + ((index + 1) % 3) * 200;
                    const y2 = 80 + Math.floor((index + 1) / 3) * 100;
                    
                    const isActive = index < currentStep;
                    
                    return (
                        <line 
                            key={`arrow-${index}`}
                            x1={x1} y1={y1 + 30} x2={x2} y2={y2 - 30}
                            stroke={isActive ? '#06b6d4' : '#374151'}
                            strokeWidth="3"
                            markerEnd="url(#arrowhead)"
                            opacity={isActive ? 1 : 0.3}
                        />
                    );
                })}
            </svg>
            
            <div className="mt-4 text-center">
                <p className="text-slate-400 text-sm">
                    Step {currentStep + 1} of {steps.length}: 
                    <span className="text-white ml-2">{steps[currentStep]?.text}</span>
                </p>
            </div>
        </div>
    );
};

// Interactive Square Pattern Visualization with Memory Aid
export const SquarePatternVisual = () => {
    const [size, setSize] = useState(3);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showBuildProcess, setShowBuildProcess] = useState(false);
    
    const generateSquare = (n) => {
        return Array(n).fill().map(() => '*'.repeat(n));
    };

    const animatePattern = () => {
        setIsAnimating(true);
        setShowBuildProcess(true);
        setTimeout(() => {
            setIsAnimating(false);
            setShowBuildProcess(false);
        }, 2000);
    };

    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <div className="flex justify-between items-center mb-4">
                <h5 className="text-sky-300 font-semibold">🏗️ Square Builder Visualization</h5>
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={() => setSize(Math.max(1, size - 1))}
                        className="p-2 bg-slate-700 rounded hover:bg-slate-600 transition-colors"
                        title="Decrease size"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-white font-mono w-8 text-center bg-slate-800 px-2 py-1 rounded">{size}</span>
                    <button 
                        onClick={() => setSize(Math.min(8, size + 1))}
                        className="p-2 bg-slate-700 rounded hover:bg-slate-600 transition-colors"
                        title="Increase size"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={animatePattern}
                        className="flex items-center space-x-2 px-4 py-2 bg-sky-600 rounded hover:bg-sky-500 transition-colors"
                        title="Animate building process"
                    >
                        <Play className="w-4 h-4" />
                        <span>Build</span>
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pattern Display */}
                <div className="bg-slate-800 p-4 rounded font-mono text-lg">
                    <div className="text-center mb-2">
                        <span className="text-slate-400 text-sm">🏠 Building a {size}×{size} Square</span>
                    </div>
                    <div className={`transition-all duration-500 ${isAnimating ? 'scale-110' : ''}`}>
                        {generateSquare(size).map((row, index) => (
                            <div key={index} className="leading-tight">
                                {row.split('').map((char, charIndex) => (
                                    <span 
                                        key={charIndex}
                                        className={`inline-block text-emerald-400 ${isAnimating ? 'animate-pulse' : ''}`}
                                        style={{ 
                                            animationDelay: `${(index * size + charIndex) * 100}ms`,
                                            fontSize: '1.2em',
                                            marginRight: '2px'
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                                {showBuildProcess && (
                                    <span className="text-slate-500 ml-2 text-sm">← Row {index + 1}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Memory Aid */}
                <div className="space-y-4">
                    <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                        <h6 className="text-indigo-300 font-semibold mb-2">🧠 Memory Technique:</h6>
                        <p className="text-slate-300 text-sm">
                            Think of laying <strong>TILES ON A FLOOR</strong>:
                        </p>
                        <ul className="text-slate-400 text-xs mt-2 space-y-1">
                            <li>• Each row = a line of tiles</li>
                            <li>• Same number of tiles in each row</li>
                            <li>• Repeat the pattern {size} times</li>
                        </ul>
                    </div>
                    
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <h6 className="text-yellow-300 font-semibold mb-2">📝 Code Pattern:</h6>
                        <code className="text-emerald-400 text-sm">
                            ['*' × {size} for _ in range({size})]
                        </code>
                        <p className="text-slate-400 text-xs mt-2">
                            "Star times {size}, repeated {size} times"
                        </p>
                    </div>
                    
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <h6 className="text-sky-300 font-semibold mb-2">📊 Stats:</h6>
                        <div className="text-sm text-slate-400">
                            <div>Size: {size}×{size}</div>
                            <div>Total Stars: {size * size}</div>
                            <div>Rows: {size}</div>
                            <div>Stars per Row: {size}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Interactive Hollow Square Pattern Visualization
export const HollowSquarePatternVisual = () => {
    const [size, setSize] = useState(4);
    const [showConstruction, setShowConstruction] = useState(false);
    
    const generateHollowSquare = (n) => {
        if (n <= 2) return Array(n).fill('*'.repeat(n));
        
        const pattern = ['*'.repeat(n)];
        for (let i = 0; i < n - 2; i++) {
            pattern.push('*' + ' '.repeat(n - 2) + '*');
        }
        pattern.push('*'.repeat(n));
        return pattern;
    };

    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <div className="flex justify-between items-center mb-4">
                <h5 className="text-orange-300 font-semibold">🖼️ Picture Frame Builder</h5>
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={() => setSize(Math.max(2, size - 1))}
                        className="p-2 bg-slate-700 rounded hover:bg-slate-600"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-white font-mono w-8 text-center bg-slate-800 px-2 py-1 rounded">{size}</span>
                    <button 
                        onClick={() => setSize(Math.min(8, size + 1))}
                        className="p-2 bg-slate-700 rounded hover:bg-slate-600"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={() => setShowConstruction(!showConstruction)}
                        className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-500"
                    >
                        {showConstruction ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-4 rounded font-mono text-lg">
                    <div className="text-center mb-2">
                        <span className="text-slate-400 text-sm">🖼️ {size}×{size} Picture Frame</span>
                    </div>
                    {generateHollowSquare(size).map((row, index) => (
                        <div key={index} className="leading-tight flex items-center">
                            <div>
                                {row.split('').map((char, charIndex) => (
                                    <span 
                                        key={charIndex}
                                        className={`inline-block ${char === '*' ? 'text-orange-400' : 'text-slate-600'}`}
                                        style={{ fontSize: '1.2em', marginRight: '2px' }}
                                    >
                                        {char === ' ' ? '·' : char}
                                    </span>
                                ))}
                            </div>
                            {showConstruction && (
                                <span className="text-slate-500 ml-4 text-xs">
                                    {index === 0 ? '← Top Frame' : 
                                     index === generateHollowSquare(size).length - 1 ? '← Bottom Frame' : 
                                     '← Side Frames'}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className="space-y-4">
                    <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
                        <h6 className="text-orange-300 font-semibold mb-2">🧠 Frame Building Memory:</h6>
                        <div className="text-slate-300 text-sm space-y-2">
                            <div>1. <strong>Top Frame:</strong> Full line of stars</div>
                            <div>2. <strong>Side Frames:</strong> Star + spaces + Star</div>
                            <div>3. <strong>Bottom Frame:</strong> Full line of stars</div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <h6 className="text-yellow-300 font-semibold mb-2">📐 Frame Formula:</h6>
                        <div className="text-sm font-mono">
                            <div className="text-emerald-400">Top/Bottom: '*' × {size}</div>
                            <div className="text-sky-400">Middle: '*' + ' ' × {Math.max(0, size-2)} + '*'</div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <h6 className="text-purple-300 font-semibold mb-2">🎯 Special Cases:</h6>
                        <div className="text-slate-400 text-xs">
                            {size <= 2 ? 
                                `Size ${size}: Too small for hollow - becomes solid square` :
                                `Size ${size}: Perfect for hollow frame with ${size-2} spaces inside`
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Additional pattern visualizations follow similar structure...
export const RectanglePatternVisual = () => { 
    // Rectangle pattern with width/height controls and construction animation
    const [height, setHeight] = useState(3);
    const [width, setWidth] = useState(5);
    
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-green-300 font-semibold mb-4">🧱 Brick Wall Builder</h5>
            {/* Implementation similar to above with height/width controls */}
        </div>
    );
};

export const TrianglePatternVisual = () => { 
    // Triangle with stair-building animation
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-purple-300 font-semibold mb-4">🪜 Stair Builder</h5>
            {/* Stair-building animation with memory technique */}
        </div>
    );
};

export const InvertedTrianglePatternVisual = () => { 
    // Melting ice cube animation
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-red-300 font-semibold mb-4">🧊 Melting Ice Cube</h5>
            {/* Melting animation */}
        </div>
    );
};

export const PyramidPatternVisual = () => { 
    // Egyptian pyramid building
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-yellow-300 font-semibold mb-4">🔺 Egyptian Pyramid Builder</h5>
            {/* Pyramid construction with centering */}
        </div>
    );
};

export const InvertedPyramidPatternVisual = () => { 
    // Upside down cone
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-indigo-300 font-semibold mb-4">🍦 Upside Down Ice Cream Cone</h5>
        </div>
    );
};

export const NumberTrianglePatternVisual = () => { 
    // Number echo visualization
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-cyan-300 font-semibold mb-4">🔊 Number Echo Machine</h5>
        </div>
    );
};

export const FloydsTrianglePatternVisual = () => { 
    // Continuous counting
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-emerald-300 font-semibold mb-4">🔢 Continuous Counter</h5>
        </div>
    );
};

export const DiamondPatternVisual = () => { 
    // Diamond gem cutting
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-pink-300 font-semibold mb-4">💎 Diamond Gem Cutter</h5>
        </div>
    );
};

export const RightAlignedTrianglePatternVisual = () => { 
    // Text alignment
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-slate-300 font-semibold mb-4">📝 Text Right-Aligner</h5>
        </div>
    );
};

export const SandglassPatternVisual = () => { 
    // Hourglass timer
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-amber-300 font-semibold mb-4">⏳ Hourglass Timer</h5>
        </div>
    );
};

export const HollowRightTrianglePatternVisual = () => { 
    // Triangle picture frame
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-teal-300 font-semibold mb-4">🔺 Triangle Picture Frame</h5>
        </div>
    );
};

export const HollowInvertedRightTrianglePatternVisual = () => { 
    // Upside down triangle frame
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-rose-300 font-semibold mb-4">🔻 Inverted Triangle Frame</h5>
        </div>
    );
};

export const NumberPyramidPatternVisual = () => { 
    // Counting pyramid
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
            <h5 className="text-violet-300 font-semibold mb-4">🔢 Counting Pyramid</h5>
        </div>
    );
};
