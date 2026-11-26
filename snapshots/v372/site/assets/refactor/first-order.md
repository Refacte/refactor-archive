# Make first order exact

Henry Shin · Refactor · Mathematical companion · November 3, 2026 · Revised November 5, 2026

Choose an arithmetic in which first-order change is exact, then restore the next term to expose a lifting obstruction.

The product rule can be made into exact arithmetic. Replace a small displacement by a symbol whose square is zero. Then change that arithmetic to keep one more order, and the term that disappeared becomes a test of whether a motion can continue.




## 1. Start before taking a limit

A rectangle has sides x, y. Change them by u, v. Its area changes by the exact identity


(x+u)(y+v) − xy = xv + yu + uv.


The two strips contribute xv + yu; the corner contributes uv. When both displacements scale by a small parameter, the corner scales by its square. That is why it disappears from first-order variation.


To retain just constant and first-order terms, store the pair of coefficients (a,b) from a+bε. Multiplying two such expressions produces constant term ac and linear term ad+bc; the remaining term has degree two. Forgetting terms of degree two or more is consistent with subsequent addition and multiplication, since those operations cannot lower their degree. Over a field k, this defines the multiplication rule


(a+bε)(c+dε) = ac + (ad+bc)ε.


In this arithmetic the pair (0,1), abbreviated ε, is nonzero but has square zero. These are the dual numbers. The rule ε²=0 records exactly which coefficients we chose to retain.




## 2. Let the arithmetic produce the rule

For a polynomial f, expand every monomial after substituting x+uε. Terms with two or more copies of ε vanish. Among the factors of x^{m}, there are exactly m choices for the one displaced factor. Therefore


f(x+uε) = f(x) + u f′(x)ε.


Multiplying two such expressions gives (fg)′ = f′g + fg′. Substituting the expression for g(x+uε) into f gives (f∘g)′(x) = f′(g(x))g′(x). Product and chain rules are consequences of multiplication and substitution in the dual numbers.


This calculation works in every characteristic. For example, in characteristic three, (x+uε)³ = x³: the formal derivative of x³ vanishes. It does not follow that the polynomial is constant. The test retains only first-order information. For smooth real functions, Taylor's remainder connects this algebraic calculation with the usual limiting derivative.




## 3. Turn a tangent direction into a substitution

Now consider the equation xy = 0 at the origin. It describes two crossing axes. Try the displacement x = aε, y = bε. Its product is zero because ε² = 0. Every pair (a,b) passes the first-order test.


Even (1,1) passes, although it points along neither axis. The test has not made an error: the equation has no linear term at the origin, so first order imposes no restriction. To ask whether the direction can continue, we need a test that retains the next term.




## 4. Restore the corner and try to repair it

Use k[ε]/(ε³), where ε² survives but ε³ vanishes. Allow arbitrary second-order corrections:


x = aε + rε², &nbsp; y = bε + sε².


The product is xy = abε². Both correction coefficients disappear from this order: multiplying either correction by the other coordinate introduces at least ε³. A lift exists precisely when ab = 0. The mixed direction (1,1) cannot be repaired. Its corner is an obstruction.


Compare the smooth curve xy = 1 at (1,1). The first-order motion x = 1+tε, y = 1−tε has product 1−t²ε². Allow corrections rε² and sε². The new product is 1+(r+s−t²)ε², so the condition is r+s=t². There are many choices; taking r=0 and s=t² gives


(1+tε)(1−tε+t²ε²) = 1 &nbsp; modulo ε³.


The nonzero base coordinate lets the extra strip cancel the corner. At the node, both base coordinates are zero and that repair is unavailable.




## 5. Keep the next order when it matters

The two examples have the same repair equation. For a polynomial equation f(x,y)=0 at a point p, write J_{p}(r,s)=f_{x}(p)r+f_{y}(p)s for its linear part. Suppose a direction v passes the first-order test, so J_{p}(v)=0. Let Q_{p}(v) be the coefficient of ε² in f(p+εv). Substituting a correction w=(r,s) gives


f(p+εv+ε²w) = ε²(J_{p}(w)+Q_{p}(v)) modulo ε³.


A second-order lift exists exactly when J_{p}(w)=−Q_{p}(v) can be solved. At the node, J_{0}=0 and Q_{0}(a,b)=ab, so no correction can change the residual. At (1,1) on the hyperbola, J_{p}(r,s)=r+s, so every residual can be cancelled. Defining Q_{p} by coefficient extraction avoids division by two and works in every characteristic.


At each later order, the same method asks which residual has appeared and which still-free coefficients can change it. Passing the first-order test is only the first step of that calculation.


Next, [make a hidden cubic appear](https://refactor.press/calculi/hidden-cubic.html): a direction passes both first and second order, but fails at third order. Then [test a change of coordinates](https://refactor.press/refactors/coordinate-repair.html), where the same coefficient method asks whether two operations can be made to agree.


Continue with [the universal first-order construction](https://refactor.press/notes/what-a-derivative-retains.html#kahler), [the node and its smoothing](https://refactor.press/notes/what-a-derivative-retains.html#node-and-smoothing), or [the complex that organises directions and obstruction targets](https://refactor.press/notes/what-a-derivative-retains.html#cotangent-complex). The separate [oriented-boundary calculation](https://refactor.press/notes/what-a-derivative-retains.html#boundary) explains cancellation by signs; it is a different operation from discarding quadratic terms.


Sources. The dual-number description of tangent vectors is standard; see [The Stacks Project, §33.16, “Tangent spaces”](https://stacks.math.columbia.edu/tag/0B28). The general lifting condition is developed in [§10.138, “Formally smooth maps”](https://stacks.math.columbia.edu/tag/00TH).
