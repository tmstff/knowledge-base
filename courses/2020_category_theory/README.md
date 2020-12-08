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
* Morphism: structure-preserving map from one structure to another structure of same type
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
        * Identity: for each a exists a =id_a=> a with id_a°f = f & g°id_a = g
        * Associativity: h ° (g ° f) = (h ° g) ° f
* possibly infinite directed graph (edge duplication possible)

# Lecture 6

* https://www.youtube.com/watch?v=i9CU4CuHADQ
* Kleisli Arrow:
    * (>=>) :: (a -> Writer b) -> (b -> Writer c) -> (a -> Writer c)

# Lecture 6.1: Functors

* https://www.youtube.com/watch?v=FyoQjkwsy7o
* discrete category: only objects and identity morphism
    * => representation of set
* functor: Mapping between categories C & D (for objects & morphism)
    * F :: a -> D
    * f :: a -> b => F f :: F a -> F b
    * h = g ° f => F h = F g ° f = F g ° F f
    * id_a => id_Fa
    * preserves structure
* Collection of all morphisms from X to Y: hom set Hom(X,Y)
* see also: https://en.wikipedia.org/wiki/Hom_functor
* Faithful functor: injective on hom-sets
* Full functor: surjective on hom-sets
* Endo-functor: maps to the same category
* Identity functor: in category C, written 1_C or id_C, maps an object to itself and a morphism to itself


# Lecture 10.1: Monads

* https://www.youtube.com/watch?v=gHiyzctYqZ0&
* 

