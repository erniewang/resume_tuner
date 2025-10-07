Local Vs Global Installation:
    - npm start | npm test: npm adds a bin to the path of the specified execution
    - terminal: only looks at the global path. and shit can be installed locally but not globally.

    - npx: local installation. found in node_modules of the projects. goes to the nearest
    node modules binary folder. 

Typescripts Future Sight:
    - typescript compiler reads block by block, function by function. 
    = where there is a function, typescript analyzes the entire function. 
    - Compile type saftey vs runtime debugging

Error PolyMorphism and polymorphism in many javascript objects in general:
    - Javascript erros have some properties that are hidden in console.log
    - console.log serializes errors, and many objects in general. 

Wrong Developer Mindset:
    - treating typescript as javascript with limitations rather than actually using the types to make sure the
    code runs smoothly. example of delayed gratification

GUI:
    History: 
    NLS (computer system) -> early uses of mouse and hypertext -> WIMP
    - Like Node: event loop. (wait next event). 
    = sequences events from device drivers. and pass to program.
    - (includes windows, resizes, clicks, keypresses. but most are implicitly handeled)
    - Sometimes they do need to be directed. Program them into the logic. (redraw windows or get cache)
    event loop example: 
    while (!quit)
        peek(), translate(), dispatch()
    - windows: puts app stuff outside FOV of desktop and copies it in and projects
    - dragging window is more expensive by a tiny bit computationally
    
Typescript and Types Files
    -> declaration files: @types/node, @types/react. these files/folders
    help with autocompletes, error catching, understanding.

Node Composition:
    -> node core: runtime platform made of componets, which also includes
    a couple of built in modules. only modules are found in node_modules in projects.
    the c++ system level shit is stored elsewhere.
    -> node_modules exist because the core dependencies in a project can have
    descending dependecies that would require specific core module versions.
    all managed by package lock. networking type of shit.

Installing Complex Node Packages:
    -> @import "tailwindcss" imports all tailwind. which reads and optimizes at compile time.
    give it a input and output file. compared to v3, which had postcss config, purging, postcss.
    -> devDependencies: esbuild -> compiles (tsx) and bundles frameworks such as react.
    various types are also included in dev devDependencies

React vs Electron
    -> @Electron :runs in node. not copied into the file
    -> @react_file : runs in chromium. needs to resolve and include every javascript dependecies

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
    process management handled by the C++ libuv layer that delegates to the operating system.'

10/3
Python Supbrocess vs OS.system()
    -> OS executes the command in a subshell and only shows return status. also very
    prone to shell injection
    -> subprocesses uses internal sysCalls and has allows greater control for input, 
    and output. 
    -> when another process calls python code. it inherits the callers file path. not 
    the one that they are actually located in.

Buffering
    -> batching output from a program until the program ends. is on usually for python and 
    rarley javascipt. it is more for backend-programming. depends on the optimizer and the language.
    javascript is based off a async event loop model. unpredictability at its core, while other 
    languages expect sequential certainty

Enviroment Variablees
    -> frequently need to be manually loaded in. '.env'. this is for security, predictablilty, 
    and isolation.

10/6

Python Retardation File Paths:
    -> from ..directory.file import thing, or from .sister import thing. this 
    shit only works in packages (which have __init__ .py). only for modules
    -> the open(thing) is seperate and use OS file paths. 
    -> python "whatever" makes python treat it as a standalone script. parent directory references,
    such as ".." dont work. 