# A matrix identity by cycle exchange

Henry Shin · Refactor · Mathematical companion · November 3, 2026 · Revised November 5, 2026

Augment walks with reserved cycles, then pair terms with equal edge products and opposite signs to prove Cayley–Hamilton.

A walk that revisits a vertex contains a cycle we can cut out. Could that cut explain a matrix identity? The difficulty is to remember what was removed, assign the right sign, and make the cut reversible. We build the correction terms to solve that matching problem, then recognise the characteristic polynomial in the result.


This exposition follows Straubing’s combinatorial proof in Zeilberger’s formulation. We reconstruct the choices that make the exchange work; [sources are given below](https://refactor.press/refactors/cayley-hamilton.html#cayley-sources).




## 1. Find what a walk needs beside it

Let A = (a_{ij}) be an n × n matrix, with n ≥ 1 and entries in a commutative ring with identity. In particular, A may have real or complex entries. Draw vertices 1, …, n, with an arrow i → j of weight a_{ij}. Include loops. Following two arrows multiplies their weights; adding all possible intermediate vertices is exactly matrix multiplication. Thus (A^{m})_{ij} is the sum of the weights of all length-m walks from i to j. A walk may repeat vertices. A length-zero walk stays at its starting vertex and has weight 1.


We want a relation between powers of A, with scalar coefficients that work for every matrix entry. In this picture, that means cancelling long walks against corrections to shorter walks. There is a reason to try length n: such a walk visits n + 1 vertices, counting repetitions, so some vertex repeats. The segment between two visits is closed. Cutting it out leaves the same start and finish.


But simply discarding the segment loses its weight. A possible correction must remember the closed segment as well as the shorter walk. This gives a first candidate for our working object: a walk together with a cycle set aside. Its partner has exactly the same edges, so the weights can cancel if the two objects have opposite signs.




### Use a small matrix to determine the first signs

Before specifying the general rule, look for a scalar correction to the two-vertex case:



```text
A = [ a  b ]       A² = [ a² + bc   ab + bd ]
    [ c  d ]            [ ca + dc   cb + d² ]
```

Both off-diagonal entries contain the factor a + d, so subtracting (a + d)A cancels them. Each diagonal entry then becomes bc − ad. The remaining correction is (ad − bc)I:


A² − (a+d)A + (ad−bc)I = 0.


The coefficient −(a + d) selects one loop with a minus sign. In the constant term, ad selects two separate loops with a plus sign, while −bc selects one two-vertex cycle with a minus sign. Count cycles, rather than edges, to fit both cases. That also matches the proposed exchange: moving one cycle out of a walk must reverse the sign once, whatever its length.




### Repair the first candidate

One reserved cycle is not enough. On three vertices, consider the walk 1 → 1 → 3 with the loop at 2 already set aside. Its earliest repeated vertex is 1. Cutting out that loop leaves the walk 1 → 3 with two reserved loops. A class of objects allowing only one reserved cycle would not contain the partner we need.


So allow a collection C of reserved cycles. Try requiring them to be simple and vertex-disjoint: then at a vertex there is at most one reserved cycle to insert. Allow the walk to meet them—such a meeting is precisely where an insertion can occur. We still have to prove that a cut never violates disjointness; this will determine the scanning rule in stage 3.


The resulting candidate is a pair (P, C), where P is a walk and C is a collection of vertex-disjoint directed simple cycles. Count a loop as a one-edge cycle, and do not distinguish rotations of the same directed cycle. Give the pair the signed weight


weight(P,C) = (−1)^{number of cycles in C} × product of all edge weights.


Call the total number of edges in the walk and reserve the degree of the pair. Cutting and inserting preserve it. With an empty reserve the sign is positive; each transfer of a cycle reverses it. These choices give us a testable candidate, not yet a proof: we need both a well-defined inverse and cancellation of every term at degree n.




## 2. Identify the coefficients

To obtain a scalar coefficient multiplying a power of A, sum over the same reserves for every walk and every pair of endpoints. Pair each reserve of a given size with every walk of the complementary length. This explains why the two parts may share vertices: excluding those pairs would make the coefficient depend on the walk.


For a reserve C, let |C| be its number of edges, and let c(C) be its number of cycles. Define


q_{k} = ∑_{|C|=k} (−1)^{c(C)} weight of the edges of C; q_{0} = 1.


These are precisely the coefficients of the characteristic polynomial p_{A}(t):


p_{A}(t) = det(tI−A) = t^{n} + q_{1}t^{n−1} + ⋯ + q_{n}.


Here is the identification, directly from the permutation definition of the determinant. Expand each diagonal factor t − a_{ii}. Let S be the vertices where an entry from −A was chosen. Every vertex outside S contributes t, so the permutation fixes it. On S, the permutation decomposes into disjoint cycles. If |S| = k and there are r cycles, its permutation sign is (−1)^{k−r}. The k chosen minus signs multiply this by (−1)^{k}, leaving (−1)^{r}. This is exactly the reserve rule.


In particular, q_{1} = −∑_{i}a_{ii}. For three vertices,



```text
q₁ = −(a₁₁ + a₂₂ + a₃₃)
q₂ = a₁₁a₂₂ + a₁₁a₃₃ + a₂₂a₃₃
     − a₁₂a₂₁ − a₁₃a₃₁ − a₂₃a₃₂.
```

Two separate loops contribute positively. One two-vertex cycle contributes negatively. The coefficient enumerates the corrections our walk can exchange.




## 3. Exchange the first obstruction

Choosing an arbitrary repeated segment can fail: its interior may meet a reserved cycle, so cutting it would create overlapping reserves. Inserting an arbitrary reserved cycle can fail too if we try to undo it by cutting the first repeated segment: an earlier repetition in the walk would make that cut happen somewhere else. Both failures suggest using the same ordering for cuts and insertions.


Scan from the start. Keep going only while the vertices seen so far are distinct and outside the reserve. This prefix is exactly the part we know is safe to leave alone. At its first obstruction, either the walk meets a reserved cycle or it returns to a vertex already in the prefix. There is now a specific cycle to exchange.


More precisely, include the starting vertex in the scan and stop at the first of these events:



1. The current vertex belongs to a reserved cycle. Remove that cycle from C and insert one traversal of it into P, starting and ending at the current vertex.
2. The current vertex has already occurred in the walk. The segment since its previous occurrence is a directed cycle. Cut that segment out of P and put it into C.

Before the first event, the scanned vertices are all distinct and avoid the reserve. Consequently, the cycle removed from the walk is simple and disjoint from every reserved cycle. Conversely, a cycle inserted from the reserve contains none of the earlier scanned vertices. The first event in the new pair is therefore its return to the insertion vertex, and the reverse operation cuts out exactly what was inserted.


When we cut out the segment between two occurrences of a vertex, its first occurrence becomes the first contact of the shortened walk with the enlarged reserve. The reverse operation therefore inserts exactly the cycle we removed. Neither operation changes the start or finish of the walk. Both preserve the multiset of edges and change the number of reserved cycles by one. The exchange is a sign-reversing involution: applying it twice restores the original pair, and each application negates its signed weight.


The two events cannot tie at the first obstruction. If the repeated vertex were in the reserve, its earlier occurrence would already have stopped the scan. The first-event requirement is what makes the exchange an involution; choosing an arbitrary cycle would not provide this inverse.




| Walk; reserve | Matched walk; reserve | Weights |
| --- | --- | --- |
| 1 → 1 → 1; empty | 1 → 1; (1) | +a², −a² |
| 1 → 2 → 1; empty | 1; (1 2) | +bc, −bc |
| 1 → 1; (2) | 1; (1)(2) | −ad, +ad |

Parentheses list directed cycles; a bare vertex denotes a length-zero walk. The last row shows why scanning begins at the starting vertex. Its right-hand pair has no walk edge, but vertex 1 already belongs to a reserved loop, which can be inserted.



For three vertices, the diagonal term 1 → 2 → 3 → 1 with an empty reserve pairs with the length-zero walk at 1 and the reserved cycle (1 2 3). Their weights are +a_{12}a_{23}a_{31} and the negative of that product. Among the terms contributing to (A³ + q_{1}A² + q_{2}A + q_{3}I)_{13}, we also have:



| Walk; reserve | Matched walk; reserve | Weights |
| --- | --- | --- |
| 1 → 2 → 1 → 3; empty | 1 → 3; (1 2) | +a_{12}a_{21}a_{13}, and its negative |
| 1 → 2 → 2 → 3; empty | 1 → 2 → 3; (2) | +a_{12}a_{22}a_{23}, and its negative |
| 1 → 1 → 3; (2) | 1 → 3; (1)(2) | −a_{11}a_{22}a_{13}, and its negative |
| 1 → 1 → 3 → 3; empty | 1 → 3 → 3; (1) | +a_{11}a_{13}a_{33}, and its negative |
| 1 → 1 → 3; (3) | 1 → 3; (1)(3) | −a_{11}a_{13}a_{33}, and its negative |

The last two rows have the same monomial but different walk–cycle pairs. Keeping the walk and reserve separate explains the multiplicities that collecting like terms would conceal.




The web edition includes an interactive list of every cancelling pair for two- and three-vertex matrices.



## 4. See why the number of vertices is the bound

Fix a start i and finish j. Consider all pairs with exactly n edges in total. If the reserve has k edges, its signed weight sum is q_{k}, while the walk has n − k edges. Adding their weights therefore gives exactly the (i,j) entry of


A^{n} + q_{1}A^{n−1} + ⋯ + q_{n}I.


The exchange must be possible for every pair. Otherwise the walk would have distinct vertices, all outside the reserve. Write its length as ℓ. It would occupy ℓ + 1 vertices, and the reserve would occupy another k. That would require ℓ + k + 1 = n + 1 distinct vertices in an n-vertex graph.


Every term consequently has a different partner with the same edge product and opposite sign. Their total is zero, entry by entry. With the coefficients identified in stage 2, this gives p_{A}(A) = 0: the Cayley–Hamilton theorem.


The proof works over every commutative ring with identity. It uses finite sums, products, and additive inverses. Entries need not be invertible, and zero divisors cause no problem. Commutativity is used when a cycle moves within an edge product. In characteristic two, the paired weights still sum to zero: a quantity and its additive inverse cancel even when they are equal.




## 5. What remains at lower degrees

The exchange works with any total number m of edges. Its only survivors are pairs whose walk has distinct vertices and avoids all reserved cycles. Such a pair uses m + 1 distinct vertices, so it can survive only when m ≤ n − 1. This gives the same linear recurrence for all later walk sums:


A^{m} + q_{1}A^{m−1} + ⋯ + q_{n}A^{m−n} = 0 (m ≥ n).


There is also a finite description of what remains at shorter lengths. Attach a marker z to each edge, and let B_{ij}(z) be the signed sum of the surviving pairs from i to j. The same cancellation, coefficient by coefficient, proves


det(I−zA) ∑_{m≥0} z^{m}(A^{m})_{ij} = B_{ij}(z); degree B_{ij} ≤ n−1.


This is an identity of formal power series: each coefficient comes from a finite set of pairs, so no analytic convergence is involved. The numerator is the signed sum of simple directed paths together with pairwise vertex-disjoint cycles that avoid the path. A path here has distinct vertices; the length-zero path is allowed.


Writing B(z) = (B_{ij}(z)), we can identify the numerator in familiar matrix terms. The series ∑_{m≥0} z^{m}A^{m} is the formal inverse of I − zA, so the adjugate identity gives


B(z) = adj(I−zA).


The adjugate is the transpose of the cofactor matrix. For three vertices, the paths from 1 to 3 give a concrete example:


B_{13}(z) = za_{13} + z²(a_{12}a_{23} − a_{13}a_{22}).


The survivors are the path 1 → 3, with either no reserved cycle or the loop at 2, and the path 1 → 2 → 3, with no reserved cycle. One local exchange explains the polynomial identity, its degree bound, the recurrence for later walk sums, and this description of the adjugate.


A useful route to this construction is to ask what a cut loses, enlarge the object to retain it, and then restrict the move until it can undo itself. The small example suggested the signs; closure under the move required a collection of cycles; the unchanged prefix supplied the inverse. Identifying the resulting coefficients was a separate step. This suggests a question to try on other expansions: what would an elementary move need to remember so that it could be undone?



### Sources

Howard Straubing, [A combinatorial proof of the Cayley–Hamilton theorem](https://doi.org/10.1016/0012-365X(83)90164-4), Discrete Mathematics 43 (2–3) (1983), 273–279.


Doron Zeilberger, [A combinatorial approach to matrix algebra](https://doi.org/10.1016/0012-365X(85)90192-X), Discrete Mathematics 56 (1) (1985), 61–72 ([open scan](https://sites.math.rutgers.edu/~zeilberg/mamarimY/DM85.pdf)). Section 1, pp. 62–63, gives the determinant and walk interpretations; §3, pp. 66–67, presents the exchange proof and explicitly credits Straubing.


The route above reconstructs reasons for the choices in that proof; it is not an account of the authors’ historical discovery process. The final section derives further consequences of the same exchange.


Continue with [a determinant that counts trees](https://refactor.press/refactors/graph-calculation.html), where incidence minors select precisely the spanning trees, or [a quantity that moves on its own](https://refactor.press/refactors/recurrence.html), where the correction is a weighted difference instead of a reserve of cycles.
