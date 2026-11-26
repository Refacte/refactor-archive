# Remove the tree, retain the circuits

Henry Shin · Refactor · Mechanism calculus · Revised November 5, 2026

Which edge labels are coordinate choices, and which products survive every local change?

Begin with: Graphs, multiplication and inverses in a group.

An edge label says how to translate between two local frames. How much of a whole network of labels can be removed by choosing those frames differently? Trying to erase one edge at a time exposes the obstruction: returning around a circuit may demand a different frame from the one we started with. That tells us which edges to use for choosing frames and which products we must retain.




## Specify the labels and the allowed changes

Let a finite nonempty connected graph have n vertices and m edges. Parallel edges and loops are allowed. Choose one orientation for each edge. A label a_{e} lies in a group H; reversing an edge replaces its label by its inverse. No commutativity is assumed.


Use the convention that transport along edges with labels a, then b, has product ba: the first operation acts first, on the right. A change of frame h_{v} at each vertex changes an edge from u to v by



```text
a_e  ↦  h_v a_e h_u⁻¹.
```

For a path from u to v, the intermediate frame changes cancel. Its entire product A therefore changes to h_{v}Ah_{u}^{−1}. In particular, a circuit based at a root changes by conjugation in the root frame.




## Derive a frame that erases a tree

First try to make every edge label 1. Once the frame at u is fixed, an edge u → v with label a determines the frame at v:



```text
h_v a h_u⁻¹ = 1,       so       h_v = h_u a⁻¹.
```

Continue along a path. If the path returns to its start with product A, the same rule requires h_{u} = h_{u}A^{−1}, hence A = 1. An arbitrary labeling need not satisfy this. The obstruction is not the length of the path but the demand to assign a frame twice.


So use only edges that reach a new vertex when choosing frames. Start from a root and keep adding such an edge until every vertex is reached; connectedness guarantees that this is possible. The selected edges form a spanning tree: there are n − 1 of them and exactly one selected path to each vertex. This choice removes every repeated assignment while still reaching the whole graph.


Set the root frame to 1 and apply the displayed equation outward along the tree. If a stored edge points toward its parent, invert its label first. Each new frame is now determined once, with no consistency equation left over. The edges excluded from this propagation will measure the failures that prevented us from erasing everything.


Equivalently, write P_{v} for the product along the root-to-v path, with later labels on the left. The required frame is h_{v} = P_{v}^{−1}. On any oriented edge u → v, its new label is



```text
b_e = P_v⁻¹ a_e P_u.
```

It equals 1 on the tree. On a remaining edge it is the product around the circuit that goes from the root to u, crosses that edge, and returns from v to the root.




## Compare the remaining circuit products

There are r = m − n + 1 edges outside the tree. After the preceding change, an assignment is described by their ordered list of labels (b_{1}, …, b_{r}). Every such list occurs: assign 1 to the tree and the desired labels to the other edges.


Now compare two assignments already in this form. A further frame change preserves a tree edge labelled 1 only if h_{v}h_{u}^{−1} = 1. Along all root paths, this forces every vertex frame to be the same element q. Thus two lists describe equivalent assignments precisely when



```text
b′_i = q b_i q⁻¹       for every i, with the same q.
```

This proves both directions. Any allowed frame change between tree-normalized assignments must have this form; any such q supplies an allowed frame change at all vertices.


The word simultaneous matters. Consider a graph with one vertex and two loops, with labels in the permutation group S_{3}. The lists ((12), (12)) and ((12), (13)) have conjugate entries in each position: every transposition is conjugate to every other. Yet no single q conjugates the first list to the second, because equal entries remain equal under a common conjugation. Keeping only the separate conjugacy classes would lose part of the answer.


It also gives a certificate for the original assignments. If their root-path products are P_{v} and P′_{v}, and their normalized lists satisfy the displayed comparison, use



```text
g_v = P′_v q P_v⁻¹.
```

Substitution gives a′_{e} = g_{v}a_{e}g_{u}^{−1} on every edge. An assignment's frame symmetries are similarly the elements q that commute with every remaining label, transported back by the same root paths.




## Calculate a triangle without commuting anything

Orient a triangle 0 → 1 → 2 → 0, with labels a, b, c. Choose the first two edges as the tree. The root-path products are 1, a, and ba. Therefore



```text
h_0 = 1,       h_1 = a⁻¹,       h_2 = a⁻¹b⁻¹,
new edge labels:  1, 1, cba.
```

The order cba has been derived from the transport convention. For example, if c = 1 and the first two labels are integer matrices,



```text
a = [1 1]      b = [1 0]      ba = [1 1]      ab = [2 1]
    [0 1],         [1 1],          [1 2],          [1 1].
```

Interchanging the multiplication order changes the answer. The triangle can have all labels erased exactly when cba = 1. Its equivalence class without a fixed root frame is the conjugacy class of cba, not a particular matrix written in a particular basis.




## Carry out the reduction, then solve conjugacy


1. Find a spanning tree and a root.
2. Accumulate one root-path product per vertex.
3. Replace each non-tree label by P_{v}^{−1}a_{e}P_{u}.
4. For comparison without a fixed root frame, solve the simultaneous conjugacy equations for the remaining list.

The first three steps take a linear number of group multiplications and inversions in the graph size. Their bit cost depends on how group elements are represented. The fourth is a genuine remaining problem: this reduction does not supply a conjugacy algorithm for an arbitrary group. For a finite group given explicitly, enumerate q and check all equations. If the root frame must stay fixed, q = 1 and comparison is simply equality of the normalized lists.


After the tree labels have become 1, each remaining edge records one circuit product. Choosing the root frame removed the common conjugation during the calculation; allowing that frame to vary restores exactly the simultaneous conjugation in the comparison step.


The chosen tree determines the coordinates, not the equivalence relation. A different tree gives a different list of circuit words, but each list still has the reconstruction and comparison just proved. In particular, every label can be erased if and only if all the remaining circuit products are 1. For an abelian group the residual conjugation does nothing; for a nonabelian group it is part of the classification.




## Sources and a related construction

This is the spanning-tree normalization for group-labelled graphs, also called switching in the language of gain graphs. See Thomas Zaslavsky, [Biased graphs. I. Bias, balance, and gains](https://people.math.binghamton.edu/zaslav/Tpapers/bg1.jctb1989.pdf) (1989), §5, especially Lemma 5.3 and its spanning-tree proof. That source uses the opposite path-product convention; the formulas here follow the convention stated at the start. The explicit comparison certificate above follows by substituting the two normalizations.


A spanning tree plays a different role in [the folded graph of a free subgroup](https://refactor.press/refactors/words-to-machine.html): its remaining edges provide a free basis. In both calculations, the tree fixes paths to all vertices and leaves the closed-path information on the other edges.



## Source and optional continuation
For the earlier treatment and further context, see [What a Boundary Map Can Prove](https://refactor.press/notes/what-a-boundary-map-can-prove.html#sec-tree-gauge-calculus) in the Tensorgami archive.
