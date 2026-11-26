# What a New Proof Makes Possible

*Old theorems and the changing means of understanding*

Euclid had already proved that there are infinitely many primes. Euler returned to the subject through infinite series. The conclusion was ancient; the relationship his argument brought into view was not. Prime factorization became a way to organize an analytic expression, and that expression could be varied, weighted, and compared with others. An old theorem acquired a different mathematical setting.

Comparing Euclid’s and Euler’s arguments shows what each retains: a construction that escapes a finite list, or a product whose growth can be studied. Later examples distinguish other changes a proof can make, including stronger estimates, a search procedure, and a measure of error.

## The structure inside an old conclusion

Suppose we want to escape a finite list of primes \(p_1,\ldots,p_r\). It would suffice to construct an integer that leaves remainder one when divided by every prime on the list. Their product is divisible by all of them, so adding one supplies a candidate:

\[
N=p_1p_2\cdots p_r+1.
\]

Every prime divisor of \(N\) lies outside the list: division by any listed prime leaves remainder one. The number \(N\) need not itself be prime. What matters is that the construction escapes any proposed finite inventory.

For a different approach, try to make prime factorization organize a sum. The weight \(n^{-s}\) is useful because it multiplies when integers multiply, while the parameter \(s\) controls decay. For each prime, sum over the possible exponents in its factorization. This suggests a product of geometric series, giving, for real \(s>1\),

\[
\zeta(s)=\sum_{n=1}^{\infty}\frac{1}{n^s}
=\prod_{p\ \mathrm{prime}}\frac{1}{1-p^{-s}}.
\]

Each factor expands as a geometric series. Expanding a finite product chooses a power of each prime involved; multiplying those powers produces an integer. Unique factorization ensures that each such integer occurs exactly once. Letting the finite set of primes increase gives the identity, with absolute convergence justifying the limit for \(s>1\). Euler introduced these product expansions in a paper written in 1737 and published in 1744. [Euler, *Variae observationes circa series infinitas*](https://scholarlycommons.pacific.edu/euler-works/72/)

The formula gives another proof of prime infinitude. As \(s\) decreases toward one, the sum becomes unbounded; for example, it is at least the integral \(\int_1^\infty x^{-s}\,dx=1/(s-1)\). A product over finitely many primes would instead approach a finite value. There must be infinitely many factors.

But the product retains information beyond that conclusion. A finite-product version of Euler's argument makes this visible. Expanding the product over primes at most \(M\) includes the reciprocal of every integer at most \(M\), together with further positive terms. Thus, writing \(H_M=1+1/2+\cdots+1/M\),

\[
H_M\leq\prod_{p\leq M}(1-1/p)^{-1},
\qquad
\sum_{p\leq M}\frac1p\geq\log H_M-1.
\]

For the second inequality, take logarithms and expand each logarithm. For each prime, the terms beyond \(1/p\) sum to at most \(1/[p(p-1)]\); summing these bounds over primes gives at most
\(\sum_{n=2}^{\infty}1/[n(n-1)]=1\).
The sum of the reciprocals of the primes therefore diverges. This says more than infinitude: an infinite sequence can have convergent reciprocal sum, as the powers of two do.

The difference between the arguments is now concrete. Euclid supplies a way to escape a finite list. Euler supplies a relation between additive summation and multiplicative factorization, together with quantities whose growth can be studied. Both establish that the primes continue. Their intermediate structures invite different questions.

## When a method branches and returns

Once primes occur inside a product, ask how to distinguish residue classes without losing factorization. Periodicity would let the weight depend on a remainder, while multiplicativity would preserve the product rule. Dirichlet characters supply weights satisfying both requirements:

\[
L(s,\chi)
=\sum_{n=1}^{\infty}\frac{\chi(n)}{n^s}
=\prod_{p\ \mathrm{prime}}
\frac{1}{1-\chi(p)p^{-s}},
\qquad s>1.
\]

Suitable combinations of these weights separate the arithmetic progressions one wants to study. A serious difficulty remains: one must control the resulting series near one, including proving that certain limiting values do not vanish. The product identity opens the route without completing the journey. [Dirichlet, *There Are Infinitely Many Prime Numbers in All Arithmetic Progressions with First Term and Difference Coprime*, §§1–10](https://arxiv.org/html/0808.1408v2)

At this point a second branch of mathematics enters. Quadratic forms are expressions such as \(ax^2+bxy+cy^2\); one can classify them under suitable changes of variables and count the resulting classes. In §11, Dirichlet explains that a relation between such counts and certain real-character series supplies the required nonvanishing. A count known to be positive cannot equal a finite factor multiplied by zero. He replaces an earlier complicated argument with this connection, referring to his separate investigation for the counting formula. [Dirichlet, §11](https://arxiv.org/html/0808.1408v2)

A question about primes has led to an analytic obstruction, and a count of quadratic forms supplies a way through it. The connection makes the two branches useful to one another: an analytic value acquires an arithmetic interpretation, and a counting problem helps establish a theorem about primes.

The historical outcome does not tell us which unfinished approach will prove fruitful. Here the connection shortened Dirichlet’s nonvanishing argument by turning it into a count of quadratic forms.

## Generalization in different directions

A theorem can have several futures. The history of Szemerédi's theorem makes their differences unusually clear.

The theorem says that any subset of the natural numbers with positive upper density contains arbitrarily long arithmetic progressions. Positive upper density means that, along arbitrarily large initial intervals, the set occupies at least some fixed positive proportion of the integers. The set can have gaps and irregularities; sufficient overall presence still forces patterns.

Szemerédi proved the result through combinatorics. Furstenberg subsequently gave a proof through ergodic theory, translating the occurrence of progressions into repeated returns in a system whose evolution preserves a measure. The translation allowed questions about finite patterns to be studied through the structure of dynamical systems. [Furstenberg, *Ergodic Behavior of Diagonal Measures and a Theorem of Szemerédi on Arithmetic Progressions*](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/furstenbergsz.pdf)

Later work developed that framework in further directions. Bergelson and Leibman proved polynomial extensions that include the following striking consequence: a set of positive upper density contains arbitrarily long arithmetic progressions whose common difference is a perfect square. One can find patterns of the form

\[
a,\quad a+n^2,\quad a+2n^2,\quad\ldots,\quad a+(k-1)n^2,
\qquad n\geq1,
\]

for every desired length \(k\). The additional restriction on the difference is substantial. Their proof required new work, and its organization explicitly develops the earlier method of extending dynamical systems. [Bergelson and Leibman, *Polynomial Extensions of van der Waerden's and Szemerédi's Theorems*, introduction §§0.1–0.6](https://people.math.osu.edu/leibman.1/papers/psz.pdf)

Gowers returned to Szemerédi's theorem with a different concern. In its finite form, the theorem gives a threshold: for a chosen density \(\delta>0\) and progression length \(k\), for every sufficiently large \(N\), every subset of \(\{1,\ldots,N\}\) containing at least \(\delta N\) elements must contain such a progression. How large must \(N\) be?

His proof supplied much stronger bounds, using a developed notion of higher-order uniformity to distinguish structure from behavior sufficiently random for counting progressions. For fixed \(k\), it gave a bound for the required threshold doubly exponential in a power of \(\delta^{-1}\). Such a bound can be enormous and still represent a major improvement in what the mathematics controls. In his introduction, Gowers explicitly distinguishes the generalizations supported by the ergodic approach from the quantitative problem his proof addresses. [Gowers, *A New Proof of Szemerédi's Theorem*, introduction and Theorem 1.3](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

These routes alter different parts of the question. One changes the configurations that can be forced. Another improves control of the scale at which they must occur. Their contributions cannot be ranked simply by asking which reaches the original conclusion with fewer steps.

Nor must the routes remain separate. These developments eventually return us to the primes. Green and Tao proved that the primes contain arbitrarily long arithmetic progressions, although their density among the integers tends to zero. Szemerédi's positive-density theorem could not simply be applied to them. Their proof added a transference principle and used work of Goldston and Yıldırım to place the primes within a suitable pseudorandom framework. They explicitly trace the beginning of their investigation to examining Gowers's arguments; his uniformity norms became part of their machinery, alongside ideas drawn from ergodic theory. [Green and Tao, *The Primes Contain Arbitrarily Long Arithmetic Progressions*, §§2–3](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

Using these tools for the primes required the additional transference argument; it did not follow from the new proof of Szemerédi’s theorem alone.

## From existence to a procedure

Controlling when an object must exist raises another question: how can it be found?

The Lovász Local Lemma gives conditions under which a finite collection of undesirable events can all be avoided. In applications built from independent random variables, each event depends on a specified set of variables. If a constraint fails, redrawing the whole assignment would discard values unrelated to that failure. A more local candidate is to resample only the variables involved in one violated constraint, independently from their original distributions, leaving all the others as they are. Moser and Tardos proved that repeating this operation yields a controlled search under the local lemma’s probability criterion.

Repairing one violation can disturb another when their variable sets overlap. That identifies the interaction the proof must control. Under the local lemma’s probability criterion for this overlap graph, the proof bounds the expected number of resamplings. Sampling and checking costs then determine the computational work. [Moser and Tardos, *A Constructive Proof of the General Lovász Local Lemma*, Algorithm 1.1 and Theorem 1.2](https://arxiv.org/pdf/0903.0544)

A new proof can therefore change the actions available to someone using a theorem. Its intermediate steps can become an algorithm. In other arguments, retaining intermediate information reveals how accurate or stable an answer is.

## What the connection between proofs reveals

The additional value of an argument need not wait for a historical sequel. It can appear in a calculation small enough to inspect completely.

For vectors \(x,y\) in a real inner product space, Cauchy–Schwarz states
\(\langle x,y\rangle^2\leq\|x\|^2\|y\|^2\).
If \(y=0\), the inequality is immediate. Otherwise, one proof observes that the quadratic
\(\|x-ty\|^2\) is nonnegative for every real \(t\), so its discriminant cannot be positive.

The useful choice is how much of the second vector to remove from the first. Require the remainder to have zero inner product with the second vector. Linearity gives the original inner product minus the chosen multiple of the second vector’s squared length, so setting that expression to zero determines the multiple. For \(y\ne0\), set
\(a=\langle x,y\rangle/\|y\|^2\) and \(r=x-ay\).
Then \(r\) is orthogonal to \(y\), giving

\[
\|x-ty\|^2=\|r\|^2+(t-a)^2\|y\|^2,
\]

\[
\|x\|^2\|y\|^2-\langle x,y\rangle^2
=\|y\|^2\|r\|^2.
\]

The first identity identifies the unique closest point on the line through \(y\) and measures the extra squared error from using another coefficient. The second identifies the gap in Cauchy–Schwarz with a geometric residual. [Axler, *Linear Algebra Done Right*, Chapter 6, orthogonal decomposition and Cauchy–Schwarz](https://linear.axler.net/InnerProduct.pdf)

For unit vectors, the gap is exactly the squared distance from one vector to the line through the other. A gap of at most \(10^{-4}\) therefore gives a distance of at most \(0.01\). Equality means collinearity; near equality has a precise geometric meaning too. Opposite directions are allowed because the comparison is with a line.

Completing the square translates the first argument into the second. The quadratic's minimizing coefficient is the projection coefficient; the disappearance of the linear term after shifting by that coefficient expresses the orthogonality of the residual. Algebra and geometry describe the same mechanism. Understanding this correspondence explains how the inequality, the optimal approximation, and the error estimate fit together.

The same reasoning travels from vectors to functions when the inner product is an integral. For example,

\[
\int_0^1(s^2-ts)^2\,ds
=\frac15-\frac t2+\frac{t^2}{3}
=\frac1{80}+\frac13\left(t-\frac34\right)^2.
\]

Among multiples of \(s\), the function \(\tfrac34s\) best approximates \(s^2\) on \([0,1]\) in integrated squared error. The minimum integrated squared error is \(1/80\), and the formula tells us exactly how the error increases when the coefficient changes. Geometry has supplied both an answer and a measure of its sensitivity.

What allowed the argument to move was its reliance on inner products and orthogonality. Nothing in the calculation required vectors to be arrows in a plane. Recognizing which features a proof actually uses reveals where it can travel.

## Economy across a body of mathematics

These examples expose several different measures of economy. There is the length of a proof on the page, the background needed to understand it, the work required to adapt it, and the amount of machinery that later arguments can reuse. They need not favor the same presentation.

A one-line appeal to a powerful theorem can be economical for readers who already possess its theory. For someone learning the subject, it may leave nearly all the explanatory work elsewhere. A longer direct argument can reveal the mechanism at lower total cost. In another setting, developing a general framework can replace many separate calculations with one construction.

Gowers explicitly includes examples showing why simpler approaches fail, although those sections are unnecessary to the deduction. They explain the problems his proof must overcome. Material dispensable as a logical step can be central to understanding the argument's design. [Gowers, p. 469](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

There are practical reasons to retain alternatives even after their conceptual contribution is understood. A later problem may require avoiding a theorem unavailable in the new setting. A disputed lemma may need examination through a route that does not use it. An argument organized around exact identities may be more useful for perturbation than one whose decisive step is qualitative.

Independence is specific to the dependency being tested. Two proofs resting on the same disputed lemma do not provide separate checks on that part of the argument. An alternative that avoids it can clarify which conclusions survive without it. Comparing arguments requires tracing their reliance on assumptions and intermediate results. The same care is needed when [equal answers conceal different relationships among them](https://refactor.press/essays/when-a-description-becomes-a-verdict.html#what-the-arrangement-does).

## When proofs become more abundant

AI makes these distinctions more consequential by changing the cost of producing and examining arguments. A collection of alternative proofs can help someone investigate a theorem; it can also consume attention without revealing much that differs between the routes.

The useful comparison asks what changed. Does an argument avoid a particular dependency, expose a parameter that can be varied, preserve an error term, or suggest a different family of examples? A system capable of generating proofs could help compare these features and test where a method stops working. The next question is what someone can learn to do with the result. In the [walk-and-cycle proof of Cayley–Hamilton](https://refactor.press/essays/mathematical-life-in-the-age-of-ai.html#a-comparison-worth-understanding), that means carrying out the exchange and explaining why it reverses itself.

Formalization contributes another kind of value. Recasting an established argument in Lean can make its assumptions and dependencies explicit and its deductions available for machine checking. That work may create reusable infrastructure even when it introduces no new conceptual proof. The assurance concerns the formal statement and the axioms on which the checked proof depends; interpreting the statement remains part of judging what has been established. [Lean, *Validating a Lean Proof*](https://lean-lang.org/doc/reference/latest/ValidatingProofs/)

An established theorem also offers a useful setting for exploration. Its known conclusion lets an investigator ask how a new method reaches it, which assumptions the method needs, and where its intermediate constructions lead. Recovering the theorem can be the first test of a different mathematical language. Failure can be informative too: a route may explain why the language is poorly suited to the problem, or isolate the obstruction that a stronger theory would have to overcome.

## Related mathematical example

### [A matrix identity by cycle exchange](https://refactor.press/refactors/cayley-hamilton.html)

Invent a walk with reserved cycles, derive the reversible exchange, and see every term of the Cayley–Hamilton identity cancel.

## Related essays

### [When a Description Becomes a Verdict](https://refactor.press/essays/when-a-description-becomes-a-verdict.html#what-the-arrangement-does)

Why agreement on a conclusion can leave important differences between constructions unresolved.

### [Mathematical Life in the Age of AI](https://refactor.press/essays/mathematical-life-in-the-age-of-ai.html#a-comparison-worth-understanding)

How an inspectable argument becomes a learner’s ability to perform and explain a new operation.

### [Abstraction is no refuge from AI](https://refactor.press/essays/ai-research-and-reliable-numerical-computation.html#a-concrete-research-direction)

What changes when the useful representation must also meet numerical accuracy and computational-cost requirements.

## Further mathematical reading

Tensorgami archive · optional further reading

### [Fourier, Symmetry, and Reconstruction](https://refactor.press/notes/fourier-symmetry-and-reconstruction.html#fourier:section)

Separate root coordinates with weighted sums, then use their multiplication rules to recover the cubic and quartic. Later routes calculate tensor chains, matrix kernels, and local ramification.

Tensorgami archive · optional further reading

### [What a Boundary Map Can Prove](https://refactor.press/notes/what-a-boundary-map-can-prove.html#the-same-boundary-map-counts-conducts-and-correlates)

Use one incidence matrix to test cycles, count trees, and solve for flows. Later calculations cancel edge subsets and reduce graph transport by a chosen tree.

Tensorgami archive · optional further reading

### [What a Derivative Retains](https://refactor.press/notes/what-a-derivative-retains.html#rectangle)

Make the first-order product rule exact with a square-zero increment, then retain defining equations to calculate which tangent directions lift. Sections 1–5 complete the first-order route.
