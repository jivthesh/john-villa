import React from 'react';
import { BookOpen, Brackets, MousePointer, Pencil, Settings2, Repeat, Layers, Wind, Award, AlertTriangle, CheckCircle, BrainCircuit } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import ErrorBox from '../../components/ErrorBox.jsx';
import { DictionaryDefinitionVisual, AccessingVisual, ModifyingVisual, DictionaryMethodsVisual, IterationVisual, NestedDictionaryVisual, DictComprehensionVisual, RealWorldApplicationsVisual, MergingVisual } from './visuals.jsx';

export const chapters = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Introduction to Dictionaries",
        content: () => (
            <>
                <p>Dictionaries are a core Python data structure for storing data in <strong className="text-sky-300">key-value pairs</strong>. Unlike lists, which are ordered, dictionaries are optimized for retrieving values when the key is known.</p>
                <DictionaryDefinitionVisual />
            </>
        )
    },
    {
        icon: <Brackets className="w-5 h-5" />,
        title: "Creating Dictionaries",
        content: () => (
            <>
                <p>You can create dictionaries using curly braces <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">{'{'}{'}'}</code> or the `dict()` constructor.</p>
                <CodeBlock>{`student = {"name": "Krish", "age": 32}`}</CodeBlock>
            </>
        )
    },
    {
        icon: <MousePointer className="w-5 h-5" />,
        title: "Accessing Dictionary Elements",
        content: () => (
            <>
                <p>You access dictionary values by their key. There are two common ways to do this.</p>
                <AccessingVisual />
                <ErrorBox code={`print(student["grade"]) # 'grade' doesn't exist`} errorType="KeyError" errorMessage="'grade'" />
                <CodeBlock>{`print(student.get("grade", "Not Available")) # Safely gets value`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Pencil className="w-5 h-5" />,
        title: "Modifying Dictionaries",
        content: () => (
            <>
                <p>Because dictionaries are mutable, you can easily add, update, or delete their elements.</p>
                <ModifyingVisual />
            </>
        )
    },
    {
        icon: <Settings2 className="w-5 h-5" />,
        title: "Dictionary Methods",
        content: () => (
            <>
                <p>Dictionaries come with several useful built-in methods for accessing keys, values, and items, as well as for copying and merging.</p>
                <DictionaryMethodsVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Merging Dictionaries</h3>
                <MergingVisual />
            </>
        )
    },
    {
        icon: <Repeat className="w-5 h-5" />,
        title: "Iterating Over Dictionaries",
        content: () => (
            <>
                <p>Looping through dictionaries is a common task. You can iterate over keys, values, or both.</p>
                <IterationVisual />
            </>
        )
    },
    {
        icon: <Layers className="w-5 h-5" />,
        title: "Nested Dictionaries",
        content: () => (
            <>
                <p>A nested dictionary is a dictionary that contains other dictionaries. This is useful for structuring complex, hierarchical data.</p>
                <NestedDictionaryVisual />
            </>
        )
    },
    {
        icon: <Wind className="w-5 h-5" />,
        title: "Dictionary Comprehension",
        content: () => (
            <>
                <p>Dictionary comprehension is a concise and elegant way to create dictionaries from iterables.</p>
                <DictComprehensionVisual />
            </>
        )
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Real-World Applications",
        content: () => (
            <>
                <p>Dictionaries are used everywhere in Python programming due to their efficiency in data lookup. Click on an example below to see the code and a breakdown.</p>
                <RealWorldApplicationsVisual />
            </>
        )
    },
     {
        icon: <BrainCircuit className="w-5 h-5" />,
        title: "Comprehension Exercises",
        content: () => (
            <>
                <p>Test your understanding with these exercises.</p>
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Exercise 1: Create a Dictionary of Cubes</h3>
                <CodeBlock>cubes = {'{'}x: x**3 for x in range(1, 6){'}'}</CodeBlock>
                 <h3 className="text-lg font-semibold mt-4 text-sky-300">Exercise 2: Filter Dictionary by Value {'>'} 80</h3>
                <CodeBlock>{`scores = {"Alice": 85, "Bob": 78, "Charlie": 92}
high_scores = {name: score for name, score in scores.items() if score > 80}
print(high_scores)`}
                </CodeBlock>
            </>
        )
    }
];