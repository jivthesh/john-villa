import React from 'react';
import { BookOpen, Brackets, PlusCircle, MinusCircle, Sigma, CheckCircle, HelpCircle, UserCheck, Award, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import ErrorBox from '../../components/ErrorBox.jsx';
import { SetDefinitionVisual, SetCreationVisual, SetMethodsVisual, SetOperationsVisual } from './visuals.jsx';

export const chapters = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Introduction to Sets",
        content: () => (
            <>
                <p>Sets are a built-in data type in Python used to store collections of <strong className="text-sky-300">unique</strong> items. They are particularly useful for membership testing, eliminating duplicate entries, and performing mathematical set operations.</p>
                <SetDefinitionVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Key Properties</h3>
                <ul className="list-disc list-inside space-y-2 my-2">
                    <li><strong className="text-slate-300">Unordered:</strong> Items in a set do not have a defined order. You cannot refer to items by index.</li>
                    <li><strong className="text-slate-300">Unique:</strong> Sets automatically discard duplicate elements.</li>
                    <li><strong className="text-slate-300">Mutable:</strong> You can add and remove items from a set after its creation.</li>
                </ul>
            </>
        )
    },
    {
        icon: <Brackets className="w-5 h-5" />,
        title: "Creating Sets",
        content: () => (
            <>
                <p>You can create a set using curly braces <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">{`{}`}</code> or the <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">set()</code> constructor.</p>
                <SetCreationVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Creating from a List (with duplicates)</h3>
                <p>The <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">set()</code> constructor is a great way to remove duplicates from a list.</p>
                <CodeBlock>{`my_list = [1, 2, 2, 3, 4, 4, 5]

# Convert the list to a set to get unique elements
my_set = set(my_list)

print(my_set) # Output: {1, 2, 3, 4, 5}`}</CodeBlock>
            </>
        )
    },
    {
        icon: <PlusCircle className="w-5 h-5" />,
        title: "Adding & Removing Elements",
        content: () => (
            <>
                <p>You can add and remove items from a set using several built-in methods.</p>
                <SetMethodsVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-300">Error Handling with `remove` vs `discard`</h3>
                <p>Using <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">.remove()</code> on an element that doesn't exist will raise a <code className="font-mono bg-slate-700 text-rose-400 px-1 rounded">KeyError</code>. Using <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">.discard()</code> will not, making it safer if you're unsure whether an item is in the set.</p>
                <ErrorBox code={`my_set.remove(10) # Assuming 10 is not in the set`} errorType="KeyError" errorMessage="10" />
                 <CodeBlock>{`my_set.discard(10) # Does not raise an error`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Sigma className="w-5 h-5" />,
        title: "Mathematical Set Operations",
        content: () => (
            <>
                <p>Sets excel at performing mathematical operations like union, intersection, and difference.</p>
                <SetOperationsVisual />
                <CodeBlock>{`set1 = {1, 2, 3, 4, 5, 6}
set2 = {4, 5, 6, 7, 8, 9}

# Union: All items from both sets
print(set1.union(set2)) # {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Intersection: Only items in both sets
print(set1.intersection(set2)) # {4, 5, 6}

# Difference: Items in set1 but not in set2
print(set1.difference(set2)) # {1, 2, 3}

# Symmetric Difference: Items in either set, but not both
print(set1.symmetric_difference(set2)) # {1, 2, 3, 7, 8, 9}`}</CodeBlock>
            </>
        )
    },
    {
        icon: <HelpCircle className="w-5 h-5" />,
        title: "Other Set Methods",
        content: () => (
            <>
                <p>Sets have other useful methods for checking relationships between them.</p>
                 <CodeBlock>{`set_a = {1, 2, 3}
set_b = {1, 2, 3, 4, 5}

# issubset(): Check if all items of set_a are in set_b
print(set_a.issubset(set_b))  # True

# issuperset(): Check if set_b contains all items of set_a
print(set_b.issuperset(set_a)) # True`}</CodeBlock>
                 <h3 className="text-lg font-semibold mt-4 text-sky-300">Membership Testing</h3>
                 <p>You can quickly check if an element exists in a set using the <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">in</code> keyword. This is very efficient.</p>
                 <CodeBlock>{`my_set = {1, 2, 3, 4, 5}
print(3 in my_set) # True
print(10 in my_set) # False`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Practical Example: Unique Words",
        content: () => (
            <>
                <p>A common use case for sets is to quickly find the unique items in a large body of text.</p>
                <CodeBlock>{`text = "In this tutorial we are discussing about sets and we are discussing about the importance of sets"

# Split the text into a list of words
words = text.lower().split()

# Convert the list to a set to get unique words
unique_words = set(words)

print(f"There are {len(unique_words)} unique words.")
print(unique_words)`}</CodeBlock>
                 <h4 className="font-semibold text-slate-400">Output:</h4>
                 <CodeBlock>{`There are 10 unique words.
{'we', 'in', 'importance', 'discussing', 'and', 'the', 'tutorial', 'of', 'about', 'are', 'sets'}`}</CodeBlock>
                 <p className="text-sm text-slate-400 mt-2">(Note: The output order may vary as sets are unordered.)</p>
            </>
        )
    }
];
