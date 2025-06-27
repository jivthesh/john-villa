import React, { useState } from 'react';
import { chapters } from './data.jsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PythonMapFunctionsLesson = () => {
    const [currentChapter, setCurrentChapter] = useState(0);
    
    const current = chapters[currentChapter];

    const goToNext = () => setCurrentChapter(p => Math.min(chapters.length - 1, p + 1));
    const goToPrevious = () => setCurrentChapter(p => Math.max(0, p - 1));

    return (
        <div className="min-h-screen bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Main Content Area */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-2xl shadow-slate-950/50 backdrop-blur-sm">
                    {/* Chapter Header */}
                    <div className="p-6 border-b border-slate-700">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-sky-600/20 rounded-lg border border-sky-500/30">
                                <div className="text-sky-400 text-2xl">{current.icon}</div>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {current.title}
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 leading-relaxed text-base">
                        <div className="prose prose-slate prose-invert max-w-none">
                            {current.content()}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="p-6 border-t border-slate-700 bg-slate-900/30">
                        <div className="flex justify-between items-center">
                            <button 
                                onClick={goToPrevious}
                                disabled={currentChapter === 0}
                                className="flex items-center space-x-3 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronLeft size={20} />
                                <div className="text-left">
                                    <div className="text-sm text-slate-400">Previous</div>
                                    <div className="font-medium">
                                        {currentChapter > 0 ? chapters[currentChapter - 1].title.substring(0, 20) + '...' : ''}
                                    </div>
                                </div>
                            </button>
                            
                            <div className="hidden md:flex items-center space-x-2">
                                {chapters.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentChapter(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            currentChapter === index 
                                                ? 'bg-sky-500' 
                                                : 'bg-slate-600 hover:bg-slate-500'
                                        }`}
                                    />
                                ))}
                            </div>
                            
                            <button 
                                onClick={goToNext}
                                disabled={currentChapter === chapters.length - 1}
                                className="flex items-center space-x-3 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-500 disabled:bg-sky-900/50 disabled:text-sky-700 disabled:cursor-not-allowed transition-all"
                            >
                                <div className="text-right">
                                    <div className="text-sm text-sky-200">Next</div>
                                    <div className="font-medium">
                                        {currentChapter < chapters.length - 1 ? chapters[currentChapter + 1].title.substring(0, 20) + '...' : ''}
                                    </div>
                                </div>
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonMapFunctionsLesson;
