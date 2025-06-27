import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

export const ForLoopVisual = () => (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <p className="text-center font-mono text-lg text-slate-300 mb-4">
            <span className="text-sky-400">for</span> i <span className="text-sky-400">in</span> <span className="text-fuchsia-400">range(1, 4)</span>:
        </p>
        <div className="flex justify-around items-center text-center">
            <div className="flex flex-col items-center">
                <p className="font-mono text-sm text-slate-400">Iteration 1</p>
                <div className="text-2xl font-bold text-emerald-400 p-3 bg-slate-700 rounded-full mt-1">1</div>
            </div>
            <ArrowRight className="text-slate-500" />
             <div className="flex flex-col items-center">
                <p className="font-mono text-sm text-slate-400">Iteration 2</p>
                <div className="text-2xl font-bold text-emerald-400 p-3 bg-slate-700 rounded-full mt-1">2</div>
            </div>
            <ArrowRight className="text-slate-500" />
            <div className="flex flex-col items-center">
                <p className="font-mono text-sm text-slate-400">Iteration 3</p>
                <div className="text-2xl font-bold text-emerald-400 p-3 bg-slate-700 rounded-full mt-1">3</div>
            </div>
             <ArrowRight className="text-slate-500" />
             <div className="flex flex-col items-center">
                 <p className="font-mono text-sm text-slate-400">End</p>
                <X className="text-2xl font-bold text-rose-500 p-2 bg-slate-700 rounded-full mt-1" />
            </div>
        </div>
    </div>
);

export const WhileLoopVisual = () => (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center font-sans">
        <div className="p-3 rounded-lg text-center text-sm font-semibold bg-sky-800 text-sky-200 transform -skew-x-12">
            while count {'<'} 3 ?
        </div>
        <div className="h-8 w-px bg-slate-500 mx-auto relative">
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 transform translate-x-full bg-slate-900 px-1.5 py-0.5 text-xs rounded-md text-emerald-400">True</span>
        </div>
        <div className="p-3 rounded-lg text-center text-sm font-semibold bg-slate-700 text-white w-48">
            <p>Execute Block</p>
            <p className="font-mono text-xs text-slate-400 mt-1">print(count)</p>
            <p className="font-mono text-xs text-slate-400">count += 1</p>
        </div>
        <div className="w-48 h-12 border-l border-b border-r border-slate-500 rounded-b-lg mt-[-1px] mb-2 relative">
             <div className="absolute left-[-1px] -top-3 h-3 w-px bg-slate-500"></div>
             <div className="absolute right-[-1px] -top-3 h-3 w-px bg-slate-500"></div>
             <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-400">Loop</p>
        </div>
        <div className="h-8 w-px bg-slate-500 mx-auto transform rotate-180"></div>
        <div className="p-3 rounded-lg text-center text-sm font-semibold bg-sky-800 text-sky-200 transform -skew-x-12">
             while count {'<'} 3 ?
        </div>
         <div className="h-8 w-px bg-slate-500 mx-auto relative">
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 transform translate-x-full bg-slate-900 px-1.5 py-0.5 text-xs rounded-md text-rose-500">False</span>
        </div>
        <div className="p-3 rounded-full px-6 text-center text-sm font-semibold bg-rose-800 text-rose-200">
            End
        </div>
    </div>
);

export const LoopControlVisual = () => (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
            <h4 className="font-bold text-sky-300 mb-2">Break</h4>
            <div className="flex justify-center items-center space-x-1">
                {[0,1,2,3,4].map(i => <div key={i} className="w-8 h-8 flex items-center justify-center rounded bg-emerald-500/50 text-white">{i}</div>)}
                <div className="w-8 h-8 flex items-center justify-center rounded bg-rose-500 text-white"><X size={20}/></div>
            </div>
            <p className="text-xs text-slate-400 mt-2">Stops at i == 5</p>
        </div>
         <div>
            <h4 className="font-bold text-sky-300 mb-2">Continue</h4>
            <div className="flex justify-center items-center space-x-1 flex-wrap">
                {[1,3,5,7,9].map(i => <div key={i} className="w-8 h-8 flex items-center justify-center rounded bg-emerald-500/50 text-white">{i}</div>)}
            </div>
             <p className="text-xs text-slate-400 mt-2">Skips even numbers</p>
        </div>
         <div>
            <h4 className="font-bold text-sky-300 mb-2">Pass</h4>
            <div className="flex justify-center items-center space-x-1">
                 {[0,1,2].map(i => <div key={i} className={`w-8 h-8 flex items-center justify-center rounded text-white ${i === 1 ? 'bg-slate-600' : 'bg-emerald-500/50'}`}>{i}</div>)}
            </div>
             <p className="text-xs text-slate-400 mt-2">Does nothing at i == 1</p>
        </div>
    </div>
);