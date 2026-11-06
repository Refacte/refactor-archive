# Classify compatible couplings

Henry Shin · Refactor · Mechanism calculus · Revised November 5, 2026

Which couplings of two commuting operations are genuine, and which disappear after a change of lift?

Begin with: Block matrices and solving linear equations over a field.

Knowing what two operations do on a subspace and on the quotient does not determine their action on the whole space. The missing information is the subspace component produced when an operation acts on a chosen lift. Keeping those off-diagonal components gives a small linear problem, including an explicit test for whether two answers describe the same operations in different coordinates.




## Specify what is fixed

Let N = k^{m} and L = k^{n} over a field k. Two fixed matrices A_{1}, A_{2} commute on N, and two fixed matrices B_{1}, B_{2} commute on L. We seek commuting operations on N ⊕ L whose restrictions to N and induced operations on L are these matrices.


The coordinates on N and L stay fixed. Only the chosen lifts of vectors of L into the larger space may change. This marking is part of the question; allowing arbitrary basis changes would ask for a different classification.




## The unknown belongs in one block

Choose lifts of a basis of L. For a vector l, applying the larger operation to its lift must project to B_{i}l. The difference between that result and the chosen lift of B_{i}l therefore lies in N. Call it C_{i}l. This is exactly the information left unspecified by the input.


In these coordinates, a vector is a pair (n,l), and its image is (A_{i}n + C_{i}l, B_{i}l). Thus the matrix shape is forced:



```text
Tᵢ = [ Aᵢ  Cᵢ ],        Cᵢ : L → N.
     [  0  Bᵢ ]
```

Rather than guess two whole matrices, keep only the two unknown rectangular blocks. There can be no product C_{1}C_{2}: each C_{i} goes from L to N, where the next operation is already fixed by A_{j}. This predicts that the commutativity test will be linear in the missing information.




## Multiply before naming an obstruction

The diagonal blocks of T_{1}T_{2} and T_{2}T_{1} already agree. Their upper-right blocks agree exactly when



```text
d₁(C₁,C₂) = A₁C₂ + C₁B₂ − A₂C₁ − C₂B₁ = 0.
```

The formula also has a direct reading. Acting first by operation 2 spills C_{2}l into N, where operation 1 applies A_{1}; the quotient part B_{2}l spills a further C_{1}B_{2}l. Reversing the order gives the other two terms. Their difference is the defect.




## Derive the allowed coordinate move

A different choice of lifts adds some Sl in N to each lift. The same S must be used for both operations: we are changing the coordinates of their shared space, not choosing a separate space for each matrix. This gives the matrix P_{S}; its inverse subtracts the same vector:



```text
Pₛ = [ I  S ],       Pₛ⁻¹ = [ I −S ].
     [ 0  I ]                [ 0  I ]
```

Directly multiplying P_{S}^{−1}T_{i}P_{S} gives



```text
Cᵢ′ = Cᵢ + AᵢS − SBᵢ,
d₀(S) = (A₁S−SB₁, A₂S−SB₂).
```

These moves add: P_{S}P_{R} = P_{S+R}. A second multiplication verifies that they preserve compatibility:



```text
d₁d₀(S) = (A₁A₂−A₂A₁)S − S(B₁B₂−B₂B₁) = 0.
```

Thus changing the lifts moves a compatible pair in a direction that keeps its defect zero. In particular, trying to remove the spill means solving both equations A_{i}S − SB_{i} = −C_{i} for one common S. Solving the two equations separately would not answer that question.




## Turn the calculation into an algorithm

Use rectangular matrix units as coordinates. Apply d_{0} to each unit and record the results as columns. Do the same for d_{1}. Row reduction now performs three tasks:



1. Solve d_{1}(C) = 0 to obtain every compatible coupling.
2. To compare two couplings, solve d_{0}(S) = C′−C. A solution gives the actual coordinate-change matrix. An inconsistent system certifies that the markings cannot be matched.
3. Extend a basis of the image of d_{0} to a basis of the kernel of d_{1}. The added vectors supply independent parameters for the classes.

The last step is legitimate because the identity just checked puts the image inside the kernel. The kernel of d_{0} records the coordinate moves fixing a given coupling. Thus we obtain parameters, equivalence witnesses and automorphisms from the same finite calculation.


Rank and nullity make the output sizes explicit. There are mn entries in each rectangular block, so the number of independent class parameters is 2mn − rank(d₁) − rank(d₀). The automorphisms that act identically on N and L have mn − rank(d₀) parameters. These are vector-space dimensions.




## A complete scalar example

Take one-dimensional N and L, and write Δ_{i} = A_{i}−B_{i}. The formulas become



```text
Δ₁C₂ − Δ₂C₁ = 0,
(C₁,C₂) ↦ (C₁,C₂) + S(Δ₁,Δ₂).
```

If (Δ_{1},Δ_{2}) ≠ (0,0), every compatible pair is a scalar multiple of this same vector. A coordinate move removes it. For example, over the rationals, take Δ = (1,2). The pair (3,6) is compatible and S = −3 removes it. The pair (3,7) has defect 1 and does not define commuting operations.


If both differences vanish, every pair is compatible, while every allowed coordinate move acts trivially on the pair. Two parameters remain. Even in dimension one, the answer depends on both tests: does the pair commute, and can one shared change of lifts remove it?




## A coupling that changes the chain length

Take N = k² and L = k, with



```text
A₁ = [ 0  1 ],    A₂ = 0,    B₁ = B₂ = 0,
     [ 0  0 ]
C₁ = [ a ],      C₂ = [ c ].
     [ b ]           [ d ]
```

Compatibility says A_{1}C_{2} = 0, hence d = 0. A lift change S = (s, t)^{T} adds (t, 0)^{T} to C_{1} and changes nothing in C_{2}. Thus a can be removed, while b and c are independent class parameters. The lift changes fixing a coupling are precisely those with t = 0.


After removing a, the first operation on the whole space is



```text
T₁ = [ 0  1  0 ],       T₁² = [ 0  0  b ].
     [ 0  0  b ]             [ 0  0  0 ]
     [ 0  0  0 ]             [ 0  0  0 ]
```

For b ≠ 0, a lifted quotient vector joins the two-step chain in N to form a three-step chain. For b = 0, that joining disappears. All eigenvalues remain zero in both cases: the off-diagonal data detect an action that the eigenvalue list misses. If the problem additionally imposed T_{1}² = 0, it would force b = 0 and leave only the parameter c. This is why extra relations have to be checked, rather than inferred from commutativity.




## When one equation removes both couplings

Suppose the linear map S ↦ A_{1}S − SB_{1} is invertible. Solve its equation with right-hand side −C_{1}, so that the changed coupling has C′_{1} = 0. Compatibility then reduces to A_{1}C′_{2} − C′_{2}B_{1} = 0. The same invertibility forces C′_{2} = 0.


One uniquely solvable Sylvester equation therefore splits every compatible pair at once. The scalar case with Δ_{1} ≠ 0 is the smallest example. When the map has a kernel, the preceding nilpotent example shows how genuine couplings can remain.




## What the procedure proves, and what must be added

The quotient ker(d_{1})/im(d_{0}) classifies these couplings with the endpoints fixed. With more commuting operations, introduce one unknown block per operation and one compatibility equation per pair. If the input also requires a relation such as T_{1}T_{2} = 0, expand and impose that relation too: commutativity does not imply it.


The finite procedure uses arithmetic and row reduction over the given field. A complexity bound would also have to specify how that field and its elements are represented.


Further context: the [archived Tensorgami study](https://refactor.press/notes/quotients-and-reconstruction.html#t:commuting-calculus) relates this calculation to extension theories.



### Sources and terminology

Two commuting operations make a vector space into a module over k[x,y]. The fixed subspace and quotient therefore define an extension of modules. The [Stacks Project, §12.6, Definitions 12.6.1–12.6.2](https://stacks.math.columbia.edu/tag/010I), specifies the endpoint-preserving equivalence used here. The block equations above derive the classification directly; the extension terminology describes that calculation rather than replacing it.
