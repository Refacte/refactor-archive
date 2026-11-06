# Find the quantity that moves on its own

Henry Shin · Refactor · Mathematical companion · November 3, 2026 · Revised November 5, 2026

Choose a weighted difference, derive the weight, and turn a coupled recurrence into a single update.

A recurrence can be easy to iterate and still conceal the quantities that evolve independently. We will find one of those quantities by asking what its update would have to look like.



## The coupled update

Work with real sequences satisfying s_{n+1} = s_{n} + s_{n−1} for n ≥ 1. To obtain the next value, we keep two previous values. With s₀ = 0 and s₁ = 1, this gives 0, 1, 1, 2, 3, 5, 8, ….


An ordinary difference gives s_{n+1} − s_{n} = s_{n−1}. That identity exposes the update, but the old sequence remains on the right. Can a modified difference update using only itself?



## Design a quantity

We already store two values, so first try a linear combination of them. A multiple of s_{n−1} alone would update to a multiple of the independently variable s_{n}. For a candidate involving s_{n}, rescaling does not affect whether it updates by scalar multiplication. Normalize that coefficient to one, leaving one unknown weight:


u_{n} = s_{n} − c s_{n−1}.


Substitute the recurrence and then replace s_{n} by u_{n} + c s_{n−1}:


u_{n+1} = (1 − c)s_{n} + s_{n−1}

= (1 − c)u_{n} + (1 + c − c²)s_{n−1}.


We want the rule to work for arbitrary initial values, so the remaining coefficient of s_{n−1} must vanish. This requires 1 + c − c² = 0. The decision to try a linear combination came first; this equation determines which weights make it work.


Interactive weighted-difference exploration is available in the web edition.

## Two independent motions

The two possible weights are φ = (1 + √5)/2 and ψ = (1 − √5)/2. They satisfy φ + ψ = 1 and φψ = −1.


Use both weights:


u_{n} = s_{n} − φs_{n−1}, &nbsp; u_{n+1} = ψu_{n},

v_{n} = s_{n} − ψs_{n−1}, &nbsp; v_{n+1} = φv_{n}.


The new quantities each follow a one-step multiplication rule. We can recover the old value because φ − ψ = √5 ≠ 0:


s_{n} = (φv_{n} − ψu_{n})/(φ − ψ).


With the initial values above, u₁ = v₁ = 1. Repeated multiplication and reconstruction therefore give


s_{n} = (φⁿ − ψⁿ)/√5.


The closed formula arrives after we have explained the independent motions. For arbitrary initial values, only the starting values of u and v change.



## Recover the two stored values

The difference of the two new quantities recovers the previous value:


s_{n−1} = (v_{n} − u_{n})/(φ − ψ).


Together with the formula for s_{n}, this gives an inverse change of coordinates on the two stored values. In matrix language, these are coordinates that diagonalise the update. Each coordinate was found by requiring its dependence on the other one to disappear.



## What the two motions predict

For the Fibonacci initial values, the φ-motion grows while the ψ-motion decays and alternates in sign. The formula therefore gives an exact error estimate for keeping only the growing term:


|s_{n} − φ^{n}/√5| = |ψ|^{n}/√5 < 1/2 &nbsp; (n ≥ 0).


Since s_{n} is an integer, it is the nearest integer to φ^{n}/√5. A formula for the dominant motion has become an exact recovery rule because the discarded motion has a bound.


The same update can behave quite differently for other initial data. If s₀ = 1 and s₁ = ψ, then v₁ = 0: the growing motion is absent, and s_{n} = ψ^{n} tends to zero. The two multipliers describe the available motions; the new coordinates of the initial data tell us which ones actually occur.



## When separation needs more

For s_{n+1} = A s_{n} + B s_{n−1}, the same experiment gives


u_{n+1} = (A − c)u_{n} + (Ac − c² + B)s_{n−1}.


Thus the weight condition is c² − Ac − B = 0. Distinct roots let us recover two independent quantities. A repeated root does not give two independent coordinates; the reconstruction step reveals exactly where this version of the method stops. Over the real numbers the roots may also require complex coordinates.


For example, s_{n+1} = 2s_{n} − s_{n−1} has only the weight c = 1. The first difference is constant, so s_{n} = s₀ + n(s₁ − s₀): the sequence is affine in n, including the constant case.


We can also see this loss of independent coordinates as a limit. For a real parameter δ ≠ 0, the recurrence with A = 2, B = δ² − 1 has multipliers 1 ± δ. With s₀ = 0 and s₁ = 1,


s_{n} = ((1+δ)^{n} − (1−δ)^{n})/(2δ).


For each fixed n, expanding the numerator shows that this tends to n as δ → 0. The sequence has a regular limit even though the inverse coordinate change divides by a vanishing separation. Near a repeated root, errors in the separated coordinates can be amplified by that division. Exact decoupling and accurate numerical reconstruction are separate questions.



## Further refactors

[A subgroup becomes a machine](https://refactor.press/refactors/words-to-machine.html) makes a different kind of change: expressions become paths and a local folding rule produces a finite test.


[The archived Fourier study](https://refactor.press/notes/fourier-symmetry-and-reconstruction.html#fourier:section) develops quantities that transform simply under permutations, then uses their products to recover polynomial roots. [How far can a change of coordinates go?](https://refactor.press/refactors/coordinate-repair.html) explores a correction that succeeds once and then meets a provable obstruction.



### Sources and another route

This is the standard diagonalization method for a second-order recurrence, derived here by finding the linear quantities first. Gilbert Strang’s [lecture on diagonalization and powers of a matrix](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-22-diagonalization-and-powers-of-a/) develops the matrix formulation. Herbert S. Wilf’s [generatingfunctionology](https://www2.math.upenn.edu/~wilf/DownldGF.html), second edition (1994), §1.3, reaches the Fibonacci formula by a generating function instead. Comparing the routes shows the same two multipliers as eigenvalues in one description and reciprocals of poles in the other.
