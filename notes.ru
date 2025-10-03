10/1
TSC 
    - compiles all typescript into normal javascript. considered
    a intermeddiate step. compared to TSX and TsNode.  tsx is faster
Type Stripping
    -method of running typescript directly on runtime. turning 
    shit into javascript on the fly. no configs, just turn into js
    - removing all type declarations and annotations.
    turning it into js code. anything not absolutley needed
    at runtime.
    - does not check the code. the realy checking is developers
    while they are developing the code in typescript.

10/2
Dev Strats
    - strict in interfaces, loose in implementation
    - data first: data gets passed through every subsystem. so it 
    is king. 
    - failing loudly is better. when you are wrong, play it louder.
Calling Python in Node
    - node's implementation includes system calls using C++. these
    systemcalls are what calls Python subprocesses. Node does not spin up a 
    python process within itself. Communication happens vs OS Pipes. Node.js is 
    a JavaScript runtime built on the V8 engine, with asynchronous I/O and 
    process management handled by the C++ libuv layer that delegates to the operating system.
