# How far can a change of coordinates go?

Henry Shin · Refactor · Mathematical companion · November 3, 2026 · Revised November 5, 2026

Cancel a quadratic defect, calculate the next one, and see directly why every cubic repair fails.

Can a change of coordinates turn multiplication near one into addition? Expanding an unknown coordinate one degree at a time lets us determine its coefficients. In characteristic three the first correction works, but the next residual cannot be changed by any remaining coefficient.

Continue the investigation: [When a nonlinear law becomes additive](https://refactor.press/notes/when-a-nonlinear-law-becomes-additive.html) develops explicit retained-coefficient calculations and a complete comparison through cubic terms.

## 1. Ask for coordinates in which multiplication adds

Write a quantity near one as \(1+x\). Multiplying two such quantities gives


\[
(1+x)(1+y)=1+x+y+xy.
\]

Thus the corresponding operation on the coordinates is \(F(x,y)=x+y+xy\). The interaction is the term \(xy\). A coordinate \(L\) that turns this into addition must satisfy \(L(F(x,y))=L(x)+L(y)\). Setting both inputs to zero forces \(L(0)=0\). Its linear coefficient must be invertible for a formal inverse to exist; rescale it to one. The general remaining candidate is


\[
L(x)=x+cx^2+dx^3+\cdots
\]

The unknown coefficients allow every higher-order correction to this normalized coordinate. Everything here concerns coefficients of series; no convergence or choice of logarithm branch is involved.

## 2. Determine the correction from the defect

Call \(L(F(x,y))-L(x)-L(y)\) the defect. Expanding through total degree three gives


\[
\operatorname{defect}=(1+2c)xy+(2c+3d)(x^2y+xy^2)+\text{terms of degree }\ge 4.
\]

The first coefficient tells us what to try. Where two is invertible, choose \(c=-\frac12\). Where three is also invertible, the next coefficient asks for \(d=\frac13\). These are the first terms of the familiar series for \(\log(1+x)\). The coefficients are forced by the interaction we want to remove.

Now work over a field of characteristic three, so \(3=0\) and \(2=-1\). The quadratic equation becomes \(1-c=0\), giving \(c=1\). The cubic coefficient then equals \(-1\), whatever \(d\) is. We can repair the first defect, but the next one is beyond this correction.

## 3. See exactly why the next adjustment cannot help

Take the repaired coordinate \(L_2(x)=x+x^2\). Its full defect is


\[
L_2(F)-L_2(x)-L_2(y)=-x^2y-xy^2+x^2y^2.
\]

The leading remainder is the nonzero cubic polynomial \(-xy(x+y)\). Add a candidate correction \(dx^3\). In characteristic three, cubing a sum introduces no mixed terms:


\[
F(x,y)^3-x^3-y^3=x^3y^3.
\]

The cubic correction affects degree six, not degree three. Every correction of degree at least four can affect only terms of degree at least four. None can touch the cubic remainder. Therefore no series with the prescribed linear coefficient turns this multiplication law into addition.

This argument separates two questions: the quadratic repair exists, and the complete coordinate change does not. Calling the denominator three “undefined” would have identified a problem with one formula. Comparing the defect with every available correction proves the stronger impossibility.

## 4. Check the obstruction through repeated multiplication

Combining three copies of \(x\) under the law \(F\) gives \(x^3\), because \((1+x)^3=1+x^3\). Under addition, three copies of anything give zero. A coordinate respecting the two laws would therefore satisfy \(L(x^3)=3L(x)=0\).

But the leading term of \(L(x^3)\) is \(x^3\). It cannot be zero. This independently exposes the same incompatibility between the laws.

The same test works in every prime characteristic \(p\). Combining \(p\) copies under multiplication gives \((1+x)^p-1=x^p\), while adding \(p\) copies gives zero. An invertible coordinate would force \(L(x^p)=0\), contradicting its nonzero leading term. Repeated application of an operation can therefore distinguish two laws even when their first-order terms agree.

## 5. Further coefficient calculations

For the earlier stages of this method, [make first order exact](https://refactor.press/refactors/first-order.html) and then [make a hidden cubic appear](https://refactor.press/calculi/hidden-cubic.html). Those examples test motions in a solution set; the present calculation instead tests a proposed equivalence of operations.

The [full study of the correction](https://refactor.press/notes/when-a-formal-logarithm-fails.html#first-correction) organises these calculations by polynomial weight. It then explains [the differential](https://refactor.press/notes/when-a-formal-logarithm-fails.html#second-differential) that records the obstruction, and [how the same cubic term contributes to a new addition law](https://refactor.press/notes/when-a-formal-logarithm-fails.html#witt-extension).

Next: [When a nonlinear law becomes additive](https://refactor.press/notes/when-a-nonlinear-law-becomes-additive.html) finds when a change in the retained coefficients makes the repair exact, then follows an example whose first failure occurs at degree nine.

Source and terminology. These are the multiplicative and additive formal group laws. Their equivalence over a field of characteristic zero and inequivalence over a field of positive characteristic are standard; see Pavel Etingof, [Lie Groups and Lie Algebras, §49.2, especially p. 270](https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf#page=271). The coefficient calculation above locates the first obstruction in characteristic three.
