// import React from 'react';
// import { BookOpen, Pencil, PlusCircle, Sliders, Repeat, Wind, CheckCircle, Square, Brackets, MousePointer, Settings2, WindIcon, Layers } from 'lucide-react';
// import CodeBlock from '/src/components/CodeBlock.jsx';
// import { ListDefinitionVisual, ListAccessingVisual, ListModificationVisual, ListMethodsVisual, ListComprehensionVisual, SlicingVisual, NestedListComprehensionVisual } from './visuals.jsx';

// export const chapters = [
//     {
//         icon: <BookOpen className="w-5 h-5" />,
//         title: "Introduction to Lists",
//         content: () => (
//             <>
//                 <p>Lists are one of the most versatile and commonly used data structures in Python. They are defined as ordered, mutable collections of items.</p>
//                 <ListDefinitionVisual />
//                 <h3 className="text-lg font-semibold mt-4 text-sky-300">Key Properties</h3>
//                 <ul className="list-disc list-inside space-y-2 my-2">
//                     <li><strong className="text-slate-300">Ordered:</strong> The items in a list have a defined order, and that order will not change unless you modify it.</li>
//                     <li><strong className="text-slate-300">Mutable:</strong> You can change, add, and remove items in a list after it has been created.</li>
//                     <li><strong className="text-slate-300">Heterogeneous:</strong> Lists can contain items of different data types (e.g., integers, strings, floats, and even other lists).</li>
//                 </ul>
//             </>
//         )
//     },
//     {
//         icon: <Brackets className="w-5 h-5" />,
//         title: "Creating Lists",
//         content: () => (
//             <>
//                 <p>You can create a list by placing comma-separated values inside square brackets <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">[]</code>.</p>
//                 <CodeBlock>{`# An empty list
// empty_list = []
// print(type(empty_list)) # <class 'list'>

// # A list of strings
// names = ["Krish", "Jack", "Jacob"]

// # A list with mixed data types
// mixed_list = [100, "hello", 3.14, True]
// print(mixed_list) # [100, 'hello', 3.14, True]`}</CodeBlock>
//             </>
//         )
//     },
//     {
//         icon: <MousePointer className="w-5 h-5" />,
//         title: "Accessing List Items",
//         content: () => (
//             <>
//                 <p>You can access items in a list by referring to their index number. Python indexing starts at 0 for the first element.</p>
//                 <ListAccessingVisual />
//                 <h3 className="text-lg font-semibold mt-4 text-sky-300">Negative Indexing</h3>
//                 <p>Negative indexing starts from the end of the list. <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">-1</code> refers to the last item, <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">-2</code> to the second-to-last, and so on.</p>
//                 <CodeBlock>{`fruits = ["apple", "banana", "cherry", "kiwi", "guava"]

// # Get the last item
// print(fruits[-1]) # 'guava'

// # Get the second-to-last item
// print(fruits[-2]) # 'kiwi'`}</CodeBlock>
//             </>
//         )
//     },
//     {
//         icon: <Sliders className="w-5 h-5" />,
//         title: "Slicing Lists",
//         content: () => (
//             <>
//                 <p>Slicing allows you to retrieve a range of items from a list. The syntax is <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">list[start:stop:step]</code>.</p>
//                 <SlicingVisual />
//                 <CodeBlock>{`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// # Get items from index 5 to the end of the list
// print(numbers[5:]) # [6, 7, 8, 9, 10]

// # Get every second item from the entire list
// print(numbers[::2]) # [1, 3, 5, 7, 9]

// # Reverse the list
// print(numbers[::-1]) # [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`}</CodeBlock>
//             </>
//         )
//     },
//      {
//         icon: <Pencil className="w-5 h-5" />,
//         title: "Modifying List Items",
//         content: () => (
//             <>
//                 <p>Since lists are mutable, you can change their content by accessing an index and assigning a new value.</p>
//                 <ListModificationVisual />
//                 <h3 className="text-lg font-semibold mt-4 text-sky-300">Modifying a Range of Items</h3>
//                 <p>You can also change a range of items. Be careful, as assigning an iterable (like a string) will replace the slice with the individual elements of the iterable.</p>
//                 <CodeBlock>{`fruits = ["apple", "banana", "cherry", "kiwi"]
// fruits[1:3] = ["watermelon"] # Replaces 'banana' and 'cherry'
// print(fruits) # ['apple', 'watermelon', 'kiwi']

// # This replaces the slice with each character of the string
// fruits[1:2] = "melon"
// print(fruits) # ['apple', 'm', 'e', 'l', 'o', 'n', 'kiwi']`}</CodeBlock>
//             </>
//         )
//     },
//     {
//         icon: <Settings2 className="w-5 h-5" />,
//         title: "List Methods",
//         content: () => (
//             <>
//                 <p>Python provides a rich set of built-in methods to work with lists.</p>
//                 <ListMethodsVisual />
//                 <h3 className="text-lg font-semibold mt-4 text-sky-300">More Methods</h3>
//                 <CodeBlock>{`fruits = ["apple", "banana", "apple"]

// # Get the index of the first occurrence of an item
// print(fruits.index("banana")) # 1

// # Count the number of times an item appears
// print(fruits.count("apple")) # 2

// # Sort the list in-place (alphabetically or numerically)
// fruits.sort()
// print(fruits) # ['apple', 'apple', 'banana']

// # Reverse the list in-place
// fruits.reverse()
// print(fruits) # ['banana', 'apple', 'apple']

// # Remove all items from the list
// fruits.clear()
// print(fruits) # []`}</CodeBlock>
//             </>
//         )
//     },
//     {
//         icon: <Repeat className="w-5 h-5" />,
//         title: "Iterating Over Lists",
//         content: () => (
//             <>
//                 <p>You can loop through the items of a list using a <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">for</code> loop.</p>
//                 <CodeBlock>{`numbers = [1, 2, 3, 4]
// for number in numbers:
//     print(number)`}</CodeBlock>
//                  <h3 className="text-lg font-semibold mt-4 text-sky-300">Iterating with Index</h3>
//                  <p>To get both the index and the item, use the <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">enumerate()</code> function.</p>
//                  <CodeBlock>{`for index, number in enumerate(numbers):
//     print(f"Index {index}: {number}")`}
//                  </CodeBlock>
//             </>
//         )
//     },
//     {
//         icon: <Wind className="w-5 h-5" />,
//         title: "List Comprehension",
//         content: () => (
//             <>
//                 <p>List comprehensions offer a shorter, more readable syntax for creating a new list based on the values of an existing list.</p>
//                 <ListComprehensionVisual />
//                 <h3 className="text-lg font-semibold mt-4 text-sky-300">Examples</h3>
//                 <CodeBlock>{`# Square numbers from 0 to 9
// squares = [x**2 for x in range(10)]
// print(squares) # [0, 1, 4, ..., 81]

// # Filter for even numbers
// even_numbers = [num for num in range(10) if num % 2 == 0]
// print(even_numbers) # [0, 2, 4, 6, 8]

// # Get the length of each word
// words = ["hello", "world", "python"]
// lengths = [len(word) for word in words]
// print(lengths) # [5, 5, 6]`}</CodeBlock>
//             </>
//         )
//     },
//      {
//         icon: <Layers className="w-5 h-5" />,
//         title: "Nested List Comprehension",
//         content: () => (
//             <>
//                 <p>You can use nested loops inside a list comprehension to create lists from multiple iterables, such as creating all possible pairs.</p>
//                 <NestedListComprehensionVisual />
//                 <CodeBlock>{`list1 = [1, 2, 3]
// list2 = ['a', 'b', 'c']

// # Create a list of all possible pairs
// pairs = [(i, j) for i in list1 for j in list2]
// print(pairs)
// # Output: [(1, 'a'), (1, 'b'), (1, 'c'), (2, 'a'), ...]`}</CodeBlock>
//             </>
//         )
//     },
//      {
//         icon: <CheckCircle className="w-5 h-5" />,
//         title: "Summary",
//         content: () => (
//             <>
//                <p>Lists are a foundational data structure in Python, and their flexibility makes them incredibly useful.</p>
//                 <ul className="list-disc list-inside space-y-2 my-2">
//                     <li>Lists are **ordered**, **mutable**, and can hold items of **mixed data types**.</li>
//                     <li>You can **access and modify** items using indexing and slicing.</li>
//                     <li>Python provides a rich set of **list methods** for common operations like adding, removing, and sorting items.</li>
//                     <li>**List comprehensions** offer a powerful and concise way to create new lists, making your code cleaner and often more efficient.</li>
//                 </ul>
//             </>
//         )
//     }
// ];



import React from 'react';
import { BookOpen, Pencil, PlusCircle, Sliders, Repeat, Wind, CheckCircle, Square, Brackets, MousePointer, Settings2, Layers, Award, ClipboardCheck } from 'lucide-react';
import CodeBlock from '/src/components/CodeBlock.jsx';
import { ListDefinitionVisual, ListAccessingVisual, ListModificationVisual, ListMethodsVisual, ListComprehensionVisual, SlicingVisual, NestedListComprehensionVisual, ToDoListVisual, GradesVisual, InventoryVisual, FeedbackVisual } from './visuals.jsx';

export const chapters = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Introduction to Lists",
        content: () => (
            <>
                <p>Lists are one of the most versatile and commonly used data structures in Python. They are defined as ordered, mutable collections of items.</p>
                <ListDefinitionVisual />
            </>
        )
    },
    {
        icon: <Brackets className="w-5 h-5" />,
        title: "Creating Lists",
        content: () => (
            <>
                <p>You can create a list by placing comma-separated values inside square brackets <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">[]</code>.</p>
                <CodeBlock>{`# An empty list
empty_list = []
# A list of strings
names = ["Krish", "Jack", "Jacob"]
# A list with mixed data types
mixed_list = [100, "hello", 3.14, True]`}</CodeBlock>
            </>
        )
    },
    {
        icon: <MousePointer className="w-5 h-5" />,
        title: "Accessing List Items",
        content: () => (
            <>
                <p>You can access items in a list by referring to their index number. Python indexing starts at 0 for the first element.</p>
                <ListAccessingVisual />
                <p className="mt-2">Negative indexing starts from the end. <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">-1</code> refers to the last item.</p>
            </>
        )
    },
    {
        icon: <Sliders className="w-5 h-5" />,
        title: "Slicing Lists",
        content: () => (
            <>
                <p>Slicing allows you to retrieve a range of items from a list using the syntax <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">list[start:stop:step]</code>.</p>
                <SlicingVisual />
                <CodeBlock>{`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# From index 5 to the end: [6, 7, 8, 9, 10]
print(numbers[5:])
# Get every second item: [1, 3, 5, 7, 9]
print(numbers[::2])
# Reverse the list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
print(numbers[::-1])`}</CodeBlock>
            </>
        )
    },
     {
        icon: <Pencil className="w-5 h-5" />,
        title: "Modifying List Items",
        content: () => (
            <>
                <p>Since lists are mutable, you can change their content by accessing an index and assigning a new value.</p>
                <ListModificationVisual />
            </>
        )
    },
    {
        icon: <Settings2 className="w-5 h-5" />,
        title: "List Methods",
        content: () => (
            <>
                <p>Python provides a rich set of built-in methods to work with lists.</p>
                <ListMethodsVisual />
            </>
        )
    },
    {
        icon: <Repeat className="w-5 h-5" />,
        title: "Iterating Over Lists",
        content: () => (
            <>
                <p>You can loop through the items of a list using a <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">for</code> loop.</p>
                <CodeBlock>{`numbers = [1, 2, 3, 4]
for number in numbers:
    print(number)`}</CodeBlock>
                 <h3 className="text-lg font-semibold mt-4 text-sky-300">Iterating with Index</h3>
                 <p>To get both the index and the item, use the <code className="font-mono bg-slate-700 text-pink-400 px-1 rounded">enumerate()</code> function.</p>
                 <CodeBlock>{`for index, number in enumerate(numbers):
    print(f"Index {index}: {number}")`}</CodeBlock>
            </>
        )
    },
    {
        icon: <Wind className="w-5 h-5" />,
        title: "List Comprehension",
        content: () => (
            <>
                <p>List comprehensions offer a shorter, more readable syntax for creating a new list based on the values of an existing list.</p>
                <ListComprehensionVisual />
            </>
        )
    },
     {
        icon: <Layers className="w-5 h-5" />,
        title: "Nested List Comprehension",
        content: () => (
            <>
                <p>You can use nested loops inside a list comprehension to create lists from multiple iterables, such as creating all possible pairs.</p>
                <NestedListComprehensionVisual />
            </>
        )
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Real-World Applications",
        content: () => (
            <>
                <p>Lists are incredibly practical. Here are a few real-world scenarios where they shine.</p>
                
                <h3 className="text-lg font-semibold mt-6 text-sky-300">1. Managing a To-Do List</h3>
                <ToDoListVisual />
                <CodeBlock>{`to_do_list = ["Buy groceries", "Pay bills"]
to_do_list.append("Schedule meeting")
to_do_list.remove("Pay bills")
print(to_do_list)`}
                </CodeBlock>

                <h3 className="text-lg font-semibold mt-6 text-sky-300">2. Organizing Student Grades</h3>
                <GradesVisual />
                <CodeBlock>{`grades = [85, 92, 78, 90, 88]
average_grade = sum(grades) / len(grades)
highest = max(grades)
print(f"Average: {average_grade}, Highest: {highest}")`}
                </CodeBlock>

                <h3 className="text-lg font-semibold mt-6 text-sky-300">3. Inventory Management</h3>
                <InventoryVisual />
                 <CodeBlock>{`inventory = ["Apples", "Bananas", "Oranges"]
item_to_check = "Oranges"
if item_to_check in inventory:
    print(f"{item_to_check} are in stock.")`
                 }</CodeBlock>
            </>
        )
    },
     {
        icon: <CheckCircle className="w-5 h-5" />,
        title: "Summary",
        content: () => (
            <>
               <p>Lists are a foundational data structure in Python. Their flexibility makes them essential for a wide range of programming tasks.</p>
                <ul className="list-disc list-inside space-y-2 my-2">
                    <li>Lists are **ordered**, **mutable**, and can hold items of **mixed data types**.</li>
                    <li>You can **access and modify** items using indexing and slicing.</li>
                    <li>Python provides a rich set of **list methods** for common operations.</li>
                    <li>**List comprehensions** offer a powerful and concise way to create new lists.</li>
                </ul>
            </>
        )
    }
];

