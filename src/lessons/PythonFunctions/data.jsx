// FILE: src/lessons/PythonFunctions/data.js
import React from 'react';
import { BookOpen, Code, Settings, Gift, Package, Box, Repeat, Award, BrainCircuit } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import ErrorBox from '../../components/ErrorBox.jsx';
import { 
  FunctionSyntaxVisual, 
  WhyFunctionsVisual, 
  DefaultParameterVisual, 
  ArgsKwargsVisual, 
  ReturnStatementVisual, 
  RealWorldFunctionsVisual 
} from './visuals.jsx';

export const chapters = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "What is a Function?",
    content: () => (
      <>
        <p>A <strong className="text-sky-300">function</strong> is a reusable block of code that performs a specific task.</p>
        <p>It helps in organizing code, reusing logic, and improving readability.</p>
        <FunctionSyntaxVisual />
      </>
    )
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Why Use Functions?",
    content: () => (
      <>
        <p>Functions allow you to encapsulate logic for reusability. For example, checking whether a number is even or odd:</p>
        <CodeBlock>{`def even_or_odd(num):
    if num % 2 == 0:
        print("The number is even")
    else:
        print("The number is odd")

even_or_odd(24)`}</CodeBlock>
        <WhyFunctionsVisual />
      </>
    )
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Parameters and Return Values",
    content: () => (
      <>
        <CodeBlock>{`def add(a, b):
    return a + b

print(add(2, 4))  # Output: 6`}</CodeBlock>
        <p className="mt-4">You can pass values (arguments) to functions and get results using the <code className="bg-slate-700 px-1">return</code> keyword.</p>
      </>
    )
  },
  {
    icon: <Gift className="w-5 h-5" />,
    title: "Default Parameters",
    content: () => (
      <>
        <p>If no value is passed for a parameter, its default value is used.</p>
        <CodeBlock>{`def greet(name="Guest"):
    print(f"Hello {name}, welcome to the Paradise!")

greet("Krish")
greet()`}</CodeBlock>
        <DefaultParameterVisual />
      </>
    )
  },
  {
    icon: <Package className="w-5 h-5" />,
    title: "*args and **kwargs",
    content: () => (
      <>
        <p>Use <code>*args</code> to pass a variable number of positional arguments and <code>**kwargs</code> for keyword arguments.</p>
        <ArgsKwargsVisual />
        <CodeBlock>{`def print_all(*args, **kwargs):
    print("Args:", args)
    print("Kwargs:", kwargs)

print_all(1, 2, 3, name="Krish", age=32)`}</CodeBlock>
        <ErrorBox 
          code={`print_all(name="Krish", 1, 2)`} 
          errorType="SyntaxError" 
          errorMessage="positional argument follows keyword argument" 
        />
      </>
    )
  },
  {
    icon: <Repeat className="w-5 h-5" />,
    title: "Return Statement",
    content: () => (
      <>
        <p>Functions can return values using the <code>return</code> statement. You can even return multiple values as a tuple.</p>
        <ReturnStatementVisual />
        <CodeBlock>{`def multi_return(a, b):
    return a, b, a * b

x, y, z = multi_return(2, 3)
print(x, y, z)`}</CodeBlock>
      </>
    )
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Real-World Use Cases",
    content: () => <RealWorldFunctionsVisual />
  },
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "Key Takeaways",
    content: () => (
      <>
        <ul className="list-disc list-inside space-y-2 my-2">
          <li>Functions make code <strong className="text-sky-300">modular</strong> and <strong className="text-sky-300">reusable</strong>.</li>
          <li>You can define <strong className="text-sky-300">parameters</strong> and receive results via <strong className="text-sky-300">return</strong>.</li>
          <li><strong className="text-sky-300">Default parameters</strong> and <strong className="text-sky-300">*args/**kwargs</strong> offer flexibility.</li>
        </ul>
        <p className="mt-4">Next: Lambda functions, decorators, and scope!</p>
      </>
    )
  }
];
