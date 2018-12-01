# Categories
_Typewise implementations of categories from category theory implemented in TypeScript_

## Why?
The contravariant functor category was insanely confusing to me when I first encountered it, so I set out to try to make sense of it by building an object with such properties.

## Why TypeScript?
None of this shit really makes sense without types. Since all of these categories are already implemented as typeclasses in Haskell, it was pretty much a toss up between TypeScript and C#. Since I wanted these structures to be relatively loose, I TypeScript it is.

## What's implemented?
  - Bifunctor
    - Either
  - Contravariant Functor
    - Orderable
  - Functor
  - Monad

## How closely do these resemble the actual categories?
I truly don't know. Though I've read a lot on the subject, I'm still sort of a wannabe category theorist so I could be completely wrong on these. If so, create an issue or submit a PR.

## License
MIT