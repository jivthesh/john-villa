import React from 'react';
import { ClipboardList, Search, Puzzle, Lightbulb, TestTube, Code, AlertTriangle, CheckCircle, Brain, Target, Users, Briefcase, Trophy, Eye } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import {
    FrameworkOverviewVisual,
    WhyFrameworkMattersVisual,
    ProblemAnalysisVisual,
    DecompositionVisual,
    ConceptRecallVisual,
    ExampleGenerationVisual,
    PseudocodeWritingVisual,
    DryRunProcessVisual,
    EdgeCasesVisual,
    InteractiveFrameworkDemo,
    LoginSystemExampleVisual,
    InterviewTipsVisual,
    ChecklistVisual,
    RealWorldApplicationsVisual
} from './visuals.jsx';

export const chapters = [
    {
        icon: <ClipboardList className="w-5 h-5" />,
        title: "Why a Structured Framework Matters",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Solving coding problems is not just about writing code—it's about applying a structured approach that enhances 
                    your clarity, reduces errors, and impresses interviewers. This framework will evolve into a natural habit with practice.
                </p>
                
                <WhyFrameworkMattersVisual />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-red-300 font-bold mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Common Student Mistakes
                        </h4>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start">
                                <span className="text-red-400 mr-2">✗</span>
                                <div>
                                    <span className="font-semibold text-red-200">Jumping to Code:</span> Students often directly start coding without understanding the problem
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-400 mr-2">✗</span>
                                <div>
                                    <span className="font-semibold text-red-200">Avoidable Bugs:</span> This leads to unnecessary debugging and wasted time
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-400 mr-2">✗</span>
                                <div>
                                    <span className="font-semibold text-red-200">Confusion:</span> Lack of clear thinking creates mental blocks and frustration
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-green-300 font-bold mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Framework Benefits
                        </h4>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                <div>
                                    <span className="font-semibold text-green-200">Avoiding Confusion:</span> Clear step-by-step thinking process
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                <div>
                                    <span className="font-semibold text-green-200">Reducing Errors:</span> Catch logical flaws before coding
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                <div>
                                    <span className="font-semibold text-green-200">Interview Success:</span> Clearly communicate thought process
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-6 rounded-xl border border-indigo-500/30 mt-8">
                    <h4 className="text-white font-bold mb-4 flex items-center">
                        <Brain className="w-5 h-5 mr-2" />
                        Professional Reality
                    </h4>
                    <p className="text-slate-300 mb-4">
                        Experienced developers and interviewers use structured thinking to break problems down before touching code. 
                        This framework is not just academic—it's how professionals work in the real world.
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <h5 className="text-indigo-300 font-semibold mb-2">💡 Key Insight</h5>
                        <p className="text-slate-300 text-sm">
                            Companies like Google, Amazon, and Microsoft expect candidates to demonstrate systematic problem-solving, 
                            not just coding ability. This framework prepares you for that reality.
                        </p>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Search className="w-5 h-5" />,
        title: "Step 1: Analyze the Problem",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    The biggest mistake is coding without fully understanding the problem. Start by analyzing what is required. 
                    This is the foundation that determines the success of your entire solution.
                </p>
                
                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/20 p-6 rounded-xl border border-red-500/30 mb-8">
                    <h4 className="text-red-300 font-bold mb-4">⚠️ Critical First Step</h4>
                    <p className="text-slate-300">
                        <span className="text-yellow-400 font-semibold">Goal:</span> Understand clearly what the problem is asking. 
                        Read the problem statement carefully and never assume anything not explicitly stated.
                    </p>
                </div>
                
                <ProblemAnalysisVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Analysis Framework</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-sky-500/20 border border-sky-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-sky-300">1</span>
                                </div>
                                <div>
                                    <h5 className="text-sky-200 font-semibold">Identify Inputs</h5>
                                    <p className="text-xs text-slate-400">What data will the program receive? What are the data types and formats?</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-emerald-300">2</span>
                                </div>
                                <div>
                                    <h5 className="text-emerald-200 font-semibold">Define Outputs</h5>
                                    <p className="text-xs text-slate-400">What result should the program produce? What format is expected?</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-purple-500/20 border border-purple-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <span className="text-xs text-purple-300">3</span>
                                </div>
                                <div>
                                    <h5 className="text-purple-200 font-semibold">Note Constraints</h5>
                                    <p className="text-xs text-slate-400">Are there limitations on input size, time, memory, or value ranges?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-orange-300 font-bold mb-4">Real-World Example</h4>
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                            <h5 className="text-orange-200 font-semibold mb-2">Problem: Build a Transaction Validation System</h5>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <span className="text-sky-400 font-semibold">Input:</span>
                                    <span className="text-slate-300 ml-2">Transaction ID, amount, userID</span>
                                </div>
                                <div>
                                    <span className="text-emerald-400 font-semibold">Output:</span>
                                    <span className="text-slate-300 ml-2">True/False (valid/invalid)</span>
                                </div>
                                <div>
                                    <span className="text-purple-400 font-semibold">Constraint:</span>
                                    <span className="text-slate-300 ml-2">Must handle up to 1 million transactions in 1 second</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-4 p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg">
                            <h5 className="text-orange-300 font-semibold mb-2">Analysis Impact</h5>
                            <p className="text-sm text-slate-300">
                                The constraint immediately tells us we need an O(1) or O(log n) solution, not O(n²). 
                                This shapes our entire approach from the beginning.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Puzzle className="w-5 h-5" />,
        title: "Step 2: Break Down the Problem",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Complex problems are easier to solve when broken into smaller, manageable sub-problems. 
                    This prevents you from getting overwhelmed and helps you tackle one piece at a time.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">🎯 Goal: Avoid tackling everything at once</h4>
                    <ul className="space-y-2 text-slate-300">
                        <li>• Split complex problems into smaller manageable pieces</li>
                        <li>• Think in terms of flowcharts or pseudocode</li>
                        <li>• Plan logic step-by-step before coding</li>
                    </ul>
                </div>
                
                <DecompositionVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Decomposition Strategy</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-sky-200 font-semibold mb-2">1. Identify Main Components</h5>
                                <p className="text-sm text-slate-400">What are the major parts of this problem?</p>
                            </div>
                            <div>
                                <h5 className="text-sky-200 font-semibold mb-2">2. Order Dependencies</h5>
                                <p className="text-sm text-slate-400">Which parts depend on others? What can be done independently?</p>
                            </div>
                            <div>
                                <h5 className="text-sky-200 font-semibold mb-2">3. Prioritize Complexity</h5>
                                <p className="text-sm text-slate-400">Start with simpler parts to build confidence and understanding</p>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                            <h5 className="text-blue-300 font-semibold mb-2">💡 Analogy</h5>
                            <p className="text-sm text-slate-300">
                                Like breaking a complex recipe into stages—prepare ingredients, cook, then serve. 
                                Each stage is manageable and builds toward the final result.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-purple-300 font-bold mb-4">Example: Find the Longest Word</h4>
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 mb-4">
                            <h5 className="text-purple-200 font-semibold mb-2">Problem:</h5>
                            <p className="text-slate-300 text-sm">Find the longest word in a list of strings</p>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="bg-emerald-900/20 border border-emerald-500/30 p-3 rounded">
                                <h6 className="text-emerald-300 font-semibold text-sm">Sub-problem 1:</h6>
                                <p className="text-slate-300 text-xs">Loop through the list of words</p>
                            </div>
                            <div className="bg-sky-900/20 border border-sky-500/30 p-3 rounded">
                                <h6 className="text-sky-300 font-semibold text-sm">Sub-problem 2:</h6>
                                <p className="text-slate-300 text-xs">Keep track of the longest word seen so far</p>
                            </div>
                            <div className="bg-purple-900/20 border border-purple-500/30 p-3 rounded">
                                <h6 className="text-purple-300 font-semibold text-sm">Sub-problem 3:</h6>
                                <p className="text-slate-300 text-xs">Compare current word length with stored longest</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-6 rounded-xl border border-green-500/30">
                    <h4 className="text-white font-bold mb-4">🧠 Mental Framework</h4>
                    <p className="text-slate-300 mb-4">
                        Ask yourself: "If I had to explain this problem to a 10-year-old, what steps would I break it into?"
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="text-green-300 font-semibold mb-2">Good Decomposition</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Each part has a clear, single purpose</li>
                                <li>• Parts can be understood independently</li>
                                <li>• Natural flow from one part to the next</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-red-300 font-semibold mb-2">Poor Decomposition</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Parts overlap or are interdependent</li>
                                <li>• Some parts are too complex or vague</li>
                                <li>• No clear order or sequence</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Step 3: Recall Concepts & Generate Examples",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Before diving into implementation, recall relevant programming concepts and data structures. 
                    Then generate 2-3 concrete examples to validate your understanding of the problem.
                </p>
                
                <ConceptRecallVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Concept Recall Strategy</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-sky-200 font-semibold mb-2">Data Structure Selection</h5>
                                <div className="bg-slate-900 p-3 rounded text-sm">
                                    <p className="text-slate-300 mb-2">Ask yourself:</p>
                                    <ul className="space-y-1 text-slate-400">
                                        <li>• Is this a list, set, dict, string problem?</li>
                                        <li>• What properties can I leverage?</li>
                                        <li>• What operations do I need to perform?</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex items-center p-2 bg-emerald-900/30 rounded">
                                    <span className="text-emerald-300 font-mono mr-3">Sets:</span>
                                    <span className="text-slate-300 text-sm">No duplicates, O(1) lookups</span>
                                </div>
                                <div className="flex items-center p-2 bg-sky-900/30 rounded">
                                    <span className="text-sky-300 font-mono mr-3">Dicts:</span>
                                    <span className="text-slate-300 text-sm">Key-value access, fast lookups</span>
                                </div>
                                <div className="flex items-center p-2 bg-purple-900/30 rounded">
                                    <span className="text-purple-300 font-mono mr-3">Lists:</span>
                                    <span className="text-slate-300 text-sm">Ordered, flexible, indexable</span>
                                </div>
                                <div className="flex items-center p-2 bg-orange-900/30 rounded">
                                    <span className="text-orange-300 font-mono mr-3">Tuples:</span>
                                    <span className="text-slate-300 text-sm">Immutable, hashable</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-purple-300 font-bold mb-4">Example Generation</h4>
                        <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg mb-4">
                            <h5 className="text-purple-200 font-semibold mb-2">🎯 Goal: Clarify logic with concrete examples</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Use examples to validate understanding</li>
                                <li>• If not given, ask the interviewer or create your own</li>
                                <li>• Avoid assuming anything not stated explicitly</li>
                            </ul>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Example: Reverse Words in Sentence</h5>
                                <div className="bg-slate-900 p-3 rounded text-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sky-400">Input:</span>
                                        <span className="text-slate-300">"Hello world"</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-emerald-400">Expected Output:</span>
                                        <span className="text-slate-300">"world Hello"</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                            <h5 className="text-red-300 font-semibold mb-2">⚠️ Interview Tip</h5>
                            <p className="text-sm text-slate-300">
                                Not asking for examples is seen as a red flag! Always clarify edge cases and expected behavior.
                            </p>
                        </div>
                    </div>
                </div>

                <ExampleGenerationVisual />
            </>
        )
    },
    {
        icon: <TestTube className="w-5 h-5" />,
        title: "Steps 4-5: Pseudocode & Dry Run",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Write pseudocode to plan your logic, then manually test it with examples. 
                    These steps catch logical errors before you write a single line of actual code.
                </p>
                
                <PseudocodeWritingVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Step 4: Write Pseudocode</h4>
                        <div className="bg-sky-900/20 border border-sky-500/30 p-4 rounded-lg mb-4">
                            <h5 className="text-sky-200 font-semibold mb-2">🎯 Goal: Plan before you build</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Write the logical structure of your code</li>
                                <li>• You don't need perfect syntax</li>
                                <li>• Just outline: loops, conditions, returns, etc.</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h5 className="text-sky-200 font-semibold mb-2">Example Pseudocode:</h5>
                            <CodeBlock>{`FOR each number in list:
    IF number > max:
        max = number
RETURN max`}</CodeBlock>
                        </div>
                        
                        <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                            <h5 className="text-blue-300 font-semibold mb-2">💡 Analogy</h5>
                            <p className="text-sm text-slate-300">
                                Like an architect sketching a building before construction. 
                                The sketch doesn't show every detail, but it captures the essential structure.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-purple-300 font-bold mb-4">Step 5: Dry Run Your Logic</h4>
                        <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg mb-4">
                            <h5 className="text-purple-200 font-semibold mb-2">🎯 Goal: Verify logic before coding</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Take your examples and manually step through pseudocode</li>
                                <li>• Helps uncover logical errors early</li>
                                <li>• Saves debugging time later</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h5 className="text-purple-200 font-semibold mb-2">Dry Run Example:</h5>
                            <div className="bg-slate-900 p-3 rounded text-sm">
                                <div className="text-slate-300 mb-2">Input: [1, 2, 3]</div>
                                <div className="space-y-1 text-slate-400">
                                    <div>max = 1 (first number)</div>
                                    <div>2 &gt 1? Yes → max = 2</div>
                                    <div>3 &gt 2? Yes → max = 3</div>
                                    <div>Return 3 ✓</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <DryRunProcessVisual />

                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-6 rounded-xl border border-green-500/30">
                    <h4 className="text-white font-bold mb-4">🛡️ Error Prevention</h4>
                    <p className="text-slate-300 mb-4">
                        These steps act as a firewall against bugs. Most logic errors are caught here, 
                        making the actual coding phase much smoother and more confident.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="text-green-300 font-semibold mb-2">What Dry Running Catches</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Off-by-one errors in loops</li>
                                <li>• Incorrect condition logic</li>
                                <li>• Missing edge case handling</li>
                                <li>• Variable initialization issues</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-emerald-300 font-semibold mb-2">Time Investment</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• 5-10 minutes planning</li>
                                <li>• Saves hours of debugging</li>
                                <li>• Increases interview confidence</li>
                                <li>• Demonstrates systematic thinking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Code className="w-5 h-5" />,
        title: "Steps 6-7: Code Implementation & Edge Cases",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Now you can write the actual code with confidence. Your planning has eliminated most potential issues, 
                    and you can focus on clean implementation and robust edge case handling.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-emerald-300 font-bold mb-4">Step 6: Write Your Code</h4>
                        <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-lg mb-4">
                            <h5 className="text-emerald-200 font-semibold mb-2">🎯 Goal: Translate correct logic into real code</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Code will now have fewer errors</li>
                                <li>• You will feel confident and avoid unnecessary debugging</li>
                                <li>• Focus on clean, readable implementation</li>
                            </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 p-4 rounded-lg">
                            <h5 className="text-green-300 font-semibold mb-2">💡 Pro Tip</h5>
                            <p className="text-sm text-slate-300">
                                Avoid writing code until all previous steps are done, especially for your first 25-30 problems. 
                                This builds the habit of systematic thinking.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-red-300 font-bold mb-4">Step 7: Handle Edge Cases</h4>
                        <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg mb-4">
                            <h5 className="text-red-200 font-semibold mb-2">🎯 Goal: Make your code robust</h5>
                            <p className="text-sm text-slate-300">
                                Edge cases are special conditions where your code might fail, 
                                even if the general logic is correct.
                            </p>
                        </div>
                        
                        <div className="space-y-3">
                            <div>
                                <h5 className="text-red-200 font-semibold mb-2">Common Edge Cases:</h5>
                                <ul className="text-sm text-slate-300 space-y-1">
                                    <li>• Empty inputs (empty list or string)</li>
                                    <li>• Single-item inputs</li>
                                    <li>• All duplicate values</li>
                                    <li>• Zero or negative numbers</li>
                                    <li>• Maximum/minimum possible values</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <EdgeCasesVisual />

                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-6">Edge Case Example</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-orange-300 font-bold mb-4">Problem: Return First Item in List</h5>
                            <CodeBlock>{`def get_first_item(items):
    # What if the list is empty?
    if not items:
        return None  # or raise an error?
    return items[0]`}</CodeBlock>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-blue-300 font-bold mb-4">Real-World Analogy</h5>
                            <p className="text-slate-300 mb-4">
                                ATMs must handle various edge cases:
                            </p>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Invalid card input</li>
                                <li>• Empty account balance</li>
                                <li>• Expired cards</li>
                                <li>• Network connection issues</li>
                            </ul>
                            <p className="text-slate-400 text-sm mt-4">
                                These aren't the primary function, but they're critical for robust operation.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Users className="w-5 h-5" />,
        title: "Complete Example: Login System Validator",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Let's apply the complete framework to a real-world example: building a login system validator. 
                    This demonstrates how each step builds upon the previous one.
                </p>
                
                <LoginSystemExampleVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Framework Application</h4>
                        <div className="space-y-4">
                            <div className="bg-sky-900/20 border border-sky-500/30 p-3 rounded">
                                <h5 className="text-sky-200 font-semibold text-sm">1. Analyze Problem:</h5>
                                <ul className="text-xs text-slate-300 mt-1 space-y-1">
                                    <li>• Input: Username, password</li>
                                    <li>• Output: True/False (valid/invalid)</li>
                                    <li>• Constraint: Password must be 8+ characters</li>
                                </ul>
                            </div>
                            
                            <div className="bg-purple-900/20 border border-purple-500/30 p-3 rounded">
                                <h5 className="text-purple-200 font-semibold text-sm">2. Break Down:</h5>
                                <ul className="text-xs text-slate-300 mt-1 space-y-1">
                                    <li>• Step 1: Check if username exists</li>
                                    <li>• Step 2: Validate password length</li>
                                    <li>• Step 3: Match password with stored password</li>
                                </ul>
                            </div>
                            
                            <div className="bg-emerald-900/20 border border-emerald-500/30 p-3 rounded">
                                <h5 className="text-emerald-200 font-semibold text-sm">3. Recall Concepts:</h5>
                                <p className="text-xs text-slate-300 mt-1">Use a dict for storing usernames and passwords</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-orange-300 font-bold mb-4">4. Examples:</h4>
                        <div className="space-y-3">
                            <div className="bg-slate-900 p-3 rounded text-sm">
                                <div className="text-emerald-400 mb-1">Valid Case:</div>
                                <div className="text-slate-300">Input: "john", "pass1234"</div>
                                <div className="text-slate-300">Expected: True</div>
                            </div>
                            <div className="bg-slate-900 p-3 rounded text-sm">
                                <div className="text-red-400 mb-1">Invalid Case:</div>
                                <div className="text-slate-300">Input: "john", "123"</div>
                                <div className="text-slate-300">Expected: False (too short)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-6">5. Pseudocode:</h4>
                    <CodeBlock>{`IF username not in users:
    RETURN False
IF length(password) < 8:
    RETURN False
IF password != users[username]:
    RETURN False
RETURN True`}</CodeBlock>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-purple-300 font-bold mb-4">6. Dry Run:</h4>
                        <div className="bg-slate-900 p-4 rounded text-sm">
                            <div className="text-slate-300 mb-2">Test: "john", "pass1234"</div>
                            <div className="space-y-1 text-slate-400">
                                <div>✓ "john" in users? Yes</div>
                                <div>✓ len("pass1234") ≥ 8? Yes (8)</div>
                                <div>✓ "pass1234" == users["john"]? Yes</div>
                                <div className="text-emerald-400">→ Return True</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-emerald-300 font-bold mb-4">7. Final Code:</h4>
                        <CodeBlock>{`def validate_login(username, password, users):
    if username not in users:
        return False
    if len(password) < 8:
        return False
    if users[username] != password:
        return False
    return True`}</CodeBlock>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/20 p-6 rounded-xl border border-red-500/30">
                    <h4 className="text-white font-bold mb-4">8. Edge Cases to Consider:</h4>
                    <ul className="text-slate-300 space-y-2">
                        <li>• What if username is an empty string?</li>
                        <li>• What if password is None?</li>
                        <li>• What if users dictionary is empty?</li>
                        <li>• Should comparison be case-sensitive?</li>
                    </ul>
                </div>
            </>
        )
    },
    {
        icon: <Trophy className="w-5 h-5" />,
        title: "Interview Tips & Mastery Guidelines",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Learn how to effectively communicate your problem-solving process during interviews 
                    and build the habits that will make this framework second nature.
                </p>
                
                <InterviewTipsVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-gradient-to-br from-blue-900/30 to-sky-800/20 p-6 rounded-xl border border-blue-500/30">
                        <h4 className="text-blue-300 font-bold mb-4 flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            Interview Communication
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-blue-200 font-semibold mb-2">Verbalize Your Process</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Interviewers want to hear your thought process, not just see the final answer.
                                </p>
                                <div className="bg-slate-900 p-3 rounded text-sm">
                                    <div className="space-y-1 text-slate-300">
                                        <div>💬 "First I'll analyze inputs and outputs..."</div>
                                        <div>💬 "Here's the pseudocode I'm thinking of..."</div>
                                        <div>💬 "Let's dry-run it with this example..."</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h5 className="text-blue-200 font-semibold mb-2">What Interviewers Evaluate</h5>
                                <ul className="text-sm text-slate-300 space-y-1">
                                    <li>• Problem-solving approach</li>
                                    <li>• Ability to handle ambiguity</li>
                                    <li>• Communication clarity</li>
                                    <li>• Systematic thinking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 p-6 rounded-xl border border-green-500/30">
                        <h4 className="text-green-300 font-bold mb-4 flex items-center">
                            <Target className="w-5 h-5 mr-2" />
                            Building Mastery
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-green-200 font-semibold mb-2">Practice Timeline</h5>
                                <ul className="text-sm text-slate-300 space-y-1">
                                    <li>• Follow this structure for your first 30-50 problems</li>
                                    <li>• Eventually, it becomes an unconscious habit</li>
                                    <li>• Makes you better at debugging and scalable code</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h5 className="text-green-200 font-semibold mb-2">Professional Benefits</h5>
                                <ul className="text-sm text-slate-300 space-y-1">
                                    <li>• Better at coding interviews</li>
                                    <li>• Writing scalable, maintainable code</li>
                                    <li>• Debugging complex systems</li>
                                    <li>• Leading technical discussions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <ChecklistVisual />

                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/30">
                    <h4 className="text-white font-bold mb-6 text-xl flex items-center">
                        <Trophy className="w-6 h-6 mr-3" />
                        Framework Mastery Checklist
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-indigo-300 font-semibold mb-4">Core Steps Mastered</h5>
                            <div className="space-y-2">
                                {[
                                    "Analyze problem: inputs, outputs, constraints",
                                    "Break down into smaller sub-problems",
                                    "Recall relevant concepts and generate examples",
                                    "Write clear pseudocode before coding"
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
                                    "Dry run logic manually with examples",
                                    "Implement code confidently after planning",
                                    "Identify and handle edge cases systematically",
                                    "Communicate thought process clearly in interviews"
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
                        <h6 className="text-yellow-300 font-semibold mb-2">🎯 Final Thoughts</h6>
                        <p className="text-slate-300 text-sm">
                            This framework isn't just for beginners—experienced developers at top tech companies use similar 
                            systematic approaches. Master this process, and you'll approach any coding challenge with confidence 
                            and clarity, whether in interviews, personal projects, or professional development.
                        </p>
                    </div>
                </div>
            </>
        )
    }
];
