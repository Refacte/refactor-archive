# Cancel the unwanted edge sets

Henry Shin · Refactor · Mechanism calculus · Revised November 5, 2026

Why do only broken-circuit-free terms survive the graph polynomial?

Begin with: Finite graphs, subsets, and inclusion–exclusion.

A coloring polynomial begins as a sum over every edge subset, with alternating signs. Flipping one edge would reverse a sign, but a cancellation requires two more things: the weight must stay fixed, and the next flip must undo the first. These requirements lead to an ordered connectivity test. Only after constructing that test will we identify the subsets left over.




## Make the coloring problem into a sum of states

Let G be a finite simple graph on n vertices, and fix a total order on its edges. For a positive integer q, a proper coloring assigns one of q colors to each vertex, with different colors at the endpoints of every edge.


Call an edge bad when its endpoints have the same color. Inclusion–exclusion over the bad-edge conditions gives



```text
χ_G(q) = Σ_{S ⊆ E} (−1)^|S| q^{c(S)}.
```

Here c(S) counts the connected components of the graph with all the vertices and just the edges of S, including isolated vertices. Imposing equality on every edge of S forces one color on each component; those components can choose their colors independently. This proves the formula and shows why it is a polynomial in q.


Our states are now edge subsets. A state has a sign, (−1)^{|S|}, and a weight, q^{c(S)}. We need a move that changes the sign without changing that weight.




## Invent the toggle from the required invariance

The sign asks for the smallest possible change: toggle one edge. The weight asks that its endpoints already be joined by another selected path, so that adding or removing it leaves all connected components unchanged. Call such an edge redundant for the moment, allowing it to be present or absent.


A tempting rule is to toggle the least redundant edge. It need not reverse itself. Take a triangle with edge order 1 < 2 < 3 and selected set {1, 2}. Only edge 3 is redundant, so the rule adds it. In the resulting full triangle every edge is redundant, so the next move removes edge 1 instead of edge 3.


The problem is that adding a later edge changed an earlier edge's test. We can prevent that by making the test for an edge inspect only smaller edges. Then toggling an edge cannot change any test already passed over. This suggests the following restricted definition.


Call an edge e available for S if its endpoints are connected using the selected edges strictly smaller than e. Availability does not depend on whether e itself belongs to S. If some edge is available, choose the least available one and toggle its membership:



```text
Φ(S) = S △ {e}.
```

The smaller-edge path still exists after the toggle, so the components are unchanged. Exactly one membership bit changes, so the sign reverses.


Why does a second application choose the same edge? Toggling e changes none of the tests for edges smaller than e, because their tests inspect only still smaller edges. It does not change the test for e either. There was no earlier available edge, and e remains available. Therefore Φ(Φ(S)) = S. Every movable term has a unique partner of opposite sign and identical weight.




## Identify the states that cannot move

A broken circuit is the edge set of a cycle with its largest edge removed. If e is available, choose a simple path of selected smaller edges between its endpoints. That path and e form a cycle; the path is a broken circuit contained in S.


Conversely, if S contains a broken circuit, the removed largest edge of its original cycle is available. Thus a state is unpaired exactly when it contains no broken circuit.


Every surviving state is a forest. Otherwise, the largest edge of any cycle inside it would be available. A forest with k edges has n − k components: start with n isolated vertices and add its edges one at a time; each edge joins two previously separate components, since otherwise it would complete a cycle. The canceled sum is therefore



```text
χ_G(q) = Σ_{S contains no broken circuit} (−1)^|S| q^{n−|S|}.
```

The absolute coefficient of q^{n−k} counts these particular k-edge forests. No alternating cancellation remains within a coefficient.




## Do every count for a four-cycle

Number the edges of a four-cycle 0 < 1 < 2 < 3 around it. There is only one cycle, hence only one broken circuit: {0, 1, 2}. Of the sixteen edge subsets, exactly two contain it:



```text
{0, 1, 2}  ↔  {0, 1, 2, 3}.
```

In both states edge 3 is the least available edge. Their terms are −q and +q, so they cancel. The remaining counts, by subset size 0, 1, 2, 3, are 1, 4, 6, 3. Consequently



```text
χ_{C₄}(q) = q⁴ − 4q³ + 6q² − 3q.
```

As a check at q = 2, this gives two colorings: choose one of the two colors at a vertex, and every other choice is forced around the even cycle.




## Extract a reduced polynomial by one more pairing

Suppose the graph is connected and has an edge, and write e_{*} for the largest edge of the entire graph. No broken circuit can contain it: in a cycle containing it, it is the edge removed. Hence adding or removing e_{*} preserves the property of containing no broken circuit.


Pair the surviving subsets by this toggle. If S omits e_{*} and has k edges, both S and S ∪ {e_{*}} are forests. Their combined contribution is



```text
(−1)^k [q^{n−k} − q^{n−k−1}] = q(q−1)(−1)^k q^{n−k−2}.
```

The exponent is nonnegative: the forest containing e_{*} has at most n − 1 edges. Therefore



```text
χ_G(q) / [q(q−1)]
  = Σ_{S omits e_* and contains no broken circuit} (−1)^|S| q^{n−2−|S|}.
```

For the four-cycle, the subsets of {0, 1, 2} other than {0, 1, 2} have counts 1, 3, 3. The reduced polynomial is q^{2} − 3q + 3.




## Read edges and triangles from the coefficients

The cancellation also identifies small subgraphs without expanding all the states. Suppose n ≥ 3, and write M for the number of edges and t for the number of triangles. A simple graph has no broken circuit with fewer than two edges, so the empty set and all M single edges survive. A two-edge set fails precisely when it is the broken circuit of a triangle. Each triangle removes its own distinct pair: two adjacent edges determine the only possible closing edge in a simple graph. Therefore the first three coefficients are



```text
χ_G(q) = qⁿ − Mqⁿ⁻¹ + (M(M−1)/2 − t)qⁿ⁻² + terms of lower degree.
```

For the four-cycle, M = 4 and t = 0, recovering the coefficient 6. For a triangle, M = 3 and t = 1, giving q³ − 3q² + 2q. The actual forbidden pair depends on the edge order, but its count does not. More generally, changing the order changes the surviving forests while leaving their number in each size fixed, because they compute the same polynomial coefficients.




## Find the edge by a connectivity scan

To find the least available edge, scan edges in order while maintaining the connected components formed by selected edges already scanned. Test an edge's endpoints before adding that edge, when selected, to the maintained graph. The first successful connectivity test supplies the toggle. This gives a direct implementation with ordinary graph connectivity data.


Enumerating all states still takes exponentially many subsets. The resulting forest count has no cancellation within a coefficient; efficient coloring algorithms and inequalities between successive coefficients require additional arguments.



## The classical result

The surviving-set formula is Whitney’s broken-circuit theorem. Hassler Whitney proved it in [A Logical Expansion in Mathematics](https://doi.org/10.1090/S0002-9904-1932-05460-X), Bulletin of the American Mathematical Society 38 (1932), 572–579, §7. For the theorem, the convention of removing the largest edge, and a modern proof, see Darij Grinberg, [Generalized Whitney Formulas for Broken Circuits in Ambigraphs and Matroids](https://arxiv.org/abs/1604.03063v3), §3.4, Corollary 3.14 ([author’s text](https://www.cip.ifi.lmu.de/~grinberg/algebra/chromatic.pdf)). The argument above derives the ordered toggle directly from the two requirements of cancellation: unchanged weight and an inverse move. The coefficient calculation is a consequence of that formula.



## Source and optional continuation
For the earlier treatment and further context, see [What a Boundary Map Can Prove](https://refactor.press/notes/what-a-boundary-map-can-prove.html#sec-broken-circuit-calculus) in the Tensorgami archive.
