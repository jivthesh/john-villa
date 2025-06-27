import React from 'react';
import { Grid3X3, Square, Triangle, Diamond, RotateCcw, Hash, Layers, Code, PlayCircle, Zap, Target, Award, Eye, Settings, FileText, GitBranch, Sparkles, Bot, Palette } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock.jsx';
import {
    ModernFlowChart,
    EnhancedSquareVisual,
    EnhancedHollowSquareVisual,
    EnhancedRectangleVisual,
    EnhancedTriangleVisual,
    InteractivePatternPlayground
} from './visuals.jsx';

export const chapters = [
    {
        icon: <Square className="w-6 h-6" />,
        title: "Q1: Square Pattern",
        gradient: "from-cyan-500 via-blue-500 to-purple-500",
        accentColor: "cyan",
        content: () => (
            <div className="space-y-10">
                {/* Modern Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 rounded-3xl"></div>
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10"></div>
                    <div className="relative p-8 rounded-3xl">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="p-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-lg shadow-cyan-500/25">
                                <Square className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                                    Square Pattern Generator
                                </h3>
                                <p className="text-xl text-slate-400">Build perfect n×n squares with mathematical precision</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-4 h-4 rounded-full bg-green-400"></div>
                                        <span className="text-green-400 font-semibold text-lg">Input</span>
                                    </div>
                                    <code className="text-cyan-300 text-xl font-mono">n = 4</code>
                                </div>
                                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                                        <span className="text-blue-400 font-semibold text-lg">Output</span>
                                    </div>
                                    <code className="text-emerald-300 text-xl font-mono">['****', '****', '****', '****']</code>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-30"></div>
                                    <div className="relative bg-slate-900/90 p-8 rounded-2xl border border-cyan-500/30">
                                        <div className="grid grid-cols-4 gap-2">
                                            {Array(16).fill().map((_, i) => (
                                                <div key={i} className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md shadow-lg"></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Algorithm Flow */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-8">
                        <GitBranch className="w-7 h-7 text-purple-400" />
                        <h4 className="text-3xl font-bold text-white">Algorithm Flow</h4>
                        <div className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-base font-medium">
                            Interactive
                        </div>
                    </div>
                    <ModernFlowChart 
                        steps={[
                            { id: 'start', type: 'start', label: 'START', position: { x: 400, y: 50 } },
                            { id: 'input', type: 'input', label: 'INPUT: n (size)', position: { x: 400, y: 150 } },
                            { id: 'init', type: 'process', label: 'Initialize empty pattern[]', position: { x: 400, y: 250 } },
                            { id: 'loop', type: 'loop', label: 'FOR i = 0 to n-1', position: { x: 400, y: 350 } },
                            { id: 'create', type: 'process', label: 'Create row with n stars', position: { x: 600, y: 450 } },
                            { id: 'add', type: 'process', label: 'Add row to pattern', position: { x: 600, y: 550 } },
                            { id: 'check', type: 'decision', label: 'i < n-1?', position: { x: 400, y: 650 } },
                            { id: 'output', type: 'output', label: 'RETURN pattern', position: { x: 200, y: 750 } },
                            { id: 'end', type: 'end', label: 'END', position: { x: 200, y: 850 } }
                        ]}
                        connections={[
                            { from: 'start', to: 'input' },
                            { from: 'input', to: 'init' },
                            { from: 'init', to: 'loop' },
                            { from: 'loop', to: 'create' },
                            { from: 'create', to: 'add' },
                            { from: 'add', to: 'check' },
                            { from: 'check', to: 'loop', label: 'Yes', style: 'curved' },
                            { from: 'check', to: 'output', label: 'No' },
                            { from: 'output', to: 'end' }
                        ]}
                    />
                </div>

                {/* Enhanced Pseudocode */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-8">
                        <FileText className="w-7 h-7 text-emerald-400" />
                        <h4 className="text-3xl font-bold text-white">Enhanced Pseudocode</h4>
                        <div className="px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-base font-medium">
                            Step-by-Step
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-slate-900/80 to-black/50 p-8 rounded-2xl border border-emerald-500/20">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3 mb-6">
                                <Sparkles className="w-6 h-6 text-yellow-400" />
                                <span className="text-yellow-400 font-semibold text-xl">Algorithm: Square Pattern Generator</span>
                            </div>
                            
                            <CodeBlock language="pseudocode">{`ALGORITHM SquarePatternGenerator
INPUT: n (integer) → size of square
OUTPUT: pattern (list of strings) → square representation

COMPLEXITY ANALYSIS:
  Time Complexity: O(n²) - create n rows with n characters each
  Space Complexity: O(n²) - store n strings of length n

BEGIN
  // Initialize data structures
  DECLARE pattern AS empty list
  
  // Main pattern generation loop
  FOR i FROM 0 TO n-1 DO
    // Create a row with n star characters
    DECLARE row AS string containing n '*' characters
    
    // Add the row to our pattern
    APPEND row TO pattern
    
    // Visual representation at this step:
    // Row 0: ****
    // Row 1: ****
    // ... and so on
  END FOR
  
  // Return the completed pattern
  RETURN pattern
END

MATHEMATICAL PROPERTIES:
  - Total stars: n × n = n²
  - Rows: n
  - Columns: n
  - Symmetry: Perfect horizontal and vertical
  
MEMORY OPTIMIZATION:
  - Use list comprehension for efficiency
  - Single allocation per row
  - Minimal string operations`}</CodeBlock>
                        </div>
                    </div>
                </div>

                {/* Code Implementation */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-8">
                        <Code className="w-7 h-7 text-blue-400" />
                        <h4 className="text-3xl font-bold text-white">Implementation</h4>
                        <div className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-base font-medium">
                            Optimized
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h5 className="text-2xl font-semibold text-cyan-300">💎 Elegant Solution</h5>
                            <CodeBlock language="python">{`def generate_square(n):
    """
    Generate a square pattern of '*' characters.
    
    Args:
        n (int): Size of the square (width and height)
        
    Returns:
        list[str]: Square pattern as list of strings
        
    Time: O(n²), Space: O(n²)
    """
    return ['*' * n for _ in range(n)]

# Example usage
pattern = generate_square(4)
for row in pattern:
    print(row)`}</CodeBlock>
                        </div>
                        
                        <div className="space-y-6">
                            <h5 className="text-2xl font-semibold text-purple-300">🔧 Verbose Solution</h5>
                            <CodeBlock language="python">{`def generate_square_verbose(n):
    """
    Generate square pattern with detailed steps.
    """
    pattern = []
    
    for i in range(n):
        # Create a row of n stars
        row = '*' * n
        pattern.append(row)
        print(f"Added row {i+1}: {row}")
    
    return pattern

# Advanced features
def generate_square_with_char(n, char='*'):
    """Generate square with custom character."""
    return [char * n for _ in range(n)]`}</CodeBlock>
                        </div>
                    </div>
                </div>

                {/* Interactive Visualization */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-8">
                        <Eye className="w-7 h-7 text-pink-400" />
                        <h4 className="text-3xl font-bold text-white">Interactive Visualization</h4>
                        <div className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 text-base font-medium">
                            3D Enhanced
                        </div>
                    </div>
                    <EnhancedSquareVisual />
                </div>

                {/* Memory Palace */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl"></div>
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10"></div>
                    <div className="relative p-8 rounded-3xl">
                        <div className="flex items-center space-x-3 mb-8">
                            <Sparkles className="w-7 h-7 text-yellow-400" />
                            <h4 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                Memory Palace: Never Forget This Pattern!
                            </h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <h5 className="text-2xl font-semibold text-cyan-300">🏗️ Visual Memory Technique</h5>
                                <div className="bg-cyan-900/20 p-8 rounded-2xl border border-cyan-500/30">
                                    <p className="text-slate-300 leading-relaxed text-lg">
                                        Imagine you're a <strong className="text-cyan-300">TILE INSTALLER</strong> laying a perfect 
                                        square floor. Each tile is a star (*). You work <strong className="text-cyan-300">row by row</strong>, 
                                        placing exactly the same number of tiles in each row. The pattern emerges as you 
                                        build - methodical, predictable, perfect.
                                    </p>
                                </div>
                                
                                <div className="bg-purple-900/20 p-8 rounded-2xl border border-purple-500/30">
                                    <h6 className="text-purple-300 font-semibold mb-3 text-xl">🧠 Code Memory Hook</h6>
                                    <p className="text-slate-300 text-base mb-4">
                                        <strong>"Star Multiplication Table"</strong> - For an n×n square, 
                                        multiply stars n times, repeat n times.
                                    </p>
                                    <code className="text-purple-300 bg-purple-900/30 px-4 py-2 rounded text-lg inline-block">
                                        ['*' * n for _ in range(n)]
                                    </code>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <h5 className="text-2xl font-semibold text-pink-300">📊 Pattern Mathematics</h5>
                                <div className="bg-pink-900/20 p-8 rounded-2xl border border-pink-500/30">
                                    <div className="space-y-4 text-base">
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Dimensions:</span>
                                            <span className="text-pink-300 font-mono">n × n</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Total Elements:</span>
                                            <span className="text-pink-300 font-mono">n²</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Rows:</span>
                                            <span className="text-pink-300 font-mono">n</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Stars per Row:</span>
                                            <span className="text-pink-300 font-mono">n</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-orange-900/20 p-8 rounded-2xl border border-orange-500/30">
                                    <h6 className="text-orange-300 font-semibold mb-3 text-xl">🎯 Remember Formula</h6>
                                    <p className="text-slate-300 text-base">
                                        Think: <strong>"Same width, same height, same every time"</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    {
        icon: <Layers className="w-6 h-6" />,
        title: "Q2: Hollow Square Pattern",
        gradient: "from-orange-500 via-red-500 to-pink-500",
        accentColor: "orange",
        content: () => (
            <div className="space-y-10">
                {/* Modern Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-pink-500/20 rounded-3xl"></div>
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10"></div>
                    <div className="relative p-8 rounded-3xl">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="p-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg shadow-orange-500/25">
                                <Layers className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                                    Hollow Square Generator
                                </h3>
                                <p className="text-xl text-slate-400">Create elegant bordered squares with hollow centers</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-4 h-4 rounded-full bg-green-400"></div>
                                        <span className="text-green-400 font-semibold text-lg">Input</span>
                                    </div>
                                    <code className="text-cyan-300 text-xl font-mono">n = 4</code>
                                </div>
                                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                                        <span className="text-blue-400 font-semibold text-lg">Output</span>
                                    </div>
                                    <code className="text-emerald-300 text-xl font-mono">['****', '*  *', '*  *', '****']</code>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-30"></div>
                                    <div className="relative bg-slate-900/90 p-8 rounded-2xl border border-orange-500/30">
                                        <div className="grid grid-cols-4 gap-2">
                                            {[1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1].map((filled, i) => (
                                                <div key={i} className={`w-8 h-8 rounded-md shadow-lg ${
                                                    filled ? 'bg-gradient-to-br from-orange-400 to-red-500' : 'bg-slate-700/50'
                                                }`}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Pseudocode for Hollow Square */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-8">
                        <FileText className="w-7 h-7 text-emerald-400" />
                        <h4 className="text-3xl font-bold text-white">Hollow Square Algorithm</h4>
                    </div>
                    
                    <div className="bg-gradient-to-br from-slate-900/80 to-black/50 p-8 rounded-2xl border border-emerald-500/20">
                        <CodeBlock language="pseudocode">{`ALGORITHM HollowSquareGenerator
INPUT: n (integer) → size of square
OUTPUT: pattern (list of strings) → hollow square representation

COMPLEXITY ANALYSIS:
  Time Complexity: O(n²) - still need to process each position
  Space Complexity: O(n²) - store n strings of length n

BEGIN
  // Handle edge cases where hollow is impossible
  IF n ≤ 2 THEN
    RETURN SolidSquare(n)  // Too small for hollow effect
  END IF
  
  DECLARE pattern AS empty list
  
  // Create top border (full row of stars)
  APPEND string of n '*' characters TO pattern
  
  // Create middle rows (hollow part)
  FOR i FROM 1 TO n-2 DO
    // Create hollow row: star + spaces + star
    DECLARE row AS '*' + (n-2) spaces + '*'
    APPEND row TO pattern
  END FOR
  
  // Create bottom border (full row of stars)
  APPEND string of n '*' characters TO pattern
  
  RETURN pattern
END

VISUAL REPRESENTATION:
  For n=5:
  *****  ← Top border (full)
  *   *  ← Hollow row (edges only)
  *   *  ← Hollow row (edges only)
  *   *  ← Hollow row (edges only)
  *****  ← Bottom border (full)

EDGE DETECTION LOGIC:
  - Position (0, j): Top border → always star
  - Position (n-1, j): Bottom border → always star
  - Position (i, 0): Left border → always star
  - Position (i, n-1): Right border → always star
  - Position (i, j) where 0 < i < n-1 and 0 < j < n-1: Interior → space`}</CodeBlock>
                    </div>
                </div>

                {/* Code Implementation */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-8">
                        <Code className="w-7 h-7 text-blue-400" />
                        <h4 className="text-3xl font-bold text-white">Implementation</h4>
                    </div>
                    
                    <CodeBlock language="python">{`def generate_hollow_square(n):
    """
    Generate a hollow square pattern.
    
    Args:
        n (int): Size of the square
        
    Returns:
        list[str]: Hollow square pattern
    """
    if n <= 2:
        return ['*' * n for _ in range(n)]
    
    pattern = ['*' * n]  # Top border
    
    # Middle rows (hollow)
    for _ in range(n - 2):
        pattern.append('*' + ' ' * (n - 2) + '*')
    
    pattern.append('*' * n)  # Bottom border
    return pattern`}</CodeBlock>
                </div>

                {/* Interactive Visualization */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-8">
                        <Eye className="w-7 h-7 text-pink-400" />
                        <h4 className="text-3xl font-bold text-white">Interactive Visualization</h4>
                    </div>
                    <EnhancedHollowSquareVisual />
                </div>

                {/* Memory Palace */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-pink-500/10 rounded-3xl"></div>
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10"></div>
                    <div className="relative p-8 rounded-3xl">
                        <div className="flex items-center space-x-3 mb-8">
                            <Sparkles className="w-7 h-7 text-yellow-400" />
                            <h4 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                Memory Palace: Picture Frame Builder
                            </h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <h5 className="text-2xl font-semibold text-orange-300">🖼️ Visual Memory</h5>
                                <div className="bg-orange-900/20 p-8 rounded-2xl border border-orange-500/30">
                                    <p className="text-slate-300 leading-relaxed text-lg">
                                        Think of a <strong className="text-orange-300">PICTURE FRAME</strong> - only the frame (border) is visible, 
                                        the inside is empty. Top and bottom are <strong className="text-orange-300">FULL LINES</strong>, 
                                        middle rows are <strong className="text-orange-300">JUST THE SIDES</strong>.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <h5 className="text-2xl font-semibold text-red-300">🧠 Code Memory</h5>
                                <div className="bg-red-900/20 p-8 rounded-2xl border border-red-500/30">
                                    <p className="text-slate-300 text-base mb-4">
                                        <strong>"Frame Builder"</strong> - Top frame, Side frames with gaps, Bottom frame.
                                    </p>
                                    <code className="text-red-300 bg-red-900/30 px-4 py-2 rounded text-lg inline-block">
                                        '*' + ' ' * (n-2) + '*'
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    {
        icon: <Grid3X3 className="w-6 h-6" />,
        title: "Q3: Rectangle Pattern",
        gradient: "from-green-500 via-teal-500 to-cyan-500",
        accentColor: "green",
        content: () => (
            <div className="space-y-10">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-teal-500/10 to-cyan-500/20 rounded-3xl"></div>
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10"></div>
                    <div className="relative p-8 rounded-3xl">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="p-4 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl shadow-lg shadow-green-500/25">
                                <Grid3X3 className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                                    Rectangle Pattern Generator
                                </h3>
                                <p className="text-xl text-slate-400">Create rectangles with custom width and height</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-4 h-4 rounded-full bg-green-400"></div>
                                        <span className="text-green-400 font-semibold text-lg">Input</span>
                                    </div>
                                    <code className="text-cyan-300 text-xl font-mono">n = 3, m = 5</code>
                                </div>
                                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                                        <span className="text-blue-400 font-semibold text-lg">Output</span>
                                    </div>
                                    <code className="text-emerald-300 text-xl font-mono">['*****', '*****', '*****']</code>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-xl opacity-30"></div>
                                    <div className="relative bg-slate-900/90 p-8 rounded-2xl border border-green-500/30">
                                        <div className="grid grid-cols-5 gap-2">
                                            {Array(15).fill().map((_, i) => (
                                                <div key={i} className="w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-md shadow-lg"></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Code and Visualization */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-8">
                        <Code className="w-7 h-7 text-blue-400" />
                        <h4 className="text-3xl font-bold text-white">Rectangle Implementation</h4>
                    </div>
                    
                    <CodeBlock language="python">{`def generate_rectangle(n, m):
    """
    Generate a rectangle pattern.
    
    Args:
        n (int): Height of rectangle
        m (int): Width of rectangle
        
    Returns:
        list[str]: Rectangle pattern
    """
    return ['*' * m for _ in range(n)]`}</CodeBlock>
                </div>

                <EnhancedRectangleVisual />
            </div>
        )
    },

    {
        icon: <Triangle className="w-6 h-6" />,
        title: "Q4: Right Angled Triangle",
        gradient: "from-purple-500 via-violet-500 to-indigo-500",
        accentColor: "purple",
        content: () => (
            <div className="space-y-10">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-indigo-500/20 rounded-3xl"></div>
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10"></div>
                    <div className="relative p-8 rounded-3xl">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="p-4 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl shadow-lg shadow-purple-500/25">
                                <Triangle className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2">
                                    Right Angled Triangle
                                </h3>
                                <p className="text-xl text-slate-400">Build triangular patterns row by row</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-4 h-4 rounded-full bg-green-400"></div>
                                        <span className="text-green-400 font-semibold text-lg">Input</span>
                                    </div>
                                    <code className="text-cyan-300 text-xl font-mono">n = 4</code>
                                </div>
                                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                                        <span className="text-blue-400 font-semibold text-lg">Output</span>
                                    </div>
                                    <code className="text-emerald-300 text-xl font-mono">['*', '**', '***', '****']</code>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl blur-xl opacity-30"></div>
                                    <div className="relative bg-slate-900/90 p-8 rounded-2xl border border-purple-500/30">
                                        <div className="space-y-2">
                                            {[1,2,3,4].map((count, i) => (
                                                <div key={i} className="flex space-x-2">
                                                    {Array(count).fill().map((_, j) => (
                                                        <div key={j} className="w-6 h-6 bg-gradient-to-br from-purple-400 to-violet-500 rounded-md shadow-lg"></div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Code Implementation */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-8">
                        <Code className="w-7 h-7 text-blue-400" />
                        <h4 className="text-3xl font-bold text-white">Triangle Implementation</h4>
                    </div>
                    
                    <CodeBlock language="python">{`def generate_triangle(n):
    """
    Generate a right-angled triangle pattern.
    
    Args:
        n (int): Height of triangle
        
    Returns:
        list[str]: Triangle pattern
    """
    return ['*' * i for i in range(1, n + 1)]`}</CodeBlock>
                </div>

                <EnhancedTriangleVisual />

                {/* Memory Palace */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-indigo-500/10 rounded-3xl"></div>
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10"></div>
                    <div className="relative p-8 rounded-3xl">
                        <div className="flex items-center space-x-3 mb-8">
                            <Sparkles className="w-7 h-7 text-yellow-400" />
                            <h4 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                                Memory Palace: Building Stairs
                            </h4>
                        </div>
                        
                        <div className="bg-purple-900/20 p-8 rounded-2xl border border-purple-500/30">
                            <p className="text-slate-300 leading-relaxed text-lg">
                                Think of <strong className="text-purple-300">BUILDING STAIRS</strong> - start with 1 step, 
                                add 1 more star each level up! Each row represents a stair step getting wider.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    {
        icon: <Award className="w-6 h-6" />,
        title: "Q5: Pattern Mastery Playground",
        gradient: "from-yellow-500 via-orange-500 to-red-500",
        accentColor: "yellow",
        content: () => (
            <div className="space-y-10">
                <InteractivePatternPlayground />
                
                {/* Summary */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl p-8 rounded-3xl border border-yellow-500/20">
                    <h4 className="text-3xl font-bold text-white mb-8">🏆 Pattern Mastery Complete!</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h5 className="text-2xl font-semibold text-yellow-300">✅ Patterns Mastered</h5>
                            <ul className="space-y-3 text-slate-300 text-lg">
                                <li>🟦 Square Pattern</li>
                                <li>⭕ Hollow Square Pattern</li>
                                <li>📐 Rectangle Pattern</li>
                                <li>🔺 Right Angled Triangle</li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h5 className="text-2xl font-semibold text-orange-300">🧠 Skills Developed</h5>
                            <ul className="space-y-3 text-slate-300 text-lg">
                                <li>🔄 Loop Logic</li>
                                <li>📏 String Manipulation</li>
                                <li>🧮 Mathematical Patterns</li>
                                <li>💡 Problem Solving</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];
