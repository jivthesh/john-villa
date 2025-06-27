
// FILE: src/pages/LessonPage.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const LessonPage = ({ lesson, goBack }) => {
// The actual lesson content is rendered by the component from the lesson object
const LessonComponent = lesson.component;

return (
<div className="w-full max-w-4xl mx-auto p-4 py-8">
<button
onClick={goBack}
className="flex items-center space-x-2 text-slate-300 hover:text-sky-400 transition-colors mb-8"
>
<ArrowLeft size={18} />
<span>Back to Dashboard</span>
</button>
<LessonComponent />
</div>
);
};

export default LessonPage;