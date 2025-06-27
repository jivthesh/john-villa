import React, { useState } from 'react';
import { ArrowRight, Plus, X, Lock, Key, Database, Settings, FunctionSquare, FileJson, Copy, Repeat } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import ErrorBox from '../../components/ErrorBox.jsx';

const Modal = ({ title, icon, code, description, viz, onClose }) => (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm" onClick={onClose}>
    <div className="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
      <div className="p-4 flex justify-between items-center border-b border-slate-700 sticky top-0 bg-slate-800">
        <h3 className="text-lg font-bold text-white flex items-center">{icon}{title}</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
      </div>
      <div className="p-6">
        <p className="text-slate-300 mb-4">{description}</p>
        {viz && <div className="my-4">{viz}</div>}
        <CodeBlock>{code}</CodeBlock>
      </div>
    </div>
  </div>
);

export const TupleDefinitionVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 grid grid-cols-2 gap-4 text-center">
    <div className="p-3 bg-slate-700/50 rounded-lg">
      <h4 className="font-bold text-slate-300">Ordered</h4>
      <p className="text-slate-400 text-sm">Maintains element positions.</p>
      <p className="font-mono text-emerald-400 mt-2">(1, 2, 3)</p>
    </div>
    <div className="p-3 bg-slate-700/50 rounded-lg">
      <h4 className="font-bold text-slate-300 flex items-center justify-center"><Lock size={16} className="mr-2"/>Immutable</h4>
      <p className="text-slate-400 text-sm">Cannot be changed after creation.</p>
      <p className="font-mono text-rose-400 mt-2">Cannot modify</p>
    </div>
  </div>
);

export const TupleCreationVisual = () => (
  <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
      <h4 className="font-bold text-sky-300">Using Parentheses `()`</h4>
      <CodeBlock>{`my_tuple = (1, "hello", True)`}</CodeBlock>
    </div>
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
      <h4 className="font-bold text-sky-300">Using `tuple()` Constructor</h4>
      <CodeBlock>{`my_tuple = tuple([1, 2, 3])`}</CodeBlock>
    </div>
  </div>
);

export const TupleAccessingVisual = () => (
  <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
    <p className="text-center font-mono text-sm text-slate-400 mb-2">my_tuple = (10, 20, 30)</p>
    <div className="flex justify-center items-end space-x-1">
      {[10, 20, 30].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-24 h-12 flex items-center justify-center rounded-md text-white font-bold bg-slate-700">
            {item}
          </div>
          <span className="text-xs text-green-400 mt-1">Index {i}</span>
        </div>
      ))}
    </div>
  </div>
);

export const TupleOperationsVisual = () => (
  <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center font-mono">
    <div className="mb-4">
      <h4 className="font-semibold text-sky-300 mb-2">Concatenation `+`</h4>
      <div className="flex items-center justify-center space-x-2">
        <div className="p-2 bg-slate-700 rounded">(1, 2)</div>
        <Plus className="text-pink-400"/>
        <div className="p-2 bg-slate-700 rounded">(3, 4)</div>
        <ArrowRight className="text-slate-500"/>
        <div className="p-2 bg-emerald-800 rounded text-emerald-300">(1, 2, 3, 4)</div>
      </div>
    </div>
    <div>
      <h4 className="font-semibold text-sky-300 mb-2">Repetition `*`</h4>
      <div className="flex items-center justify-center space-x-2">
        <div className="p-2 bg-slate-700 rounded">(1, 2)</div>
        <X className="text-pink-400"/>
        <div className="p-2 bg-slate-700 rounded">3</div>
        <ArrowRight className="text-slate-500"/>
        <div className="p-2 bg-emerald-800 rounded text-emerald-300">(1, 2, 1, 2, 1, 2)</div>
      </div>
    </div>
  </div>
);

export const ImmutabilityVisual = () => (
  <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
    <h4 className="font-semibold text-center text-white mb-4">Tuple vs. List</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-3 bg-red-900/20 border border-red-500/50 rounded-lg">
        <p className="font-bold text-red-400">Tuple (Immutable)</p>
        <CodeBlock>my_tuple = (1, 2)\nmy_tuple[0] = 10 # ERROR!</CodeBlock>
      </div>
      <div className="p-3 bg-green-900/20 border border-green-500/50 rounded-lg">
        <p className="font-bold text-green-400">List (Mutable)</p>
        <CodeBlock>my_list = [1, 2]\nmy_list[0] = 10 # Works!</CodeBlock>
      </div>
    </div>
  </div>
);

export const TupleMethodsVisual = () => (
  <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
    <p className="text-center font-mono text-sm text-slate-400 mb-2">my_tuple = (1, 2, 2, 3)</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
      <div>
        <h4 className="font-semibold text-sky-300 mb-2">`.count(2)`</h4>
        <p className="text-2xl text-emerald-400">2</p>
      </div>
      <div>
        <h4 className="font-semibold text-sky-300 mb-2">`.index(3)`</h4>
        <p className="text-2xl text-emerald-400">3</p>
      </div>
    </div>
  </div>
);

export const PackingUnpackingVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-bold text-sky-300">Packing</h4>
        <p className="text-sm text-slate-400 mb-2">Values are "packed" into a tuple.</p>
        <CodeBlock>my_tuple = 1, "a"</CodeBlock>
      </div>
      <div>
        <h4 className="font-bold text-sky-300">Unpacking</h4>
        <p className="text-sm text-slate-400 mb-2">Tuple elements are assigned to variables.</p>
        <CodeBlock>x, y = my_tuple</CodeBlock>
      </div>
    </div>
  </div>
);

export const NestedTupleVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center font-mono">
    <p className="text-lg text-white mb-2">nested = ((1, 2), ("a", "b"))</p>
    <p className="text-lg text-white">Accessing <code className="text-pink-400">nested[1][0]</code></p>
    <div className="flex flex-col items-center space-y-2 mt-2">
      <div className="p-2 bg-slate-700 rounded-lg w-full md:w-2/3 flex justify-around">
        <span>(1, 2)</span>
        <span className="p-1 bg-sky-800 rounded border border-sky-500">("a", "b")</span>
      </div>
      <ArrowRight className="text-slate-500 rotate-90"/>
      <div className="p-2 bg-sky-800 rounded-lg border border-sky-500 w-full md:w-2/3 flex justify-around">
        <span className="p-1 bg-emerald-800 rounded border border-emerald-500">"a"</span>
        <span>"b"</span>
      </div>
      <ArrowRight className="text-slate-500 rotate-90"/>
      <div className="p-3 bg-emerald-800 rounded-lg border border-emerald-500 text-white font-bold">"a"</div>
    </div>
  </div>
);

// New Visualization: SVG Infographic for Tuples
export const TupleInfographicVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
    <h4 className="font-semibold text-center text-white mb-4">Tuple Infographic</h4>
    <svg viewBox="0 0 400 300" className="w-full h-auto">
      <rect x="10" y="10" width="380" height="280" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
      <text x="200" y="40" textAnchor="middle" fill="#38BDF8" fontSize="20" fontWeight="bold">Python Tuples</text>
      <rect x="50" y="70" width="100" height="50" rx="5" fill="#0F172A"/>
      <text x="100" y="95" textAnchor="middle" fill="#A5B4FC" fontSize="12">Ordered</text>
      <rect x="170" y="70" width="100" height="50" rx="5" fill="#0F172A"/>
      <text x="220" y="95" textAnchor="middle" fill="#A5B4FC" fontSize="12">Immutable</text>
      <rect x="290" y="70" width="100" height="50" rx="5" fill="#0F172A"/>
      <text x="340" y="95" textAnchor="middle" fill="#A5B4FC" fontSize="12">Heterogeneous</text>
      <path d="M50 150 h300" stroke="#38BDF8" strokeWidth="2"/>
      <text x="200" y="170" textAnchor="middle" fill="#FBBF24" fontSize="14">Key Operations</text>
      <circle cx="100" cy="220" r="30" fill="#0F172A"/>
      <text x="100" y="225" textAnchor="middle" fill="#34D399" fontSize="10">Access</text>
      <circle cx="200" cy="220" r="30" fill="#0F172A"/>
      <text x="200" y="225" textAnchor="middle" fill="#34D399" fontSize="10">Concat</text>
      <circle cx="300" cy="220" r="30" fill="#0F172A"/>
      <text x="300" y="225" textAnchor="middle" fill="#34D399" fontSize="10">Repeat</text>
    </svg>
  </div>
);

// New Visualization: Flowchart for Tuple Operations
export const TupleFlowchartVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
    <h4 className="font-semibold text-center text-white mb-4">Tuple Operations Flowchart</h4>
    <svg viewBox="0 0 400 400" className="w-full h-auto">
      <rect x="10" y="10" width="380" height="380" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
      <rect x="100" y="30" width="200" height="50" rx="10" fill="#0F172A"/>
      <text x="200" y="55" textAnchor="middle" fill="#38BDF8" fontSize="14">Start: Create Tuple</text>
      <path d="M200 80 v50" stroke="#FBBF24" strokeWidth="2" markerEnd="url(#arrow)"/>
      <rect x="100" y="130" width="200" height="50" rx="10" fill="#0F172A"/>
      <text x="200" y="155" textAnchor="middle" fill="#A5B4FC" fontSize="12">Access Element?</text>
      <path d="M200 180 v50" stroke="#FBBF24" strokeWidth="2" markerEnd="url(#arrow)"/>
      <rect x="100" y="230" width="200" height="50" rx="10" fill="#0F172A"/>
      <text x="200" y="255" textAnchor="middle" fill="#34D399" fontSize="12">Use Index/Slice</text>
      <path d="M200 280 v50" stroke="#FBBF24" strokeWidth="2" markerEnd="url(#arrow)"/>
      <rect x="100" y="330" width="200" height="50" rx="10" fill="#0F172A"/>
      <text x="200" y="355" textAnchor="middle" fill="#FBBF24" fontSize="12">End</text>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#FBBF24"/>
        </marker>
      </defs>
    </svg>
  </div>
);

// New Visualization: Loops, Iteration, and Comprehension
export const TupleLoopsIterationVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
    <h4 className="font-semibold text-center text-white mb-4">Loops & Comprehension</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-3 bg-slate-700/50 rounded-lg">
        <h5 className="font-bold text-sky-300">For Loop</h5>
        <p className="text-sm text-slate-400">Iterate directly over tuple elements.</p>
        <CodeBlock>{`for x in (1, 2, 3):
    print(x)`}</CodeBlock>
      </div>
      <div className="p-3 bg-slate-700/50 rounded-lg">
        <h5 className="font-bold text-sky-300">While Loop</h5>
        <p className="text-sm text-slate-400">Use index to access elements.</p>
        <CodeBlock>{`t = (1, 2, 3)
i = 0
while i < len(t):
    print(t[i])
    i += 1`}</CodeBlock>
      </div>
      <div className="p-3 bg-slate-700/50 rounded-lg">
        <h5 className="font-bold text-sky-300">Comprehension</h5>
        <p className="text-sm text-slate-400">Create tuples using generators.</p>
        <CodeBlock>{`t = tuple(x*2 for x in range(3))
# (0, 2, 4)`}</CodeBlock>
      </div>
    </div>
  </div>
);

const realWorldData = [
  {
    title: 'Function Returns',
    icon: <FunctionSquare size={24} className="mr-2 text-sky-400"/>,
    description: 'Functions often return multiple values packed in a tuple, which can be easily unpacked.',
    code: `def get_user_info():
    return (101, "Alice")

user_id, name = get_user_info()`
  },
  {
    title: 'Dictionary Keys',
    icon: <Key size={24} className="mr-2 text-emerald-400"/>,
    description: 'Because tuples are immutable, they can be used as keys in dictionaries, unlike lists.',
    code: `coordinates = {
    (40.71, -74.00): "New York",
    (34.05, -118.24): "Los Angeles"
}`
  },
  {
    title: 'Database Records',
    icon: <Database size={24} className="mr-2 text-amber-400"/>,
    description: 'Database query results are often returned as a list of tuples, where each tuple represents an immutable row of data.',
    code: `results = [
    (1, "John"),
    (2, "Jane")
]`
  },
  {
    title: 'Config Constants',
    icon: <Settings size={24} className="mr-2 text-fuchsia-400"/>,
    description: 'Tuples are perfect for storing configuration settings that should not change during program execution, like server addresses or color codes.',
    code: `SERVER_CONFIG = ("localhost", 8080)`
  }
];

export const RealWorldApplicationsVisual = () => {
  const [modalContent, setModalContent] = useState(null);
  
  return (
    <>
      {modalContent && <Modal {...modalContent} onClose={() => setModalContent(null)} />}
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {realWorldData.map(app => (
          <div 
            key={app.title}
            className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-sky-500 hover:bg-slate-700/50 cursor-pointer transition-all flex flex-col items-center justify-center"
            onClick={() => setModalContent(app)}
          >
            {React.cloneElement(app.icon, { size: 32, className: `${app.icon.props.className} mb-2` })}
            <h4 className="font-bold">{app.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

// Add to Introduction Chapter
export const TupleIntroductionVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
    <TupleInfographicVisual />
    <TupleFlowchartVisual />
  </div>
);