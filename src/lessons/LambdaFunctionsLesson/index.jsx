import React, { useState } from 'react';
import { chapters } from './data.jsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PythonLambdaFunctionsLesson = () => {
    const [currentChapter, setCurrentChapter] = useState(0);
    const current = chapters[currentChapter];

    const goToNext = () => setCurrentChapter(p => Math.min(chapters.length - 1, p + 1));
    const goToPrevious = () => setCurrentChapter(p => Math.max(0, p - 1));

    return (
        <div className="max-w-4xl mx-auto p-6">
            <header className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Lambda Functions in Python</h1>
                <p className="text-sky-400 mt-2">Exploring Anonymous Functions and Functional Programming</p>
            </header>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-2xl shadow-slate-950/50 backdrop-blur-sm">
                <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="text-sky-400">{current.icon}</div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">{current.title}</h2>
                    </div>
                    <span className="text-sm font-semibold text-slate-400">
                        {currentChapter + 1} / {chapters.length}
                    </span>
                </div>

                <div className="p-6 md:p-8 leading-relaxed text-slate-300">
                    {current.content()}
                </div>

                <div className="p-4 border-t border-slate-700 flex justify-between items-center">
                    <button 
                        onClick={goToPrevious}
                        disabled={currentChapter === 0}
                        className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft size={18} />
                        <span>Previous</span>
                    </button>
                    <button 
                        onClick={goToNext}
                        disabled={currentChapter === chapters.length - 1}
                        className="flex items-center space-x-2 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500 disabled:bg-sky-900/50 disabled:text-sky-700 disabled:cursor-not-allowed transition-colors"
                    >
                        <span>Next</span>
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PythonLambdaFunctionsLesson;