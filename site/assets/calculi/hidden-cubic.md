# Make a hidden cubic appear

Henry Shin · Refactor · Mechanism calculus · Revised November 6, 2026

How can quadratic equations force a cubic obstruction?

Begin with: Polynomial expansion and coefficients of a power series.

Which small motions satisfying a first-order test can be continued? Two quadratic equations give a complete example: every tangent direction passes a second test, but a cubic term prevents any nonzero direction from passing the third. To find that term, measure the error in the equation we can solve, then eliminate it from the other equation.




## 1. Ask which motions can be continued

Work over a field k, such as the rationals, and study the origin in



```text
y − x² = 0,
xy = 0.
```

The first equation determines y = x². The second requires the product to vanish. Over the field itself the only solution is the origin. We want to retain more than that point: which infinitesimal departures from it satisfy both equations, and how long can each departure continue?


To make the question exact, an order-N motion, with N ≥ 1, means a pair of polynomials with no constant term, considered in k[ε]/(ε^{N+1}). Here ε^{N+1} = 0, and equality means equality of coefficients through degree N. The motion passes the order-N test if both equations vanish in this ring. An extension to a higher order must keep every coefficient already chosen. These are finite algebraic tests, not approximate numerical solutions; no convergence is involved.


Both equations have degree at most two. That alone does not tell us when an extension will fail: substituting the value of one variable into the other equation can change the degree we need to inspect.




## 2. Use the solvable equation as a coordinate

The first equation already allows us to substitute y=x² into the second. To record both the value of x and the error in the first equation, keep x and measure y relative to its prescribed height x²:



```text
z = y − x²,
y = z + x².
```

Because the first equation contains y with coefficient one, its error can serve as the second coordinate: once x and z are known, the displayed inverse recovers y. The equation itself is now z=0.


Substitution turns the second equation into xz+x³=0. The term xz records its dependence on the first equation’s error. Remove that part by subtracting x times the first equation:



```text
(z, xz + x³)  ↔  (z, x³).
```

This equation operation is reversible too: add xz back. Consequently, for every commutative k-algebra A, the solutions are exactly



```text
t ∈ A with t³ = 0
       ↔ (x, y) = (t, t²).
```

The maps are explicit: read off t = x, or form (t,t²). They still agree after applying any homomorphism of test algebras. This is the bridge back to the original equations, including their solutions with nilpotents. A nilpotent element has some positive power equal to zero; the element itself need not be zero.


Replacing x³ = 0 by x = 0 would retain the ordinary field-valued point and discard these tests. For example, (x,y) = (ε,ε²) solves the original equations when ε³ = 0, although x ≠ 0. The cubic records information the point set cannot show.




## 3. Let every available correction take part

At first order write x = a₁ε and y = b₁ε, with ε² = 0. The first equation forces b₁ = 0; the product equation imposes nothing further. Thus the tangent directions are the pairs (a₁,0).


To extend such a direction, keep its coefficients and add the most general terms of the next degree:



```text
x = a₁ε + a₂ε²,
y = b₂ε²              modulo ε³.
```

There is no missing linear term in y: the previous test already forced it to vanish. Now y = x² forces b₂ = a₁², while xy starts at degree three and is discarded. The new coefficient a₂ remains free. Every tangent direction therefore extends through degree two. For a₁ = 1, one such extension is (ε,ε²).




## 4. Expose the coefficient no correction can change

Retain degree three. Before imposing the equations the new coefficients are arbitrary. The first equation determines every y-coefficient, giving



```text
x = a₁ε + a₂ε² + a₃ε³,
y = a₁²ε² + 2a₁a₂ε³   modulo ε⁴.
```

Multiply, keeping exactly the retained degrees:



```text
xy = a₁³ε³            modulo ε⁴.
```

To obtain degree three, the factor from x must have degree one and the factor from y degree two. Every term involving a₂ or a₃ arrives later. There is no free y-coefficient left to adjust. Thus a₁³ is an obstruction: it must vanish, and none of the allowed corrections can change it.


In a field, a₁³ = 0 forces a₁ = 0. Every nonzero tangent direction passes the second-order test and fails the third. Our example (ε,ε²) now fails because xy = ε³ ≠ 0. This works in every characteristic: the calculation never divides by two or three.




## 5. Derive the test for one more coefficient

The failed third-order extension suggests repeating the same question at every order: which equation errors can the new coefficients repair? Suppose (x,y) is a solution through degree N ≥ 1. Choose its polynomial representatives of degree at most N. Keeping every old coefficient leaves exactly one new coefficient in each variable, so every possible lift has the form



```text
x′ = x + cε^{N+1},
y′ = y + bε^{N+1}   modulo ε^{N+2}.
```

To find what these corrections can change, compute the old equations one degree further. Write [ε^{j}]p for the coefficient of degree j in p, and name the two newly visible errors:



```text
r = [ε^{N+1}](y − x²),
s = [ε^{N+1}](xy).
```

All lower errors already vanish. Since x and y have zero constant terms, multiplying either by a correction of degree N+1 only affects degrees N+2 and higher. Consequently



```text
y′ − (x′)² = (r + b)ε^{N+1},
x′y′ = sε^{N+1}       modulo ε^{N+2}.
```

The new y-coefficient repairs the first equation by taking b=−r. Neither new coefficient can change s. A lift therefore exists exactly when s=0; when it exists, b is forced and every c∈k is allowed. For (x,y)=(ε,0) at order one, the errors are (r,s)=(−1,0), so the next y-coefficient is one. For (ε,ε²) at order two, they are (0,1), so no correction works.


Now recover the cubic test from these original equations. The old equation y−x²=0 holds through degree N; multiplying its error by x raises the first possible degree to N+2. Hence xy and x³ have the same coefficient at degree N+1. Also, our chosen representative y has no term of that degree, so −r is the corresponding coefficient of x². We have derived



```text
b = [ε^{N+1}]x²,
lift exists ⇔ [ε^{N+1}]x³ = 0.
```



## 6. Calculate all motions and their stopping orders

Repeating the one-step test gives a finite procedure for all the coefficients. Write x = ∑aᵢεⁱ and y = ∑bᵢεⁱ, with positive indices through N. Then



```text
bₙ = ∑ aᵢaⱼ       over i + j = n,
sₙ = ∑ aᵢaⱼaₗ     over i + j + l = n.
```

An empty sum is zero. Choose the aᵢ, compute the forced bₙ, and test sₙ = 0 through degree N. These are exactly the coefficients of y = x² and the remaining equation x³ = 0, so necessity and sufficiency both follow from the reversible elimination.


Over our field, all the tests can be read at once. If the first nonzero term of x is a_{d}ε^{d}, its cube starts with a_{d}³ε^{3d}. At degree 3d, each of the three factors must contribute its first term; using any later term raises the degree. The coefficient is nonzero. Therefore



```text
x³ = 0 modulo ε^{N+1}
       ⇔ 3d > N.
```

Equivalently, aᵢ = 0 for 1 ≤ i ≤ ⌊N/3⌋, every later x-coefficient is free, and y = x² is forced. Taking all coefficients zero includes the zero motion. A zero tangent direction need not mean a zero motion: x = ε², y = ε⁴ survives through degree five and fails at degree six.



The fixed-order classification makes the schedule explicit. If N+1 is not divisible by three, every order-N solution lifts. If N+1 = 3q, the new test is a_{q}³ = 0, or a_{q} = 0. These are the only stages at which a new obstruction appears.


More generally, a nonzero order-N solution whose first nonzero x-term has degree d extends through every order M with N ≤ M < 3d: choose the added x-coefficients freely and set y = x². It cannot extend through degree 3d. The leading coefficient is already fixed, so its nonzero cube cannot be repaired.


There are nonzero solutions at every positive finite order—for example, choose x = ε^{N} and set y = x² in that truncation. But those choices change with N. A compatible sequence fixes each coefficient once and for all, hence defines formal series. Any nonzero such x has a first nonzero term and fails by degree 3d. The only compatible solution through all orders is x = y = 0.





## 7. Extract the rule behind the example

What made this work was a solved graph equation, not the particular exponent two. Suppose the equations are



```text
y − f(x) = 0,
g(x,y) = 0,
```

where f ∈ k[x], g ∈ k[x,y], f(0) = 0, and g(0,0) = 0. Keeping x and measuring the error again suggests z = y − f(x). What remains of the second equation when that error is zero must be R(x) = g(x,f(x)). We can remove everything else exactly:



```text
g(x,y) = R(x) + (y − f(x))Q(x,y),
R(x) = g(x,f(x)).
```

Here Q is a polynomial, not a formal quotient with a potentially zero denominator. To construct it, write g = ∑cⱼ(x)yʲ and subtract its value at y=f(x), term by term. Each difference is divisible because



```text
yʲ − fʲ = (y − f)
  · ∑ y^{j−1−r}f^{r}   over 0 ≤ r < j,
```

for j ≥ 1. This identity supplies Q; evaluation at y=f(x) forces R. Subtracting Q times the first equation is reversible, so the solutions over every commutative test algebra are exactly y=f(x), R(x)=0.


The remainder gives a local continuation test too. If R is nonzero, let m be its smallest exponent with nonzero coefficient, and write R(x)=x^{m}u(x), where u(0)≠0. For a truncated motion at the origin, x is nilpotent and u(x) is invertible. Indeed, write u(x)=u(0)(1+w). Since w is a multiple of x, it is nilpotent too; a finite geometric sum in −w gives the inverse. Thus R(x)=0 is equivalent to x^{m}=0 in these tests. For coefficients in our field k, the same leading-term proof gives the criterion md>N for nonzero x starting in degree d. If R is identically zero, there is no remaining constraint: every x is allowed and y=f(x) follows.



### A degree-four remainder can still give a cubic obstruction

Change only the second equation to xy − y²=0, keeping y=x². Substitution now produces a quartic term as well as a cubic one. The rule calculates



```text
xy − y² = (y − x²)(x − y − x²)
          + x³(1 − x).
```

So Q=x−y−x² and R=x³(1−x). For an order-N motion, 1−x has inverse 1+x+⋯+x^{N}, since x^{N+1}=0. This pair has exactly the same allowed x-motions and cubic obstruction at the origin. Over the field as a whole it also has the point (1,1); the invertibility argument was deliberately local to the nilpotent tests at the origin.


The reusable steps are now explicit: solve one relation, measure its error, construct the remainder, and inspect the first coefficient that survives. This does not supply an elimination algorithm for an arbitrary system with no solved graph relation. Even here the coefficient classification uses the field hypothesis. Over A=k[η]/(η³), the nonzero coefficient η has zero cube, so x=ηε, y=η²ε² passes the third-order test despite its nonzero first coefficient. The exact elimination and convolution formulas still hold there; the field-level nonvanishing argument does not.




## Further context

[Make first order exact](https://refactor.press/refactors/first-order.html) supplies the tangent test used at the start. Here the new question was which residual appears next and which still-free coefficients can change it. A different use of successive corrections is to ask whether a [change of coordinates can make two laws agree](https://refactor.press/refactors/coordinate-repair.html); [When a Formal Logarithm Fails](https://refactor.press/notes/when-a-formal-logarithm-fails.html#identity-and-obstruction) carries that calculation into a filtered complex.


The [earlier extended treatment](https://refactor.press/notes/what-a-derivative-retains.html#nonlinear-elimination) also polarizes the cubic and expresses it using higher operations. Those provide further language for the mechanism; the elimination and continuation proofs here are complete without them.


For the general language of lifting through a quotient with square-zero kernel, see [The Stacks Project, Definition 10.138.1](https://stacks.math.columbia.edu/tag/00TI). The map from order N+1 to order N has kernel generated by ε^{N+1}, whose square vanishes. Our explicit failed third-order lift is one instance of the failure of that lifting property.
