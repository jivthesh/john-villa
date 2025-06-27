// FILE: src/lessons/PythonFunctions/visuals.jsx
import React, { useState } from 'react';
import { BookOpen, HelpCircle, Code, Settings, Gift, Package, Box, Repeat, AlertTriangle, BrainCircuit, Award, Shield, Mail, Key, ArrowRight, X } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import ErrorBox from '../../components/ErrorBox.jsx';

const Modal = ({ title, icon, code, description, onClose }) => (
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
        <CodeBlock>{code}</CodeBlock>
      </div>
    </div>
  </div>
);

export const FunctionSyntaxVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 font-mono text-left">
    <p><span className="text-pink-400">def</span> <span className="text-sky-400">function_name</span>(<span className="text-amber-400">parameters</span>):</p>
    <div className="pl-4 border-l-2 border-slate-600">
      <p className="text-slate-400">"""Docstring"""</p>
      <p className="text-white"># Code logic</p>
      <p><span className="text-pink-400">return</span> <span className="text-emerald-400">value</span></p>
    </div>
  </div>
);

export const WhyFunctionsVisual = () => (
  <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
    <div className="p-3 bg-slate-800 border border-slate-700 rounded-lg">
      <h4 className="font-bold text-sky-300">Organization</h4>
      <p className="text-sm text-slate-400 mt-1">Breaks code into logical, manageable units.</p>
    </div>
    <div className="p-3 bg-slate-800 border border-slate-700 rounded-lg">
      <h4 className="font-bold text-sky-300">Reusability</h4>
      <p className="text-sm text-slate-400 mt-1">Write once, use multiple times.</p>
    </div>
    <div className="p-3 bg-slate-800 border border-slate-700 rounded-lg">
      <h4 className="font-bold text-sky-300">Readability</h4>
      <p className="text-sm text-slate-400 mt-1">Makes code easier to follow and maintain.</p>
    </div>
  </div>
);

export const DefaultParameterVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center">
    <p className="font-mono text-lg text-white mb-4">def greet(name=<span className="text-emerald-400">"Guest"</span>):</p>
    <div className="flex justify-around items-center">
      <div className="text-center">
        <p className="font-mono text-sm text-pink-400">greet("Krish")</p>
        <ArrowRight className="text-slate-500 my-2 rotate-90" />
        <p className="text-white">"Hello, Krish!"</p>
      </div>
      <div className="text-center">
        <p className="font-mono text-sm text-pink-400">greet()</p>
        <ArrowRight className="text-slate-500 my-2 rotate-90" />
        <p className="text-white">"Hello, Guest!"</p>
      </div>
    </div>
  </div>
);

export const ArgsKwargsVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4 bg-slate-700/50 rounded-lg text-center">
      <Package size={32} className="mx-auto text-sky-400 mb-2" />
      <h4 className="font-bold text-sky-300">*args</h4>
      <p className="text-sm text-slate-400">Captures multiple <strong className="text-white">positional</strong> arguments.</p>
    </div>
    <div className="p-4 bg-slate-700/50 rounded-lg text-center">
      <Box size={32} className="mx-auto text-amber-400 mb-2" />
      <h4 className="font-bold text-amber-300">**kwargs</h4>
      <p className="text-sm text-slate-400">Captures multiple <strong className="text-white">keyword</strong> arguments.</p>
    </div>
  </div>
);

export const ReturnStatementVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center">
    <div className="p-3 rounded-lg text-center text-sm font-semibold bg-slate-700 text-white w-48">
      <p>Function Body</p>
      <p className="font-mono text-xs text-slate-400 mt-1">product = a * b</p>
    </div>
    <ArrowRight className="text-slate-500 my-2 rotate-90" />
    <div className="p-3 bg-pink-800/50 border border-pink-500 rounded-lg font-mono text-pink-300">
      return product
    </div>
    <ArrowRight className="text-slate-500 my-2 rotate-90" />
    <div className="p-3 rounded-lg text-center text-sm font-semibold bg-emerald-800 text-emerald-300 w-48">
      <p>Caller</p>
      <p className="font-mono text-xs text-slate-400 mt-1">result = multiply(3, 4)</p>
    </div>
  </div>
);

const realWorldData = [
  {
    title: 'Authentication',
    icon: <Shield size={24} className="mr-2 text-sky-400" />,
    description: 'Verify user credentials using a reusable login function.',
    code: `def authenticate_user(username, password):
    if username == "admin" and password == "1234":
        return True
    return False`
  },
  {
    title: 'Sending Emails',
    icon: <Mail size={24} className="mr-2 text-emerald-400" />,
    description: 'Function encapsulates logic for sending email with optional subject.',
    code: `def send_email(recipient, subject="No Subject", body=""):
    print(f"To: {recipient}")
    print(f"Subject: {subject}")
    print(f"Body: {body}")`
  },
  {
    title: 'Activity Logging',
    icon: <Key size={24} className="mr-2 text-amber-400" />,
    description: 'Use *args and **kwargs to track events and metadata.',
    code: `def log_activity(*actions, **metadata):
    print("Actions:", actions)
    print("Metadata:", metadata)`
  }
];

export const RealWorldFunctionsVisual = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <>
      {modalContent && <Modal {...modalContent} onClose={() => setModalContent(null)} />}
      <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {realWorldData.map(app => (
          <div
            key={app.title}
            className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-sky-500 hover:bg-slate-700/50 cursor-pointer transition-all"
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