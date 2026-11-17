# How far can a change of coordinates go?

Henry Shin · Refactor · Mathematical companion · November 3, 2026 · Revised November 6, 2026

Derive the available corrections, prove when they give an exact coordinate, and locate the first failure in prime characteristic.

Can we label quantities near one so that multiplying them adds their labels? The new labels must let us recover the original quantities, and we may choose every higher coefficient. We will derive the first repair, expose its next error, and turn that calculation into a test for later repairs. In characteristic \(p\), the first unavoidable failure occurs in degree \(p\).

## 1. Specify what a change of coordinates must do

Work over a field \(k\). Write a quantity near one as \(1+x\). Multiplication gives


\[
\begin{aligned}(1+x)(1+y)&=1+F(x,y),\\F(x,y)&=x+y+xy.\end{aligned}
\]

We seek a new label \(L(x)\) for \(1+x\) such that the label of a product is the sum of the labels:


\[
L(F(x,y))=L(x)+L(y).
\]

Here “near one” is formal: \(x,y\) are placeholders, and equality means equality of all coefficients in \(k[[x,y]]\). We do not evaluate only on the elements of a finite field. A term \(x^iy^j\) has total degree \(i+j\); checking through degree \(N\) retains every term of total degree at most \(N\). No convergence or logarithm branch is involved.

The change of labels must be invertible so that it recovers the original coordinate. The desired identity will then give the exact bridge


\[
F(x,y)=L^{-1}(L(x)+L(y)).
\]

Setting \(x=y=0\) forces \(L(0)=0\). Write its linear coefficient as \(a\). An inverse requires \(a\ne0\), since the linear coefficients of a map and its inverse multiply to one. Dividing every label by \(a\) preserves the addition identity. Thus no invertible candidate is lost by normalizing:


\[
L(t)=t+ct^2+dt^3+\cdots.
\]

The dots include a separate unknown in every higher degree. Conversely, every such normalized series has a formal inverse. For example, solving \(L(M(t))=t\) gives


\[
M(t)=t-ct^2+(2c^2-d)t^3+\cdots.
\]

At each next degree, the new coefficient of \(M\) appears with coefficient one; all other contributions are already known. The same recursion constructs an inverse for composition in the other order. Composing a left inverse with a right inverse shows that they agree, so this gives a two-sided formal inverse. The coordinate ansatz therefore includes exactly the normalized invertible changes of labels.

## 2. Let the current error determine the next coefficient

Call \(E_L(x,y)=L(F(x,y))-L(x)-L(y)\) the defect. Start with the unchanged label \(L_1(t)=t\). Its defect is \(xy\). The first available correction is \(ct^2\), whose effect is found by substitution:


\[
\begin{aligned}&F(x,y)^2-x^2-y^2\\&\qquad=2xy+2x^2y+2xy^2+x^2y^2.\end{aligned}
\]

Thus the degree-two error becomes \((1+2c)xy\). If two is invertible, the only repair is \(c=-1/2\). Fix that choice and call the repaired coordinate \(L_2(t)=t-\tfrac12t^2\). Its remaining defect is


\[
E_{L_2}=-(x^2y+xy^2)-\tfrac12x^2y^2.
\]

The next error is cubic. Every extension keeping the coefficients already chosen has the form \(L_2(t)+dt^3+\cdots\); terms beginning in degree four cannot change the cubic error. The degree-three part of \(F^3-x^3-y^3\) is \(3(x^2y+xy^2)\), so adding \(dt^3\) gives


\[
\begin{aligned}&E_{L_2+dt^3}=(3d-1)(x^2y+xy^2)\\&\quad+\text{terms of degree at least }4.\end{aligned}
\]

Where three is also invertible, the only choice is \(d=1/3\). The next coefficient is determined by the error left by the preceding repair. We will recover the same pattern in all degrees.

## 3. Account for every possible repair in characteristic three

Now let \(k\) have characteristic three: \(3=0\) and \(2=-1\). The degree-two equation forces \(c=1\). For the repaired label \(L_2(t)=t+t^2\), the complete defect is


\[
E_{L_2}=-x^2y-xy^2+x^2y^2.
\]

Its first surviving part is the nonzero polynomial \(-xy(x+y)\). Every normalized coordinate that passed the quadratic test has the form \(L_2(t)+dt^3+\text{terms of degree at least }4\). The cubic coefficient is therefore the entire next search.

In characteristic three, cubing a sum produces no mixed terms. Here that gives the exact identity


\[
F(x,y)^3-x^3-y^3=x^3y^3.
\]

So \(dt^3\) changes only degree six. Every later term \(a_nt^n\) with \(n\ge4\) contributes only in total degrees at least \(n\), because \(F\) has no constant term. Neither the cubic coefficient nor the infinite tail can touch the degree-three error. No invertible formal coordinate can make this law additive in characteristic three.

The failed denominator \(1/3\) alone would rule out one proposed formula. Tracking every remaining coefficient proves that the coordinate itself cannot exist.

## 4. Extract a reusable repair test

The mechanism is not specific to the numbers two and three. Fix \(n\ge2\). Suppose \(F(x,y)\) has linear part \(x+y\), with \(F(x,0)=x\) and \(F(0,y)=y\). Let \(P(t)\) be the normalized polynomial consisting of the coefficients already chosen in degrees below \(n\). Suppose its defect vanishes below degree \(n\), with degree-\(n\) part \(R_n(x,y)\).

Every coordinate retaining these choices has the form


\[
\begin{aligned}&P(t)+ct^n\\&\quad+\text{terms of degree at least }n+1.\end{aligned}
\]

The higher tail cannot affect degree \(n\). Adding \(ct^n\) changes the defect by \(c(F^n-x^n-y^n)\).

In degree \(n\), each factor of \(F^n\) must contribute its linear part; using any higher term raises the total degree. Hence the available change is exactly \(cB_n\), where


\[
\begin{aligned}B_n(x,y)&=(x+y)^n-x^n-y^n\\&=\sum_{i=1}^{n-1}\binom ni x^iy^{n-i}.\end{aligned}
\]

The next coefficient exists precisely when one scalar \(c\) solves the polynomial equation


\[
R_n+cB_n=0.
\]

Compare all mixed coefficients. A nonzero coefficient of \(B_n\) determines the only possible \(c\) over our field; the other coefficients must confirm it. If \(B_n=0\), every \(c\) works when \(R_n=0\), and none works otherwise. This recovers \(B_2=2xy\) and, in characteristic three, \(B_3=0\).

This test decides extension of the partial coordinate already chosen. If an earlier coefficient was free, different earlier choices can produce different later errors and must still be considered. In our characteristic-three example the lower coefficients were forced, so the failed test rules out every coordinate. The repair equation uses exactly the displayed assumptions on \(F\).

## 5. Determine how far the repair can go

Can one calculation constrain all the unknown coefficients? Keep every power of the first input \(x\), but inspect only terms linear in the second input \(y\). Write \(L(t)=\sum_{n\ge1}a_nt^n\), with \(a_1=1\). Since \(F=x+(1+x)y\), a term linear in \(y\) in \(F^n\) selects \((1+x)y\) from one of the \(n\) factors and \(x\) from every other factor. Thus


\[
[y]F(x,y)^n=nx^{n-1}(1+x).
\]

Here \([y]\) means the coefficient of \(y\), still a series in \(x\). Summing these contributions gives \([y]L(F)=(1+x)\sum_{n\ge1}na_nx^{n-1}\). Denote the sum by \(L\prime(x)\): it is the formal derivative, the operation that multiplies each coefficient by its exponent and lowers that exponent by one. The coefficient of \(y\) in \(L(x)+L(y)\) is \(a_1=1\), so the coordinate identity requires


\[
(1+x)L'(x)=1.
\]

Comparing the coefficient of \(x^{n-1}\) for \(n\ge2\) gives a recurrence; starting from the normalized coefficient, induction gives the second equality:


\[
\begin{aligned}na_n+(n-1)a_{n-1}&=0,\\na_n&=(-1)^{n-1}.\end{aligned}
\]


### Characteristic zero: prove the full identity

Every positive integer is invertible in a characteristic-zero field, so the only normalized candidate is


\[
L(t)=\sum_{n\ge1}\frac{(-1)^{n-1}}n\,t^n=\log(1+t).
\]

The one-coefficient test was necessary; it is not yet a proof of the two-variable identity. Verify that separately. The series has \(L'(t)=1/(1+t)\), where the reciprocal is its geometric series. Differentiating its full defect formally with respect to \(y\) gives


\[
\begin{aligned}\frac{\partial E_L}{\partial y}&=(1+x)L'(F)-L'(y)\\&=\frac{1+x}{1+F}-\frac1{1+y}\\&=0.\end{aligned}
\]

The last equality uses \(1+F=(1+x)(1+y)\). In characteristic zero, a formal series with zero \(y\)-derivative has no positive powers of \(y\). Also \(E_L(x,0)=0\), so \(E_L=0\). This proves the exact coordinate identity, and the inverse construction from section 1 proves it is a genuine change of coordinates.

### Characteristic p: prove the exact first failure

Let \(p\) be the characteristic. The same necessary recurrence forces \(a_n=(-1)^{n-1}/n\) for \(1\le n<p\). At \(n=p\), the coefficient of \(x^{p-1}y\) in the defect is


\[
pa_p+(p-1)a_{p-1}=-1\ne0.
\]

This is independent of \(a_p\); later coefficients cannot affect that degree. The formula includes \(p=2\), where \(-1=1\). Thus a failure occurs by degree \(p\). To prove it is the first failure, we must also verify all lower mixed coefficients.

Take the forced polynomial \(H(t)=\sum_{n=1}^{p-1}(-1)^{n-1}t^n/n\). Its formal derivative satisfies \((1+t)H'(t)=1-t^{p-1}\). The same calculation of the full defect now gives


\[
\frac{\partial E_H}{\partial y}
=\frac{y^{p-1}-F(x,y)^{p-1}}{1+y}.
\]

This has no terms of total degree below \(p-1\). Since \(E_H(x,0)=0\), any term of \(E_H\) of degree below \(p\) would contain a power \(y^j\) with \(1\le j<p\). Differentiation cannot kill that term: \(j\) is nonzero in the field. Such terms therefore do not occur. The polynomial \(H\) passes every degree below \(p\), and the displayed coefficient \(-1\) prevents every extension through degree \(p\).

The degree bound matters: in characteristic \(p\), differentiation kills \(y^p\). Here every positive \(y\)-exponent under consideration is less than \(p\), so no possible lower-degree term is lost.

## 6. Check the obstruction by repeating the operation

A coordinate preserving a binary operation also preserves its repeated application. Combining \(m\) copies of \(x\) under \(F\) gives \((1+x)^m-1\): each application multiplies another factor \(1+x\). Induction on the coordinate identity would therefore give


\[
L((1+x)^m-1)=mL(x).
\]

In characteristic \(p\), take \(m=p\). The left input becomes \(x^p\) and the right side becomes zero:


\[
L(x^p)=0.
\]

But a normalized coordinate makes the left side begin with \(x^p\), whose coefficient is one. This independently certifies incompatibility in every positive characteristic. For \(p=3\), it detects the same degree-three obstruction that the individual repairs exposed.

## 7. Further coefficient calculations

The calculation has produced a repair test, a proof of when the repairs reach a complete coordinate, and a certificate for when they cannot. The [first-order calculation](https://refactor.press/refactors/first-order.html) and [hidden cubic](https://refactor.press/calculi/hidden-cubic.html) test motions in a solution set; here we test an equivalence between operations.

The [longer companion](https://refactor.press/notes/when-a-nonlinear-law-becomes-additive.html) asks how changing the retained coefficients changes the answer, classifies cubic coordinate comparisons, and works an example whose first failure is in degree nine. The [filtered-complex companion](https://refactor.press/notes/when-a-formal-logarithm-fails.html#first-correction) organises the correction maps by degree and asks how the surviving cubic can be retained in a larger addition law.

Source and terminology. The operations here are the multiplicative and additive formal group laws. Their characteristic-zero equivalence and positive-characteristic inequivalence are standard; see Pavel Etingof, [Lie Groups and Lie Algebras, §49.2, printed p. 270](https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf#page=271). The arguments above give direct coefficient proofs for this classical example.
