import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ErrorBox = ({ code, errorType, errorMessage }) => (
<div className="my-4 border border-rose-500/50 rounded-lg bg-rose-900/20">
<div className="p-3 border-b border-rose-500/50">
<pre><code className="font-mono text-sm text-rose-300">{code}</code></pre>
</div>
<div className="p-3 bg-rose-900/30">
<p className="flex items-center text-rose-400 font-semibold">
<AlertTriangle size={18} className="mr-2"/>
{errorType}
</p>
<p className="font-mono text-sm text-rose-300/80 mt-1">{errorMessage}</p>
</div>
</div>
);

export default ErrorBox;