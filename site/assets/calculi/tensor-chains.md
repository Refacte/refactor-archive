# Construct every tensor chain

Henry Shin · Refactor · Mechanism calculus · Revised November 5, 2026

How can we construct every chain for the combined operator?

Begin with: Finite-dimensional linear algebra and polynomial arithmetic; characteristic zero is explicit.

On a rectangular grid of monomials, one operation adds the rightward and upward moves. Finding its chains by repeated expansion soon becomes unwieldy. We will design a backward operation that measures how many forward steps have been taken, then use it to construct the chains and separate them.




## A grid, a move, and the answer to construct

Work over a field of characteristic zero. Fix positive integers r and s. The vector space has basis x^{i}y^{j}, with 0 ≤ i < r and 0 ≤ j < s. Set a monomial equal to zero whenever either exponent reaches its bound. Thus we can write the space as M = k[x,y]/(x^{r},y^{s}).


The forward move is E f = (x + y)f. A chain starts at a vector v and follows v, Ev, E^{2}v, … until the next vector is zero. We seek starting vectors whose chains, taken together, form a basis.



```text
E(xⁱyʲ) = xⁱ⁺¹yʲ + xⁱyʲ⁺¹.
```



## Invent a backward move with a simple discrepancy

Suppose a backward move F could send E^{a}v to a known multiple of E^{a−1}v. It would tell us where the chain stops and let us distinguish its vectors from other chains. We do not yet know v or F, but this gives the auxiliary operation a concrete job.


Begin with one row, k[x]/(x^{r}), where E raises the exponent. The ordinary derivative looks like a candidate for lowering it. At the top edge, however, it would send the zero relation x^{r} to the nonzero vector rx^{r−1}. Equivalently, defining the derivative only on the surviving basis gives a constant discrepancy in the interior and an exceptional one at the top.


Allow the backward coefficients to adjust to both ends:



```text
F(xⁱ) = cᵢxⁱ⁻¹,       c₀ = cᵣ = 0.
```

Here c_{0} = 0 stops the move below the bottom. The formal endpoint value c_{r} = 0 makes the same rule respect the top truncation. On a surviving basis vector, the difference FE − EF is now multiplication by c_{i+1} − c_{i}, including at the endpoints.


A nonzero constant discrepancy is impossible: summing it across the row would contradict c_{r} − c_{0} = 0. The next simplest choice is an affine function of i. Its change under a forward step is constant, so commuting F past repeated forward steps will add an arithmetic progression. Choose its drop to be two; another nonzero drop merely rescales F:



```text
cᵢ₊₁ − cᵢ = A − 2i,
0 = cᵣ − c₀ = rA − r(r−1),
so A = r−1 and cᵢ = i(r−i).
```

The affine-discrepancy requirement is a design choice, not a consequence of the original problem. The endpoint equations then determine its intercept and every coefficient. For the grid, add the two backward moves; this keeps the work in each coordinate independent:



```text
F(xⁱyʲ) = i(r−i)xⁱ⁻¹yʲ + j(s−j)xⁱyʲ⁻¹.
H(xⁱyʲ) = (2(i+j) − (r+s−2))xⁱyʲ.
FE − EF = −H,       HE − EH = 2E.
```

Terms with zero coefficients are omitted. The two identities follow by expanding on a monomial; moves in different coordinates commute. They are the only operator identities the argument needs.




## Turn the search for starting vectors into a recurrence

To make the backward move count forward steps from a chosen start, impose Fv = 0. Then commuting F through E^{a}v will leave no unknown backward term at the end. Also keep v in a single total degree, where the diagonal operation H acts by one scalar.


In degree k below both truncation bounds, every monomial x^{j}y^{k−j} is available. There are k+1 unknown coefficients and k equations in degree k−1. This suggests looking for one new start in each degree 0 ≤ k < min(r,s). Write the general vector in that degree and fix its scale:



```text
vₖ = Σⱼ₌₀ᵏ aⱼ xʲyᵏ⁻ʲ,       a₀ = 1.
```

The coefficient of x^{j}y^{k−j−1} in Fv_{k} receives exactly two contributions. Make them cancel:



```text
aⱼ₊₁(j+1)(r−j−1) + aⱼ(k−j)(s−k+j) = 0,
aⱼ₊₁ = −aⱼ (k−j)(s−k+j) / ((j+1)(r−j−1)).
```

Every denominator is nonzero because j < k < r, and the field has characteristic zero. The recurrence determines all coefficients from a_{0}; taking a_{0} = 1 gives a nonzero start. This constructs the proposed starts. The length and basis arguments below will decide whether they suffice.




## The backward move determines the length

Put m_{k} = r + s − 2 − 2k. Then Hv_{k} = −m_{k}v_{k}. Inductively commuting F past each forward step gives



```text
FEᵃvₖ = a(mₖ−a+1)Eᵃ⁻¹vₖ.
```

For the induction, the next exchange adds the weight m_{k} − 2a; adding this to a(m_{k}−a+1) gives (a+1)(m_{k}−a). This is why the arithmetic progression was useful.


Since E raises degree in a bounded grid, it is nilpotent. Let q be the last exponent with E^{q}v_{k} ≠ 0. Apply the formula to the next, zero vector. It gives 0 = (q+1)(m_{k}−q)E^{q}v_{k}. Thus q = m_{k}. This chain has exactly r+s−1−2k vectors.




## Prove that nothing overlaps and nothing is missing

In a relation of total degree d, the possible vectors are E^{d−k}v_{k}. Choose the least k occurring with nonzero coefficient and apply F^{d−k}. Every larger-index term dies: it has fewer forward steps to undo before reaching a start killed by F. The chosen term becomes a nonzero scalar times v_{k}. This contradicts the relation. Different total degrees separate, so all the constructed vectors are independent.


Writing h = min(r,s), their number is Σ_{k=0}^{h−1}(r+s−1−2k) = h(r+s−h) = rs. That is the dimension of the grid. The chains therefore form a basis.




## Run it on a two-by-three grid

For (r,s) = (2,3), the starts are 1 and y−2x. The complete basis is displayed by two chains:



```text
1 → x+y → 2xy+y² → 3xy² → 0,
y−2x → y²−xy → 0.
```

The construction uses characteristic zero in an essential way. In characteristic two, on a two-by-two grid, (x+y)² = 0. The characteristic-zero answer of lengths three and one cannot survive there.




## The resulting change of basis

The original problem asked for a change of basis for the combined move. The backward-move ansatz replaced that search by endpoint equations, a coefficient recurrence, and a short cancellation argument. We obtain the vectors as well as the lengths. In this basis, the combined move has nilpotent blocks of lengths r+s−1, r+s−3, …, |r−s|+1.


In matrix language, let J_{ℓ} denote a nilpotent Jordan block of size ℓ. The separate moves on the two factors are single Jordan blocks, so the combined move is their Kronecker sum. The constructed basis proves the similarity



```text
Jᵣ ⊗ Iₛ + Iᵣ ⊗ Jₛ  ∼  ⊕ₖ₌₀ʰ⁻¹ Jᵣ₊ₛ₋₁₋₂ₖ,       h = min(r,s).
```

The same basis also handles blocks with scalar eigenvalues: adding αI to the first factor and βI to the second adds α+β to every resulting block. This is the tensor-product rule for the action of an operator that acts by the sum of its two factor actions.


The lengths answer further questions without expanding another power. A chain of length L contributes max(L−a, 0) to the rank of E^{a}, and min(a, L) to its nullity. Hence, for every integer a ≥ 0,



```text
rank(Eᵃ) = Σₖ₌₀ʰ⁻¹ max(r+s−1−2k−a, 0).
```

For the two-by-three grid the ranks are 6, 4, 2, 1, 0 for a = 0, 1, 2, 3, 4. The nilpotency index is r+s−1, and dim ker E = min(r,s). The backward move has therefore made both the basis and the behavior of all iterates explicit.



### Sources and the classical rule

The operators are the standard finite-dimensional sl_{2} construction, and the block decomposition is its Clebsch–Gordan rule. See Pavel Etingof and collaborators, [Introduction to Representation Theory](https://math.mit.edu/~etingof/reprbook.pdf) (American Mathematical Society, 2011), §§2.14–2.15, especially Problem 2.15.1(m). The construction and basis proof here are explicit over any field of characteristic zero; no complete-reducibility theorem is assumed. Further geometric interpretations appear in the [archived Tensorgami study](https://refactor.press/notes/fourier-symmetry-and-reconstruction.html#jordan-tensor-calculus).
