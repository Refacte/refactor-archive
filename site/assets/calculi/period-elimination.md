# Eliminate one integration variable

Henry Shin · Refactor · Mechanism calculus · Revised November 5, 2026

Which part of a graph integral can be reduced by an explicit local calculation?

Begin with: One-variable integration and nonnegative improper integrals.

A graph integral can conceal a very simple first move. Organize its spanning-tree polynomial by one edge. That parameter becomes linear, and an exact change of scale removes it. A second elimination shows where logarithms enter and why an apparent denominator can be removable.




## Build the polynomial from its finite states

Let G be a finite connected graph, with parallel edges allowed. Give each edge a positive real parameter α_{e}. A spanning tree joins all vertices without a cycle. Define



```text
Ψ_G(α) = Σ_{T a spanning tree of G} ∏_{e not in T} α_e.
```

The product is over edges outside the tree. If G has m edges and n vertices, every term has degree r = m − n + 1. No variable occurs more than once in a term, and the polynomial is positive when all parameters are positive.


For two vertices joined by two parallel edges, either edge alone is a spanning tree. Thus Ψ = α_{1} + α_{2}. For three parallel edges, Ψ = α_{1}α_{2} + α_{1}α_{3} + α_{2}α_{3}. These examples fix the convention.




## Expose one parameter by splitting the trees

The defining sum tells us where to look for a first integration variable: every parameter occurs at most linearly. Fix all parameters except one, and the denominator becomes a power of an affine expression. No special edge has yet been singled out. Choose an edge e that is neither a loop nor a bridge, so that both its constant and linear parts will be nonzero, and write t = α_{e}. Split the spanning trees into those that omit e and those that contain it.


A tree omitting e is a spanning tree of the graph with e deleted; its term has an extra factor t. Contracting e in a tree containing it gives a spanning tree of the contracted graph. Conversely, each contracted tree lifts uniquely to a tree containing e. This proves



```text
Ψ_G = tF + H,       F = Ψ_{G without e},       H = Ψ_{G with e contracted}.
```

Deletion leaves a connected graph because e is not a bridge; contraction of the non-loop edge also leaves a connected graph. Both have spanning trees, so F and H are positive at every positive choice of the remaining parameters. A loop created by contraction cannot enter a spanning tree; its parameter simply remains in every corresponding term.




## Derive and execute the first elimination

Assume r ≥ 1 and m = 2r. Fix one edge parameter α_{j} = 1. The particular integral considered here is



```text
P(G) = ∫_{(0,∞)^{m−1}} 1 / Ψ_G(α with α_j=1)²  ∏_{i≠j} dα_i.
```

Assume this integral is finite, and choose the preceding edge e different from j. These assumptions specify the integral being reduced; convergence is not asserted for every graph. The balance m = 2r will also let us verify below that choosing which parameter to fix at one does not change the answer.


Hold the remaining positive parameters fixed. Instead of finding a new antiderivative for each pair F, H, normalize the affine expression to H(1 + u). Comparing the constant parts fixes the outside factor to be H; comparing the variable parts then requires tF = Hu. Thus, within this normalization, the scale is determined:



```text
u = tF/H,       t = (H/F)u,       dt = (H/F)du.
```

The factors now cancel explicitly:



```text
∫₀^∞ dt/(tF+H)²
 = 1/(FH) ∫₀^∞ du/(1+u)²
 = 1/(FH).
```

The last integral is 1, by the antiderivative −1/(1 + u). Our integrand is nonnegative, so Tonelli's theorem permits this integration first, even as an equality of possibly infinite integrals. The assumed finiteness says that the remaining integral of 1/(FH) is finite. One variable has disappeared, and the two simpler graph polynomials are the new denominators.




## Complete the two-edge example

Take the graph with two vertices and two parallel edges. It has r = 1 and m = 2. Set α_{2} = 1 and write t = α_{1}. Both the deleted graph and the contracted graph have tree polynomial 1 at this parameter value, so F = H = 1. The entire calculation is



```text
P(G) = ∫₀^∞ dt/(t+1)² = 1.
```

The integrand is bounded near 0 and decays like t^{−2} at infinity. This example satisfies the convergence requirement by direct inspection.




## Why fixing another parameter gives the same integral

All the parameters can be rescaled together, but the measure and denominator need to transform compatibly before we can discard that scale. Starting in the chart α_{j} = 1, choose another edge k and set β_{i} = α_{i}/α_{k}. Then β_{k} = 1 and β_{j} = 1/α_{k}. This is a bijection between the two positive charts.


Its absolute Jacobian on the m−1 free coordinates is α_{k}^{−m}: the reciprocal coordinate contributes α_{k}^{−2}, and each of the other m−2 coordinates contributes α_{k}^{−1}. Homogeneity gives Ψ_{G}(β) = α_{k}^{−r}Ψ_{G}(α). Consequently



```text
Ψ_G(β)⁻² ∏_{i≠k} dβ_i
  = α_k^{2r−m} Ψ_G(α)⁻² ∏_{i≠j} dα_i
  = Ψ_G(α)⁻² ∏_{i≠j} dα_i.
```

The last equality is precisely where m = 2r is used. Change of variables therefore identifies the integrals in all these charts, including their finiteness. Choosing the fixed parameter is a computational convenience; choosing the subsequent elimination order still changes the intermediate expressions.




## See why the next variable can create a logarithm

Each remaining parameter occurs at most linearly in F and H. For a second variable s, suppose at the fixed remaining parameters that



```text
F = as+b,       H = cs+d,       a,b,c,d > 0.
```

The denominator now has two linear factors. Seek a sum with one factor in each denominator and unknown constant numerators:



```text
1/[(as+b)(cs+d)] = U/(as+b) + V/(cs+d).
```

Multiplying through makes the requirements visible: the numerator must have no s term and constant term one. Hence



```text
Uc + Va = 0,       Ud + Vb = 1.
```

Write D = ad − bc. When D ≠ 0, these two equations give U = a/D and V = −c/D. The resulting summands are logarithmic derivatives:



```text
1/[(as+b)(cs+d)]
 = (1/D)[a/(as+b) − c/(cs+d)]
 = (1/D) d/ds log((as+b)/(cs+d)).
```

Each logarithm separately grows at infinity, but their difference has a finite limit. Keep them together when evaluating the improper integral. The ratio (as + b)/(cs + d) tends to a/c at infinity and equals b/d at zero. Therefore



```text
∫₀^∞ ds/[(as+b)(cs+d)] = log(ad/bc)/(ad−bc).
```

For example, a = 2, b = 1, c = 1, d = 3 gives log(6)/5. The expression is positive even when D is negative, because its numerator then has the same sign.




## Resolve the apparent exceptional denominator

If ad = bc, the preceding expression reads 0/0, but the original integral is still finite. The two linear factors are proportional: cs + d = (c/a)(as + b). Direct integration gives



```text
∫₀^∞ ds/[(as+b)(cs+d)] = 1/(bc) = 1/(ad).
```

This is also the continuous limit: write ad/bc = 1 + D/bc, and use log(1 + x)/x → 1. For instance, factors 2s + 1 and 6s + 3 give 1/6.


Positivity of all four coefficients matters to this two-factor formula. A graph polynomial can have a zero coefficient, so it must be checked before this step is used; endpoint convergence then requires a separate examination. The first elimination needs only F, H > 0 at the remaining positive parameters.




## What remains after elimination

The first change of variables turns a graph integral into an integral of a product of two explicitly computed denominators. The second can replace a rational integrand by a logarithm divided by an explicitly computed polynomial, with its removable case resolved. Further eliminations must handle the factors and endpoint behavior that these actual operations produce.


The first edge was not uniquely determined: every edge satisfying the stated conditions permits the same first integration. For further progress, the actual polynomials F and H matter. A useful next choice is a variable for which their linear factors and the combination ad − bc stay manageable. The formulas above let us inspect that choice before carrying out the integration, rather than assuming that all elimination orders are equally helpful.



### Sources and scope

The spanning-tree convention for Ψ_{G}, its contraction–deletion identity, and the study of successive integrations belong to the established theory of graph periods. See Francis Brown, [On the Periods of Some Feynman Integrals](https://arxiv.org/abs/0910.0114v2), arXiv:0910.0114v2, especially §0.1, §2.2, Lemma 14, and §11.2.1 for the first elimination. The changes of variables and two-factor integral used here are derived above. Brown’s general convergence and linear-reducibility results have additional hypotheses; the calculation here assumes finiteness and makes no claim that every graph permits a complete sequence of these elementary integrations.



## Source and optional continuation
For the earlier treatment and further context, see [What a Boundary Map Can Prove](https://refactor.press/notes/what-a-boundary-map-can-prove.html#sec-direct-period-elimination) in the Tensorgami archive.
