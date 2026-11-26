# Splice a signed cycle

Henry Shin · Refactor · Mathematical companion · November 21, 2026

Turn a signed commutator equation into two marked matchings. Splice the relabeling into a single negative cycle and get a shortest first factor.

Suppose you want to write a permutation as a commutator XYX^{−1}Y^{−1}. You get to choose the two factors, but there are two restrictions. X must square to the identity and use as few swaps as possible. Y must visit every letter in a single cycle. Jacques, Lenormand, Lentin and Perrot proved in 1968 that every even permutation admits such a factorization. [Read their paper, Proposition 2 and Theorem 2.](https://hal.science/hal-01573916v1/document)

  Now let each arrow carry a sign. A signed permutation sends the coordinate vector e_{i} to either e_{π(i)} or its negative. A cycle is negative if the product of the signs along its arrows is −1. Can the relabeling Y still be made into a single cycle, and can we prescribe that it be negative? The construction below gives a signed extension of the 1968 theorem. The priority of this precise signed statement is left open.

  The move that makes it possible takes place between two matchings. Write the target as w = XZ, where X and Z square to the identity. Draw their ordinary swaps in red and blue, respectively, and mark any fixed coordinate whose sign they flip. If relabeling by Y carries the red swaps and fixed-coordinate signs to the blue ones, then Z = YXY^{−1}. Substituting this into XZ gives the commutator. The freedom is in how you relabel the matchings. [See the same matchings before signs are added.](https://refactor.press/refactors/build-a-commutator#return)

  
## Join three cycles into one

  The diagram fixes the two matchings on seven coordinates. The arrows of Y start in three cycles. Exchange the images of 1 and 2, the ends of a red edge, and of 6 and 7, two positive red fixed coordinates. Try either order. Then flip the sign of Y(7). The signed window of Y changes while all seven entries of the commutator stay fixed.

  Swap the images of 1 and 2 first and you recover the earlier article’s relabeling, with 7 fixed.

  The [web edition](https://refactor.press/refactors/splice-a-signed-cycle) includes the interactive example.
  A signed window lists the images of 1 through 7, with i standing for e_{i} and −i for its negative. The target has two negative cycles and one positive fixed coordinate. Once Y is a negative 7-cycle, its seventh power is −I, so it has order 14.

  
## Change the cycles without changing the conjugate

  For now, take every swap with positive signs and put the sign flips only at fixed coordinates. Start with any unsigned relabeling τ that sends the red matching to the blue matching and respects the signs on the fixed coordinates. Swapping the images of a and b changes just two arrows. If a and b are in different cycles, each arrow now leads into the other cycle. Following arrows takes you around both before returning to where you started. Two cycles have become one.

  The first allowed swap uses the ends of a red edge. Exchanging their images still sends the red edge to the same blue edge. The second uses two positive red fixed coordinates. They still go to positive blue fixed coordinates. Both moves preserve τXτ^{−1} = Z.

  Here is why these moves suffice. We will arrange for the red and blue overlays to consist of paths, with at most one negative mark on each path. Suppose neither move can join two of the current cycles of τ. Every red edge then lies within a cycle of τ. Every blue edge does too, since it is the image of a red edge and τ preserves each of its own cycles. So entire overlay paths lie inside those cycles.

  Each path has two fixed slots, one for the missing color at each endpoint. A one-vertex path has both slots at that vertex. At least one slot on every path is positive. Each cycle of τ contains a whole path, so it contains a positive slot of some color. Within that cycle, τ pairs positive red slots with positive blue slots, so their counts agree. Both counts are therefore positive. If at least two cycles remain, choose one positive red fixed coordinate from each of two different cycles. Exchanging their images joins the two cycles, contradicting the assumption that neither move works. So whenever there is more than one cycle, another splice is possible.

  For a positive n-cycle, take Y = τ. For a negative one, take Y = τD_{i}, where D_{i} flips the sign at any positive red fixed coordinate i. Because D_{i} commutes with X, both choices give YXY^{−1} = Z. The commutator is the same signed permutation, entry for entry.

  
## Make the paths from the target

  Write the action of w on coordinate labels as π. On each cycle of length L, number the vertices modulo L in the order in which π visits them. Use the two index reflections x ↦ j − x in blue and x ↦ j + 1 − x in red. Applying blue and then red advances x by one. Accordingly the overlay is connected. Each color has at most one edge at any vertex, and there are fixed slots, so the overlay is an alternating path.

  When L is odd, each color has one fixed slot. When L is even, both fixed slots belong to one color, and changing the parity of j chooses that color. The other color then has one extra edge.

  An even π has an even number of even-length cycles. A target with total sign +1 has an even number of negative cycles. Pair up the negative cycles. Each pair needs one red sign mark and one blue sign mark, on separate paths.

  First take the negative pairs in which both paths have even length. Give one path red fixed slots and the other blue fixed slots. The two paths now balance in their edge counts and can take opposite marks. An even number of even paths remains. Pair these up solely to balance the edges, giving opposite fixed-slot colors to the two paths in each pair. Now place the marks. A negative pair of two odd paths can take either assignment, since each path has a slot of each color. In a mixed negative pair, mark the even path in the color it already has and use the opposite color on its odd partner. This balances the edge counts and the negative fixed-slot counts. The positive fixed-slot counts then agree as well, so a relabeling exists.

  Take all actual swaps with positive signs. The product of the two colored factors has underlying permutation π. On each cycle its sign product is the product of the fixed-slot marks on its path, so the negative cycles are precisely the ones prescribed by w.

  To recover the exact arrow signs of w, change coordinate signs along each cycle. Each arrow sign is multiplied by the chosen basis signs at its two ends. In the product around the cycle, each basis sign appears twice, once on an incoming arrow and once on an outgoing arrow. Its square is +1, so the cycle sign product survives. Start at any vertex and choose the sign of each successive basis vector to correct the incoming arrow. This closes up consistently because the old and new cycle sign products agree. For the same change of frames with group-valued edge labels, see [Remove the tree, retain the circuits](https://refactor.press/calculi/tree-gauge#derive-the-change). Conjugate X, Z and Y by the same diagonal sign change. The commutator now gives exactly w, and Y keeps its underlying cycle and its sign product.

  
## The signed theorem and its sharp bound

  Let w be a signed permutation on n ≥ 1 coordinates, with even underlying permutation and total sign +1. Let c count its underlying cycles, including fixed coordinates, and let k count its negative cycles. Then w = [X, Y], with X^{2} = 1 and Y a signed n-cycle of either prescribed sign. X has (n − c)/2 signed swaps and k/2 negative fixed coordinates. Its reflection length is (n − c + k)/2, the least possible for the first entry of any commutator representing w.

  

  The negative n-cycles form the Coxeter conjugacy class in type B_{n}. The product of the usual simple reflections, a sign flip at 1 followed by the adjacent swaps in order, is one negative n-cycle. Relabeling and changing coordinate signs carry it to any other.

  Here reflection length means the fewest reflecting factors of any kind in the signed permutation group B_{n}. By changing basis signs as above, put all the signs of a cycle on at most one arrow. The cycle then factors into L − 1 swaps and, if negative, one coordinate flip. For the lower bound, each positive cycle contributes one dimension to the fixed space, while a negative cycle contributes zero. The fixed space of w therefore has codimension n − c + k. A product of m reflections fixes the intersection of their hyperplanes, which has codimension at most m. This proves the length formula ℓ_{T}(w) = n − c + k.

  In any commutator [A, B], the two factors A and BA^{−1}B^{−1} have equal reflection length. So the first has length at least half the length of w. The paths have n − c edges split equally by color, and half the k sign marks are red. The constructed X spends exactly half. In the example the target has reflection length six and X uses two swaps and one coordinate flip.

  Even underlying parity and positive total sign are necessary for every commutator, since each is measured by a homomorphism to {+1, −1}. The construction shows that together they describe the entire derived subgroup. Inside it, the graph argument gives an optimal first factor. The splices make the relabeling a single cycle, and the sign flip puts it in the negative full-cycle class.

  The choice of first factor matters. For n ≥ 6, Bader, Böhmler and Wegener show that commutators of two negative signed n-cycles give every element of the derived subgroup, with the sole exception of −I_{n} when n ≡ 2 mod 4. In degree six, let X flip coordinates 1, 3 and 5. Let Y cycle through 1, 2, …, 6, with a minus sign on the arrow from 6 to 1. Then YXY^{−1} flips 2, 4 and 6, so [X, Y] = −I_{6}. The three flips attain the lower bound because ℓ_{T}(−I_{6}) = 6.

  
## Sources

  
- A. Jacques, C. Lenormand, A. Lentin and J.-F. Perrot, Un résultat extrémal en théorie des permutations, C. R. Acad. Sci. Paris, Sér. A 266 (1968), 446–448. Proposition 2 and Theorem 2 give the unsigned statement, including the swap count. [Paper scan.](https://hal.science/hal-01573916v1/document) [English translation by Alain Jacques.](https://www.academia.edu/34509075/1_An_extremal_result_in_permutation_theory)
- R. W. Carter, Conjugacy classes in the Weyl group (1972), Lemma 2, for reflection length and fixed-space codimension. [Paper.](https://www.numdam.org/item/CM_1972__25_1_1_0.pdf)
- S. Hart and P. Rowley, Zero Excess and Minimal Length in Finite Coxeter Groups, Proposition 3.5, uses a related factorization of signed cycles into two involutions. [Paper.](https://arxiv.org/html/1405.2700)
- P. Bader, B. Böhmler and P. Wegener, Commutators of signed n-cycles (2026 preprint), for commutators with two Coxeter elements. [Theorem 6.7.](https://arxiv.org/html/2609.24518v1#S6.Thmtheorem7)
