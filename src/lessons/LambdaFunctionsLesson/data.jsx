import React from 'react';
import { Code, Plus, CheckCircle, Sigma, Layers } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import { LambdaInfographicVisual, LambdaExecutionFlowchart, AdditionVisual, EvenCheckVisual, ThreeNumberAdditionVisual, MapLambdaSquareVisual } from './visuals.jsx';

export const chapters = [
    {
        icon: <Code className="w-5 h-5" />,
        title: "Introduction to Lambda Functions",
        content: () => (
            <>
                <h3 className="text-lg font-bold text-white mb-4">What is a Lambda Function?</h3>
                <p>A lambda function is a small, anonymous function defined using the <code className="bg-slate-700 px-1 rounded">lambda</code> keyword. Key characteristics:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li><strong>Anonymous</strong>: No name, unlike functions defined with <code className="bg-slate-700 px-1 rounded">def</code>.</li>
                    <li><strong>Single Expression</strong>: Contains only one operation or logic.</li>
                    <li><strong>Multiple Arguments</strong>: Can accept any number of arguments.</li>
                    <li><strong>Common Uses</strong>: Short operations or as arguments to higher-order functions like <code className="bg-slate-700 px-1 rounded">map()</code> and <code className="bg-slate-700 px-1 rounded">filter()</code>.</li>
                </ul>
                <h3 className="text-lg font-bold text-white mt-4">Key Terms</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li><strong>Anonymous Function</strong>: A function without a name, created inline.</li>
                    <li><strong>Lambda Keyword</strong>: Used to define a lambda function.</li>
                    <li><strong>Expression</strong>: The single operation (e.g., <code className="bg-slate-700 px-1 rounded">x + y</code>).</li>
                    <li><strong>Higher-Order Function</strong>: A function that accepts or returns another function.</li>
                </ul>
                <h3 className="text-lg font-bold text-white mt-4">Syntax of Lambda Functions</h3>
                <p>The syntax is:</p>
                <CodeBlock>{`lambda arguments: expression`}</CodeBlock>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li><code className="bg-slate-700 px-1 rounded">lambda</code>: Keyword to define the function.</li>
                    <li><code className="bg-slate-700 px-1 rounded">arguments</code>: Input parameters (e.g., <code className="bg-slate-700 px-1 rounded">x, y</code>).</li>
                    <li><code className="bg-slate-700 px-1 rounded">expression</code>: A single operation (e.g., <code className="bg-slate-700 px-1 rounded">x + y</code>).</li>
                </ul>
                <p className="mt-2 text-slate-400">Note: Lambda functions cannot contain multiple statements or complex logic.</p>
                <LambdaInfographicVisual />
                <LambdaExecutionFlowchart />
            </>
        )
    },
    {
        icon: <Plus className="w-5 h-5" />,
        title: "Basic Lambda Function for Addition",
        content: () => (
            <>
                <p>Compares a regular function to a lambda function for adding two numbers.</p>
                <h3 className="text-lg font-semibold text-white mt-4">Regular Function</h3>
                <CodeBlock>{`def add(a, b):
    return a + b

result = add(2, 3)
print(result)`}</CodeBlock>
                <p>Output: <code className="bg-slate-700 px-1 rounded">5</code></p>
                <h3 className="text-lg font-semibold text-white mt-4">Lambda Function</h3>
                <CodeBlock>{`addition = lambda a, b: a + b
print(type(addition))  # <class 'function'>
print(addition(5, 6))`}</CodeBlock>
                <p>Output:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li><code className="bg-slate-700 px-1 rounded">type(addition)</code>: <code className="bg-slate-700 px-1 rounded">&lt;class 'function'&gt;</code></li>
                    <li><code className="bg-slate-700 px-1 rounded">addition(5, 6)</code>: <code className="bg-slate-700 px-1 rounded">11</code></li>
                </ul>
                <AdditionVisual />
                <h3 className="text-lg font-semibold text-white mt-4">Explanation</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li><strong>Regular Function</strong>: Defined with <code className="bg-slate-700 px-1 rounded">def</code>, returns <code className="bg-slate-700 px-1 rounded">a + b</code>.</li>
                    <li><strong>Lambda Function</strong>: Assigned to <code className="bg-slate-700 px-1 rounded">addition</code>, performs <code className="bg-slate-700 px-1 rounded">a + b</code> inline.</li>
                    <li><strong>Type</strong>: <code className="bg-slate-700 px-1 rounded">type(addition)</code> confirms it’s a function.</li>
                    <li><strong>Call</strong>: <code className="bg-slate-700 px-1 rounded">addition(5, 6)</code> returns <code className="bg-slate-700 px-1 rounded">11</code>.</li>
                </ul>
                <h3 className="text-lg font-semibold text-white mt-4">Why Use Lambda?</h3>
                <p>Concise for simple operations; avoids verbose <code className="bg-slate-700 px-1 rounded">def</code> functions.</p>
                <h3 className="text-lg font-semibold text-white mt-4">Real-World Use Case</h3>
                <p>Data processing pipelines in web apps to sum values dynamically.</p>
            </>
        )
    },
    {
        icon: <CheckCircle className="w-5 h-5" />,
        title: "Checking if a Number is Even",
        content: () => (
            <>
                <p>Converts a function checking even numbers into a lambda function.</p>
                <h3 className="text-lg font-semibold text-white mt-4">Regular Function</h3>
                <CodeBlock>{`def is_even(num):
    return num % 2 == 0

print(is_even(24))`}</CodeBlock>
                <p>Output: <code className="bg-slate-700 px-1 rounded">True</code></p>
                <h3 className="text-lg font-semibold text-white mt-4">Lambda Function</h3>
                <CodeBlock>{`is_even = lambda num: num % 2 == 0
print(is_even(12))`}</CodeBlock>
                <p>Output: <code className="bg-slate-700 px-1 rounded">True</code></p>
                <EvenCheckVisual />
                <h3 className="text-lg font-semibold text-white mt-4">Explanation</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li><strong>Regular Function</strong>: Checks <code className="bg-slate-700 px-1 rounded">num % 2 == 0</code> and returns a boolean.</li>
                    <li><strong>Lambda Function</strong>: Uses <code className="bg-slate-700 px-1 rounded">num % 2 == 0</code> as a boolean expression.</li>
                    <li><strong>Call</strong>: <code className="bg-slate-700 px-1 rounded">is_even(12)</code> returns <code className="bg-slate-700 px-1 rounded">True</code>.</li>
                </ul>
                <h3 className="text-lg font-semibold text-white mt-4">Key Points</h3>
                <p>Lambda condenses logic into one expression; ideal for boolean checks.</p>
                <h3 className="text-lg font-semibold text-white mt-4">Real-World Use Case</h3>
                <p>Filtering even-numbered records in data analysis tools.</p>
            </>
        )
    },
    {
        icon: <Plus className="w-5 h-5" />,
        title: "Adding Three Numbers",
        content: () => (
            <>
                <p>Demonstrates a lambda function with multiple parameters.</p>
                <h3 className="text-lg font-semibold text-white mt-4">Regular Function</h3>
                <CodeBlock>{`def add_three(x, y, z):
    return x + y + z

print(add_three(12, 13, 14))`}</CodeBlock>
                <p>Output: <code className="bg-slate-700 px-1 rounded">39</code></p>
                <h3 className="text-lg font-semibold text-white mt-4">Lambda Function</h3>
                <CodeBlock>{`add_three = lambda x, y, z: x + y + z
print(add_three(12, 13, 14))`}</CodeBlock>
                <p>Output: <code className="bg-slate-700 px-1 rounded">39</code></p>
                <ThreeNumberAdditionVisual />
                <h3 className="text-lg font-semibold text-white mt-4">Explanation</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li><strong>Regular Function</strong>: Sums <code className="bg-slate-700 px-1 rounded">x + y + z</code>.</li>
                    <li><strong>Lambda Function</strong>: Performs <code className="bg-slate-700 px-1 rounded">x + y + z</code> inline.</li>
                    <li><strong>Call</strong>: <code className="bg-slate-700 px-1 rounded">add_three(12, 13, 14)</code> returns <code className="bg-slate-700 px-1 rounded">39</code>.</li>
                </ul>
                <h3 className="text-lg font-semibold text-white mt-4">Key Points</h3>
                <p>Lambda handles multiple arguments concisely.</p>
                <h3 className="text-lg font-semibold text-white mt-4">Real-World Use Case</h3>
                <p>Financial calculations in budgeting apps to sum expense categories.</p>
            </>
        )
    },
    {
        icon: <Sigma className="w-5 h-5" />,
        title: "Lambda Function with map()",
        content: () => (
            <>
                <p>Uses a lambda function with <code className="bg-slate-700 px-1 rounded">map()</code> to square numbers.</p>
                <h3 className="text-lg font-semibold text-white mt-4">Regular Function Approach</h3>
                <CodeBlock>{`def square(number):
    return number ** 2

numbers = [1, 2, 3, 4, 5, 6]
squared_numbers = []
for num in numbers:
    squared_numbers.append(square(num))
print(squared_numbers)`}</CodeBlock>
                <p>Output: <code className="bg-slate-700 px-1 rounded">[1, 4, 9, 16, 25, 36]</code></p>
                <h3 className="text-lg font-semibold text-white mt-4">Lambda Function with map()</h3>
                <CodeBlock>{`numbers = [1, 2, 3, 4, 5, 6]
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(squared_numbers)`}</CodeBlock>
                <p>Output: <code className="bg-slate-700 px-1 rounded">[1, 4, 9, 16, 25, 36]</code></p>
                <MapLambdaSquareVisual />
                <h3 className="text-lg font-semibold text-white mt-4">Explanation</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li><strong>Regular Function</strong>: Uses a loop to apply <code className="bg-slate-700 px-1 rounded">square</code>.</li>
                    <li><strong>Lambda with map()</strong>: Applies <code className="bg-slate-700 px-1 rounded">lambda x: x ** 2</code> to each number inline.</li>
                    <li><strong>map()</strong>: Higher-order function; returns a map object.</li>
                    <li><strong>list()</strong>: Converts map object to a list.</li>
                </ul>
                <h3 className="text-lg font-semibold text-white mt-4">Why Use map() with Lambda?</h3>
                <p>Avoids explicit loops; efficient for large datasets.</p>
                <h3 className="text-lg font-semibold text-white mt-4">Real-World Use Case</h3>
                <p>Image processing or machine learning preprocessing.</p>
            </>
        )
    },
    {
        icon: <Layers className="w-5 h-5" />,
        title: "Key Takeaways and Future Topics",
        content: () => (
            <>
                <h3 className="text-lg font-bold text-white mb-4">Key Takeaways</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li><strong>Lambda Functions</strong>: Anonymous, single-expression functions.</li>
                    <li><strong>Syntax</strong>: <code className="bg-slate-700 px-1 rounded">lambda arguments: expression</code>.</li>
                    <li><strong>Use Cases</strong>: Simple operations, higher-order functions like <code className="bg-slate-700 px-1 rounded">map()</code>.</li>
                    <li><strong>Advantages</strong>: Concise, supports functional programming.</li>
                    <li><strong>Limitations</strong>: Single expression, less readable for complex logic.</li>
                </ul>
                <h3 className="text-lg font-bold text-white mt-4">Future Topics</h3>
                <p>Explore <code className="bg-slate-700 px-1 rounded">filter()</code>, <code className="bg-slate-700 px-1 rounded">reduce()</code>, and advanced functional programming concepts.</p>
                <h3 className="text-lg font-bold text-white mt-4">Real-World Use Cases</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li>Data processing, filtering, and sorting in applications.</li>
                    <li>Event handling in GUIs, image processing, and financial calculations.</li>
                </ul>
            </>
        )
    }
];