# Make a hidden cubic appear

Henry Shin · Refactor · Mechanism calculus · Revised November 5, 2026

How can quadratic equations force a cubic obstruction?

Begin with: Polynomial expansion and coefficients of a power series.

Two quadratic equations can hide a cubic obstruction. The useful move is to let the first equation choose a coordinate, then eliminate that coordinate from the second. The order at which a motion fails becomes a coefficient we can calculate.




## 1. Start with the equations, not their degrees

Work over a field k, such as the rationals, and study the origin in



```text
y − x² = 0,
xy = 0.
```

The first equation says y = x². The second says that their product must vanish. Both displayed equations are quadratic. That observation does not tell us which order of motion will first fail.


To test a motion, substitute polynomials with no constant term into the equations and keep only a chosen number of powers of a symbol ε. In k[ε]/(ε^{N+1}), equality means equality of coefficients through degree N. This is a finite calculation; no convergence of a series is involved.




## 2. Let the solvable equation choose the coordinate

The first equation determines y once x is known. Keep x, and look for a new second coordinate that is zero precisely when this equation holds. A translation z = y + h(x) is a useful form to try: it has the polynomial inverse y = z − h(x), whatever polynomial h we choose. On the graph y = x², the requirement z = 0 reads x² + h(x) = 0. It determines the translation:



```text
z = y − x²,
y = z + x².
```

The choice of a translation was ours; its correction h(x) = −x² was fixed by the job we gave it. The displayed inverse proves that no information was lost. The first equation is now z = 0. Substitution turns the other one into xz + x³ = 0. To remove its dependence on the already constrained coordinate, subtract x times the first equation from the second:



```text
(z, xz + x³)  ↔  (z, x³).
```

This operation is reversible: add x times the first equation to recover the former second equation. Thus the original solution problem is exactly z = 0, x³ = 0, over every test algebra. The cubic was produced by carrying out the elimination.


Over the field k itself, these equations have only the origin as a solution. Replacing x³=0 by x=0 would preserve that set of points, but lose the problem we want to study: in a ring with nilpotents, x³ can vanish while x and x² survive. The eliminated equation retains precisely that information.




## 3. Watch the first two tests pass

Start with x = a₁ε, y = b₁ε and impose ε² = 0. The first equation forces b₁ = 0; the product equation imposes nothing further. Every value of a₁ passes this first-order test.


Keep one more order and allow every possible correction:



```text
x = a₁ε + a₂ε²,
y = b₂ε²             modulo ε³.
```

The first equation forces b₂ = a₁². The second still vanishes, since xy starts at degree three. The coefficient a₂ is free. In particular, the direction a₁ = 1 continues through second order as x = ε, y = ε².




## 4. Keep the term that can no longer be repaired

Now retain degree three and permit arbitrary new coefficients:



```text
x = a₁ε + a₂ε² + a₃ε³,
y = a₁²ε² + 2a₁a₂ε³  modulo ε⁴.
```

The formula for y is forced by y = x². Multiplication then gives


xy = a₁³ε³ modulo ε⁴.


Neither a₂ nor a₃ changes this coefficient. There is no additional free y-coefficient to use: the first equation has already determined it. Since k is a field, a nonzero a₁ has nonzero cube. Every nonzero first-order direction therefore passes the second-order test and fails the third-order test.


For the earlier example, x = ε, y = ε² gives xy = ε³. The failure has a location and a reason: a product of three first-order copies survives, while later corrections arrive too late to affect it.




## 5. Derive a procedure for any truncation

Write x = ∑aᵢεⁱ and y = ∑bᵢεⁱ, with indices starting at one and ending at the desired order. Comparing coefficients in the first equation gives



```text
bₙ = ∑ aᵢaⱼ       over i + j = n,
rₙ = ∑ aᵢaⱼaₗ     over i + j + l = n.
```

Choose the aᵢ, compute each bₙ by the first sum, and test the second sums through the retained order. These finite convolutions are precisely the coefficients of y = x² and xy = x³. They produce all solutions over the chosen truncated algebra, including motions whose first coefficient is zero.


Over the field k, we can read all these tests at once. If the first nonzero term of x is a_dε^{d}, before truncation the cube has leading term a_d³ε^{3d}. This term survives exactly when 3d ≤ N. Hence a nonzero truncated motion satisfies the equations through degree N exactly when 3d > N, with y = x². Equivalently, the first ⌊N/3⌋ coefficients of x must vanish; every later coefficient is free. The zero motion is included by taking all coefficients zero.


At every positive truncation order there are nonzero solutions, but no nonzero formal power-series solution exists. A nonzero series has a first nonzero coefficient at some finite degree d, and its cube is detected by degree 3d. Thus the only compatible choice through all orders is x=y=0. Finding a solution at each order is different from extending one fixed nonzero solution indefinitely.




## Further context

[Make first order exact](https://refactor.press/refactors/first-order.html) supplies the earlier tangent test. Here an additional successful order still did not guarantee a full motion. A different question is whether a [change of coordinates can make two laws agree](https://refactor.press/refactors/coordinate-repair.html); [When a Formal Logarithm Fails](https://refactor.press/notes/when-a-formal-logarithm-fails.html#identity-and-obstruction) carries that coefficient calculation into a filtered complex. These are different lifting problems, with a common need to keep the residual and every available correction.


The [earlier extended treatment](https://refactor.press/notes/what-a-derivative-retains.html#nonlinear-elimination) also polarizes the cubic and expresses it using higher operations.


For the general language of lifting through a quotient with square-zero kernel, see [The Stacks Project, Definition 10.138.1](https://stacks.math.columbia.edu/tag/00TI). Each passage from degree N to degree N+1 is such a lifting problem.
