# When one swap becomes three

Henry Shin · Refactor · Mathematical companion · November 21, 2026

Build a second six-point set from perfect matchings and recover the original points. One swap becomes three, giving an outer automorphism of S₆.

Exchange 1 and 2 among six numbered points. Four points stay put. Now let the same exchange act on six decompositions of the complete graph on those points. All six decompositions move, in three exchanged pairs.

In [the preceding article](https://refactor.press/refactors/build-a-commutator), a matching encoded a permutation made of disjoint swaps. Here we use perfect matchings, which pair off all six vertices. A factorization is an unordered set of five perfect matchings that uses each edge exactly once. There happen to be six. Call them A through F. A swap of the original labels moves a whole factorization by replacing the labels in each of its five matchings.

      

## See one swap become three

Choose two original labels to exchange. Inspect one pair of exchanged factorizations to see what happens to its five matchings. A row such as 12 | 34 | 56 lists three edges, and the shared row stays in place even as the factorizations change places.

The [web edition](https://refactor.press/refactors/one-swap-becomes-three) includes the interactive example.

      

  
## What could take the place of a point?

  Imagine trying to build an automorphism that sends one swap to three disjoint swaps. The natural working object for an image is a perfect matching. A point in the original graph has five incident edges, and the swaps along any two of those edges fail to commute. Their images must also fail to commute.

  Two perfect matchings that share an edge commute as permutations. They agree on that edge, and on the other four vertices the three possible pairings are the commuting double transpositions. So the five images of the swaps through a point would have to be edge-disjoint. Five perfect matchings with three edges apiece use all fifteen edges. This is where the candidate for a new point comes from: one whole factorization.

  
## Build a second set of six

  Start with the six original points, a set we’ll call X. Join every pair. A perfect matching chooses a partner for one point in five ways, then a partner for the first unused point in three ways. The last pair is forced, giving fifteen perfect matchings.

  To count the factorizations, pick any two perfect matchings that share no edge. Their union alternates between the two matchings. Every vertex has degree two, and every cycle has even length at least four. On six vertices the union therefore has to be one hexagon.

  Number the vertices around that hexagon from 1 to 6. The unused edges form a triangular prism. There’s a triangle on {1, 3, 5}, a triangle on {2, 4, 6}, and three edges joining opposite vertices of the hexagon. A perfect matching of the prism uses one or three joining edges, since each triangle has three vertices. Using all three leaves two triangles, each with an odd number of vertices. In a decomposition of the prism, each matching must therefore use exactly one joining edge. Once that edge is picked, the remaining pair on each triangle is forced.

  
    
| Joining edge | Odd triangle | Even triangle |
| --- | --- | --- |
| 1–4 | 3–5 | 2–6 |
| 2–5 | 1–3 | 4–6 |
| 3–6 | 1–5 | 2–4 |

  

  These three matchings use each remaining edge exactly once. So two edge-disjoint perfect matchings extend to exactly one factorization.

  Fix a matching M. Each of its three edges belongs to two other matchings, and an alternative matching can share at most one edge with M, since the third edge is forced by the first two. Thus M has 15 − 1 − 3·2 = 8 disjoint partners. Each factorization through M accounts for four of these, and the extension rule assigns each partner to just one factorization. So M belongs to exactly two. Counting matching–factorization incidences gives 15·2/5 = 6 factorizations. Call their set Y.

  
## Recover the original points

  Relabeling X permutes the matchings and therefore the factorizations in Y. Successive relabelings act in the same order on both sets. This gives a homomorphism from the permutations of X to the permutations of Y. To see why this is a new action of the whole group, we need to recover the old action from the new one.

  
1. An old matching becomes an edge on Y. Take the pair of factorizations containing it. Two distinct factorizations share at most one matching, by the unique extension rule. There are fifteen old matchings and fifteen pairs of new points, so every new edge comes from exactly one old matching.
2. An old edge becomes a matching on Y. Exactly three old matchings contain a given edge e. The three corresponding edges on Y form a perfect matching, since every factorization contains exactly one matching through e. Distinct old edges give different new matchings. Two old edges sharing a vertex lie together in zero perfect matchings, and two disjoint old edges lie together in exactly one. So their lists of three matchings differ. The fifteen old edges therefore give all fifteen new matchings.
3. An old point becomes a factorization on Y. Take the five old edges incident with that point and convert them into five matchings on Y. Every edge on Y occurs in exactly one of these, because the old matching it represents contains exactly one edge through the old point. The five new matchings form a factorization. Distinct old points have distinct sets of incident edges, so the six old points give all six factorizations on Y.

  Apply the construction twice and it recovers X. Each step uses membership or incidence, so it commutes with relabeling. If a permutation acts trivially on Y, it acts trivially on the recovered points of X. The action is faithful. Both permutation groups have 6! = 720 elements, so the homomorphism is an isomorphism. Choosing labels for Y makes it an automorphism of S_{6}.

  
## Why a swap moves all six new points

  Take the swap (1 2) and suppose it fixes a factorization. Choose any of the four matchings in that factorization that omit the edge 1–2. In this matching, 1 and 2 have different partners. Exchanging 1 and 2 changes those two edges and keeps the third. For example, 13 | 25 | 46 goes to 15 | 23 | 46. The two matchings share the edge 4–6. A factorization uses each edge just once, so it cannot contain both. The swap therefore fixes no factorization.

  To find the three exchanges, look at the three matchings that do contain 1–2. Each is fixed by the swap. Its two factorizations must then be exchanged. These are the three pairs you see in the figure. In the language of the reverse construction, the old edge 1–2 has become a perfect matching on Y, and its three edges are exactly the three swaps of the induced permutation.

  The automorphism is outer. Conjugating a permutation by a relabeling changes its labels and preserves its cycle lengths. The map we have constructed sends a single transposition to a product of three disjoint transpositions.

  
## A different copy of S_{5}

  On the new six points, the permutations fixing one factorization form its point stabilizer, a copy of S_{5}. Bring that subgroup back to the old six points. It has order 120 and contains no single transposition, since every single transposition moves every factorization. If it fixed an old point it would equal that point’s stabilizer by order, which would give it single transpositions. So all its orbits on the old points have size at least two. If there were several orbits, the largest possible order would be 4!·2! = 48, from preserving a partition into four points and two. Hence this copy of S_{5} is transitive on the old six points. The incidence construction gives two nonconjugate ways for S_{5} to sit inside S_{6}.

  
## Sources

  
- The matching construction is the classical construction with Sylvester’s synthemes and totals, the fifteen perfect matchings and the six factorizations used here. Hölder described the outer automorphism in 1895. See §1.4 of Ben Howard, John Millson, Andrew Snowden, and Ravi Vakil for historical context and several related constructions. [A description of the outer automorphism of S₆, and the invariants of six points in projective space](https://arxiv.org/abs/0710.5916)
- The unique completion of two disjoint matchings is treated in §7.1 of Donald L. Kreher’s group theory notes. [Group Theory Notes, Lemma 7.1.6](https://pages.mtu.edu/~kreher/ABOUTME/syllabus/GTN.pdf)
- For the derivation from noncommuting swaps, see §2 of Jacques Labelle’s [The outer-automorphisms of the symmetric group S₆ and 1-factorisations of K₆](https://www.researchgate.net/publication/358415432_The_outer-automorphisms_of_the_symmetric_group_S_6_and_1-_factorisations_of_K_6).
