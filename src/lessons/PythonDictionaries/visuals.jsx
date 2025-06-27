import React, { useState } from 'react';
import { Key, ArrowRight, User, Database, Settings, MessageSquare, X, Plus, Trash2, Copy, Edit } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';

// Modal Component for Pop-ups
const Modal = ({ title, icon, code, description, viz, onClose }) => (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-4 flex justify-between items-center border-b border-slate-700 sticky top-0 bg-slate-800">
                <h3 className="text-lg font-bold text-white flex items-center">{icon}{title}</h3>
                <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                    <X size={24} />
                </button>
            </div>
            <div className="p-6">
                <p className="text-slate-300 mb-4">{description}</p>
                {viz && <div className="my-4">{viz}</div>}
                <CodeBlock>{code}</CodeBlock>
            </div>
        </div>
    </div>
);


export const DictionaryDefinitionVisual = () => (
    <div className="my-6 p-6 bg-slate-800 rounded-lg border border-slate-700 font-mono text-center">
        <div className="flex justify-center items-center space-x-4">
            <div className="flex flex-col items-center">
                <div className="p-3 bg-sky-500/30 border border-sky-500 rounded-lg text-sky-300">"name"</div>
                <p className="text-xs mt-1 text-slate-400">Key (str)</p>
            </div>
            <ArrowRight className="text-slate-500" />
            <div className="flex flex-col items-center">
                <div className="p-3 bg-emerald-500/30 border border-emerald-500 rounded-lg text-emerald-300">"Krish"</div>
                <p className="text-xs mt-1 text-slate-400">Value (str)</p>
            </div>
        </div>
    </div>
);

export const AccessingVisual = () => (
    <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-sky-300">Using `[]`</h4>
            <p className="text-sm text-slate-400 mb-2">Direct, but raises KeyError if key is missing.</p>
            <CodeBlock>{`name = student["name"]`}</CodeBlock>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-amber-300">Using `.get()`</h4>
            <p className="text-sm text-slate-400 mb-2">Safe, returns `None` or a default if key is missing.</p>
            <CodeBlock>{`name = student.get("name")`}</CodeBlock>
        </div>
    </div>
);

export const ModifyingVisual = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center font-mono">
        <p className="text-center text-slate-400 mb-4">student = {'{'}"name": "Krish"{'}'}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
                <h4 className="font-semibold text-sky-300 flex items-center"><Plus className="mr-2" size={16}/>Add</h4>
                <p className="text-sm my-2 text-slate-300">student["age"] = 32</p>
                <ArrowRight className="text-slate-500 rotate-90 my-1"/>
                <p className="text-xs text-slate-400 bg-slate-700 p-2 rounded w-full">{'{"name": "Krish", "age": 32}'}</p>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="font-semibold text-amber-300 flex items-center"><Edit className="mr-2" size={16}/>Update</h4>
                <p className="text-sm my-2 text-slate-300">student["name"] = "John"</p>
                <ArrowRight className="text-slate-500 rotate-90 my-1"/>
                <p className="text-xs text-slate-400 bg-slate-700 p-2 rounded w-full">{'{"name": "John", "age": 32}'}</p>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="font-semibold text-rose-300 flex items-center"><Trash2 className="mr-2" size={16}/>Delete</h4>
                <p className="text-sm my-2 text-slate-300">del student["age"]</p>
                <ArrowRight className="text-slate-500 rotate-90 my-1"/>
                <p className="text-xs text-slate-400 bg-slate-700 p-2 rounded w-full">{'{"name": "John"}'}</p>
            </div>
        </div>
    </div>
);

export const DictionaryMethodsVisual = () => (
     <div className="my-4 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-center">
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-sky-300 mb-2">.keys()</h4>
            <p className="text-sm text-slate-400">View of all keys.</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-emerald-300 mb-2">.values()</h4>
            <p className="text-sm text-slate-400">View of all values.</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-fuchsia-300 mb-2">.items()</h4>
            <p className="text-sm text-slate-400">View of all key-value pairs.</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-amber-300 mb-2">.copy()</h4>
            <p className="text-sm text-slate-400">Returns a shallow copy.</p>
        </div>
    </div>
);

export const IterationVisual = () => {
    const student = { name: "Krish", age: 32 };
    const steps = [
        { type: 'key', value: 'name' },
        { type: 'key', value: 'age' },
        { type: 'value', value: 'Krish' },
        { type: 'value', value: 32 },
        { type: 'item', value: `("name", "Krish")` },
        { type: 'item', value: `("age", 32)` }
    ];
    const [activeStep, setActiveStep] = useState(0);

    const runAnimation = () => {
        setActiveStep(0);
        let i = 0;
        const interval = setInterval(() => {
            i++;
            if (i >= steps.length) {
                clearInterval(interval);
                 setActiveStep(-1);
            } else {
                setActiveStep(i);
            }
        }, 800);
    };

    return (
        <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
            <button onClick={runAnimation} className="w-full mb-4 py-2 px-4 bg-sky-600 text-white rounded-md hover:bg-sky-500 transition-colors">Run Iteration Visual</button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                    <h4 className="font-semibold text-sky-300">Over Keys</h4>
                    <div className="p-3 bg-slate-700 rounded-md mt-2 min-h-[50px] flex items-center justify-center">
                       {activeStep >= 0 && activeStep <= 1 && <span className="text-white font-mono animate-pulse">{steps[activeStep].value}</span>}
                    </div>
                </div>
                <div className="text-center">
                    <h4 className="font-semibold text-emerald-300">Over Values</h4>
                     <div className="p-3 bg-slate-700 rounded-md mt-2 min-h-[50px] flex items-center justify-center">
                       {activeStep >= 2 && activeStep <= 3 && <span className="text-white font-mono animate-pulse">{steps[activeStep].value}</span>}
                    </div>
                </div>
                <div className="text-center">
                    <h4 className="font-semibold text-fuchsia-300">Over Items</h4>
                    <div className="p-3 bg-slate-700 rounded-md mt-2 min-h-[50px] flex items-center justify-center">
                       {activeStep >= 4 && activeStep <= 5 && <span className="text-white font-mono animate-pulse">{steps[activeStep].value}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const NestedDictionaryVisual = () => (
     <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center font-mono">
        <p className="text-lg text-white mb-2">Accessing <code className="text-pink-400">students["student2"]["name"]</code></p>
        <div className="flex flex-col items-center space-y-2">
            <div className="p-4 bg-slate-700 rounded-lg border border-slate-600 w-full md:w-2/3">
                <p className="text-white">students</p>
                <div className="flex justify-center space-x-2 mt-2">
                    <div className="p-2 bg-slate-800 rounded w-1/2">"student1": {'{...}'}</div>
                    <div className="p-2 bg-sky-800 rounded border border-sky-500 w-1/2 animate-pulse">"student2": {'{...}'}</div>
                </div>
            </div>
            <ArrowRight className="text-slate-500 rotate-90"/>
             <div className="p-4 bg-sky-800 rounded-lg border border-sky-500 w-full md:w-2/3">
                 <p className="text-white">student_info</p>
                 <div className="flex justify-center space-x-2 mt-2">
                    <div className="p-2 bg-slate-800 rounded w-1/2 animate-pulse">"name": "Peter"</div>
                    <div className="p-2 bg-slate-800 rounded w-1/2">"age": 35</div>
                </div>
             </div>
             <ArrowRight className="text-slate-500 rotate-90"/>
             <div className="p-3 bg-emerald-800 rounded-lg border border-emerald-500 text-white font-bold">"Peter"</div>
        </div>
    </div>
);

export const DictComprehensionVisual = () => (
    <div className="my-4 p-6 bg-slate-800 rounded-lg border border-slate-700 text-center">
         <h4 className="font-bold text-white mb-4">Example: Creating Squares</h4>
         <CodeBlock>{`{x: x**2 for x in range(5)}`}</CodeBlock>
         <div className="font-mono text-lg text-slate-300 mt-4 p-4 bg-slate-900/50 rounded-lg">
            <span className="text-emerald-400">{'{'}</span>
            <span className="text-fuchsia-400">0</span>: <span className="text-purple-400">0</span>,{' '}
            <span className="text-fuchsia-400">1</span>: <span className="text-purple-400">1</span>,{' '}
            <span className="text-fuchsia-400">2</span>: <span className="text-purple-400">4</span>,{' '}
            <span className="text-fuchsia-400">3</span>: <span className="text-purple-400">9</span>,{' '}
            <span className="text-fuchsia-400">4</span>: <span className="text-purple-400">16</span>
            <span className="text-emerald-400">{'}'}</span>
        </div>
    </div>
);

export const MergingVisual = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <p className="text-center text-slate-400 mb-2">Merge `dict1` and `dict2`. Note how key "b" is updated.</p>
        <div className="flex items-center justify-center space-x-2 font-mono text-sm">
            <div className="p-3 bg-slate-700 rounded">{'{"a": 1, "b": 2}'}</div>
            <span className="text-2xl text-pink-400">+</span>
             <div className="p-3 bg-slate-700 rounded">{'{"b": 3, "c": 4}'}</div>
             <span className="text-2xl text-slate-400">=</span>
             <div className="p-3 bg-sky-800 rounded text-sky-200">{'{"a": 1, "b": 3, "c": 4}'}</div>
        </div>
    </div>
)

const realWorldData = [
    {
        title: 'User Profiles',
        icon: <User size={24} className="mr-2 text-sky-400"/>,
        description: 'Dictionaries are perfect for storing user information, where each piece of data (like username or email) is accessed by a clear, unique key.',
        code: `user = {
    "user_id": 101,
    "username": "john_doe",
    "email": "john@example.com",
    "preferences": {
        "theme": "dark",
        "notifications": True
    }
}
print(user["preferences"]["theme"]) # dark`
    },
    {
        title: 'Database Records',
        icon: <Database size={24} className="mr-2 text-emerald-400"/>,
        description: 'In retail or e-commerce, dictionaries can represent products in an inventory, tracking details like quantity and price.',
        code: `inventory = {
    "apple": {"quantity": 50, "price": 0.5},
    "banana": {"quantity": 30, "price": 0.3}
}
# Sell 5 apples
inventory["apple"]["quantity"] -= 5
print(inventory["apple"])`
    },
    {
        title: 'Config Settings',
        icon: <Settings size={24} className="mr-2 text-amber-400"/>,
        description: 'Applications often use dictionaries to store configuration settings, making it easy to manage and access different parameters.',
        code: `config = {
    "database": {
        "host": "localhost", 
        "port": 5432
    },
    "app": {
        "debug": True, 
        "version": "1.0.0"
    }
}
print(config["app"]["debug"]) # True`
    },
    {
        title: 'API (JSON) Data',
        icon: <MessageSquare size={24} className="mr-2 text-fuchsia-400"/>,
        description: 'Data from web APIs is almost always in JSON format, which maps directly to Python dictionaries, making it simple to parse and use.',
        code: `api_response = {
    "status": "success",
    "data": {
        "user_id": 123,
        "name": "Alice",
        "scores": [85, 90, 88]
    }
}
print(api_response["data"]["name"]) # Alice`
    }
];

export const RealWorldApplicationsVisual = () => {
     const [modalContent, setModalContent] = useState(null);
     
     return (
        <>
            {modalContent && <Modal {...modalContent} onClose={() => setModalContent(null)} />}
            <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {realWorldData.map(app => (
                    <div 
                        key={app.title}
                        className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-sky-500 hover:bg-slate-700/50 cursor-pointer transition-all flex flex-col items-center justify-center"
                        onClick={() => setModalContent(app)}
                    >
                        {React.cloneElement(app.icon, { size: 32, className: `${app.icon.props.className} mb-2` })}
                        <h4 className="font-bold">{app.title}</h4>
                    </div>
                ))}
            </div>
        </>
     );
};
