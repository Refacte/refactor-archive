# The Direction of the Arrows

*How Mathematical Proofs Find Their Next Move*

In *The Two Cultures of Mathematics*, Timothy Gowers took Paul Erdős and Michael Atiyah as examples of different priorities, problem solving and theory building. He also asked how combinatorics passes on a craft whose organizing ideas are often learned through particular proofs [1]. Even within problem solving, the same tool can do different work. For Erdős, a random graph supplies a witness to an existence claim. In his progression proof Gowers takes a given set of integers and uses a random set of the same density as a benchmark. The discrepancy tells him where to look next [2, 3].

A proof style becomes visible in the moves it makes available. A change of setting can expose a pattern or make a construction possible. What must the new form carry for that move to answer the old question or work in someone else’s argument?

## When a count is wrong

Suppose a dense subset of a long interval contains no nontrivial four-term arithmetic progression. A random set of the same density would contain many. In the tradition of Roth’s proof for three terms, the aim is to turn the discrepancy into a density increment. Find a long subprogression on which the set is denser and renumber its terms. The forbidden pattern is still absent, so the proof can start again at the higher density. The gain must be large enough and the progression long enough for the argument to repeat [4, 5, 3].

For four terms, the difficulty is deciding what kind of order the missing progressions expose. A small model shows why. Over \(\mathbb F_p^n\) for a prime \(p\geq 5\), take \(q(x)=x_1^2+\cdots+x_n^2\) and \(f(x)=\exp(2\pi i q(x)/p)\). The quadratic Gauss sum gives every normalized linear Fourier coefficient of \(f\) absolute value \(p^{-n/2}\). They become uniformly tiny as \(n\) increases. Yet on every progression the third difference is zero:

\[
q(x+3d)-3q(x+2d)+3q(x+d)-q(x)=0.
\]

The higher-order \(U^3\) test uses correlations on additive cubes and sees this quadratic structure. For a set \(A\) of density \(\alpha\), small \(U^3\) norm of \(1_A-\alpha\) forces the four-term count close to the random benchmark. A large norm gives a lead. Turning that lead into a new progression with higher density is the hard part. Gowers’s proof draws on Freiman’s additive structure theory and on arguments he encountered through Ruzsa [5, 3, 6].

The method is specific even within additive combinatorics. Szemerédi’s original proof uses a combinatorial argument, Furstenberg proves a multiple-recurrence theorem, and Gowers himself later returns to the problem through hypergraph regularity. In his work with Maurey on Banach spaces, the decisive move is instead to construct a counterexample with carefully controlled subspaces [7, 8, 9, 10].

Chen Jingrun needs his count to yield a witness. For sufficiently large even \(N\), he sieves \(N-p\) over primes \(p\). His first weighted lower bound guarantees a survivor with at most three prime factors. He bounds and subtracts the contribution of a remaining class of three-factor products. The bound stays positive, so some \(N-p\) is prime or a product of two primes [11, 12]. In earlier work on Tarry’s problem, Chen used a method from the chapter on Vinogradov in Hua Luogeng’s book to improve a result in another chapter. Hua invited him to present it and later recommended him for the Institute of Mathematics at the Chinese Academy of Sciences [12].

For Gowers, a smaller progression carries the same obstruction and gives the proof room to repeat. What can a smaller view preserve in geometry?

## What magnification can buy

Ennio De Giorgi’s regularity theory begins with a boundary that minimizes perimeter. Zoom in around a point and the minimization property survives. The *excess* measures how far the oriented normals deviate from a common direction. When it is sufficiently small on one ball, the proof shows that it improves on a smaller ball, with the comparison plane allowed to tilt. Iterating and controlling those tilts turns approximate flatness into regularity [13, 14, 15].

A smooth model shows where that improvement comes from. For a graph of small height \(\varepsilon v\), the leading excess of its area over the flat base is \(\tfrac12\varepsilon^2\int|\nabla v|^2\). The limiting energy has harmonic minimizers. The analytic work is to justify the approximation for a potentially rough boundary so that the proof can use the regularity of the limiting problem [15].

De Giorgi took up questions on perimeter that Caccioppoli had pursued, and his work on minimizing boundaries circulated through the Pisa mathematics seminar. The search for the limit of the regularity theorem brought a different exchange. Simons identified a threshold for the stability of nonflat minimal cones. Bombieri, De Giorgi, and Giusti established that the cone bearing Simons’s name is area minimizing. The possible singularity that magnification had brought into view became a sharpness example [14, 16, 17, 18].

In the three-dimensional Kakeya problem, magnification tracks overlap. A compact Kakeya set contains a unit segment in every direction. Thicken those segments into tubes and a small union means heavy overlap on average. Wang and Zahl follow the overlap through scales, studying which tubes cluster inside common convex containers and how finer tubes are distributed within the coarse ones. Their estimates force Hausdorff dimension three. In the streamlined proof with Guth, the sticky and non-sticky alternatives describe different patterns of clustering through that hierarchy [19, 20].

The geometric and arithmetic approaches have a documented point of contact. In earlier Kakeya work, Bourgain translated a configuration into a problem about sums and differences. He used Gowers’s quantitative version of the Balog–Szemerédi theorem, where the power-type dependence was essential to the geometric gain. A later line of work on persistent clustering ran through Katz and Tao. Zahl recalls encountering Kakeya through a paper by Katz, Łaba, and Tao before studying with Tao at UCLA. Wang trained at Peking University and in France before doing her doctorate with Guth at MIT. These paths help explain how a geometric question and the tools for attacking it arrived in the same collaboration [21, 22, 23, 20].

In these arguments a smaller view makes an existing object easier to read. Sometimes the purpose of changing scale or passing to a limit is to bring a new object into being.

## What a proof can force into existence

In Shigefumi Mori’s proof of Hartshorne’s conjecture on varieties with ample tangent bundle, reduction to positive characteristic makes a strange move available. Precomposing a map from a curve with iterated Frobenius increases the degree of the pulled-back tangent bundle while the genus of the source stays fixed. The deformation estimate then gives room to move the map while keeping a marked point fixed. Bend-and-break uses a degeneration of such a family to produce a rational curve. A degree bound lets the positive-characteristic construction serve the characteristic-zero theorem. The proof deliberately creates a situation in which a new component has to appear [24].

In Moscow, Alexander Ol’shanskii used successive approximations to build an infinite group of exponent \(n\) for sufficiently large odd \(n\). At each stage he picks a shortest word still of infinite order and imposes its \(n\)th-power relation. Each new relation threatens to collapse more of the group than intended. A van Kampen diagram renders that danger visible. A word that becomes trivial bounds a tiled disk, with each face coming from a defining relation. By controlling how faces from different stages can meet, Ol’shanskii shows that every finite stage still has an element of infinite order. The limit has exponent \(n\). Were it finitely presented, some finite stage would already define it. It is therefore infinite. The geometric proof bought a shorter argument at the price of a worse threshold on \(n\) [25].

Mori makes progress by forcing a degeneration and controlling what comes out. Ol’shanskii imposes relations and controls what can disappear. His diagrams work because they register precisely how a word becomes trivial. Other ways of recording a group’s structure can lose even more elementary information.

## What an arrow keeps

Take two groups of order twenty-seven with generators \(a,b\) of orders \(9,3\). In the first they commute. In the second, \(bab^{-1}=a^4\). In both groups \((a^i b^j)^3=a^{3i}\). Thus all elements of order dividing three lie in \(E=\langle a^3,b\rangle\), an elementary abelian group of order nine. Its four lines are the subgroups of order three. Each subgroup of order nine is normal and gives a quotient of order three, so it contains \(A=\langle a^3\rangle\). The four subgroups of order nine correspond to the four lines of \(G/A\). One is \(E\) and contains all four subgroups of order three. Each of the other three is cyclic with \(A\) as its unique subgroup of order three. The subgroup lattices are isomorphic. They have forgotten whether multiplication commutes.

Complex representations distinguish the two groups. The abelian group has only one-dimensional irreducibles, while the other also has irreducibles of dimension three. With the symmetric tensor product and the functor \(\omega\) forgetting the group action, there is a stronger result. The tensor automorphisms of \(\omega\) recover the group itself [26]. For questions about how subgroups fit together, the lattice already carries what matters. These questions were a subject in their own right for Gaetano Scorza and Guido Zappa in Italy and for Michio Suzuki at Illinois [27, 28].

De Giorgi’s boundary gives a different outcome. If \(E\subset\mathbb R^n\) is bounded and has finite perimeter, the vector measure \(D\mathbf 1_E\) and the boundary of the current \(T_E\) of integration over \(E\) describe the same distributional boundary:

\[
\partial T_E(\omega)=\int_E d\omega,
  \qquad
  \mathbf M(\partial T_E)=|D\mathbf 1_E|(\mathbb R^n).
\]

The identity lets De Giorgi’s boundary enter Federer and Fleming’s theory of integral currents [13, 29]. In their shorter proof of Almgren’s higher-codimension regularity theorem, De Lellis and Spadaro build a center manifold that approximates the average of the sheets of an almost flat current. A multivalued displacement normal to that manifold tracks the sheets. Estimates on the approximation let them use the regularity of multivalued energy minimizers to bound the dimension of the current’s singular set [30].

## How a proof can travel

Heisuke Hironaka illustrates the problem of induction in resolution with a polynomial in several variables. Regard it as a polynomial in one variable whose coefficients are polynomials in the others. Passing to lower dimension leaves a collection of equations. The formulation has to accommodate that collection if the induction is to go through. Hironaka first encountered the problem in Yasuo Akizuki’s Kyoto seminar. He credits Kyoto with his grounding in abstract algebra, Zariski and his Harvard colleagues with tying it to geometry, and Grothendieck’s Paris with methods for assembling local constructions into a global one [31, 32].

The next generation changed what it wanted from a birational model. Mori took notes at Hironaka’s Kyoto lectures. Resolution uses blow-ups to obtain a smooth model, while Mori’s later contractions can allow controlled singularities in a simpler one. Here even a close line of teaching carries techniques into an argument with a different aim [32, 33].

A finished proof travels with the reasons its steps work. Gowers arranges his progression proof so that special cases and failed attempts prepare the reader for the next move [3, pp. 468–469]. Thurston treats the transmission of such understanding as part of the work of mathematics [34].

Group theorists used the classification of finite simple groups while its proof was still scattered. Aschbacher and Smith closed its quasithin gap in 2004. The second-generation project used a different hypothesis, *even type*, for the branch Aschbacher and Smith treated under *even characteristic*. A further theorem made their result usable in the revised proof. In the quasithin case at issue, the broader hypothesis added only the first Janko group [35, 36, 37].

In numerical work, what survives a change in form becomes a design question. What should equations on a grid carry over from the model they came from?

## What a discretization must carry

In Moscow, the circle around Kolmogorov’s seminar drew Vladimir Arnold to fluid motion. He viewed a smooth incompressible Euler flow as a geodesic in the space of volume-preserving maps with the kinetic-energy metric. Ebin and Marsden used that exact reformulation to build a local analytic theory [38, 39, 40]. A finite computation requires deciding which properties to preserve exactly and which to control to a tolerance.

Feng Kang’s 1965 paper follows the passage from a physical mechanism through a continuum model and discrete algebra to an algorithm. He asks a discretization to preserve the relevant mathematical and physical properties, meet the required accuracy, economize on time and storage, and be simple, general, flexible, and easy to understand [41, §1].

Cui Junzhi recalls what these choices meant at the Chinese Academy of Sciences. Feng’s team developed its finite-element approach independently at an institute shaped by Soviet models and open to mathematical ideas from several countries [43]. To improve estimates of stresses near the heel and toe of the Liujiaxia dam, the team compared discrete equations derived by a variational principle and by integral conservation. The two derivations agreed on regular triangular meshes but initially differed on rectangles. Cui and Wang Jinxian used the same piecewise interpolants in both derivations, and the rectangular equations agreed too. Cui revised the scheme and obtained stress estimates that satisfied the dam’s designers [42].

Godunov’s method shows how one property can survive exactly. A finite-volume update changes each cell’s contents, its average times its volume, by the net flux through its faces. Sum over the cells and each interior flux cancels against its copy with the opposite sign. Godunov supplies the flux by solving a local Riemann problem. The exact discrete balance comes from sharing the flux across a face, leaving room for different ways of supplying it, as in Clawpack [44, 45]. What can a learned component supply, and what can the solver still check?

## Where learning belongs in a solver

Feng put accuracy and computing cost on the same list. Training a surrogate changes when that cost is paid. In Grossmann and coauthors’ low-dimensional tests, finite elements generally reached comparable or better accuracy in less time than physics-informed networks trained for each problem [46]. A surrogate for a family of inputs spreads the up-front cost over many queries. Its savings depend on the cost of a classical solver that meets the same accuracy target.

Zhang and coauthors’ BreakFlow benchmark compares a factorized Fourier neural operator across Reynolds-number bins at a reported up-front cost of 420,000 seconds for data generation and the selected training run, excluding parameter sweeps. Error is the mean normalized root-mean-square discrepancy from a high-fidelity numerical reference. Break-even counts the queries needed for inference savings to recover that cost against the cheapest tested classical solver at least as accurate as the surrogate in that bin [47, Table 8 and Appendix B].

| Reynolds number | Average error | Break-even queries |
| --- | ---: | ---: |
| \((10,40]\) | \(0.43\%\) | \(8{,}783\) |
| \((40,90]\) | \(3.86\%\) | \(4{,}242\) |
| \((90,160]\) | \(28.40\%\) | \(2{,}510\) |

Across these bins, the matched classical cost grows faster than the inference cost [47, Fig. 8]. The surrogate therefore breaks even sooner even as its mean error rises. If the task requires a mean error below one percent, only the first row qualifies.

A learned map can also propose corrections inside a solver. In HINTS, Jacobi relaxation damps oscillatory error while periodic DeepONet calls use the residual to reduce slowly decaying low-frequency error. In a representative one-dimensional Poisson test, a single call improves the starting estimate but leaves slow convergence. Periodic calls bring the error relative to the direct discrete solution down to machine zero in roughly 200 iterations [48, §2.2 and Fig. 2].

For a nonsingular linear system \(A_hu_h=b_h\), the residual \(r=b_h-A_hv\) satisfies \(u_h-v=A_h^{-1}r\). A stability bound turns the residual into an error bound relative to the discrete solution. Relating that solution to the continuum requires a separate estimate [49]. Lean’s kernel verifies an exact deduction from stated formal hypotheses. Like the residual test, this check works independently of how the candidate was produced. To know what the deduction proves about the original problem, we have to examine the translation.

## What the checker sees

The streamlined Kakeya proof reduces the general problem to a sticky estimate for nested tube families with density controlled at every scale. A team working with Project Numina formalized the reduction in Lean. A team at Nankai University and ByteDance Seed formalized the sticky estimate from Wang and Zahl’s earlier work. Both teams made extensive use of AI and sent corrections back to the manuscript [20, §1.1]. The reduction states the estimate using a density condition on nested tubes. The sticky proof uses convex non-concentration on covers at nearby scales. As in the quasithin case, joining the arguments took a further proof, here showing that the second formulation supplies the estimate the first requires. The released formalization proves unconditionally that a compact Kakeya set in \(\mathbb R^3\) has Hausdorff dimension three [50].

An early Lean transcription required the convex hull of a family of tubes to equal a plank, a rectangular box. The rounded hull cannot have the box’s sharp corners. An AI agent proved the implication vacuously, since its hypothesis could never hold. The team went back to the geometry, corrected the statement, checked that its hypotheses could be satisfied, and proved it [51, §6.2].

Mori changed characteristic to make a rational curve possible. A degree bound gave him a way back. The passage from grid to continuum takes an error estimate. The passage from a formal deduction to the intended theorem depends on a faithful translation. Those links are part of the craft Gowers wanted to pass on. A move becomes available to the next reader when they can see what made it possible, what it carries, and what it lets them conclude.

## References

1. W. T. Gowers, [The two cultures of mathematics](https://www.maths.tcd.ie/~bnick/Gowers.pdf), in *Mathematics: Frontiers and Perspectives*, AMS, 2000, 65–78.
2. P. Erdős, [Some remarks on the theory of graphs](https://doi.org/10.1090/S0002-9904-1947-08785-1), *Bull. Amer. Math. Soc.* 53 (1947), 292–294.
3. W. T. Gowers, [A new proof of Szemerédi’s theorem](https://doi.org/10.1007/s00039-001-0332-9), *Geom. Funct. Anal.* 11 (2001), 465–588. [Full text](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf).
4. K. F. Roth, [On certain sets of integers](https://doi.org/10.1112/jlms/s1-28.1.104), *J. London Math. Soc.* 28 (1953), 104–109.
5. W. T. Gowers, [A new proof of Szemerédi’s theorem for arithmetic progressions of length four](https://doi.org/10.1007/s000390050065), *Geom. Funct. Anal.* 8 (1998), 529–551.
6. W. T. Gowers, [A uniform set with fewer than expected arithmetic progressions of length 4](https://arxiv.org/abs/2004.07598), arXiv:2004.07598 (2020).
7. E. Szemerédi, [On sets of integers containing no \(k\) elements in arithmetic progression](https://matwbn.icm.edu.pl/ksiazki/aa/aa27/aa27132.pdf), *Acta Arith.* 27 (1975), 199–245.
8. H. Furstenberg, [Ergodic behavior of diagonal measures and a theorem of Szemerédi on arithmetic progressions](https://doi.org/10.1007/BF02813304), *J. Analyse Math.* 31 (1977), 204–256.
9. W. T. Gowers, [Hypergraph regularity and the multidimensional Szemerédi theorem](https://doi.org/10.4007/annals.2007.166.897), *Ann. of Math.* 166 (2007), 897–946.
10. W. T. Gowers and B. Maurey, [The unconditional basic sequence problem](https://doi.org/10.1090/S0894-0347-1993-1201238-0), *J. Amer. Math. Soc.* 6 (1993), 851–874.
11. J. Chen, [On the representation of a large even integer as the sum of a prime and the product of at most two primes](https://www.sciengine.com/doi/pdf/8663c8f4bb65481c80325a4101d215ac), announcement, *Kexue Tongbao* 17 (1966), 385–386.
12. C. Pan and Y. Wang, [Chen Jingrun: A brief outline of his life and works](https://actamath.cjoe.ac.cn/Jwk_sxxb_en/EN/article/downloadArticleFile.do?attachType=PDF&id=5053), *Acta Math. Sin. New Ser.* 12 (1996), 225–233.
13. E. De Giorgi, [Su una teoria generale della misura \((r-1)\)-dimensionale in uno spazio ad \(r\) dimensioni](https://doi.org/10.1007/BF02412838), *Ann. Mat. Pura Appl.* 36 (1954), 191–213.
14. E. De Giorgi, *Frontiere orientate di misura minima*, Seminario di Matematica della Scuola Normale Superiore, Pisa, 1960–61. See also his [1963 paper on singularities of minimizing boundaries](https://www.numdam.org/item/ASNSP_1963_3_17_4_349_0/).
15. F. Maggi, [Harmonic approximation and excess improvement](https://www.cambridge.org/core/books/abs/sets-of-finite-perimeter-and-geometric-variational-problems/harmonic-approximation-and-excess-improvement/1DD52BA3111804CA03448613763C1514), Chapter 25 of *Sets of Finite Perimeter and Geometric Variational Problems*, Cambridge University Press, 2012.
16. E. De Giorgi, [Pisa lecture notes on sets of finite perimeter](https://cvgmt.sns.it/media/doc/paper/3260/DG-CorsoSNS-9192.pdf), 1991–92 course, with historical introduction and Caccioppoli’s 1958 report.
17. J. Simons, [Minimal varieties in riemannian manifolds](https://annals.math.princeton.edu/1968/88-1/p04), *Ann. of Math.* 88 (1968), 62–105.
18. E. Bombieri, E. De Giorgi, and E. Giusti, [Minimal cones and the Bernstein problem](https://doi.org/10.1007/BF01404309), *Invent. Math.* 7 (1969), 243–268.
19. H. Wang and J. Zahl, [Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions](https://arxiv.org/abs/2502.17655), arXiv:2502.17655 (2025).
20. L. Guth, H. Wang, and J. Zahl, [A streamlined proof of the Kakeya set conjecture in \(\mathbb R^3\)](https://arxiv.org/html/2601.14411v2), arXiv:2601.14411v2 (2026).
21. J. Bourgain, [On the dimension of Kakeya sets and related maximal inequalities](https://doi.org/10.1007/s000390050087), *Geom. Funct. Anal.* 9 (1999), 256–282, especially p. 257.
22. Institut des Hautes Études Scientifiques, [Hong Wang awarded the 2026 Fields Medal](https://www.ihes.fr/en/hong-wang2026-fields-medal/), 23 July 2026, biographical section.
23. UCLA Department of Mathematics, [Joshua Zahl to MIT](https://www.math.ucla.edu/sites/default/files/newsletter/nl2013.pdf), departmental newsletter, 2013.
24. S. Mori, [Projective manifolds with ample tangent bundles](https://annals.math.princeton.edu/1979/110-3/p11), *Ann. of Math.* 110 (1979), 593–606.
25. A. Yu. Ol’shanskii, [On the Novikov–Adyan theorem](https://www.mathnet.ru/eng/sm2249), *Math. USSR Sb.* 46 (1983), 203–236, English translation of the 1982 paper. See the introduction, Lemma 5.6, and the conclusion.
26. P. Deligne and J. S. Milne, [Tannakian Categories](https://www.math.columbia.edu/~dejong/tannakian/Deligne-Milne-Tannakian-Categories.pdf), in *Hodge Cycles, Motives, and Shimura Varieties*, LNM 900, Springer, 1982, 101–228, Proposition 2.8.
27. G. Zappa, [Firsthand account of Gaetano Scorza’s work](https://www.advgrouptheory.com/GTArchivum/Scorza/Scorza%28Zappa%29.pdf), Group Theory Archivum.
28. M. Suzuki, [Structure of a Group and the Structure of its Lattice of Subgroups](https://doi.org/10.1007/978-3-642-52758-6), Springer, 1956.
29. H. Federer and W. H. Fleming, [Normal and integral currents](https://doi.org/10.2307/1970227), *Ann. of Math.* 72 (1960), 458–520.
30. C. De Lellis and E. Spadaro, *Regularity of area minimizing currents*, [I: Gradient \(L^p\) estimates](https://arxiv.org/abs/1306.1195), *Geom. Funct. Anal.* 24 (2014), 1831–1884, and [II: Center manifold](https://annals.math.princeton.edu/2016/183-2/p02) and [III: Blow-up](https://annals.math.princeton.edu/2016/183-2/p03), *Ann. of Math.* 183 (2016), 499–575 and 577–617.
31. H. Hironaka, Resolution of singularities of an algebraic variety over a field of characteristic zero, [I](https://doi.org/10.2307/1970486) and [II](https://doi.org/10.2307/1970547), *Ann. of Math.* 79 (1964), 109–203 and 205–326.
32. A. Jackson, [Interview with Heisuke Hironaka](https://www.ocf.berkeley.edu/~lekheng/interviews/HeisukeHironaka.pdf), *Notices Amer. Math. Soc.* 52 (2005), 1010–1019, especially pp. 1013–1016.
33. S. Mori, [Threefolds whose canonical bundles are not numerically effective](https://annals.math.princeton.edu/1982/116-1/p04), *Ann. of Math.* 116 (1982), 133–176.
34. W. P. Thurston, [On proof and progress in mathematics](https://arxiv.org/abs/math/9404236), *Bull. Amer. Math. Soc.* 30 (1994), 161–177.
35. M. Aschbacher, [The status of the classification of the finite simple groups](https://authors.library.caltech.edu/records/5b4mm-frv50), *Notices Amer. Math. Soc.* 51 (2004), 736–740.
36. M. Aschbacher and S. D. Smith, [The Classification of Quasithin Groups](https://homepages.math.uic.edu/~smiths/papers/quasithin/quasithin.pdf#page=500), Mathematical Surveys and Monographs 111–112, AMS, 2004, Vol. II, Theorem 0.1.2 and §0.2.2.
37. A. Steingart, [A group theory of group theory: Collaborative mathematics and the uninterrupted proof](https://doi.org/10.1177/0306312712436547), *Soc. Stud. Sci.* 42 (2012), 185–213.
38. V. I. Arnold and L. D. Meshalkin, [A. N. Kolmogorov’s seminar on selected problems of analysis (1958/1959)](https://www.mathnet.ru/eng/rm6710), *Uspekhi Mat. Nauk* 15 (1960), 247–250.
39. V. I. Arnold, [Sur la géométrie différentielle des groupes de Lie de dimension infinie et ses applications à l’hydrodynamique des fluides parfaits](https://www.numdam.org/item/10.5802/aif.233/), *Ann. Inst. Fourier* 16 (1966), 319–361.
40. D. G. Ebin and J. Marsden, [Groups of diffeomorphisms and the motion of an incompressible fluid](https://annals.math.princeton.edu/1970/92-1/p04), *Ann. of Math.* 92 (1970), 102–163.
41. K. Feng, [Difference schemes based on variational principle](https://lsec.cc.ac.cn/fengkangprize/works/Work%20No.1/5.pdf), *Journal of Applied and Computational Mathematics* 2, no. 4 (1965), 238–262.
42. J. Cui, [Recollections of Feng Kang and the dam-computation team](https://www.amss.cas.cn/fk/hyjn/202007/t20200721_5638330.html), with [Huang Hongci’s account of the comparison](https://www.amss.cas.cn/fk/hyjn/202007/t20200721_5638332.html), Academy of Mathematics and Systems Science, Chinese Academy of Sciences.
43. T. Wang and L. Wei, [Some early history of the Institute of Computational Mathematics and Scientific/Engineering Computing, Chinese Academy of Sciences](https://www.jstage.jst.go.jp/article/historiascientiarum/34/1/34_33/_article/-char/en), *Historia Scientiarum* 34 (2024).
44. S. K. Godunov, [A difference method for numerical calculation of discontinuous solutions of the equations of hydrodynamics](https://www.mathnet.ru/eng/sm4873), *Mat. Sb.* 47 (1959), 271–306.
45. K. T. Mandli et al., [Clawpack: Building an open source ecosystem for solving hyperbolic PDEs](https://peerj.com/articles/cs-68/), *PeerJ Comput. Sci.* 2 (2016), e68.
46. T. G. Grossmann, U. J. Komorowska, J. Latz, and C.-B. Schönlieb, [Can physics-informed neural networks beat the finite element method?](https://doi.org/10.1093/imamat/hxae011), *IMA J. Appl. Math.* 89 (2024), 143–174.
47. Y. Zhang, N. Roberts, T. Marwah, and M. Khodak, [Breakeven complexity: A new perspective on neural partial differential equation solvers](https://arxiv.org/html/2605.15399v2), arXiv:2605.15399v2 (November 2026), especially §6.3, Appendix B, and Table 8.
48. E. Zhang et al., [Blending neural operators and relaxation methods in PDE numerical solvers](https://doi.org/10.1038/s42256-024-00910-x), *Nat. Mach. Intell.* 6 (2024), 1303–1313.
49. T. De Ryck and S. Mishra, [Numerical analysis of physics-informed neural networks and related models in physics-informed machine learning](https://doi.org/10.1017/S0962492923000089), *Acta Numer.* 33 (2024), 633–713.
50. Y. Cao et al. and the independent sticky Kakeya formalization team, [Kakeya in dimension three](https://github.com/project-numina/kakeya-3d/tree/a26427e#the-unconditional-result), Lean formalization and documentation of the unconditional result, 2026.
51. J. Asher, Y. Cao, R. Qiu, P. Pellegrino, and J. Li, [Numina Fuse: Interactive autoformalization in Lean 4](https://arxiv.org/html/2610.33860#S6.SS2), arXiv:2610.33860 (2026), §6.2.

