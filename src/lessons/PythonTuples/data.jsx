import React from 'react';
import { 
  BookOpen, Brackets, MousePointer, Lock, Plus, Settings2, Package, Layers, AlertTriangle, Award, BrainCircuit, CheckCircle, Repeat 
} from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import ErrorBox from '../../components/ErrorBox.jsx';
import { 
  TupleDefinitionVisual, TupleCreationVisual, TupleAccessingVisual, ImmutabilityVisual, 
  TupleOperationsVisual, TupleMethodsVisual, PackingUnpackingVisual, NestedTupleVisual, 
  RealWorldApplicationsVisual, TupleLoopsIterationVisual, TupleIntroductionVisual 
} from './visuals.jsx';

export const chapters = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Introduction to Tuples",
    content: () => (
      <>
        <p>Tuples are an ordered, immutable collection of items. Think of them like lists that cannot be changed after they are created. This immutability makes them reliable for storing data that should not be altered.</p>
        <TupleDefinitionVisual />
      </>
    )
  },
  {
    icon: <Brackets className="w-5 h-5" />,
    title: "Creating Tuples",
    content: () => (
      <>
        <p>Tuples can be created with or without parentheses, though using them is recommended for clarity. You can also convert other iterables, like lists, into tuples.</p>
        <TupleCreationVisual />
        <CodeBlock>{`# Implicit tuple creation (packing)
packed_tuple = 1, "hello", 3.14

# Converting a list to a tuple
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple) # (1, 2, 3)`}</CodeBlock>
      </>
    )
  },
  {
    icon: <MousePointer className="w-5 h-5" />,
    title: "Accessing Tuple Elements",
    content: () => (
      <>
        <p>Like lists, you can access tuple elements using zero-based indexing and slicing.</p>
        <TupleAccessingVisual />
        <CodeBlock>{`numbers = (10, 20, 30, 40, 50)
# Access first element
print(numbers[0]) # 10

# Slice from index 1 to 3
print(numbers[1:4]) # (20, 30, 40)`}</CodeBlock>
      </>
    )
  },
  {
    icon: <Plus className="w-5 h-5" />,
    title: "Tuple Operations",
    content: () => (
      <>
        <p>Tuples support common operations like concatenation and repetition, which always result in a new tuple.</p>
        <TupleOperationsVisual />
        <CodeBlock>{`tuple1 = (1, 2)
tuple2 = (3, 4)

# Concatenation
combined = tuple1 + tuple2
print(combined) # (1, 2, 3, 4)

# Repetition
repeated = tuple1 * 3
print(repeated) # (1, 2, 1, 2, 1, 2)`}</CodeBlock>
      </>
    )
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "The Immutable Nature of Tuples",
    content: () => (
      <>
        <p>The key feature of tuples is that they are **immutable**. Once a tuple is created, you cannot change, add, or remove its elements. This provides data integrity.</p>
        <ImmutabilityVisual />
        <ErrorBox code={`numbers = (1, 2, 3)\nnumbers[0] = 10`} errorType="TypeError" errorMessage="'tuple' object does not support item assignment" />
      </>
    )
  },
  {
    icon: <Settings2 className="w-5 h-5" />,
    title: "Tuple Methods",
    content: () => (
      <>
        <p>Due to their immutability, tuples have only two methods: `.count()` and `.index()`.</p>
        <TupleMethodsVisual />
      </>
    )
  },
  {
    icon: <Package className="w-5 h-5" />,
    title: "Packing and Unpacking Tuples",
    content: () => (
      <>
        <p>Python allows for the convenient "packing" of values into a tuple and "unpacking" them into variables.</p>
        <PackingUnpackingVisual />
        <h3 className="text-lg font-semibold mt-4 text-sky-300">Unpacking with `*`</h3>
        <p>The star operator (`*`) can be used during unpacking to collect multiple items into a list.</p>
        <CodeBlock>{`numbers = (1, 2, 3, 4, 5, 6)
first, *middle, last = numbers
print(first)  # 1
print(middle) # [2, 3, 4, 5]
print(last)   # 6`}</CodeBlock>
      </>
    )
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Nested Tuples",
    content: () => (
      <>
        <p>A nested tuple is a tuple that contains other tuples as its elements, allowing for structured, immutable data.</p>
        <NestedTupleVisual />
      </>
    )
  },
  {
    icon: <Repeat className="w-5 h-5" />,
    title: "Loops, Iteration, and Comprehension",
    content: () => (
      <>
        <p>Tuples can be iterated using loops, and tuple comprehensions (using `tuple()` with generators) allow for concise creation.</p>
        <TupleLoopsIterationVisual />
        <h3 className="text-lg font-semibold mt-4 text-sky-300">For Loop Iteration</h3>
        <CodeBlock>{`fruits = ("apple", "banana", "cherry")
for fruit in fruits:
    print(fruit)`}</CodeBlock>
        <h3 className="text-lg font-semibold mt-4 text-sky-300">While Loop Iteration</h3>
        <CodeBlock>{`numbers = (1, 2, 3)
i = 0
while i < len(numbers):
    print(numbers[i])
    i += 1`}</CodeBlock>
        <h3 className="text-lg font-semibold mt-4 text-sky-300">Tuple Comprehension</h3>
        <CodeBlock>{`squares = tuple(x**2 for x in range(1, 6))
print(squares) # (1, 4, 9, 16, 25)`}</CodeBlock>
      </>
    )
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Real-World Applications",
    content: () => (
      <>
        <p>Tuples are used in many areas of Python programming where data needs to be constant and reliable. Click an example to learn more.</p>
        <RealWorldApplicationsVisual />
      </>
    )
  },
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "Comprehension Exercises",
    content: () => (
      <>
        <p>Test your knowledge with these quick exercises.</p>
        <h3 className="text-lg font-semibold mt-4 text-sky-300">1. Tuple of Squares</h3>
        <CodeBlock>squares = tuple(x**2 for x in range(1, 6))</CodeBlock>
        <h3 className="text-lg font-semibold mt-4 text-sky-300">2. Concatenate and Slice</h3>
        <CodeBlock>{`tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6, 7)
sliced = (tuple1 + tuple2)[2:6]
print(sliced)`}</CodeBlock>
        <h3 className="text-lg font-semibold mt-4 text-sky-300">3. Iterate and Filter</h3>
        <CodeBlock>{`numbers = (1, 2, 3, 4, 5)
evens = tuple(x for x in numbers if x % 2 == 0)
print(evens) # (2, 4)`}</CodeBlock>
      </>
    )
  }
];