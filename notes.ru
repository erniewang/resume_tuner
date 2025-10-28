Javascript Garbage Collection
    mark and sweep algorithm: 
        1. start at root, globals, functions, DFS through a tree.
            marking shit as alive or dead. builds a heap from the tree
        2. go through every object and remove unmarked ones
    
    mem-leak possibilities:
        no-variable declarations: becomes global object -> "use strict"
            disallows undeclared variables
        timeout closures: internals might be needed when callback comes, so
            it does not get removed. EVEN if it is not used -> use "cleartimeout"
            and clearinterval.
        object references: if anything alive has a reference to that object.
            object never dies -> remove entries or use "weakmap"

JSX Transformation Pipeline:
    old: needed "import react" -> react.createElement. required in any react code
    new: "import { jsx as _jsx }". completely automatic
    JSX: stricter rules than HTML. single root, self closing tags. reserved names

Tailwind : scans files for class anmes, generates CSS, shove through Autoprefixer. 
    - donts: no dynamic names, use cva?

Bundlers : dependecy resolution -> boundle output (.js)
    webpack: creates module map -> giant object {(module path):(module functions)}
    rollup: flattnes modules into a single scope. -> treeshaking (removing useless
        or unused modules). functions assembled top -> down in dependecy order. 
        good for ES

    