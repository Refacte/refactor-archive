# Classify compatible couplings

Henry Shin · Refactor · Mechanism calculus · Revised November 6, 2026

When can two commuting operations be separated by the same change of coordinates?

Begin with: Block matrices and solving linear equations over a field.

Two commuting operations can each admit a change of coordinates that removes a coupling, yet admit no common change. To understand that failure, we will describe every candidate complement by a graph, derive the equations for its slope, and turn the remaining ambiguity into a finite calculation. We will then design a correction rule that works for an entire family of inputs.



Here is the difficulty on a space with basis e_{1}, e_{2}, f. Both operations kill e_{1} and send e_{2} to e_{1}. The first kills f; the second sends it to e_{1}. Their products are zero, so they commute. Keep the subspace spanned by e_{1},e_{2} fixed. To separate off the remaining direction, replace f by f+se_{1}+te_{2}. The two images are



```text
T₁(f + se₁ + te₂) = te₁,
T₂(f + se₁ + te₂) = (1+t)e₁.
```

Both images lie in the fixed subspace, so invariance of a complementary line requires them to be zero. The first vanishes when t = 0, the second when t = −1. No common choice works. Each operation separately admits a complementary invariant line, but they admit no common one. The calculation below will classify all couplings with these same subspace and quotient actions, including this obstruction.




## Specify what is fixed

Work over a field k. Let N = k^{m} be a fixed subspace and L = k^{n} the quotient of a larger space by N: it records vectors modulo N. Two fixed matrices A_{1}, A_{2} commute on N, and two fixed matrices B_{1}, B_{2} commute on L. We seek all commuting operations on the larger space with these subspace and quotient actions.


A lift of a quotient vector is a chosen vector upstairs that represents it. Choose lifts of a basis of L and extend linearly. Every vector upstairs now has unique coordinates (n,l), so the underlying vector space is identified with N ⊕ L. This does not say that the chosen copy of L is preserved by either operation. Finding a copy preserved by both is the splitting problem.


The coordinates on N and L stay fixed. Only the lifts may change. This marking is part of the classification: two answers count as equivalent when one linear isomorphism intertwines both operations, fixes N pointwise, and induces the identity on the quotient.




## The unknown belongs in one block

Apply operation i to the chosen lift of l. Its quotient must be B_{i}l. Subtract the chosen lift of that vector. The difference lies in N; call it C_{i}l. Thus the unspecified part of the action is exactly one map C_{i}: L → N:



```text
Tᵢ = [ Aᵢ  Cᵢ ],
     [  0  Bᵢ ]
Tᵢ(n,l) = (Aᵢn + Cᵢl, Bᵢl).
```

The block shape follows from the fixed data. There can be no product C_{1}C_{2} in multiplying these two-block matrices: after a coupling sends L into N, the next operation is already specified by an A-block. This predicts a linear compatibility equation.




## Describe every candidate complement by its graph

To remove both couplings, we need a copy of L preserved by both operations. Such a complement must contain exactly one vector above each quotient vector l. In our coordinates, write that vector as (Sl,l). Because the complement is a subspace, its first coordinate depends linearly on l. This suggests the graph form



```text
Wₛ = { (Sl,l) : l ∈ L },     S : L → N.
```

Conversely, every linear S gives a complement, since (n,l) = (n−Sl,0)+(Sl,l) uniquely. The graph form is therefore exhaustive. Its unknown is the entire rectangular matrix S; requiring invariance will determine whether its entries can be chosen.


Applying T_{i} to a graph vector gives (A_{i}Sl+C_{i}l, B_{i}l). The only graph vector with that quotient is (SB_{i}l, B_{i}l). Equating them forces



```text
Dᵢ(S) := AᵢS − SBᵢ,
D₁(S) = −C₁,     D₂(S) = −C₂.
```

These are simultaneous Sylvester equations. The same S occurs because there is one proposed complement. Solving each equation with its own S would construct two different subspaces.




## Multiply before naming an obstruction

The diagonal blocks of T_{1}T_{2} and T_{2}T_{1} already agree. Their upper-right blocks agree exactly when



```text
d₁(C₁,C₂) = A₁C₂ + C₁B₂ − A₂C₁ − C₂B₁
          = D₁(C₂) − D₂(C₁) = 0.
```

The first two terms describe acting first by operation 2: its spill enters N, where operation 1 applies A_{1}; its quotient part spills a further C_{1}B_{2}l. The other order gives the last two terms. Their difference is the defect.


The maps D_{1}, D_{2} themselves commute on the space H = Hom(L,N) of rectangular matrices. Expanding on any S gives



```text
(D₁D₂ − D₂D₁)(S)
  = (A₁A₂ − A₂A₁)S − S(B₁B₂ − B₂B₁) = 0.
```

This second pair of commuting operations will let us build correction formulas from the first.




## Derive every allowed coordinate move

Replacing the chosen lift of l by that lift plus Sl gives the shear matrix below. Its inverse subtracts the same vector:



```text
Pₛ = [ I  S ],       Pₛ⁻¹ = [ I −S ].
     [ 0  I ]                [ 0  I ]
```

These are all the allowed changes. Fixing N pointwise forces the left column of blocks to be (I,0); inducing the identity on the quotient forces the lower-right block to be I. Only the upper-right block remains free. Thus the matrix calculation captures every equivalence specified at the start.


The map P_{S}(n,l) = (n+Sl,l) converts new coordinates into old coordinates: it takes the new copy 0 ⊕ L to the graph W_{S}. Thus the matrix in the new coordinates is P_{S}^{−1}T_{i}P_{S}. Multiplication gives



```text
Cᵢ′ = Cᵢ + Dᵢ(S),
d₀(S) = (D₁(S),D₂(S)).
```

The moves compose by addition: P_{S}P_{R} = P_{S+R}. They preserve the defect because d_{1}d_{0} = D_{1}D_{2}−D_{2}D_{1} = 0. In particular, the graph W_{S} is invariant under both operations exactly when this move makes both couplings zero. This proves the bridge from the graph ansatz back to the original operators.




## Turn the calculation into an algorithm

Use rectangular matrix units as a basis of H. Apply each map to the basis vectors and record the results as columns. There are mn coordinates in H and 2mn in the space of coupling pairs. Row reduction now supplies:



1. All compatible inputs. Find the kernel of d_{1}, the pairs it sends to zero.
2. Equivalence witnesses. For two compatible pairs C, C′, solve d_{0}(S) = C′−C. A solution gives T_{i}(C′) = P_{S}^{−1}T_{i}(C)P_{S} for both i.
3. Independent class parameters. Extend a basis of im(d_{0}) to a basis of ker(d_{1}). The added basis vectors give representatives for the quotient ker(d_{1})/im(d_{0}).

Here is how the third step produces the parameters. If V_{1}, …, V_{r} are the added basis vectors, expand a compatible pair in the extended basis:



```text
C = d₀(S) + t₁V₁ + ··· + tᵣVᵣ.
```

The coefficients t_{j} are unique. The matrix S need not be, because d_{0} may have a kernel. Apply the move with parameter −S to leave the representative ∑t_{j}V_{j}. Two inputs are equivalent exactly when these remaining coefficients agree. This is what the quotient records; its particular basis and parameter coordinates depend on our choices.


An inconsistent comparison also produces an explicit certificate. In the augmented system [d_{0} | C′−C], row reduction then gives a row [0 ··· 0 | b] with b ≠ 0. The same combination of the original rows defines a linear functional λ, a scalar linear expression in the coupling entries. It satisfies λd_{0} = 0 and λ(C′−C) = b. Every allowed move leaves λ unchanged, so the two inputs cannot be equivalent.


The allowed changes that fix a coupling are ker(d_{0}). They form its group of endpoint-preserving automorphisms, with addition of S as composition. Rank and nullity give the dimensions



```text
dim(classes) = 2mn − rank(d₁) − rank(d₀),
dim(automorphisms) = mn − rank(d₀).
```



## Run the whole calculation with a shared coordinate

Return to the opening example and allow all its unknown couplings. Take N = k², L = k, and



```text
A₁ = A₂ = J = [ 0  1 ],    B₁ = B₂ = 0,
              [ 0  0 ]
C₁ = [ a ],                C₂ = [ c ].
     [ b ]                     [ d ]
```

Compatibility says J(C_{2}−C_{1}) = 0, hence d = b. A lift change S = (s,t)^{T} adds (t,0)^{T} to both columns. With coupling coordinates (a,b,c,d), the two matrices are




```text
[d₀] = [ 0  1 ]
       [ 0  0 ]
       [ 0  1 ]
       [ 0  0 ]
```


```text
[d₁] = [ 0 −1  0  1 ]
       [ 0  0  0  0 ]
```



The kernel of d_{1} has basis (1,0,0,0), (0,1,0,1), (0,0,1,0). The image of d_{0} is spanned by (1,0,1,0). Choose t = −a. Every compatible pair is reduced to



```text
C₁ = [ 0 ],       C₂ = [ δ ],
     [ b ]            [ b ]
δ = c − a.
```

Both b and δ are unchanged by any allowed move. Conversely, two compatible inputs with the same b,δ are related by t = a′−a. These are therefore complete class parameters, not just two invariants we happened to find. The remaining coordinate s is free: the automorphisms are exactly S = (s,0)^{T}.




### Produce a witness, or an invariant that forbids one

Over the rationals, compare the coupling-coordinate vectors (2,3,7,3) and (5,3,10,3). Both have (b,δ) = (3,5). Taking S = (0,3)^{T} gives d_{0}(S) = (3,0,3,0), their difference. The corresponding P_{S} is an explicit equivalence.


The pair (5,3,11,3) instead has δ = 6. The functional λ(a,b,c,d) = c−a vanishes on every allowed move but distinguishes this pair from the first. It certifies inequivalence.




### Read the two parameters in the original operations

In the reduced coordinates, the full matrices satisfy




```text
T₁ = [ 0  1  0 ]
     [ 0  0  b ]
     [ 0  0  0 ]
```


```text
T₂ = [ 0  1  δ ]
     [ 0  0  b ]
     [ 0  0  0 ]
```



Writing E_{13} for the matrix with a single 1 in row 1, column 3, we obtain T_{1}² = bE_{13} and T_{2}−T_{1} = δE_{13}. For b ≠ 0 the quotient vector joins the chain e_{2} ↦ e_{1} ↦ 0 to make a three-step chain. All eigenvalues are still zero. The parameter δ records the relative action of the two operators, a different piece of information.


The opening puzzle is (b,δ) = (0,1). Its nonzero invariant δ now certifies the failure of a common splitting. More generally, a common splitting exists in this family exactly when b = δ = 0.


Extra requirements can change the answer. If T_{1}² = 0 is also imposed, it forces b = 0, while δ remains free. Commutativity alone did not impose that relation.




## Check the smallest case

For one-dimensional N and L, put Δ_{i} = A_{i}−B_{i}. Then



```text
Δ₁C₂ − Δ₂C₁ = 0,
(C₁,C₂) ↦ (C₁,C₂) + S(Δ₁,Δ₂).
```

If the vector of differences is nonzero, every compatible pair is a multiple of it and can be removed. Over the rationals, Δ = (1,2) and C = (3,6) are split by S = −3; (3,7) has defect 1 and does not commute. If both differences vanish, every pair is compatible and no move changes it. Two parameters survive.




## Combine the equations before solving

We can now classify a supplied pair. Can the fixed endpoint actions also give a formula that splits every compatible pair? The equations to solve are still D_{1}(S) = −C_{1} and D_{2}(S) = −C_{2}. Here S and the C_{i} are rectangular matrices, regarded as vectors in H; the D_{i} act on that space.


Write R = d_{1}(C_{1},C_{2}) for the compatibility defect. First suppose D_{1} is invertible and solve its equation. What remains of the second? Commutation gives



```text
D₁(D₂S + C₂) = D₂(D₁S) + D₁C₂
             = −D₂C₁ + D₁C₂ = R.
```

For a compatible input, R = 0. Invertibility then forces the second residual D_{2}S+C_{2} to vanish. One uniquely solvable equation has solved both.




### Try an invertible combination

If neither equation alone determines S, try combining them. Multiply by scalars α,β and add. Any common solution must satisfy



```text
FS = −(αC₁ + βC₂),
F := αD₁ + βD₂.
```

When F is invertible, this forces the candidate



```text
S = −F⁻¹(αC₁ + βC₂).
```

Solving the combined equation is not yet a proof that both original equations hold. To check them, use FD_{i} = D_{i}F and substitute the combined equation. For the first residual this gives



```text
F(D₁S + C₁)
  = −D₁(αC₁ + βC₂) + FC₁ = −βR.
```

The same expansion gives F(D_{2}S+C_{2}) = αR. Thus both residuals vanish when R = 0. If S and S′ are two common corrections, their difference U satisfies D_{1}U = D_{2}U = 0. Hence FU = 0 and U = 0: the common correction is unique.


This strengthens the first test. For N = k², L = k, both B-blocks zero, take



```text
A₁ = diag(0,1),       A₂ = diag(1,0),
C₁ = (0,y)ᵀ,          C₂ = (z,0)ᵀ,
S  = (−z,−y)ᵀ.
```

Compatibility forces exactly the displayed column shapes. Neither D_{i} is invertible, but their sum is I. The first equation determines one coordinate of the correction; the second determines the other.




## Design a reconstruction rule

The correction equations are linear, so a linear rule is a natural target. If every compatible pair has a solution, choose solutions for a basis of compatible pairs and extend by linearity on that subspace. Thus whenever all those pairs can be split, a linear rule for doing so exists.


A weighted combination is one way to recover S from its two prescribed images. More generally, can the two measurements D_{1}U,D_{2}U reconstruct any matrix U in H? A linear rule combining two inputs has the form K_{1} applied to the first plus K_{2} applied to the second, where each K_{i} is an operator on H. Requiring reconstruction gives the coefficient equation



```text
U = K₁(D₁U) + K₂(D₂U),
K₁D₁ + K₂D₂ = I.
```

We will seek our rule through this reconstruction identity. If it holds, any solution of the two correction equations must be



```text
S = −(K₁C₁ + K₂C₂).
```

This determines a candidate; it still needs verification. We deliberately look for K_{1},K_{2} that commute with both D_{i}. That is a design condition with a specific use: it lets us pass the coefficients through the equations and replace mixed terms by the compatibility defect.


For example, with R = D_{1}C_{2}−D_{2}C_{1}, the first changed coupling is



```text
C₁′ = C₁ − K₁D₁C₁ − K₂D₁C₂
    = (I − K₁D₁ − K₂D₂)C₁ − K₂R.
```

The key step is replacing D_{1}C_{2} by D_{2}C_{1}+R. The other column gives



```text
C₂′ = (I − K₁D₁ − K₂D₂)C₂ + K₁R.
```

Under the reconstruction identity the result is exactly (C′_{1},C′_{2}) = (−K_{2}R,K_{1}R). Compatible input is split; incompatible input leaves a pair built entirely from its unchanged defect. The coefficient equation was chosen to reconstruct the unknown, and its verification shows that the same rule cancels everything except the defect.




### Build the coefficients from known operations

The weighted rule has K_{1} = αF^{−1}, K_{2} = βF^{−1}. Since F commutes with each D_{i}, multiplying that equality by F^{−1} on both sides shows that its inverse does too. This explains why the rule fits the reconstruction calculation.


To obtain further commuting coefficients, use polynomials in the already commuting D_{1},D_{2}. This includes the weighted rule in finite dimension. Indeed, the powers of F are matrices in a finite-dimensional space, so they satisfy a nonzero polynomial relation. Choose one of least degree. Its constant coefficient is nonzero: otherwise multiplying by F^{−1} would give a relation of smaller degree. Multiplying this relation by F^{−1} and isolating that term expresses F^{−1} as a polynomial in F. We now allow the two polynomial coefficients to vary independently.


Here is a case where this extra freedom is necessary to find such a certificate. Work over the two-element field F_{2}, where 1+1 = 0. Take N = F_{2}³, L = F_{2}, and both B-blocks zero. Identify H with the space of three-entry columns, so D_{i} = A_{i}. Choose



```text
D₁ = diag(1,0,1),
D₂ = diag(0,1,1).
```

The only nonzero scalar combinations are D_{1}, D_{2}, and D_{1}+D_{2} = diag(1,1,0). All are singular. Instead reconstruct a vector by its coordinates. The first measurement already supplies coordinates one and three. The operator I−D_{1} selects the missing second coordinate, and the second measurement supplies exactly that coordinate. Hence



```text
D₁ + (I − D₁)D₂ = I,
K₁ = I,     K₂ = I − D₁ = I + D₁.
```

Compatibility, checked one coordinate at a time, requires the first coordinate of C_{2} and the second of C_{1} to be zero, and their third coordinates to agree. Thus the input and its reconstructed correction are



```text
C₁ = (a,0,c)ᵀ,       C₂ = (0,b,c)ᵀ,
S  = (a,b,c)ᵀ.
```

Checking each coordinate verifies D_{i}S = −C_{i}. The failure of scalar weights is specific to F_{2}; enlarging the field can supply more weights.




### Make the coefficient search finite

Represent the operators on H by h × h matrices, where h = mn is positive. Start a list with I. Process each listed matrix by multiplying it by D_{1} and D_{2}. Append a result, to be processed in turn, whenever it is independent of the current list. Every addition increases the span dimension, so at most h² matrices can be retained.


When all retained matrices have been processed, their span is closed under both multiplications. It contains every product by induction on the number of factors. Conversely, every retained matrix was obtained from such a product. The final span is therefore exactly the polynomial operators available from the two moves; no higher degree can add a new coefficient operator.


Call the retained matrices M_{1}, …, M_{q}. Now make the coefficient ansatz explicit:



```text
K₁ = ∑ pⱼMⱼ,     K₂ = ∑ qⱼMⱼ,
∑ (pⱼMⱼD₁ + qⱼMⱼD₂) = I.
```

All matrices here are known. Equating their entries gives linear equations in the unknown scalars p_{j},q_{j}. This is a complete finite search for the stated polynomial reconstruction identity, using the same row reduction as before.


A smaller degree trial can be cheaper, but its failure only rules out that trial. Even failure of the full search does not show that a particular input is unsplittable: the zero pair, for example, always splits. Test an individual input by its own d_{0} equation. The benefit of a successful reconstruction is that its one certificate supplies corrections for every compatible input with the same endpoint actions; no speed advantage over a direct solve is asserted.




## See where products of couplings first appear

The two-block shape prevented products of unknown couplings. Add a third layer and such products become possible. Write



```text
Tᵢ = [ Aᵢ  Xᵢ  Zᵢ ].
     [  0  Bᵢ  Yᵢ ]
     [  0   0  Eᵢ ]
```

Suppose the diagonal pairs commute and the adjacent blocks X,Y already satisfy their two-layer compatibility equations. The top-right blocks of the two products are



```text
(T₁T₂)₁₃ = A₁Z₂ + X₁Y₂ + Z₁E₂,
(T₂T₁)₁₃ = A₂Z₁ + X₂Y₁ + Z₂E₁.
```

The term X_{1}Y_{2} is a new route: from the third layer through the second into the first. Equating the two orders gives the corner equation



```text
A₁Z₂ + Z₁E₂ − A₂Z₁ − Z₂E₁
  = −(X₁Y₂ − X₂Y₁).
```

When all couplings vary, these products make the equations quadratic. Once X,Y are fixed, the displayed equation remains linear in Z_{1},Z_{2}. Its right-hand side must lie in the image of the linear map on the left; this can fail.


Take three one-dimensional layers, all diagonal actions zero, and X_{1} = Y_{2} = 1, X_{2} = Y_{1} = 0. Both adjacent two-layer problems commute. The remaining equation is 0 = −1, regardless of Z_{1},Z_{2}. Equivalently, T_{1} = E_{12}+z_{1}E_{13} and T_{2} = E_{23}+z_{2}E_{13} have commutator E_{13} for every corner choice. Retaining the composed interaction exposes why these individually compatible pieces cannot be assembled.




## What the calculation establishes

The two-layer calculus classifies the stated marked couplings and returns witnesses or invariants for comparisons. The graph ansatz identifies splitting with one common correction. The operator identity supplies a reusable splitting formula when its coefficients can be found. The three-layer calculation exhibits the new product that the two-layer representation excluded.


With more commuting operations but still two layers, introduce one block per operation and one linear compatibility equation per pair. Additional relations such as T_{1}T_{2} = 0 must also be expanded and imposed. All calculations here are exact over the given field; implementation cost depends on the field representation, dimensions, and method used to solve the linear systems.




### Sources and terminology

These constructions give explicit forms of classical extension and simultaneous-Sylvester calculations. Two commuting operations make a vector space into a module over k[x,y]. The [Stacks Project, §12.6, Definitions 12.6.1–12.6.2](https://stacks.math.columbia.edu/tag/010I), specifies the endpoint-preserving equivalence used here. The correction identity is a concrete version of the Koszul contraction mechanism; see [Lemma 15.29.5](https://stacks.math.columbia.edu/tag/0626). The displayed matrix calculations establish the claims without requiring that terminology.


For the broader simultaneous-equation and joint-spectrum theory over the complex numbers, see S.-G. Lee and Q.-P. Vu, [Simultaneous solutions of Sylvester equations and idempotent matrices separating the joint spectrum](https://doi.org/10.1016/j.laa.2010.09.034), Linear Algebra and its Applications 435 (2011), 2097–2109. [Nick Higham’s account of the Sylvester equation](https://nhigham.com/2020/09/01/what-is-the-sylvester-equation/) explains its block-diagonalization interpretation and numerical conditioning. The [archived Tensorgami study](https://refactor.press/notes/quotients-and-reconstruction.html#t:commuting-calculus) gives further extension-theory context.
