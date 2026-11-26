# Build a commutator from two matchings

Henry Shin · Refactor · Mathematical companion · November 21, 2026

Turn a group equation into a balance of red and blue edges. Recover a commutator and find the fewest swaps needed in its first, involutive factor.

Take the permutation (1 2)(3 4 5 6). Applying it is easy. Taking it apart is harder. Can it be written as a single commutator, the product of two moves followed by their inverses in the same order?

We write [α, τ] = ατα^{−1}τ^{−1} and apply the rightmost permutation first. Try asking for a little more. Require α^{2} = 1, allowing the identity as the empty matching. Then the equation for the target π becomes


\[
\pi=\alpha\beta,\qquad\beta=\tau\alpha\tau^{-1}.
\]

An involution swaps disjoint pairs and fixes the remaining points. Draw its swaps as edges, one per pair. This is a matching. Conjugating it by τ sends every edge {u, v} to {τ(u), τ(v)}. So here is the problem on the other side of the bridge. Find two matchings whose product is π and whose edge counts agree. Equal counts let us pair up the edges and then pair up the isolated vertices. Those pairings supply the vertex bijection τ.

      

## Balance two cycles in S_{6}

Both paths start with one extra red edge. Give one cycle an extra blue edge instead. Pick a starting vertex to see the blue step followed by the red step. At a missing edge, stay at the same vertex.

The [web edition](https://refactor.press/refactors/build-a-commutator) includes the interactive example.

      

  
## Read the relabeling back into the group

  Give (1 2) the extra red edge and (3 4 5 6) the extra blue edge. Here are the paths in that choice.

  
    1 ─R─ 2
    4 ─B─ 3 ─R─ 5 ─B─ 6
  

  Starting at 4, blue takes you to 3 and red takes you to 5. Starting at 3, blue takes you to 4 and red leaves you there. Reading the product at all six vertices gives (1 2)(3 4 5 6). The red factor is α = (1 2)(3 5) and the blue factor is β = (3 4)(5 6).

  Pair red edge {1, 2} with blue edge {3, 4} and red edge {3, 5} with blue edge {5, 6}. Send the red isolated vertices 4 and 6 to the blue isolated vertices 1 and 2 in that order. Taking endpoints in increasing order on each paired edge gives τ = (1 3 5 6 2 4). Now τατ^{−1} = β, so the two calculated permutations really do satisfy [α, τ] = (1 2)(3 4 5 6).

  The edge count settled one question, whether a relabeling exists. The shared labels did the rest. They determined the product and gave the actual relabeling to substitute in the group equation.

  Add a seventh coordinate and two sign marks to these same matchings. In [Splice a signed cycle](https://refactor.press/refactors/splice-a-signed-cycle), exchanging arrow destinations joins the relabeling into one cycle while the signed commutator stays fixed.

  
## Change the factors while holding the product fixed

  To derive the move in the figure, take a cycle of length L and number its vertices in cycle order from 0 to L − 1. The cycle itself adds 1 modulo L. Look for two reflections whose composition adds 1. If the first is x ↦ j − x, the second must be x ↦ j + 1 − x. Use the first for blue and the second for red.

  
\[
x\xrightarrow{\text{blue}}j-x\xrightarrow{\text{red}}x+1\pmod L.
\]

  The product is independent of j. Yet each reflection draws an edge at every swapped pair, so its number of fixed vertices controls its edge count. A reflection x ↦ k − x fixes the solutions of 2x ≡ k mod L.

  
- For odd L, there is one solution for each reflection. Each color has (L − 1)/2 edges.
- For even L, the even value of k gives two fixed vertices and the odd value gives none. The reflection with no fixed vertices has one more edge. Increase j by one and the surplus changes color.

  The two colors form a single alternating path on this cycle. Following either color stays in the same connected component, and the product visits every vertex of the cycle, so the overlay is connected. Each vertex has at most one edge of each color. A vertex fixed by one color is an endpoint, with a single isolated vertex when L = 1.

  In the example, the red-heavy four-cycle is the path 3 —R— 4 —B— 6 —R— 5. The blue-heavy choice is 4 —B— 3 —R— 5 —B— 6. Compare the labeled paths as you change the choice. Both send 3 to 4 and continue around the same four-cycle.

  
## Balance every even permutation

  A cycle of length L can be written as L − 1 transpositions, so it contributes a minus sign exactly when L is even. An even permutation therefore has an even number of even-length cycles. Pair those cycles and choose a red surplus on one and a blue surplus on the other. The odd-length cycles already balance on their own.

  Take the union of the red edges and the union of the blue edges. The blue-then-red rule agrees with the prescribed permutation on every cycle. The two matchings have equally many edges, so the relabeling construction applies to the whole vertex set. In the other direction, multiplicativity of sign makes every commutator even.

  Every even permutation in S_{n} is one commutator with an involutive first entry. In particular, the subgroup generated by commutators is A_{n}.

  The calculation also gives the cheapest first matching, measured by its number of swaps. On a cycle of length L, the two colors together contribute L − 1 edges. If c is the number of cycles of π, including fixed points, global balance therefore uses (n − c)/2 swaps per color. A first matching with t swaps supplies another t through conjugation. Multiplication by a single swap merges two cycles or splits one cycle, changing the cycle count by one. Going from the identity, which has n cycles, to π therefore requires at least n − c swaps. That forces 2t ≥ n − c, and the construction attains equality.

  
## What has to come back

  The group equation told us what to design. The involution ansatz made the factors into matchings. Affine arithmetic on a cycle gave a choice that changes the local incidence counts while preserving the product. The resulting equality mattered because it could be decoded as a vertex bijection, and every such bijection belongs to S_{n}.

  For a question inside a smaller group, that last requirement can change the answer. The permutation (1 2 3) is a commutator in S_{3}. Inside the cyclic subgroup it generates, all commutators are the identity. A representation for a subgroup question must tell us how to recover the required elements inside that subgroup.

  Sometimes the bridge gives an entire interval in a subgroup lattice. For a split affine group G = V ⋊ L, let V be a nonzero finite vector space of translations over a prime field and let L be a group of linear transformations. A subgroup L ≤ K ≤ G gives the invariant subspace W = K ∩ V. In the other direction, W gives W ⋊ L. To see why the two operations undo each other, take any element of K and strip off its linear part using an element of L already in K. Thus the point stabilizer L is maximal exactly when its action on V is irreducible.

  The same standard applies when the result is deeper. For finitely generated subgroups of a free group, folded labeled graphs encode subgroup membership. In a product of two such graphs over the generator labels, components recover intersections with conjugates. A rank inequality in that setting returns as the strengthened Hanna Neumann inequality, a bound on the total reduced rank of those intersections. The bridge specifies exactly which graph ranks count toward the group-theoretic result. [A subgroup becomes a machine](https://refactor.press/refactors/words-to-machine) · [Mineyev, Submultiplicativity and the Hanna Neumann Conjecture](https://annals.math.princeton.edu/2012/175-1/p11)

## Continue with perfect matchings
On the same six points, perfect matchings give a second action of the symmetric group. [Read the sequel, When one swap becomes three](https://refactor.press/refactors/one-swap-becomes-three).

  
## Sources

  
- Øystein Ore proves the single-commutator result using equal-cycle-type factors and pairing even cycles. [Some Remarks on Commutators (1951), §§1–2](https://maths.dur.ac.uk/users/alexander.stasinski/Student%20projects/2013-2014/Ore%20-%20Some%20remarks%20on%20commutators.pdf)
- T. Kyle Petersen and Bridget Eileen Tenner develop the two-colored graphs for products of involutions. [How to write a permutation as a product of involutions (and why you might care), §2](https://arxiv.org/abs/1202.5319)
- Gadi Moran gives criteria for products of two prescribed involution classes. [The product of two reflection classes of the symmetric group (1976)](https://doi.org/10.1016/0012-365X(76)90110-2)
- The six-point construction and the choice of alternating paths come from §4.1 of Graph-Theoretic Schemata for the Symmetric Group, the working manuscript behind this exposition.
