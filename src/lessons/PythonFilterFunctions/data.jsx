import React from 'react';
import { Filter, Check, Database, User, Layers, Code, PlayCircle, Zap, TrendingUp, Brain, Cpu, Target, Award, ShoppingCart, Factory, FileX } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import {
    FilterConceptVisual,
    FilterSyntaxVisual,
    EvenNumbersComparisonVisual,
    LambdaFilterVisual,
    MultipleConditionsVisual,
    DictionaryFilterVisual,
    InteractiveFilterDemo,
    RealWorldApplicationsVisual,
    FilterProcessFlowVisual,
    LazyEvaluationVisual,
    FilterVsLoopPerformanceVisual,
    FilterObjectExplorer,
    AdvancedFilterTechniques
} from './visuals.jsx';

export const chapters = [
    {
        icon: <Filter className="w-5 h-5" />,
        title: "Understanding Filter Function Fundamentals",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    The <code className="font-mono bg-slate-700 text-pink-400 px-2 py-1 rounded">filter()</code> function 
                    constructs an iterator from elements of an iterable for which a function returns <code className="text-emerald-400">True</code>. 
                    It's a powerful tool for selecting elements that meet specific criteria.
                </p>
                
                <FilterConceptVisual />
                
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
                                    <span className="font-semibold text-emerald-300">Purpose:</span> Filters items from an iterable based on a condition
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Input:</span> A function (returns True/False) and an iterable
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Output:</span> A filter object (iterator) with selected elements
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-400 mr-2">•</span>
                                <div>
                                    <span className="font-semibold text-emerald-300">Use Case:</span> Selecting elements meeting specific criteria
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
                                <span className="text-purple-200 font-semibold">Filter Object:</span>
                                <p className="text-sm text-slate-300">An iterator that lazily yields elements where function returns True</p>
                            </div>
                            <div>
                                <span className="text-purple-200 font-semibold">Condition:</span>
                                <p className="text-sm text-slate-300">A boolean expression evaluated by the function (e.g., x &gt 5, num % 2 == 0)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <LazyEvaluationVisual />

                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mt-8">
                    <h4 className="text-white font-bold mb-4 flex items-center">
                        <Brain className="w-5 h-5 mr-2" />
                        Why Use Filter Function?
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                            <div className="text-2xl mb-2">⚡</div>
                            <h5 className="text-emerald-300 font-semibold">Lazy Evaluation</h5>
                            <p className="text-xs text-slate-400">Saves memory with on-demand computation</p>
                        </div>
                        <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                            <div className="text-2xl mb-2">🎯</div>
                            <h5 className="text-sky-300 font-semibold">Concise Code</h5>
                            <p className="text-xs text-slate-400">More expressive than traditional loops</p>
                        </div>
                        <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                            <div className="text-2xl mb-2">🔧</div>
                            <h5 className="text-purple-300 font-semibold">Functional Style</h5>
                            <p className="text-xs text-slate-400">Promotes functional programming paradigms</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/20 p-6 rounded-xl border border-red-500/30 mt-6">
                    <h4 className="text-red-300 font-bold mb-4">⚠️ Important Note</h4>
                    <p className="text-slate-300">
                        The <code className="text-pink-400 bg-slate-700 px-2 py-1 rounded">filter()</code> function returns a 
                        <span className="text-yellow-400 font-semibold"> filter object</span>, which must be converted using 
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
        title: "Filter Function Syntax & Structure",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Understanding the precise syntax and components of the filter function is essential for effective usage 
                    in data processing and functional programming.
                </p>
                
                <FilterSyntaxVisual />
                
                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-4">Function Signature Breakdown</h4>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-600">
                        <pre className="text-sky-300 text-lg font-mono mb-6">
                            <span className="text-pink-500">filter</span>(<span className="text-fuchsia-400">function</span>, <span className="text-emerald-400">iterable</span>)
                        </pre>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                <h5 className="text-fuchsia-300 font-semibold mb-3">Function Parameter</h5>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-fuchsia-400 mr-2">•</span>
                                        <span>Takes one argument and returns True/False</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-fuchsia-400 mr-2">•</span>
                                        <span>Can be a regular function or lambda function</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-fuchsia-400 mr-2">•</span>
                                        <span>Passed as reference (without parentheses)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-fuchsia-400 mr-2">•</span>
                                        <span>Must return boolean value for each item</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                <h5 className="text-emerald-300 font-semibold mb-3">Iterable Parameter</h5>
                                <ul className="text-sm text-slate-300 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-emerald-400 mr-2">•</span>
                                        <span>Lists, tuples, strings, sets supported</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-400 mr-2">•</span>
                                        <span>Any collection that can be iterated over</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-400 mr-2">•</span>
                                        <span>Elements passed one by one to function</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-400 mr-2">•</span>
                                        <span>Custom iterables with __iter__ method</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <FilterObjectExplorer />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Function Types with Filter</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-sky-200 font-semibold mb-2">1. Regular Named Functions</h5>
                                <CodeBlock>{`def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
result = list(filter(is_even, numbers))
print(result)  # [2, 4, 6]`}</CodeBlock>
                            </div>
                            
                            <div>
                                <h5 className="text-sky-200 font-semibold mb-2">2. Lambda Functions</h5>
                                <CodeBlock>{`numbers = [1, 2, 3, 4, 5, 6]
result = list(filter(lambda x: x % 2 == 0, numbers))
print(result)  # [2, 4, 6]`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Return Types & Conversion</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Filter Object</h5>
                                <CodeBlock>{`numbers = [1, 2, 3, 4, 5]
filter_obj = filter(lambda x: x > 3, numbers)
print(filter_obj)  # <filter object at 0x...>
print(type(filter_obj))  # <class 'filter'>`}</CodeBlock>
                            </div>
                            
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Converting to Collections</h5>
                                <CodeBlock>{`# Convert to list
result_list = list(filter_obj)

# Convert to tuple  
result_tuple = tuple(filter(lambda x: x > 3, numbers))

# Convert to set
result_set = set(filter(lambda x: x > 3, numbers))`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                </div>

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
                                    <span>Convert filter object to view results</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>Use descriptive function names</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>Keep lambda functions simple</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-red-300 font-semibold mb-3">❌ Common Mistakes</h5>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Calling function: filter(even(), numbers)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Not converting filter object to list</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Functions that don't return boolean</span>
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
        icon: <Check className="w-5 h-5" />,
        title: "Example 1: Filtering Even Numbers",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Compare traditional loop approaches with the filter() function to select even numbers from a list. 
                    This example demonstrates the elegance and efficiency of functional programming.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 Problem Statement</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Filter even numbers from the list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <span className="text-emerald-400 font-semibold">Expected Output:</span>
                        <span className="text-slate-300 ml-2">[2, 4, 6, 8, 10, 12]</span>
                    </div>
                </div>
                
                <EvenNumbersComparisonVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="space-y-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-red-300 font-bold mb-4">Traditional Loop Approach</h4>
                            <CodeBlock>{`def even(num):
    if num % 2 == 0:
        return True
    return False

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
even_numbers = []
for num in numbers:
    if even(num):
        even_numbers.append(num)
print(even_numbers)`}</CodeBlock>
                            
                            <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                                <h5 className="text-red-300 font-semibold mb-2">Characteristics:</h5>
                                <ul className="text-sm text-slate-300 space-y-1">
                                    <li>• Requires explicit loop and conditional logic</li>
                                    <li>• Manual list creation and element appending</li>
                                    <li>• More verbose and imperative style</li>
                                    <li>• Memory allocation for result list upfront</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-emerald-300 font-bold mb-4">Filter Function Approach</h4>
                            <CodeBlock>{`def even(num):
    if num % 2 == 0:
        return True
    return False

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
even_numbers = list(filter(even, numbers))
print(even_numbers)`}</CodeBlock>
                            
                            <div className="mt-4 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                                <h5 className="text-emerald-300 font-semibold mb-2">Advantages:</h5>
                                <ul className="text-sm text-slate-300 space-y-1">
                                    <li>• Eliminates explicit loop and manual appending</li>
                                    <li>• Uses lazy loading for memory efficiency</li>
                                    <li>• More concise and functional programming style</li>
                                    <li>• Only elements meeting condition are included</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-sky-300 font-bold mb-4">Step-by-Step Execution</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center p-2 bg-slate-900 rounded">
                                    <span className="text-sky-400 font-mono mr-3">1.</span>
                                    <span className="text-slate-300">even(1) → False (1 % 2 != 0)</span>
                                </div>
                                <div className="flex items-center p-2 bg-emerald-900/30 rounded">
                                    <span className="text-emerald-400 font-mono mr-3">2.</span>
                                    <span className="text-slate-300">even(2) → True (2 % 2 == 0) ✓</span>
                                </div>
                                <div className="flex items-center p-2 bg-slate-900 rounded">
                                    <span className="text-sky-400 font-mono mr-3">3.</span>
                                    <span className="text-slate-300">even(3) → False (3 % 2 != 0)</span>
                                </div>
                                <div className="flex items-center p-2 bg-emerald-900/30 rounded">
                                    <span className="text-emerald-400 font-mono mr-3">4.</span>
                                    <span className="text-slate-300">even(4) → True (4 % 2 == 0) ✓</span>
                                </div>
                                <div className="text-center text-slate-400">...</div>
                                <div className="flex items-center p-2 bg-emerald-900/30 rounded">
                                    <span className="text-emerald-400 font-mono mr-3">12.</span>
                                    <span className="text-slate-300">even(12) → True (12 % 2 == 0) ✓</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-purple-300 font-bold mb-4">Alternative Even Function</h4>
                            <CodeBlock>{`# Simplified version
def is_even(num):
    return num % 2 == 0

# Even more concise with lambda
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))

# Using built-in function concept
even_numbers = [n for n in numbers if n % 2 == 0]  # List comprehension`}</CodeBlock>
                            
                            <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                                <h5 className="text-purple-300 font-semibold mb-2">Key Points:</h5>
                                <ul className="text-sm text-slate-300 space-y-1">
                                    <li>• Function reference passed without parentheses</li>
                                    <li>• Filter object requires conversion to list</li>
                                    <li>• Lazy evaluation means results computed on demand</li>
                                    <li>• Function must return True/False for each element</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <FilterVsLoopPerformanceVisual />
            </>
        )
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Example 2: Lambda Functions with Filter",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Discover the power of combining lambda functions with filter() to create concise, inline filtering operations 
                    for selecting numbers greater than 5.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 Problem Statement</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Use a lambda function with filter() to select numbers greater than 5
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-sky-400 font-semibold">Input:</span>
                                <span className="text-slate-300 ml-2">[1, 2, 3, 4, 5, 6, 7, 8, 9]</span>
                            </div>
                            <div>
                                <span className="text-emerald-400 font-semibold">Output:</span>
                                <span className="text-slate-300 ml-2">[6, 7, 8, 9]</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <LambdaFilterVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Lambda Function Implementation</h4>
                        <CodeBlock>{`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
greater_than_five = list(filter(lambda x: x > 5, numbers))
print(greater_than_five)

# Output: [6, 7, 8, 9]`}</CodeBlock>
                        
                        <div className="mt-6 space-y-4">
                            <div>
                                <h5 className="text-sky-200 font-semibold mb-2">Lambda Function Breakdown</h5>
                                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
                                    <div className="text-fuchsia-400">lambda <span className="text-sky-400">x</span>: <span className="text-emerald-400">x &gt 5</span></div>
                                    <div className="text-xs text-slate-400 mt-2">
                                        <span className="text-fuchsia-400">lambda</span> = anonymous function keyword<br/>
                                        <span className="text-sky-400">x</span> = parameter (each element from iterable)<br/>
                                        <span className="text-emerald-400">x &gt 5</span> = condition returning True/False
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h5 className="text-sky-200 font-semibold mb-2">Execution Process</h5>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between p-2 bg-slate-900 rounded">
                                        <span className="text-slate-300">lambda(1)</span>
                                        <span className="text-red-400">False</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-slate-900 rounded">
                                        <span className="text-slate-300">lambda(2)</span>
                                        <span className="text-red-400">False</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-slate-900 rounded">
                                        <span className="text-slate-300">lambda(5)</span>
                                        <span className="text-red-400">False</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-emerald-900/30 rounded">
                                        <span className="text-slate-300">lambda(6)</span>
                                        <span className="text-emerald-400">True ✓</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-emerald-900/30 rounded">
                                        <span className="text-slate-300">lambda(7)</span>
                                        <span className="text-emerald-400">True ✓</span>
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
                                <CodeBlock>{`def greater_than_five(x):
    return x > 5

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
result = list(filter(greater_than_five, numbers))
print(result)  # [6, 7, 8, 9]`}</CodeBlock>
                            </div>
                            
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Lambda Function Approach</h5>
                                <CodeBlock>{`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
result = list(filter(lambda x: x > 5, numbers))
print(result)  # [6, 7, 8, 9]`}</CodeBlock>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                            <h5 className="text-purple-300 font-semibold mb-2">When to Use Lambda</h5>
                            <ul className="text-sm text-slate-300 space-y-1">
                                <li>• Simple, one-line conditions</li>
                                <li>• One-time use filtering operations</li>
                                <li>• Inline functional programming style</li>
                                <li>• Avoiding function name pollution</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-6 rounded-xl border border-green-500/30">
                    <h4 className="text-white font-bold mb-4">🎯 Lambda Function Best Practices</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h5 className="text-green-300 font-semibold mb-3">✅ Good Lambda Usage</h5>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span><code className="text-sky-400">lambda x: x &gt 0</code> - Simple comparison</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span><code className="text-sky-400">lambda x: x.isdigit()</code> - Method call</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span><code className="text-sky-400">lambda x: len(x) &gt 3</code> - Built-in function</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span><code className="text-sky-400">lambda x: 'a' in x</code> - Membership test</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-red-300 font-semibold mb-3">❌ Avoid Complex Lambdas</h5>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Multi-line logic in lambda</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Complex nested conditions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Lambdas that reduce readability</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Reusable logic in lambda</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Example 3: Multiple Conditions with Lambda",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Learn to combine multiple conditions using logical operators in lambda functions to create sophisticated 
                    filtering logic for complex data selection scenarios.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 Problem Statement</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Select numbers that are both even AND greater than 5
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-sky-400 font-semibold">Input:</span>
                                <span className="text-slate-300 ml-2">[1, 2, 3, 4, 5, 6, 7, 8, 9]</span>
                            </div>
                            <div>
                                <span className="text-emerald-400 font-semibold">Output:</span>
                                <span className="text-slate-300 ml-2">[6, 8]</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <MultipleConditionsVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-yellow-300 font-bold mb-4">Multiple Conditions Implementation</h4>
                        <CodeBlock>{`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
even_and_greater_than_five = list(filter(
    lambda x: x > 5 and x % 2 == 0, 
    numbers
))
print(even_and_greater_than_five)

# Output: [6, 8]`}</CodeBlock>
                        
                        <div className="mt-6">
                            <h5 className="text-yellow-200 font-semibold mb-3">Condition Breakdown</h5>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <div className="font-mono text-sm space-y-2">
                                    <div className="text-emerald-400">x &gt 5</div>
                                    <div className="text-slate-400 text-center">AND</div>
                                    <div className="text-purple-400">x % 2 == 0</div>
                                    <div className="text-slate-400 text-center">↓</div>
                                    <div className="text-sky-400">Both conditions must be True</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-orange-300 font-bold mb-4">Element-by-Element Analysis</h4>
                        <div className="space-y-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
                                const greaterThan5 = num > 5;
                                const isEven = num % 2 === 0;
                                const passes = greaterThan5 && isEven;
                                
                                return (
                                    <div key={num} className={`p-3 rounded flex justify-between items-center ${
                                        passes ? 'bg-emerald-900/30 border border-emerald-500/30' : 'bg-slate-900'
                                    }`}>
                                        <span className="text-white font-mono">{num}</span>
                                        <div className="flex items-center space-x-3 text-xs">
                                            <span className={greaterThan5 ? 'text-emerald-400' : 'text-red-400'}>
                                                {num} &gt 5: {greaterThan5 ? 'True' : 'False'}
                                            </span>
                                            <span className="text-slate-400">AND</span>
                                            <span className={isEven ? 'text-emerald-400' : 'text-red-400'}>
                                                {num} % 2 == 0: {isEven ? 'True' : 'False'}
                                            </span>
                                            <span className={`font-bold ${passes ? 'text-emerald-400' : 'text-red-400'}`}>
                                                {passes ? '✓' : '✗'}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-6">Logical Operators in Filter Conditions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-emerald-300 font-bold mb-4">AND Operator</h5>
                            <CodeBlock>{`# Both conditions must be True
filter(lambda x: x > 3 and x < 8, numbers)
# Results: [4, 5, 6, 7]

# Multiple AND conditions
filter(lambda x: x > 0 and x % 2 == 0 and x < 10, numbers)`}</CodeBlock>
                            <p className="text-sm text-slate-400 mt-3">
                                Use when ALL conditions must be satisfied simultaneously.
                            </p>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-sky-300 font-bold mb-4">OR Operator</h5>
                            <CodeBlock>{`# Either condition can be True  
filter(lambda x: x < 3 or x > 7, numbers)
# Results: [1, 2, 8, 9]

# Multiple OR conditions
filter(lambda x: x == 1 or x == 5 or x == 9, numbers)`}</CodeBlock>
                            <p className="text-sm text-slate-400 mt-3">
                                Use when ANY of the conditions can be satisfied.
                            </p>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-purple-300 font-bold mb-4">NOT Operator</h5>
                            <CodeBlock>{`# Negation of condition
filter(lambda x: not x % 2 == 0, numbers)  
# Results: [1, 3, 5, 7, 9] (odd numbers)

# Combined with other operators
filter(lambda x: not (x < 3 or x > 7), numbers)`}</CodeBlock>
                            <p className="text-sm text-slate-400 mt-3">
                                Use to invert/negate boolean conditions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-6 rounded-xl border border-indigo-500/30">
                    <h4 className="text-white font-bold mb-4">🧠 Complex Condition Strategies</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h5 className="text-indigo-300 font-semibold mb-3">Practical Examples</h5>
                            <div className="space-y-3 text-sm">
                                <div className="bg-slate-800/50 p-3 rounded">
<div className="text-sky-400 font-mono mb-1">lambda x: 10 &lt;= x &lt;= 50</div>
                                    <div className="text-slate-400">Numbers in range 10-50</div>
                                </div>
                                <div className="bg-slate-800/50 p-3 rounded">
                                    <div className="text-sky-400 font-mono mb-1">lambda x: x % 3 == 0 or x % 5 == 0</div>
                                    <div className="text-slate-400">Divisible by 3 or 5</div>
                                </div>
                                <div className="bg-slate-800/50 p-3 rounded">
                                    <div className="text-sky-400 font-mono mb-1">lambda x: len(x) &gt 3 and 'a' in x</div>
                                    <div className="text-slate-400">Strings: length &gt 3 AND contains 'a'</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-purple-300 font-semibold mb-3">Best Practices</h5>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Use parentheses for complex condition grouping</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Consider short-circuit evaluation with and/or</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Break very complex conditions into named functions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Test conditions with sample data before implementing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <Database className="w-5 h-5" />,
        title: "Example 4: Filtering Dictionaries by Age",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Explore advanced filtering techniques with structured data like dictionaries, demonstrating how filter() 
                    works with complex data types and attribute-based selection.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 mb-8">
                    <h4 className="text-white font-bold mb-4">📋 Problem Statement</h4>
                    <p className="text-slate-300 mb-4">
                        <span className="text-sky-400 font-semibold">Task:</span> Filter dictionaries from a list where age is greater than 25
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg font-mono text-sm">
                        <div className="text-sky-400 mb-2">Input Data:</div>
                        <div className="text-slate-300">
                            [<br/>
                            &nbsp;&nbsp;{"{"}"name": "Krish", "age": 32{"}"},<br/>
                            &nbsp;&nbsp;{"{"}"name": "Jack", "age": 33{"}"},<br/>
                            &nbsp;&nbsp;{"{"}"name": "John", "age": 25{"}"}<br/>
                            ]
                        </div>
                    </div>
                </div>
                
                <DictionaryFilterVisual />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-sky-300 font-bold mb-4">Dictionary Filtering Implementation</h4>
                        <CodeBlock>{`def age_greater_than_25(person):
    return person["age"] > 25

people = [
    {"name": "Krish", "age": 32},
    {"name": "Jack", "age": 33},
    {"name": "John", "age": 25}
]

filtered_people = list(filter(age_greater_than_25, people))
print(filtered_people)`}</CodeBlock>
                        
                        <div className="mt-4 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                            <h5 className="text-emerald-300 font-semibold mb-2">Output:</h5>
                            <div className="bg-slate-800 p-3 rounded font-mono text-sm text-slate-300">
                                [<br/>
                                &nbsp;&nbsp;{'{'}'name': 'Krish', 'age': 32{'}'},<br/>
                                &nbsp;&nbsp;{'{'}'name': 'Jack', 'age': 33{'}'}<br/>
                                ]
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <h4 className="text-purple-300 font-bold mb-4">Alternative Approaches</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Using Lambda Function</h5>
                                <CodeBlock>{`# Lambda approach
filtered_people = list(filter(
    lambda person: person["age"] > 25, 
    people
))

# More concise
adults = list(filter(lambda p: p["age"] > 25, people))`}</CodeBlock>
                            </div>
                            
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Multiple Attribute Filtering</h5>
                                <CodeBlock>{`# Multiple conditions
experienced_adults = list(filter(
    lambda p: p["age"] > 25 and len(p["name"]) > 4,
    people
))

# Using get() for safer access
safe_filter = list(filter(
    lambda p: p.get("age", 0) > 25,
    people
))`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-6">Dictionary Processing Patterns</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-emerald-300 font-bold mb-4">Common Dictionary Filters</h5>
                            <div className="space-y-4">
                                <div>
                                    <h6 className="text-emerald-200 font-semibold mb-2">Age-based Filtering</h6>
                                    <CodeBlock>{`# Adults only (age >= 18)
adults = list(filter(lambda p: p["age"] >= 18, people))

# Senior citizens (age >= 65)  
seniors = list(filter(lambda p: p["age"] >= 65, people))

# Age range (25-65)
working_age = list(filter(
    lambda p: 25 <= p["age"] <= 65, 
    people
))`}</CodeBlock>
                                </div>
                                
                                <div>
                                    <h6 className="text-emerald-200 font-semibold mb-2">Name-based Filtering</h6>
                                    <CodeBlock>{`# Names starting with 'J'
j_names = list(filter(
    lambda p: p["name"].startswith("J"), 
    people
))

# Names with specific length
short_names = list(filter(
    lambda p: len(p["name"]) <= 4, 
    people
))`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-sky-300 font-bold mb-4">Advanced Dictionary Examples</h5>
                            <div className="space-y-4">
                                <div>
                                    <h6 className="text-sky-200 font-semibold mb-2">Employee Records</h6>
                                    <CodeBlock>{`employees = [
    {"name": "Alice", "salary": 50000, "dept": "IT"},
    {"name": "Bob", "salary": 60000, "dept": "Finance"},
    {"name": "Carol", "salary": 45000, "dept": "IT"}
]

# High earners in IT
it_high_earners = list(filter(
    lambda e: e["dept"] == "IT" and e["salary"] > 48000,
    employees
))`}</CodeBlock>
                                </div>
                                
                                <div>
                                    <h6 className="text-sky-200 font-semibold mb-2">Product Catalog</h6>
                                    <CodeBlock>{`products = [
    {"name": "Laptop", "price": 999, "rating": 4.5},
    {"name": "Mouse", "price": 25, "rating": 4.0},
    {"name": "Monitor", "price": 299, "rating": 3.8}
]

# Premium products (price > 200, rating > 4.0)
premium = list(filter(
    lambda p: p["price"] > 200 and p["rating"] > 4.0,
    products
))`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-6 rounded-xl border border-green-500/30">
                    <h4 className="text-white font-bold mb-4">🎯 Dictionary Filtering Best Practices</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h5 className="text-green-300 font-semibold mb-3">✅ Recommended Approaches</h5>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>Use <code className="text-sky-400">.get()</code> for safe key access</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>Validate data types before filtering</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>Handle missing keys gracefully</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-2">✓</span>
                                    <span>Use descriptive function names</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-red-300 font-semibold mb-3">❌ Common Pitfalls</h5>
                            <ul className="text-sm text-slate-300 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Assuming all dictionaries have same keys</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Not handling KeyError exceptions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Filtering without data validation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-400 mr-2">✗</span>
                                    <span>Overly complex lambda conditions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        icon: <User className="w-5 h-5" />,
        title: "Real-World Applications & Use Cases",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Discover how the filter() function is applied across various industries and domains to solve real-world 
                    data processing challenges, from financial systems to e-commerce platforms.
                </p>
                
                <RealWorldApplicationsVisual />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-blue-900/30 to-sky-800/20 p-6 rounded-xl border border-blue-500/30">
                        <h4 className="text-blue-300 font-bold mb-4 flex items-center">
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            E-commerce & Retail
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-blue-200 font-semibold mb-2">Product Recommendation Systems</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Filter products based on customer ratings, price ranges, and categories for personalized recommendations.
                                </p>
                                <CodeBlock>{`# High-rated products for recommendation
products = [
    {"name": "Laptop", "rating": 4.5, "price": 999},
    {"name": "Mouse", "rating": 3.2, "price": 25},
    {"name": "Monitor", "rating": 4.8, "price": 299}
]

# Filter highly rated products (rating > 4.0)
recommended = list(filter(
    lambda p: p["rating"] > 4.0, 
    products
))

# Usage: Display in "Recommended for You" section`}</CodeBlock>
                            </div>
                            
                            <div>
                                <h5 className="text-blue-200 font-semibold mb-2">Inventory Management</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Filter premium stock items for specialized reporting and analysis in retail systems.
                                </p>
                                <CodeBlock>{`# Premium inventory filtering
inventory = [
    {"product": "Gold Watch", "price": 2500, "stock": 5},
    {"product": "Silver Ring", "price": 150, "stock": 20},
    {"product": "Diamond Necklace", "price": 5000, "stock": 2}
]

# Filter premium items (price > $1000, stock > 0)
premium_stock = list(filter(
    lambda item: item["price"] > 1000 and item["stock"] > 0,
    inventory
))

# Usage: Generate premium inventory reports`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 p-6 rounded-xl border border-green-500/30">
                        <h4 className="text-green-300 font-bold mb-4 flex items-center">
                            <Database className="w-5 h-5 mr-2" />
                            Financial Services
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-green-200 font-semibold mb-2">Transaction Processing</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Filter transactions with even IDs for compliance auditing and regulatory checks in banking systems.
                                </p>
                                <CodeBlock>{`# Banking transaction audit
transactions = [
    {"id": 1001, "amount": 500, "type": "debit"},
    {"id": 1002, "amount": 1200, "type": "credit"},
    {"id": 1003, "amount": 75, "type": "debit"},
    {"id": 1004, "amount": 2000, "type": "credit"}
]

# Filter even transaction IDs for audit
audit_transactions = list(filter(
    lambda t: t["id"] % 2 == 0,
    transactions
))

# Usage: Compliance reporting and audit trails`}</CodeBlock>
                            </div>
                            
                            <div>
                                <h5 className="text-green-200 font-semibold mb-2">Risk Assessment</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Filter high-value transactions for enhanced security monitoring and fraud detection.
                                </p>
                                <CodeBlock>{`# High-value transaction monitoring
high_value_transactions = list(filter(
    lambda t: t["amount"] > 1000,
    transactions
))

# Usage: Fraud detection and security alerts`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-800/20 p-6 rounded-xl border border-purple-500/30">
                        <h4 className="text-purple-300 font-bold mb-4 flex items-center">
                            <User className="w-5 h-5 mr-2" />
                            Marketing & CRM
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">User Segmentation</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Segment customers by demographics for targeted marketing campaigns and personalized content.
                                </p>
                                <CodeBlock>{`# Customer segmentation for campaigns
customers = [
                    {"name": "Alice", "age": 28, "purchases": 15},
                    {"name": "Bob", "age": 35, "purchases": 8},
                    {"name": "Carol", "age": 22, "purchases": 25}
]

# Target adult customers (age > 25) for campaign
target_demographic = list(filter(
    lambda c: c["age"] > 25,
    customers
))

# Usage: Email marketing and ad targeting`}</CodeBlock>
                            </div>
                            
                            <div>
                                <h5 className="text-purple-200 font-semibold mb-2">Loyalty Programs</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Filter high-engagement customers for premium loyalty program enrollment.
                                </p>
                                <CodeBlock>{`# VIP customer identification
vip_customers = list(filter(
    lambda c: c["purchases"] > 20 and c["age"] > 25,
    customers
))

# Usage: VIP program invitations and special offers`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-900/30 to-red-800/20 p-6 rounded-xl border border-orange-500/30">
                        <h4 className="text-orange-300 font-bold mb-4 flex items-center">
                            <FileX className="w-5 h-5 mr-2" />
                            Content & Security
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="text-orange-200 font-semibold mb-2">Log Analysis</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Filter error logs for cybersecurity analysis and system monitoring in enterprise environments.
                                </p>
                                <CodeBlock>{`# Server log analysis
server_logs = [
    {"timestamp": "2024-01-01", "status": 200, "ip": "192.168.1.1"},
    {"timestamp": "2024-01-01", "status": 404, "ip": "192.168.1.2"},
    {"timestamp": "2024-01-01", "status": 500, "ip": "192.168.1.3"}
]

# Filter error logs (status >= 400)
error_logs = list(filter(
    lambda log: log["status"] >= 400,
    server_logs
))

# Usage: Security monitoring and incident response`}</CodeBlock>
                            </div>
                            
                            <div>
                                <h5 className="text-orange-200 font-semibold mb-2">Content Moderation</h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    Filter inappropriate content for social media platforms and community guidelines enforcement.
                                </p>
                                <CodeBlock>{`# Content moderation system
comments = [
    {"text": "Great post!", "flagged": False},
    {"text": "Inappropriate content", "flagged": True},
    {"text": "Thanks for sharing", "flagged": False}
]

# Filter clean comments for display
clean_comments = list(filter(
    lambda c: not c["flagged"],
    comments
))

# Usage: Community safety and content compliance`}</CodeBlock>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-6">Industry Implementation Patterns</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-sky-300 font-bold mb-4 flex items-center">
                                <Factory className="w-5 h-5 mr-2" />
                                Manufacturing
                            </h5>
                            <div className="space-y-3">
                                <div>
                                    <h6 className="text-sky-200 font-semibold text-sm">Quality Control</h6>
                                    <p className="text-xs text-slate-400">
                                        Filter products passing quality thresholds for shipment approval.
                                    </p>
                                    <CodeBlock>{`# Quality control filtering
products = [{"id": 1, "defects": 0}, {"id": 2, "defects": 3}]
passing_products = list(filter(lambda p: p["defects"] < 2, products))`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-emerald-300 font-bold mb-4">Healthcare</h5>
                            <div className="space-y-3">
                                <div>
                                    <h6 className="text-emerald-200 font-semibold text-sm">Patient Records</h6>
                                    <p className="text-xs text-slate-400">
                                        Filter patients by age groups, medical conditions, or treatment status.
                                    </p>
                                    <CodeBlock>{`# Patient filtering
patients = [{"age": 65, "condition": "diabetes"}]
senior_patients = list(filter(lambda p: p["age"] >= 65, patients))`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-purple-300 font-bold mb-4">Education</h5>
                            <div className="space-y-3">
                                <div>
                                    <h6 className="text-purple-200 font-semibold text-sm">Student Analytics</h6>
                                    <p className="text-xs text-slate-400">
                                        Filter students by performance metrics for academic intervention programs.
                                    </p>
                                    <CodeBlock>{`# Academic performance filtering
students = [{"name": "Alice", "gpa": 3.8}, {"name": "Bob", "gpa": 2.1}]
honor_students = list(filter(lambda s: s["gpa"] >= 3.5, students))`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/30">
                    <h4 className="text-white font-bold mb-6 text-xl flex items-center">
                        <Award className="w-6 h-6 mr-3" />
                        Implementation Best Practices
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-indigo-300 font-semibold mb-4">Production Considerations</h5>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-indigo-400 mr-2">•</span>
                                    <span>Validate input data before filtering operations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-400 mr-2">•</span>
                                    <span>Handle edge cases and empty datasets gracefully</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-400 mr-2">•</span>
                                    <span>Implement proper error handling and logging</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-400 mr-2">•</span>
                                    <span>Consider performance implications for large datasets</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-purple-300 font-semibold mb-4">Scalability Factors</h5>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Use generator expressions for memory-efficient processing</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Implement database-level filtering when possible</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Cache filtered results for repeated operations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Monitor and optimize filter function performance</span>
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
        title: "Advanced Techniques & Mastery",
        content: () => (
            <>
                <p className="text-lg text-slate-300 mb-6">
                    Master advanced filter() techniques, performance optimization strategies, and professional development 
                    practices for creating efficient, maintainable filtering solutions.
                </p>
                
                <AdvancedFilterTechniques />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-emerald-900/50 to-green-900/30 p-6 rounded-xl border border-emerald-500/30">
                            <h4 className="text-emerald-300 font-bold mb-4 flex items-center">
                                <Check className="w-5 h-5 mr-2" />
                                Best Practices
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                                    <div>
                                        <span className="font-semibold text-emerald-200">Lazy Evaluation Awareness</span>
                                        <p className="text-xs text-slate-400">Understand that filter objects are iterators - convert only when needed</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                                    <div>
                                        <span className="font-semibold text-emerald-200">Function Reference Handling</span>
                                        <p className="text-xs text-slate-400">Pass function names without parentheses to avoid calling them</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                                    <div>
                                        <span className="font-semibold text-emerald-200">Descriptive Naming</span>
                                        <p className="text-xs text-slate-400">Use clear, descriptive names for filter functions and variables</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-emerald-400 mr-2 mt-1">✓</span>
                                    <div>
                                        <span className="font-semibold text-emerald-200">Data Validation</span>
                                        <p className="text-xs text-slate-400">Validate input data structure before applying filter operations</p>
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
                                        <span className="font-semibold text-red-200">Calling Functions in filter()</span>
                                        <p className="text-xs text-slate-400">Writing filter(even(), numbers) instead of filter(even, numbers)</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-red-400 mr-2 mt-1">✗</span>
                                    <div>
                                        <span className="font-semibold text-red-200">Ignoring Filter Object Type</span>
                                        <p className="text-xs text-slate-400">Not converting filter objects to lists when trying to view results</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-red-400 mr-2 mt-1">✗</span>
                                    <div>
                                        <span className="font-semibold text-red-200">Complex Lambda Expressions</span>
                                        <p className="text-xs text-slate-400">Creating overly complex lambda functions that hurt readability</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-red-400 mr-2 mt-1">✗</span>
                                    <div>
                                        <span className="font-semibold text-red-200">Non-Boolean Returns</span>
                                        <p className="text-xs text-slate-400">Filter functions that don't return True/False values</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-sky-300 font-bold mb-4">🚀 Performance Optimization</h4>
                            <div className="space-y-4">
                                <div>
                                    <h5 className="text-sky-200 font-semibold mb-2">Memory Efficiency</h5>
                                    <CodeBlock>{`# Memory-efficient approach for large datasets
large_numbers = range(1000000)

# Don't convert immediately if processing incrementally
even_filter = filter(lambda x: x % 2 == 0, large_numbers)

# Process one by one to save memory
for even_num in even_filter:
    if even_num > 100000:
        print(f"Found large even number: {even_num}")
        break`}</CodeBlock>
                                </div>
                                
                                <div>
                                    <h5 className="text-sky-200 font-semibold mb-2">Generator Expressions</h5>
                                    <CodeBlock>{`# Alternative to filter() for complex conditions
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Generator expression (memory efficient)
even_gen = (x for x in data if x % 2 == 0)

# Equivalent filter approach
even_filter = filter(lambda x: x % 2 == 0, data)

# Both are lazy and memory efficient`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h4 className="text-purple-300 font-bold mb-4">🔧 Alternative Approaches</h4>
                            <div className="space-y-4">
                                <div>
                                    <h5 className="text-purple-200 font-semibold mb-2">List Comprehensions</h5>
                                    <CodeBlock>{`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter approach
even_filter = list(filter(lambda x: x % 2 == 0, numbers))

# List comprehension (often more readable)
even_comprehension = [x for x in numbers if x % 2 == 0]

# Both produce: [2, 4, 6, 8, 10]`}</CodeBlock>
                                </div>
                                
                                <div>
                                    <h5 className="text-purple-200 font-semibold mb-2">Combining with Other Functions</h5>
                                    <CodeBlock>{`# Chaining filter with map
import math

numbers = [1, 4, 9, 16, 25, 36]

# Filter perfect squares, then get square roots
sqrt_of_squares = list(map(
    math.sqrt,
    filter(lambda x: math.sqrt(x).is_integer(), numbers)
))

# Result: [1.0, 2.0, 3.0, 4.0, 5.0, 6.0]`}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h4 className="text-xl font-bold text-white mb-6">Professional Development Guidelines</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-emerald-300 font-bold mb-4">📝 Code Quality</h5>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-2">•</span>
                                    <span>Write self-documenting filter conditions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-2">•</span>
                                    <span>Add type hints for filter functions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-2">•</span>
                                    <span>Include docstrings for complex filtering logic</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-2">•</span>
                                    <span>Unit test filter functions with edge cases</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-sky-300 font-bold mb-4">⚡ Performance</h5>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span>Profile before optimizing filter operations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span>Consider lazy evaluation benefits vs immediate conversion</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span>Use appropriate data structures for filtering</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-400 mr-2">•</span>
                                    <span>Benchmark different filtering approaches</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h5 className="text-purple-300 font-bold mb-4">🔧 Maintainability</h5>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Favor readability over cleverness in filter logic</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Create reusable filter function libraries</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Document complex filtering business rules</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-2">•</span>
                                    <span>Use consistent naming conventions across projects</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <InteractiveFilterDemo />

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
                                    "Understand filter() syntax and lazy evaluation",
                                    "Create effective filter functions and lambdas",
                                    "Handle complex data structures (dictionaries, objects)",
                                    "Implement multi-condition filtering logic"
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
                                    "Apply filter() to real-world business problems",
                                    "Optimize filter performance for large datasets",
                                    "Combine filter() with other functional programming tools",
                                    "Debug and troubleshoot complex filtering operations"
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
                            Continue exploring functional programming concepts like <code className="text-sky-400">map()</code>, 
                            <code className="text-emerald-400 ml-1">reduce()</code>, and 
                            <code className="text-purple-400 ml-1">zip()</code>. Practice combining these tools to create 
                            powerful data processing pipelines in real-world applications.
                        </p>
                    </div>
                </div>
            </>
        )
    }
];
