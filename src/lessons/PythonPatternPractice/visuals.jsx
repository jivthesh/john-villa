// import React, { useState, useEffect } from 'react';
// import { 
//     ArrowRight, Grid3X3, X, Database, Users, Code, Play, Pause, RotateCcw, 
//     Eye, EyeOff, ChevronDown, ChevronUp, Settings, Zap, Search, Square,
//     Triangle, Diamond, Hash, Layers, Target, Award, Plus, Minus
// } from 'lucide-react';
// import CodeBlock from '../../components/CodeBlock.jsx';

// // Pattern Overview Visualization
// export const PatternOverviewVisual = () => {
//     const [activeCategory, setActiveCategory] = useState(0);
    
//     const categories = [
//         { name: "Basic Shapes", patterns: ["Square", "Hollow Square", "Rectangle"], color: "#06b6d4", icon: <Square className="w-4 h-4" /> },
//         { name: "Triangles", patterns: ["Right Triangle", "Inverted Triangle", "Right Aligned"], color: "#8b5cf6", icon: <Triangle className="w-4 h-4" /> },
//         { name: "Pyramids", patterns: ["Pyramid", "Inverted Pyramid", "Diamond", "Sandglass"], color: "#f59e0b", icon: <Diamond className="w-4 h-4" /> },
//         { name: "Numbers", patterns: ["Number Triangle", "Floyd's Triangle", "Number Pyramid"], color: "#10b981", icon: <Hash className="w-4 h-4" /> },
//         { name: "Hollow", patterns: ["Hollow Right Triangle", "Hollow Inverted Triangle"], color: "#ef4444", icon: <Layers className="w-4 h-4" /> }
//     ];

//     return (
//         <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600">
//             <h4 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center">
//                 <Grid3X3 className="w-6 h-6 mr-2 text-sky-400" />
//                 15 Pattern Categories Overview
//             </h4>
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
//                 {categories.map((category, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setActiveCategory(index)}
//                         className={`p-4 rounded-lg border transition-all ${
//                             activeCategory === index 
//                                 ? 'border-white bg-slate-700' 
//                                 : 'border-slate-600 bg-slate-800/50 hover:bg-slate-700/50'
//                         }`}
//                     >
//                         <div className="flex items-center justify-center mb-2">
//                             <div className="p-2 rounded" style={{ backgroundColor: `${category.color}20`, color: category.color }}>
//                                 {category.icon}
//                             </div>
//                         </div>
//                         <h5 className="text-white font-semibold text-sm mb-1">{category.name}</h5>
//                         <p className="text-slate-400 text-xs">{category.patterns.length} patterns</p>
//                     </button>
//                 ))}
//             </div>
//             <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//                 <h5 className="text-xl font-semibold text-white mb-4">
//                     {categories[activeCategory].name} Patterns
//                 </h5>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {categories[activeCategory].patterns.map((pattern, index) => (
//                         <div key={index} className="bg-slate-800 p-3 rounded border border-slate-700">
//                             <span className="text-slate-300">{pattern}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Square Pattern Visualization
// export const SquarePatternVisual = () => {
//     const [size, setSize] = useState(3);
//     const [isAnimating, setIsAnimating] = useState(false);

//     const generateSquare = (n) => Array(n).fill().map(() => '*'.repeat(n));
//     const animatePattern = () => {
//         setIsAnimating(true);
//         setTimeout(() => setIsAnimating(false), 1000);
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Interactive Square Pattern</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(1, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                     <button onClick={animatePattern} className="p-1 bg-sky-600 rounded hover:bg-sky-500">
//                         <Play className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 <div className={`transition-all duration-500 ${isAnimating ? 'scale-110' : ''}`}>
//                     {generateSquare(size).map((row, index) => (
//                         <div key={index} className="text-emerald-400 leading-tight">
//                             {row.split('').map((char, charIndex) => (
//                                 <span 
//                                     key={charIndex}
//                                     className={`inline-block ${isAnimating ? 'animate-pulse' : ''}`}
//                                     style={{ animationDelay: `${(index * size + charIndex) * 50}ms` }}
//                                 >
//                                     {char}
//                                 </span>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Size: {size}x{size}</div>
//                 <div>Code: {`['*'.repeat(${size}) for _ in range(${size})]`}</div>
//                 <svg width="200" height="100" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">Loop n times</text>
//                         <path d="M150 20 L190 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="20" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Hollow Square Pattern Visualization
// export const HollowSquarePatternVisual = () => {
//     const [size, setSize] = useState(4);
    
//     const generateHollowSquare = (n) => {
//         if (n <= 2) return Array(n).fill('*'.repeat(n));
//         const pattern = ['*'.repeat(n)];
//         for (let i = 0; i < n - 2; i++) pattern.push('*' + ' '.repeat(n - 2) + '*');
//         pattern.push('*'.repeat(n));
//         return pattern;
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Hollow Square Pattern</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(2, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateHollowSquare(size).map((row, index) => (
//                     <div key={index} className="leading-tight">
//                         {row.split('').map((char, charIndex) => (
//                             <span 
//                                 key={charIndex}
//                                 className={char === '*' ? 'text-emerald-400' : 'text-slate-600'}
//                             >
//                                 {char === ' ' ? '·' : char}
//                             </span>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Logic: Solid border, hollow interior</div>
//                 <div>Special case: n ≤ 2 (completely solid)</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">Check n ≤ 2</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#ef4444" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Return solid</text>
//                         <path d="M150 110 L150 110" stroke="#94a3b8" strokeWidth="2" />
//                         <rect x="100" y="120" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="140" textAnchor="middle" fill="white" fontSize="12">Build hollow</text>
//                         <path d="M150 160 L190 160" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="120" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="140" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Rectangle Pattern Visualization
// export const RectanglePatternVisual = () => {
//     const [height, setHeight] = useState(3);
//     const [width, setWidth] = useState(5);
    
//     const generateRectangle = (h, w) => Array(h).fill('*'.repeat(w));

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Rectangle Pattern</h5>
//                 <div className="flex items-center space-x-4">
//                     <div className="flex items-center space-x-2">
//                         <span className="text-xs text-slate-400">H:</span>
//                         <button onClick={() => setHeight(Math.max(1, height - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                             <Minus className="w-3 h-3" />
//                         </button>
//                         <span className="text-white font-mono w-6 text-center text-sm">{height}</span>
//                         <button onClick={() => setHeight(Math.min(6, height + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                             <Plus className="w-3 h-3" />
//                         </button>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <span className="text-xs text-slate-400">W:</span>
//                         <button onClick={() => setWidth(Math.max(1, width - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                             <Minus className="w-3 h-3" />
//                         </button>
//                         <span className="text-white font-mono w-6 text-center text-sm">{width}</span>
//                         <button onClick={() => setWidth(Math.min(8, width + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                             <Plus className="w-3 h-3" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateRectangle(height, width).map((row, index) => (
//                     <div key={index} className="text-emerald-400 leading-tight">
//                         {row}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Dimensions: {height} × {width}</div>
//                 <div>Code: {`['*'.repeat(${width}) for _ in range(${height})]`}</div>
//                 <svg width="200" height="100" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">Loop n times</text>
//                         <path d="M150 20 L190 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="20" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Triangle Pattern Visualization
// export const TrianglePatternVisual = () => {
//     const [size, setSize] = useState(4);
//     const [showSteps, setShowSteps] = useState(false);
    
//     const generateTriangle = (n) => Array(n).fill().map((_, i) => '*'.repeat(i + 1));

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Right Triangle Pattern</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setShowSteps(!showSteps)} className="p-1 bg-purple-600 rounded hover:bg-purple-500">
//                         <Eye className="w-4 h-4" />
//                     </button>
//                     <button onClick={() => setSize(Math.max(1, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateTriangle(size).map((row, index) => (
//                     <div key={index} className="leading-tight flex items-center">
//                         <span className="text-emerald-400 mr-4">{row}</span>
//                         {showSteps && (
//                             <span className="text-slate-500 text-xs">
//                                 row {index + 1}: {'*'.repeat(index + 1)}
//                             </span>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Pattern: Row i has i stars</div>
//                 <div>Range: 1 to {size} (inclusive)</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">i = 1 to n</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Add i stars</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Inverted Triangle Pattern Visualization
// export const InvertedTrianglePatternVisual = () => {
//     const [size, setSize] = useState(4);
    
//     const generateInvertedTriangle = (n) => Array(n).fill().map((_, i) => '*'.repeat(n - i));

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Inverted Triangle Pattern</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(1, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateInvertedTriangle(size).map((row, index) => (
//                     <div key={index} className="text-emerald-400 leading-tight">
//                         {row}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Pattern: Starts with {size} stars, decreases by 1</div>
//                 <div>Range: {size} down to 1</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">i = n to 1</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Add (n-i) stars</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Pyramid Pattern Visualization
// export const PyramidPatternVisual = () => {
//     const [size, setSize] = useState(4);
    
//     const generatePyramid = (n) => {
//         const pattern = [];
//         for (let i = 0; i < n; i++) {
//             const spaces = ' '.repeat(n - i - 1);
//             const stars = '*'.repeat(2 * i + 1);
//             pattern.push(spaces + stars + spaces);
//         }
//         return pattern;
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Pyramid Pattern</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(1, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generatePyramid(size).map((row, index) => (
//                     <div key={index} className="text-emerald-400 leading-tight text-center">
//                         {row}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Formula: (2 * i + 1) stars, (n - i - 1) spaces</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">i = 0 to n-1</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Add spaces + stars</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Inverted Pyramid Pattern Visualization
// export const InvertedPyramidPatternVisual = () => {
//     const [size, setSize] = useState(4);
    
//     const generateInvertedPyramid = (n) => {
//         const pattern = [];
//         for (let i = 0; i < n; i++) {
//             const spaces = ' '.repeat(i);
//             const stars = '*'.repeat(2 * (n - i) - 1);
//             pattern.push(spaces + stars + spaces);
//         }
//         return pattern;
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Inverted Pyramid Pattern</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(1, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateInvertedPyramid(size).map((row, index) => (
//                     <div key={index} className="text-emerald-400 leading-tight text-center">
//                         {row}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Formula: (2 * (n - i) - 1) stars, i spaces</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">i = 0 to n-1</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Add spaces + stars</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Diamond Pattern Visualization
// export const DiamondPatternVisual = () => {
//     const [size, setSize] = useState(4);
    
//     const generateDiamond = (n) => {
//         const upper = Array(n).fill().map((_, i) => {
//             const spaces = ' '.repeat(n - i - 1);
//             const stars = '*'.repeat(2 * i + 1);
//             return spaces + stars + spaces;
//         });
//         const lower = Array(n - 1).fill().map((_, i) => {
//             const spaces = ' '.repeat(i + 1);
//             const stars = '*'.repeat(2 * (n - i - 1) - 1);
//             return spaces + stars + spaces;
//         });
//         return [...upper, ...lower];
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Diamond Pattern</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(2, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateDiamond(size).map((row, index) => (
//                     <div key={index} className="text-emerald-400 leading-tight text-center">
//                         {row}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Logic: Upper pyramid + lower inverted pyramid</div>
//                 <svg width="300" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">Build upper</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Build lower</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Right Aligned Triangle Pattern Visualization
// export const RightAlignedTrianglePatternVisual = () => {
//     const [size, setSize] = useState(4);
    
//     const generateRightAlignedTriangle = (n) => {
//         return Array(n).fill().map((_, i) => ' '.repeat(n - i - 1) + '*'.repeat(i + 1));
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Right Aligned Triangle</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(1, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateRightAlignedTriangle(size).map((row, index) => (
//                     <div key={index} className="text-emerald-400 leading-tight">
//                         {row}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Logic: (n - i - 1) spaces + i stars</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">i = 1 to n</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Add spaces + stars</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Sandglass Pattern Visualization
// export const SandglassPatternVisual = () => {
//     const [size, setSize] = useState(4);
    
//     const generateSandglass = (n) => {
//         const pattern = [];
//         for (let i = 0; i < n; i++) {
//             const spaces = ' '.repeat(i);
//             const stars = '*'.repeat(2 * (n - i) - 1);
//             pattern.push(spaces + stars + spaces);
//         }
//         for (let i = 1; i < n; i++) {
//             const spaces = ' '.repeat(n - i - 1);
//             const stars = '*'.repeat(2 * i + 1);
//             pattern.push(spaces + stars + spaces);
//         }
//         return pattern;
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Sandglass Pattern</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(2, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateSandglass(size).map((row, index) => (
//                     <div key={index} className="text-emerald-400 leading-tight text-center">
//                         {row}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Logic: Upper inverted + lower pyramid</div>
//                 <svg width="300" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">Build upper</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Build lower</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Number Triangle Pattern Visualization
// export const NumberTrianglePatternVisual = () => {
//     const [size, setSize] = useState(4);
    
//     const generateNumberTriangle = (n) => {
//         return Array(n).fill().map((_, i) => str(i + 1).repeat(i + 1));
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Number Triangle</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(1, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateNumberTriangle(size).map((row, index) => (
//                     <div key={index} className="text-emerald-400 leading-tight">
//                         {row}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Logic: Row i repeats digit i</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">i = 1 to n</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Repeat i digits</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Floyd's Triangle Pattern Visualization
// export const FloydsTrianglePatternVisual = () => {
//     const [size, setSize] = useState(4);
//     const [currentNum, setCurrentNum] = useState(1);
    
//     const generateFloydsTriangle = (n) => {
//         const pattern = [];
//         let num = 1;
//         for (let i = 1; i <= n; i++) {
//             const row = Array(i).fill().map((_, j) => num + j).join(' ');
//             pattern.push(row);
//             num += i;
//         }
//         return pattern;
//     };

//     useEffect(() => {
//         setCurrentNum(1); // Reset number on size change
//     }, [size]);

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Floyd's Triangle</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(1, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateFloydsTriangle(size).map((row, index) => (
//                     <div key={index} className="text-emerald-400 leading-tight">
//                         {row}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Logic: Consecutive numbers, row i has i numbers</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">i = 1 to n</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Add i numbers</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Number Pyramid Pattern Visualization
// export const NumberPyramidPatternVisual = () => {
//     const [size, setSize] = useState(4);
    
//     const generateNumberPyramid = (n) => {
//         const pattern = [];
//         for (let i = 1; i <= n; i++) {
//             const spaces = ' '.repeat(n - i);
//             const numbers = Array(i).fill().map((_, j) => j + 1).join(' ');
//             pattern.push(spaces + numbers + spaces);
//         }
//         return pattern;
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Number Pyramid</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(1, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateNumberPyramid(size).map((row, index) => (
//                     <div key={index} className="text-emerald-400 leading-tight text-center">
//                         {row}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Logic: Centered numbers 1 to i</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">i = 1 to n</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Add numbers</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Hollow Right Triangle Pattern Visualization
// export const HollowRightTrianglePatternVisual = () => {
//     const [size, setSize] = useState(4);
    
//     const generateHollowRightTriangle = (n) => {
//         const pattern = [];
//         for (let i = 1; i <= n; i++) {
//             if (i === 1 || i === 2 || i === n) {
//                 pattern.push('*'.repeat(i));
//             } else {
//                 pattern.push('*' + ' '.repeat(i - 2) + '*');
//             }
//         }
//         return pattern;
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Hollow Right Triangle</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(2, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateHollowRightTriangle(size).map((row, index) => (
//                     <div key={index} className="leading-tight">
//                         {row.split('').map((char, charIndex) => (
//                             <span 
//                                 key={charIndex}
//                                 className={char === '*' ? 'text-emerald-400' : 'text-slate-600'}
//                             >
//                                 {char === ' ' ? '·' : char}
//                             </span>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Logic: Solid edges, hollow interior</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">i = 1 to n</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Check edge case</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Hollow Inverted Right Triangle Pattern Visualization
// export const HollowInvertedRightTrianglePatternVisual = () => {
//     const [size, setSize] = useState(5);
    
//     const generateHollowInvertedRightTriangle = (n) => {
//         const pattern = [];
//         for (let i = n; i >= 1; i--) {
//             if (i === n || i === 2 || i === 1) {
//                 pattern.push('*'.repeat(i));
//             } else {
//                 pattern.push('*' + ' '.repeat(i - 2) + '*');
//             }
//         }
//         return pattern;
//     };

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h5 className="text-sky-300 font-semibold">Hollow Inverted Right Triangle</h5>
//                 <div className="flex items-center space-x-2">
//                     <button onClick={() => setSize(Math.max(2, size - 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-white font-mono w-8 text-center">{size}</span>
//                     <button onClick={() => setSize(Math.min(8, size + 1))} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                         <Plus className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                 {generateHollowInvertedRightTriangle(size).map((row, index) => (
//                     <div key={index} className="leading-tight">
//                         {row.split('').map((char, charIndex) => (
//                             <span 
//                                 key={charIndex}
//                                 className={char === '*' ? 'text-emerald-400' : 'text-slate-600'}
//                             >
//                                 {char === ' ' ? '·' : char}
//                             </span>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-4 text-xs text-slate-400">
//                 <div>Logic: Solid edges, hollow interior (reversed)</div>
//                 <svg width="250" height="150" className="mt-2">
//                     <g transform="translate(10, 10)">
//                         <rect x="0" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="20" y="20" textAnchor="middle" fill="white" fontSize="12">Start</text>
//                         <path d="M50 20 L90 20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="0" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="20" textAnchor="middle" fill="white" fontSize="12">i = n to 1</text>
//                         <path d="M150 20 L150 60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="100" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="120" y="90" textAnchor="middle" fill="white" fontSize="12">Check edge case</text>
//                         <path d="M150 110 L190 110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
//                         <rect x="200" y="70" width="40" height="40" rx="5" fill="#22c55e" />
//                         <text x="220" y="90" textAnchor="middle" fill="white" fontSize="12">End</text>
//                     </g>
//                     <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
//                             <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
//                         </marker>
//                     </defs>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// // Interactive Pattern Builder
// export const InteractivePatternBuilder = () => {
//     const [patternType, setPatternType] = useState('square');
//     const [size, setSize] = useState(3);
//     const [customChar, setCustomChar] = useState('*');
//     const [pattern, setPattern] = useState([]);

//     useEffect(() => {
//         const generatePattern = () => {
//             switch (patternType) {
//                 case 'square':
//                     setPattern(Array(size).fill().map(() => customChar.repeat(size)));
//                     break;
//                 case 'triangle':
//                     setPattern(Array(size).fill().map((_, i) => customChar.repeat(i + 1)));
//                     break;
//                 case 'pyramid':
//                     setPattern(Array(size).fill().map((_, i) => {
//                         const spaces = ' '.repeat(size - i - 1);
//                         const chars = customChar.repeat(2 * i + 1);
//                         return spaces + chars + spaces;
//                     }));
//                     break;
//                 default:
//                     setPattern([]);
//             }
//         };
//         generatePattern();
//     }, [patternType, size, customChar]);

//     return (
//         <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
//             <h4 className="text-xl font-bold text-white mb-6">Interactive Pattern Builder</h4>
//             <div className="space-y-4">
//                 <div>
//                     <label className="block text-sm text-slate-400 mb-1">Pattern Type</label>
//                     <select
//                         value={patternType}
//                         onChange={(e) => setPatternType(e.target.value)}
//                         className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-white"
//                     >
//                         <option value="square">Square</option>
//                         <option value="triangle">Triangle</option>
//                         <option value="pyramid">Pyramid</option>
//                     </select>
//                 </div>
//                 <div className="flex space-x-4">
//                     <div className="flex-1">
//                         <label className="block text-sm text-slate-400 mb-1">Size</label>
//                         <input
//                             type="number"
//                             value={size}
//                             onChange={(e) => setSize(Math.max(1, Math.min(8, e.target.value)))}
//                             className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-white"
//                             min="1"
//                             max="8"
//                         />
//                     </div>
//                     <div className="flex-1">
//                         <label className="block text-sm text-slate-400 mb-1">Character</label>
//                         <input
//                             type="text"
//                             value={customChar}
//                             onChange={(e) => setCustomChar(e.target.value[0] || '*')}
//                             className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-white"
//                             maxLength="1"
//                         />
//                     </div>
//                 </div>
//                 <div className="bg-slate-800 p-4 rounded font-mono text-sm">
//                     {pattern.map((row, index) => (
//                         <div key={index} className="text-emerald-400 leading-tight text-center">
//                             {row}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Pattern Category Visualization
// export const PatternCategoryVisual = () => {
//     const categories = [
//         { name: "Basic Shapes", count: 3, color: "#06b6d4", icon: <Square className="w-5 h-5" /> },
//         { name: "Triangles", count: 3, color: "#8b5cf6", icon: <Triangle className="w-5 h-5" /> },
//         { name: "Pyramids", count: 4, color: "#f59e0b", icon: <Diamond className="w-5 h-5" /> },
//         { name: "Numbers", count: 3, color: "#10b981", icon: <Hash className="w-5 h-5" /> },
//         { name: "Hollow", count: 2, color: "#ef4444", icon: <Layers className="w-5 h-5" /> }
//     ];

//     return (
//         <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600">
//             <h4 className="text-xl font-bold text-white mb-6 text-center">Pattern Distribution</h4>
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//                 {categories.map((category, index) => (
//                     <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-center">
//                         <div className="mb-2" style={{ color: category.color }}>
//                             {category.icon}
//                         </div>
//                         <h5 className="text-white font-semibold">{category.name}</h5>
//                         <p className="text-sm text-slate-400">{category.count} patterns</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// // Code Analysis Visualization
// // Code Analysis Visualization
// export const CodeAnalysisVisual = () => {
//     const [showDetails, setShowDetails] = useState(false);

//     return (
//         <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600">
//             <div className="flex justify-between items-center mb-4">
//                 <h4 className="text-xl font-bold text-white">Code Analysis Summary</h4>
//                 <button onClick={() => setShowDetails(!showDetails)} className="p-1 bg-slate-700 rounded hover:bg-slate-600">
//                     {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
//                 </button>
//             </div>
//             {showDetails && (
//                 <div className="space-y-4">
//                     <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
//                         <h5 className="text-sky-300 font-semibold mb-2">Complexity Metrics</h5>
//                         <p className="text-slate-400 text-sm">Cyclomatic Complexity: 5</p>
//                         <p className="text-slate-400 text-sm">Lines of Code: 320</p>
//                     </div>
//                     <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
//                         <h5 className="text-sky-300 font-semibold mb-2">Function Breakdown</h5>
//                         <p className="text-slate-400 text-sm">Components: 15</p>
//                         <p className="text-slate-400 text-sm">Average Function Length: 18 lines</p>
//                     </div>
//                     <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
//                         <h5 className="text-sky-300 font-semibold mb-2">Dependencies</h5>
//                         <p className="text-slate-400 text-sm">React: 1.0.0</p>
//                         <p className="text-slate-400 text-sm">lucide-react: 0.3.0</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };



import React, { useState, useEffect, useRef } from 'react';
import { 
    ArrowRight, Grid3X3, Play, Pause, RotateCcw, Eye, EyeOff, 
    Plus, Minus, Sparkles, Zap, Target, Settings, Palette, Bot,
    TrendingUp, BarChart3, Activity, Layers as LayersIcon
} from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';

// Modern Flow Chart with 3D Elements and Animations
export const ModernFlowChart = ({ steps, connections }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const svgRef = useRef(null);

    const nodeTypes = {
        start: { 
            shape: 'ellipse', 
            gradient: 'from-emerald-400 to-emerald-600',
            shadow: 'shadow-emerald-500/50',
            glow: 'drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]'
        },
        end: { 
            shape: 'ellipse', 
            gradient: 'from-red-400 to-red-600',
            shadow: 'shadow-red-500/50',
            glow: 'drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]'
        },
        process: { 
            shape: 'rect', 
            gradient: 'from-blue-400 to-blue-600',
            shadow: 'shadow-blue-500/50',
            glow: 'drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]'
        },
        decision: { 
            shape: 'diamond', 
            gradient: 'from-yellow-400 to-orange-500',
            shadow: 'shadow-yellow-500/50',
            glow: 'drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]'
        },
        input: { 
            shape: 'parallelogram', 
            gradient: 'from-purple-400 to-purple-600',
            shadow: 'shadow-purple-500/50',
            glow: 'drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]'
        },
        output: { 
            shape: 'parallelogram', 
            gradient: 'from-cyan-400 to-cyan-600',
            shadow: 'shadow-cyan-500/50',
            glow: 'drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]'
        },
        loop: { 
            shape: 'hexagon', 
            gradient: 'from-pink-400 to-pink-600',
            shadow: 'shadow-pink-500/50',
            glow: 'drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]'
        }
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
        }, 1200);
    };

    const renderModernNode = (step, index) => {
        const nodeType = nodeTypes[step.type] || nodeTypes.process;
        const isActive = index <= currentStep;
        const { x, y } = step.position;

        return (
            <g key={step.id} transform={`translate(${x}, ${y})`}>
                {/* Glow effect */}
                {isActive && (
                    <circle
                        cx="0" cy="0" r="80"
                        fill="url(#glowGradient)"
                        opacity="0.3"
                        className="animate-pulse"
                    />
                )}
                
                {/* Main shape */}
                {step.type === 'start' || step.type === 'end' ? (
                    <ellipse
                        cx="0" cy="0" rx="60" ry="30"
                        fill={`url(#${step.type}Gradient)`}
                        stroke={isActive ? '#ffffff' : '#6b7280'}
                        strokeWidth="3"
                        className={`transition-all duration-500 ${isActive ? 'drop-shadow-lg' : ''}`}
                        style={{
                            filter: isActive ? nodeType.glow : 'none',
                            transform: isActive ? 'scale(1.1)' : 'scale(1)'
                        }}
                    />
                ) : step.type === 'decision' ? (
                    <polygon
                        points="-50,0 0,-35 50,0 0,35"
                        fill={`url(#${step.type}Gradient)`}
                        stroke={isActive ? '#ffffff' : '#6b7280'}
                        strokeWidth="3"
                        className="transition-all duration-500"
                        style={{
                            filter: isActive ? nodeType.glow : 'none',
                            transform: isActive ? 'scale(1.1)' : 'scale(1)'
                        }}
                    />
                ) : step.type === 'input' || step.type === 'output' ? (
                    <polygon
                        points="-60,-25 80,-25 60,25 -80,25"
                        fill={`url(#${step.type}Gradient)`}
                        stroke={isActive ? '#ffffff' : '#6b7280'}
                        strokeWidth="3"
                        className="transition-all duration-500"
                        style={{
                            filter: isActive ? nodeType.glow : 'none',
                            transform: isActive ? 'scale(1.1)' : 'scale(1)'
                        }}
                    />
                ) : step.type === 'loop' ? (
                    <polygon
                        points="-70,-20 -35,-35 35,-35 70,-20 70,20 35,35 -35,35 -70,20"
                        fill={`url(#${step.type}Gradient)`}
                        stroke={isActive ? '#ffffff' : '#6b7280'}
                        strokeWidth="3"
                        className="transition-all duration-500"
                        style={{
                            filter: isActive ? nodeType.glow : 'none',
                            transform: isActive ? 'scale(1.1)' : 'scale(1)'
                        }}
                    />
                ) : (
                    <rect
                        x="-70" y="-25" width="140" height="50" rx="12"
                        fill={`url(#${step.type}Gradient)`}
                        stroke={isActive ? '#ffffff' : '#6b7280'}
                        strokeWidth="3"
                        className="transition-all duration-500"
                        style={{
                            filter: isActive ? nodeType.glow : 'none',
                            transform: isActive ? 'scale(1.1)' : 'scale(1)'
                        }}
                    />
                )}
                
                {/* Text */}
                <text
                    x="0" y="5"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                    className="drop-shadow-sm"
                >
                    {step.label}
                </text>
                
                {/* Progress indicator */}
                {isActive && isAnimating && (
                    <circle
                        cx="0" cy="-50"
                        r="5"
                        fill="#fbbf24"
                        className="animate-bounce"
                    />
                )}
            </g>
        );
    };

    return (
        <div className="bg-gradient-to-br from-slate-900/80 to-black/50 p-6 rounded-2xl border border-slate-600/50">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    <h5 className="text-lg font-semibold text-white">Interactive Algorithm Flow</h5>
                </div>
                <button 
                    onClick={animateFlow}
                    disabled={isAnimating}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50"
                >
                    <Play className="w-4 h-4" />
                    <span>{isAnimating ? 'Animating...' : 'Start Animation'}</span>
                </button>
            </div>
            
            <svg ref={svgRef} viewBox="0 0 800 900" className="w-full h-96">
                <defs>
                    {/* Gradients for different node types */}
                    <linearGradient id="startGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient id="endGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                    <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                    <linearGradient id="decisionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <linearGradient id="inputGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="outputGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                    <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#db2777" />
                    </linearGradient>
                    <radialGradient id="glowGradient">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                    
                    {/* Arrow markers */}
                    <marker id="arrowhead" markerWidth="12" markerHeight="8" 
                     refX="10" refY="4" orient="auto" markerUnits="strokeWidth">
                        <polygon points="0,0 12,4 0,8" fill="#06b6d4" />
                    </marker>
                </defs>
                
                {/* Render connections */}
                {connections.map((conn, index) => {
                    const fromStep = steps.find(s => s.id === conn.from);
                    const toStep = steps.find(s => s.id === conn.to);
                    if (!fromStep || !toStep) return null;
                    
                    const isActive = currentStep > steps.findIndex(s => s.id === conn.from);
                    
                    return (
                        <g key={index}>
                            <line
                                x1={fromStep.position.x}
                                y1={fromStep.position.y + 35}
                                x2={toStep.position.x}
                                y2={toStep.position.y - 35}
                                stroke={isActive ? '#06b6d4' : '#374151'}
                                strokeWidth="3"
                                markerEnd="url(#arrowhead)"
                                className="transition-all duration-500"
                                style={{
                                    filter: isActive ? 'drop-shadow(0 0 8px rgba(6,182,212,0.6))' : 'none'
                                }}
                            />
                            {conn.label && (
                                <text
                                    x={(fromStep.position.x + toStep.position.x) / 2}
                                    y={(fromStep.position.y + toStep.position.y) / 2}
                                    textAnchor="middle"
                                    fill={isActive ? '#06b6d4' : '#6b7280'}
                                    fontSize="10"
                                    fontWeight="bold"
                                    className="drop-shadow-sm"
                                >
                                    {conn.label}
                                </text>
                            )}
                        </g>
                    );
                })}
                
                {/* Render nodes */}
                {steps.map((step, index) => renderModernNode(step, index))}
            </svg>
            
            <div className="mt-4 p-4 bg-slate-800/50 rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-400">
                        Current Step: <span className="text-white font-semibold">{currentStep + 1} of {steps.length}</span>
                    </div>
                    <div className="text-sm text-slate-400">
                        {steps[currentStep]?.label || 'Ready to start'}
                    </div>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                    <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

// Enhanced Square Visualization with 3D effects
export const EnhancedSquareVisual = () => {
    const [size, setSize] = useState(4);
    const [isBuilding, setIsBuilding] = useState(false);
    const [buildStep, setBuildStep] = useState(0);
    const [viewMode, setViewMode] = useState('2d'); // '2d', '3d', 'matrix'
    const [animationSpeed, setAnimationSpeed] = useState(500);

    const generateSquare = (n) => {
        return Array(n).fill().map((_, i) => Array(n).fill('*'));
    };

    const startBuildAnimation = () => {
        setIsBuilding(true);
        setBuildStep(0);
        
        const interval = setInterval(() => {
            setBuildStep(prev => {
                if (prev >= size * size - 1) {
                    clearInterval(interval);
                    setIsBuilding(false);
                    return prev;
                }
                return prev + 1;
            });
        }, animationSpeed);
    };

    const square = generateSquare(size);

    return (
        <div className="bg-gradient-to-br from-slate-900/80 to-black/50 p-8 rounded-2xl border border-cyan-500/20">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                    <Grid3X3 className="w-6 h-6 text-cyan-400" />
                    <h5 className="text-xl font-semibold text-white">3D Square Builder</h5>
                </div>
                
                <div className="flex items-center space-x-4">
                    {/* View Mode Selector */}
                    <div className="flex bg-slate-800 rounded-xl p-1">
                        {['2d', '3d', 'matrix'].map(mode => (
                            <button
                                key={mode}
                                onClick={() => setViewMode(mode)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                                    viewMode === mode 
                                        ? 'bg-cyan-500 text-white' 
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                {mode.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    
                    {/* Size Controls */}
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={() => setSize(Math.max(1, size - 1))}
                            className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                        >
                            <Minus className="w-4 h-4 text-white" />
                        </button>
                        <div className="w-12 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                            <span className="text-white font-mono">{size}</span>
                        </div>
                        <button 
                            onClick={() => setSize(Math.min(8, size + 1))}
                            className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                        >
                            <Plus className="w-4 h-4 text-white" />
                        </button>
                    </div>
                    
                    {/* Build Animation Button */}
                    <button 
                        onClick={startBuildAnimation}
                        disabled={isBuilding}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50"
                    >
                        <Play className="w-4 h-4" />
                        <span>{isBuilding ? 'Building...' : 'Build'}</span>
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main Visualization */}
                <div className="flex items-center justify-center">
                    {viewMode === '2d' && (
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                            <div className="relative bg-slate-900/90 p-6 rounded-2xl border border-cyan-500/30">
                                <div className={`grid gap-1 transition-all duration-500`} style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
                                    {square.flat().map((cell, index) => {
                                        const isVisible = !isBuilding || index <= buildStep;
                                        return (
                                            <div
                                                key={index}
                                                className={`w-8 h-8 rounded-md transition-all duration-300 ${
                                                    isVisible 
                                                        ? 'bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg transform scale-100' 
                                                        : 'bg-slate-700/50 transform scale-95'
                                                }`}
                                                style={{
                                                    animationDelay: `${index * 50}ms`,
                                                    boxShadow: isVisible ? '0 0 20px rgba(6,182,212,0.3)' : 'none'
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {viewMode === '3d' && (
                        <div className="relative perspective-1000">
                            <div className="transform-gpu rotate-x-12 rotate-y-12">
                                <div className={`grid gap-2`} style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
                                    {square.flat().map((cell, index) => {
                                        const isVisible = !isBuilding || index <= buildStep;
                                        return (
                                            <div
                                                key={index}
                                                className={`w-10 h-10 transition-all duration-500 transform-gpu ${
                                                    isVisible 
                                                        ? 'bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl translate-z-4 scale-100' 
                                                        : 'bg-slate-700/30 translate-z-0 scale-90'
                                                }`}
                                                style={{
                                                    borderRadius: '8px',
                                                    boxShadow: isVisible ? '0 8px 32px rgba(6,182,212,0.4), 0 0 0 1px rgba(255,255,255,0.1)' : 'none',
                                                    background: isVisible ? 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)' : undefined
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {viewMode === 'matrix' && (
                        <div className="font-mono text-lg">
                            <div className="text-green-400 mb-4 text-center">Matrix Representation</div>
                            {square.map((row, rowIndex) => (
                                <div key={rowIndex} className="flex space-x-2 mb-2">
                                    {row.map((cell, colIndex) => {
                                        const index = rowIndex * size + colIndex;
                                        const isVisible = !isBuilding || index <= buildStep;
                                        return (
                                            <span
                                                key={colIndex}
                                                className={`w-8 h-8 flex items-center justify-center rounded transition-all duration-300 ${
                                                    isVisible 
                                                        ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                                                        : 'bg-slate-700/30 text-slate-600 border border-slate-600/30'
                                                }`}
                                            >
                                                {isVisible ? '*' : '·'}
                                            </span>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                {/* Analytics Panel */}
                <div className="space-y-6">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-600/50">
                        <h6 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <BarChart3 className="w-5 h-5 mr-2 text-cyan-400" />
                            Pattern Analytics
                        </h6>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Dimensions:</span>
                                <span className="text-cyan-400 font-mono">{size} × {size}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Total Elements:</span>
                                <span className="text-cyan-400 font-mono">{size * size}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Memory Usage:</span>
                                <span className="text-cyan-400 font-mono">{size * size * 8} bytes</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Time Complexity:</span>
                                <span className="text-cyan-400 font-mono">O(n²)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-600/50">
                        <h6 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Settings className="w-5 h-5 mr-2 text-purple-400" />
                            Animation Controls
                        </h6>
                        <div className="space-y-4">
                            <div>
                                <label className="text-slate-400 text-sm">Speed: {animationSpeed}ms</label>
                                <input
                                    type="range"
                                    min="100"
                                    max="1000"
                                    value={animationSpeed}
                                    onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
                                    className="w-full mt-2"
                                />
                            </div>
                            <div className="text-slate-400 text-sm">
                                Progress: {isBuilding ? `${buildStep + 1}/${size * size}` : 'Ready'}
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 rounded-2xl border border-cyan-500/30">
                        <h6 className="text-cyan-300 font-semibold mb-3">🧠 Memory Technique</h6>
                        <p className="text-slate-300 text-sm">
                            Think of a <strong className="text-cyan-300">TILE FLOOR</strong> - 
                            each tile is perfectly square and fits exactly with its neighbors. 
                            Build row by row, same number of tiles each time!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// AI-Powered Code Analyzer Component
export const ModernCodeAnalyzer = ({ code, analysis }) => {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [currentMetric, setCurrentMetric] = useState(0);

    const metrics = [
        { label: 'Complexity', value: analysis.complexity, icon: <TrendingUp className="w-4 h-4" />, color: 'text-orange-400' },
        { label: 'Readability', value: `${analysis.readability}%`, icon: <Eye className="w-4 h-4" />, color: 'text-green-400' },
        { label: 'Performance', value: `${analysis.performance}%`, icon: <Zap className="w-4 h-4" />, color: 'text-blue-400' }
    ];

    const startAnalysis = () => {
        setIsAnalyzing(true);
        const interval = setInterval(() => {
            setCurrentMetric(prev => {
                if (prev >= metrics.length - 1) {
                    clearInterval(interval);
                    setIsAnalyzing(false);
                    return prev;
                }
                return prev + 1;
            });
        }, 800);
    };

    return (
        <div className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 p-6 rounded-2xl border border-violet-500/30">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                    <Bot className="w-6 h-6 text-violet-400" />
                    <h6 className="text-lg font-semibold text-white">AI Code Analysis</h6>
                </div>
                <button 
                    onClick={startAnalysis}
                    disabled={isAnalyzing}
                    className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors disabled:opacity-50"
                >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {metrics.map((metric, index) => (
                    <div key={index} className={`bg-slate-800/50 p-4 rounded-xl border ${
                        index <= currentMetric ? 'border-violet-500/50' : 'border-slate-600/50'
                    } transition-all duration-500`}>
                        <div className="flex items-center space-x-2 mb-2">
                            <div className={metric.color}>{metric.icon}</div>
                            <span className="text-slate-400 text-sm">{metric.label}</span>
                        </div>
                        <div className={`text-2xl font-bold ${
                            index <= currentMetric ? metric.color : 'text-slate-600'
                        } transition-all duration-500`}>
                            {index <= currentMetric ? metric.value : '---'}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="bg-slate-900/50 p-4 rounded-xl">
                <h6 className="text-violet-300 font-semibold mb-3">💡 AI Suggestions</h6>
                <ul className="space-y-2">
                    {analysis.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-slate-300">
                            <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{suggestion}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Interactive Pattern Playground
export const InteractivePatternPlayground = () => {
    const [selectedPattern, setSelectedPattern] = useState('square');
    const [customCode, setCustomCode] = useState('');
    const [isExecuting, setIsExecuting] = useState(false);

    const patterns = [
        { id: 'square', name: 'Square', icon: '⬜' },
        { id: 'hollow', name: 'Hollow Square', icon: '⭕' },
        { id: 'triangle', name: 'Triangle', icon: '🔺' },
        { id: 'pyramid', name: 'Pyramid', icon: '🔻' },
        { id: 'diamond', name: 'Diamond', icon: '💎' }
    ];

    return (
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50">
            <div className="flex items-center space-x-3 mb-6">
                <Palette className="w-6 h-6 text-rainbow" />
                <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Pattern Playground
                </h4>
                <div className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium">
                    Experimental
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4">Select Pattern Type</h5>
                        <div className="grid grid-cols-2 gap-3">
                            {patterns.map(pattern => (
                                <button
                                    key={pattern.id}
                                    onClick={() => setSelectedPattern(pattern.id)}
                                    className={`p-4 rounded-xl border transition-all ${
                                        selectedPattern === pattern.id
                                            ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                                            : 'border-slate-600 bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
                                    }`}
                                >
                                    <div className="text-2xl mb-2">{pattern.icon}</div>
                                    <div className="text-sm font-medium">{pattern.name}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4">Custom Code</h5>
                        <textarea
                            value={customCode}
                            onChange={(e) => setCustomCode(e.target.value)}
                            placeholder="Write your own pattern function..."
                            className="w-full h-32 bg-slate-900 border border-slate-600 rounded-xl p-4 text-white font-mono text-sm resize-none focus:outline-none focus:border-purple-500"
                        />
                    </div>
                </div>
                
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-600/50">
                    <h5 className="text-lg font-semibold text-white mb-4">Live Preview</h5>
                    <div className="h-64 flex items-center justify-center">
                        <div className="text-slate-400">
                            Pattern preview will appear here...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Additional enhanced visual components for other patterns...
export const EnhancedHollowSquareVisual = () => { /* Similar modern structure for hollow square */ };
export const EnhancedRectangleVisual = () => { /* Enhanced rectangle visualization */ };
export const EnhancedTriangleVisual = () => { /* Modern triangle with stair-building animation */ };
export const EnhancedInvertedTriangleVisual = () => { /* Melting ice cube effect */ };
export const EnhancedPyramidVisual = () => { /* 3D pyramid construction */ };
export const EnhancedInvertedPyramidVisual = () => { /* Upside down pyramid */ };
export const EnhancedNumberTriangleVisual = () => { /* Number echo visualization */ };
export const EnhancedFloydsTriangleVisual = () => { /* Continuous counting animation */ };
export const EnhancedDiamondVisual = () => { /* Diamond gem cutting animation */ };
export const EnhancedRightAlignedTriangleVisual = () => { /* Text alignment visualization */ };
export const EnhancedSandglassVisual = () => { /* Hourglass timer animation */ };
export const EnhancedHollowRightTriangleVisual = () => { /* Triangle frame construction */ };
export const EnhancedHollowInvertedRightTriangleVisual = () => { /* Inverted triangle frame */ };
export const EnhancedNumberPyramidVisual = () => { /* Number pyramid with counting */ };
