import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import LessonPage from './pages/LessonPage';
import { lessons } from './data/lessons';

export default function App() {
// State to manage routing. Can be { page: 'dashboard' } or { page: 'lesson', lessonId: '...' }
const [view, setView] = useState({ page: 'dashboard' });

const navigateToLesson = (lessonId) => {
setView({ page: 'lesson', lessonId });
};

const navigateToDashboard = () => {
setView({ page: 'dashboard' });
};

// Find the current lesson object if a lesson is being viewed
const currentLesson = view.page === 'lesson'
? lessons.find(l => l.id === view.lessonId)
: null;

return (
<div className="min-h-screen font-sans">
<header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
<nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div
className="text-2xl font-bold text-white cursor-pointer hover:text-sky-400 transition-colors"
onClick={navigateToDashboard}
>
Interactive Python Notes
</div>
</div>
</nav>
</header>
<main>
{view.page === 'dashboard' && <Dashboard navigateToLesson={navigateToLesson} />}
{view.page === 'lesson' && currentLesson && (
<LessonPage
lesson={currentLesson}
goBack={navigateToDashboard}
/>
)}
</main>
</div>
);
}