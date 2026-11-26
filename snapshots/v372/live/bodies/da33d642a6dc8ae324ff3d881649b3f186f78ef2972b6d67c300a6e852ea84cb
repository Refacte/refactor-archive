# What a Derivative Retains

*From side strips and oriented boundaries to infinitesimal geometry*

A derivative is a way to make one part of a change directly calculable. We will construct the working arithmetic that does this: keep an increment, set its square to zero, and let multiplication produce the product rule exactly. Restoring the square then asks a different question: can a first-order motion be continued?

The rectangle and the node separate three calculations: extracting a first-order response, imposing an equation on that response, and testing whether a next-order correction can remove the remaining error.

There is also a different calculation with the boundary of a square. It keeps signs so that adjoining endpoint contributions cancel. Discarding a quadratic corner and cancelling oriented endpoints are distinct operations. The first occurs in infinitesimal arithmetic, the second in complexes and gluing.

Sections 1–5 develop complete first-order calculations. Sections 6–9 ask how arithmetic coefficients and equations change the permitted motions. The later studies each start from a further problem: an embedding changes a self-intersection number, two equations have identical linear data, or a functor has an interaction invisible to separate inputs.  Cohomological complexes use the convention that \(V[1]\), for a vector space \(V\) in degree zero, lies in degree \(-1\).

## 1 The side strips of a rectangle {#rectangle}
A rectangle has side lengths \(a\) and \(b\), so its area is \(A=ab\). Change the lengths to \(a+\alpha h\) and \(b+\beta h\). The new area is exactly

\[
(a+\alpha h)(b+\beta h)
=ab+b\alpha h+a\beta h+\alpha\beta h^2.
\]

For positive increments, the three added pieces are two side strips and a corner: a strip of area \(b\alpha h\), another of area \(a\beta h\), and a corner of area \(\alpha\beta h^2\). The identity also holds for signed increments, with the appropriate removals of area. Dividing the change by \(h\ne0\) gives

\[
\frac{A(h)-A(0)}h=b\alpha+a\beta+\alpha\beta h.
\]

The limit isolates the part that scales linearly with the parameter. There is another way to make that operation available: change the arithmetic so that the corner vanishes identically, then identify the result with the limit when differentiability justifies the comparison.

<!-- figure:rectangle -->

The same calculation gives the product rule without assuming that the sides move at constant speeds. If \(u\) and \(v\) are differentiable at \(x\), put \(\Delta u=u(x+h)-u(x)\) and \(\Delta v=v(x+h)-v(x)\). Then

\[
\Delta(uv)=v(x)\Delta u+u(x)\Delta v+\Delta u\,\Delta v.
\]

Differentiability gives \(\Delta u=u'(x)h+o(|h|)\) and \(\Delta v=v'(x)h+o(|h|)\). Their product is \(O(h^2)\), so its contribution after division by \(h\) tends to zero. Therefore

\[
(uv)'(x)=u'(x)v(x)+u(x)v'(x).
\]

The exact area decomposition identifies the quadratic term discarded in first-order variation. Later, an algebraic infinitesimal will make that disappearance an exact quotient operation.

For example, start with side lengths \(3\) and \(2\), and let both increase by \(h\). The area changes from \(6\) to \(6+5h+h^2\). At \(h=1/10\), the added area is \(0.51\): the strips contribute \(0.5\) and the corner \(0.01\). The derivative with respect to this common parameter is \(5\). It depends on the chosen motion of the two sides. Allowing separate increments instead gives the differential \(dA=b\,da+a\,db\), which can be evaluated on any such motion.

### Make the linear calculation exact {#first-order-arithmetic}

Introduce a symbol \(\varepsilon\) and impose \(\varepsilon^2=0\). This does not assert that a nonzero real number has square zero. We have constructed a different algebra, \(k[\varepsilon]/(\varepsilon^2)\), in which an element is a pair of coefficients \(x+u\varepsilon\). Multiplication is the finite rule

\[
(x+u\varepsilon)(y+v\varepsilon)=xy+(xv+yu)\varepsilon.
\]

For the rectangle, set \(x=a\), \(y=b\), \(u=\alpha\), and \(v=\beta\). Its two strips become the coefficient of \(\varepsilon\). There is no remainder to estimate in this algebra: the rule itself removes products of increments.

Repeated multiplication gives, for a polynomial \(f\),

\[
f(x+u\varepsilon)=f(x)+u f'(x)\varepsilon.
\]

Substituting that result into a second polynomial gives

\[
g(f(x+u\varepsilon))=g(f(x))+u f'(x)g'(f(x))\varepsilon.
\]

The chain rule is now a consequence of composing two substitutions. The useful new object is an arithmetic of coefficient pairs; polynomial multiplication is its elementary operation. Sections 4–5 will package all compatible readings of that operation and make the comparison with analytic derivatives precise.

### Restore the corner and test a motion {#first-obstruction-test}

Change the test algebra to \(k[\varepsilon]/(\varepsilon^3)\). A product of two increments can now survive. At the origin of the curve \(xy=0\), every proposed displacement \(x=a\varepsilon,\ y=b\varepsilon\) passes the square-zero test. To continue it, allow corrections:

\[
x=a\varepsilon+c\varepsilon^2,\qquad y=b\varepsilon+d\varepsilon^2.
\]

Their product modulo \(\varepsilon^3\) is \(ab\varepsilon^2\). The corrections \(c,d\) have no effect on that coefficient, so the motion continues precisely when \(ab=0\). A mixed direction such as \((1,1)\) passes the first test but fails the next one. This is a complete obstruction calculation using only multiplication.

At the point \((1,1)\) of \(xy=1\), the same corner can be repaired:

\[
(1+a\varepsilon+a^2\varepsilon^2)(1-a\varepsilon)\equiv1\pmod{\varepsilon^3}.
\]

Here a second-order change in the first coordinate cancels the unwanted corner. Section 9 explains the difference systematically: the linear response of the equation decides which second-order errors a correction can remove.

## 2 The oriented boundary of the square {#boundary}
Now keep a rectangle fixed and ask how its boundary pieces fit together. Write it as \(I\times J\), with \(I=[a,b]\), \(J=[c,d]\), \(a<b\), and \(c<d\); these letters now denote endpoints rather than the side lengths above. Orient both intervals in the increasing direction, and orient \(Q=I\times J\) by the order of the coordinates. The boundary of an interval is its final endpoint minus its initial endpoint:

\[
\partial I=[b]-[a],\qquad \partial J=[d]-[c].
\]

The square has the counterclockwise boundary

\[
\partial(I\times J)
=(\partial I)\times J-I\times(\partial J).
\]

The first term gives the right edge upward and the left edge downward. The second gives the top edge leftward and the bottom edge rightward. The minus sign is the orientation change required when the boundary operation passes the first interval. For oriented cubical chains, the general product formula is

\[
\partial(C\times E)
=(\partial C)\times E+(-1)^{\deg C}C\times(\partial E).
\]

Here the degree of a chain is its dimension.[^hatcher]

Apply the boundary once more. Writing \([r,s]\) here for the vertex at coordinates \((r,s)\), the eight endpoint contributions are

\[
\begin{aligned}
\partial^2Q={}&[b,d]-[b,c]-[a,d]+[a,c]\\
&-[b,d]+[a,d]+[b,c]-[a,c]=0.
\end{aligned}
\]

Every corner occurs twice, with opposite signs. The statement \(\partial^2=0\) records this cancellation, including its orientation data. If we retained only the unsigned set of edges and then took their endpoints, we would see four corners. Chains preserve the signs that make the second boundary vanish.

<!-- figure:boundary -->

The product rule for slopes and the product rule for boundaries both act on one factor at a time, but they solve different problems. In the boundary calculation we need a sign convention that cancels each corner twice. The degree tells us which sign to use. The same bookkeeping will let us check a differential on a product of complexes instead of guessing its signs.

The cancellation also explains why a boundary has no boundary as a chain even when individual boundary pieces have endpoints. A right edge alone has two endpoints. Within the whole oriented square, its upper endpoint cancels the initial contribution from the top edge, and its lower endpoint cancels the terminal contribution from the bottom. The identity concerns how the pieces fit together. It is precisely this information that an unsigned picture suppresses.

## 3 Differential forms and integration {#forms}
On a smooth space, differential forms connect local differentiation with oriented boundaries. For a smooth function \(f(x,y)\), its differential is

\[
df=\frac{\partial f}{\partial x}\,dx+
\frac{\partial f}{\partial y}\,dy.
\]

It is a one-form: at each point it takes a tangent vector and returns the corresponding directional derivative. Forms multiply by the exterior product, with \(dx\wedge dy=-dy\wedge dx\) and \(dx\wedge dx=0\). The exterior derivative increases degree and obeys

\[
d(\alpha\wedge\beta)
=d\alpha\wedge\beta+(-1)^r\alpha\wedge d\beta,
\qquad \deg\alpha=r.
\]

For two functions, both of degree zero, this is the ordinary product rule. For higher-degree forms, the sign supplies the same kind of coherence that appeared in the square's boundary.

The identity \(d^2=0\) depends on this exterior algebra. For \(f=x^2\),

\[
df=2x\,dx,\qquad d(df)=2\,dx\wedge dx=0,
\]

whereas the ordinary second derivative \(D^2f=2\). The Hessian still carries second-order variation. Applying the exterior derivative twice instead antisymmetrizes second partial derivatives, and their symmetry makes the result vanish.

Stokes' theorem connects the two square-zero operations through integration:

\[
\int_Q d\omega=\int_{\partial Q}\omega.
\]

For a compact oriented smooth manifold with boundary, this holds for smooth forms of the appropriate degree; the familiar version also allows a rectangular domain with piecewise smooth boundary.[^stokes] Take \(\omega=x\,dy\) on our rectangle. Then \(d\omega=dx\wedge dy\), and

\[
\int_Qd\omega=(b-a)(d-c).
\]

The horizontal edges contribute zero because \(dy=0\). The right edge contributes \(b(d-c)\), and the downward left edge contributes \(a(c-d)\). Hence

\[
\int_{\partial Q}x\,dy=b(d-c)+a(c-d)=(b-a)(d-c).
\]

The boundary and the exterior derivative are paired operations: one lowers geometric dimension, the other raises the degree of a measurement. Integration identifies their outputs. A topological space already admits chains and boundaries; defining ordinary tangent derivatives additionally requires an appropriate smooth, analytic, or algebraic structure. The next step extracts the algebraic structure responsible for the first-order product rule.

## 4 The universal derivation and the diagonal {#kahler}
The coefficient-pair calculation works for every polynomial expression. To use it in an algebra given by generators and relations, we need a way to collect all first-order readings compatible with those relations. We construct that object from the same addition, multiplication, and removal of products of changes. Let \(k\) be a commutative ring, \(A\) a commutative \(k\)-algebra, and \(M\) an \(A\)-module. A \(k\)-derivation is a \(k\)-linear map \(D:A\to M\) satisfying

\[
D(ab)=aD(b)+bD(a).
\]

The module of Kähler differentials \(\Omega_{A/k}\) is generated by symbols \(da\), subject to additivity, this product rule, and \(dc=0\) for scalars \(c\in k\). The resulting map \(d:A\to\Omega_{A/k}\) is universal:

\[
\operatorname{Hom}_A(\Omega_{A/k},M)
\cong\operatorname{Der}_k(A,M).
\]

Every derivation factors uniquely through \(d\). We have replaced a separate product-rule check for each proposed measurement by one linear map out of a single module. The universal property is useful because it proves this replacement correct in both directions: any such linear map gives a derivation, and every derivation is obtained once.[^stacks-diff]

For \(A=k[t]\), this gives \(\Omega_{A/k}=A\,dt\). Repeated use of the product rule yields

\[
d(t^n)=nt^{n-1}\,dt,\qquad df=f'(t)\,dt
\]

for every polynomial \(f\). Thus the familiar coefficient \(f'(t)\) appears after choosing the coordinate \(t\). The universal differential \(df\) is the object before that coordinate presentation.

There is a geometric construction of the same module. Form \(B=A\otimes_kA\), let \(\mu:B\to A\) multiply the factors, and put \(I=\ker\mu\). The two copies of \(A\) agree on the diagonal. Their differences

\[
\delta a=1\otimes a-a\otimes1
\]

generate the ideal \(I\). In \(B\), an exact multiplication identity gives

\[
\delta(ab)=(a\otimes1)\delta b+(b\otimes1)\delta a+
\delta a\,\delta b.
\]

Pass to \(I/I^2\). The last term disappears, just as the rectangle's corner disappeared, and the remaining terms satisfy the derivation rule. This produces a map \(\Omega_{A/k}\to I/I^2\).

To see that it is an isomorphism, use the square-zero algebra \(A\oplus\Omega_{A/k}\), with multiplication

\[
(a,\eta)(b,\theta)=(ab,a\theta+b\eta).
\]

The map \(a\otimes b\mapsto(ab,a\,db)\) is an algebra homomorphism. It sends \(I\) into \(0\oplus\Omega_{A/k}\), kills \(I^2\), and sends \(\delta a\) to \(da\). It therefore supplies an inverse on the generators:

\[
\Omega_{A/k}\cong I/I^2.
\]

The differential measures first-order separation along the diagonal. For a polynomial algebra, the two tensor factors really are independent coordinate copies. The quotient keeps their linear differences and removes products of those differences. No norm or limiting process is needed.

<!-- figure:diagonal -->

For \(A=k[t]\), write the two coordinates as \(t_1,t_2\). Then \(B=k[t_1,t_2]\), \(I=(t_2-t_1)\), and the first infinitesimal neighborhood of the diagonal has coordinate ring

\[
k[t_1,t_2]/(t_2-t_1)^2.
\]

Set \(\varepsilon=t_2-t_1\). Every polynomial satisfies

\[
f(t_2)-f(t_1)=f'(t_1)\varepsilon
\quad\text{modulo }\varepsilon^2.
\]

This is the rectangle's linear truncation in an algebraic form. The full difference still exists before taking the quotient. The quotient records an explicitly chosen level of resolution; it does not declare that the original polynomial had no higher terms.

## 5 Infinitesimal points and the classical derivative {#tangent}
The diagonal quotient makes first-order differences calculable without committing to a particular motion. To recover the response along one motion, evaluate its coefficients at a point and supply a value for each coordinate increment. Let \(k\) now be a field, let \(A\) be a finite-type \(k\)-algebra, and let \(p:A\to k\) be a \(k\)-valued point. The dual numbers \(k[\varepsilon]/(\varepsilon^2)\) contain a nonzero infinitesimal whose square vanishes. A first-order displacement of \(p\) is a lift

\[
a\longmapsto p(a)+\varepsilon v(a).
\]

It is a \(k\)-algebra homomorphism precisely when \(v\) is \(k\)-linear and satisfies

\[
v(ab)=p(a)v(b)+p(b)v(a).
\]

Thus a tangent vector is a derivation with the module action evaluated at the point. For \(A=k[t]\), \(p(t)=x\), and \(v(t)=u\), the lift sends \(t\) to \(x+\varepsilon u\), and polynomial multiplication gives the exact identity

\[
f(x+\varepsilon u)=f(x)+\varepsilon f'(x)u.
\]

The first-order coefficient is the directional derivative. The higher powers vanish in the testing algebra.

Put \(\mathfrak m=\ker p\). A point derivation kills \(\mathfrak m^2\), because both factors vanish at \(p\). Conversely, every linear functional on \(\mathfrak m/\mathfrak m^2\) defines such a derivation by applying it to \([a-p(a)]\). Hence

\[
T_p=\operatorname{Hom}_k(\mathfrak m/\mathfrak m^2,k),
\qquad
T_p^*=\mathfrak m/\mathfrak m^2
\cong\Omega_{A/k}\otimes_Ak.
\]

The hypothesis that \(p\) is \(k\)-valued matters: at a general scheme point, differentials of the residue field over \(k\) also enter the comparison. The pointwise differential is \(d_pf=[f-f(p)]\), and \(v(f)\) is its evaluation on \(v\).

A morphism \(F:X\to Y\) of \(k\)-schemes pulls functions backward. Its differential accordingly begins as a map on cotangents,

\[
F^*\Omega_{Y/k}\longrightarrow\Omega_{X/k},
\qquad da\longmapsto d(F^*a).
\]

Dualizing at a \(k\)-valued point produces \(dF_p:T_pX\to T_{F(p)}Y\). Pullbacks compose, giving the chain rule. For \(s=f(t)\), it sends \(ds\) to \(f'(t)dt\); composing with \(z=g(s)\) gives

\[
d(g(f(t)))=g'(f(t))f'(t)\,dt.
\]

We can now return to the analytic definition. For a smooth real function near \(x\), Taylor's formula gives

\[
f(x+h)=f(x)+f'(x)h+h^2r(h),
\]

with \(r\) smooth near zero. In the local ring of smooth germs, \(h^2r(h)\in\mathfrak m^2\), so \(d_xf=f'(x)[h]\). Analytically, the same remainder satisfies \(h^2r(h)=o(|h|)\). The infinitesimal class and the limit recover the same first-order coefficient. For a merely differentiable function, the weaker remainder condition \(o(|h|)\) still defines its derivative; it need not give membership in the square of an ideal of smooth or \(C^1\) germs.

For example, the \(C^1\) germ \(f(h)=|h|^{3/2}\) has derivative zero at the origin and satisfies \(f(h)=o(|h|)\). Every finite sum of products of two vanishing \(C^1\) germs is \(O(h^2)\), whereas this germ is not. Thus the analytic first-order remainder can vanish faster than \(|h|\) without belonging to \(\mathfrak m^2\).

In the ring of \(C^1\) germs at zero, the classes \([h]\) and \([|h|^{3/2}]\) are linearly independent in \(\mathfrak m/\mathfrak m^2\). Differentiating a relation \(a h+b|h|^{3/2}\in\mathfrak m^2\) at zero forces \(a=0\), since every product of two vanishing germs has derivative zero; the preceding \(O(h^2)\) argument then forces \(b=0\). This algebraic cotangent space is therefore larger than the one-dimensional classical cotangent space. An algebraic point derivation can distinguish the class \([|h|^{3/2}]\) even though its classical derivative is zero. The function algebra and the chain rules required of its derivations determine which first-order measurements are permitted.

In the smooth case, the remainder above can be written explicitly as

\[
r(h)=\int_0^1(1-s)f''(x+sh)\,ds.
\]

For several variables, the corresponding expansion shows that the coordinate differences \(h_1,\ldots,h_n\) form a basis of \(\mathfrak m/\mathfrak m^2\), and

\[
d_pf=\sum_i\partial_i f(p)[h_i].
\]

Pairing this class with a vector \((v_1,\ldots,v_n)\) gives \(\sum_i\partial_i f(p)v_i\). The result is the usual linear approximation in every direction, assembled into one covector. The little-\(o\) condition makes that approximation unique: two candidate linear maps would have a difference that is both linear in \(h\) and \(o(\lVert h\rVert)\), so evaluation along each fixed direction forces their difference to vanish.

For global smooth geometry, the suitable universal differential also respects every smooth chain rule. This uses the \(C^\infty\)-ring structure on smooth functions, and its cotangent module gives ordinary smooth one-forms. The ordinary algebraic Kähler module of the underlying real algebra need not coincide with that module.[^joyce] The pointwise smooth-germ construction above gives the usual cotangent vectors directly. The universal construction now has a concrete payoff: evaluate a differential on a displacement to obtain a directional derivative, and compose the induced maps to obtain the chain rule. The comparison with the analytic limit works under the regularity and function-algebra hypotheses just checked.

## 6 An arithmetic derivative in the Gaussian integers {#arithmetic-derivative}
The square-zero test for a derivative requires no distance or limit. We can therefore replace real coordinates with arithmetic coefficients and ask which infinitesimal motions respect an equation. Consider

\[
B=\mathbf Z[i]=\mathbf Z[t]/(t^2+1).
\]
We differentiate relative to \(\mathbf Z\), so integers have differential zero. The defining relation gives

\[
0=d(i^2+1)=2i\,di.
\]
Since \(i\) is a unit, the universal module is

\[
\boxed{\Omega_{B/\mathbf Z}\cong (B/2B)\,di.}
\]
This derivative takes values in a torsion module. Wherever \(2\) is invertible, the module vanishes: the equation determines \(i\) with no relative first-order freedom. At the prime above \(2\), that infinitesimal rigidity fails.[^stacks-diff]

The universal property says exactly what this means for a measurement. A derivation into a \(B\)-module \(M\) is determined by \(D(i)=m\), and the equation requires \(2i\,m=0\), equivalently \(2m=0\). For \(a,b\in\mathbf Z\), it then gives \(D(a+bi)=bm\). Into the torsion-free module \(B\), every such derivation vanishes. Into \(B/2B\), there are nonzero ones. The infinitesimal response depends on the module used to receive it. Retaining the universal module makes all those possible responses available, instead of declaring that the derivative is zero after choosing only a torsion-free target.

The module also identifies an arithmetic invariant. Its annihilator is the ideal \((2i)=(2)\), which is the different of \(\mathbf Z[i]\) over \(\mathbf Z\). Its norm is \(4\), the absolute value of the discriminant \(-4\). The different marks the ramified locus; here

\[
2=-i(1+i)^2,
\]
so there is one prime ideal \((1+i)\) above \(2\), appearing with multiplicity two.[^different] Polynomial differentiation has become a way to locate arithmetic ramification.

Reducing the equation modulo primes makes this visible. Modulo \(5\),

\[
t^2+1=(t-2)(t+2),\qquad
B\otimes_{\mathbf Z}\mathbf F_5\cong\mathbf F_5\times\mathbf F_5.
\]
The fiber consists of two reduced rational points. Modulo \(3\), the polynomial is irreducible, so the fiber is \(\operatorname{Spec}\mathbf F_9\): one closed point of degree two. After extending scalars to an algebraic closure, it becomes two distinct geometric points. Both odd-prime fibers have vanishing differentials relative to their base fields, because each field factor is separable over its base field.

Modulo \(2\), put \(u=t+1\). Then

\[
t^2+1=(t+1)^2,\qquad
B\otimes_{\mathbf Z}\mathbf F_2\cong C:=\mathbf F_2[u]/(u^2).
\]
There is one doubled point. Differentiating \(u^2=0\) gives no relation in characteristic two, and

\[
\Omega_{C/\mathbf F_2}=C\,du.
\]
The geometric sheets have merged. Differentiating the defining equation now imposes a weaker linear constraint, and the square-zero substitution detects the additional permitted motion.

<!-- figure:arithmetic -->

There is a derived refinement of the same calculation. The cotangent complex, defined below, is

\[
\mathbb L_{B/\mathbf Z}\simeq
\left[B\xrightarrow{\,2i\,}B\right]
\]
in degrees \(-1,0\). For a two-term complex \([E^{-1}\xrightarrow{q}E^0]\), cohomology means \(H^{-1}=\ker q\) and \(H^0=\operatorname{coker}q\). Globally the map \(2i\) is injective, so this complex has only \(\Omega_{B/\mathbf Z}\) as its cohomology.

Because both terms of the displayed complex are free \(B\)-modules, its derived fiber is computed by tensoring the whole complex with \(\mathbf F_2\) term by term. Multiplication by \(2i\) then becomes zero. Taking cohomology first and forming only the ordinary fiber of \(\Omega_{B/\mathbf Z}\) instead can lose the kernel created by this change of coefficients.

Thus its derived fiber at \((1+i)\) is

\[
\mathbb L_{B/\mathbf Z}\otimes_B^{\mathbf L}\mathbf F_2
\simeq
\left[\mathbf F_2\xrightarrow{\,0\,}\mathbf F_2\right].
\]
Degree \(-1\) cohomology becomes nonzero at the ramified prime. An ordinary fiber of \(\Omega\) gives only the degree-zero term. Keeping the explicit two-term presentation through specialization lets us calculate its new kernel as well as its cokernel. Derived restriction names this procedure and makes it independent of the chosen free presentation.

## 7 Two maps with unexpectedly different infinitesimal behavior {#frobenius-and-artin-schreier}
The Gaussian example made the coefficient choice decisive: the relation \(2i\,di=0\) changes its effect when \(2\) vanishes. In characteristic \(p\), the same issue can make an entire map have zero differential while retaining substantial geometric content. Work over \(k=\mathbf F_p\), and compare two maps of affine lines. Their algebra maps are

\[
A=k[s]\longrightarrow B=k[t],\qquad
s\longmapsto t^p
\quad\text{or}\quad
s\longmapsto t^p-t.
\]
Both maps are finite free of degree \(p\): in each case \(B\) has a monic presentation of degree \(p\) over \(A\).

For Frobenius, the absolute differential sends \(ds\) to \(d(t^p)=0\). Relative to \(A\), the presentation

\[
B\cong A[T]/(T^p-s)
\]
likewise gives no relation on \(dt\), because \(p=0\) and \(ds=0\) in relative differentials. Thus \(\Omega_{B/A}=B\,dt\). Over an algebraic closure, every fiber has the form

\[
k^{\mathrm{alg}}[t]/(t^p-a)
\cong k^{\mathrm{alg}}[u]/(u^p),
\]
where \(b^p=a\) and \(u=t-b\). It is one point of length \(p\). Frobenius is a universal homeomorphism: its topology does not separate these infinitesimal multiplicities.[^frobenius]

For Artin–Schreier, the presentation is

\[
B\cong A[T]/(T^p-T-s).
\]
Relative differentiation gives \(-dt=0\), so \(\Omega_{B/A}=0\). The polynomial derivative is the unit \(-1\), and the map is finite étale. Each geometric fiber consists of \(p\) distinct points. Adding an element of \(\mathbf F_p\) to a root gives another root, producing the translations that permute the sheets.[^artin-schreier]

The complete-intersection cotangent complexes sharpen the comparison:

| Map | Absolute differential | Relative \(\Omega_{B/A}\) | Relative \(\mathbb L_{B/A}\) | Geometric fiber |
|---|---|---|---|---|
| \(s\mapsto t^p\) | \(ds\mapsto0\) | \(B\,dt\) | \([B\xrightarrow{0}B]\) | One point of length \(p\) |
| \(s\mapsto t^p-t\) | \(ds\mapsto-dt\) | \(0\) | \([B\xrightarrow{-1}B]\simeq0\) | \(p\) distinct points |

The complexes occupy degrees \(-1,0\). Vanishing relative differential data expresses infinitesimal rigidity, while the Artin–Schreier cover still has \(p\) sheets. Conversely, Frobenius has a zero absolute differential while its relative fibers have extensive infinitesimal structure.

We can test the difference with an actual dual number over a field containing the chosen root, for example \(k^{\mathrm{alg}}\). Suppose \(b\) lies above \(a\), and move it to \(b+r\varepsilon\), where \(\varepsilon^2=0\). Frobenius sends this to \(b^p=a\): every first-order displacement of the source becomes invisible in the target. A prescribed nonzero first-order displacement of \(a\) therefore cannot lift. Artin–Schreier instead sends it to \(a-r\varepsilon\). A target displacement \(a+c\varepsilon\) has the unique lift \(b-c\varepsilon\) near the chosen root \(b\). The \(p\) different roots give \(p\) possible starting points, and infinitesimal rigidity gives uniqueness after one starting point has been selected. Local uniqueness and a global covering fit together.

Values on \(\mathbf F_p\) alone reverse the apparent picture. Frobenius is the identity on these rational points. The Artin–Schreier polynomial evaluates to zero on all of them. Above \(s=0\) it has all \(p\) rational preimages; above a nonzero \(s\in\mathbf F_p\) it has none, although there are always \(p\) geometric preimages. A scheme map retains its algebra of functions and its behavior after extending scalars. Its values on one finite set do not determine that structure.

There is a separate way to recover the higher-order variation that Frobenius hides from the ordinary derivative. For a polynomial \(f\in k[t]\), define the Hasse derivatives by the exact expansion

\[
f(t+h)=\sum_{n\geq0}D^{[n]}f(t)h^n,
\qquad
D^{[n]}(t^m)=\binom mn t^{m-n}.
\]
For \(n>m\), the polynomial formula means zero. In characteristic zero, \(D^{[n]}=\frac1{n!}(d/dt)^n\). In characteristic \(p\), the coefficient definition continues to work without dividing by a factorial. In particular,

\[
(t+h)^p=t^p+h^p,\qquad D^{[p]}(t^p)=1,
\]
while every positive iterate of the ordinary derivative of \(t^p\) vanishes.[^hasse] Multiplying the two Taylor expansions gives the higher product rule

\[
D^{[n]}(fg)=\sum_{i+j=n}D^{[i]}f\,D^{[j]}g.
\]

For \(n=1\), this is the original Leibniz rule. At higher orders it retains the mixed products that first order discards.

A test algebra \(k[h]/(h^{N+1})\) first retains the Frobenius change at \(N=p\). Higher jets preserve higher powers of the displacement. Derived cotangent information preserves homological information about infinitesimal constraints; it does not supply a missing \(p\)th-order Taylor coefficient. These are two directions in which the first-order picture can be enriched.

A companion, [*When a Formal Logarithm Fails*](https://refactor.press/notes/when-a-formal-logarithm-fails.html), follows the attempted conversion of the multiplicative law into addition in characteristic three. A quadratic correction removes the first residual; a cubic cohomology class obstructs the next lift.

<!-- figure:frobenius -->

## 8 The cotangent complex retains the equations {#cotangent-complex}
The first obstruction test in section 1 asked which errors a correction could remove. We now derive a reusable linear map that answers that question for equations. Return to the rectangle with its area constrained:

\[
xy=c.
\]

Over the reals, positive solutions describe rectangles of fixed area. Algebraically, let \(k\) be a field, \(c\in k\), and \(f=xy-c\). At a \(k\)-valued point \(p=(x_0,y_0)\) satisfying \(x_0y_0=c\), try the displacement \((x,y)=(x_0+a\varepsilon,y_0+b\varepsilon)\). The exact strip-and-corner calculation gives

\[
f(x_0+a\varepsilon,y_0+b\varepsilon)
=\varepsilon(y_0a+x_0b)+ab\varepsilon^2.
\]

Modulo \(\varepsilon^2\), the fixed-area condition is \(y_0a+x_0b=0\). The row

\[
J(p)=(y_0,x_0)
\]

takes a proposed coordinate motion to its first-order violation of the constraint. Allowed tangent directions form its kernel. We have obtained the Jacobian by asking which two strip changes cancel.

The cotangent calculation reads the same constraint backward. In the ambient polynomial algebra \(P=k[x,y]\), the relation has differential

\[
df=y\,dx+x\,dy.
\]

For \(A=P/(f)\), this expression must become zero, giving

\[
\Omega_{A/k}=
\frac{A\,dx\oplus A\,dy}{A(y\,dx+x\,dy)}.
\]

Kähler differentials take the cokernel of the map that sends the defining equation to its differential. For correction problems, the map itself matters: we need its image to decide which residuals can be cancelled. Keep its domain and codomain together:

\[
\mathbb L_{A/k}\simeq
\left[Ae\xrightarrow{\ e\mapsto y\,dx+x\,dy\ }
A\,dx\oplus A\,dy\right].
\]

The symbol \(e\) records the equation's role. It lies in degree \(-1\); the coordinate differentials lie in degree zero. The polynomial \(xy-c\) is a non-zero-divisor in \(k[x,y]\), so this is the full cotangent complex. Its two free terms can be restricted to \(p\) by evaluating their coefficients. Dualizing gives

\[
\mathbb T_{X,p}\simeq
\left[k^2\xrightarrow{\ (a,b)\mapsto y_0a+x_0b\ }k\right].
\]

The kernel is the allowed linear motion. The cokernel records constraint violations that a correction of the coordinates cannot remove. Calling it an obstruction target still leaves a calculation to do: we must determine the violation produced at the next order.

The degrees here specify roles, rather than Taylor orders. An equation stays in degree \(-1\) whether it is quadratic or cubic. The resemblance to the boundary complex is the use of degrees and a square-zero differential to organize compatibility. The geometric boundary \(\partial\), the ordinary polynomial derivative, and the differential inside this complex act on different objects.

### A resolution that remembers the equation {#detail-a-resolution-that-remembers-the-equation}

In characteristic zero, an explicit resolution makes that distinction tangible. Introduce an odd relation generator \(\eta\) and the differential graded algebra

\[
K=k[x,y]\otimes\Lambda(\eta),\qquad
|\eta|=-1,\qquad d_K\eta=xy-c,\qquad d_Kx=d_Ky=0.
\]

Here \(d_K\) raises cohomological degree by one; the earlier geometric boundary lowers chain dimension. Its graded product rule is

\[
d_K(uv)=d_K(u)v+(-1)^{|u|}u\,d_K(v).
\]

In particular, \(d_K^2\eta=d_K(xy-c)=0\). Its degree-zero cohomology is \(A\), and its negative cohomology vanishes because multiplication by \(xy-c\) is injective. Take universal differentials, writing them as \(\delta\) to distinguish them from \(d_K\). The differential on the resulting cotangent module sends \(\delta\eta\) to \(\delta(xy-c)=y\,\delta x+x\,\delta y\). Tensoring with \(A\) yields exactly the two-term map above. The relation has been differentiated inside a resolution that remembers how it was imposed.[^lci]

### The general construction and its universal property {#detail-the-general-construction-and-its-universal-property}

For an arbitrary ordinary algebra \(A\), one construction replaces it by a free simplicial polynomial resolution \(P_\bullet\to A\), takes \(\Omega_{P_\bullet/k}\), and tensors with \(A\). Normalizing the resulting simplicial module gives \(\mathbb L_{A/k}\), a complex in nonpositive cohomological degrees. Its degree-zero cohomology is

\[
H^0(\mathbb L_{A/k})\cong\Omega_{A/k}.
\]
The resolution supplies the additional degrees needed to retain relations and dependencies among relations, independently of a chosen presentation.[^lci]

Its universal property extends the familiar one:

\[
\boxed{
\operatorname{Map}_{\operatorname{Mod}_A}(\mathbb L_{A/k},M)
\simeq\operatorname{Der}^{\mathrm{derived}}_k(A,M).
}
\]
For a connective derived module \(M\), meaning cohomology in nonpositive degrees, the right side is the space of sections of the square-zero projection \(A\oplus M\to A\), taken in simplicial commutative \(k\)-algebras. In characteristic zero one may use the equivalent differential graded commutative models. The square-zero multiplication remains

\[
(a,m)(b,n)=(ab,an+bm).
\]
What changes is the setting: these are derived maps, with homotopies and their coherences. The left side is correspondingly a mapping space of derived modules. The stable formulation permits shifts of \(M\), exposing the extension groups that organize deformation problems. The product rule is still present; its universal object has acquired the degrees needed for derived compatibility.[^toen][^deformations]

The additional degrees should not be pictured as extra spatial coordinates attached to every point. They record how a space is constrained and how compatible infinitesimal data fit together. Passing to cohomology identifies what survives the differential; passing to an ordinary degree-zero module can discard some of those survivors. In a smooth algebra, \(\mathbb L_{A/k}\simeq\Omega_{A/k}[0]\), with \(\Omega\) locally free. The enriched construction then reduces to the familiar cotangent bundle. At singularities or in relative constructions, the same definition continues to apply without assuming that this reduction is possible.

A strict comparison is the origin inside the affine line:

\[
k[t]\longrightarrow k,\qquad t\longmapsto0.
\]
Since this is a surjection, \(\Omega_{k/k[t]}=0\). Yet the defining equation survives in

\[
\mathbb L_{k/k[t]}\simeq (t)/(t^2)[1]\cong k[1],
\]
where \(k[1]\) means \(k\) in degree \(-1\).[^lci] To see its purpose, prescribe an ambient infinitesimal motion by sending \(t\) to \(\varepsilon\) in \(k[\varepsilon]/(\varepsilon^2)\). The reduced point lies at the origin, but the thickened point cannot factor through the origin: such a factorization would send \(t\) to zero. There are no relative tangent directions, yet there is a constraint obstructing this prescribed motion. This is relative to the ambient line; the origin's intrinsic cotangent complex over \(k\) is zero.

For a complete intersection

\[
A=k[x_1,\ldots,x_m]/(f_1,\ldots,f_r),
\]
where the equations form a regular sequence, the full cotangent complex has the concrete model

\[
\mathbb L_{A/k}\simeq
\left[A^r\xrightarrow{\,J^{\mathsf T}\,}A^m\right],
\qquad
J_{ji}=\frac{\partial f_j}{\partial x_i}.
\]
The equation generators occupy degree \(-1\) and the coordinate differentials degree zero. At a \(k\)-valued point, dualizing its derived fiber gives the tangent complex

\[
\mathbb T_{X,p}\simeq\left[k^m\xrightarrow{\,J(p)\,}k^r\right]
\]
in degrees \(0,1\). Its \(H^0\) is the ordinary tangent space \(T_pX=\ker J(p)\); its \(H^1\) is \(\operatorname{coker}J(p)\), an obstruction target for lifting infinitesimal points. The virtual dimension is \(m-r\).[^lci]

The regular-sequence hypothesis matters. For an arbitrary ideal \(I\) in a polynomial algebra \(P\), the conormal complex

\[
\left[I/I^2\longrightarrow\Omega_{P/k}\otimes_P A\right]
\]
models the truncation \(\tau_{\geq-1}\mathbb L_{A/k}\); it need not be the full complex. Further degrees can be required, and a redundant list of equations cannot simply be treated as an independent free basis of \(I/I^2\). Even at a complete intersection, the pointwise Jacobian specifies linear directions and an obstruction target. Determining the actual nonlinear obstruction still requires the defining equations or equivalent formal deformation structure.

### Where the second-order residual lands {#detail-where-the-second-order-residual-lands}

The obstruction can now be calculated. Let \(F=(f_1,\ldots,f_r)\) and \(F(p)=0\). A proposed continuation is

\[
p+\varepsilon v+\varepsilon^2w
\quad\text{over }k[\varepsilon]/(\varepsilon^3).
\]

Define \(q_p(v)\) to be the coefficient of \(z^2\) in the polynomial \(F(p+zv)\). Direct expansion gives

\[
F(p+\varepsilon v+\varepsilon^2w)
=\varepsilon J(p)v+
\varepsilon^2\bigl(J(p)w+q_p(v)\bigr)
\quad\text{modulo }\varepsilon^3.
\]

This coefficient definition uses no division by two and works in every characteristic. Once \(J(p)v=0\), the remaining violation is \(q_p(v)\). Changing the correction \(w\) adds \(J(p)w\), so its class in \(\operatorname{coker}J(p)\) is unchanged. A second-order lift exists exactly when

\[
[q_p(v)]=0\quad\text{in }\operatorname{coker}J(p).
\]

### Solve the correction as a linear system {#correction-linear-system}

The criterion gives an explicit procedure. Expand the equations to obtain \(J(p)\), compute the coefficient \(q_p(v)\), and solve

\[
J(p)w=-q_p(v).
\]

Row reduction decides whether a correction exists and describes all its choices. If one solution is \(w_0\), every solution is \(w_0+z\) with \(z\in\ker J(p)\). Thus the same matrix gives both the obstruction and the freedom in a successful repair.

For instance, take \(f=x^2+y^2-1\) at \(p=(1,0)\) over a field of characteristic different from two. The tangent vector \(v=(0,b)\) has residual \(q_p(v)=b^2\). The correction equation is \(2w_x=-b^2\), so choose \(w=(-b^2/2,0)\). The curve's second-order test is solved by one linear equation. This calculation also shows exactly why the characteristic assumption matters: when two vanishes, the linear correction map changes.

For the rectangle's constraint, \(q_p(a,b)=ab\): the discarded corner returns as the second-order violation. The next comparison shows when that corner can be compensated by a new strip.

## 9 A tangent direction that cannot continue through a node {#node-and-smoothing}
First consider the fixed-area curve \(xy=1\) at \((1,1)\). Its Jacobian is \(J=(1,1)\), so tangent directions have the form \(v=(a,-a)\). Their two linear strip contributions cancel, but their corner contributes

\[
q_p(v)=a(-a)=-a^2.
\]

Choose the correction \(w=(a^2,0)\). Since \(Jw=a^2\), it cancels the residual. Explicitly,

\[
(1+a\varepsilon+a^2\varepsilon^2)(1-a\varepsilon)
=1-a^3\varepsilon^3
\equiv1\pmod{\varepsilon^3}.
\]

The Jacobian is surjective, so its cokernel is zero: every constraint violation at this order can be removed by adjusting the coordinates. The additional strip of area \(a^2\varepsilon^2\) repairs the corner's area \(-a^2\varepsilon^2\).

### Why the node cannot repair the corner {#detail-why-the-node-cannot-repair-the-corner}

Now set the area to zero and move the base point to the origin. The curve

\[
X=\operatorname{Spec}A,\qquad A=k[x,y]/(xy),
\]
is the union of the two coordinate axes. Every direction \((a,b)\) is tangent at the origin: the equation has zero linear term there. Explicitly,

\[
x\longmapsto a\varepsilon,\qquad
y\longmapsto b\varepsilon
\]
defines a point over \(k[\varepsilon]/(\varepsilon^2)\), since \(xy\) becomes zero.

To continue this point one order further, try

\[
x\longmapsto a\varepsilon+c\varepsilon^2,\qquad
y\longmapsto b\varepsilon+d\varepsilon^2
\]
in \(k[\varepsilon]/(\varepsilon^3)\). Its product is \(ab\varepsilon^2\). Consequently a lift exists exactly when

\[
\boxed{ab=0.}
\]
Directions along either branch extend. A mixed direction such as \((1,1)\) is valid to first order but cannot continue to second order. The previously discarded product of two changes has become the obstruction.

Over the reals, the same calculation distinguishes these algebraic tangent directions from actual velocities of curves. If a differentiable curve through the origin has \(x(t)=at+o(|t|)\) and \(y(t)=bt+o(|t|)\), then \(x(t)y(t)=ab\,t^2+o(t^2)\). Remaining on the node forces \(ab=0\). Thus the two-dimensional Zariski tangent space includes directions that no differentiable curve on the node can realize as its initial velocity. It is the space of first-order solutions of the equations; the next infinitesimal order detects the compatibility that first order could not test.

<!-- figure:node -->

The cotangent complex organizes the calculation:

\[
\mathbb L_{A/k}\simeq
\left[A\xrightarrow{\,\binom yx\,}A\,dx\oplus A\,dy\right].
\]
At the origin its derived fiber is \([k\xrightarrow0k^2]\). Dualizing gives two tangent directions and a one-dimensional obstruction target. The quadratic expression \(ab\) takes values in that target. The complex explains where the obstruction belongs; the equation \(xy\) determines its value.

Here \(J(0,0)=0\), so the correction term \(Jw\) always vanishes. No second-order strip is available to compensate for a mixed corner. The zero map in the point's tangent complex explains this failure: all coordinate directions pass the first-order test, and the entire one-dimensional equation space survives as a target for the next-order residual.

Now allow the equation to vary:

\[
xy=s.
\]
The mixed infinitesimal motion becomes possible if the base moves by \(s=ab\varepsilon^2\). Nonzero fibers are smooth, and the special fiber is the node. For deformations of the affine scheme itself, the first-order deformation module is

\[
T^1_A=\operatorname{Ext}^1_A(\mathbb L_{A/k},A)
\cong A/(x,y)\cong k.
\]
The constant perturbation of the equation supplies its generator, realized by this smoothing family.[^deformations] Moving a point inside the fixed node and deforming the node are distinct problems; the family shows how they interact.

There is a useful qualification. Globally the displayed map \(A\to A^2\) is injective: an element annihilated by both \(x\) and \(y\) must vanish. Therefore \(\mathbb L_{A/k}\) is quasi-isomorphic to \(\Omega_{A/k}\) in degree zero. Its nonzero degree \(-1\) cohomology at the origin comes from derived restriction of a nonprojective module. The ordinary cotangent fiber is \(\Omega_{A/k}\otimes_Ak\cong k^2\), while the derived fiber also retains the degree \(-1\) term. This example exhibits the importance of derived base change, even when the global complex has no negative cohomology.

## 10 The same projective line has two different self intersections {#derived-self-intersections}

A line in \(\mathbf P^2\) and a fiber in \(\mathbf P^1\times\mathbf P^1\) are both copies of \(\mathbf P^1\). Their intrinsic tangent data agree. We want to calculate why moving one off itself gives one intersection point in the first case and none in the second. Start by writing the transverse coordinate on two overlapping charts.

### Calculate how the normal coordinate changes {#normal-transition-calculus}

Let \(L\subset\mathbf P^2\) be the line \(Z=0\). On the chart \(X\ne0\), use \(u=Y/X\) and \(v=Z/X\). On \(Y\ne0\), use \(u'=X/Y\) and \(v'=Z/Y\). The overlap rule is

\[
u'=u^{-1},\qquad v'=u^{-1}v.
\]

The curve is \(v=0\), or \(v'=0\). A first-order transverse displacement therefore changes by multiplication by \(u^{-1}\). The local equation itself has that same change of basis. This factor is information about the embedding, and it survives even though every point has one transverse direction.

For \(F=\mathbf P^1\times\{q\}\), choose a local coordinate \(v\) in the second factor with \(v(q)=0\). Changing charts in the first factor changes \(u\) to \(u^{-1}\) and leaves \(v\) alone. Its transverse equation has transition factor \(1\).

In bundle notation, the local equations generate the conormal line bundle: it is \(\mathcal O_L(-1)\) for \(L\) and \(\mathcal O_F\) for \(F\). Dualizing gives the normal bundles \(\mathcal O_L(1)\) and \(\mathcal O_F\). Here the notation records the transition factors we just calculated.

### Turn the transition factor into a finite count {#cech-monomial-calculus}

The two charts on \(\mathbf P^1\) have coordinate rings \(k[u]\) and \(k[u^{-1}]\), with overlap \(k[u,u^{-1}]\). For the conormal line of \(L\), write its two local frames as \(e_U,e_V\), with \(e_V=u^{-1}e_U\). A global section is a pair of polynomials satisfying

\[
p(u)=u^{-1}q(u^{-1}).
\]

The left side uses only nonnegative powers; the right side uses only strictly negative powers. Both must be zero. There are no global sections. The degree-one Čech quotient is

\[
\frac{k[u,u^{-1}]}{k[u]+u^{-1}k[u^{-1}]}=0,
\]

because the two denominator pieces include every Laurent monomial. Thus both cohomology groups vanish. For the trivial transition factor \(1\), the same calculation gives

\[
k[u]\cap k[u^{-1}]=k,\qquad
\frac{k[u,u^{-1}]}{k[u]+k[u^{-1}]}=0.
\]

There is one constant global section and no degree-one class. The affine charts and their affine intersection make these Čech calculations compute sheaf cohomology.[^cech]

This is an executable rule: convert a transition monomial into allowed exponent ranges, then find their intersection and the exponents their sum misses. In these two cases,

\[
\chi(\mathcal O)=1,\qquad \chi(\mathcal O(-1))=0.
\]

### Keep the equation when imposing it twice {#self-intersection-equation-calculus}

Locally a single equation \(v=0\) has the two-term free resolution

\[
[\,\mathcal O\,\eta\xrightarrow{\ d\ }\mathcal O\,],
\qquad d\eta=v.
\]

Multiplication by \(v\) is injective on the ambient smooth chart; the cokernel is its coordinate ring modulo \(v\). Imposing \(v=0\) a second time makes this differential zero. The degree-zero copy remains, and the equation generator remains one degree below it. On overlaps, \(\eta\) must transform as \(v\), so these lower copies glue with exactly the conormal transition factor.

Consequently the alternating classes for the two embeddings are

\[
[\mathcal O_L]-[\mathcal O_L(-1)],
\qquad
[\mathcal O_F]-[\mathcal O_F].
\]

Their Euler characteristics, computed above by Laurent monomials, are \(1-0=1\) and \(1-1=0\). The difference came from a transition rule, not a difference in the number of tangent or equation generators at one point.

There is a direct geometric check. Two distinct projective lines meet at the solution of two independent linear equations, giving one projective point. Two different fibers \(\mathbf P^1\times\{q\}\) and \(\mathbf P^1\times\{q'\}\) have no point in common. Moving the copies makes the same two counts visible.

<!-- figure:self-intersection -->

The derived self-intersection is the invariant construction represented by the local resolution and its gluing. It has \(H^0=\mathcal O\) and \(H^{-1}=N^\vee\); classical refined intersection theory identifies the resulting intersection class with \(c_1(N)\cap[\mathbf P^1]\). Those comparison theorems explain why the calculation is independent of the chosen charts and agrees with intersection theory.[^toen][^intersection] The mechanism used here was smaller: calculate the overlap factor, retain the equation generator, and count the surviving Laurent monomials.

## 11 Higher operations distinguish identical tangent complexes {#higher-operations}

An obstruction space says where a failed correction can land. It does not tell us the first order at which failure occurs. We will calculate that order from equations whose visible degree is misleading.

### Eliminate a variable before naming the interaction {#nonlinear-elimination}

Work over a field \(k\) of characteristic zero and consider the origin in

\[
F_1(x,y)=y-x^2=0,\qquad F_2(x,y)=xy=0.
\]

Both equations have degree two. Their Jacobian at the origin is

\[
J(0)=\begin{pmatrix}0&1\\0&0\end{pmatrix}.
\]

The linear test forces the \(y\)-velocity to vanish and leaves the \(x\)-velocity free. It gives one tangent direction and one unfilled equation component. It does not reveal the leading obstruction.

Invent the coordinate that makes the first equation elementary:

\[
z=y-x^2,\qquad y=z+x^2.
\]

This change is invertible by the displayed substitution. The equations become \(z=0\) and \(xz+x^3=0\). Subtract \(x\) times the first equation from the second. The row operation is invertible, so it preserves the ideal of equations:

\[
(y-x^2,xy)\quad\longleftrightarrow\quad(z,xz+x^3)
\quad\longleftrightarrow\quad(z,x^3).
\]

The local solution problem is exactly \(x^3=0\). A cubic interaction has been produced by eliminating a variable from two quadratic equations. Reading the degrees of the original equations would not have found it.

### Compute the transferred residual coefficient by coefficient {#transferred-residual-recursion}

Write a proposed motion with zero constant term as

\[
x=\sum_{i\geq1}a_i\varepsilon^i,\qquad
y=\sum_{i\geq1}b_i\varepsilon^i.
\]

The first equation determines each \(y\)-coefficient by convolution:

\[
b_n=\sum_{\substack{i+j=n\\i,j\geq1}}a_i a_j.
\]

After that repair, the coefficient of the second equation is

\[
r_n=\sum_{\substack{i+j+\ell=n\\i,j,\ell\geq1}}a_i a_j a_\ell.
\]

These two finite sums are a procedure for every chosen truncation. In particular, \(b_1=0\), \(b_2=a_1^2\), and \(b_3=2a_1a_2\). There is no second-order residual in \(F_2\), but

\[
r_3=a_1^3.
\]

Neither \(a_2\) nor a new \(b_3\) can cancel it. If \(a_1\ne0\), the first-order direction lifts through order two and fails at order three. Over \(k[\varepsilon]/(\varepsilon^4)\), this is visible in the actual substitution

\[
x=a_1\varepsilon+a_2\varepsilon^2+a_3\varepsilon^3,\qquad
y=a_1^2\varepsilon^2+2a_1a_2\varepsilon^3,
\qquad xy=a_1^3\varepsilon^3.
\]

The general local procedure has the same form. When a block of the Jacobian in variables to be eliminated is invertible, solve those variables one degree at a time. At degree \(n\), their unknown coefficients enter through that same linear block; all other terms are known from earlier degrees. Substitute the solution into the remaining equations and calculate their residuals. The invertible block makes the recursion possible. Without it, one must retain the unresolved equations and test the corresponding linear systems.

### Polarizing the corner {#detail-polarizing-the-corner}

We can now ask for the separate contribution of several inputs to the residual we have calculated. For a homogeneous polynomial \(Q\) of degree \(r\), form its \(r\)-fold mixed difference

\[
P_rQ(v_1,\ldots,v_r)
=\sum_{S\subseteq\{1,\ldots,r\}}
(-1)^{r-|S|}Q\!\left(\sum_{i\in S}v_i\right).
\]

Expand a monomial. A term that omits an input \(v_i\) occurs twice with opposite signs, so it cancels. A surviving degree-\(r\) term must use every input exactly once. Thus the result is multilinear. On the diagonal, its \(r!\) assignments give

\[
P_rQ(v,\ldots,v)=r!\,Q(v).
\]

For the node's corner \(Q(a,b)=ab\), this algorithm gives

\[
P_2Q((a,b),(c,d))=ad+bc.
\]

For the residual created by our elimination, it gives

\[
P_3(x^3)(a,b,c)
=(a+b+c)^3-(a+b)^3-(a+c)^3-(b+c)^3
+a^3+b^3+c^3=6abc.
\]

The six counts are the six assignments of three distinct inputs to three factors. The homogeneous-degree assumption matters: applying a third difference to an arbitrary higher-degree polynomial need not give a trilinear expression.

### When three inputs are needed {#detail-when-three-inputs-are-needed}

The familiar test family \(A_n=k[x]/(x^n)\) now serves as a check on the procedure. At the origin its cotangent complex has derived fiber \([k\xrightarrow0 k]\), because the derivative \(nx^{n-1}\) vanishes there for \(n\geq2\). Yet \(x=\varepsilon\) satisfies its equation in \(k[\varepsilon]/(\varepsilon^{m+1})\) exactly when \(m<n\). A correction beginning with \(\varepsilon\) cannot change the leading coefficient of \(\varepsilon^n\).

<!-- figure:probes -->

The elimination example shows how such a higher-order test can emerge without being written as a monomial at the start. Its surviving variable has zero linear response and zero quadratic residual; the first nonzero multilinear response takes three inputs. The convolution and mixed-difference formulas determine that response.

### Reconstructing the formal equation {#detail-reconstructing-the-formal-equation}

To record the answer with a differential, adjoin one equation symbol \(\eta\) of degree \(-1\):

\[
C=k[[x]]\otimes\Lambda(\eta),\qquad dx=0,\qquad d\eta=x^3.
\]

The degree-zero quotient is \(k[[x]]/(x^3)\); the negative cohomology is zero because multiplication by \(x^3\) is injective in \(k[[x]]\). The differential therefore records the exact reduced equation, not only its tangent space. The corresponding construction with \(d\eta=x^n\) gives \(A_n\).

There is an equivalent higher-bracket notation. Put \(u\) in degree \(1\), \(v\) in degree \(2\), and set \(\ell_3(u,u,u)=6v\), with every other bracket zero, including any bracket receiving \(v\). Composites of brackets vanish because an inner output is \(v\), so the higher identities hold. For \(\alpha=tu\), its compatibility equation is

\[
\frac1{3!}\ell_3(\alpha,\alpha,\alpha)=t^3v=0.
\]

The factor and the arity have been derived by elimination and polarization. They were not guessed from a desired formalism. For \(x^n\), use \(\ell_n(u,\ldots,u)=n!v\). Shifting the graded space by \([1]\) places \(u\) in tangent degree zero and \(v\) in obstruction degree one.

The general equivalence between characteristic-zero formal moduli problems and differential graded Lie or \(L_\infty\) models is a further theorem.[^formal-moduli] It controls derived test algebras, homotopies, and changes of models beyond these explicit computations. We do not need that equivalence to execute the elimination, coefficient recursion, or polarization above. Nor does this central-output example prove it: a general problem can have nonzero nested operations and cannot be reconstructed from its first residual alone.

## 12 Split multiplication records, then compute their arithmetic {#spectral-differentiation}

The next calculation has a different kind of input: a list of labels whose multiplication is recorded around a circle. A useful change of variables separates the total label from the ways of cutting that circle. A second calculation turns the multiplication of line bundles into an arithmetic of divided powers. These operations explain substantial parts of a K-theory computation. The spectral theorems needed to identify the resulting objects are stated separately below.

### Separate the total from the cuts {#cyclic-bar-calculus}

Let \(G\) be an abelian group, written additively. A degree-\(q\) cyclic multiplication record is a tuple \((g_0,\ldots,g_q)\). Its face maps merge adjacent entries; the last merges the last entry with the first:

\[
\begin{aligned}
d_i(g_0,\ldots,g_q)&=(g_0,\ldots,g_i+g_{i+1},\ldots,g_q)
&& (i<q),\\
d_q(g_0,\ldots,g_q)&=(g_q+g_0,g_1,\ldots,g_{q-1}).
\end{aligned}
\]

Degeneracies insert zero. The first coordinate is inconvenient: every face involving it changes its value. Replace it by the sum of all coordinates:

\[
\Phi_q(g_0,\ldots,g_q)
=(s;g_1,\ldots,g_q),\qquad s=\sum_{i=0}^q g_i.
\]

The inverse is explicit:

\[
\Phi_q^{-1}(s;g_1,\ldots,g_q)
=(s-g_1-\cdots-g_q,g_1,\ldots,g_q).
\]

Now every face preserves \(s\). In degree two, the remaining list transforms as

\[
\begin{aligned}
d_0(s;g_1,g_2)&=(s;g_2),\\
d_1(s;g_1,g_2)&=(s;g_1+g_2),\\
d_2(s;g_1,g_2)&=(s;g_1).
\end{aligned}
\]

These are exactly the ordinary bar faces on the tail list. Checking the same two endpoint cases and adjacent merge in general proves that \(\Phi\) is an isomorphism of simplicial objects. Realizing them gives

\[
B^{\mathrm{cy}}G\cong G\times BG.
\]

For a well-based topological abelian group the same formulas are continuous and give the same splitting. This is a change of coordinates in the multiplication records, not an inference from matching homology groups. For a nonabelian group, the last face conjugates the total product; that is the precise obstruction to this particular splitting. The splitting is simplicial: it does not assert that the circle action becomes trivial on the two factors.[^cyclic-splitting]

The suspension group algebra \(\mathbb S[G]=\Sigma^\infty_+G\) turns products of labels into smash products. Its cyclic bar realization is topological Hochschild homology. Under the usual well-based model hypotheses, the tuple calculation therefore gives

\[
THH(\mathbb S[G])\simeq\mathbb S[G]\wedge\mathbb S[BG].
\]

Taking \(G=K(\mathbb Z,2)\), a topological abelian group model for the space classifying complex line bundles, gives \(BG=K(\mathbb Z,3)\). Write \(A_0=\mathbb S[K(\mathbb Z,2)]\). We have calculated the extra factor in \(THH(A_0)\) by splitting the tuples. A structured version of Snaith's theorem identifies \(KU\) with the Bott localization \(A_0[\beta^{-1}]\); the theorem that THH commutes with this localization then gives \(THH(KU)\simeq KU[K(\mathbb Z,3)]\). These are the two external identifications used at this step.[^stonek]

### Calculate the multiplication before inverting anything {#factorial-localization-calculus}

<a id="spectral-ku"></a>
<a id="detail-ku-begins-with-tensoring-lines-and-then-inverts-bott"></a>
<a id="spectral-factorial-localization"></a>
<a id="detail-the-explicit-factorial-calculation"></a>

Line bundles combine by tensor product. Their first Chern class satisfies \(c_1(L\otimes N)=c_1(L)+c_1(N)\). Let \(c=c_1\) generate \(H^*(\mathbf{CP}^{\infty};\mathbb Z)=\mathbb Z[c]\), and let \(b_n\) be dual to \(c^n\). Pulling back \(c^n\) along tensor product gives

\[
(c\otimes1+1\otimes c)^n
=\sum_{i=0}^n\binom ni c^i\otimes c^{n-i}.
\]

Pairing with \(b_i\otimes b_j\) reads off the coefficient:

\[
b_i b_j=\binom{i+j}{i}b_{i+j},\qquad
b_1b_n=(n+1)b_{n+1},\qquad b_1^n=n!\,b_n.
\]

This multiplication is the homology product induced by tensoring lines. It is neither cup product nor multiplication in \(\pi_*KU\). The free abelian group on \(b_0,b_1,\ldots\), with this rule and \(|b_n|=2n\), is the divided-power ring \(\Gamma_{\mathbb Z}(b_1)\). Its associativity can also be checked directly: both parenthesizations of \(b_i b_j b_k\) have coefficient \((i+j+k)!/(i!j!k!)\). The coefficients count ordered allocations to factors.[^hatcher-bundles]

Now invert \(b_1\). The relation \(b_1^n=n!b_n\) supplies an explicit inverse to each factorial:

\[
(n!)^{-1}=b_n b_1^{-n}.
\]

Every positive integer divides a factorial, so all nonzero integers become invertible. The map \(b_n\mapsto u^n/n!\) embeds the original ring in \(\mathbb Q[u]\): its basis maps to nonzero multiples of distinct monomials. It extends after localization to an injective map into \(\mathbb Q[u,u^{-1}]\). It is surjective because it contains \(u,u^{-1}\) and the rational numbers. Hence

\[
\Gamma_{\mathbb Z}(b_1)[b_1^{-1}]
\cong\mathbb Q[u,u^{-1}].
\]

The localization can instead be executed as a direct limit. In degree zero, its stages and transition multipliers are

\[
\mathbb Zb_0\xrightarrow{1}\mathbb Zb_1
\xrightarrow{2}\mathbb Zb_2
\xrightarrow{3}\mathbb Zb_3\xrightarrow{4}\cdots.
\]

Send \(b_r\) at stage \(r\) to \(1/r!\). The maps agree, and the union of their images is \(\mathbb Q\). These are transition maps, not boundary differentials: their composites are not supposed to vanish.

Two consequences are now calculations. First, modulo any prime \(p\), \(b_1^p=p!b_p=0\); inverting \(b_1\) forces \(1=0\). Second, in the localized ring a derivation is determined by \(D(u)\), with

\[
D(b_n)=\frac{u^{n-1}}{(n-1)!}\,D(u)\quad(n\geq1),\qquad
D(u^{-1})=-u^{-2}D(u).
\]

The inverse and every divided power introduce no further choices. These are statements about the displayed ring and its algebraic derivations.

<a id="spectral-rationality-periodicity"></a>
<a id="detail-rationality-and-periodicity-do-different-jobs"></a>

The structured Snaith presentation and localization of ordinary homology identify this ring calculation with

\[
\pi_*(KU\wedge H\mathbb Z)
\cong\Gamma_{\mathbb Z}(b_1)[b_1^{-1}]
\cong\mathbb Q[u,u^{-1}].
\]

The coefficient-change map \(KU\wedge H\mathbb Z\to KU\wedge H\mathbb Q\) sends the displayed basis to the same divided powers, so it is an isomorphism on homotopy groups and therefore an equivalence. Factorial localization explains this rationality. Bott periodicity has another job: it shifts the result by an even degree. It does not by itself create rational coefficients.[^stonek]

### Remove repeated odd inputs {#odd-generator-calculus}

<a id="spectral-thh"></a>
<a id="detail-the-signed-boundary-rule-returns-in-thh"></a>

Suppose a free commutative spectral algebra has one rational generator \(\xi\) of degree one. In its \(n\)-fold tensor term, a transposition reverses orientation:

\[
\xi\xi=-\xi\xi.
\]

For \(n\geq2\), every coinvariant class equals its negative, so it is zero over \(\mathbb Q\). No higher finite-group homology remains: averaging over the group is available because its order is invertible. Thus every symmetric-power term of weight at least two vanishes. The free algebra consists of its ground ring and the single odd summand, whose square is zero.

Over \(\mathbb F_2\), the sign argument would say nothing; over \(\mathbb Z\), the equation \(2\xi^2=0\) alone would not imply \(\xi^2=0\). The rational coefficient condition is doing essential work.

For \(KU\), Stonek's theorem identifies the extra factor calculated by the cyclic splitting with the free commutative \(KU\)-algebra on \(\Sigma KU_{\mathbb Q}\). Applying the preceding weight calculation gives

\[
THH(KU)\simeq\operatorname{Sym}_{KU}(\Sigma KU_{\mathbb Q})
\simeq KU\oplus\Sigma KU_{\mathbb Q}.
\]

The identification is not a consequence of the sign calculation. One of its substantive inputs is that \(KU\wedge K(\mathbb Z,3)\) is rational; its proof uses the vanishing of the relevant height-one Morava K-homology. Ordinary rational homology of \(K(\mathbb Z,3)\) would not establish that assertion about its smash product with \(KU\). Once this input is supplied, the sign calculation determines why the higher powers disappear.[^stonek]

### Reference shelf: what the spectral identifications add {#spectral-reference-shelf}

The calculations above use tuple coordinates, binomial coefficients, localization, and signed permutation of inputs. The following results connect those calculations to spectral differentiation. They are additional theorems, not consequences of the rectangle analogy.

<a id="spectral-free-responses"></a>
<a id="detail-the-free-example-and-its-families-of-responses"></a>

For a map \(R\to A\) of \(E_\infty\)-ring spectra and an \(A\)-module spectrum \(M\), a derivation is a lift of the identity to the square-zero extension \(A\oplus M\). The representing module \(\mathbb L_{A/R}\) satisfies

\[
\operatorname{Map}_{\operatorname{Mod}_A}(\mathbb L_{A/R},M)
\simeq\operatorname{Map}_{\operatorname{CAlg}_R/A}(A,A\oplus M).
\]

For \(A=\operatorname{Sym}_R(V)\), the free adjunction gives \(\mathbb L_{A/R}\simeq A\otimes_RV\). A value on the generators determines the lift, including its homotopies. But the free spectral algebra itself is \(\bigoplus_{n\geq0}(V^{\otimes_Rn})_{h\Sigma_n}\), not generally an ordinary polynomial algebra. For example, over \(H\mathbb F_2\) its weight-two term includes \(H_1(B\Sigma_2;\mathbb F_2)=\mathbb F_2\). The cellular boundary maps of \(B\Sigma_2=\mathbf{RP}^\infty\), alternately \(2\) and \(0\) integrally, all vanish modulo two. This is one explicit reason that ordinary polynomial differentiation cannot replace the spectral theorem.[^higher-algebra][^hatcher]

<a id="spectral-thom-orientations"></a>
<a id="detail-the-rectangle-becomes-a-change-of-orientation"></a>

For a grouplike \(E_\infty\)-map \(f:G\to\operatorname{Pic}(R)\), let \(Mf\) be its Thom algebra. The universal orientation theorem identifies maps out of \(Mf\) with compatible trivializations of the family of invertible modules labeled by \(G\). Relative changes of a square-zero orientation have the elementary multiplication

\[
(1,m)(1,n)=(1,m+n).
\]

The full orientation theorem, including all coherent compatibilities, then identifies those changes with maps from the connective spectrum \(B^\infty G\). It yields

\[
\mathbb L_{Mf/R}\simeq Mf\wedge B^\infty G.
\]

The multiplication formula explains additivity; it does not establish the universal orientation theorem or the passage from infinite loop groups to connective spectra.[^thom-orientations][^rasekh-stonek]

<a id="spectral-mu"></a>
<a id="detail-why-the-labeling-spectrum-for-mu-is-shifted-k-theory"></a>

For \(MU\), the labels are rank-zero virtual complex bundles under direct sum. Their associated spectrum is the rank-zero cover of \(ku\). Bott periodicity identifies that cover with \(\Sigma^2ku\), giving

\[
\mathbb L_{MU/\mathbb S}\simeq MU\wedge\Sigma^2ku.
\]

Thus its first two homotopy groups vanish and its degree-two group is \(\mathbb Z\). Neither the group-completion construction nor Bott periodicity has been proved by the coefficient manipulations above.[^basterra-mandell]

For \(A_0=\mathbb S[K(\mathbb Z,2)]\), the constant Thom map gives \(\mathbb L_{A_0/\mathbb S}\simeq A_0\wedge\Sigma^2H\mathbb Z\). Spectral localization gives \(\mathbb L_{KU/\mathbb S}\simeq KU\wedge\Sigma^2H\mathbb Z\). The factorial calculation and Bott periodicity then finish the identification:

\[
\mathbb L_{KU/\mathbb S}\simeq\Sigma^2KU_{\mathbb Q}\simeq KU_{\mathbb Q}.
\]

This is a \(KU\)-module statement, not a multiplication being assigned to its cotangent complex. Coefficients matter: Bott must act invertibly on any \(KU\)-module. The expression here is the absolute smash with \(H\mathbb Z\); tensoring over \(ku\) instead would kill a Bott-invertible module, because the rank map \(ku\to H\mathbb Z\) sends Bott to zero.[^rasekh-stonek]

## 13 Compute a mixed interaction before constructing its Taylor tower {#goodwillie-derivatives}

Two independent spheres can be joined at a point or combined as a product. The product contains one cell that the wedge lacks. We will calculate its attaching map, prove that the map has infinite order, and show exactly why one suspension loses it. This supplies an actual interaction for a functor calculus to organize.

### Build the mixed cell and test whether it is removable {#mixed-cell-calculus}

<a id="goodwillie-product-cell"></a>
<a id="detail-the-boundary-that-attaches-the-product-cell"></a>

Put \(W=S^2\vee S^2\) and \(B=S^2\times S^2\). Choose maps \(\chi_i:D^2\to S^2\) collapsing their boundary circles to the basepoint. The missing product cell is \(D^2\times D^2\). Its boundary is

\[
\partial(D^2\times D^2)
=(S^1\times D^2)\cup(D^2\times S^1)\cong S^3.
\]

Define \(\alpha:S^3\to W\) by sending \((u,v)\) to \(\chi_2(v)\) on the first piece and to \(\chi_1(u)\) on the second. The formulas agree on the common torus, which goes to the wedge point. The two induced orientations on that torus have opposite signs. This checks both the gluing of the maps and the cancellation of their boundaries.

Attaching the cell by \(\alpha\) produces \(B\). The map is the mixed Whitehead product, up to the chosen overall orientation. But its name is not a test that it matters. Here is one.

Let \(a,b\) be the degree-two integral cohomology classes pulled back from the two sphere factors, and orient the product cell by the order of its factors. The product cochain evaluates as

\[
\langle a\smile b,[D^2\times D^2]\rangle=1.
\]

If \(\alpha\) were nullhomotopic, its cell attachment would be \(W\vee S^4\). In that wedge, the product of the two degree-two classes is zero: neither summand supports both factors. The computed value rules this out.

It also distinguishes every multiple of the attaching map. Let \(C_{m\alpha}\) be the complex attached using \(m\alpha\), with multiplication by \(m\) realized by a degree-\(m\) map of the boundary sphere. Extending that degree map over the cone gives a map

\[
C_{m\alpha}\longrightarrow C_\alpha
\]

which is the identity on \(W\) and multiplies the top relative cell by \(m\). Naturality of cup product therefore gives cross-product value \(m\) in \(C_{m\alpha}\). A null attaching map would give value zero. Thus \(m\alpha\ne0\) for every nonzero integer \(m\): the interaction has infinite order.[^hatcher]

<!-- figure:goodwillie -->

### Show what suspension erases {#mixed-input-calculus}

Let \(i:W\to B\) be the inclusion. Although \(i\) has no retraction preserving this cup product, its suspension does have a homotopy retraction. Pinch \(\Sigma B\) into two copies, apply the suspended projection to the first sphere on one copy and to the second sphere on the other, and obtain

\[
r:\Sigma B\longrightarrow\Sigma S^2\vee\Sigma S^2=\Sigma W,
\qquad r\circ\Sigma i\simeq\operatorname{id}_{\Sigma W}.
\]

On either suspended sphere summand, one projection is the identity and the other is constant; that checks the retraction. Since \(i\circ\alpha\) extends across the product cell, it is null. Applying the retraction shows

\[
\Sigma\alpha\simeq r\circ\Sigma i\circ\Sigma\alpha\simeq0.
\]

Suspension really does erase the mixed map detected above. This is a calculation with maps, not an inference that an interaction must disappear because we call an approximation linear.

### Replace a formal fiber by paths and a join {#path-fiber-calculus}

<a id="goodwillie-cross-effects"></a>
<a id="detail-the-square-of-spaces"></a>

To keep the missing interaction, study the homotopy fiber

\[
F(X,Y)=\operatorname{hofib}(X\vee Y\longrightarrow X\times Y)
\]

for based, path-connected, well-pointed CW spaces. A point of this fiber consists of a wedge point and two paths connecting its coordinates to the basepoints.

Reverse the paths, so they run from the basepoints to the coordinates of the wedge point. Use Moore paths, which have a nonnegative length and concatenate without reparametrizing. Let \(P_X,P_Y\) be their contractible path spaces, and let \(\Omega X,\Omega Y\) be the subspaces whose endpoint is the basepoint. When the wedge point lies in \(X\), the data are \(P_X\times\Omega Y\); when it lies in \(Y\), they are \(\Omega X\times P_Y\). Their intersection is \(\Omega X\times\Omega Y\).

The well-pointed hypothesis makes the basepoint inclusions cofibrations. Here it also makes the loop subspaces cofibrations in the path spaces. To see the latter, use a neighborhood-deformation-retract description of the basepoint: append the prescribed deformation of a path's endpoint, with an appended length tending to zero at the basepoint. This fixes a based loop and deforms nearby endpoints to the basepoint. Applying the same construction after taking a product shows that the two inclusions from the intersection are cofibrations. Their strict union, which is our path-fiber model, therefore computes the homotopy pushout

\[
\operatorname{hocolim}\left(
P_X\times\Omega Y\ \longleftarrow\
\Omega X\times\Omega Y\ \longrightarrow\
\Omega X\times P_Y\right).
\]

Contract each path space. The two maps become the projections from \(\Omega X\times\Omega Y\), so the result is their join:

\[
F(X,Y)\simeq\Omega X*\Omega Y
\simeq\Sigma(\Omega X\wedge\Omega Y).
\]

The path description explains the join: one end forgets the first loop, the other forgets the second, and intermediate points keep both. It also identifies the map to the wedge as the generalized Whitehead product.[^fiber-join]

The path model gives a comparison map as well as a homotopy type. Let \(q:X\times Y\to X\wedge Y\) collapse the wedge. A fiber point consists of \(w\in X\vee Y\) and a path \(\gamma\) from the product basepoint to \(i(w)\); composing with \(q\) produces a loop because both endpoints become the basepoint. For a pair of Moore paths, rescale their parameters to the unit interval before taking the product. Thus

\[
\rho_{X,Y}:F(X,Y)\longrightarrow\Omega(X\wedge Y),
\qquad (w,\gamma)\longmapsto q\circ\gamma.
\]

With the displayed path direction, this construction commutes with based maps in both inputs.

For \(X=Y=S^2\), the first nonzero reduced homology of each loop space is a copy of \(\mathbb Z\) in degree one. Their smash first contributes in degree two; the suspension in the join puts this contribution in degree three. The join is 2-connected, so Hurewicz gives

\[
\pi_3F(S^2,S^2)\cong H_3F(S^2,S^2)\cong\mathbb Z.
\]

The product cell supplies a particular lift of \(\alpha\) to this fiber: after inclusion into \(B\), its nullhomotopy is the product of disks itself. Quotienting \(B\) by \(W\) turns this nullhomotopy into a degree-one map

\[
(D^2\times D^2)/\partial(D^2\times D^2)
\longrightarrow B/W\cong S^4.
\]

Consequently \(\rho_{S^2,S^2}\) sends that lift to a generator in degree three. Choose the orientation of the lift so that its adjoint has degree \(+1\) on the quotient product cell. It identifies the same integer detected by the cross cup-product, now inside an explicit space of mixed path data.

### Extract the part requiring each input once {#mixed-bilinear-calculus}

<a id="goodwillie-bilinear-coefficient"></a>
<a id="detail-reading-the-bilinear-coefficient"></a>

The join formula is still nonlinear: a loop space contains iterated paths as well as its first spherical generator. For suspended sphere inputs, with \(r,s\) nonnegative integers, there is a concrete way to separate them. The James word model for \(\Omega S^{r+2}=\Omega\Sigma S^{r+1}\) filters it by word length. The length-one cell has dimension \(r+1\); the next length begins at \(2(r+1)\).[^fiber-join]

In \(\Sigma(\Omega S^{r+2}\wedge\Omega S^{s+2})\), the cell using one generator from each input has dimension \(r+s+3\). Relative cells using at least two from the first input begin at \(2r+s+4\); those using at least two from the second begin at \(r+2s+4\). Thus the bottom-sphere inclusion has connectivity at least

\[
k_{r,s}=\min(2r+s+3,r+2s+3).
\]

Compose the path comparison with stabilization, writing \(QZ=\Omega^\infty\Sigma^\infty Z\):

\[
\sigma_{r,s}:F(S^{r+2},S^{s+2})
\xrightarrow{\ \rho\ }\Omega S^{r+s+4}
\longrightarrow\Omega QS^{r+s+4}.
\]

On the bottom sphere its adjoint is again the quotient of the product characteristic cell, of degree \(+1\) after the same orientation choice. Its restriction is therefore the usual stable unit \(S^{r+s+3}\to QS^{r+s+3}\). Freudenthal stabilization makes that unit at least \(2(r+s+3)-1\)-connected, which is no smaller than \(k_{r,s}\). Comparing it with the bottom-sphere inclusion proves that \(\sigma_{r,s}\) is at least \(k_{r,s}\)-connected. Taking \(r+s\) output loops gives the bound

\[
k_{r,s}-(r+s)=\min(r+3,s+3).
\]

Passing from these individual maps to a bilinearization requires compatible suspension transition maps, not just the dimensions of their bottom cells. Here we use Goodwillie's natural suspension-assembly comparison for the second cross-effect: the stabilized maps \(\rho_{X,Y}\) are compatible with those transitions, and their target \(\Omega Q(X\wedge Y)\) is linear in each input.[^goodwillie] This is the comparison theorem used at this step. The connectivity bound just proved tends to infinity when both suspension indices increase, so that comparison induces an equivalence on the resulting homotopy colimit. At \(X=Y=S^2\), its value is

\[
\Omega Q(S^2\wedge S^2)\simeq\Omega QS^4\simeq QS^3.
\]

The calculation supplies the stable range, the one-loop shift, and the integral generator. The compatibility with the standard assembly maps is the stated theorem input; the further universal classification for arbitrary inputs is recalled below.

### Reference shelf: the universal functor calculus {#goodwillie-reference-shelf}

The preceding construction is the second cross-effect of the identity functor. In general, for a homotopy functor \(T\),

\[
\operatorname{cr}_2T(X,Y)=
\operatorname{hofib}\left(T(X\vee Y)\longrightarrow
T(X)\times^h_{T(*)}T(Y)\right).
\]

Vanishing of this particular fiber is only one test. A 1-excisive functor must turn every homotopy pushout square into a homotopy pullback square. Higher excision tests strongly homotopy cocartesian cubes. Goodwillie's existence theorem constructs universal approximations \(T\to P_nT\); it is not established merely by writing the comparison square.[^goodwillie]

<a id="goodwillie-first-approximation"></a>
<a id="detail-why-the-first-approximation-is-linear"></a>

For the identity \(I\), the theorem identifies \(P_1I(X)\simeq QX=\Omega^\infty\Sigma^\infty X\). This candidate passes the linearity test because suspension spectra preserve pushouts, stable pushouts are pullbacks, and \(\Omega^\infty\) preserves pullbacks. Its universality is additional. The second derivative is \(\partial_2I\simeq\mathbb S^{-1}\), with trivial transposition action on the coefficient, and

\[
D_2I(X)\simeq
\Omega^\infty\left(
\left(\mathbb S^{-1}\wedge
(\Sigma^\infty X)^{\wedge2}\right)_{h\Sigma_2}\right).
\]

The two mixed terms in \((E_X\oplus E_Y)^{\wedge2}\) are exchanged by transposition. Their homotopy orbits give one copy of \(\Sigma^{-1}(E_X\wedge E_Y)\), which matches the computed bilinear response. The general classification theorem, rather than this expansion alone, identifies it with the Taylor layer. For simply connected spaces the identity's tower converges; its connecting maps still matter, so a list of derivative spectra is not a reconstruction recipe.[^goodwillie]

<a id="goodwillie-cotangent-linearization"></a>
<a id="detail-the-diagonal-reappears-in-linearization"></a>

There is also a precise bridge to spectral differentials. For \(R\to A\), let \(I_A\) take an augmented commutative \(A\)-algebra to the fiber of its augmentation. Then

\[
\mathbb L_{A/R}\simeq(P_1I_A)(A\wedge_R A).
\]

This is a theorem about linearization in the category of augmented commutative algebras.[^rasekh-stonek] It explains a connection with the earlier diagonal construction; it is not needed to build the product cell, compute its integer, or construct the path fiber. Those calculations supply the mechanism the framework subsequently organizes.

## 14 Summary of the calculations {#derivative-reconstruction}

The first change was an arithmetic of increments. Setting \(\varepsilon^2=0\) made the product and chain rules exact polynomial calculations. Restoring \(\varepsilon^2\) exposed the corner term, and direct substitution distinguished a repairable motion from one blocked at a node.

The universal differential changed the task from inventing each compatible first-order measurement to choosing a linear map from one module. The Jacobian and the two-term presentation changed a correction problem into a kernel-and-cokernel calculation. At the node, that presentation identified the target, while the multiplication law supplied the actual residual \(ab\). Finding the target and calculating the residual are separate steps.

The later studies gave further explicit calculations. A chart transition turned self-intersection data into a count of Laurent monomials. Eliminating one variable from two quadratic equations exposed an unavoidable cubic residual. A coordinate change split cyclic multiplication records into their total and a bar construction, while the divided-power law made rationality after localization explicit. A product cell supplied a mixed class; cup products detected its infinite order, and suspended projections showed why it disappears under stabilization.

## Notes and sources {#notes-and-sources}

[^stacks-diff]: The Stacks Project, [Differentials](https://stacks.math.columbia.edu/tag/00RM), especially the universal property, polynomial computation, conormal exact sequence and diagonal construction. The diagonal is also stated separately in [Lemma 10.131.13](https://stacks.math.columbia.edu/tag/00RW).
[^hatcher]: Allen Hatcher, [Algebraic Topology](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), Lemma 3.6 for the cup-product coboundary, Proposition 3B.1 for the product boundary, Example 2.42 on printed p. 144 for the cellular differentials of real projective space, Theorem 3.19 for the cohomology ring of complex projective space, and Example 4.52 and printed pp. 380–381 for the sphere-wedge calculation and Whitehead attaching map. The binomial and factorial Pontryagin calculations in section 12 are derived explicitly from that cohomology ring and the first Chern class law.
[^joyce]: Dominic Joyce, [An introduction to C-infinity schemes and C-infinity algebraic geometry](https://arxiv.org/pdf/1104.4951), Definition 2.15 and Example 2.16 for smooth derivations and cotangent modules.
[^stokes]: Semyon Dyatlov, [18.155 lecture notes](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf), Chapter 17, Differential Forms and Hodge Theory, Theorem 17.3 for Stokes' theorem. The algebraic extension to exterior powers is in the Stacks Project, [The de Rham complex](https://stacks.math.columbia.edu/tag/0FKF).
[^different]: The Stacks Project, [Example 41.8.3](https://stacks.math.columbia.edu/tag/024Z) for the number-field different, and [The Kähler different](https://stacks.math.columbia.edu/tag/0BVV) for its Fitting-ideal formulation and non-unramified locus.
[^frobenius]: The Stacks Project, [Frobenii](https://stacks.math.columbia.edu/tag/0CC6), for absolute and relative Frobenius, universal homeomorphisms, and degree.
[^artin-schreier]: The Stacks Project, [The Artin–Schreier sequence](https://stacks.math.columbia.edu/tag/0A3J). The polynomial presentation here independently exhibits the finite free algebra and invertible relative derivative.
[^hasse]: Luis Narváez Macarro, [Hasse–Schmidt derivations, divided powers and differential smoothness](https://www.numdam.org/item/10.5802/aif.2513.pdf), Annales de l'Institut Fourier 59 (2009), 2979–3014. The introduction defines Taylor-coefficient differential operators over arbitrary coefficient rings.
[^lci]: The Stacks Project, [The cotangent complex of a local complete intersection](https://stacks.math.columbia.edu/tag/08SH), especially Lemma 92.14.2 and Proposition 92.14.4. The construction is described in [The cotangent complex of a ring map](https://stacks.math.columbia.edu/tag/08PL). [Lemma 92.9.1](https://stacks.math.columbia.edu/tag/08R5) gives the smooth case, and [Lemma 92.11.3](https://stacks.math.columbia.edu/tag/08RB) identifies the two-term truncation with the naive cotangent complex of a general presentation.
[^deformations]: The Stacks Project, [Deformations of ring maps and the cotangent complex](https://stacks.math.columbia.edu/tag/08SM), for extension classes, choices and obstructions. The node's arc and smoothing calculations in the text are direct computations.
[^toen]: Bertrand Toën, [Derived Algebraic Geometry](https://arxiv.org/pdf/1401.1044), §3.1 for cotangent complexes and virtual classes, including the self-intersection class as the alternating exterior powers of the conormal bundle.
[^intersection]: The Stacks Project, [Lemma 82.22.4](https://stacks.math.columbia.edu/tag/0ER4), for Cartier-divisor intersection and self-intersection. The two embeddings of the projective line are computed from their normal bundles in the text.
[^formal-moduli]: Jacob Lurie, [Derived Algebraic Geometry X: Formal Moduli Problems](https://www.math.ias.edu/~lurie/papers/DAG-X.pdf), Proposition 1.1.11 for the Artin test category, Remark 1.1.21 for the pullback condition with one surjective map on zeroth homotopy, and Theorem 2.0.2 for the characteristic-zero formal-moduli correspondence. The elimination and polarization calculations in the text construct the central higher Lie models for the resulting truncated polynomial rings directly.
[^higher-algebra]: Jacob Lurie, [Higher Algebra](https://www.math.ias.edu/~lurie/papers/HA.pdf), §3.1.3 for free algebras, §7.3 for cotangent complexes, and Warning 7.3.0.2 for algebraic and spectral cotangent theories. The mapping-space formulation is introduced in [DAG IV: Deformation Theory](https://www.math.ias.edu/~lurie/papers/DAG-IV.pdf).
[^basterra-mandell]: Maria Basterra and Michael A. Mandell, [Homology and cohomology of E-infinity ring spectra](https://arxiv.org/pdf/math/0407209), Theorem 5 and its applications on pp. 4–5. Their connective spectrum bu is explicitly identified with the double suspension of ku.
[^rasekh-stonek]: Nima Rasekh and Bruno Stonek, [The cotangent complex and Thom spectra](https://arxiv.org/pdf/2005.01382), Definition 3.3 and formula (3.11) for the augmentation-ideal functor and its first excisive approximation as the cotangent complex, Theorem 4.3 and Example 4.8 for Thom spectra and cobordism, Example 5.6 for localization at a graded homotopy element, and Example 5.7 for the cotangent complex of periodic complex K-theory.
[^stonek]: Bruno Stonek, [Higher topological Hochschild homology of periodic complex K-theory](https://arxiv.org/pdf/1801.00156), Theorem 3.1 and Proposition 3.4 for homotopy localization and base change, formula (3.7) for its telescope, Proposition 4.6 for the cyclic-bar coordinate splitting, Theorems 5.16 and 5.18 and formula (5.19) for the structured Snaith presentation and the Bott class, Proposition 5.29 for the rationality input using height-one Morava K-homology, Theorem 5.25 for the algebra structure of THH of KU, Lemma 5.31 and Proposition 5.33 for the rational odd-generator symmetric powers, Corollary 8.4 for the specified integral-to-rational homology equivalence and the topological André–Quillen module, and Remark 8.5(3) for the scope of the comparison with Hochschild–Kostant–Rosenberg. The factorial proof explaining the coefficient-change equivalence is given directly in this exposition, rather than attributed as the paper's proof.
[^thom-orientations]: Omar Antolín-Camarena and Tobias Barthel, [A simple universal property of Thom ring spectra](https://arxiv.org/pdf/1411.7988), Theorem 3.5 for the universal lifting property, Lemma 3.15 for algebra maps as orientations of grouplike inputs, Corollary 3.17 for the canonical self-orientation, and Corollary 3.19 for orientation differences. These provide the orientation interpretation of the Thom cotangent calculation.
[^hatcher-bundles]: Allen Hatcher, [Vector Bundles and K-Theory](https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf), Proposition 3.10 and its proof for the classification of complex line bundles by the first Chern class and the law for tensor product. The K-theory identity with coordinates [L] minus one follows from multiplying their classes.
[^goodwillie]: Thomas G. Goodwillie, [Calculus III: Taylor Series](https://arxiv.org/pdf/math/0310481), the introduction for excision, cubes and Taylor layers, and §8 for the first and second derivatives of the identity and the bilinearized second cross-effect. For a modern overview, the distinction between cross-effects and full excision, and convergence hypotheses, see Greg Arone and Michael Ching, [Goodwillie Calculus](https://arxiv.org/pdf/1902.00803).

[^cech]: The Stacks Project, [Čech cohomology of quasi-coherent sheaves](https://stacks.math.columbia.edu/tag/01XD), Lemma 30.2.6. For an affine open cover with affine finite intersections, the Čech complex computes the sheaf cohomology of a quasi-coherent module. The Laurent-monomial calculation for the two charts of the projective line is performed explicitly in the text.
[^cyclic-splitting]: Bruno Stonek, [Higher topological Hochschild homology of periodic complex K-theory](https://arxiv.org/pdf/1801.00156), Proposition 4.6. The simplicial coordinate change is written out and checked in the text; Propositions 4.4–4.5 identify its suspension group-algebra realization.
[^fiber-join]: Stephen Theriault, [Homotopy fibrations with a section after looping](https://arxiv.org/pdf/2005.11570), §2, discussion of Ganea’s fiber of the wedge-to-product map and its Whitehead-product inclusion. The path-space construction is given in the text. For the James model of loops on a suspension, see also Allen Hatcher, [Algebraic Topology](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), the discussion of James reduced products. The word-length filtration and connectivity estimate used here apply to the indicated suspended sphere inputs.
