import React from 'react';

const FlowchartNode = ({ text, type = 'process', className = '' }) => {
    const baseClasses = 'p-3 rounded-lg text-center text-sm font-semibold';
    const typeClasses = {
        process: 'bg-slate-700 text-white',
        decision: 'bg-sky-800 text-sky-200 transform -skew-x-12',
        terminal: 'bg-rose-800 text-rose-200 rounded-full px-6',
        output: 'bg-emerald-800 text-emerald-200'
    };
    return <div className={`${baseClasses} ${typeClasses[type]} ${className}`}>{text}</div>;
};

const FlowchartArrow = () => (
    <div className="h-8 w-px bg-slate-500 mx-auto"></div>
);
const FlowchartArrowLabeled = ({label}) => (
    <div className="h-10 w-px bg-slate-500 mx-auto relative">
      <span className="absolute -right-2 top-1/2 -translate-y-1/2 transform translate-x-full bg-slate-900 px-1.5 py-0.5 text-xs rounded-md text-slate-400">{label}</span>
    </div>
);

export const IfStatementVisual = () => (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center">
        <FlowchartNode text="Start" type="terminal" />
        <FlowchartArrow />
        <FlowchartNode text="age >= 18?" type="decision" />
        <div className="w-full flex justify-center items-start my-2">
            <div className="w-1/2 flex flex-col items-center">
                <FlowchartArrowLabeled label="True" />
                <FlowchartNode text={`print("Vote")`} type="output"/>
                 <FlowchartArrow />
            </div>
             <div className="w-1/2 flex flex-col items-center opacity-30">
                 <FlowchartArrowLabeled label="False" />
                  <div className="h-10 w-px border-r border-slate-500"></div>
                  <div className="w-full h-px border-t border-slate-500"></div>
            </div>
        </div>
        <div className="h-px w-1/2 bg-slate-500"></div>
        <FlowchartArrow />
        <FlowchartNode text="End" type="terminal" />
    </div>
);

export const IfElseStatementVisual = () => (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center">
        <FlowchartNode text="Start" type="terminal" />
        <FlowchartArrow />
        <FlowchartNode text="age >= 18?" type="decision" />
         <div className="w-full flex justify-center items-start my-2">
            <div className="w-1/2 flex flex-col items-center">
                <FlowchartArrowLabeled label="True" />
                <FlowchartNode text={`print("Eligible")`} type="output"/>
                 <FlowchartArrow />
            </div>
             <div className="w-1/2 flex flex-col items-center">
                 <FlowchartArrowLabeled label="False" />
                <FlowchartNode text={`print("Minor")`} type="output" />
                 <FlowchartArrow />
            </div>
        </div>
        <div className="relative w-full h-px bg-slate-500">
            <div className="absolute top-0 left-1/4 h-4 w-px bg-slate-500"></div>
            <div className="absolute top-0 right-1/4 h-4 w-px bg-slate-500"></div>
        </div>
        <FlowchartArrow />
        <FlowchartNode text="End" type="terminal" />
    </div>
);

export const IfElifElseVisual = () => (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center">
        <FlowchartNode text="Start" type="terminal" />
        <FlowchartArrow />
        <FlowchartNode text="age < 13?" type="decision" />
        <div className="w-full flex justify-center items-start my-2">
            <div className="w-1/3 flex flex-col items-center">
                <FlowchartArrowLabeled label="True" />
                <FlowchartNode text={`print("Child")`} type="output"/>
            </div>
            <div className="w-2/3 flex flex-col items-center">
                <FlowchartArrowLabeled label="False" />
                <FlowchartNode text="age < 18?" type="decision" />
                <div className="w-full flex justify-center items-start my-2">
                     <div className="w-1/2 flex flex-col items-center">
                         <FlowchartArrowLabeled label="True" />
                         <FlowchartNode text={`print("Teenager")`} type="output"/>
                     </div>
                      <div className="w-1/2 flex flex-col items-center">
                         <FlowchartArrowLabeled label="False" />
                         <FlowchartNode text={`print("Adult")`} type="output"/>
                     </div>
                </div>
            </div>
        </div>
        <div className="h-8"></div>
        <FlowchartNode text="End" type="terminal" />
    </div>
);


export const NestedIfVisual = () => (
  <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
      <p className="font-mono text-white">
        <code>if num &gt; 0:</code>
      </p>
      <div className="pl-6 mt-2 border-l-2 border-sky-500">
        <p className="font-mono text-white">
          <code>print("Positive")</code>
        </p>
        <div className="bg-slate-800/50 p-3 mt-2 rounded-lg border border-slate-600">
          <p className="font-mono text-sky-300">
            <code>if num % 2 == 0:</code>
          </p>
          <div className="pl-6 mt-2 border-l-2 border-emerald-500">
            <p className="font-mono text-sky-300">
              <code>print("Even")</code>
            </p>
          </div>
          <p className="font-mono text-sky-300 mt-2">
            <code>else:</code>
          </p>
          <div className="pl-6 mt-2 border-l-2 border-rose-500">
            <p className="font-mono text-sky-300">
              <code>print("Odd")</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);