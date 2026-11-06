# A Trace and Companion-Matrix Solution to the July 2010 IBM Ponder This Challenge

<!-- Original PDF author: Henry Shin. Revised November 3, 2026. The site heading supplies this byline. -->

## Abstract {#abstract}

We solve the July 2010 IBM *Ponder This* challenge asking for a natural number \(n\) such that

\[
10^9\mid\operatorname{round}\bigl((1+2\cos20^\circ)^n\bigr).
\]

The central observation is that

\[
\alpha=1+2\cos20^\circ
\]

is a cubic Pisot unit: it is an algebraic integer greater than \(1\), while its other two conjugates have absolute value less than \(1\). Their powers complete \(\alpha^n\) to the integer trace \(\operatorname{Tr}(\alpha^n)\), with an error that decays exponentially. A companion matrix then turns the trace recurrence into finite modular arithmetic. An order calculation modulo \(2\) and \(5\), followed by lifting to \(2^9\) and \(5^9\), gives an explicit solution.

**Challenge (IBM *Ponder This*, July 2010).** The [July 2010 IBM *Ponder This* challenge](https://research.ibm.com/blog/ponder-this-july-2010) asks for a natural number \(n\) such that

\[
10^9\mid\operatorname{round}\bigl((1+2\cos20^\circ)^n\bigr).
\]

Here \(\operatorname{round}(x)\) denotes the nearest integer to \(x\). In the argument below, the number being rounded will always be strictly within \(1/2\) of a unique integer, so no convention about half-integers is needed.

## 1 Introduction and strategy {#introduction-and-strategy}

The operation to simplify is rounding a very large real number. Seek an exact integer sequence that differs from \(\alpha^n\) only by terms tending to zero. Adding the powers of the other conjugates supplies such a sequence; a recurrence will then let us calculate it modulo \(10^9\).

Set

\[
\alpha=1+2\cos20^\circ=1+2\cos\frac{\pi}{9}.
\]

The key point is that \(\alpha\) is a cubic algebraic integer whose other two conjugates lie strictly inside the unit circle. Thus, if \(\beta\) and \(\gamma\) are the other conjugates, then

\[
\alpha^n+\beta^n+\gamma^n
\]

is an integer, while \(\beta^n+\gamma^n\) rapidly tends to \(0\). Therefore, for all sufficiently large \(n\),

\[
\operatorname{round}(\alpha^n)=\alpha^n+\beta^n+\gamma^n.
\]

The rounding in the problem is therefore naturally explained by the trace map.

The remaining task is to force this trace to be \(0\) modulo \(10^9\). The trace sequence satisfies a linear recurrence coming from the minimal polynomial

\[
X^3-3X^2+1.
\]

Equivalently, it is encoded by the companion matrix

\[
A=\begin{pmatrix}
3&0&-1\\
1&0&0\\
0&1&0
\end{pmatrix}.
\]

Since \(\det A=-1\), this matrix is invertible modulo every positive integer. The congruence problem becomes a finite group problem: find a power of \(A\) that is congruent to the identity modulo \(10^9\), then use the fact that the trace at index \(-1\) is \(0\).

We will prove that

\[
n=21{,}699{,}999{,}999
\]

works. This value is not claimed to be minimal; the point is to give a clean Galois-theoretic and group-theoretic certificate.

## 2 The cubic Pisot unit {#the-cubic-pisot-unit}

Let

\[
\alpha=1+2\cos\frac{\pi}{9}.
\]

We first determine its minimal polynomial and its conjugates.

**Lemma 1.** The number \(\alpha\) has minimal polynomial

\[
f(X)=X^3-3X^2+1.
\]

Its three conjugates are

\[
\alpha=1+2\cos\frac{\pi}{9},\qquad
\beta=1+2\cos\frac{5\pi}{9},\qquad
\gamma=1+2\cos\frac{7\pi}{9}.
\]

Moreover,

\[
|\beta|<\frac23,\qquad |\gamma|<\frac23.
\]

*Proof.* We use the identity

\[
2\cos(3\theta)=(2\cos\theta)^3-3(2\cos\theta).
\]

Taking \(\theta=\pi/9\), we have \(3\theta=\pi/3\), hence

\[
(2\cos(\pi/9))^3-3(2\cos(\pi/9))=2\cos(\pi/3)=1.
\]

Since \(\alpha-1=2\cos(\pi/9)\), this gives

\[
(\alpha-1)^3-3(\alpha-1)=1.
\]

Expanding,

\[
\alpha^3-3\alpha^2+1=0.
\]

Thus \(\alpha\) is a root of

\[
f(X)=X^3-3X^2+1.
\]

The rational root test shows that \(f\) has no rational root, since neither \(1\) nor \(-1\) is a root. Therefore \(f\) is irreducible over \(\mathbb Q\), and so \(f\) is the minimal polynomial of \(\alpha\).

The same trigonometric identity also shows that

\[
1+2\cos\frac{5\pi}{9}\quad\text{and}\quad 1+2\cos\frac{7\pi}{9}
\]

are roots of \(f\), because

\[
3\cdot\frac{5\pi}{9}=\frac{5\pi}{3},\qquad
3\cdot\frac{7\pi}{9}=\frac{7\pi}{3},
\]

and both \(\cos(5\pi/3)\) and \(\cos(7\pi/3)\) equal \(1/2\). These three roots are distinct, so they are precisely the three conjugates of \(\alpha\).

It remains to bound the two smaller conjugates. We compute

\[
f\left(-\frac23\right)=-\frac{17}{27}<0,\qquad f(0)=1>0,
\]

so one root lies in \((-2/3,0)\). Also

\[
f(0)=1>0,\qquad f\left(\frac23\right)=-\frac1{27}<0,
\]

so one root lies in \((0,2/3)\). Finally,

\[
f(2)=-3<0,\qquad f(3)=1>0,
\]

so the remaining root lies in \((2,3)\). Since

\[
\alpha=1+2\cos\frac{\pi}{9}\in(2,3),
\]

the other two conjugates must lie in \((-2/3,0)\) and \((0,2/3)\). Hence

\[
|\beta|<\frac23,\qquad |\gamma|<\frac23.
\]

\(\square\)

From the cyclotomic viewpoint, if

\[
\zeta=e^{\pi i/9},
\]

then

\[
\alpha=1+\zeta+\zeta^{-1}.
\]

Thus \(\alpha\) lies in the real cubic subfield of the \(18\)-th cyclotomic field. The three conjugates above correspond to the three embeddings of this real cubic field. This is the Galois-theoretic source of the trace that appears next.

## 3 The trace sequence and the rounding step {#the-trace-sequence-and-the-rounding-step}

Let

\[
K=\mathbb Q(\alpha).
\]

For \(n\in\mathbb Z\), define

\[
S_n=\operatorname{Tr}_{K/\mathbb Q}(\alpha^n)=\alpha^n+\beta^n+\gamma^n.
\]

**Lemma 2.** For every \(n\in\mathbb Z\), one has

\[
S_n\in\mathbb Z.
\]

Moreover, for every \(n\ge4\),

\[
\operatorname{round}(\alpha^n)=S_n.
\]

*Proof.* Since \(f\) is monic, \(\alpha\) is an algebraic integer. Also,

\[
\alpha^3-3\alpha^2+1=0
\]

implies

\[
\alpha^{-1}=3\alpha-\alpha^2.
\]

Thus \(\alpha\) is a unit. Hence \(\alpha^n\) is an algebraic integer for every \(n\in\mathbb Z\), and therefore its trace

\[
S_n=\operatorname{Tr}_{K/\mathbb Q}(\alpha^n)
\]

is an integer.

For \(n\ge4\), we have

\[
\begin{aligned}
|\alpha^n-S_n|&=|\beta^n+\gamma^n|\\
&\le |\beta|^n+|\gamma|^n\\
&<2\left(\frac23\right)^n\\
&\le2\left(\frac23\right)^4=\frac{32}{81}<\frac12.
\end{aligned}
\]

Since \(S_n\) is an integer, this proves

\[
\operatorname{round}(\alpha^n)=S_n
\]

for all \(n\ge4\). \(\square\)

Thus the original problem has been reduced to the following congruence problem:

Find \(n\ge4\) such that \(S_n\equiv0\pmod{10^9}\).

## 4 The companion matrix {#the-companion-matrix}

The trace sequence satisfies a recurrence coming from the polynomial

\[
f(X)=X^3-3X^2+1.
\]

Indeed, every root \(r\in\{\alpha,\beta,\gamma\}\) satisfies

\[
r^3=3r^2-1.
\]

Multiplying by \(r^{n-3}\) and summing over the three conjugates gives

\[
S_n=3S_{n-1}-S_{n-3}.
\]

It is convenient to encode this recurrence using the companion matrix

\[
A=\begin{pmatrix}
3&0&-1\\
1&0&0\\
0&1&0
\end{pmatrix}.
\]

Then

\[
\det(TI-A)=T^3-3T^2+1=f(T).
\]

Therefore the eigenvalues of \(A\) are \(\alpha,\beta,\gamma\), and for every \(n\ge0\),

\[
\operatorname{tr}(A^n)=\alpha^n+\beta^n+\gamma^n=S_n.
\]

We will also need the trace at index \(-1\). Since

\[
\det A=-1,
\]

the matrix \(A\) is invertible over \(\mathbb Z\), and a direct computation gives

\[
A^{-1}=\begin{pmatrix}
0&1&0\\
0&0&1\\
-1&3&0
\end{pmatrix}.
\]

Hence

\[
\operatorname{tr}(A^{-1})=0.
\]

This agrees with

\[
S_{-1}=\alpha^{-1}+\beta^{-1}+\gamma^{-1}=0,
\]

which also follows from the elementary symmetric relation

\[
\alpha\beta+\alpha\gamma+\beta\gamma=0.
\]

So our goal is to find a large positive \(L\) such that

\[
A^L\equiv I\pmod{10^9}.
\]

Then

\[
A^{L-1}\equiv A^{-1}\pmod{10^9},
\]

and therefore

\[
S_{L-1}=\operatorname{tr}(A^{L-1})\equiv\operatorname{tr}(A^{-1})=0\pmod{10^9}.
\]

## 5 Orders modulo 2 and 5 {#orders-modulo-2-and-5}

We now compute suitable orders of \(A\) modulo \(2\) and \(5\).

**Proposition 1.** Modulo \(2\), the matrix \(A\) has order \(7\). Modulo \(5\), the matrix \(A\) has order \(62\). In particular,

\[
A^7\equiv I\pmod2,\qquad A^{62}\equiv I\pmod5.
\]

*Proof.* Let

\[
f(T)=T^3-3T^2+1.
\]

For a prime \(p\), let \(\bar f_p\) denote the reduction of \(f\) modulo \(p\), and let \(\bar A_p\) denote the reduction of \(A\) modulo \(p\).

First consider \(p=2\). We have

\[
\bar f_2(T)=T^3+T^2+1.
\]

This polynomial has no root in \(\mathbb F_2\), since

\[
\bar f_2(0)=1,\qquad \bar f_2(1)=1.
\]

As a cubic with no root, it is irreducible over \(\mathbb F_2\).

Since \(\bar f_2\) is the characteristic polynomial of \(\bar A_2\), and is irreducible of degree \(3\), it is also the minimal polynomial of \(\bar A_2\). Thus

\[
\mathbb F_2[\bar A_2]\cong\mathbb F_2[T]/(\bar f_2)\cong\mathbb F_8.
\]

Under this isomorphism, \(\bar A_2\) corresponds to the class \(\lambda=T\bmod \bar f_2\). Since \(\lambda\ne0,1\), and \(\mathbb F_8^\times\) has order \(7\), we get

\[
\lambda^7=1
\]

and \(\lambda\) has order \(7\). Therefore

\[
\bar A_2^7=I.
\]

Now consider \(p=5\). We have

\[
\bar f_5(T)=T^3+2T^2+1.
\]

Checking the five elements of \(\mathbb F_5\),

\[
\bar f_5(0),\bar f_5(1),\bar f_5(2),\bar f_5(3),\bar f_5(4)=1,4,2,1,2,
\]

so \(\bar f_5\) has no root in \(\mathbb F_5\). Hence it is irreducible over \(\mathbb F_5\).

Again,

\[
\mathbb F_5[\bar A_5]\cong\mathbb F_5[T]/(\bar f_5)\cong\mathbb F_{125}.
\]

Let \(\lambda=T\bmod \bar f_5\). The norm of \(\lambda\) from \(\mathbb F_{125}\) to \(\mathbb F_5\) is

\[
N_{\mathbb F_{125}/\mathbb F_5}(\lambda)=\lambda^{1+5+25}=\lambda^{31}.
\]

On the other hand, since \(\lambda\) is a root of the monic cubic \(\bar f_5(T)=T^3+2T^2+1\), the product of its three conjugates is \(-1\). Therefore

\[
\lambda^{31}=-1.
\]

It follows that

\[
\lambda^{62}=1.
\]

Moreover, \(\lambda^{31}\ne1\), and \(\lambda\ne-1\), since \(-1\) is not a root of \(\bar f_5\). The only divisors of \(62\) are \(1,2,31,62\), so \(\lambda\) has order \(62\). Therefore

\[
\bar A_5^{62}=I.
\]

\(\square\)

## 6 Lifting to 2⁹ and 5⁹ {#lifting-to-2-9-and-5-9}

We use a standard lifting lemma.

**Lemma 3.** Let \(p\) be a prime, and let \(B\) be an integer matrix satisfying

\[
B\equiv I\pmod p.
\]

Then, for every \(s\ge0\),

\[
B^{p^s}\equiv I\pmod{p^{s+1}}.
\]

*Proof.* We argue by induction on \(s\). The case \(s=0\) is the hypothesis.

Assume

\[
B^{p^s}=I+p^{s+1}C
\]

for some integer matrix \(C\). Then

\[
B^{p^{s+1}}=\left(B^{p^s}\right)^p=\left(I+p^{s+1}C\right)^p.
\]

Expanding,

\[
\left(I+p^{s+1}C\right)^p
=I+p^{s+2}C+\sum_{j=2}^p\binom pj p^{j(s+1)}C^j.
\]

Every term after \(I\) is divisible by \(p^{s+2}\). Hence

\[
B^{p^{s+1}}\equiv I\pmod{p^{s+2}}.
\]

This completes the induction. \(\square\)

Applying the lemma to \(B=A^7\) with \(p=2\), we get

\[
A^{7\cdot2^8}\equiv I\pmod{2^9}.
\]

Applying it to \(B=A^{62}\) with \(p=5\), we get

\[
A^{62\cdot5^8}\equiv I\pmod{5^9}.
\]

Now set

\[
L=\operatorname{lcm}(7\cdot2^8,62\cdot5^8).
\]

Since \(62=2\cdot31\), this least common multiple is

\[
\begin{aligned}
L&=2^8\cdot5^8\cdot7\cdot31\\
&=217\cdot10^8=21{,}700{,}000{,}000.
\end{aligned}
\]

Thus

\[
A^L\equiv I\pmod{2^9},\qquad A^L\equiv I\pmod{5^9}.
\]

Because \(2^9\) and \(5^9\) are coprime, the Chinese remainder theorem gives

\[
A^L\equiv I\pmod{10^9}.
\]

We can now finish the proof.

**Theorem 1.** The integer

\[
\boxed{n=21{,}699{,}999{,}999}
\]

satisfies

\[
10^9\mid\operatorname{round}\bigl((1+2\cos20^\circ)^n\bigr).
\]

*Proof.* Let

\[
L=21{,}700{,}000{,}000.
\]

We have just shown that

\[
A^L\equiv I\pmod{10^9}.
\]

Therefore

\[
A^{L-1}\equiv A^{-1}\pmod{10^9}.
\]

Taking traces,

\[
\operatorname{tr}(A^{L-1})\equiv\operatorname{tr}(A^{-1})\pmod{10^9}.
\]

But

\[
\operatorname{tr}(A^{L-1})=S_{L-1}
\]

and

\[
\operatorname{tr}(A^{-1})=0.
\]

Hence

\[
S_{L-1}\equiv0\pmod{10^9}.
\]

Since \(L-1\ge4\), the rounding lemma gives

\[
\operatorname{round}(\alpha^{L-1})=S_{L-1}.
\]

Thus

\[
10^9\mid\operatorname{round}(\alpha^{L-1}).
\]

Substituting

\[
\alpha=1+2\cos20^\circ
\]

and

\[
L-1=21{,}699{,}999{,}999
\]

gives

\[
10^9\mid\operatorname{round}\bigl((1+2\cos20^\circ)^{21{,}699{,}999{,}999}\bigr).
\]

Therefore

\[
\boxed{n=21{,}699{,}999{,}999}
\]

is a valid answer. \(\square\)

## 7 A coarser but very uniform variant {#a-coarser-but-very-uniform-variant}

The exact order computation modulo \(2\) and \(5\) gives a reasonably small exponent. If one wants an even more uniform group-theoretic certificate, one can avoid computing the exact orders of \(A\) modulo \(2\) and \(5\).

Since

\[
\det A=-1,
\]

the reduction of \(A\) modulo any prime \(p\) lies in

\[
\operatorname{GL}_3(\mathbb F_p).
\]

Therefore the order of \(A\) modulo \(p\) divides

\[
|\operatorname{GL}_3(\mathbb F_p)|=(p^3-1)(p^3-p)(p^3-p^2).
\]

For \(p=2\),

\[
|\operatorname{GL}_3(\mathbb F_2)|=(8-1)(8-2)(8-4)=168.
\]

For \(p=5\),

\[
|\operatorname{GL}_3(\mathbb F_5)|=(125-1)(125-5)(125-25)=1{,}488{,}000.
\]

Thus

\[
A^{168}\equiv I\pmod2,\qquad A^{1{,}488{,}000}\equiv I\pmod5.
\]

The same lifting lemma gives

\[
A^{168\cdot2^8}\equiv I\pmod{2^9},\qquad A^{1{,}488{,}000\cdot5^8}\equiv I\pmod{5^9}.
\]

Hence

\[
\begin{aligned}
M&=2^8 5^8\cdot168\cdot1{,}488{,}000\\
&=10^8\cdot168\cdot1{,}488{,}000\\
&=24{,}998{,}400{,}000{,}000{,}000
\end{aligned}
\]

satisfies

\[
A^M\equiv I\pmod{10^9}.
\]

Exactly as before,

\[
A^{M-1}\equiv A^{-1}\pmod{10^9},
\]

so

\[
S_{M-1}\equiv0\pmod{10^9}.
\]

Since \(M-1\ge4\), we again have

\[
\operatorname{round}(\alpha^{M-1})=S_{M-1}.
\]

Therefore the coarser group-order argument gives the valid exponent

\[
\boxed{n=24{,}998{,}399{,}999{,}999{,}999}.
\]

This version uses only the general finite group bound

\[
\operatorname{ord}(A\bmod p)\mid |\operatorname{GL}_3(\mathbb F_p)|.
\]

The sharper proof above replaces those large group orders by the actual orders \(7\) and \(62\) of this particular companion matrix modulo \(2\) and \(5\).

## 8 Summary of the mechanism {#summary-of-the-mechanism}

The proof rests on three linked ideas.

First, the number

\[
\alpha=1+2\cos20^\circ
\]

is not just a trigonometric curiosity. It is a cubic algebraic integer with minimal polynomial

\[
X^3-3X^2+1.
\]

Its other two conjugates have absolute value less than \(1\), so powers of \(\alpha\) are very close to the integer traces

\[
\operatorname{Tr}_{K/\mathbb Q}(\alpha^n).
\]

This explains the appearance of the rounding function.

Second, the trace sequence

\[
S_n=\operatorname{Tr}_{K/\mathbb Q}(\alpha^n)
\]

satisfies the same recurrence dictated by the minimal polynomial:

\[
S_n=3S_{n-1}-S_{n-3}.
\]

The companion matrix packages this recurrence into the identity

\[
S_n=\operatorname{tr}(A^n).
\]

Third, because the companion matrix is invertible modulo \(10^9\), its powers are periodic modulo \(10^9\). Choosing \(L\) so that

\[
A^L\equiv I\pmod{10^9}
\]

forces

\[
A^{L-1}\equiv A^{-1}\pmod{10^9}.
\]

The trace of \(A^{-1}\) is \(0\), so

\[
S_{L-1}\equiv0\pmod{10^9}.
\]

Since \(S_{L-1}\) is exactly the rounded value of \(\alpha^{L-1}\), the desired divisibility follows.
