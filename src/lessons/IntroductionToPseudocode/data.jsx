import React from 'react';
import { FileText, BookOpen, ListOrdered, Code2, Brain, CheckCircle, Layers, Award, ChevronRight, ChevronDown } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import {
  PseudocodeDefinitionVisual,
  PseudocodeVsCodeVisual,
  PseudocodeKeywordsVisual,
  PseudocodeBenefitsVisual,
  PseudocodeExampleVisual,
  PseudocodeToFlowchartVisual,
  PseudocodeBestPracticesVisual
} from './visuals.jsx';

export const chapters = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: "What is Pseudocode?",
    content: () => (
      <>
        <p className="text-lg text-slate-300 mb-6">
          <span className="text-sky-400 font-semibold">Pseudocode</span> is a way of describing the steps of an algorithm using plain, readable language that looks similar to programming code but is not tied to any specific language or strict syntax[1][2][8][10]. It helps you plan, communicate, and understand algorithms before you write actual code.
        </p>
        <PseudocodeDefinitionVisual />

        <div className="my-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Key Features
          </h4>
          <ul className="space-y-3 text-slate-300">
            <li>
              <span className="text-emerald-400 font-semibold">• Not a programming language:</span> Cannot be compiled or run by a computer[2][8].
            </li>
            <li>
              <span className="text-emerald-400 font-semibold">• Language-neutral:</span> Focuses on logic, not syntax[1][3][9].
            </li>
            <li>
              <span className="text-emerald-400 font-semibold">• Easy to read:</span> Designed for humans, not machines[10][12].
            </li>
            <li>
              <span className="text-emerald-400 font-semibold">• Blueprint for code:</span> Makes it easy to translate logic into any programming language[2][8][10].
            </li>
          </ul>
        </div>

        <PseudocodeVsCodeVisual />

        <div className="my-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Brain className="w-5 h-5 mr-2" />
            Why Use Pseudocode?
          </h4>
          <PseudocodeBenefitsVisual />
        </div>
      </>
    ),
  },
  {
    icon: <ListOrdered className="w-5 h-5" />,
    title: "Pseudocode Structure & Keywords",
    content: () => (
      <>
        <p className="text-lg text-slate-300 mb-6">
          Pseudocode uses common programming constructs written in plain English and often in uppercase to indicate logic flow and structure[1][3][9][12]. There is no strict standard, but following conventions helps everyone understand your logic.
        </p>
        <PseudocodeKeywordsVisual />

        <div className="my-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Layers className="w-5 h-5 mr-2" />
            Common Pseudocode Constructs
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h5 className="text-sky-300 font-semibold mb-2">Sequence</h5>
              <p className="text-slate-300">Linear steps, one after another. Each statement on a new line.</p>
              <CodeBlock>{`INPUT number\nSET total = 0\nPRINT total`}</CodeBlock>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h5 className="text-yellow-300 font-semibold mb-2">Selection (IF/ELSE)</h5>
              <p className="text-slate-300">Decision making using IF, ELSE, ENDIF.</p>
              <CodeBlock>{`IF score >= 50 THEN\n  PRINT "Pass"\nELSE\n  PRINT "Fail"\nENDIF`}</CodeBlock>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h5 className="text-purple-300 font-semibold mb-2">Iteration (FOR/WHILE/REPEAT)</h5>
              <p className="text-slate-300">Loops for repeating steps.</p>
              <CodeBlock>{`FOR i = 1 TO 10\n  PRINT i\nENDFOR`}</CodeBlock>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h5 className="text-emerald-300 font-semibold mb-2">Input/Output</h5>
              <p className="text-slate-300">INPUT for user input, PRINT/DISPLAY for output.</p>
              <CodeBlock>{`INPUT name\nPRINT "Hello", name`}</CodeBlock>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Pseudocode Examples",
    content: () => (
      <>
        <p className="text-lg text-slate-300 mb-6">
          Here are some classic pseudocode examples for common problems. Notice the clear, language-neutral logic and use of uppercase keywords[2][7][11].
        </p>
        <PseudocodeExampleVisual />

        <div className="my-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Code2 className="w-5 h-5 mr-2" />
            Example 1: Add Two Numbers
          </h4>
          <CodeBlock>{`INPUT number1\nINPUT number2\nSET total = number1 + number2\nPRINT "The total is", total`}</CodeBlock>
        </div>

        <div className="my-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Code2 className="w-5 h-5 mr-2" />
            Example 2: Find Largest of Two Numbers
          </h4>
          <CodeBlock>{`INPUT number1\nINPUT number2\nIF number1 >= number2 THEN\n  SET largest = number1\nELSE\n  SET largest = number2\nENDIF\nPRINT "The largest number is", largest`}</CodeBlock>
        </div>

        <div className="my-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Code2 className="w-5 h-5 mr-2" />
            Example 3: Circumference of a Circle
          </h4>
          <CodeBlock>{`INPUT radius\nSET circumference = 2 * 3.14 * radius\nPRINT "The circumference is", circumference`}</CodeBlock>
        </div>

        <div className="my-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Code2 className="w-5 h-5 mr-2" />
            Example 4: Odd or Even Number
          </h4>
          <CodeBlock>{`INPUT number\nIF number % 2 == 0 THEN\n  PRINT "Even"\nELSE\n  PRINT "Odd"\nENDIF`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "From Pseudocode to Flowchart",
    content: () => (
      <>
        <p className="text-lg text-slate-300 mb-6">
          Pseudocode and flowcharts are both tools to represent algorithms. Pseudocode uses text, while flowcharts use symbols and arrows to show logic visually[5][6][7].
        </p>
        <PseudocodeToFlowchartVisual />

        <div className="my-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Example: Pseudocode to Flowchart (Largest of Two Numbers)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sky-300 font-semibold mb-2">Pseudocode</h5>
              <CodeBlock>{`INPUT number1\nINPUT number2\nIF number1 >= number2 THEN\n  SET largest = number1\nELSE\n  SET largest = number2\nENDIF\nPRINT "The largest number is", largest`}</CodeBlock>
            </div>
            <div>
              <h5 className="text-purple-300 font-semibold mb-2">Flowchart</h5>
              <PseudocodeToFlowchartVisual />
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Best Practices & Tips",
    content: () => (
      <>
        <p className="text-lg text-slate-300 mb-6">
          Writing effective pseudocode means making your logic clear, readable, and easy to translate into code. Here are some best practices[3][8][9][12]:
        </p>
        <PseudocodeBestPracticesVisual />

        <div className="my-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Quick Tips
          </h4>
          <ul className="space-y-3 text-slate-300">
            <li>• Capitalize keywords (IF, FOR, WHILE, PRINT, etc.)</li>
            <li>• Indent blocks for readability</li>
            <li>• Use one statement per line</li>
            <li>• End blocks with ENDIF, ENDFOR, etc.</li>
            <li>• Keep it language-independent and simple</li>
            <li>• Add a short statement at the top describing the algorithm's purpose</li>
            <li>• Use domain-specific names, not code variable names</li>
          </ul>
        </div>
      </>
    ),
  },
];
