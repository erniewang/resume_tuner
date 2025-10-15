Mid October Review - (principle of least suprise):
    -> path manipulation: very dangerous. hides dependecies. too many paths
    and other shit are hardcoded in. better to centralize them.

    -> seperate user interaction and automation. dont combine the 2. even better
    review the single responsibility principle. without it, too many side effects,
in which there probably is already. Pure Functions are Testable Functions.

    -> data: many quick manipulation of data is fragile. have a "schema" for modifying
    shit that will be passed into something else. such as changing str into list,
    or concatenating shit together.  

