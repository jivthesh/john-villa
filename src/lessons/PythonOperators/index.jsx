import React, { useState } from 'react';
import { chapters } from './data.jsx';
import { ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';

const PythonPatternPracticeLesson = () => {
    const [currentChapter, setCurrentChapter] = useState(0);
    
    const current = chapters[currentChapter];

    const goToNext = () => setCurrentChapter(p => Math.min(chapters.length - 1, p + 1));
    const goToPrevious = () => setCurrentChapter(p => Math.max(0, p - 1));

    return (
        <div className="min-h-screen bg-slate-900">
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <Grid3X3 className="w-10 h-10 text-sky-400 mr-3" />
                        <h1 className="text-4xl font-bold text-white">Python Pattern Practice</h1>
                    </div>
                    <p className="text-slate-400 text-lg">
                        Master 15 Essential Pattern Programming Problems with Interactive Visualizations
                    </p>
                    <div className="flex items-center justify-center mt-4 space-x-2">
                        <span className="text-sm text-slate-500">Question {currentChapter + 1} of {chapters.length}</span>
                        <div className="w-48 bg-slate-700 rounded-full h-2">
                            <div 
                                className="bg-sky-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${((currentChapter + 1) / chapters.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-2xl shadow-slate-950/50 backdrop-blur-sm">
                    {/* Chapter Header */}
                    <div className="p-8 border-b border-slate-700">
                        <div className="flex items-center space-x-4">
                            <div className="p-4 bg-sky-600/20 rounded-xl border border-sky-500/30">
                                <div className="text-sky-400 text-3xl">{current.icon}</div>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {current.title}
                                </h2>
                                <p className="text-slate-400 text-lg">
                                    Complete problem with flow diagram, pseudocode, and memorable visualization
                                </p>
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
                    <div className="p-8 border-t border-slate-700 bg-slate-900/30">
                        <div className="flex justify-between items-center">
                            <button 
                                onClick={goToPrevious}
                                disabled={currentChapter === 0}
                                className="flex items-center space-x-3 px-8 py-4 bg-slate-700 text-white rounded-xl hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronLeft size={24} />
                                <div className="text-left">
                                    <div className="text-sm text-slate-400">Previous</div>
                                    <div className="font-medium">
                                        {currentChapter > 0 ? `Q${currentChapter}: ${chapters[currentChapter - 1].title.split(':')[1]?.substring(0, 15)}...` : ''}
                                    </div>
                                </div>
                            </button>
                            
                            <div className="hidden md:flex items-center space-x-3">
                                {chapters.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentChapter(index)}
                                        className={`w-4 h-4 rounded-full transition-all ${
                                            currentChapter === index 
                                                ? 'bg-sky-500 scale-125' 
                                                : 'bg-slate-600 hover:bg-slate-500'
                                        }`}
                                        title={`Question ${index + 1}`}
                                    />
                                ))}
                            </div>
                            
                            <button 
                                onClick={goToNext}
                                disabled={currentChapter === chapters.length - 1}
                                className="flex items-center space-x-3 px-8 py-4 bg-sky-600 text-white rounded-xl hover:bg-sky-500 disabled:bg-sky-900/50 disabled:text-sky-700 disabled:cursor-not-allowed transition-all"
                            >
                                <div className="text-right">
                                    <div className="text-sm text-sky-200">Next</div>
                                    <div className="font-medium">
                                        {currentChapter < chapters.length - 1 ? `Q${currentChapter + 2}: ${chapters[currentChapter + 1].title.split(':')[1]?.substring(0, 15)}...` : 'Complete!'}
                                    </div>
                                </div>
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Navigation */}
                <div className="mt-8 bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                    <h3 className="text-white font-bold mb-4">Quick Navigation</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        {chapters.map((chapter, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentChapter(index)}
                                className={`p-3 rounded-lg border text-left transition-all ${
                                    currentChapter === index 
                                        ? 'border-sky-500 bg-sky-500/20 text-sky-300' 
                                        : 'border-slate-600 bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
                                }`}
                            >
                                <div className="flex items-center mb-1">
                                    <span className="text-lg mr-2">{chapter.icon}</span>
                                    <span className="text-xs font-semibold">Q{index + 1}</span>
                                </div>
                                <div className="text-xs">
                                    {chapter.title.split(':')[1]?.trim() || chapter.title}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonPatternPracticeLesson;
