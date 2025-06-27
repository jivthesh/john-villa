import React from 'react';
import { ArrowRight, PlusCircle, Trash2, Key, X } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';

export const SetDefinitionVisual = () => (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center">
        <p className="font-mono text-sm text-slate-400 mb-2">list_with_duplicates = [1, 2, 2, 3, 3, 3]</p>
        <ArrowRight className="text-slate-500 rotate-90 my-2" size={32}/>
        <p className="font-mono text-lg text-white">unique_set = <span className="text-emerald-400">{'{1, 2, 3}'}</span></p>
         <div className="mt-4 w-full grid grid-cols-2 gap-4 text-center text-sm">
            <div className="bg-slate-700/50 p-3 rounded-lg">
                <h4 className="font-bold text-slate-300 flex items-center justify-center"><X size={16} className="mr-2 text-rose-400"/>Unordered</h4>
                <p className="text-slate-400">No specific item order.</p>
            </div>
             <div className="bg-slate-700/50 p-3 rounded-lg">
                <h4 className="font-bold text-slate-300 flex items-center justify-center"><Key size={16} className="mr-2 text-sky-400"/>Unique</h4>
                <p className="text-slate-400">No duplicate elements.</p>
            </div>
        </div>
    </div>
);

export const SetCreationVisual = () => (
     <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-sky-300">Using Curly Braces <code className="font-mono">{`{}`}</code></h4>
            <CodeBlock>{`my_set = {1, 2, 3, 4, 5}`}</CodeBlock>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
             <h4 className="font-bold text-sky-300">Using `set()` Constructor</h4>
            <CodeBlock>{`# Create an empty set
empty_set = set()

# Create from a list
my_set = set([1, 2, 3])`}</CodeBlock>
        </div>
    </div>
);

export const SetMethodsVisual = () => (
    <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-sky-300 mb-2">.add(element)</h4>
            <p className="text-sm text-slate-400 mb-2">Adds a single element.</p>
            <CodeBlock>{`my_set.add(6)`}</CodeBlock>
        </div>
         <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-rose-300 mb-2">.remove(element)</h4>
            <p className="text-sm text-slate-400 mb-2">Removes an element. Raises KeyError if not found.</p>
            <CodeBlock>{`my_set.remove(3)`}</CodeBlock>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-amber-300 mb-2">.discard(element)</h4>
            <p className="text-sm text-slate-400 mb-2">Removes an element, but does nothing if not found.</p>
            <CodeBlock>{`my_set.discard(10)`}</CodeBlock>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-fuchsia-300 mb-2">.pop()</h4>
            <p className="text-sm text-slate-400 mb-2">Removes and returns an arbitrary element.</p>
            <CodeBlock>{`removed = my_set.pop()`}</CodeBlock>
        </div>
    </div>
);

export const SetOperationsVisual = () => (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <div className="flex justify-center items-center">
             <div className="relative w-24 h-24">
                <div className="absolute top-0 left-0 w-16 h-16 bg-sky-500/30 border-2 border-sky-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                </div>
                 <div className="absolute bottom-0 right-0 w-16 h-16 bg-emerald-500/30 border-2 border-emerald-400 rounded-full flex items-center justify-center">
                     <span className="text-white font-bold">B</span>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-center text-xs font-mono">
            <div className="bg-slate-700 p-2 rounded">
                <p className="font-bold text-sky-300">Union</p>
                <p className="text-slate-400">All elements in A or B</p>
            </div>
            <div className="bg-slate-700 p-2 rounded">
                <p className="font-bold text-sky-300">Intersection</p>
                <p className="text-slate-400">Elements in both A and B</p>
            </div>
            <div className="bg-slate-700 p-2 rounded">
                <p className="font-bold text-sky-300">Difference</p>
                <p className="text-slate-400">Elements in A, not B</p>
            </div>
             <div className="bg-slate-700 p-2 rounded">
                <p className="font-bold text-sky-300">Symmetric Diff.</p>
                <p className="text-slate-400">Elements in A or B, not both</p>
            </div>
        </div>
    </div>
);
