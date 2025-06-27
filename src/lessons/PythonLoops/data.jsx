import React from 'react';
import { BookOpen, Repeat, Repeat1, SkipForward, XCircle, MoreHorizontal, Layers, Award, CheckCircle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import { ForLoopVisual, WhileLoopVisual, LoopControlVisual } from './visuals.jsx';

export const chapters = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Introduction to Loops",
        content: () => (
            <>
                <p>Loops are fundamental constructs in Python used to execute a block of code multiple times. They are essential for automating repetitive tasks and iterating over collections of data.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Main Types of Loops</h3>
                <ul className="list-disc list-inside space-y-2 my-2">
                    <li><strong className="text-slate-300">for loop:</strong> Used for iterating over a sequence (like a list, tuple, dictionary, set, or string).</li>
                    <li><strong className="text-slate-300">while loop:</strong> Repeats as long as a certain boolean condition is true.</li>
                </ul>
                 <h3 className="text-lg font-semibold mt-4 text-sky-300">Loop Control Statements</h3>
                 <p>Statements like <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">break</code>, <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">continue</code>, and <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">pass</code> provide finer control over the execution flow within loops.</p>
            </>
        )
    },
    {
        icon: <Repeat className="w-5 h-5" />,
        title: "The 'for' Loop",
        content: () => (
            <>
                <p>The <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">for</code> loop is used to iterate over a sequence. With the <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">range()</code> function, you can generate a sequence of numbers to control the loop's execution.</p>
                <ForLoopVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Examples</h3>
                <CodeBlock>{`# Loop from 0 to 4
for i in range(5):
    print(i, end=" ") # Output: 0 1 2 3 4

# Loop with a specified start and stop
for i in range(1, 6):
    print(i, end=" ") # Output: 1 2 3 4 5

# Loop with a step size
for i in range(1, 10, 2):
    print(i, end=" ") # Output: 1 3 5 7 9
    
# Iterating over a string
for char in "Krish":
    print(char, end=" ") # Output: K r i s h`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Repeat1 className="w-5 h-5" />,
        title: "The 'while' Loop",
        content: () => (
            <>
                <p>A <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">while</code> loop executes a block of code as long as a specified condition remains true. It's essential to ensure the condition eventually becomes false to avoid an infinite loop.</p>
                <WhileLoopVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Example</h3>
                <CodeBlock>{`count = 0
while count < 5:
    print(count)
    count += 1 # Increment the counter`}</CodeBlock>
                <h4 className="font-semibold text-slate-400">Output:</h4>
                 <CodeBlock>{`0
1
2
3
4`}</CodeBlock>
            </>
        )
    },
    {
        icon: <SkipForward className="w-5 h-5" />,
        title: "Loop Control Statements",
        content: () => (
            <>
                <p>Loop control statements change the execution from its normal sequence.</p>
                <LoopControlVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Break</h3>
                <p>The <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">break</code> statement exits the loop entirely.</p>
                <CodeBlock>{`for i in range(10):
    if i == 5:
        break
    print(i, end=" ") # Output: 0 1 2 3 4`}</CodeBlock>

                <h3 className="text-lg font-semibold mt-4 text-sky-300">Continue</h3>
                <p>The <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">continue</code> statement skips the rest of the current iteration and moves to the next one.</p>
                <CodeBlock>{`for i in range(10):
    if i % 2 == 0:
        continue
    print(i, end=" ") # Output: 1 3 5 7 9`}</CodeBlock>

                 <h3 className="text-lg font-semibold mt-4 text-sky-300">Pass</h3>
                <p>The <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">pass</code> statement is a null operation. It does nothing and is used as a placeholder where code is syntactically required but you have nothing to write yet.</p>
                <CodeBlock>{`for i in range(3):
    if i == 1:
        pass # Nothing happens here
    print(i)`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Layers className="w-5 h-5" />,
        title: "Nested Loops",
        content: () => (
            <>
                <p>You can use one or more loops inside another loop. This is common for working with multi-dimensional data structures or generating combinations.</p>
                <CodeBlock>{`# Outer loop
for i in range(3):
    # Inner loop
    for j in range(2):
        print(f"i = {i}, j = {j}")`}</CodeBlock>
                <h4 className="font-semibold text-slate-400">Output:</h4>
                 <CodeBlock>{`i = 0, j = 0
i = 0, j = 1
i = 1, j = 0
i = 1, j = 1
i = 2, j = 0
i = 2, j = 1`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Practical Examples",
        content: () => (
            <>
                <p>Let's apply these concepts to solve some common problems.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Sum of First N Numbers</h3>
                 <CodeBlock>{`# Using a while loop
n = 10
sum_val = 0
count = 1
while count <= n:
    sum_val += count
    count += 1
print(f"Sum is: {sum_val}") # Output: Sum is: 55`}</CodeBlock>

                 <h3 className="text-lg font-semibold mt-4 text-sky-300">Find Prime Numbers</h3>
                 <p>This example uses a nested loop and an `else` clause on the inner loop, which only executes if the loop completes without a `break`.</p>
                  <CodeBlock>{`for num in range(1, 101):
    if num > 1:
        for i in range(2, num):
            if num % i == 0:
                break # It's not a prime number
        else:
            # This block runs only if the inner loop
            # did not break, meaning num is prime.
            print(num, end=" ")`}
                  </CodeBlock>
            </>
        )
    },
     {
        icon: <CheckCircle className="w-5 h-5" />,
        title: "Summary",
        content: () => (
            <>
               <p>Loops are a cornerstone of programming in Python, enabling efficient repetition and iteration.</p>
                <ul className="list-disc list-inside space-y-2 my-2">
                    <li><strong className="text-slate-300">`for` loops</strong> are best for iterating over a known sequence.</li>
                    <li><strong className="text-slate-300">`while` loops</strong> are ideal when the number of iterations isn't known beforehand and depends on a condition.</li>
                    <li><strong className="text-slate-300">Control statements</strong> (`break`, `continue`, `pass`) provide essential flexibility to manage the flow of loops.</li>
                    <li><strong className="text-slate-300">Nested loops</strong> are powerful for handling more complex, multi-dimensional problems.</li>
                </ul>
                <p className="mt-4">A solid understanding of these concepts is crucial for building dynamic and efficient applications.</p>
            </>
        )
    }
];