import React from 'react';

const CodeBlock = ({ children }) => (
<pre className="bg-slate-800/50 text-white p-4 rounded-lg my-4 overflow-x-auto border border-slate-700">
<code className="font-mono text-sm">{children}</code>
</pre>
);

export default CodeBlock;