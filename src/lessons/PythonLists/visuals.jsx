// import React from 'react';
// import { ArrowRight, PlusCircle, Trash2, Edit, Copy } from 'lucide-react';

// export const ListDefinitionVisual = () => (
//     <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 font-mono">
//        <div className="flex justify-center items-center">
//             <span className="text-emerald-400 text-2xl">[</span>
//             <div className="mx-4 flex space-x-4">
//                 <div className="p-3 bg-slate-700 rounded text-center transform hover:scale-105 transition-transform">
//                     <p className="text-white text-lg">100</p>
//                     <p className="text-sky-400 text-xs mt-1">int</p>
//                 </div>
//                  <div className="p-3 bg-slate-700 rounded text-center transform hover:scale-105 transition-transform">
//                     <p className="text-white text-lg">"hello"</p>
//                     <p className="text-fuchsia-400 text-xs mt-1">str</p>
//                 </div>
//                  <div className="p-3 bg-slate-700 rounded text-center transform hover:scale-105 transition-transform">
//                     <p className="text-white text-lg">3.14</p>
//                     <p className="text-amber-400 text-xs mt-1">float</p>
//                 </div>
//                  <div className="p-3 bg-slate-700 rounded text-center transform hover:scale-105 transition-transform">
//                     <p className="text-white text-lg">True</p>
//                     <p className="text-rose-400 text-xs mt-1">bool</p>
//                 </div>
//             </div>
//             <span className="text-emerald-400 text-2xl">]</span>
//         </div>
//         <div className="mt-4 grid grid-cols-2 gap-4 text-center text-sm">
//             <div className="bg-slate-700/50 p-3 rounded-lg">
//                 <h4 className="font-bold text-slate-300">Ordered</h4>
//                 <p className="text-slate-400">Items maintain their position.</p>
//             </div>
//             <div className="bg-slate-700/50 p-3 rounded-lg">
//                 <h4 className="font-bold text-slate-300">Mutable</h4>
//                 <p className="text-slate-400">You can change the list's content.</p>
//             </div>
//         </div>
//     </div>
// );

// export const ListAccessingVisual = () => (
//     <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
//         <p className="text-center font-mono text-sm text-slate-400 mb-2">fruits = ["apple", "banana", "cherry"]</p>
//         <div className="flex justify-center items-end space-x-1">
//             {["apple", "banana", "cherry"].map((fruit, i) => (
//                 <div key={i} className="flex flex-col items-center">
//                     <div className="w-24 h-12 flex items-center justify-center rounded-md text-white font-bold bg-slate-700">
//                         {fruit}
//                     </div>
//                     <span className="text-xs text-green-400 mt-1">Index {i}</span>
//                     <span className="text-xs text-rose-400 mt-1">Index {i - 3}</span>
//                 </div>
//             ))}
//         </div>
//         <div className="grid grid-cols-2 gap-4 mt-4 text-center font-mono">
//              <p><span className="text-pink-400">fruits[0]</span><ArrowRight className="inline mx-2 text-slate-500" size={16}/>"apple"</p>
//              <p><span className="text-pink-400">fruits[2]</span><ArrowRight className="inline mx-2 text-slate-500" size={16}/>"cherry"</p>
//              <p><span className="text-pink-400">fruits[-1]</span><ArrowRight className="inline mx-2 text-slate-500" size={16}/>"cherry"</p>
//              <p><span className="text-pink-400">fruits[-3]</span><ArrowRight className="inline mx-2 text-slate-500" size={16}/>"apple"</p>
//         </div>
//     </div>
// );

// export const ListModificationVisual = () => (
//     <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center text-center">
//          <p className="font-mono text-sm text-slate-400 mb-2">fruits = ["apple", "banana", "cherry"]</p>
//         <p className="font-mono text-white text-lg mb-4 flex items-center"><Edit size={16} className="mr-2 text-amber-400" /><span className="text-pink-400">fruits[1]</span> = "watermelon"</p>
//         <ArrowRight className="text-slate-500 rotate-90" size={32}/>
//         <div className="flex justify-center items-center space-x-2 mt-4 font-mono">
//             <div className="p-3 bg-slate-700 rounded text-white">"apple"</div>
//             <div className="p-3 bg-sky-500 rounded text-white font-bold animate-pulse">"watermelon"</div>
//             <div className="p-3 bg-slate-700 rounded text-white">"cherry"</div>
//         </div>
//     </div>
// );

// export const ListMethodsVisual = () => (
//      <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
//             <h4 className="font-bold text-sky-300 flex items-center"><PlusCircle size={18} className="mr-2"/>Adding Items</h4>
//             <CodeBlock>{`fruits.append("orange") # Adds to end
// fruits.insert(1, "mango") # Inserts at index 1`}</CodeBlock>
//         </div>
//         <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
//             <h4 className="font-bold text-rose-300 flex items-center"><Trash2 size={18} className="mr-2"/>Removing Items</h4>
//             <CodeBlock>{`fruits.remove("apple") # Removes first 'apple'
// fruits.pop() # Removes and returns last item`}</CodeBlock>
//         </div>
//     </div>
// );

// export const SlicingVisual = () => (
//     <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
//         <p className="text-center font-mono text-sm text-slate-400 mb-2">numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</p>
//         <p className="text-center font-mono text-lg text-pink-400 mb-4">numbers[2:5]</p>
//         <div className="flex justify-center items-end space-x-1">
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => (
//                 <div key={i} className="flex flex-col items-center">
//                     <div className={`w-8 h-8 flex items-center justify-center rounded-md text-white font-bold
//                         ${(i >= 2 && i < 5) ? 'bg-sky-500' : 'bg-slate-700'}`}>
//                         {num}
//                     </div>
//                     <span className="text-xs text-slate-500 mt-1">{i}</span>
//                 </div>
//             ))}
//         </div>
//         <p className="text-center font-semibold text-white mt-4">Result: <span className="font-mono text-emerald-400">[3, 4, 5]</span></p>
//     </div>
// );

// export const ListComprehensionVisual = () => (
//     <div className="my-4 p-6 bg-slate-800 rounded-lg border border-slate-700 text-center">
//         <h4 className="font-bold text-white mb-4">Basic Syntax</h4>
//         <p className="font-mono text-lg text-slate-300">
//             <span className="text-emerald-400">[</span>
//             <span className="text-fuchsia-400">expression</span>{' '}
//             <span className="text-sky-400">for</span>{' '}
//             <span className="text-amber-400">item</span>{' '}
//             <span className="text-sky-400">in</span>{' '}
//             <span className="text-rose-400">iterable</span>{' '}
//             <span className="text-emerald-400">]</span>
//         </p>
//         <h4 className="font-bold text-white mt-6 mb-4">With Condition</h4>
//          <p className="font-mono text-lg text-slate-300">
//             <span className="text-emerald-400">[</span>
//             <span className="text-fuchsia-400">expression</span>{' '}
//             <span className="text-sky-400">for</span>{' '}
//             <span className="text-amber-400">item</span>{' '}
//             <span className="text-sky-400">in</span>{' '}
//             <span className="text-rose-400">iterable</span>{' '}
//             <span className="text-sky-400">if</span>{' '}
//             <span className="text-purple-400">condition</span>
//             <span className="text-emerald-400">]</span>
//         </p>
//     </div>
// );

// export const NestedListComprehensionVisual = () => (
//     <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
//         <p className="text-center font-mono text-md text-slate-400 mb-2">Creating pairs from two lists</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div >
//                 <h4 className="font-semibold text-center text-sky-300">List Comprehension</h4>
//                 <CodeBlock>[(i, j) for i in [1,2] for j in ['a','b']]</CodeBlock>
//             </div>
//             <div>
//                  <h4 className="font-semibold text-center text-sky-300">Equivalent Nested Loop</h4>
//                 <CodeBlock>{`pairs = []
// for i in [1,2]:
//     for j in ['a','b']:
//         pairs.append((i, j))`}
//                 </CodeBlock>
//             </div>
//         </div>
//     </div>
// );


import React from 'react';
import { ArrowRight, PlusCircle, Trash2, Edit, Copy, ClipboardCheck, TrendingUp, BarChart, ShoppingCart, MessageSquare, Star } from 'lucide-react';
import CodeBlock from '/src/components/CodeBlock.jsx';

export const ListDefinitionVisual = () => (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 font-mono">
       <div className="flex justify-center items-center">
            <span className="text-emerald-400 text-2xl">[</span>
            <div className="mx-4 flex space-x-4">
                <div className="p-3 bg-slate-700 rounded text-center transform hover:scale-105 transition-transform">
                    <p className="text-white text-lg">100</p>
                    <p className="text-sky-400 text-xs mt-1">int</p>
                </div>
                 <div className="p-3 bg-slate-700 rounded text-center transform hover:scale-105 transition-transform">
                    <p className="text-white text-lg">"hello"</p>
                    <p className="text-fuchsia-400 text-xs mt-1">str</p>
                </div>
                 <div className="p-3 bg-slate-700 rounded text-center transform hover:scale-105 transition-transform">
                    <p className="text-white text-lg">3.14</p>
                    <p className="text-amber-400 text-xs mt-1">float</p>
                </div>
                 <div className="p-3 bg-slate-700 rounded text-center transform hover:scale-105 transition-transform">
                    <p className="text-white text-lg">True</p>
                    <p className="text-rose-400 text-xs mt-1">bool</p>
                </div>
            </div>
            <span className="text-emerald-400 text-2xl">]</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-center text-sm">
            <div className="bg-slate-700/50 p-3 rounded-lg">
                <h4 className="font-bold text-slate-300">Ordered</h4>
                <p className="text-slate-400">Items maintain their position.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded-lg">
                <h4 className="font-bold text-slate-300">Mutable</h4>
                <p className="text-slate-400">You can change the list's content.</p>
            </div>
        </div>
    </div>
);

export const ListAccessingVisual = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <p className="text-center font-mono text-sm text-slate-400 mb-2">fruits = ["apple", "banana", "cherry"]</p>
        <div className="flex justify-center items-end space-x-1">
            {["apple", "banana", "cherry"].map((fruit, i) => (
                <div key={i} className="flex flex-col items-center">
                    <div className="w-24 h-12 flex items-center justify-center rounded-md text-white font-bold bg-slate-700">
                        {fruit}
                    </div>
                    <span className="text-xs text-green-400 mt-1">Index {i}</span>
                    <span className="text-xs text-rose-400 mt-1">Index {i - 3}</span>
                </div>
            ))}
        </div>
    </div>
);

export const ListModificationVisual = () => (
    <div className="my-6 p-4 bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center text-center">
         <p className="font-mono text-sm text-slate-400 mb-2">fruits = ["apple", "banana", "cherry"]</p>
        <p className="font-mono text-white text-lg mb-4 flex items-center"><Edit size={16} className="mr-2 text-amber-400" /><span className="text-pink-400">fruits[1]</span> = "watermelon"</p>
        <ArrowRight className="text-slate-500 rotate-90" size={32}/>
        <div className="flex justify-center items-center space-x-2 mt-4 font-mono">
            <div className="p-3 bg-slate-700 rounded text-white">"apple"</div>
            <div className="p-3 bg-sky-500 rounded text-white font-bold animate-pulse">"watermelon"</div>
            <div className="p-3 bg-slate-700 rounded text-white">"cherry"</div>
        </div>
    </div>
);

export const ListMethodsVisual = () => (
     <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-sky-300 flex items-center"><PlusCircle size={18} className="mr-2"/>Adding Items</h4>
            <CodeBlock>{`fruits.append("orange")
fruits.insert(1, "mango")`}</CodeBlock>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-rose-300 flex items-center"><Trash2 size={18} className="mr-2"/>Removing Items</h4>
            <CodeBlock>{`fruits.remove("apple")
fruits.pop()`}</CodeBlock>
        </div>
    </div>
);

export const SlicingVisual = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <p className="text-center font-mono text-sm text-slate-400 mb-2">numbers = [1, ..., 10]</p>
        <p className="text-center font-mono text-lg text-pink-400 mb-4">numbers[2:5]</p>
        <div className="flex justify-center items-end space-x-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => (
                <div key={i} className="flex flex-col items-center">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-md text-white font-bold
                        ${(i >= 2 && i < 5) ? 'bg-sky-500' : 'bg-slate-700'}`}>
                        {num}
                    </div>
                    <span className="text-xs text-slate-500 mt-1">{i}</span>
                </div>
            ))}
        </div>
    </div>
);

export const ListComprehensionVisual = () => (
    <div className="my-4 p-6 bg-slate-800 rounded-lg border border-slate-700 text-center">
        <h4 className="font-bold text-white mb-4">Basic Syntax</h4>
        <p className="font-mono text-lg text-slate-300">
            <span className="text-emerald-400">[</span>
            <span className="text-fuchsia-400">expression</span>{' '}
            <span className="text-sky-400">for</span>{' '}
            <span className="text-amber-400">item</span>{' '}
            <span className="text-sky-400">in</span>{' '}
            <span className="text-rose-400">iterable</span>{' '}
            <span className="text-emerald-400">]</span>
        </p>
    </div>
);

export const NestedListComprehensionVisual = () => (
    <div className="my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
        <p className="text-center font-mono text-md text-slate-400 mb-2">Creating pairs from two lists</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h4 className="font-semibold text-center text-sky-300">List Comprehension</h4>
                <CodeBlock>[(i, j) for i in [1,2] for j in ['a','b']]</CodeBlock>
            </div>
            <div>
                 <h4 className="font-semibold text-center text-sky-300">Equivalent Nested Loop</h4>
                <CodeBlock>{`pairs = []
for i in [1,2]:
    for j in ['a','b']:
        pairs.append((i, j))`}
                </CodeBlock>
            </div>
        </div>
    </div>
);

export const ToDoListVisual = () => (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 my-4">
        <div className="flex items-center text-white font-bold mb-3"><ClipboardCheck className="mr-2 text-sky-400"/> To-Do List</div>
        <ul className="space-y-2 text-sm">
            <li className="flex items-center"><span className="w-5 h-5 rounded-full border-2 border-slate-500 mr-3"></span><span className="text-slate-300">Buy groceries</span></li>
            <li className="flex items-center"><span className="w-5 h-5 rounded-full bg-rose-500 mr-3 flex items-center justify-center"><Trash2 size={12}/></span><span className="line-through text-slate-500">Pay bills</span></li>
            <li className="flex items-center"><span className="w-5 h-5 rounded-full border-2 border-slate-500 mr-3"></span><span className="text-slate-300">Schedule meeting</span></li>
        </ul>
    </div>
);

export const GradesVisual = () => (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 my-4">
         <div className="flex items-center text-white font-bold mb-3"><BarChart className="mr-2 text-amber-400"/> Grade Analysis</div>
        <div className="flex justify-around text-center">
            <div>
                <p className="text-xs text-slate-400">Average</p>
                <p className="text-2xl font-bold text-emerald-400">88.0</p>
            </div>
             <div>
                <p className="text-xs text-slate-400">Highest</p>
                <p className="text-2xl font-bold text-emerald-400">95</p>
            </div>
             <div>
                <p className="text-xs text-slate-400">Lowest</p>
                <p className="text-2xl font-bold text-rose-400">78</p>
            </div>
        </div>
    </div>
);

export const InventoryVisual = () => (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 my-4">
        <div className="flex items-center text-white font-bold mb-3"><ShoppingCart className="mr-2 text-fuchsia-400"/> Inventory Check</div>
        <p className="text-sm">Is <span className="font-mono text-amber-300">"Oranges"</span> in stock?</p>
        <p className="mt-2 text-lg font-bold text-emerald-400">Yes, item is available.</p>
    </div>
);

export const FeedbackVisual = () => (
     <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 my-4">
        <div className="flex items-center text-white font-bold mb-3"><MessageSquare className="mr-2 text-purple-400"/> Feedback Analysis</div>
        <div className="flex items-center space-x-2">
            <Star className="text-yellow-400 fill-current" size={20}/>
            <Star className="text-yellow-400 fill-current" size={20}/>
            <p className="text-lg font-bold text-white">2 Positive Comments</p>
        </div>
    </div>
);
