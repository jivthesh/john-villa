import React from 'react';
import PythonVariablesLesson from '/src/lessons/PythonVariables/index.jsx';
import PythonDataTypesLesson from '/src/lessons/PythonDataTypes/index.jsx';
import PythonOperatorsLesson from '/src/lessons/PythonOperators/index.jsx';
import PythonConditionalsLesson from '/src/lessons/PythonConditionals/index.jsx';
import PythonLoopsLesson from '/src/lessons/PythonLoops/index.jsx';
import PythonListsLesson from '/src/lessons/PythonLists/index.jsx';
import PythonSetsLesson from '/src/lessons/PythonSets/index.jsx';
import PythonDictionariesLesson from '/src/lessons/PythonDictionaries/index.jsx';
import PythonTuplesLesson from '/src/lessons/PythonTuples/index.jsx';
import PythonListUseCasesLesson from '/src/lessons/PythonListUseCases/index.jsx';
import PythonFunctionsLesson from '../lessons/PythonFunctions/index.jsx';
import MoreFunctionsLesson from '../lessons/MoreFunctions/index.jsx'; // <-- ADD THIS IMPORT
import PythonLambdaFunctionsLesson from '../lessons/LambdaFunctionsLesson'; // <-- ADD THIS IMPORT
import PythonMapFunctionsLesson from '../lessons/PythonMapFunctions'; // <-- ADD THIS IMPORT
import PythonFilterFunctionsLesson from '../lessons/PythonFilterFunctions';
import IntroductionToFlowchartsLesson from '../lessons/IntroductionToFlowcharts';
import IntroductionToPseudocodeLesson from '../lessons/IntroductionToPseudocode'; // <-- ADD THIS IMPORT
import FrameworkToSolveProblemLesson from '/src/lessons/FrameworkToSolveProblem/index.jsx'; // <-- ADD THIS IMPORT
import PythonPatternPracticeLesson from '/src/lessons/PythonPatternPractice'; // <-- ADD THIS IMPORT
import { Variable, ListChecks, Sigma, GitMerge, Repeat, List, CircleDashed, BookOpen, ToyBrick, ListOrdered,FunctionSquare, Pilcrow, Zap, Route,Filter ,Waypoints, FileText,ClipboardList,Grid} from 'lucide-react'; 

export const lessons = [
    {
        id: 'python-variables',
        title: 'Python Variables',
        description: 'Learn the fundamentals of variables, data types, and naming conventions in Python.',
        icon: <Variable size={32} />,
        component: PythonVariablesLesson,
    },
    {
        id: 'python-data-types',
        title: 'Python Data Types & Lists',
        description: 'In-depth look at numeric types, strings, booleans, and the powerful features of Python lists.',
        icon: <ListChecks size={32} />,
        component: PythonDataTypesLesson,
    },
    {
        id: 'python-operators',
        title: 'Python Operators',
        description: 'Explore arithmetic, comparison, logical, and bitwise operators for calculations and decision-making.',
        icon: <Sigma size={32} />,
        component: PythonOperatorsLesson,
    },
    {
        id: 'python-conditionals',
        title: 'Conditional Statements',
        description: 'Master control flow with if, elif, and else statements to make decisions in your code.',
        icon: <GitMerge size={32} />,
        component: PythonConditionalsLesson,
    },
    {
        id: 'python-loops',
        title: 'Python Loops',
        description: 'Understand how to use for and while loops to repeat tasks and iterate over data.',
        icon: <Repeat size={32} />,
        component: PythonLoopsLesson,
    },
    {
        id: 'python-lists',
        title: 'Python Lists',
        description: 'An in-depth guide to lists, one of Python\'s most versatile data structures.',
        icon: <List size={32} />,
        component: PythonListsLesson,
    },
    {
        id: 'python-sets',
        title: 'Python Sets',
        description: 'Learn about this powerful data structure for storing unique, unordered collections of items.',
        icon: <CircleDashed size={32} />,
        component: PythonSetsLesson,
    },
    {
        id: 'python-dictionaries',
        title: 'Python Dictionaries',
        description: 'Master the key-value data structure for efficient data lookup and management.',
        icon: <BookOpen size={32} />,
        component: PythonDictionariesLesson,
    },
    {
        id: 'python-tuples',
        title: 'Python Tuples',
        description: 'Discover the power of immutable, ordered collections for data integrity and performance.',
        icon: <ToyBrick size={32} />,
        component: PythonTuplesLesson,
    },
    {
        id: 'python-list-use-cases',
        title: 'Real-World Use Cases of Lists',
        description: 'Explore practical applications of lists in task management, inventory, grades, and feedback analysis.',
        icon: <ListOrdered size={32} />,
        component: PythonListUseCasesLesson,
    },    {
        id: 'python-functions',
        title: 'Python Functions',
        description: 'Understand how to define, call, and use functions to write modular and reusable code.',
        icon: <FunctionSquare size={32} />,
        component: PythonFunctionsLesson,
    }, {
        id: 'more-functions-examples',
        title: 'More Function Examples',
        description: 'Explore practical, real-world examples of Python functions in action.',
        icon: <Pilcrow size={32} />,
        component: MoreFunctionsLesson,
    },  {
        id: 'python-lambda-functions',
        title: 'Python Lambda Functions',
        description: 'Learn about anonymous functions for short, inline operations and use with higher-order functions.',
        icon: <Zap size={32} />,
        component: PythonLambdaFunctionsLesson,
    },{
        id: 'python-map-functions',
        title: 'Map Functions In Python',
        description: 'Learn to efficiently transform data in iterables using the powerful map() function.',
        icon: <Route size={32} />,
        component: PythonMapFunctionsLesson,
    },
     {
        id: 'python-filter-functions',
        title: 'Filter Function In Python',
        description: 'Learn how to selectively filter elements from iterables based on a condition.',
        icon: <Filter size={32} />,
        component: PythonFilterFunctionsLesson,
    },
     {
        id: 'introduction-to-flowcharts',
        title: 'Introduction to Flowcharts',
        description: 'Visualize algorithms and processes using standard flowchart symbols and logic.',
        icon: <Waypoints size={32} />,
        component: IntroductionToFlowchartsLesson,
    }, {
        id: 'introduction-to-pseudocode',
        title: 'What is a Pseudocode',
        description: 'Learn to outline algorithms in plain language, bridging the gap between ideas and code.',
        icon: <FileText size={32} />,
        component: IntroductionToPseudocodeLesson,
    }, {
        id: 'framework-to-solve-problem',
        title: 'Framework to Solve a Problem',
        description: 'A step-by-step guide to approach and solve programming problems effectively.',
        icon: <ClipboardList size={32} />,
        component: FrameworkToSolveProblemLesson,
    },
    {
        id: 'python-pattern-practice',
        title: 'Python Pattern Practice Questions',
        description: 'Practice loops and logic with 15 classic pattern-printing exercises.',
        icon: <Grid size={32} />,
        component: PythonPatternPracticeLesson,
    },
];