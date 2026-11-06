# A Note on Disjoint Decompositions of [0,1) into Closed Sets

**Theorem 1.** There does not exist a sequence \((E_n)_{n\geq1}\) of pairwise disjoint closed subsets of \(\mathbb R\) such that

\[
[0,1)=\bigcup_{n=1}^{\infty}E_n.
\]

## Step 1: Pass to the compact interval [0,1] {#compact-interval}

**Proof.** Assume, for contradiction, that such a sequence \((E_n)\) exists. Let

\[
X=[0,1],\qquad F_0=\{1\},\qquad F_n=E_n\quad(n\geq1).
\]

Then \((F_n)_{n\geq0}\) is a sequence of pairwise disjoint closed subsets of \(X\) whose union is all of \(X\):

\[
X=\bigcup_{n=0}^{\infty}F_n.
\]

For each \(n\geq0\), let

\[
I_n=\operatorname{int}_X(F_n)
\]

denote the interior of \(F_n\) relative to \(X\), and define

\[
B_n=F_n\setminus I_n.
\]

Thus \(B_n\) is the part of \(F_n\) left over after removing its relative interior. Now set

\[
U=\bigcup_{n=0}^{\infty}I_n,\qquad P=X\setminus U.
\]

Since \(U\) is open in \(X\), the set \(P\) is closed in \(X\). As \(X\) is compact, \(P\) is compact and therefore a complete metric space.

The endpoint \(1\) lies in no relative interior. Thus \(P\) is nonempty. Because the sets \(F_n\) are pairwise disjoint and cover \(X\), we have

\[
P=\bigcup_{n=0}^{\infty}B_n,
\]

and each \(B_n\) is closed in \(P\).

## Step 2: Apply the Baire category theorem {#baire-category}

Since \(P\) is a complete metric space and is expressed as a countable union of closed subsets, the Baire category theorem implies that at least one of the sets \(B_k\) has nonempty interior relative to \(P\). Thus there exist an index \(k\geq0\) and a nonempty set \(O\subseteq X\), open in \(X\), such that

\[
\varnothing\neq O\cap P\subseteq B_k.
\]

Choose a point \(t\in O\cap P\). Since \(O\) is open in the subspace \(X=[0,1]\), there exists a nondegenerate interval \(J\subseteq X\), open in \(X\), such that

\[
t\in J\subseteq O.
\]

Then

\[
J\cap P\subseteq O\cap P\subseteq B_k.
\]

## Step 3: Use disjointness and connectedness {#connectedness}

Fix any \(m\neq k\). Since

\[
F_m=I_m\cup B_m
\]

and \(B_m\subseteq P\), the inclusion \(J\cap P\subseteq B_k\) implies that

\[
J\cap B_m=\varnothing.
\]

Therefore every point of \(J\) lies either in \(X\setminus F_m\) or in \(I_m\), so

\[
J\subseteq (X\setminus F_m)\cup I_m.
\]

The sets \(X\setminus F_m\) and \(I_m\) are disjoint open subsets of \(X\). Since \(J\) is connected, it follows that either

\[
J\subseteq X\setminus F_m\qquad\text{or}\qquad J\subseteq I_m.
\]

The second alternative is impossible, because \(t\in B_k\subseteq F_k\) while \(F_k\cap F_m=\varnothing\), so \(t\notin F_m\), hence \(t\notin I_m\). Thus

\[
J\subseteq X\setminus F_m\quad\text{for every }m\neq k.
\]

Since the sets \(F_n\) partition \(X\), we conclude that

\[
J\subseteq F_k.
\]

But \(J\) is open in \(X\), so this implies

\[
J\subseteq\operatorname{int}_X(F_k)=I_k.
\]

In particular, \(t\in I_k\). On the other hand, \(t\in J\cap P\subseteq B_k=F_k\setminus I_k\), so \(t\notin I_k\). This is a contradiction. Hence no such decomposition of \([0,1)\) exists. \(\square\)

<figure>
<img src="/assets/current-notes/disjoint-decompositions-1.png" alt="A schematic interval from zero to one, with four thick relative-interior pieces, the remaining closed set P, and a neighborhood J of t whose intersection with P lies in one boundary piece B sub k." width="1600" height="343" loading="lazy" style="max-width:100%;height:auto">
<figcaption>Figure 1. Schematic picture of the proof. The thick subintervals represent relative interiors \(I_n\), while the remaining closed set \(P\) consists of the points not lying in any \(I_n\). Baire yields an interval \(J\) such that \(J\cap P\) lies entirely in a single boundary piece \(B_k\). Connectedness then forces all of \(J\) into \(F_k\), contradicting the fact that \(t\in B_k\subseteq F_k\setminus I_k\).</figcaption>
</figure>
