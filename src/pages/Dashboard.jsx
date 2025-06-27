import React from 'react';
import { lessons } from '../data/lessons';
import { ArrowRight } from 'lucide-react';

const Dashboard = ({ navigateToLesson }) => {
return (
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<h1 className="text-4xl font-bold text-white text-center mb-2">Python Lessons</h1>
<p className="text-lg text-slate-400 text-center mb-12">Select a lesson to begin.</p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
{lessons.map(lesson => (
<div
key={lesson.id}
onClick={() => navigateToLesson(lesson.id)}
className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col justify-between
cursor-pointer group hover:border-sky-500 hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1"
>
<div>
<div className="text-sky-400 mb-3">{lesson.icon}</div>
<h2 className="text-xl font-bold text-white mb-2">{lesson.title}</h2>
<p className="text-slate-400 text-sm">{lesson.description}</p>
</div>
<div className="mt-6 flex justify-end items-center text-sky-500">
<span className="text-sm font-semibold mr-2 opacity-0 group-hover:opacity-100 transition-opacity">Start Lesson</span>
<ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
</div>
</div>
))}
</div>
</div>
);
};

export default Dashboard;
