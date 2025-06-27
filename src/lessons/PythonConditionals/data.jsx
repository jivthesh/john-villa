import React from 'react';
import { BookOpen, Check, X, GitMerge, ListTree, AlertTriangle, ShieldCheck, Award } from 'lucide-react';
import CodeBlock from '/src/components/CodeBlock.jsx';
import ErrorBox from '/src/components/ErrorBox.jsx';
import { IfStatementVisual, IfElseStatementVisual, IfElifElseVisual, NestedIfVisual } from './visuals.jsx';

export const chapters = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Introduction to Control Flow",
        content: () => (
            <>
                <p>Control flow refers to the order in which statements are executed in a program. Conditional statements are a key part of control flow, allowing your program to make decisions and execute different blocks of code based on specific conditions.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">This Lesson Covers:</h3>
                <ul className="list-disc list-inside space-y-2 my-2">
                    <li><strong className="text-slate-300">If Statements:</strong> Execute code if a condition is true.</li>
                    <li><strong className="text-slate-300">Else Statements:</strong> Execute code if the `if` condition is false.</li>
                    <li><strong className="text-slate-300">Elif Statements:</strong> Check for multiple alternative conditions.</li>
                    <li><strong className="text-slate-300">Nested Conditionals:</strong> Placing conditional statements inside one another.</li>
                </ul>
            </>
        )
    },
    {
        icon: <Check className="w-5 h-5" />,
        title: "The 'if' Statement",
        content: () => (
            <>
                <p>An <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">if</code> statement evaluates a condition and executes a block of code only if that condition is true.</p>
                <IfStatementVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Example: Voting Age</h3>
                <CodeBlock>{`age = 20
if age >= 18:
    print("You are allowed to vote in the elections.")`}</CodeBlock>
                <h4 className="font-semibold text-slate-400">How it works:</h4>
                <p>The condition <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">age {'>'}= 18</code> evaluates to <code className="font-mono bg-slate-700 text-emerald-400 px-1 rounded">True</code> because 20 is greater than 18. Therefore, the indented block of code is executed.</p>
            </>
        )
    },
    {
        icon: <GitMerge className="w-5 h-5" />,
        title: "The 'else' Statement",
        content: () => (
            <>
                <p>The <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">else</code> statement provides an alternative block of code to execute if the condition in the initial <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">if</code> statement is false.</p>
                <IfElseStatementVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Example: Handling Minors</h3>
                 <CodeBlock>{`age = 16
if age >= 18:
    print("You are eligible for voting.")
else:
    print("You are a minor.")`}</CodeBlock>
                <h4 className="font-semibold text-slate-400">How it works:</h4>
                <p>The condition <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">age {'>'}= 18</code> evaluates to <code className="font-mono bg-slate-700 text-rose-400 px-1 rounded">False</code>. The program then skips the `if` block and executes the code inside the `else` block.</p>
            </>
        )
    },
    {
        icon: <ListTree className="w-5 h-5" />,
        title: "The 'elif' Statement",
        content: () => (
            <>
                <p>The <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">elif</code> statement, short for "else if," allows you to check multiple alternative conditions in sequence.</p>
                <IfElifElseVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Example: Age Groups</h3>
                <CodeBlock>{`age = 17
if age < 13:
    print("You are a child.")
elif age < 18:
    print("You are a teenager.")
else:
    print("You are an adult.")`}</CodeBlock>
                 <h4 className="font-semibold text-slate-400">How it works:</h4>
                <p>The first condition (<code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">age {'<'} 13</code>) is false. The program moves to the next condition, <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">age {'<'} 18</code>, which is true. It executes that block and ignores the final `else` statement.</p>
            </>
        )
    },
    {
        icon: <ListTree className="w-5 h-5 rotate-90" />,
        title: "Nested Conditionals",
        content: () => (
            <>
                <p>You can place one or more conditional statements inside another `if`, `elif`, or `else` block to create nested logic.</p>
                <NestedIfVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Example: Positive/Negative and Even/Odd</h3>
                <CodeBlock>{`num = 12
if num > 0:
    print("The number is positive.")
    # Nested if-else
    if num % 2 == 0:
        print("The number is even.")
    else:
        print("The number is odd.")
else:
    print("The number is zero or negative.")`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Practical Example: Leap Year",
        content: () => (
            <>
                <p>Here's a complex example using nested conditionals to determine if a year is a leap year.</p>
                <CodeBlock>{`year = 2024 # Assume this is input from the user

# A year is a leap year if it is divisible by 4
if year % 4 == 0:
    # Except if it is also divisible by 100...
    if year % 100 == 0:
        # ...unless it is also divisible by 400
        if year % 400 == 0:
            print(f"{year} is a leap year.")
        else:
            print(f"{year} is not a leap year.")
    else:
        print(f"{year} is a leap year.")
else:
    print(f"{year} is not a leap year.")`}
                </CodeBlock>
            </>
        )
    },
     {
        icon: <AlertTriangle className="w-5 h-5" />,
        title: "Common Errors & Best Practices",
        content: () => (
            <>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Common Errors</h3>
                <ul className="list-disc list-inside space-y-2 my-2">
                    <li><strong className="text-slate-300">IndentationError:</strong> Forgetting to indent the code inside an `if`, `elif`, or `else` block. Python is very strict about this.</li>
                    <li><strong className="text-slate-300">Missing Colon:</strong> Every `if`, `elif`, and `else` line must end with a colon <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">:</code>.</li>
                </ul>
                 <ErrorBox code={`age = 20\nif age >= 18\nprint("Vote!")`} errorType="SyntaxError" errorMessage="expected ':'" />
                 <h3 className="text-lg font-semibold mt-6 text-sky-300">Best Practices</h3>
                  <ul className="list-disc list-inside space-y-2 my-2">
                    <li><strong className="text-slate-300">Keep it Simple:</strong> Avoid overly complex nested conditionals if possible. Sometimes, breaking logic into functions is cleaner.</li>
                    <li><strong className="text-slate-300">Use `elif`:</strong> Prefer using `elif` over multiple separate `if` statements when you are checking for mutually exclusive conditions.</li>
                    <li><strong className="text-slate-300">Clear Conditions:</strong> Write conditions that are easy to read and understand.</li>
                </ul>
            </>
        )
    }
];

