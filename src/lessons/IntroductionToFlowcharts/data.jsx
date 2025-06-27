import React from 'react';
import { Workflow, Box, Maximize, Plus, CheckCircle, Award, Database, Building2, Cpu } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import {
    FlowchartConceptVisual,
    ComponentsVisual,
    MaxTwoNumbersVisual,
    AddTwoNumbersVisual,
    RealWorldFlowchartVisuals,
    InteractiveFlowchartBuilder,
    FlowchartSymbolsGuide,
    ComplexFlowchartExample,
    FlowchartBestPractices
} from './visuals.jsx';

export const chapters = [
    {
        icon: <Workflow className="w-5 h-5" />,
        title: "Understanding Flowcharts Fundamentals",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    A <span className="text-sky-400 font-semibold">flowchart</span> is a graphical representation of a process, system, or algorithm, 
                    using standardized symbols and arrows to show the sequence of steps needed to complete a task.
                </p>
                
                <FlowchartConceptVisual />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Key Characteristics
                        </h4>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Visual Clarity:</span> Makes complex processes easy to understand and follow
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Universal Access:</span> Understandable by everyone, including non-programmers
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Problem Breakdown:</span> Breaks complex problems into manageable steps
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Industry Standard:</span> Used at firms like Goldman Sachs for algorithm explanation
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-6 rounded-xl border border-purple-500/30">
                        <h4 className="text-purple-300 font-bold mb-4">💡 Real-World Analogy</h4>
                        <p className="text-slate-300 mb-4">
                            Flowcharts are like mapping out your daily routine:
                        </p>
                        <div className="bg-slate-800/50 p-4 rounded-lg font-mono text-sm">
                            <div className="text-sky-400">🌅 Wake up</div>
                            <div className="text-gray-400 ml-4">↓</div>
                            <div className="text-sky-400">🦷 Brush teeth</div>
                            <div className="text-gray-400 ml-4">↓</div>
                            <div className="text-yellow-400">⏰ Check time</div>
                            <div className="text-gray-400 ml-4">↓ ↘</div>
                            <div className="text-emerald-400">🏃 Run (if early)</div>
                            <div className="text-red-400 ml-8">☕ Coffee (if late)</div>
                        </div>
                        <p className="text-slate-400 text-sm mt-3">
                            Each step and decision is mapped visually with clear sequence and conditions.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mt-8">
                    <h4 className="text-white font-bold mb-4 flex items-center">
                        <Building2 className="w-5 h-5 mr-2" />
                        Professional Applications
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                            <div className="text-2xl mb-2">🏦</div>
                            <h5 className="text-sky-300 font-semibold">Financial Sector</h5>
                            <p className="text-xs text-slate-400">Algorithm explanation at investment firms</p>
                        </div>
                        <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                            <div className="text-2xl mb-2">💼</div>
                            <h5 className="text-sky-300 font-semibold">Business Processes</h5>
                            <p className="text-xs text-slate-400">Workflow documentation and training</p>
                        </div>
                        <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                            <div className="text-2xl mb-2">🔧</div>
                            <h5 className="text-sky-300 font-semibold">Software Development</h5>
                            <p className="text-xs text-slate-400">System design and debugging</p>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Box className="w-5 h-5" />,
        title: "Flowchart Components & Symbols",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Flowcharts use standardized symbols to represent different parts of a process. Understanding these components 
                    is essential for creating clear and professional diagrams.
                </p>
                
                <FlowchartSymbolsGuide />
                
                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-6">Interactive Components Explorer</h4>
                    <ComponentsVisual />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                    <div className="space-y-4">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-emerald-300 font-bold mb-4">🔵 Terminal (Start/Stop)</h5>
                            <div className="flex items-center mb-3">
                                <div className="w-16 h-8 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-xs text-emerald-300">Start</span>
                                </div>
                                <span className="text-slate-300">Oval or rounded rectangle</span>
                            </div>
                            <p className="text-sm text-slate-400">
                                Marks the beginning and end of a process. Every flowchart must have exactly one start and one stop terminal.
                            </p>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-sky-300 font-bold mb-4">📄 Input/Output</h5>
                            <div className="flex items-center mb-3">
                                <div className="w-16 h-8 bg-sky-500/20 border-2 border-sky-500 transform skew-x-12 flex items-center justify-center mr-4">
                                    <span className="text-xs text-sky-300 transform -skew-x-12">Input</span>
                                </div>
                                <span className="text-slate-300">Parallelogram</span>
                            </div>
                            <p className="text-sm text-slate-400">
                                Represents data input (reading user input) or output (displaying results to user).
                            </p>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-purple-300 font-bold mb-4">⚙️ Process</h5>
                            <div className="flex items-center mb-3">
                                <div className="w-16 h-8 bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center mr-4">
                                    <span className="text-xs text-purple-300">Process</span>
                                </div>
                                <span className="text-slate-300">Rectangle</span>
                            </div>
                            <p className="text-sm text-slate-400">
                                Represents computation, calculations, assignments, or any action performed on data.
                            </p>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-yellow-300 font-bold mb-4">◆ Decision</h5>
                            <div className="flex items-center mb-3">
                                <div className="w-12 h-12 bg-yellow-500/20 border-2 border-yellow-500 transform rotate-45 flex items-center justify-center mr-4">
                                    <span className="text-xs text-yellow-300 transform -rotate-45">?</span>
                                </div>
                                <span className="text-slate-300">Diamond</span>
                            </div>
                            <p className="text-sm text-slate-400">
                                Represents conditional checks (if-else statements). Has one input and two outputs: True/False or Yes/No.
                            </p>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-orange-300 font-bold mb-4">➡️ Flow Arrow</h5>
                            <div className="flex items-center mb-3">
                                <div className="flex items-center mr-4">
                                    <div className="w-8 h-0.5 bg-orange-500"></div>
                                    <div className="w-0 h-0 border-l-4 border-l-orange-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                                </div>
                                <span className="text-slate-300">Directional line with arrowhead</span>
                            </div>
                            <p className="text-sm text-slate-400">
                                Connects components and shows the direction of flow execution through the process.
                            </p>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-pink-300 font-bold mb-4">⭕ Connector</h5>
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-pink-500/20 border-2 border-pink-500 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-xs text-pink-300">C</span>
                                </div>
                                <span className="text-slate-300">Small circle</span>
                            </div>
                            <p className="text-sm text-slate-400">
                                Joins different parts of complex flowcharts, especially when paths need to merge or when diagrams span multiple pages.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-6 rounded-xl border border-indigo-500/30">
                    <h4 className="text-white font-bold mb-4">🎯 Key Design Principles</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-slate-300">
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2">✓</span>
                                Use consistent symbol sizes and styles
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2">✓</span>
                                Ensure arrows clearly show flow direction
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2">✓</span>
                                Label all symbols with descriptive text
                            </li>
                        </ul>
                        <ul className="space-y-2 text-slate-300">
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2">✓</span>
                                Keep decision paths clearly labeled (Yes/No, True/False)
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2">✓</span>
                                Align symbols neatly for professional appearance
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-2">✓</span>
                                Use connectors to avoid crossing lines
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Maximize className="w-5 h-5" />,
        title: "Maximum of Two Numbers Example",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Let's create a practical flowchart to find and display the maximum of two numbers. This example demonstrates 
                    how to use input/output, decision, and process symbols in a real algorithm.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 Problem Statement</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Create a flowchart to input two numbers and display the maximum value.
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <h5 className="text-emerald-300 font-semibold mb-2">Requirements:</h5>
                        <ul className="text-sm text-slate-300 space-y-1">
                            <li>• Accept two numeric inputs from the user</li>
                            <li>• Compare the two numbers</li>
                            <li>• Display the larger number as the result</li>
                            <li>• Handle the case where both numbers are equal</li>
                        </ul>
                    </div>
                </div>
                
                <MaxTwoNumbersVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Step-by-Step Breakdown</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-emerald-300">1</span>
                                </div>
                                <div>
                                    <h5 className="text-emerald-300 font-semibold">Start Terminal</h5>
                                    <p className="text-xs text-slate-400">Initialize the process with a start symbol</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-sky-500/20 border border-sky-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-sky-300">2</span>
                                </div>
                                <div>
                                    <h5 className="text-sky-300 font-semibold">Input First Number</h5>
                                    <p className="text-xs text-slate-400">Use parallelogram to get num1 from user</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-sky-500/20 border border-sky-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-sky-300">3</span>
                                </div>
                                <div>
                                    <h5 className="text-sky-300 font-semibold">Input Second Number</h5>
                                    <p className="text-xs text-slate-400">Use parallelogram to get num2 from user</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-yellow-500/20 border border-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-yellow-300">4</span>
                                </div>
                                <div>
                                    <h5 className="text-yellow-300 font-semibold">Decision: Compare Numbers</h5>
                                    <p className="text-xs text-slate-400">Diamond shape asks "num1 &gt num2?"</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-sky-500/20 border border-sky-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-sky-300">5</span>
                                </div>
                                <div>
                                    <h5 className="text-sky-300 font-semibold">Output Result</h5>
                                    <p className="text-xs text-slate-400">Display num1 if True, num2 if False</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-emerald-300">6</span>
                                </div>
                                <div>
                                    <h5 className="text-emerald-300 font-semibold">Stop Terminal</h5>
                                    <p className="text-xs text-slate-400">End the process with stop symbol</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Textual Representation</h4>
                        <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm leading-relaxed">
                            <div className="text-emerald-400 text-center">[Start]</div>
                            <div className="text-slate-400 text-center">↓</div>
                            <div className="text-sky-400 text-center">[Input num1]</div>
                            <div className="text-slate-400 text-center">↓</div>
                            <div className="text-sky-400 text-center">[Input num2]</div>
                            <div className="text-slate-400 text-center">↓</div>
                            <div className="text-yellow-400 text-center">[num1 &gt num2?]</div>
                            <div className="text-slate-400 text-center">↓ ↘</div>
                            <div className="flex justify-between">
                                <span className="text-emerald-300">True</span>
                                <span className="text-red-300">False</span>
                            </div>
                            <div className="text-slate-400 text-center">↓ ↓</div>
                            <div className="flex justify-between">
                                <span className="text-sky-400">[Display num1]</span>
                                <span className="text-sky-400">[Display num2]</span>
                            </div>
                            <div className="text-slate-400 text-center">↓ ↓</div>
                            <div className="text-pink-400 text-center">[Connector]</div>
                            <div className="text-slate-400 text-center">↓</div>
                            <div className="text-emerald-400 text-center">[Stop]</div>
                        </div>
                        
                        <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                            <h5 className="text-purple-300 font-semibold mb-2">Programming Equivalent</h5>
                            <CodeBlock>{`# Python implementation
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

if num1 > num2:
    print(f"Maximum is: {num1}")
else:
    print(f"Maximum is: {num2}")`}</CodeBlock>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-6 rounded-xl border border-green-500/30">
                    <h4 className="text-white font-bold mb-4">🎯 Key Learning Points</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="text-green-300 font-semibold mb-2">Flowchart Concepts:</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Decision diamond mirrors if-else logic</li>
                                <li>• Two output paths from decision symbol</li>
                                <li>• Connector merges parallel paths</li>
                                <li>• Clear labeling of True/False paths</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-green-300 font-semibold mb-2">Best Practices:</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Use descriptive labels in symbols</li>
                                <li>• Maintain consistent flow direction</li>
                                <li>• Ensure all paths lead to termination</li>
                                <li>• Test logic with sample values</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Plus className="w-5 h-5" />,
        title: "Addition of Two Numbers Example",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Practice creating a simpler flowchart for adding two numbers. This example demonstrates a linear flow 
                    without conditional branching, focusing on input, process, and output operations.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 Problem Statement</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Create a flowchart to add two numbers and display the result.
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <h5 className="text-emerald-300 font-semibold mb-2">Requirements:</h5>
                        <ul className="text-sm text-slate-300 space-y-1">
                            <li>• Accept two numeric inputs from the user</li>
                            <li>• Perform addition operation</li>
                            <li>• Display the sum as the result</li>
                            <li>• Use proper flowchart symbols for each step</li>
                        </ul>
                    </div>
                </div>
                
                <AddTwoNumbersVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Linear Flow Analysis</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-emerald-300">1</span>
                                </div>
                                <div>
                                    <h5 className="text-emerald-300 font-semibold">Start</h5>
                                    <p className="text-xs text-slate-400">Begin the addition process</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-sky-500/20 border border-sky-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-sky-300">2</span>
                                </div>
                                <div>
                                    <h5 className="text-sky-300 font-semibold">Input num1</h5>
                                    <p className="text-xs text-slate-400">Get first number from user</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-sky-500/20 border border-sky-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-sky-300">3</span>
                                </div>
                                <div>
                                    <h5 className="text-sky-300 font-semibold">Input num2</h5>
                                    <p className="text-xs text-slate-400">Get second number from user</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-purple-500/20 border border-purple-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-purple-300">4</span>
                                </div>
                                <div>
                                    <h5 className="text-purple-300 font-semibold">Process: Calculate Sum</h5>
                                    <p className="text-xs text-slate-400">Perform addition: sum = num1 + num2</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-sky-500/20 border border-sky-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-sky-300">5</span>
                                </div>
                                <div>
                                    <h5 className="text-sky-300 font-semibold">Output Result</h5>
                                    <p className="text-xs text-slate-400">Display the calculated sum</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-emerald-300">6</span>
                                </div>
                                <div>
                                    <h5 className="text-emerald-300 font-semibold">Stop</h5>
                                    <p className="text-xs text-slate-400">End the process</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                            <h5 className="text-green-300 font-semibold mb-2">Key Differences from Maximum Example:</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• No decision symbol needed (no conditions)</li>
                                <li>• Uses process symbol for calculation</li>
                                <li>• Single linear path from start to stop</li>
                                <li>• No connectors required (simple flow)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Flowchart Representation</h4>
                        <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm leading-loose text-center">
                            <div className="text-emerald-400">[Start]</div>
                            <div className="text-slate-400">↓</div>
                            <div className="text-sky-400">[Input num1]</div>
                            <div className="text-slate-400">↓</div>
                            <div className="text-sky-400">[Input num2]</div>
                            <div className="text-slate-400">↓</div>
                            <div className="text-purple-400">[sum = num1 + num2]</div>
                            <div className="text-slate-400">↓</div>
                            <div className="text-sky-400">[Display sum]</div>
                            <div className="text-slate-400">↓</div>
                            <div className="text-emerald-400">[Stop]</div>
                        </div>
                        
                        <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                            <h5 className="text-purple-300 font-semibold mb-2">Programming Implementation</h5>
                            <CodeBlock>{`# Python code
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
sum = num1 + num2
print(f"Sum is: {sum}")

# JavaScript equivalent
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let sum = num1 + num2;
console.log(\`Sum is: \${sum}\`);`}</CodeBlock>
                        </div>
                        
                        <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                            <h5 className="text-blue-300 font-semibold mb-2">Test Cases</h5>
                            <div className="text-sm text-slate-300 space-y-1">
                                <div><span className="text-blue-400">Input:</span> 5, 3 → <span className="text-emerald-400">Output:</span> 8</div>
                                <div><span className="text-blue-400">Input:</span> -2, 7 → <span className="text-emerald-400">Output:</span> 5</div>
                                <div><span className="text-blue-400">Input:</span> 3.5, 2.1 → <span className="text-emerald-400">Output:</span> 5.6</div>
                            </div>
                        </div>
                    </div>
                </div>

                <InteractiveFlowchartBuilder />
            </>
        )
    },
    {
        icon: <Database className="w-5 h-5" />,
        title: "Real-World Applications",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Explore how flowcharts are applied across various industries to solve real-world problems, 
                    from financial algorithms to manufacturing processes and user experience design.
                </p>
                
                <RealWorldFlowchartVisuals />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 p-6 rounded-xl border border-green-500/30">
                        <h4 className="text-green-300 font-bold mb-4 flex items-center">
                            <Building2 className="w-5 h-5 mr-2" />
                            Financial Services
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-green-200 font-semibold mb-2">Trading Algorithm Explanation</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    At firms like Goldman Sachs, flowcharts explain complex trading algorithms to stakeholders.
                                </p>
                                <div className="bg-slate-900/50 p-3 rounded-lg font-mono text-xs">
                                    <div className="text-emerald-400">[Start] → [Input market data]</div>
                                    <div className="text-yellow-400">→ [Buy condition met?]</div>
                                    <div className="text-slate-400">   ↓ True    ↓ False</div>
                                    <div className="text-sky-400">[Execute buy] [Execute sell]</div>
                                    <div className="text-emerald-400">        → [Stop]</div>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-green-200 font-semibold mb-2">Investment Decision Process</h5>
                                <p className="text-sm text-slate-300">
                                    Visualizes risk assessment and investment approval workflows for portfolio management.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-900/30 to-sky-800/20 p-6 rounded-xl border border-blue-500/30">
                        <h4 className="text-blue-300 font-bold mb-4 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Software Development
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-blue-200 font-semibold mb-2">User Authentication Flow</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Maps login processes, password validation, and security checks.
                                </p>
                                <div className="bg-slate-900/50 p-3 rounded-lg font-mono text-xs">
                                    <div className="text-sky-400">[Enter credentials]</div>
                                    <div className="text-yellow-400">→ [Valid credentials?]</div>
                                    <div className="text-emerald-400">   ↓ Yes: [Grant access]</div>
                                    <div className="text-red-400">   ↓ No: [Show error]</div>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-blue-200 font-semibold mb-2">Error Handling Workflow</h5>
                                <p className="text-sm text-slate-300">
                                    Documents exception handling and recovery procedures in applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <ComplexFlowchartExample />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-purple-300 font-bold mb-4">🏭 Manufacturing</h4>
                        <div className="space-y-3">
                            <div>
                                <h5 className="text-purple-200 font-semibold text-sm">Quality Control Process</h5>
                                <p className="text-xs text-slate-400">
                                    Automated inspection workflows with decision points for pass/fail criteria.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-purple-200 font-semibold text-sm">Production Line Setup</h5>
                                <p className="text-xs text-slate-400">
                                    Machine configuration and initialization procedures.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-purple-200 font-semibold text-sm">Maintenance Scheduling</h5>
                                <p className="text-xs text-slate-400">
                                    Preventive maintenance decision trees based on usage metrics.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-orange-300 font-bold mb-4">🎨 UX Design</h4>
                        <div className="space-y-3">
                            <div>
                                <h5 className="text-orange-200 font-semibold text-sm">User Onboarding</h5>
                                <p className="text-xs text-slate-400">
                                    Step-by-step user registration and welcome flow design.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-orange-200 font-semibold text-sm">Checkout Process</h5>
                                <p className="text-xs text-slate-400">
                                    E-commerce payment flow with validation and confirmation steps.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-orange-200 font-semibold text-sm">Error Recovery</h5>
                                <p className="text-xs text-slate-400">
                                    User-friendly error handling and recovery paths.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-pink-300 font-bold mb-4">🔧 IT Support</h4>
                        <div className="space-y-3">
                            <div>
                                <h5 className="text-pink-200 font-semibold text-sm">Network Troubleshooting</h5>
                                <p className="text-xs text-slate-400">
                                    Systematic diagnosis of connectivity issues and solutions.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-pink-200 font-semibold text-sm">Incident Response</h5>
                                <p className="text-xs text-slate-400">
                                    Security incident classification and escalation procedures.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-pink-200 font-semibold text-sm">Software Installation</h5>
                                <p className="text-xs text-slate-400">
                                    Standardized deployment and configuration workflows.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/30">
                    <h4 className="text-white font-bold mb-6 text-xl">Industry Impact & Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-indigo-300 font-semibold mb-4">Communication Benefits</h5>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-indigo-400 mr-2">•</span>
                                    Bridge technical and non-technical teams
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-400 mr-2">•</span>
                                    Standardize process documentation
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-400 mr-2">•</span>
                                    Facilitate stakeholder presentations
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-400 mr-2">•</span>
                                    Enable collaborative problem-solving
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-purple-300 font-semibold mb-4">Operational Benefits</h5>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    Reduce implementation errors
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    Accelerate training and onboarding
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    Improve quality assurance processes
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    Support regulatory compliance
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Best Practices & Advanced Concepts",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Master professional flowchart design principles, advanced techniques, and industry best practices 
                    for creating clear, maintainable, and effective process diagrams.
                </p>
                
                <FlowchartBestPractices />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-emerald-900/50 to-green-900/30 p-6 rounded-xl border border-emerald-500/30">
                            <h4 className="text-emerald-300 font-bold mb-4">✅ Design Best Practices</h4>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                                    <div>
                                        <span className="font-semibold text-emerald-200">Consistent Symbol Usage</span>
                                        <p className="text-xs text-slate-400">Use standard symbols consistently throughout your flowchart</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                                    <div>
                                        <span className="font-semibold text-emerald-200">Clear Flow Direction</span>
                                        <p className="text-xs text-slate-400">Ensure arrows clearly indicate the sequence of operations</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                                    <div>
                                        <span className="font-semibold text-emerald-200">Descriptive Labels</span>
                                        <p className="text-xs text-slate-400">Use clear, concise text that describes each step accurately</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                                    <div>
                                        <span className="font-semibold text-emerald-200">Logical Organization</span>
                                        <p className="text-xs text-slate-400">Arrange symbols in a logical, easy-to-follow layout</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-red-900/50 to-pink-900/30 p-6 rounded-xl border border-red-500/30">
                            <h4 className="text-red-300 font-bold mb-4">❌ Common Mistakes</h4>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="text-red-400 mr-2 mt-1">✗</span>
                                    <div>
                                        <span className="font-semibold text-red-200">Overcomplicated Diagrams</span>
                                        <p className="text-xs text-slate-400">Breaking complex processes into smaller, manageable flowcharts</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-red-400 mr-2 mt-1">✗</span>
                                    <div>
                                        <span className="font-semibold text-red-200">Missing Decision Outcomes</span>
                                        <p className="text-xs text-slate-400">Always label both paths from decision symbols</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-red-400 mr-2 mt-1">✗</span>
                                    <div>
                                        <span className="font-semibold text-red-200">Inconsistent Symbol Sizes</span>
                                        <p className="text-xs text-slate-400">Maintain uniform sizing for professional appearance</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-red-400 mr-2 mt-1">✗</span>
                                    <div>
                                        <span className="font-semibold text-red-200">Unclear Termination</span>
                                        <p className="text-xs text-slate-400">Ensure all paths eventually lead to a stop symbol</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-sky-300 font-bold mb-4">🔧 Advanced Techniques</h4>
                            <div className="space-y-4">
                                <div>
                                    <h5 className="text-sky-200 font-semibold mb-2">Modular Design</h5>
                                    <p className="text-sm text-slate-400 mb-2">
                                        Break large processes into sub-flowcharts that can be referenced and reused.
                                    </p>
                                    <div className="bg-slate-900/50 p-3 rounded font-mono text-xs">
                                        <div className="text-purple-400">[Main Process] → [Sub-process A] → [Sub-process B]</div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h5 className="text-sky-200 font-semibold mb-2">Swim Lane Diagrams</h5>
                                    <p className="text-sm text-slate-400 mb-2">
                                        Organize flowcharts by roles or departments to show responsibility.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        <div className="bg-blue-900/30 p-2 rounded text-center">Customer</div>
                                        <div className="bg-green-900/30 p-2 rounded text-center">Support</div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h5 className="text-sky-200 font-semibold mb-2">Exception Handling</h5>
                                    <p className="text-sm text-slate-400">
                                        Include error paths and recovery procedures in your flowcharts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-sky-300 font-bold mb-4">📐 Professional Standards</h4>
                            <div className="space-y-3">
                                <div>
                                    <h5 className="text-sky-200 font-semibold text-sm">ISO 5807 Standard</h5>
                                    <p className="text-xs text-slate-400">
                                        International standard for flowchart symbols and conventions.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-sky-200 font-semibold text-sm">Documentation Requirements</h5>
                                    <p className="text-xs text-slate-400">
                                        Include version control, author information, and revision history.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-sky-200 font-semibold text-sm">Accessibility Guidelines</h5>
                                    <p className="text-xs text-slate-400">
                                        Use high contrast colors and clear fonts for universal accessibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-6">Tools and Software Recommendations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-emerald-300 font-bold mb-3">🔧 Professional Tools</h5>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>• <span className="text-emerald-400">Microsoft Visio</span> - Industry standard</li>
                                <li>• <span className="text-emerald-400">Lucidchart</span> - Web-based collaboration</li>
                                <li>• <span className="text-emerald-400">Draw.io</span> - Free online editor</li>
                                <li>• <span className="text-emerald-400">OmniGraffle</span> - Mac-specific tool</li>
                            </ul>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-sky-300 font-bold mb-3">💻 Development Integration</h5>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>• <span className="text-sky-400">Mermaid</span> - Code-based diagrams</li>
                                <li>• <span className="text-sky-400">PlantUML</span> - Text-to-diagram</li>
                                <li>• <span className="text-sky-400">Graphviz</span> - Programmatic layouts</li>
                                <li>• <span className="text-sky-400">Flowchart.js</span> - Web integration</li>
                            </ul>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-purple-300 font-bold mb-3">🎨 Design & Prototyping</h5>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>• <span className="text-purple-400">Figma</span> - UI/UX flowcharts</li>
                                <li>• <span className="text-purple-400">Sketch</span> - Design workflows</li>
                                <li>• <span className="text-purple-400">Adobe XD</span> - User journey mapping</li>
                                <li>• <span className="text-purple-400">Whimsical</span> - Quick ideation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/30">
                    <h4 className="text-white font-bold mb-6 text-xl flex items-center">
                        <Award className="w-6 h-6 mr-3" />
                        Mastery Checklist
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-indigo-300 font-semibold mb-4">Core Competencies</h5>
                            <div className="space-y-2">
                                {[
                                    "Understand all standard flowchart symbols",
                                    "Create clear, logical process flows", 
                                    "Design decision trees with proper branching",
                                    "Implement effective error handling paths"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <input type="checkbox" className="mr-3 accent-indigo-500" />
                                        <span className="text-slate-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h5 className="text-purple-300 font-semibold mb-4">Advanced Skills</h5>
                            <div className="space-y-2">
                                {[
                                    "Apply flowcharts to real-world business problems",
                                    "Integrate flowcharts with development workflows",
                                    "Collaborate effectively using visual process maps",
                                    "Optimize complex processes through flowchart analysis"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <input type="checkbox" className="mr-3 accent-purple-500" />
                                        <span className="text-slate-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-slate-900/50 rounded-lg">
                        <h6 className="text-yellow-300 font-semibold mb-2">🎯 Next Steps</h6>
                        <p className="text-slate-300 text-sm">
                            Practice creating flowcharts for your daily routines, then apply these skills to programming problems 
                            and real-world processes. Consider exploring advanced topics like data structures and algorithms, 
                            where flowcharts become invaluable planning tools.
                        </p>
                    </div>
                </div>
            </>
        )
    }
];
