# Split a cyclic tuple into motion and remainder

Henry Shin · Refactor · Mechanism calculus · Revised November 5, 2026

What data actually move under the faces of a cyclic construction?

Begin with: Tuples and addition in an abelian group; all operations are defined.

A circular multiplication record changes whenever neighboring entries merge. Record its total separately. For an abelian group, the total then stays fixed while the rest follows a short list of local rules. The change of coordinates and its inverse can both be executed.




## 1. Specify the records and their moves

Let G be a finite abelian group, written additively. Arithmetic modulo five will supply an example. A record of degree q is a tuple (g₀, g₁, …, g_q). For q ≥ 1, a face move merges two neighbors:



```text
dᵢ(g₀, …, g_q) = (g₀, …, gᵢ + gᵢ₊₁, …, g_q)   for 0 ≤ i < q,
d_q(g₀, …, g_q) = (g_q + g₀, g₁, …, g_q₋₁).
```

There are two more moves. A degeneracy sᵢ inserts zero immediately after gᵢ. A rotation moves the last entry to the front:


τ(g₀, …, g_q) = (g_q, g₀, …, g_q₋₁).


These definitions include the distinguished place numbered zero. We are not identifying a record with all its rotations: rotation is an operation we retain.




## 2. Find what the merges preserve

Look for a label that will survive every merge. Normalize the label of a one-entry record (g) to be g itself. Now repeatedly merge neighbors, without crossing the distinguished cut, until only one entry remains. That entry is g₀ + ··· + g_q. Any label with the required invariance and normalization must therefore be the total sum.


This gives a candidate, not yet a check of every move. Internal merges preserve the sum by associativity. A wraparound merge and a rotation preserve it by commutativity, and insertion of zero preserves it by the identity law. Thus the candidate passes all the tests.


The total alone loses information. Retain q of the old entries as well, leaving out the first. This is a choice of coordinates: it is convenient because the two end faces merge into that omitted entry. The resulting change is



```text
s = g₀ + g₁ + ··· + g_q,
Φ(g₀, …, g_q) = (s; g₁, …, g_q),
Φ⁻¹(s; h₁, …, h_q) = (s − h₁ − ··· − h_q, h₁, …, h_q).
```

The invariant was determined by merging down to a singleton; the choice to retain the tail was not. The inverse verifies that this particular choice keeps enough information to reconstruct the whole record.




## 3. Derive the rules in the new coordinates

Write the tail as (h₁, …, h_q). Apply a move to the old tuple and then use Φ. The result is



```text
d₀(s; h₁, …, h_q) = (s; h₂, …, h_q),
dᵢ(s; h₁, …, h_q) = (s; h₁, …, hᵢ + hᵢ₊₁, …, h_q)  for 1 ≤ i < q,
d_q(s; h₁, …, h_q) = (s; h₁, …, h_q₋₁).
```

The first face absorbs h₁ into the missing entry; the last absorbs h_q. Both leave the total unchanged. Internal faces are ordinary addition in the tail. A degeneracy inserts zero in tail position i+1, with positions counted starting at one. For example, s₀ puts zero at the beginning, while s_q puts it at the end.


The face and degeneracy rules on the tail no longer involve s. With respect to these moves, the complete family has split into one copy of the same merge-and-delete system for each fixed label s ∈ G. Rotation still needs to be calculated separately.


The lowest degrees show what one such copy contains. In degree zero it has the single record (s;). A degree-one record (s;h) has that same record as both faces, so it can be drawn as a loop labelled h. The three faces of (s;x,y) are (s;y), (s;x+y), and (s;x): the triangle records how the two labels combine. The separation preserves these compositions, not just the number of tuples.


The usual identities between consecutive face moves can also be seen locally. Merges in disjoint places commute after adjusting the index; merges sharing an entry agree because (a+b)+c = a+(b+c). Inserting zero is undone by either adjacent merge. Transporting the moves through an explicit bijection preserves all such identities.




## 4. Run the change of coordinates modulo five

Take (g₀,g₁,g₂) = (4,3,1) in ℤ/5ℤ. Its total is 3, so its new record is (3;3,1).



| Move | Old coordinates | New coordinates |
| --- | --- | --- |
| Merge first pair, d₀ | (2,1) | (3;1) |
| Merge last pair, d₁ | (4,4) | (3;4) |
| Merge around the cut, d₂ | (0,3) | (3;3) |
| Insert zero after the cut, s₀ | (4,0,3,1) | (3;0,3,1) |
| Rotate, τ | (1,4,3) | (3;4,3) |

For a group of size m, each fixed total has exactly m^{q} degree-q records: choose the tail freely and recover the first entry. The face rules never leave that fixed-total component.




## 5. Retain the operation that has not separated

Rotation does preserve the total, but it uses that total to reconstruct the missing entry. In the new coordinates, for q ≥ 1,



```text
τ(s; h₁, …, h_q)
  = (s; s − h₁ − ··· − h_q, h₁, …, h_q₋₁).
```

In the example, the successive tails are (3,1) → (4,3) → (1,4) → (3,1). Thus three rotations return the degree-two record to itself. The splitting of face and degeneracy rules has not made rotation trivial. Its dependence on s is explicit.




## 6. Locate the boundary of the method

For a nonabelian group, write a total as the ordered product s = g₀g₁···g_q. The wraparound face changes it to


g_qg₀···g_q₋₁ = g_q s g_q^{−1}.


The total is now conjugated rather than fixed. The coordinates themselves still work: retain (s; h₁, …, h_q) and recover g₀ = s h_q^{−1} ··· h₁^{−1}. But the last face becomes



```text
d_q(s; h₁, …, h_q) = (h_q s h_q⁻¹; h₁, …, h_q₋₁).
```

It can move between different totals. This is the precise point where the fixed-total decomposition fails; it also tells us what data a nonabelian calculation must carry.


For example, use permutations in S₃, composed rightmost first, and the degree-one tuple ((12),(23)). The internal face has product (123), while the wraparound face has product (132). They are different elements, although they are conjugate. More generally, the conjugacy class of the total is preserved by every face, degeneracy, and rotation. Thus conjugacy classes still label separate families, but a single total no longer does.




## Further context

The merge-and-delete rules on the tail are the reduced bar construction. The coordinate change is an isomorphism of simplicial sets: it respects the faces and degeneracies, with one copy of the bar construction for each total. Its geometric realization gives B^{cy}G ≅ G × BG for a discrete abelian group. This statement does not make rotation independent of the total; that extra operation is given by the formula in section 5.


Bruno Stonek gives this coordinate splitting for topological abelian groups in [Proposition 4.6 of Higher topological Hochschild homology of periodic complex K-theory](https://arxiv.org/abs/1801.00156v3) (version 3, 2020). The finite calculation here is its discrete case, with the rotation and the nonabelian boundary written out explicitly. Applications to topological Hochschild homology and ring spectra require further constructions and theorems.



## Source and optional continuation
For the earlier treatment and further context, see [What a Derivative Retains](https://refactor.press/notes/what-a-derivative-retains.html#cyclic-bar-calculus) in the Tensorgami archive.
