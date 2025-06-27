import React from 'react';
import { Hash, Type, Braces, ToggleLeft, GitCommit, User, Calculator, DivideCircle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import ErrorBox from '../../components/ErrorBox';
import {
    MemoryAllocationSVG, VariableBoxes, NamingConventionChecklist,
    DynamicTypingConceptSVG, DynamicTypingTimeline, UserInputFlow,
    ArithmeticOperators, SimpleCalculator
} from './visuals';

// This file contains the chapter data specifically for the Python Variables lesson.
export const chapters = [
    {
        icon: <GitCommit className="w-5 h-5" />,
        title: "Introduction to Variables",
        content: () => (
            <>
                <p>Variables are fundamental elements in programming used to store data that can be referenced and manipulated in a program. In Python, variables are created automatically when you assign a value to them; they do not require explicit declaration to reserve memory space. The declaration happens automatically upon assignment. For example, <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">a = 100</code> creates a variable 'a' and assigns it the value 100.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Visual Idea: Memory Allocation Diagram</h3>
                <MemoryAllocationSVG />
            </>
        )
    },
    {
        icon: <Braces className="w-5 h-5" />,
        title: "Declaring and Assigning Variables",
        content: () => (
            <>
                <p>Variables are declared and assigned values simultaneously in Python. You can assign various types of values, including integers, floats, strings, and booleans.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Examples of Variable Assignment:</h3>
                <VariableBoxes />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Printing Variables & Their Types:</h3>
                <p>Variables can be printed to the console using the <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">print()</code> function, and their types can be checked with <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">type()</code>.</p>
                <CodeBlock>{`age = 54
height = 1.68
name = "Mike"
is_adult = True

print("Age :", age) # Output: Age : 54
print("Type of name :", type(name)) # Output: Type of name : <class 'str'>`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Hash className="w-5 h-5" />,
        title: "Naming Conventions for Variables",
        content: () => (
            <>
                <p>Naming conventions are crucial for writing clear and maintainable code.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Key Rules for Valid Variable Names:</h3>
                <ul className="list-disc list-inside space-y-2 my-2">
                    <li><strong className="text-slate-300">Descriptive:</strong> Variable names should be descriptive of the data they hold.</li>
                    <li><strong className="text-slate-300">Starting Character:</strong> They must start with a letter (a-z, A-Z) or an underscore (_).</li>
                    <li><strong className="text-slate-300">Allowed Characters:</strong> They can contain letters, numbers, and underscores after the initial character.</li>
                </ul>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Valid vs. Invalid Names</h3>
                <NamingConventionChecklist />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Invalid Variable Name Examples (Syntax Errors)</h3>
                <p>Trying to use an invalid name will result in a <code className="font-mono bg-slate-700 text-rose-400 px-1 rounded">SyntaxError</code>.</p>
                <ErrorBox code="2age = 30" errorType="SyntaxError" errorMessage="invalid decimal literal" />
                <ErrorBox code="first-name = 'john'" errorType="SyntaxError" errorMessage="cannot assign to expression" />
                <ErrorBox code="@name = 'JSON'" errorType="SyntaxError" errorMessage="invalid syntax" />

                <h3 className="text-lg font-semibold mt-4 text-sky-300">Case Sensitivity</h3>
                <p>Variable names are case-sensitive. <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">name</code> and <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">Name</code> are two different variables.</p>
                <CodeBlock>{`name = "john"
Name = "John"
print(name == Name) # False
# These are different identifiers`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Type className="w-5 h-5" />,
        title: "Variable Types (Data Types)",
        content: () => (
            <>
                <p>Python is a dynamically typed language, meaning the type of a variable is determined automatically at runtime based on the value assigned to it. You do not need to explicitly declare the type of a variable.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Visual Idea: Dynamic Typing Concept</h3>
                <DynamicTypingConceptSVG />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Common Built-in Data Types:</h3>
                <ul className="space-y-2 my-2">
                    <li className="flex items-center"><span className="text-sky-400 font-bold w-16">int:</span> Whole numbers (e.g., <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">age = 25</code>)</li>
                    <li className="flex items-center"><span className="text-amber-400 font-bold w-16">float:</span> Decimal numbers (e.g., <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">height = 6.1</code>)</li>
                    <li className="flex items-center"><span className="text-fuchsia-400 font-bold w-16">str:</span> Text (e.g., <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">name = "Chris"</code>)</li>
                    <li className="flex items-center"><span className="text-rose-400 font-bold w-16">bool:</span> Truth values (<code className="font-mono bg-slate-700 text-emerald-400 px-1 rounded">True</code> or <code className="font-mono bg-slate-700 text-rose-400 px-1 rounded">False</code>)</li>
                </ul>
            </>
        )
    },
    {
        icon: <ToggleLeft className="w-5 h-5" />,
        title: "Type Checking and Conversion",
        content: () => (
            <>
                <p>Python allows you to convert a variable from one data type to another, a process known as type casting. You can check a variable's type with <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">type()</code> and convert it with functions like <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">str()</code>, <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">int()</code>, and <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">float()</code>.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Valid Conversions</h3>
                <CodeBlock>{`age_str = "25"
print(type(age_str)) # <class 'str'>

age_int = int(age_str)
print(type(age_int)) # <class 'int'>

height = 5.11
height_int = int(height) # Truncates the decimal
print(height_int) # 5`}</CodeBlock>

                <h3 className="text-lg font-semibold mt-4 text-sky-300">Invalid Conversion (ValueError)</h3>
                <p>You cannot convert a non-numerical string to an integer or float. This will raise a <code className="font-mono bg-slate-700 text-rose-400 px-1 rounded">ValueError</code> because the string's content doesn't represent a valid number.</p>
                <ErrorBox code={`name = "krish"\nname_int = int(name)`} errorType="ValueError" errorMessage="invalid literal for int() with base 10: 'krish'" />
            </>
        )
    },
    {
        icon: <GitCommit className="w-5 h-5 -rotate-90" />,
        title: "Dynamic Typing",
        content: () => (
            <>
                <p>One of Python's most powerful features is dynamic typing. This means that the data type of a variable can change during the program's execution based on the new value assigned to it.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Example of Dynamic Typing:</h3>
                <CodeBlock>{`var = 10
print("Type of var =", type(var)) # <class 'int'>

var = "hello"
print("Type of var =", type(var)) # <class 'str'>

var = 3.14
print("Type of var =", type(var)) # <class 'float'>`}</CodeBlock>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Visual Idea: Dynamic Typing Timeline</h3>
                <DynamicTypingTimeline />
            </>
        )
    },
    {
        icon: <User className="w-5 h-5" />,
        title: "User Input and Type Casting",
        content: () => (
            <>
                <p>The <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">input()</code> function is used to take input from the user. By default, it always reads input as a string, even if the user enters numbers.</p>
                <UserInputFlow />
                <p>To use numerical input in calculations, you must explicitly typecast it.</p>
                <CodeBlock>{`# Step 1: Input is always a string by default
age_str = input("Enter your age: ")
print("Type of age_str =", type(age_str))

# Step 2: Convert the string to an integer for calculations
age_int = int(age_str)
print("Type of age_int =", type(age_int))`}</CodeBlock>
            </>
        )
    },
    {
        icon: <DivideCircle className="w-5 h-5" />,
        title: "Arithmetic Operations",
        content: () => (
            <>
                <p>Python provides a standard set of arithmetic operators to perform calculations.</p>
                <ArithmeticOperators />
            </>
        )
    },
    {
        icon: <Calculator className="w-5 h-5" />,
        title: "Practical Application: Simple Calculator",
        content: () => (
            <>
                <p>The concepts of variables, input, and type conversion are essential for building interactive applications. This simple calculator takes two numbers, performs several arithmetic operations, and displays the results.</p>
                <SimpleCalculator />
            </>
        )
    }
];