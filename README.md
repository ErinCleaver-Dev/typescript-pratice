# typescript-pratice

Type Annotations and Type Interence:

*  Type annotation:  Code we add to tell typescript what type of value a variable will refer to.
*  Type inference:  Typescript will trie to figure out what type of value a variable referes to.  

Type inference:  
  *  Variable Declaration:  const color 
  *  Variable Initialization:  "Red"
  *  If declartion and initialization are on the same line, Typescript will figure out the type of color is a string.  After that it will only accept strings.

When use type annotations:
  *  When we declare a variable on one line then initialize it later 
  *  When we want a variable to have a type that can't be inferred.
  *  When a function returns the 'any' type and we need to clarify the value.
When to use type inference:
  *  Type inference is always used when you declare the value on the same line.  
  *  JSON.parse() always gives back an any type.  Meaning it can be any value. 
