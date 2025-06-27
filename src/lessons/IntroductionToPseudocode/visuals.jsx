import React, { useState } from 'react';
import { FileText, Code2, ChevronRight, ChevronDown, BookOpen, Brain, Award, Layers } from 'lucide-react';

// 1. What is Pseudocode? Visual
export const PseudocodeDefinitionVisual = () => (
  <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600 flex flex-col md:flex-row items-center gap-8">
    <div className="flex-1">
      <h5 className="text-lg font-semibold text-sky-300 mb-2">Pseudocode is...</h5>
      <ul className="text-slate-300 space-y-2">
        <li><span className="text-sky-400">✓</span> Plain English, structured like code</li>
        <li><span className="text-sky-400">✓</span> No strict syntax, not executable</li>
        <li><span className="text-sky-400">✓</span> Used to plan and communicate logic</li>
        <li><span className="text-sky-400">✓</span> Easy to translate into any language</li>
      </ul>
    </div>
    <div className="flex-1 flex justify-center">
      <svg width="160" height="120" viewBox="0 0 160 120">
        <rect x="10" y="10" width="140" height="100" rx="14" fill="#0ea5e9" opacity="0.2" />
        <text x="80" y="50" textAnchor="middle" fill="#38bdf8" fontSize="16" fontWeight="bold">PSEUDOCODE</text>
        <text x="80" y="80" textAnchor="middle" fill="#f1f5f9" fontSize="12">"Add two numbers"</text>
      </svg>
    </div>
  </div>
);

// 2. Pseudocode vs Code Visual
export const PseudocodeVsCodeVisual = () => (
  <div className="my-8 bg-slate-900/50 p-6 rounded-xl border border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h5 className="text-sky-300 font-semibold mb-2">Pseudocode</h5>
      <pre className="bg-slate-800 p-4 rounded-lg text-slate-200 font-mono text-sm">
        INPUT number1{'\n'}
        INPUT number2{'\n'}
        SET total = number1 + number2{'\n'}
        PRINT total
      </pre>
    </div>
    <div>
      <h5 className="text-purple-300 font-semibold mb-2">Python Code</h5>
      <pre className="bg-slate-800 p-4 rounded-lg text-slate-200 font-mono text-sm">
        number1 = int(input("Enter number 1: ")){'\n'}
        number2 = int(input("Enter number 2: ")){'\n'}
        total = number1 + number2{'\n'}
        print(total)
      </pre>
    </div>
  </div>
);

// 3. Pseudocode Keywords Visual
export const PseudocodeKeywordsVisual = () => (
  <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600">
    <h5 className="text-lg font-semibold text-sky-300 mb-4">Common Pseudocode Keywords</h5>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { keyword: "INPUT", desc: "Get user input" },
        { keyword: "OUTPUT/PRINT", desc: "Display output" },
        { keyword: "SET", desc: "Assign a value" },
        { keyword: "IF/ELSE", desc: "Decision making" },
        { keyword: "FOR", desc: "Counting loop" },
        { keyword: "WHILE", desc: "Condition loop" },
        { keyword: "REPEAT", desc: "Repeat until" },
        { keyword: "END", desc: "End of block" },
      ].map(({ keyword, desc }) => (
        <div key={keyword} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-center">
          <div className="text-emerald-400 font-bold text-lg mb-1">{keyword}</div>
          <div className="text-slate-300 text-xs">{desc}</div>
        </div>
      ))}
    </div>
  </div>
);

// 4. Pseudocode Benefits Visual
export const PseudocodeBenefitsVisual = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
      <h5 className="text-emerald-300 font-semibold mb-2">For Beginners</h5>
      <ul className="text-slate-300 space-y-2">
        <li>• Focuses on logic, not syntax</li>
        <li>• Builds problem-solving skills</li>
        <li>• Makes learning programming easier</li>
      </ul>
    </div>
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
      <h5 className="text-sky-300 font-semibold mb-2">For Professionals</h5>
      <ul className="text-slate-300 space-y-2">
        <li>• Helps design and plan algorithms</li>
        <li>• Aids in team communication</li>
        <li>• Reduces bugs and saves time</li>
      </ul>
    </div>
  </div>
);

// 5. Pseudocode Example Visual
export const PseudocodeExampleVisual = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="my-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600 p-6">
      <div className="flex items-center mb-4 cursor-pointer" onClick={() => setExpanded(e => !e)}>
        <ChevronRight className={`w-5 h-5 mr-2 transition-transform ${expanded ? 'rotate-90' : ''}`} />
        <h5 className="text-lg font-semibold text-sky-300">See a full pseudocode example</h5>
      </div>
      {expanded && (
        <pre className="bg-slate-800 p-4 rounded-lg text-slate-200 font-mono text-sm whitespace-pre-wrap">
{`INPUT number1
INPUT number2
SET total = number1 + number2
PRINT "The total is", total`}
        </pre>
      )}
    </div>
  );
};

// 6. Pseudocode to Flowchart Visual
export const PseudocodeToFlowchartVisual = () => (
  <div className="flex flex-col items-center my-8">
    <svg width="300" height="250" viewBox="0 0 300 250">
      {/* Start */}
      <ellipse cx="150" cy="30" rx="50" ry="20" fill="#0ea5e9" />
      <text x="150" y="35" textAnchor="middle" fill="white" fontSize="12">Start</text>
      {/* Input 1 */}
      <rect x="80" y="60" width="140" height="30" rx="8" fill="#38bdf8" />
      <text x="150" y="80" textAnchor="middle" fill="white" fontSize="12">INPUT number1</text>
      {/* Input 2 */}
      <rect x="80" y="100" width="140" height="30" rx="8" fill="#38bdf8" />
      <text x="150" y="120" textAnchor="middle" fill="white" fontSize="12">INPUT number2</text>
      {/* Decision */}
      <polygon points="150,140 240,170 150,200 60,170" fill="#a78bfa" />
      <text x="150" y="170" textAnchor="middle" fill="white" fontSize="12">number1 ≥ number2?</text>
      {/* Arrows */}
      <line x1="150" y1="50" x2="150" y2="60" stroke="#fff" strokeWidth="2" />
      <line x1="150" y1="90" x2="150" y2="100" stroke="#fff" strokeWidth="2" />
      <line x1="150" y1="130" x2="150" y2="140" stroke="#fff" strokeWidth="2" />
      {/* Yes path */}
      <rect x="30" y="210" width="100" height="30" rx="8" fill="#4ade80" />
      <text x="80" y="230" textAnchor="middle" fill="white" fontSize="12">largest = number1</text>
      <line x1="90" y1="200" x2="80" y2="210" stroke="#fff" strokeWidth="2" />
      {/* No path */}
      <rect x="170" y="210" width="100" height="30" rx="8" fill="#f472b6" />
      <text x="220" y="230" textAnchor="middle" fill="white" fontSize="12">largest = number2</text>
      <line x1="210" y1="200" x2="220" y2="210" stroke="#fff" strokeWidth="2" />
    </svg>
    <div className="text-slate-400 text-xs mt-2">Flowchart for "Find Largest of Two Numbers"</div>
  </div>
);

// 7. Pseudocode Best Practices Visual
export const PseudocodeBestPracticesVisual = () => (
  <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600">
    <h5 className="text-lg font-semibold text-sky-300 mb-4">Best Practices for Writing Pseudocode</h5>
    <ul className="text-slate-300 space-y-2">
      <li>• Start with a clear statement of the algorithm's purpose</li>
      <li>• Use uppercase for keywords</li>
      <li>• Indent blocks for clarity</li>
      <li>• One statement per line</li>
      <li>• End blocks with ENDIF, ENDFOR, etc.</li>
      <li>• Avoid programming language-specific syntax</li>
      <li>• Use descriptive names from the problem domain</li>
    </ul>
  </div>
);
