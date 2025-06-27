import React from 'react';
import { BookOpen, AlertTriangle, ListChecks, HelpCircle, Sigma, ToggleRight, MessageSquare, CheckSquare } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import ErrorBox from '../../components/ErrorBox.jsx';
import { DataTypesIntro, DataTypesSummaryTable } from './visuals.jsx';

export const chapters = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Introduction to Data Types",
        content: () => (
            <>
                <p>Data types are classifications that tell the Python interpreter how a programmer intends to use a piece of data. They determine what operations can be performed, the kind of values the data can hold, and how much memory is needed to store it.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Importance of Data Types</h3>
                <ul className="list-disc list-inside space-y-2 my-2">
                    <li><strong className="text-slate-300">Efficiency:</strong> Data is stored efficiently based on its type.</li>
                    <li><strong className="text-slate-300">Correct Operations:</strong> Ensures only valid operations are performed.</li>
                    <li><strong className="text-slate-300">Error Prevention:</strong> Helps catch bugs early.</li>
                    <li><strong className="text-slate-300">Memory Management:</strong> Optimizes memory usage.</li>
                </ul>
                <DataTypesIntro />
            </>
        )
    },
    {
        icon: <Sigma className="w-5 h-5" />,
        title: "Integers (int)",
        content: () => (
            <>
                <p>Integers represent whole numbers (positive, negative, or zero) without any decimal points.</p>
                <CodeBlock>{`age = 24
print("age: ", age)
print("type of age: ", type(age))`}</CodeBlock>
                 <h4 className="font-semibold text-slate-400">Output:</h4>
                 <CodeBlock>{`age:  24
type of age:  <class 'int'>`}</CodeBlock>
            </>
        )
    },
    {
        icon: <ToggleRight className="w-5 h-5" />,
        title: "Floats (float)",
        content: () => (
            <>
                <p>Floating-point numbers, or floats, are numbers that have a decimal point.</p>
                <CodeBlock>{`height = 5.11
print("height: ", height)
print("type of height: ", type(height))`}</CodeBlock>
                 <h4 className="font-semibold text-slate-400">Output:</h4>
                 <CodeBlock>{`height:  5.11
type of height:  <class 'float'>`}</CodeBlock>
            </>
        )
    },
    {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Strings (str)",
        content: () => (
            <>
                <p>Strings are sequences of characters, such as letters, numbers, and symbols, enclosed in quotes.</p>
                <CodeBlock>{`name = "krish"
print("name :", name)
print("type of name:", type(name))`}</CodeBlock>
                <h4 className="font-semibold text-slate-400">Output:</h4>
                <CodeBlock>{`name : krish
type of name: <class 'str'>`}</CodeBlock>
            </>
        )
    },
    {
        icon: <CheckSquare className="w-5 h-5" />,
        title: "Booleans (bool)",
        content: () => (
            <>
                <p>Booleans represent one of two truth values: <code className="font-mono bg-slate-700 text-emerald-400 px-1 rounded">True</code> or <code className="font-mono bg-slate-700 text-rose-400 px-1 rounded">False</code>.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Defining Boolean Values</h3>
                <p>You can create booleans through direct assignment, comparisons, or the `bool()` constructor, which defaults to `False`.</p>
                <CodeBlock>{`# Direct assignment
is_student = True
print(type(is_student)) # <class 'bool'>

# Through comparison
result = (10 == 20)
print(result) # False

# bool() constructor
empty = bool()
print(empty) # False`}
                </CodeBlock>
            </>
        )
    },
    {
        icon: <AlertTriangle className="w-5 h-5" />,
        title: "Type Conversion & Common Errors",
        content: () => (
            <>
                <p>Type conversion (or typecasting) means changing a value from one data type to another. It's crucial for avoiding errors, like trying to add a number to a string.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">TypeError Example</h3>
                <p>The following code tries to concatenate a string with an integer, which is not allowed.</p>
                <ErrorBox code={`result = "hello" + 5`} errorType="TypeError" errorMessage={`can only concatenate str (not "int") to str`} />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Fixing the Error</h3>
                <p>To fix this, we must convert the integer to a string using the <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">str()</code> function.</p>
                <CodeBlock>{`# We convert 5 to a string before concatenation
result = "hello" + str(5)
print("Result is: ", result)`}</CodeBlock>
                <h4 className="font-semibold text-slate-400">Output:</h4>
                <CodeBlock>{`Result is:  hello5`}</CodeBlock>
            </>
        )
    },
    {
        icon: <ListChecks className="w-5 h-5" />,
        title: "Lesson Summary",
        content: () => (
            <>
                <p>This lesson covered the basic data types in Python. Understanding them is key to writing efficient and error-free code. Future lessons will cover more advanced operations and data structures.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Summary Table</h3>
                <DataTypesSummaryTable />
            </>
        )
    }
];
