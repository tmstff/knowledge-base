# Category Theory

* https://www.youtube.com/playlist?list=PLbgaMIhjbmEnaH_LTkxLI7FMa2HsnawM_

# Lecture 1

## Motivation & Philosophy

* https://www.youtube.com/watch?v=I8LbkfSSR58
* (most?) abstract part of mathematics
* Why is CT important for programming?
    * get to highest possible level to get ideas to translate to concrete programming
    * abstracts all kinds of stuff, also geometry, algebra etc
* OO-Programming
    * divide an conquer & composability
    * abstraction (hide details)
    * reusability
    * ! Concurrency does not fit with OO
        * Objects hide mutation
        * share data
        * => data races
* abstraction hast to be on the right level!
* functional programming
    * immutability => hide data races
* for each new language:
    * what are the most complicate features?

* ! Alonzo Church
* ! Curry-Howard-Lambek Isomorphism

## Categories
* https://www.youtube.com/watch?v=p54Hd7AmVFU
* Major Tools
    * Abstraction
    * Composition
    * Identity
* Category: Composition, Identity
* Category:
    * Objects
    * Morphisms (Arrow)
    * Laws / Properties:
        * Composition: for each a =f=> b =g=> c exists a =g°f=> c
        * Identity: for each a exists a =id_a=> a with id_a°f = f & g°f_a = g
        * Associativity: h ° (g ° f) = (h ° g) ° f

# Lecture 6

* https://www.youtube.com/watch?v=i9CU4CuHADQ
* Kleisli Arrow:
    * (>=>) :: (a -> Writer b) -> (b -> Writer c) -> (a -> Writer c)