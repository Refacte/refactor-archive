# Construct every tensor chain

Henry Shin · Refactor · Mechanism calculus · Revised November 6, 2026

How can we construct every chain for the combined operator?

Begin with: Finite-dimensional linear algebra and polynomial arithmetic; characteristic zero is explicit.

One operation adds a rightward move and an upward move on a finite grid. We want a basis in which it simply moves along separate chains. We will design a backward operation by specifying what its interaction with the forward move should measure. The resulting equations determine its coefficients, then the starting vectors, the chain lengths, and an actual change of basis.




## A grid, a move, and the answer to construct

Work over a field k of characteristic zero. Fix positive integers r and s. Our vector space has basis x^{i}y^{j}, where 0 ≤ i < r and 0 ≤ j < s. Declare a monomial zero whenever an exponent reaches its bound. This is the truncated polynomial space M = k[x,y]/(x^{r},y^{s}), of dimension rs.


The operation is multiplication by x+y:



```text
E(xⁱyʲ) = xⁱ⁺¹yʲ + xⁱyʲ⁺¹.
```

A chain is a list v, Ev, …, E^{L−1}v of nonzero vectors with E^{L}v = 0. We seek starting vectors whose chains together form a basis. Starting from individual monomials can duplicate directions: on a two-by-two grid, Ex = xy = Ey. We need a way to choose starts and prove their chains do not overlap.


The total degree of x^{i}y^{j} is i+j. Each forward step raises degree by one, and the largest degree is r+s−2. Consequently E^{r+s−1} = 0. If one side has length one, the remaining row or column is already a single chain. The construction below handles two active directions and its formulas also specialize to those one-chain cases.




## Give a backward move a job

Suppose an operator F could send each E^{a}v to a known scalar times the preceding vector. It would let us measure chain length and separate competing chains. We do not know either F or the starts yet. To see what interaction would help, put D = FE−EF. Moving F past the first two forward steps gives



```text
FEv = EFv + Dv,
FE²v = E²Fv + EDv + DEv.
```

Take a homogeneous starting vector v of degree k, meaning that all its monomials have that degree. Then E^{t}v has degree k+t whenever it is nonzero. If Fv = 0 and D acts by a scalar ω_{d} on each degree d, the two exchanges become



```text
FEv = ωₖv,
FE²v = (ωₖ + ωₖ₊₁)Ev.
```

Thus degree alone tells us which scalar to add at each exchange, even though E branches into different monomials. This is the reason to ask for a degree-only discrepancy. Without homogeneity, different degree components can acquire different scalars.


There is a separate reason to try local backward moves. The preceding chain vector has degree one less, and reversing an edge already used by E lowers degree by exactly one. Restricting to those edges keeps the unknowns attached to the original grid. More general degree-lowering maps are possible; locality is our first, manageable search class. We will impose the degree-only discrepancy on that class and solve its coefficient equations.




### Make the local terms cancel

Write m_{ij} = x^{i}y^{j}. The most general reverse-edge move has the form



```text
F(mᵢⱼ) = aᵢⱼmᵢ₋₁,ⱼ + bᵢⱼmᵢ,ⱼ₋₁.
```

Terms outside the grid are omitted. In FE−EF, a step right followed by down can leave us at m_{i+1,j−1}; a step up followed by left can leave us at m_{i−1,j+1}. For targets inside the grid their coefficients are



```text
at mᵢ₊₁,ⱼ₋₁:  bᵢ₊₁,ⱼ − bᵢⱼ,
at mᵢ₋₁,ⱼ₊₁:  aᵢ,ⱼ₊₁ − aᵢⱼ.
```

They must vanish if D is to multiply each monomial by a scalar. Thus the leftward coefficient depends only on i, and the downward coefficient only on j. Call them c_{i} and d_{j}. The coordinatewise form of F has followed from the cancellation requirement.


Set c_{0} = c_{r} = d_{0} = d_{s} = 0. The bottom values forbid a backward step out of the grid. The top values are formal boundary values, allowing the same difference formula to include the missing forward step at the top edge. Then



```text
D(mᵢⱼ) = (δᵢ + εⱼ)mᵢⱼ,
δᵢ = cᵢ₊₁ − cᵢ,     εⱼ = dⱼ₊₁ − dⱼ.
```

The ordinary derivative would suggest c_{i} = i, but it sends the zero relation x^{r} to the nonzero vector rx^{r−1}. The boundary is a real constraint. In particular, a nonzero constant row discrepancy is impossible: ∑δ_{i} = c_{r}−c_{0} = 0.




### Let degree determine the remaining coefficients

Assume r,s ≥ 2 for this coefficient determination. The monomials m_{i+1,j} and m_{i,j+1} have equal total degree. Our degree-only requirement therefore forces



```text
δᵢ₊₁ − δᵢ = εⱼ₊₁ − εⱼ
(0 ≤ i < r−1,  0 ≤ j < s−1).
```

When both directions are present, the indices vary independently. Both sides must be the same constant λ. Hence δ_{i} = A+λi and ε_{j} = B+λj. Summing along each row or column and using the zero boundary values gives



```text
0 = rA + λr(r−1)/2,
0 = sB + λs(s−1)/2.
```

If λ = 0, all coefficients vanish. Otherwise rescale F so λ = −2. This fixes only its scale. Now A = r−1, B = s−1, and summing the differences determines the move:



```text
cᵢ = i(r−i),     dⱼ = j(s−j),
F(xⁱyʲ) = i(r−i)xⁱ⁻¹yʲ + j(s−j)xⁱyʲ⁻¹.
```

When r,s ≥ 2, the nonzero reverse-edge moves satisfying the degree-only requirement are therefore determined up to scale. Define H to be the negative of the discrepancy; it simply records degree:



```text
H(xⁱyʲ) = (2(i+j) − (r+s−2))xⁱyʲ,
FE − EF = −H,     HE − EH = 2E.
```

The first identity is the difference calculation above. The second holds because each surviving forward step raises degree by one, changing the weight by two. The displayed formulas also satisfy both identities when one grid side has length one.




## Turn the search for starting vectors into a recurrence

We now choose starts with Fv = 0, so moving F through forward steps leaves no unknown backward term. Search one total degree at a time. This is compatible with the equation: F lowers degree by one, so if F kills a sum of homogeneous parts, it kills each part separately.


In degree k below both bounds there are k+1 monomials and only k monomials in degree k−1. This suggests trying one new start for each 0 ≤ k < h = min(r,s). It is a productive range to try, not yet a proof that these starts suffice. Write



```text
vₖ = Σⱼ₌₀ᵏ aⱼxʲyᵏ⁻ʲ.
```

The coefficient of x^{j}y^{k−j−1} in Fv_{k} receives two contributions: lowering the x-exponent in the next term, and lowering the y-exponent in the current term. Setting their sum to zero gives, for 0 ≤ j < k,



```text
aⱼ₊₁(j+1)(r−j−1) + aⱼ(k−j)(s−k+j) = 0,
aⱼ₊₁ = −aⱼ (k−j)(s−k+j) / ((j+1)(r−j−1)).
```

Each denominator is nonzero in characteristic zero because j < k < r. All coefficients are determined by a_{0}; if it is zero, all are zero. Thus the degree-k kernel is exactly one-dimensional. Set a_{0} = 1 to choose a nonzero start. For k = 0 this says v_{0} = 1.




## The backward move determines the length

Put m_{k} = r+s−2−2k. Since v_{k} has degree k,



```text
HEᵃvₖ = (−mₖ+2a)Eᵃvₖ.
```

We claim, for every integer a ≥ 1,



```text
FEᵃvₖ = a(mₖ−a+1)Eᵃ⁻¹vₖ.
```

For a = 1, the relation FE = EF−H and Fv_{k} = 0 give FEv_{k} = m_{k}v_{k}. If the formula holds for a, one more exchange gives



```text
FEᵃ⁺¹vₖ = EFEᵃvₖ − HEᵃvₖ
          = [a(mₖ−a+1) + mₖ−2a]Eᵃvₖ
          = (a+1)(mₖ−a)Eᵃvₖ.
```

This is the payoff of the degree-only discrepancy: each exchange contributes one scalar, and those scalars form an arithmetic progression.


Because E is nilpotent and v_{k} ≠ 0, there is a last exponent q with E^{q}v_{k} ≠ 0. Apply the formula to the next, zero vector:



```text
0 = F(Eᑫ⁺¹vₖ)
  = (q+1)(mₖ−q)Eᑫvₖ.
```

The last vector is nonzero, and q+1 is nonzero in characteristic zero. Hence q = m_{k}. The chain has exactly r+s−1−2k vectors. No guessed block lengths were used to construct it.




## Prove that nothing overlaps and nothing is missing

Repeatedly applying the backward formula gives, for 0 ≤ a ≤ m_{k},



```text
FᵃEᵃvₖ = [∏ₜ₌₁ᵃ t(mₖ−t+1)]vₖ.
```

The empty product is 1. Every factor in the stated range is a positive integer, so the scalar is nonzero in our field. Applying more than a backward moves kills E^{a}v_{k}, since the next move reaches Fv_{k} = 0.


Consider a relation among the constructed, nonzero chain vectors of a fixed total degree d. Its terms have the form E^{d−k}v_{k}. Choose the least k with nonzero coefficient and apply F^{d−k}. The selected term becomes a nonzero scalar times v_{k}. Every larger-index term has fewer forward steps and is killed. This is a contradiction. Relations between different degrees split into separate homogeneous relations, so all the constructed vectors are independent.


Their number is



```text
Σₖ₌₀ʰ⁻¹(r+s−1−2k) = h(r+s−h) = rs.
```

This equals dim M. The independent chains therefore form a basis. The count proves that the earlier search range supplied everything needed.




## Run it on a two-by-three grid

Set r = 2, s = 3, so x² = y³ = 0. The backward coefficients give Fx = 1 and Fy = 2. The degree-zero start is 1. In degree one the recurrence gives



```text
a₁ = −(1·2)/(1·1) = −2,
v₁ = y−2x,     Fv₁ = 2−2 = 0.
```

Multiplying the first start successively by x+y, and dropping terms outside the grid, gives



```text
1 → x+y → 2xy+y² → 3xy² → 0.
```

For the second start, the same multiplication performs a cancellation:



```text
E(y−2x) = y²−xy,
E(y²−xy) = xy²−xy² = 0.
```

The lengths are four and two, agreeing with the general construction. In degree one the two vectors x+y, y−2x have determinant 3 in the basis (x,y). In degree two, 2xy+y² and y²−xy also have determinant 3 in the basis (xy,y²). Thus the two chains really separate even where their degrees coincide.


For a literal change-of-basis certificate, order the monomial basis as B = (1,y,y²,x,xy,xy²). Put the two forward chains, one after the other, in the columns of P:



```text
P = [ 1  0  0  0  0  0 ]
    [ 0  1  0  0  1  0 ]
    [ 0  0  1  0  0  1 ]
    [ 0  1  0  0 −2  0 ]
    [ 0  0  2  0  0 −1 ]
    [ 0  0  0  3  0  0 ]
```

Its determinant is 27. If A is the matrix of E in B, applying E to these columns gives AP = P(J_{4} ⊕ J_{2}), where J_{ℓ} has ones immediately below the diagonal and zero elsewhere. This convention records forward movement along a listed chain. Reversing each chain gives the usual upper-diagonal convention.




## The resulting change of basis

The recurrence constructs every column, and the backward calculation proves both its chain length and its independence. For arbitrary positive r,s, the resulting block sizes are r+s−1, r+s−3, …, |r−s|+1.


To return to the tensor notation, identify e_{i} ⊗ f_{j} with x^{i}y^{j}. The forward shifts on the two factors become multiplication by x and y. Their sum is E. Thus the constructed basis proves



```text
Jᵣ ⊗ Iₛ + Iᵣ ⊗ Jₛ
  ∼ ⊕ₖ₌₀ʰ⁻¹ Jᵣ₊ₛ₋₁₋₂ₖ,     h = min(r,s).
```

This is the Kronecker-sum rule. Adding αI to the first factor and βI to the second adds (α+β)I to the sum. The same basis therefore gives the same block sizes with eigenvalue α+β.


A chain of length L contributes max(L−a,0) to the rank of E^{a} and min(a,L) to its nullity. For every integer a ≥ 0,



```text
rank(Eᵃ) = Σₖ₌₀ʰ⁻¹ max(r+s−1−2k−a,0).
```

The two-by-three example has ranks 6,4,2,1,0 for a = 0,1,2,3,4. In general, the nilpotency index is r+s−1 and dim ker E = min(r,s). These are further outputs of the same basis, requiring no new expansions.




### Where the field hypothesis matters

Characteristic zero ensures that the divisions and nonzero integer factors in the proof remain valid. The restriction cannot simply be dropped. On a two-by-two grid in characteristic two, (x+y)² = 0. The image of E is spanned by x+y and xy, so its rank is two and its chains have lengths two and two, rather than three and one. Some positive-characteristic examples still have the characteristic-zero answer; the statement here is uniform over characteristic zero.




### Sources and the classical rule

The displayed commutator identities are part of the standard finite-dimensional sl_{2} relations, and the block formula is the classical Clebsch–Gordan rule in this setting. See Pavel Etingof and collaborators, [Introduction to Representation Theory](https://math.mit.edu/~etingof/reprbook.pdf) (American Mathematical Society, 2011), §2.14 and Problem 2.15.1(m)–(n), printed pages 37–39. Part (n) asks exactly for the Jordan form of this Kronecker sum. That exercise works over the complex numbers; the explicit argument above proves the stated result over any characteristic-zero field, without a complete-reducibility theorem. Further geometric interpretations appear in the [archived Tensorgami study](https://refactor.press/notes/fourier-symmetry-and-reconstruction.html#jordan-tensor-calculus).
