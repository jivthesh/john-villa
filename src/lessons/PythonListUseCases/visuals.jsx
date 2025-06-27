import React, { useState } from 'react';
import { ArrowRight, Plus, X, CheckCircle, Package, ClipboardList, GraduationCap, MessageSquare, BrainCircuit, ShoppingCart, FileText, Music } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';

const Modal = ({ title, icon, code, description, viz, onClose }) => (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-md" onClick={onClose}>
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-600 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="p-6 flex justify-between items-center border-b border-slate-600 sticky top-0 bg-slate-800/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">{icon}{title}</h3>
                <button onClick={onClose} className="text-slate-300 hover:text-white transition-colors">
                    <X size={24} />
                </button>
            </div>
            <div className="p-6">
                <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>
                {viz && <div className="my-6">{viz}</div>}
                <CodeBlock>{code}</CodeBlock>
            </div>
        </div>
    </div>
);

export const ToDoListVisual = () => (
    <div className="my-6 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-center font-mono text-sm text-slate-400 mb-4">to_do_list = ["buy groceries", "pay bills", "schedule meeting"]</p>
        <div className="flex flex-col items-center gap-3">
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-3">
                {["buy groceries", "pay bills", "schedule meeting"].map(task => (
                    <div key={task} className="p-3 bg-slate-700 rounded-lg border border-sky-500 text-white text-center hover:scale-105 transition-transform duration-200">
                        {task.charAt(0).toUpperCase() + task.slice(1)}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
                <Plus className="text-emerald-400 animate-pulse" size={20} />
                <div className="p-3 bg-emerald-900 rounded-lg border border-emerald-500 text-emerald-300 hover:scale-105 transition-transform duration-200">
                    Go for a run
                </div>
            </div>
            <div className="flex items-center gap-2">
                <X className="text-red-400" size={20} />
                <div className="p-3 bg-red-900 rounded-lg border border-red-500 text-red-300 line-through hover:scale-105 transition-transform duration-200">
                    Clean the house
                </div>
            </div>
        </div>
    </div>
);

export const GradesVisual = () => (
    <div className="my-6 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-center font-mono text-sm text-slate-400 mb-4">grades = [85, 92, 78, 90, 88]</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-700 rounded-lg border border-sky-500 text-center hover:scale-105 transition-transform duration-200">
                <h4 className="font-semibold text-sky-300 mb-2">Average</h4>
                <p className="text-emerald-400 font-mono">sum(grades) / len(grades)</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-lg border border-sky-500 text-center hover:scale-105 transition-transform duration-200">
                <h4 className="font-semibold text-sky-300 mb-2">Highest</h4>
                <p className="text-emerald-400 font-mono">max(grades)</p>
            </div>
            <div className="p-4 bg-slate-700 rounded-lg border border-sky-500 text-center hover:scale-105 transition-transform duration-200">
                <h4 className="font-semibold text-sky-300 mb-2">Lowest</h4>
                <p className="text-emerald-400 font-mono">min(grades)</p>
            </div>
        </div>
    </div>
);

export const InventoryVisual = () => (
    <div className="my-6 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-center font-mono text-sm text-slate-400 mb-4">inventory = ["apples", "oranges", "grapes"]</p>
        <div className="flex flex-col items-center gap-3">
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-3">
                {["apples", "oranges", "grapes"].map(item => (
                    <div key={item} className="p-3 bg-slate-700 rounded-lg border border-sky-500 text-white text-center hover:scale-105 transition-transform duration-200">
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
                <Plus className="text-emerald-400 animate-pulse" size={20} />
                <div className="p-3 bg-emerald-900 rounded-lg border border-emerald-500 text-emerald-300 hover:scale-105 transition-transform duration-200">
                    Strawberries
                </div>
            </div>
            <div className="flex items-center gap-2">
                <X className="text-red-400" size={20} />
                <div className="p-3 bg-red-900 rounded-lg border border-red-500 text-red-300 line-through hover:scale-105 transition-transform duration-200">
                    Bananas
                </div>
            </div>
        </div>
    </div>
);

export const FeedbackVisual = () => (
    <div className="my-6 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-center font-mono text-sm text-slate-400 mb-4">feedbacks = ["Great service", "Could be better", "Excellent experience"]</p>
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400 animate-pulse" size={20} />
                <p className="text-emerald-300 font-mono">"Great service" → Positive</p>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400 animate-pulse" size={20} />
                <p className="text-emerald-300 font-mono">"Excellent experience" → Positive</p>
            </div>
            <p className="text-center text-slate-300 font-semibold mt-2">Positive count: 2</p>
        </div>
    </div>
);

export const ComprehensionVisual = () => (
    <div className="my-6 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-center font-mono text-sm text-slate-400 mb-4">grades = [75, 82, 90, 78, 95]</p>
        <div className="flex items-center justify-center gap-3">
            <p className="font-mono text-emerald-400 bg-slate-700 p-2 rounded-md">{"[grade for grade in grades if grade > 80]"}</p>
            <ArrowRight className="text-sky-400" size={24} />
            <p className="font-mono text-emerald-400 bg-slate-700 p-2 rounded-md">[82, 90, 95]</p>
        </div>
    </div>
);

const realWorldData = [
    {
        title: 'Shopping Cart',
        icon: <ShoppingCart size={24} className="mr-2 text-sky-400" />,
        description: 'Lists manage items in an e-commerce shopping cart, allowing dynamic additions and removals.',
        code: `cart = ["laptop", "mouse", "keyboard"]
cart.append("headphones")
cart.remove("mouse")
print(f"Cart items: {cart}, Total: {len(cart)}")`,
        viz: (
            <div className="my-6 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-600 shadow-md">
                <p className="text-center font-mono text-sm text-slate-400 mb-4">cart = ["laptop", "keyboard", "headphones"]</p>
                <div className="flex flex-col items-center gap-3">
                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-3">
                        {["laptop", "keyboard", "headphones"].map(item => (
                            <div key={item} className="p-3 bg-slate-700 rounded-lg border border-sky-500 text-white text-center hover:scale-105 transition-transform duration-200">
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Event Log',
        icon: <FileText size={24} className="mr-2 text-emerald-400" />,
        description: 'Lists store event logs for system monitoring, tracking timestamps and messages.',
        code: `event_log = ["2025-06-23 09:00: Server started", "2025-06-23 09:05: User login"]
event_log.append("2025-06-23 09:10: File uploaded")
print("Recent events:", event_log[-2:])`,
        viz: (
            <div className="my-6 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-600 shadow-md">
                <p className="text-center font-mono text-sm text-slate-400 mb-4">event_log = ["...09:05: User login", "...09:10: File uploaded"]</p>
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-slate-700 rounded-lg border border-emerald-500 text-white text-center hover:scale-105 transition-transform duration-200 w-full max-w-md">
                        2025-06-23 09:05: User login
                    </div>
                    <div className="p-3 bg-emerald-900 rounded-lg border border-emerald-500 text-emerald-300 text-center hover:scale-105 transition-transform duration-200 w-full max-w-md">
                        2025-06-23 09:10: File uploaded
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Playlist Management',
        icon: <Music size={24} className="mr-2 text-amber-400" />,
        description: 'Lists manage song playlists, allowing users to add, remove, or shuffle songs.',
        code: `import random
playlist = ["Song A", "Song B", "Song C"]
playlist.append("Song D")
random.shuffle(playlist)
print("Shuffled playlist:", playlist)`,
        viz: (
            <div className="my-6 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-600 shadow-md">
                <p className="text-center font-mono text-sm text-slate-400 mb-4">playlist = ["Song C", "Song D", "Song A", "Song B"]</p>
                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-4 gap-3">
                    {["Song C", "Song D", "Song A", "Song B"].map(song => (
                        <div key={song} className="p-3 bg-slate-700 rounded-lg border border-amber-500 text-white text-center hover:scale-105 transition-transform duration-200">
                            {song}
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];

export const RealWorldApplicationsVisual = () => {
    const [modalContent, setModalContent] = useState(null);
    
    return (
        <>
            {modalContent && <Modal {...modalContent} onClose={() => setModalContent(null)} />}
            <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {realWorldData.map(app => (
                    <div 
                        key={app.title}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-600 hover:border-sky-500 hover:shadow-xl cursor-pointer transition-all duration-300 flex flex-col items-center justify-center"
                        onClick={() => setModalContent(app)}
                    >
                        <div className="text-sky-400 mb-3 transform hover:scale-110 transition-transform duration-200">
                            {React.cloneElement(app.icon, { size: 40 })}
                        </div>
                        <h4 className="font-bold text-white text-lg">{app.title}</h4>
                    </div>
                ))}
            </div>
        </>
    );
};