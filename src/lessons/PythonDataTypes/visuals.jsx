import React from 'react';

export const DataTypesIntro = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
            <span className="text-lg font-bold text-sky-400">int</span>
            <p className="text-2xl text-white mt-2 font-mono">42</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
            <span className="text-lg font-bold text-amber-400">float</span>
            <p className="text-2xl text-white mt-2 font-mono">3.14</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
            <span className="text-lg font-bold text-fuchsia-400">str</span>
            <p className="text-2xl text-white mt-2 font-mono">"hi"</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
            <span className="text-lg font-bold text-rose-400">bool</span>
            <p className="text-2xl text-white mt-2 font-mono">True</p>
        </div>
    </div>
);

export const DataTypesSummaryTable = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-slate-600">
                        <th className="p-2 text-sky-300">Data Type</th>
                        <th className="p-2 text-sky-300">Example Value</th>
                        <th className="p-2 text-sky-300">Example Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-slate-700">
                        <td className="p-2 font-bold">int</td>
                        <td className="p-2 font-mono text-emerald-400">42</td>
                        <td className="p-2 font-mono text-slate-300">print(type(42))</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                        <td className="p-2 font-bold">float</td>
                        <td className="p-2 font-mono text-emerald-400">3.14</td>
                        <td className="p-2 font-mono text-slate-300">print(type(3.14))</td>
                    </tr>
                     <tr className="border-b border-slate-700">
                        <td className="p-2 font-bold">str</td>
                        <td className="p-2 font-mono text-emerald-400">"hello"</td>
                        <td className="p-2 font-mono text-slate-300">print(type("hi"))</td>
                    </tr>
                     <tr>
                        <td className="p-2 font-bold">bool</td>
                        <td className="p-2 font-mono text-emerald-400">True</td>
                        <td className="p-2 font-mono text-slate-300">print(type(True))</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);
