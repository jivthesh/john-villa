import React from 'react';
import { Sigma, Layers, Plus, Hash, CaseUpper, User, Code, PlayCircle, Zap, TrendingUp, Brain, Cpu, Target, Award, ShoppingCart, Factory, Database } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import {
    MapConceptVisual,
    MapSyntaxVisual,
    SquareNumbersComparisonVisual,
    LambdaMapVisual,
    MultipleIterablesVisual,
    StringToIntegerVisual,
    StringToUppercaseVisual,
    DictionaryExtractionVisual,
    MapProcessFlowVisual,
    LazyEvaluationVisual,
    MapVsLoopPerformanceVisual,
    MapObjectExplorer,
    RealWorldApplicationsVisual,
    AdvancedMapTechniques,
    InteractiveMapDemo
} from './visuals.jsx';

export const chapters = [
    {
        icon: <Sigma className="w-5 h-5" />,
        title: "Understanding Map Function Fundamentals",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    The <code className="font-mono bg-slate-700 text-pink-400 px-2 py-1 rounded">map()</code> function 
                    applies a given function to all items in an input iterable (e.g., list, tuple) and returns a map object (an iterator). 
                    It's a powerful tool for transforming data without explicit loops.
                </p>
                
                <MapConceptVisual />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4 flex items-center">
                            <Target className="w-5 h-5 mr-2" />
                            Key Characteristics
                        </h4>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Purpose:</span> Transforms data in an iterable by applying a function to each element
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Input:</span> A function (regular or lambda) and an iterable
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Output:</span> A map object (iterator) that can be converted to list, tuple, etc.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Use Case:</span> Particularly useful for applying transformations without explicit loops
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-6 rounded-xl border border-purple-500/30">
                        <h4 className="text-purple-300 font-bold mb-4">💡 Key Terms</h4>
                        <div className="space-y-3">
                            <div>
                                <span className="text-purple-200 font-semibold">Iterable:</span>
                                <p className="text-sm text-slate-300">A collection like list, tuple, or string that can be iterated over</p>
                            </div>
                            <div>
                                <span className="text-purple-200 font-semibold">Map Object:</span>
                                <p className="text-sm text-slate-300">An iterator that lazily evaluates the function on each item</p>
                            </div>
                            <div>
                                <span className="text-purple-200 font-semibold">Transformation:</span>
                                <p className="text-sm text-slate-300">Applying a function to modify each element (e.g., squaring numbers)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <LazyEvaluationVisual />

                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mt-8">
                    <h4 className="text-white font-bold mb-4 flex items-center">
                        <Brain className="w-5 h-5 mr-2" />
                        Why Use Map Function?
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                            <div className="text-2xl mb-2">⚡</div>
                            <h5 className="text-emerald-300 font-semibold">Lazy Evaluation</h5>
                            <p className="text-xs text-slate-400">Faster execution with on-demand computation</p>
                        </div>
                        <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                            <div className="text-2xl mb-2">🎯</div>
                            <h5 className="text-sky-300 font-semibold">Concise Code</h5>
                            <p className="text-xs text-slate-400">More expressive and functional than loops</p>
                        </div>
                        <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                            <div className="text-2xl mb-2">🔧</div>
                            <h5 className="text-purple-300 font-semibold">Functional Style</h5>
                            <p className="text-xs text-slate-400">Promotes functional programming patterns</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/20 p-6 rounded-xl border border-red-500/30 mt-6">
                    <h4 className="text-red-300 font-bold mb-4">⚠️ Important Note</h4>
                    <p className="text-slate-300">
                        The <code className="text-pink-400 bg-slate-700 px-2 py-1 rounded">map()</code> function returns a 
                        <span className="text-yellow-400 font-semibold"> map object</span>, which must be converted using 
                        <code className="text-emerald-400 bg-slate-700 px-2 py-1 rounded ml-1">list()</code>, 
                        <code className="text-emerald-400 bg-slate-700 px-2 py-1 rounded ml-1">tuple()</code>, 
                        or other constructors to view results!
                    </p>
                </div>
            </>
        )
    },
    {
        icon: <Code className="w-5 h-5" />,
        title: "Map Function Syntax & Structure",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Understanding the precise syntax and components of the map function is essential for effective usage 
                    in data transformation and functional programming.
                </p>
                
                <MapSyntaxVisual />
                
                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-4">Function Signature Breakdown</h4>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-600">
                        <pre className="text-sky-300 text-lg font-mono mb-6">
                            <span className="text-pink-500">map</span>(<span className="text-fuchsia-400">function</span>, <span className="text-emerald-400">iterable</span>, <span className="text-yellow-400">...</span>)
                        </pre>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                <h5 className="text-fuchsia-300 font-semibold mb-3">Function Parameter</h5>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-fuchsia-400 mr-2">•</span>
                                        <span>The function to apply to each item</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-fuchsia-400 mr-2">•</span>
                                        <span>Can be regular, lambda, or built-in function</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-fuchsia-400 mr-2">•</span>
                                        <span>Passed as reference (without parentheses)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                <h5 className="text-emerald-300 font-semibold mb-3">Iterable Parameter</h5>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-emerald-400 mr-2">•</span>
                                        <span>The input collection (list, tuple, string)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-400 mr-2">•</span>
                                        <span>Any collection that can be iterated over</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-400 mr-2">•</span>
                                        <span>Elements passed one by one to function</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                <h5 className="text-yellow-300 font-semibold mb-3">Additional Iterables</h5>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span>Optional additional iterables</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span>For multi-argument functions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        <span>Must have matching length</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <MapObjectExplorer />
                
                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-6 rounded-xl border border-indigo-500/30">
                    <h4 className="text-white font-bold mb-4">🎯 Syntax Best Practices</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h5 className="text-green-300 font-semibold mb-3">✅ Correct Usage</h5>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>Pass function name without parentheses</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>Convert map object to view results</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>Use built-in functions when appropriate</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>Keep transformations simple and clear</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-red-300 font-semibold mb-3">❌ Common Mistakes</h5>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Calling function: map(square(), numbers)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Not converting map object to list</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Using map with side effects</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Overly complex lambda expressions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Plus className="w-5 h-5" />,
        title: "Example 1: Squaring Numbers in a List",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Compare traditional loop approaches with the map() function to square all numbers in a list. 
                    This example demonstrates the elegance and efficiency of functional programming.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 Problem Statement</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Square all numbers in the list [1, 2, 3, 4, 5, 6, 7, 8]
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <span className="text-emerald-400 font-semibold">Expected Output:</span>
                        <span className="text-slate-300 ml-2">[1, 4, 9, 16, 25, 36, 49, 64]</span>
                    </div>
                </div>
                
                <SquareNumbersComparisonVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="space-y-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-red-300 font-bold mb-4">Traditional Loop Approach</h4>
                            <CodeBlock>{`def square(number):
    return number * number

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
squared_numbers = []
for num in numbers:
    squared_numbers.append(square(num))
print(squared_numbers)`}</CodeBlock>
                            
                            <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                                <h5 className="text-red-300 font-semibold mb-2">Characteristics:</h5>
                                <ul className="text-sm text-slate-300 space-y-1">
                                    <li>• Requires explicit loop and manual list creation</li>
                                    <li>• Manual appending of results</li>
                                    <li>• More verbose and imperative style</li>
                                    <li>• Memory allocation for result list upfront</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-emerald-300 font-bold mb-4">Map Function Approach</h4>
                            <CodeBlock>{`def square(number):
    return number * number

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
squared_numbers = list(map(square, numbers))
print(squared_numbers)`}</CodeBlock>
                            
                            <div className="mt-4 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                                <h5 className="text-emerald-300 font-semibold mb-2">Advantages:</h5>
                                <ul className="text-sm text-slate-300 space-y-1">
                                    <li>• Eliminates explicit loop and manual appending</li>
                                    <li>• Uses lazy loading for memory efficiency</li>
                                    <li>• More concise and functional programming style</li>
                                    <li>• Only computes results when needed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-sky-300 font-bold mb-4">Step-by-Step Execution</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center p-2 bg-emerald-900/30 rounded">
                                    <span className="text-emerald-400 font-mono mr-3">1.</span>
                                    <span className="text-slate-300">square(1) → 1 * 1 = 1</span>
                                </div>
                                <div className="flex items-center p-2 bg-emerald-900/30 rounded">
                                    <span className="text-emerald-400 font-mono mr-3">2.</span>
                                    <span className="text-slate-300">square(2) → 2 * 2 = 4</span>
                                </div>
                                <div className="flex items-center p-2 bg-emerald-900/30 rounded">
                                    <span className="text-emerald-400 font-mono mr-3">3.</span>
                                    <span className="text-slate-300">square(3) → 3 * 3 = 9</span>
                                </div>
                                <div className="flex items-center p-2 bg-emerald-900/30 rounded">
                                    <span className="text-emerald-400 font-mono mr-3">4.</span>
                                    <span className="text-slate-300">square(4) → 4 * 4 = 16</span>
                                </div>
                                <div className="text-center text-slate-400">...</div>
                                <div className="flex items-center p-2 bg-emerald-900/30 rounded">
                                    <span className="text-emerald-400 font-mono mr-3">8.</span>
                                    <span className="text-slate-300">square(8) → 8 * 8 = 64</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-900/30 to-sky-800/20 p-6 rounded-xl border border-blue-500/30">
                            <h4 className="text-blue-300 font-bold mb-4 flex items-center">
                                <Factory className="w-5 h-5 mr-2" />
                                Real-World Application
                            </h4>
                            <div>
                                <h5 className="text-blue-200 font-semibold mb-2">Machine Learning Data Preprocessing</h5>
                                <p className="text-sm text-slate-300">
                                    Common in feature engineering where you need to transform numerical data efficiently. 
                                    Squaring features for polynomial regression models.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <MapVsLoopPerformanceVisual />
            </>
        )
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Example 2: Lambda Function with Map",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Lambda functions provide a concise way to write simple functions inline with map(), 
                    perfect for quick transformations without defining separate functions.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 Lambda + map() in Action</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Square numbers using lambda function with map()
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <span className="text-emerald-400 font-semibold">Output:</span>
                        <span className="text-slate-300 ml-2">[1, 4, 9, 16, 25, 36, 49, 64]</span>
                    </div>
                </div>
                
                <LambdaMapVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Lambda Implementation</h4>
                        <CodeBlock>{`numbers = [1, 2, 3, 4, 5, 6, 7, 8]
squared_numbers = list(map(lambda x: x * x, numbers))
print(squared_numbers)

# Output: [1, 4, 9, 16, 25, 36, 49, 64]`}</CodeBlock>
                        
                        <div className="mt-6 space-y-4">
                            <div>
                                <h5 className="text-sky-200 font-semibold mb-2">Lambda Function Breakdown</h5>
                                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
                                    <div className="text-fuchsia-400">lambda <span className="text-sky-400">x</span>: <span className="text-emerald-400">x * x</span></div>
                                    <div className="text-xs text-slate-400 mt-2">
                                        <span className="text-fuchsia-400">lambda</span> = anonymous function keyword<br/>
                                        <span className="text-sky-400">x</span> = parameter (each element from iterable)<br/>
                                        <span className="text-emerald-400">x * x</span> = operation to perform on each element
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-purple-300 font-bold mb-4">Lambda vs Named Function</h4>
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Named Function Approach</h5>
                                <CodeBlock>{`def square(x):
    return x * x

result = list(map(square, numbers))`}</CodeBlock>
                            </div>
                            
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Lambda Function Approach</h5>
                                <CodeBlock>{`result = list(map(lambda x: x * x, numbers))`}</CodeBlock>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                            <h5 className="text-purple-300 font-semibold mb-2">When to Use Lambda</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Simple, one-line operations</li>
                                <li>• One-time use transformations</li>
                                <li>• Inline functional programming style</li>
                                <li>• Avoiding function name pollution</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 p-6 rounded-xl border border-green-500/30">
                    <h4 className="text-green-300 font-bold mb-4 flex items-center">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Real-World Application
                    </h4>
                    <div>
                        <h5 className="text-green-200 font-semibold mb-2">IoT Sensor Data Processing</h5>
                        <p className="text-sm text-slate-300 mb-3">
                            Perfect for real-time data transformation in IoT systems where you need quick, efficient processing.
                        </p>
                        <CodeBlock>{`# Temperature sensor calibration
sensor_readings = [22.5, 23.1, 24.0, 22.8]
calibrated = list(map(lambda temp: temp + 2.5, sensor_readings))
# Adds calibration offset to each reading`}</CodeBlock>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Layers className="w-5 h-5" />,
        title: "Example 3: Mapping Multiple Iterables",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    The map() function can work with multiple iterables simultaneously, applying a function that takes 
                    multiple arguments to corresponding elements from each iterable.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 Multiple Iterables Example</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Add corresponding elements from two lists
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-sky-400 font-semibold">Input:</span>
                                <span className="text-slate-300 ml-2">[1, 2, 3] and [4, 5, 6]</span>
                            </div>
                            <div>
                                <span className="text-emerald-400 font-semibold">Output:</span>
                                <span className="text-slate-300 ml-2">[5, 7, 9]</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <MultipleIterablesVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-yellow-300 font-bold mb-4">Implementation</h4>
                        <CodeBlock>{`numbers1 = [1, 2, 3]
numbers2 = [4, 5, 6]
added_numbers = list(map(lambda x, y: x + y, numbers1, numbers2))
print(added_numbers)

# Output: [5, 7, 9]`}</CodeBlock>
                        
                        <div className="mt-6">
                            <h5 className="text-yellow-200 font-semibold mb-3">Process Breakdown</h5>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <div className="font-mono text-sm space-y-2">
                                    <div className="text-emerald-400">Pair 1: (1, 4) → 1 + 4 = 5</div>
                                    <div className="text-emerald-400">Pair 2: (2, 5) → 2 + 5 = 7</div>
                                    <div className="text-emerald-400">Pair 3: (3, 6) → 3 + 6 = 9</div>
                                    <div className="text-slate-400 text-center mt-2">↓</div>
                                    <div className="text-sky-400">Result: [5, 7, 9]</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-orange-300 font-bold mb-4">Key Points</h4>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2">•</span>
                                <span>map() can handle multiple iterables if the function accepts multiple arguments</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2">•</span>
                                <span>The iterables should have the same length</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2">•</span>
                                <span>map() stops at the shortest iterable if lengths differ</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2">•</span>
                                <span>Demonstrates map()'s ability to process parallel data streams</span>
                            </li>
                        </ul>
                        
                        <div className="mt-6 p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg">
                            <h5 className="text-orange-300 font-semibold mb-2">More Examples</h5>
                            <CodeBlock>{`# Multiply corresponding elements
result1 = list(map(lambda x, y: x * y, [1, 2, 3], [4, 5, 6]))
# Output: [4, 10, 18]

# Combine strings
result2 = list(map(lambda x, y: x + y, ['a', 'b'], ['1', '2']))
# Output: ['a1', 'b2']`}</CodeBlock>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-pink-800/20 p-6 rounded-xl border border-purple-500/30">
                    <h4 className="text-purple-300 font-bold mb-4 flex items-center">
                        <Database className="w-5 h-5 mr-2" />
                        Real-World Application
                    </h4>
                    <div>
                        <h5 className="text-purple-200 font-semibold mb-2">Financial Portfolio Calculator</h5>
                        <p className="text-sm text-slate-300 mb-3">
                            Perfect for financial applications where you need to combine multiple data sources for calculations.
                        </p>
                        <CodeBlock>{`# Combining expense categories for budgeting
fixed_costs = [1200, 1200, 1200]  # Monthly fixed costs
variable_costs = [800, 950, 750]  # Monthly variable costs
total_expenses = list(map(lambda x, y: x + y, fixed_costs, variable_costs))
# Result: [2000, 2150, 1950]`}</CodeBlock>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Hash className="w-5 h-5" />,
        title: "Example 4: Converting Strings to Integers",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    One of the most powerful features of map() is using built-in functions for type conversion and data cleaning. 
                    This example demonstrates converting string numbers to integers.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 String to Integer Conversion</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Convert string numbers to integers using map()
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-sky-400 font-semibold">Input:</span>
                                <span className="text-slate-300 ml-2">["1", "2", "3", "4"]</span>
                            </div>
                            <div>
                                <span className="text-emerald-400 font-semibold">Output:</span>
                                <span className="text-slate-300 ml-2">[1, 2, 3, 4]</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <StringToIntegerVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Implementation</h4>
                        <CodeBlock>{`string_numbers = ["1", "2", "3", "4"]
int_numbers = list(map(int, string_numbers))
print(int_numbers)

# Output: [1, 2, 3, 4]`}</CodeBlock>
                        
                        <div className="mt-6">
                            <h5 className="text-sky-200 font-semibold mb-3">Process Explanation</h5>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Data:</strong> A list of strings ["1", "2", "3", "4"]</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Function:</strong> The built-in int converts each string to an integer</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Map:</strong> map(int, string_numbers) applies int to each element</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Result:</strong> list(map(...)) produces [1, 2, 3, 4]</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-purple-300 font-bold mb-4">Built-in Functions with Map</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Type Conversion Examples</h5>
                                <CodeBlock>{`# String to float
prices = ["19.99", "25.50", "12.75"]
float_prices = list(map(float, prices))

# Integer to string
numbers = [1, 2, 3, 4]
str_numbers = list(map(str, numbers))

# Boolean conversion
values = [0, 1, "", "hello"]
bool_values = list(map(bool, values))`}</CodeBlock>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                            <h5 className="text-purple-300 font-semibold mb-2">Key Points</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• map() works with built-in functions like int, float, str</li>
                                <li>• Useful for typecasting operations on collections</li>
                                <li>• Simplifies bulk conversions compared to loops</li>
                                <li>• No parentheses needed when passing built-in functions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 p-6 rounded-xl border border-green-500/30">
                    <h4 className="text-green-300 font-bold mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        Real-World Application
                    </h4>
                    <div>
                        <h5 className="text-green-200 font-semibold mb-2">Data Cleaning in Web Scraping</h5>
                        <p className="text-sm text-slate-300 mb-3">
                            Essential for processing numerical data extracted from websites where values come as strings.
                        </p>
                        <CodeBlock>{`# Web scraping price data
scraped_prices = ["$19.99", "$25.50", "$12.75"]
# Clean and convert to float
clean_prices = list(map(lambda x: float(x.strip('$')), scraped_prices))
# Result: [19.99, 25.5, 12.75]`}</CodeBlock>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <CaseUpper className="w-5 h-5" />,
        title: "Example 5: Converting Strings to Uppercase",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Use map() with string methods to perform text transformations, such as converting strings to uppercase. 
                    This demonstrates map()'s versatility with string operations.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 String Case Conversion</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Convert list of strings to uppercase
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-sky-400 font-semibold">Input:</span>
                                <span className="text-slate-300 ml-2">["apple", "banana", "cherry"]</span>
                            </div>
                            <div>
                                <span className="text-emerald-400 font-semibold">Output:</span>
                                <span className="text-slate-300 ml-2">["APPLE", "BANANA", "CHERRY"]</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <StringToUppercaseVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Implementation</h4>
                        <CodeBlock>{`words = ["apple", "banana", "cherry"]
upper_words = list(map(str.upper, words))
print(upper_words)

# Output: ['APPLE', 'BANANA', 'CHERRY']`}</CodeBlock>
                        
                        <div className="mt-6">
                            <h5 className="text-sky-200 font-semibold mb-3">Process Explanation</h5>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Data:</strong> A list of strings ["apple", "banana", "cherry"]</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Function:</strong> The string method str.upper converts strings to uppercase</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Map:</strong> map(str.upper, words) applies str.upper to each element</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Result:</strong> list(map(...)) produces ['APPLE', 'BANANA', 'CHERRY']</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-purple-300 font-bold mb-4">String Methods with Map</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Common String Transformations</h5>
                                <CodeBlock>{`words = ["Hello", "WORLD", "PyThOn"]

# Convert to lowercase
lower_words = list(map(str.lower, words))
# Result: ['hello', 'world', 'python']

# Convert to title case
title_words = list(map(str.title, words))
# Result: ['Hello', 'World', 'Python']

# Strip whitespace
messy_words = [" hello ", " world "]
clean_words = list(map(str.strip, messy_words))
# Result: ['hello', 'world']`}</CodeBlock>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                            <h5 className="text-purple-300 font-semibold mb-2">Key Points</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• map() works with string methods (accessed as str.upper, not str.upper())</li>
                                <li>• Demonstrates map()'s versatility with string operations</li>
                                <li>• Eliminates the need for loops to process each string</li>
                                <li>• Can be combined with other string methods</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-sky-800/20 p-6 rounded-xl border border-blue-500/30">
                    <h4 className="text-blue-300 font-bold mb-4 flex items-center">
                        <Brain className="w-5 h-5 mr-2" />
                        Real-World Application
                    </h4>
                    <div>
                        <h5 className="text-blue-200 font-semibold mb-2">Text Normalization in NLP</h5>
                        <p className="text-sm text-slate-300 mb-3">
                            Crucial for standardizing text data in natural language processing pipelines for consistent analysis.
                        </p>
                        <CodeBox>{`# NLP text preprocessing
raw_text = ["Hello World", "machine learning", "PYTHON programming"]
normalized = list(map(str.upper, raw_text))
# Result: ['HELLO WORLD', 'MACHINE LEARNING', 'PYTHON PROGRAMMING']

# For sentiment analysis or word frequency analysis
tokens = ["Good", "bad", "EXCELLENT", "poor"]
standardized = list(map(str.lower, tokens))
# Result: ['good', 'bad', 'excellent', 'poor']`}</CodeBox>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <User className="w-5 h-5" />,
        title: "Example 6: Extracting Names from Dictionaries",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Use map() to extract specific fields from complex data structures, like lists of dictionaries. 
                    This example demonstrates working with structured data and custom functions.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 Dictionary Field Extraction</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Extract names from a list of person dictionaries
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg font-mono text-sm">
                        <div className="text-sky-400 mb-2">Input Data:</div>
                        <div className="text-slate-300">
                            [<br/>
                            &nbsp;&nbsp;{"{"}"name": "Krish", "age": 32{"}"},<br/>
                            &nbsp;&nbsp;{"{"}"name": "Jack", "age": 33{"}"}<br/>
                            ]
                        </div>
                    </div>
                </div>
                
                <DictionaryExtractionVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Implementation</h4>
                        <CodeBlock>{`def get_name(person):
    return person["name"]

people = [
    {"name": "Krish", "age": 32},
    {"name": "Jack", "age": 33}
]
names = list(map(get_name, people))
print(names)

# Output: ['Krish', 'Jack']`}</CodeBlock>
                        
                        <div className="mt-6">
                            <h5 className="text-sky-200 font-semibold mb-3">Process Explanation</h5>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Function:</strong> get_name takes a dictionary and returns the "name" value</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Data:</strong> List of dictionaries with "name" and "age" keys</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Map:</strong> map(get_name, people) extracts name from each dictionary</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span><strong>Result:</strong> list(map(...)) produces ['Krish', 'Jack']</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-purple-300 font-bold mb-4">Alternative Approaches</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Using Lambda Function</h5>
                                <CodeBlock>{`# Lambda approach
names = list(map(lambda person: person["name"], people))

# More concise
names = list(map(lambda p: p["name"], people))`}</CodeBlock>
                            </div>
                            
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Multiple Field Extraction</h5>
                                <CodeBlock>{`# Extract multiple fields
def get_info(person):
    return f"{person['name']} ({person['age']})"

info = list(map(get_info, people))
# Result: ['Krish (32)', 'Jack (33)']

# Using lambda for formatting
formatted = list(map(
    lambda p: f"{p['name'].upper()}: {p['age']} years", 
    people
))
# Result: ['KRISH: 32 years', 'JACK: 33 years']`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-6">Advanced Dictionary Processing</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-emerald-300 font-bold mb-4">Safe Field Access</h5>
                            <CodeBlock>{`# Using get() for safer access
safe_names = list(map(
    lambda p: p.get("name", "Unknown"), 
    people
))

# Handle missing keys gracefully
def safe_extract(person, key, default="N/A"):
    return person.get(key, default)

ages = list(map(
    lambda p: safe_extract(p, "age", 0), 
    people
))`}</CodeBlock>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-sky-300 font-bold mb-4">Complex Data Extraction</h5>
                            <CodeBlock>{`# Nested dictionary access
employees = [
    {"name": "Alice", "details": {"dept": "IT", "salary": 50000}},
    {"name": "Bob", "details": {"dept": "Finance", "salary": 60000}}
]

# Extract nested data
departments = list(map(
    lambda emp: emp["details"]["dept"], 
    employees
))
# Result: ['IT', 'Finance']`}</CodeBlock>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-orange-900/30 to-red-800/20 p-6 rounded-xl border border-orange-500/30">
                    <h4 className="text-orange-300 font-bold mb-4 flex items-center">
                        <Database className="w-5 h-5 mr-2" />
                        Real-World Application
                    </h4>
                    <div>
                        <h5 className="text-orange-200 font-semibold mb-2">User Management in CRM Systems</h5>
                        <p className="text-sm text-slate-300 mb-3">
                            Streamlines data preparation for email marketing campaigns or reporting by extracting specific user data.
                        </p>
                        <CodeBlock>{`# CRM customer data extraction
customers = [
    {"name": "John Doe", "email": "john@email.com", "status": "active"},
    {"name": "Jane Smith", "email": "jane@email.com", "status": "active"}
]

# Extract emails for mailing list
email_list = list(map(lambda c: c["email"], customers))

# Extract names for personalized greetings
greeting_names = list(map(
    lambda c: c["name"].split()[0],  # First name only
    customers
))
# Result: ['John', 'Jane']`}</CodeBlock>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Advanced Techniques & Real-World Applications",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Master advanced map() techniques, performance optimization strategies, and explore comprehensive 
                    real-world applications across various industries and domains.
                </p>
                
                <RealWorldApplicationsVisual />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-blue-900/30 to-sky-800/20 p-6 rounded-xl border border-blue-500/30">
                        <h4 className="text-blue-300 font-bold mb-4 flex items-center">
                            <Brain className="w-5 h-5 mr-2" />
                            Machine Learning & Data Science
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-blue-200 font-semibold mb-2">Data Preprocessing</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Squaring features for polynomial regression models and feature engineering pipelines.
                                </p>
                                <CodeBlock>{`# Feature engineering - polynomial features
features = [1, 2, 3, 4, 5]
squared_features = list(map(lambda x: x**2, features))
cubed_features = list(map(lambda x: x**3, features))

# Normalization
max_val = max(features)
normalized = list(map(lambda x: x/max_val, features))`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 p-6 rounded-xl border border-green-500/30">
                        <h4 className="text-green-300 font-bold mb-4 flex items-center">
                            <Zap className="w-5 h-5 mr-2" />
                            IoT & Real-Time Systems
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-green-200 font-semibold mb-2">Sensor Data Processing</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Real-time transformation of IoT sensor readings with calibration and scaling.
                                </p>
                                <CodeBlock>{`# IoT sensor calibration
raw_temperatures = [22.1, 23.5, 24.2, 22.8]
calibrated = list(map(lambda t: t + 2.5, raw_temperatures))

# Convert Celsius to Fahrenheit
fahrenheit = list(map(lambda c: (c * 9/5) + 32, calibrated))`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                </div>

                <AdvancedMapTechniques />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h5 className="text-purple-300 font-bold mb-4 flex items-center">
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            E-commerce & Finance
                        </h5>
                        <div className="space-y-3">
                            <div>
                                <h6 className="text-purple-200 font-semibold text-sm">Financial Analysis</h6>
                                <p className="text-xs text-slate-400 mb-2">
                                    Combining expense categories for budgeting and portfolio calculations.
                                </p>
                                <CodeBlock>{`# Portfolio calculations
prices = [100, 150, 200]
shares = [10, 5, 8]
values = list(map(lambda p, s: p * s, prices, shares))
# Result: [1000, 750, 1600]`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h5 className="text-sky-300 font-bold mb-4 flex items-center">
                            <Code className="w-5 h-5 mr-2" />
                            Web Development
                        </h5>
                        <div className="space-y-3">
                            <div>
                                <h6 className="text-sky-200 font-semibold text-sm">Data Cleaning</h6>
                                <p className="text-xs text-slate-400 mb-2">
                                    Processing scraped data and user input validation.
                                </p>
                                <CodeBlock>{`# Clean scraped prices
raw_prices = ["$19.99", "$25.50", "$12.75"]
clean_prices = list(map(
    lambda x: float(x.strip('$')), 
    raw_prices
))`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h5 className="text-orange-300 font-bold mb-4 flex items-center">
                            <Factory className="w-5 h-5 mr-2" />
                            Data Visualization
                        </h5>
                        <div className="space-y-3">
                            <div>
                                <h6 className="text-orange-200 font-semibold text-sm">Chart Preparation</h6>
                                <p className="text-xs text-slate-400 mb-2">
                                    Transforming data for dashboards and visualization.
                                </p>
                                <CodeBlock>{`# Prepare data for charts
data_points = [1, 2, 3, 4, 5]
scaled_for_chart = list(map(
    lambda x: x * 100, 
    data_points
))`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                </div>

                <InteractiveMapDemo />

                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/30">
                    <h4 className="text-white font-bold mb-6 text-xl flex items-center">
                        <Award className="w-6 h-6 mr-3" />
                        Map Function Mastery Checklist
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-indigo-300 font-semibold mb-4">Core Competencies</h5>
                            <div className="space-y-2">
                                {[
                                    "Understand map() syntax and lazy evaluation",
                                    "Apply map() with regular, lambda, and built-in functions",
                                    "Handle single and multiple iterables effectively",
                                    "Work with complex data structures (dictionaries, objects)"
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
                                    "Apply map() to real-world data processing problems",
                                    "Optimize map() performance for large datasets",
                                    "Combine map() with other functional programming tools",
                                    "Design efficient data transformation pipelines"
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
                        <h6 className="text-yellow-300 font-semibold mb-2">🎯 Key Takeaways</h6>
                        <ul className="text-slate-300 text-sm space-y-1">
                            <li>• Use map(function, iterable, ...) syntax with function references (no parentheses)</li>
                            <li>• Convert map objects to lists or other iterables to view results</li>
                            <li>• Leverage lazy evaluation for memory efficiency with large datasets</li>
                            <li>• Choose between regular functions, lambdas, and built-ins based on complexity</li>
                            <li>• Apply map() to transform data without explicit loops for cleaner, functional code</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
];
