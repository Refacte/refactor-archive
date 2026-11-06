# A determinant that counts trees

Henry Shin · Refactor · Mathematical companion · November 3, 2026 · Revised November 5, 2026

Build the incidence matrix and watch its minors select exactly the spanning trees.

A graph may have far too many spanning trees to list. To count them, look for a test of an edge set that rejects cycles and assigns one to each tree. Incidence columns and their determinants provide that test; a small matrix will collect its results without listing every set.




## 1. Replace a picture by differences

Take a finite connected loopless graph with n ≥ 2 vertices; parallel edges are allowed. Give each edge an arbitrary orientation. Its incidence column has −1 at the source, +1 at the target, and zero elsewhere. Collect the columns in a matrix B.


If p assigns a potential to every vertex, B^{T}p records its change along every edge. Those changes sum to zero around a cycle: the intermediate potentials cancel. On a tree, the converse is immediate. Fix a root potential and integrate the edge changes along the unique paths.


The orientation keeps signs consistent; it does not change the underlying question. Adding a constant to every potential changes no edge difference. Remove that redundancy by setting the root potential to zero and deleting the corresponding row of B. Call the resulting matrix D.


A tree has n−1 edges, so selecting that many columns makes a square matrix. Its determinant is a candidate test: dependent columns give zero. Squaring the determinant removes any sign introduced by orienting or ordering the edges. To aggregate these tests, we need one weight per selected edge and two copies of its column, one for each determinant factor. This suggests letting each column d_{e} contribute the rank-one matrix w_{e}d_{e}d_{e}^{T}. Their sum is DWD^{T}, where W is the diagonal matrix of edge weights. Its determinant is a candidate generating function; stage 3 will check exactly which selections survive.




## 2. Let a triangle show the mechanism

Orient the triangle as 0 → 1 → 2 → 0. Give those three edges positive weights a, b, c, respectively, and ground vertex 0. The matrices are



```text
D = [ 1  −1   0 ]       W = diag(a, b, c).
    [ 0   1  −1 ]
```

With p = (p_{1}, p_{2}), the edge differences are p_{1}, p_{2} − p_{1}, −p_{2}. Weighting those differences and collecting their vertex contributions produces the grounded Laplacian:



```text
L = DWDᵀ = [ a+b   −b  ]
           [ −b    b+c ].
```

Its determinant is (a+b)(b+c) − b² = ab + ac + bc. Each term is the product of the weights of one spanning tree. Setting all three weights to one gives three trees. This small case fits the proposed test. The general case requires showing both that unwanted selections vanish and that every tree contributes exactly one.




## 3. Make the determinant select trees

For a set S of n−1 edges, write D_{S} for their columns. The Cauchy–Binet determinant identity gives


det(DWD^{T}) = ∑_{|S|=n−1} det(D_{S})² ∏_{e∈S} w_{e}.


Here is why that determinant identity performs the selection. For an r-by-m matrix B and an m-by-r matrix C, expand each column of BC as a sum of columns of B. Multilinearity produces an ordered choice of r columns. A choice repeating a column has determinant zero: in the permutation expansion, swap the two positions of that repeated column to pair opposite terms. Group the remaining choices by their unordered set S. Their signed orderings give exactly det(C_{S}), leaving det(B_{S})det(C_{S}). Take B=D and C=WD^{T}; the diagonal weights factor out and the two minors agree.


A cycle makes its incidence columns dependent: follow the cycle and add the columns with their traversal signs. Their sum is zero. A set of n−1 edges that is not a spanning tree contains a cycle, because a forest on all n vertices has n minus its number of components edges. Consequently its determinant vanishes.


For a tree, choose a leaf other than the root. Its row has exactly one nonzero entry, equal to ±1. Expanding there removes that leaf and its edge. Repeat until the empty determinant, equal to one. Thus every tree minor is ±1.


After squaring, the determinant identity keeps each tree with coefficient one and rejects every other edge set. This proves the weighted matrix-tree formula. The graph problem has become a test of column independence, and the determinant performs the test for all candidate sets at once.




## 4. Read the same matrix another way

Now take all edge weights to be positive real numbers. The quadratic form p^{T}Lp is the sum of the weighted squared edge differences. A nonzero grounded potential has a nonzero difference somewhere, so this energy is positive and L is invertible.


For unit weights in the triangle, inject one unit of current at vertex 1 and remove it at the grounded vertex. The two unknown potentials satisfy


2p_{1} − p_{2} = 1, &nbsp; −p_{1} + 2p_{2} = 0.


Hence p_{1} = 2/3 and p_{2} = 1/3. The voltage drop per unit current is 2/3, the effective resistance between vertices 0 and 1. The three spanning trees also give that edge an inclusion probability of 2/3: exactly two contain it.




## 5. Other calculations from the same matrix

The agreement between resistance and tree probability is general. Write Z(w) = det L = ∑_{T} ∏_{f∈T} w_{f}, and choose a random spanning tree with probability proportional to its weight product. Differentiating the finite tree sum with respect to one edge weight gives


Pr(e ∈ T) = (w_{e}/Z) ∂Z/∂w_{e} = w_{e} ∂ log Z/∂w_{e}.


The same derivative can be computed from the small matrix. Since ∂L/∂w_{e} = d_{e}d_{e}^{T}, differentiating the determinant one column at a time and using the cofactor formula for the inverse gives


∂ log Z/∂w_{e} = d_{e}^{T}L^{−1}d_{e} = R_{e}.


To identify the last quantity, solve Lp = d_{e}. This injects unit current at the target of e and removes it at its source; a grounded endpoint is handled by the omitted row. The voltage difference is d_{e}^{T}p, which is exactly the effective resistance between the endpoints. Thus


Pr(e ∈ T) = w_{e}R_{e}.


Here the weights are electrical conductances. For the triangle, the probability of the edge of weight a is a(b+c)/(ab+ac+bc); the unweighted value is again 2/3. Summing the probabilities over all edges gives ∑_{e} w_{e}R_{e} = n−1, since every spanning tree has exactly that many edges.


This also measures the effect of changing a single weight. No tree uses an edge twice, so Z is affine in w_{e}. Let 1_{e} be the vector that is one at edge e and zero elsewhere. If only that weight changes by δ, with the new weight still positive, then the exact update is


Z(w + δ1_{e})/Z(w) = 1 + δR_{e}(w).


Thus one potential solve supplies both an edge-inclusion probability and the sensitivity of the entire tree sum to that edge. The determinant has retained enough information to answer a local change question after the original counting problem is solved.


For another determinant identity whose terms can be paired explicitly, follow [the walk-and-cycle proof of Cayley–Hamilton](https://refactor.press/refactors/cayley-hamilton.html). Its ansatz retains both parts of a cancellation instead of collecting their monomials too early.


Continue with [the full matrix-tree treatment](https://refactor.press/notes/what-a-boundary-map-can-prove.html#a-determinant-that-lists-all-spanning-trees), [electrical resistance](https://refactor.press/notes/what-a-boundary-map-can-prove.html#the-inverse-measures-resistance), or [the projection that gives joint tree probabilities](https://refactor.press/notes/what-a-boundary-map-can-prove.html#the-hodge-projection-becomes-a-probability-kernel). The original study also explains the extra arithmetic needed for higher-dimensional trees.



### Sources

The matrix-tree theorem and its electrical interpretation originate in Gustav Kirchhoff’s [Ueber die Auflösung der Gleichungen, auf welche man bei der Untersuchung der linearen Vertheilung galvanischer Ströme geführt wird](https://doi.org/10.1002/andp.18471481202) (1847), pp. 497–508. For the weighted probability formulation, see Russell Lyons and Yuval Peres, [Probability on Trees and Networks](https://rdlyons.pages.iu.edu/prbtree/) (Cambridge University Press, 2016), §4.1, especially Kirchhoff’s Effective Resistance Formula. The determinant selection, differentiation, and one-edge update are derived above.
