import React from 'react';
import { ListOrdered, ClipboardList, GraduationCap, Package, MessageSquare, BrainCircuit, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import ErrorBox from '../../components/ErrorBox.jsx';
import { ToDoListVisual, GradesVisual, InventoryVisual, FeedbackVisual, ComprehensionVisual, RealWorldApplicationsVisual } from './visuals.jsx';

export const chapters = [
    {
        icon: <ListOrdered className="w-5 h-5" />,
        title: "Introduction to List Use Cases",
        content: () => (
            <>
                <p className="mb-4">Lists are versatile, mutable collections used in many real-world applications. This lesson explores practical examples like task management, grade tracking, inventory systems, and feedback analysis, showcasing how lists enable dynamic data handling.</p>
                <p>Lists are ideal for applications requiring addition, removal, and iteration over elements, making them a cornerstone of Python programming.</p>
            </>
        ),
    },
    {
        icon: <ClipboardList className="w-5 h-5" />,
        title: "Managing a To-Do List",
        content: () => (
            <>
                <p className="mb-4">A to-do list tracks tasks, allowing users to add new tasks, remove completed ones, check for specific tasks, and display remaining tasks. Lists are perfect for this due to their dynamic nature.</p>
                <ToDoListVisual />
                <CodeBlock>{`to_do_list = ["buy groceries", "clean the house", "pay bills"]
to_do_list.append("schedule meeting")
to_do_list.append("go for a run")
to_do_list.remove("clean the house")
if "pay bills" in to_do_list:
    print("Don't forget to pay the utility bills!")
print("To-do list remaining:")
for task in to_do_list:
    print(f"- {task.capitalize()}")`}</CodeBlock>
            </>
        ),
    },
    {
        icon: <GraduationCap className="w-5 h-5" />,
        title: "Organizing Student Grades",
        content: () => (
            <>
                <p className="mb-4">Lists store student grades, enabling calculations like average, highest, and lowest grades, using built-in functions for efficient data processing.</p>
                <GradesVisual />
                <CodeBlock>{`grades = [85, 92, 78, 90, 88]
grades.append(95)
average_grade = sum(grades) / len(grades)
highest_grade = max(grades)
lowest_grade = min(grades)
print(f"Average grade: {average_grade:.2f}")
print(f"Highest grade: {highest_grade}")
print(f"Lowest grade: {lowest_grade}")`}</CodeBlock>
            </>
        ),
    },
    {
        icon: <Package className="w-5 h-5" />,
        title: "Managing Inventory",
        content: () => (
            <>
                <p className="mb-4">Lists manage inventory items in e-commerce, allowing addition of new items, removal of sold items, and stock checks, crucial for retail systems.</p>
                <InventoryVisual />
                <CodeBlock>{`inventory = ["apples", "bananas", "oranges", "grapes"]
inventory.append("strawberries")
inventory.remove("bananas")
item = "oranges"
if item in inventory:
    print(f"{item.capitalize()} are in stock")
else:
    print(f"{item.capitalize()} are out of stock")
print("Current inventory:", [i.capitalize() for i in inventory])`}</CodeBlock>
            </>
        ),
    },
    {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Collecting User Feedback",
        content: () => (
            <>
                <p className="mb-4">Lists collect and analyze user feedback, counting positive sentiments based on keywords like "great" or "excellent" for simple sentiment analysis.</p>
                <FeedbackVisual />
                <CodeBlock>{`feedbacks = ["Great service", "Very satisfied", "Could be better", "Excellent experience"]
feedbacks.append("Not happy with the service")
positive_count = 0
for comment in feedbacks:
    if "great" in comment.lower() or "excellent" in comment.lower():
        positive_count += 1
print(f"Positive feedback count: {positive_count}")
print("All feedback:")
for comment in feedbacks:
    print(f"- {comment}")`}</CodeBlock>
            </>
        ),
    },
    {
        icon: <BrainCircuit className="w-5 h-5" />,
        title: "Comprehension Exercises",
        content: () => (
            <>
                <p className="mb-4">Test your understanding with these exercises, applying list operations and comprehension to real-world scenarios.</p>
                <ComprehensionVisual />
                <h3 className="text-lg font-semibold mt-4 text-sky-400">1. Task Completion Tracker</h3>
                <p className="mb-2">Remove a task and count remaining tasks.</p>
                <CodeBlock>{`tasks = ["read book", "write report", "attend meeting"]
tasks.remove("read book")
print(f"Remaining tasks: {len(tasks)}")`}</CodeBlock>
                <h3 className="text-lg font-semibold mt-4 text-sky-400">2. Filter High Grades</h3>
                <p className="mb-2">Use list comprehension to filter grades above 80.</p>
                <CodeBlock>{`grades = [75, 82, 90, 78, 95]
high_grades = [grade for grade in grades if grade > 80]
print("High grades:", high_grades)`}</CodeBlock>
                <h3 className="text-lg font-semibold mt-4 text-sky-400">3. Inventory Stock Check</h3>
                <p className="mb-2">Identify out-of-stock items using list comprehension.</p>
                <CodeBlock>{`inventory = ["apples", "oranges"]
check_items = ["apples", "bananas"]
out_of_stock = [item for item in check_items if item not in inventory]
print("Out of stock:", out_of_stock)`}</CodeBlock>
            </>
        ),
    },
    {
        icon: <AlertTriangle className="w-5 h-5" />,
        title: "Common Errors",
        content: () => (
            <>
                <p className="mb-4">Learn to avoid common pitfalls when working with lists.</p>
                <ErrorBox code={`to_do_list = ["buy groceries"]
to_do_list.remove("clean")`} errorType="ValueError" errorMessage="list.remove(x): x not in list" />
                <ErrorBox code={`grades = [85, 90]
print(grades[2])`} errorType="IndexError" errorMessage="list index out of range" />
            </>
        ),
    },
    {
        icon: <ListOrdered className="w-5 h-5" />,
        title: "Key Takeaways",
        content: () => (
            <>
                <p className="mb-4">Lists are a fundamental data structure in Python, widely used due to their versatility:</p>
                <ul className="list-disc list-inside text-slate-400 mb-4">
                    <li>Enable dynamic addition and removal of elements (e.g., tasks, inventory items).</li>
                    <li>Support built-in methods like <code>append()</code>, <code>remove()</code>, <code>sum()</code>, <code>max()</code>, and <code>min()</code>.</li>
                    <li>Efficiently handle numerical and textual data in applications like to-do lists, grade tracking, inventory systems, and feedback analysis.</li>
                </ul>
                <p className="mb-4">Explore more real-world applications below:</p>
                <RealWorldApplicationsVisual />
            </>
        ),
    },
];