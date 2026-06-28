// questions.js — Algebraic Topology Quiz question bank
// Rebuilt from scratch: 152 hand-curated questions + 3 procedural generators
// across 15 subjects (controlled vocabulary) and difficulty 1 (warm-up) to 5 (expert).
// Every $...$ math fragment validated via KaTeX server-side rendering (0 errors).
// Authoring convention: String.raw tagged templates (x`...`) so backslashes read naturally;
// math between $...$ delimiters, rendered client-side by KaTeX auto-render.
//
// Schema per question object:
//   space : string  — description of the topological space/object in question
//   q     : string  — the question text
//   a     : string  — the correct answer
//   d     : [string,string,string] — exactly three distractors
//   why   : string  — explanation shown after answering
//   subj  : string  — one of 15 controlled-vocabulary subject tags (see SUBJECTS below)
//   diff  : number  — difficulty 1-5
//
"use strict";
const x = String.raw;

const SUBJECTS = [
  "fundamental-group","covering-spaces","homology","cohomology","homotopy-groups",
  "homotopy-theory","euler-characteristic","surfaces","manifolds","lie-groups",
  "fiber-bundles","characteristic-classes","knot-theory","k-theory","spectral-sequences"
];

const CURATED = [
 {
  "space": "Stiefel-Whitney classes",
  "q": "Stiefel–Whitney classes $w_i(E)$ of a real vector bundle live in which cohomology?",
  "a": "$H^i(B;\\mathbb{Z}/2)$",
  "d": [
   "$H^i(B;\\mathbb{Z})$",
   "$H_i(B;\\mathbb{Z}/2)$",
   "$H^{2i}(B;\\mathbb{Z})$"
  ],
  "why": "Stiefel–Whitney classes are defined with $\\mathbb{Z}/2$ coefficients: $w_i(E)\\in H^i(B;\\mathbb{Z}/2)$.",
  "subj": "characteristic-classes",
  "diff": 2
 },
 {
  "space": "$w_1$ and orientability",
  "q": "A real vector bundle $E\\to B$ is orientable if and only if which class vanishes?",
  "a": "$w_1(E)=0$",
  "d": [
   "$w_2(E)=0$",
   "$c_1(E)=0$",
   "$p_1(E)=0$"
  ],
  "why": "The first Stiefel–Whitney class $w_1$ is exactly the obstruction to orientability.",
  "subj": "characteristic-classes",
  "diff": 2
 },
 {
  "space": "$w_2$ and spin structures",
  "q": "A vector bundle admits a spin structure iff which classes vanish?",
  "a": "$w_1=0$ and $w_2=0$",
  "d": [
   "Only $w_1=0$",
   "Only $w_2=0$, regardless of $w_1$",
   "$w_1=w_2=w_3=0$"
  ],
  "why": "Spin structures require orientability ($w_1=0$) plus vanishing of the second Stiefel–Whitney class $w_2$, which is the obstruction to lifting the structure group to $\\mathrm{Spin}(n)$.",
  "subj": "characteristic-classes",
  "diff": 4
 },
 {
  "space": "Chern classes of complex line bundles",
  "q": "Complex line bundles over $X$ are classified (up to isomorphism) by which invariant?",
  "a": "The first Chern class $c_1\\in H^2(X;\\mathbb{Z})$",
  "d": [
   "The rank only",
   "$w_1\\in H^1(X;\\mathbb{Z}/2)$",
   "The Euler characteristic of $X$"
  ],
  "why": "Complex line bundles correspond to $[X,BU(1)]=[X,\\mathbb{CP}^\\infty]\\cong H^2(X;\\mathbb{Z})$, with the bijection given by $c_1$.",
  "subj": "characteristic-classes",
  "diff": 3
 },
 {
  "space": "the Euler class",
  "q": "For an oriented rank-$n$ real vector bundle, the Euler class $e(E)$ lives in $H^n(B;\\mathbb{Z})$, and relates to which top Chern/SW class if $E$ has a complex structure?",
  "a": "$e(E)=c_n(E)$, the top Chern class, when $E$ is a complex bundle of rank $n$ (viewed as real of rank $2n$)",
  "d": [
   "$e(E)=w_n(E)$ always, with no need for orientability",
   "$e(E)$ is unrelated to Chern classes in general",
   "$e(E)=c_1(E)^n$"
  ],
  "why": "For a complex vector bundle, the Euler class of the underlying oriented real bundle equals the top Chern class.",
  "subj": "characteristic-classes",
  "diff": 4
 },
 {
  "space": "the tangent bundle of $S^n$ and the Euler class",
  "q": "The Euler class of $TS^n$ is nonzero exactly when $n$ is what?",
  "a": "Even",
  "d": [
   "Odd",
   "Always nonzero",
   "Never nonzero"
  ],
  "why": "$e(TS^n)$ corresponds to $\\chi(S^n)$ via Poincaré–Hopf, and $\\chi(S^n)=2$ for even $n$, $0$ for odd $n$.",
  "subj": "characteristic-classes",
  "diff": 3
 },
 {
  "space": "Pontryagin classes",
  "q": "Pontryagin classes $p_i(E)$ of a real vector bundle live in which cohomology, with what convention on degree?",
  "a": "$H^{4i}(B;\\mathbb{Z})$",
  "d": [
   "$H^{2i}(B;\\mathbb{Z})$",
   "$H^{i}(B;\\mathbb{Z}/2)$",
   "$H^{4i}(B;\\mathbb{Z}/2)$"
  ],
  "why": "Pontryagin classes are defined via $p_i(E)=(-1)^i c_{2i}(E\\otimes\\mathbb{C})\\in H^{4i}(B;\\mathbb{Z})$.",
  "subj": "characteristic-classes",
  "diff": 4
 },
 {
  "space": "the Whitney sum formula",
  "q": "For Stiefel–Whitney classes of a direct sum $E\\oplus F$, the total class satisfies what?",
  "a": "$w(E\\oplus F)=w(E)\\cup w(F)$",
  "d": [
   "$w(E\\oplus F)=w(E)+w(F)$",
   "$w(E\\oplus F)=w(E)$ if $\\mathrm{rank}(F)=0$ but otherwise unrelated",
   "No general formula exists"
  ],
  "why": "This is the Whitney sum (product) formula for total Stiefel–Whitney class (and analogously for total Chern class), a defining axiom of characteristic class theory.",
  "subj": "characteristic-classes",
  "diff": 3
 },
 {
  "space": "$\\mathbb{CP}^n$",
  "q": "What is the cohomology ring $H^*(\\mathbb{CP}^n;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}[\\alpha]/(\\alpha^{n+1})$ with $\\deg\\alpha=2$",
  "d": [
   "$\\mathbb{Z}[\\alpha]/(\\alpha^{n})$ with $\\deg\\alpha=2$",
   "An exterior algebra $\\Lambda[\\alpha]$, $\\deg\\alpha=2$",
   "$\\mathbb{Z}[\\alpha]/(\\alpha^{n+1})$ with $\\deg\\alpha=1$"
  ],
  "why": "The hyperplane class $\\alpha\\in H^2(\\mathbb{CP}^n)$ generates a truncated polynomial ring, with $\\alpha^{n+1}=0$ since $H^{2n+2}=0$.",
  "subj": "cohomology",
  "diff": 3
 },
 {
  "space": "the torus $T^2$",
  "q": "In $H^*(T^2;\\mathbb{Z})$, if $\\alpha,\\beta\\in H^1$ are dual to the two circle factors, what is $\\alpha\\cup\\beta$?",
  "a": "A generator of $H^2(T^2)\\cong\\mathbb{Z}$, and $\\beta\\cup\\alpha=-\\alpha\\cup\\beta$",
  "d": [
   "$0$",
   "$\\alpha+\\beta$",
   "$\\alpha\\cup\\beta=\\beta\\cup\\alpha$ (they commute as elements, no sign)"
  ],
  "why": "Cup product on $H^1$ classes anticommutes (graded commutativity with degree-1 classes), and $\\alpha\\cup\\beta$ is the standard generator of top cohomology, matching $H^*(T^2)\\cong \\Lambda^*(\\mathbb{Z}^2)$.",
  "subj": "cohomology",
  "diff": 4
 },
 {
  "space": "$\\mathbb{RP}^2$",
  "q": "What is $H^*(\\mathbb{RP}^2;\\mathbb{Z}/2)$ as a ring?",
  "a": "$(\\mathbb{Z}/2)[\\alpha]/(\\alpha^3)$ with $\\deg\\alpha=1$",
  "d": [
   "$(\\mathbb{Z}/2)[\\alpha]/(\\alpha^2)$ with $\\deg\\alpha=1$",
   "Exterior algebra on one degree-1 generator",
   "$(\\mathbb{Z}/2)[\\alpha]/(\\alpha^3)$ with $\\deg\\alpha=2$"
  ],
  "why": "With $\\mathbb{Z}/2$ coefficients, $H^*(\\mathbb{RP}^n;\\mathbb{Z}/2)$ is the truncated polynomial ring on a degree-1 class, here truncated at $\\alpha^3=0$ since $\\dim=2$.",
  "subj": "cohomology",
  "diff": 4
 },
 {
  "space": "a space $X$ with $H^k(X;mathbb{Z})$ finitely generated",
  "q": "Universal coefficients relates $H^k(X;\\mathbb{Z})$ to which homology groups?",
  "a": "$H_k(X;\\mathbb{Z})$ and $H_{k-1}(X;\\mathbb{Z})$ (via a free part and a torsion/Ext term)",
  "d": [
   "Only $H_k(X;\\mathbb{Z})$",
   "Only $H_{k+1}(X;\\mathbb{Z})$",
   "$H_k(X;\\mathbb{Q})$ only"
  ],
  "why": "The Universal Coefficient Theorem gives a short exact sequence $0\\to \\mathrm{Ext}(H_{k-1}(X),\\mathbb{Z})\\to H^k(X;\\mathbb{Z})\\to \\mathrm{Hom}(H_k(X),\\mathbb{Z})\\to 0$.",
  "subj": "cohomology",
  "diff": 3
 },
 {
  "space": "a closed orientable $n$-manifold $M$",
  "q": "Poincaré duality gives an isomorphism between which groups?",
  "a": "$H^k(M;\\mathbb{Z})\\cong H_{n-k}(M;\\mathbb{Z})$",
  "d": [
   "$H^k(M;\\mathbb{Z})\\cong H_k(M;\\mathbb{Z})$ always",
   "$H^k(M)\\cong H^{n-k}(M)$ with no homology involved",
   "$H_k(M)\\cong H_{k}(M;\\mathbb{Z}/2)$"
  ],
  "why": "Poincaré duality states $H^k(M;\\mathbb{Z})\\cong H_{n-k}(M;\\mathbb{Z})$ via cap product with the fundamental class, for $M$ a closed oriented $n$-manifold.",
  "subj": "cohomology",
  "diff": 2
 },
 {
  "space": "$S^n$",
  "q": "What is $H^*(S^n;\\mathbb{Z})$ as a graded ring (cup product structure)?",
  "a": "$\\mathbb{Z}$ in degrees $0,n$, trivial cup products since $\\alpha^2=0$ for the degree-$n$ generator when $n\\geq1$",
  "d": [
   "A polynomial ring on a degree-$n$ generator",
   "$\\mathbb{Z}$ only in degree $0$",
   "Exterior algebra on two generators"
  ],
  "why": "The cup product of the degree-$n$ generator with itself lands in degree $2n>n$ for $n\\geq1$, which is $0$ unless $n=0$; so the ring structure is trivial beyond degree $0$ and $n$.",
  "subj": "cohomology",
  "diff": 3
 },
 {
  "space": "two spaces $X,Y$",
  "q": "The Künneth theorem (field coefficients) computes $H^*(X\\times Y)$ as what?",
  "a": "$H^*(X)\\otimes H^*(Y)$",
  "d": [
   "$H^*(X)\\oplus H^*(Y)$",
   "$H^*(X)*H^*(Y)$ (free product)",
   "$\\mathrm{Hom}(H^*(X),H^*(Y))$"
  ],
  "why": "Over a field, the Künneth formula gives a ring isomorphism $H^*(X\\times Y;k)\\cong H^*(X;k)\\otimes H^*(Y;k)$.",
  "subj": "cohomology",
  "diff": 3
 },
 {
  "space": "a wedge $X\\vee Y$ of well-pointed spaces",
  "q": "What is $\\tilde H^k(X\\vee Y)$?",
  "a": "$\\tilde H^k(X)\\oplus \\tilde H^k(Y)$",
  "d": [
   "$\\tilde H^k(X)\\otimes\\tilde H^k(Y)$",
   "$\\tilde H^k(X\\times Y)$",
   "$0$ always"
  ],
  "why": "Reduced cohomology, like reduced homology, turns a wedge into a direct sum.",
  "subj": "cohomology",
  "diff": 2
 },
 {
  "space": "de Rham cohomology of a smooth manifold $M$",
  "q": "De Rham's theorem identifies $H^k_{dR}(M)$ with which cohomology?",
  "a": "$H^k(M;\\mathbb{R})$, singular/Čech cohomology with real coefficients",
  "d": [
   "$H^k(M;\\mathbb{Z})$",
   "$H_k(M;\\mathbb{R})$",
   "$\\pi_k(M)\\otimes\\mathbb{R}$"
  ],
  "why": "De Rham's theorem is a ring isomorphism between de Rham cohomology (closed forms mod exact forms) and singular cohomology with real coefficients.",
  "subj": "cohomology",
  "diff": 3
 },
 {
  "space": "the circle $S^1$",
  "q": "The map $\\mathbb{R}\\to S^1$, $t\\mapsto e^{2\\pi i t}$, is an example of what?",
  "a": "The universal covering of $S^1$",
  "d": [
   "A homeomorphism",
   "A double cover",
   "A nontrivial fiber bundle with disconnected fiber and finite group"
  ],
  "why": "$\\mathbb{R}$ is simply connected and the map is a covering map, so it is *the* universal cover of $S^1$, with deck group $\\mathbb{Z}$.",
  "subj": "covering-spaces",
  "diff": 2
 },
 {
  "space": "$S^n$ for $n\\geq 2$",
  "q": "What is the universal cover of $\\mathbb{RP}^n$ for $n\\geq 2$?",
  "a": "$S^n$",
  "d": [
   "$\\mathbb{R}^n$",
   "$\\mathbb{RP}^n$ itself",
   "$S^{n-1}$"
  ],
  "why": "The antipodal quotient $S^n\\to\\mathbb{RP}^n$ is a 2-fold cover with $S^n$ simply connected for $n\\geq2$, hence universal.",
  "subj": "covering-spaces",
  "diff": 2
 },
 {
  "space": "a connected covering space $\\tilde X\\to X$",
  "q": "The number of sheets of a finite connected covering $\\tilde X\\to X$ equals what, in terms of $\\pi_1$?",
  "a": "The index $[\\pi_1(X):p_*\\pi_1(\\tilde X)]$",
  "d": [
   "The order of $\\pi_1(X)$",
   "Always $2$",
   "The rank of $\\pi_1(\\tilde X)$"
  ],
  "why": "This is the basic correspondence theorem for covering spaces: sheets correspond to cosets of the subgroup $p_*\\pi_1(\\tilde X)\\leq \\pi_1(X)$.",
  "subj": "covering-spaces",
  "diff": 3
 },
 {
  "space": "covering spaces of $S^1\\vee S^1$",
  "q": "How many connected double covers does $S^1\\vee S^1$ have, up to based isomorphism?",
  "a": "Exactly $3$",
  "d": [
   "Exactly $1$",
   "Exactly $2$",
   "Infinitely many"
  ],
  "why": "Based connected double covers correspond to index-2 subgroups of $F_2=\\pi_1(S^1\\vee S^1)$, equivalently nontrivial homomorphisms $F_2\\to\\mathbb{Z}/2$; there are $2^2-1=3$ such homomorphisms (send each generator to $0$ or $1$ in $\\mathbb{Z}/2$, excluding the trivial one).",
  "subj": "covering-spaces",
  "diff": 4
 },
 {
  "space": "the torus $T^2$",
  "q": "Connected covering spaces of $T^2$ correspond to which kind of subgroups of $\\mathbb{Z}^2$?",
  "a": "All subgroups of $\\mathbb{Z}^2$ (finite-index ones give finite covers)",
  "d": [
   "Only subgroups of index 2",
   "Only normal subgroups of infinite index",
   "There are no nontrivial covers since $T^2$ is already simply connected"
  ],
  "why": "By the Galois correspondence for covers, connected covers of $T^2$ correspond bijectively to subgroups of $\\pi_1(T^2)=\\mathbb{Z}^2$.",
  "subj": "covering-spaces",
  "diff": 3
 },
 {
  "space": "a path-connected, locally path-connected, semi-locally simply connected space $X$",
  "q": "What hypothesis on $X$ guarantees existence of a universal cover?",
  "a": "$X$ is path-connected, locally path-connected, and semi-locally simply connected",
  "d": [
   "$X$ is compact",
   "$X$ is a CW complex",
   "$\\pi_1(X)$ is finite"
  ],
  "why": "This is precisely the standard existence theorem for universal covers in covering space theory.",
  "subj": "covering-spaces",
  "diff": 3
 },
 {
  "space": "a degree-$n$ covering map $p:\\tilde X\\to X$ of finite CW complexes",
  "q": "How does the Euler characteristic of $\\tilde X$ relate to that of $X$?",
  "a": "$\\chi(\\tilde X)=n\\cdot\\chi(X)$",
  "d": [
   "$\\chi(\\tilde X)=\\chi(X)$",
   "$\\chi(\\tilde X) = \\chi(X)/n$",
   "$\\chi(\\tilde X)=\\chi(X)+n$"
  ],
  "why": "A degree-$n$ cover multiplies the number of cells in each dimension by $n$, hence multiplies $\\chi$ by $n$.",
  "subj": "covering-spaces",
  "diff": 2
 },
 {
  "space": "deck transformations of a covering $\\tilde X\\to X$",
  "q": "If $p:\\tilde X\\to X$ is the universal cover, the deck transformation group is isomorphic to what?",
  "a": "$\\pi_1(X)$",
  "d": [
   "$\\pi_1(\\tilde X)$",
   "Trivial group always",
   "$\\pi_0(X)$"
  ],
  "why": "For the universal cover, $\\mathrm{Deck}(\\tilde X/X)\\cong \\pi_1(X)$ acting freely and transitively on each fiber.",
  "subj": "covering-spaces",
  "diff": 2
 },
 {
  "space": "$S^2$",
  "q": "What is $\\chi(S^2)$?",
  "a": "$2$",
  "d": [
   "$0$",
   "$1$",
   "$-2$"
  ],
  "why": "$\\chi(S^2)=2$, the classical result for the sphere (e.g. from a CW structure with 1 vertex, 0 edges... or more simply $\\chi=b_0-b_1+b_2=1-0+1=2$).",
  "subj": "euler-characteristic",
  "diff": 1
 },
 {
  "space": "the torus $T^2$",
  "q": "What is $\\chi(T^2)$?",
  "a": "$0$",
  "d": [
   "$2$",
   "$-2$",
   "$1$"
  ],
  "why": "$\\chi(T^2)=b_0-b_1+b_2=1-2+1=0$.",
  "subj": "euler-characteristic",
  "diff": 1
 },
 {
  "space": "a genus-$g$ closed orientable surface $\\Sigma_g$",
  "q": "What is $\\chi(\\Sigma_g)$ in terms of $g$?",
  "a": "$2-2g$",
  "d": [
   "$2g-2$",
   "$1-g$",
   "$2-g$"
  ],
  "why": "$\\chi(\\Sigma_g)=b_0-b_1+b_2=1-2g+1=2-2g$, using $H_1(\\Sigma_g)=\\mathbb{Z}^{2g}$.",
  "subj": "euler-characteristic",
  "diff": 2
 },
 {
  "space": "$\\mathbb{RP}^2$",
  "q": "What is $\\chi(\\mathbb{RP}^2)$?",
  "a": "$1$",
  "d": [
   "$0$",
   "$2$",
   "$-1$"
  ],
  "why": "$\\mathbb{RP}^2$ has a CW structure with $1$ vertex, $1$ edge, $1$ face: $\\chi=1-1+1=1$.",
  "subj": "euler-characteristic",
  "diff": 1
 },
 {
  "space": "the Klein bottle $K$",
  "q": "What is $\\chi(K)$?",
  "a": "$0$",
  "d": [
   "$1$",
   "$2$",
   "$-1$"
  ],
  "why": "The Klein bottle has the same CW structure shape as the torus (1 vertex, 2 edges, 1 face), giving $\\chi=1-2+1=0$.",
  "subj": "euler-characteristic",
  "diff": 2
 },
 {
  "space": "a non-orientable closed surface $N_k$ with $k$ crosscaps",
  "q": "What is $\\chi(N_k)$ in terms of $k$?",
  "a": "$2-k$",
  "d": [
   "$1-k$",
   "$2-2k$",
   "$k-2$"
  ],
  "why": "The connected sum of $k$ copies of $\\mathbb{RP}^2$ has $\\chi(N_k)=2-k$, matching $\\chi(\\mathbb{RP}^2)=2-1=1$ for $k=1$.",
  "subj": "euler-characteristic",
  "diff": 3
 },
 {
  "space": "a finite CW complex $X$",
  "q": "The Euler characteristic $\\chi(X)$ can be computed from the alternating sum of what?",
  "a": "The number of cells in each dimension, $\\sum_k (-1)^k c_k$",
  "d": [
   "The ranks of homotopy groups",
   "Only the number of vertices",
   "The fundamental group order"
  ],
  "why": "This is the definition / basic computation of $\\chi$ via a CW or simplicial structure, independent of the choice of structure.",
  "subj": "euler-characteristic",
  "diff": 1
 },
 {
  "space": "product spaces $X\\times Y$",
  "q": "How does $\\chi(X\\times Y)$ relate to $\\chi(X)$ and $\\chi(Y)$?",
  "a": "$\\chi(X\\times Y)=\\chi(X)\\cdot\\chi(Y)$",
  "d": [
   "$\\chi(X\\times Y)=\\chi(X)+\\chi(Y)$",
   "$\\chi(X\\times Y)=\\chi(X)-\\chi(Y)$",
   "No general formula"
  ],
  "why": "Euler characteristic is multiplicative under products, by the Künneth formula or direct CW-cell counting.",
  "subj": "euler-characteristic",
  "diff": 2
 },
 {
  "space": "a connected sum $\\Sigma_g\\#\\Sigma_h$ of orientable surfaces",
  "q": "How does $\\chi(\\Sigma_g\\#\\Sigma_h)$ relate to $\\chi(\\Sigma_g)$ and $\\chi(\\Sigma_h)$?",
  "a": "$\\chi(\\Sigma_g\\#\\Sigma_h)=\\chi(\\Sigma_g)+\\chi(\\Sigma_h)-2$",
  "d": [
   "$\\chi(\\Sigma_g\\#\\Sigma_h)=\\chi(\\Sigma_g)+\\chi(\\Sigma_h)$",
   "$\\chi(\\Sigma_g\\#\\Sigma_h)=\\chi(\\Sigma_g)\\cdot\\chi(\\Sigma_h)$",
   "$\\chi(\\Sigma_g\\#\\Sigma_h)=\\chi(\\Sigma_g)-\\chi(\\Sigma_h)$"
  ],
  "why": "Connect sum removes an open disk (Euler characteristic $1$) from each summand and glues along the resulting circle boundary, so $\\chi(\\Sigma_g\\#\\Sigma_h)=(\\chi(\\Sigma_g)-1)+(\\chi(\\Sigma_h)-1)=\\chi(\\Sigma_g)+\\chi(\\Sigma_h)-2$, consistent with $\\chi(\\Sigma_{g+h})=2-2(g+h)$.",
  "subj": "euler-characteristic",
  "diff": 4
 },
 {
  "space": "the Gauss–Bonnet theorem",
  "q": "Gauss–Bonnet relates $\\chi$ of a closed surface to the integral of what?",
  "a": "Gaussian curvature: $\\int_M K\\,dA = 2\\pi\\chi(M)$",
  "d": [
   "Mean curvature",
   "The volume of $M$",
   "The first Betti number directly, with no integral"
  ],
  "why": "This is the global Gauss–Bonnet theorem, linking differential geometry (curvature) to the topological invariant $\\chi$.",
  "subj": "euler-characteristic",
  "diff": 3
 },
 {
  "space": "a finite graph (1-complex) $G$",
  "q": "What is $\\chi(G)$ for a connected graph with $V$ vertices and $E$ edges?",
  "a": "$V-E$",
  "d": [
   "$V+E$",
   "$E-V$",
   "$V\\cdot E$"
  ],
  "why": "$\\chi=c_0-c_1=V-E$ directly from the CW cell count.",
  "subj": "euler-characteristic",
  "diff": 1
 },
 {
  "space": "the Hopf fibration",
  "q": "The Hopf fibration $S^1\\to S^3\\to S^2$ has which fiber, base, and total space (in that order)?",
  "a": "Fiber $S^1$, total space $S^3$, base $S^2$",
  "d": [
   "Fiber $S^3$, total space $S^1$, base $S^2$",
   "Fiber $S^2$, total space $S^3$, base $S^1$",
   "Fiber $S^1$, total space $S^2$, base $S^3$"
  ],
  "why": "The Hopf map $S^3\\to S^2$ has fiber $S^1$ (the circle action via complex scalar multiplication on $\\mathbb{C}^2\\supset S^3$).",
  "subj": "fiber-bundles",
  "diff": 2
 },
 {
  "space": "the tangent bundle of $S^2$",
  "q": "What is the structure group of the tangent bundle of an orientable surface?",
  "a": "$SO(2)$ (or equivalently $GL_2^+(\\mathbb{R})$, reducible to $SO(2)$)",
  "d": [
   "$O(2)$",
   "$GL_2(\\mathbb{R})$ with no reduction possible",
   "$U(1)$ acting trivially"
  ],
  "why": "For an orientable surface, the tangent bundle's structure group reduces from $GL_2(\\mathbb{R})$ to $SO(2)$ via a choice of orientation and Riemannian metric.",
  "subj": "fiber-bundles",
  "diff": 3
 },
 {
  "space": "vector bundles over a contractible base",
  "q": "Every vector bundle over a contractible CW base is what?",
  "a": "Trivial (isomorphic to a product bundle)",
  "d": [
   "Never trivial unless rank $1$",
   "Trivial only if the base is compact",
   "Determined uniquely by the fiber dimension and nothing else, but still possibly nontrivial"
  ],
  "why": "Vector bundles are classified by homotopy classes of maps to a classifying space, and any such map from a contractible space is homotopic to a constant, giving the trivial bundle.",
  "subj": "fiber-bundles",
  "diff": 3
 },
 {
  "space": "classifying spaces",
  "q": "Real rank-$n$ vector bundles over a CW complex $X$ are classified by homotopy classes of maps into which space?",
  "a": "$BO(n)$",
  "d": [
   "$O(n)$ itself",
   "$BU(n)$",
   "$\\mathbb{RP}^n$"
  ],
  "why": "Isomorphism classes of rank-$n$ real vector bundles over $X$ correspond bijectively to $[X,BO(n)]$, by the universal property of the classifying space.",
  "subj": "fiber-bundles",
  "diff": 3
 },
 {
  "space": "the Möbius bundle over $S^1$",
  "q": "Is the Möbius line bundle over $S^1$ (real rank 1) trivial?",
  "a": "No",
  "d": [
   "Yes",
   "Trivial only as a topological bundle but not smooth",
   "Depends on the basepoint"
  ],
  "why": "The Möbius bundle is the canonical nontrivial real line bundle over $S^1$, classified by the nontrivial element of $H^1(S^1;\\mathbb{Z}/2)$ (first Stiefel–Whitney class).",
  "subj": "fiber-bundles",
  "diff": 2
 },
 {
  "space": "the long exact sequence of a fiber bundle $F\\to E\\to B$",
  "q": "If $F$ and $B$ are both simply connected with known homotopy groups, what tool typically computes $\\pi_*(E)$?",
  "a": "The long exact sequence in homotopy groups of the fibration",
  "d": [
   "The Mayer–Vietoris sequence only",
   "There is no general tool",
   "The Euler class alone determines all of $\\pi_*(E)$"
  ],
  "why": "The long exact homotopy sequence of a fibration is the standard tool relating $\\pi_*(F),\\pi_*(E),\\pi_*(B)$.",
  "subj": "fiber-bundles",
  "diff": 2
 },
 {
  "space": "principal $G$-bundles",
  "q": "A principal $G$-bundle $P\\to B$ has fiber isomorphic to what, with $G$ acting how?",
  "a": "Fiber $\\cong G$, with $G$ acting freely and transitively (simply transitively) on each fiber",
  "d": [
   "Fiber is a point, with $G$ acting trivially",
   "Fiber is $B$ itself",
   "Fiber is $G/H$ for an arbitrary subgroup $H$ in all cases"
  ],
  "why": "This is the defining property of a principal bundle: fibers are $G$-torsors, i.e. $G$ acts freely and transitively.",
  "subj": "fiber-bundles",
  "diff": 3
 },
 {
  "space": "associated bundles",
  "q": "Given a principal $G$-bundle $P$ and a representation $G\\to GL(V)$, the associated vector bundle is constructed as what?",
  "a": "$P\\times_G V$ (a quotient of $P\\times V$ by the diagonal $G$-action)",
  "d": [
   "$P\\times V$ with no quotient",
   "$\\mathrm{Hom}(P,V)$",
   "$V$ itself, independent of $P$"
  ],
  "why": "The associated bundle construction $P\\times_G V$ is the standard way to build vector bundles from principal bundles and representations.",
  "subj": "fiber-bundles",
  "diff": 4
 },
 {
  "space": "the circle $S^1$",
  "q": "What is $\\pi_1(S^1)$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\times\\mathbb{Z}$"
  ],
  "why": "$S^1$ is a $K(\\mathbb{Z},1)$; its universal cover is $\\mathbb{R}$ with $\\mathbb{Z}$ acting by translation.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "the torus $T^2 = S^1\\times S^1$",
  "q": "What is $\\pi_1(T^2)$?",
  "a": "$\\mathbb{Z}\\times\\mathbb{Z}$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}*\\mathbb{Z}$",
   "$0$"
  ],
  "why": "$\\pi_1$ of a product is the product of $\\pi_1$'s: $\\pi_1(S^1\\times S^1)=\\mathbb{Z}\\times\\mathbb{Z}$.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "the figure-eight space $S^1\\vee S^1$",
  "q": "What is $\\pi_1(S^1\\vee S^1)$?",
  "a": "$\\mathbb{Z}*\\mathbb{Z}$ (free group of rank 2)",
  "d": [
   "$\\mathbb{Z}\\times\\mathbb{Z}$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2*\\mathbb{Z}/2$"
  ],
  "why": "By the Seifert–van Kampen theorem, $\\pi_1$ of a wedge of circles is the free group on that many generators.",
  "subj": "fundamental-group",
  "diff": 2
 },
 {
  "space": "real projective plane $\\mathbb{RP}^2$",
  "q": "What is $\\pi_1(\\mathbb{RP}^2)$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$\\mathbb{Z}$",
   "$0$",
   "$\\mathbb{Z}/4$"
  ],
  "why": "$S^2\\to\\mathbb{RP}^2$ is the universal double cover, so $\\pi_1(\\mathbb{RP}^2)\\cong\\mathbb{Z}/2$.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "the Klein bottle $K$",
  "q": "What is $\\pi_1(K)$?",
  "a": "$\\langle a,b \\mid abab^{-1}\\rangle$",
  "d": [
   "$\\langle a,b\\mid aba^{-1}b^{-1}\\rangle$",
   "$\\mathbb{Z}\\times\\mathbb{Z}/2$",
   "$\\mathbb{Z}*\\mathbb{Z}/2$"
  ],
  "why": "The standard CW structure on the Klein bottle has one relator $abab^{-1}$, giving this non-abelian presentation (the torus relator $aba^{-1}b^{-1}$ would give $\\mathbb{Z}^2$ instead).",
  "subj": "fundamental-group",
  "diff": 3
 },
 {
  "space": "a genus-2 closed orientable surface $\\Sigma_2$",
  "q": "What is the standard presentation of $\\pi_1(\\Sigma_2)$?",
  "a": "$\\langle a_1,b_1,a_2,b_2 \\mid [a_1,b_1][a_2,b_2]\\rangle$",
  "d": [
   "$\\langle a_1,b_1,a_2,b_2\\mid a_1b_1a_2b_2\\rangle$",
   "$\\mathbb{Z}^4$",
   "free group of rank 4"
  ],
  "why": "A genus-$g$ surface has presentation with $2g$ generators and one relator, the product of $g$ commutators.",
  "subj": "fundamental-group",
  "diff": 3
 },
 {
  "space": "$S^2$",
  "q": "What is $\\pi_1(S^2)$?",
  "a": "$0$ (trivial group)",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\times\\mathbb{Z}$"
  ],
  "why": "$S^2$ is simply connected: any loop can be homotoped off a point and contracted, since $n\\geq 2$ spheres are simply connected.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "$\\mathbb{R}^n$ for $n\\geq 1$",
  "q": "What is $\\pi_1(\\mathbb{R}^n)$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "depends on $n$",
   "undefined"
  ],
  "why": "$\\mathbb{R}^n$ is convex, hence contractible, hence simply connected for every $n$.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "the complement $\\mathbb{R}^3\\setminus(\\text{unknot})$",
  "q": "What is $\\pi_1$ of the complement of an unknotted circle in $\\mathbb{R}^3$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}*\\mathbb{Z}$",
   "$\\mathbb{Z}\\times\\mathbb{Z}$"
  ],
  "why": "The complement of an unknot deformation retracts to a circle linking it, by an explicit Seifert-surface argument (it is homotopy equivalent to $S^1$).",
  "subj": "fundamental-group",
  "diff": 3
 },
 {
  "space": "the trefoil knot complement",
  "q": "Is $\\pi_1$ of the trefoil complement abelian?",
  "a": "No — it has presentation $\\langle a,b\\mid a^2=b^3\\rangle$",
  "d": [
   "Yes, it is $\\mathbb{Z}$",
   "Yes, it is $\\mathbb{Z}\\times\\mathbb{Z}$",
   "No — it is finite"
  ],
  "why": "The trefoil group is the well-known torus-knot group $\\langle a,b\\mid a^2=b^3\\rangle$, nonabelian and infinite (it surjects onto the symmetric group $S_3$, distinguishing it from the unknot).",
  "subj": "fundamental-group",
  "diff": 4
 },
 {
  "space": "$\\mathbb{C}^*=\\mathbb{C}\\setminus\\{0\\}$",
  "q": "What is $\\pi_1(\\mathbb{C}^*)$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\times\\mathbb{Z}$"
  ],
  "why": "$\\mathbb{C}^*$ deformation retracts onto the unit circle $S^1$.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "a connected sum $\\Sigma_2 \\# \\Sigma_3$",
  "q": "The fundamental group of a connect sum of two closed surfaces with nontrivial $\\pi_1$ is computed via which theorem?",
  "a": "Seifert–van Kampen, giving an amalgamated free product over $\\mathbb{Z}$",
  "d": [
   "Mayer–Vietoris, giving a direct sum",
   "The Hurewicz theorem",
   "Poincaré duality"
  ],
  "why": "Removing a disk from each and gluing along the resulting circle boundary realizes $\\pi_1(\\Sigma_g\\#\\Sigma_h)$ as $\\pi_1(\\Sigma_g)*_{\\mathbb{Z}}\\pi_1(\\Sigma_h)$ via van Kampen.",
  "subj": "fundamental-group",
  "diff": 4
 },
 {
  "space": "$SO(3)$",
  "q": "What is $\\pi_1(SO(3))$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$0$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/3$"
  ],
  "why": "$SO(3)\\cong \\mathbb{RP}^3$ topologically, and the universal double cover is $SU(2)\\cong S^3$, giving $\\pi_1(SO(3))=\\mathbb{Z}/2$ — this is the famous \"belt trick\" / spin phenomenon.",
  "subj": "fundamental-group",
  "diff": 3
 },
 {
  "space": "the lens space $L(p,q)$",
  "q": "What is $\\pi_1(L(p,q))$ for the lens space?",
  "a": "$\\mathbb{Z}/p$",
  "d": [
   "$\\mathbb{Z}/q$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/p\\times\\mathbb{Z}/q$"
  ],
  "why": "$L(p,q)=S^3/(\\mathbb{Z}/p)$ where $\\mathbb{Z}/p$ acts freely, so $S^3$ is the universal cover and $\\pi_1(L(p,q))=\\mathbb{Z}/p$ regardless of $q$.",
  "subj": "fundamental-group",
  "diff": 4
 },
 {
  "space": "a wedge $\\mathbb{RP}^2\\vee \\mathbb{RP}^2$",
  "q": "What is $\\pi_1(\\mathbb{RP}^2\\vee\\mathbb{RP}^2)$?",
  "a": "$\\mathbb{Z}/2 * \\mathbb{Z}/2$",
  "d": [
   "$\\mathbb{Z}/2\\times\\mathbb{Z}/2$",
   "$\\mathbb{Z}/4$",
   "$\\mathbb{Z}*\\mathbb{Z}$"
  ],
  "why": "Van Kampen applied to a wedge gives the free product of the individual $\\pi_1$'s, here $\\mathbb{Z}/2*\\mathbb{Z}/2$ (infinite dihedral).",
  "subj": "fundamental-group",
  "diff": 3
 },
 {
  "space": "$S^n$ for $n\\geq 1$",
  "q": "What is $H_k(S^n;\\mathbb{Z})$ for $0<k<n$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}^k$"
  ],
  "why": "The reduced homology of $S^n$ is concentrated in degrees $0$ and $n$; all intermediate groups vanish.",
  "subj": "homology",
  "diff": 1
 },
 {
  "space": "$S^n$ for $n\\geq 1$",
  "q": "What is $H_n(S^n;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$"
  ],
  "why": "$S^n$ has a CW structure with one $0$-cell and one $n$-cell, so $H_n(S^n)=\\mathbb{Z}$, generated by the fundamental class.",
  "subj": "homology",
  "diff": 1
 },
 {
  "space": "the torus $T^2$",
  "q": "What is $H_1(T^2;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}\\oplus\\mathbb{Z}$",
  "d": [
   "$\\mathbb{Z}$",
   "$0$",
   "$\\mathbb{Z}/2\\oplus\\mathbb{Z}/2$"
  ],
  "why": "$H_1(T^2)$ is the abelianization of $\\pi_1(T^2)=\\mathbb{Z}^2$, which is already abelian, giving $\\mathbb{Z}^2$.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "$\\mathbb{RP}^2$",
  "q": "What is $H_1(\\mathbb{RP}^2;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$0$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/4$"
  ],
  "why": "$H_1(\\mathbb{RP}^2)$ is the abelianization of $\\pi_1(\\mathbb{RP}^2)=\\mathbb{Z}/2$, which is already $\\mathbb{Z}/2$.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "$\\mathbb{RP}^2$",
  "q": "What is $H_2(\\mathbb{RP}^2;\\mathbb{Z})$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$"
  ],
  "why": "$\\mathbb{RP}^2$ is nonorientable, so its top homology with $\\mathbb{Z}$-coefficients vanishes (no fundamental class over $\\mathbb{Z}$).",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "$\\mathbb{RP}^3$",
  "q": "What is $H_3(\\mathbb{RP}^3;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$"
  ],
  "why": "$\\mathbb{RP}^3$ is orientable (odd-dimensional real projective spaces are orientable), so it has a $\\mathbb{Z}$ fundamental class in top degree.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "$\\mathbb{RP}^n$ real projective space",
  "q": "For $0<k<n$, what is $H_k(\\mathbb{RP}^n;\\mathbb{Z})$ when $k$ is odd?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$0$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$"
  ],
  "why": "The integral homology of $\\mathbb{RP}^n$ alternates with $k$: $H_k(\\mathbb{RP}^n;\\mathbb{Z})=\\mathbb{Z}/2$ for $k$ odd with $0<k<n$, and $0$ for $k$ even with $0<k<n$, computed from the standard cellular chain complex with boundary maps alternating between $0$ and multiplication by $2$.",
  "subj": "homology",
  "diff": 4
 },
 {
  "space": "the Klein bottle $K$",
  "q": "What is $H_1(K;\\mathbb{Z})$ for the Klein bottle?",
  "a": "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$",
  "d": [
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$",
   "$\\mathbb{Z}/2\\oplus\\mathbb{Z}/2$",
   "$\\mathbb{Z}$"
  ],
  "why": "Abelianizing $\\langle a,b\\mid abab^{-1}\\rangle$ gives relation $2a=0$ in additive notation, so $H_1(K)=\\mathbb{Z}\\langle b\\rangle \\oplus \\mathbb{Z}/2\\langle a\\rangle$.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "the Klein bottle $K$",
  "q": "What is $H_2(K;\\mathbb{Z})$ for the Klein bottle?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$"
  ],
  "why": "$K$ is a nonorientable closed surface, so its top integral homology vanishes, matching $H_2(K;\\mathbb{Z})=0$.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "a genus-$g$ orientable surface $\\Sigma_g$",
  "q": "What is $H_1(\\Sigma_g;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}^{2g}$",
  "d": [
   "$\\mathbb{Z}^{g}$",
   "$\\mathbb{Z}^{2g}\\oplus\\mathbb{Z}/2$",
   "$\\mathbb{Z}^{g}\\oplus \\mathbb{Z}/2^g$"
  ],
  "why": "Abelianizing the surface group $\\langle a_i,b_i\\mid \\prod[a_i,b_i]\\rangle$ kills the single commutator relator, leaving the free abelian group on the $2g$ generators.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "complex projective space $\\mathbb{CP}^n$",
  "q": "What is $H_{2k}(\\mathbb{CP}^n;\\mathbb{Z})$ for $0\\leq k\\leq n$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$"
  ],
  "why": "$\\mathbb{CP}^n$ has a CW structure with exactly one cell in each even dimension $0,2,4,\\dots,2n$ and none in odd dimensions, so $H_{2k}=\\mathbb{Z}$ and $H_{2k+1}=0$.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "complex projective space $\\mathbb{CP}^n$",
  "q": "What is $H_{odd}(\\mathbb{CP}^n;\\mathbb{Z})$, i.e. homology in odd degree?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "Depends on $n$"
  ],
  "why": "The CW structure of $\\mathbb{CP}^n$ has cells only in even dimensions, forcing all odd-degree homology to vanish.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "the wedge $S^1\\vee S^2$",
  "q": "What is $H_2(S^1\\vee S^2;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$",
   "$\\mathbb{Z}/2$"
  ],
  "why": "Reduced homology of a wedge is the direct sum of reduced homologies: $\\tilde H_2(S^1\\vee S^2)=\\tilde H_2(S^1)\\oplus\\tilde H_2(S^2)=0\\oplus\\mathbb{Z}=\\mathbb{Z}$.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "a Moore space $M(\\mathbb{Z}/2,1)$",
  "q": "What is $H_1(M(\\mathbb{Z}/2,1);\\mathbb{Z})$ by definition of a Moore space?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$0$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2\\oplus\\mathbb{Z}/2$"
  ],
  "why": "A Moore space $M(G,n)$ is defined to have $\\tilde H_n = G$ and all other reduced homology trivial; $M(\\mathbb{Z}/2,1)$ can be realized as $\\mathbb{RP}^2$.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "the lens space $L(p,1)=S^3/(\\mathbb{Z}/p)$",
  "q": "What is $H_1(L(p,1);\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}/p$",
  "d": [
   "$\\mathbb{Z}$",
   "$0$",
   "$\\mathbb{Z}/p\\oplus\\mathbb{Z}/p$"
  ],
  "why": "$H_1=\\pi_1^{ab}=(\\mathbb{Z}/p)^{ab}=\\mathbb{Z}/p$ since $\\pi_1(L(p,1))=\\mathbb{Z}/p$ is already abelian.",
  "subj": "homology",
  "diff": 4
 },
 {
  "space": "a finite CW complex $X$",
  "q": "The rank of $H_n(X;\\mathbb{Z})$ (mod torsion) is called what?",
  "a": "The $n$-th Betti number",
  "d": [
   "The Euler characteristic",
   "The genus",
   "The fundamental class"
  ],
  "why": "By definition, the $n$-th Betti number $b_n$ is the rank of the free part of $H_n(X;\\mathbb{Z})$, equivalently $\\dim_\\mathbb{Q} H_n(X;\\mathbb{Q})$.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "a short exact sequence of chain complexes",
  "q": "A short exact sequence of chain complexes induces what on homology?",
  "a": "A long exact sequence in homology",
  "d": [
   "A short exact sequence in homology, always",
   "No relation in general",
   "An isomorphism on homology"
  ],
  "why": "This is the long exact sequence of homology (zig-zag lemma), connecting the homologies via connecting homomorphisms.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "$S^n$ for $k<n$",
  "q": "What is $\\pi_k(S^n)$ for $k<n$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "Depends on $k$ and $n$ in general"
  ],
  "why": "By cellular approximation, any map $S^k\\to S^n$ with $k<n$ is homotopic to a non-surjective map, hence to a constant map (since $S^n$ minus a point is contractible).",
  "subj": "homotopy-groups",
  "diff": 2
 },
 {
  "space": "$S^n$",
  "q": "What is $\\pi_n(S^n)$ for $n\\geq1$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\times\\mathbb{Z}$"
  ],
  "why": "$\\pi_n(S^n)\\cong\\mathbb{Z}$, generated by the identity map, by Hurewicz / degree theory.",
  "subj": "homotopy-groups",
  "diff": 1
 },
 {
  "space": "$S^2$",
  "q": "What is $\\pi_3(S^2)$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$"
  ],
  "why": "$\\pi_3(S^2)\\cong\\mathbb{Z}$, generated by the Hopf map $S^3\\to S^2$ — a classical and famous \"unstable\" phenomenon showing $\\pi_k(S^n)$ need not vanish for $k>n$.",
  "subj": "homotopy-groups",
  "diff": 3
 },
 {
  "space": "$S^3$",
  "q": "What is $\\pi_4(S^3)$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$\\mathbb{Z}$",
   "$0$",
   "$\\mathbb{Z}/4$"
  ],
  "why": "$\\pi_4(S^3)\\cong\\mathbb{Z}/2$; this is part of the stable homotopy groups of spheres pattern, where $\\pi_{n+1}(S^n)=\\mathbb{Z}/2$ for $n\\geq3$.",
  "subj": "homotopy-groups",
  "diff": 4
 },
 {
  "space": "general spheres",
  "q": "The groups $\\pi_k(S^n)$ for $k>n$ are generally what, in contrast to $\\pi_n(S^n)=\\mathbb{Z}$?",
  "a": "Finite (for $k>n$, except the case $n$ even and $k=2n-1$)",
  "d": [
   "Always infinite cyclic",
   "Always trivial",
   "Always isomorphic to $\\pi_n(S^n)$"
  ],
  "why": "By a theorem of Serre, $\\pi_k(S^n)$ is finite for $k>n$ except when $n$ is even and $k=2n-1$, where there is a $\\mathbb{Z}$ summand related to the Hopf invariant / Euler class.",
  "subj": "homotopy-groups",
  "diff": 5
 },
 {
  "space": "$\\Omega S^n$, the loop space",
  "q": "What relation does $\\pi_k(\\Omega X)$ have to $\\pi_{k+1}(X)$?",
  "a": "$\\pi_k(\\Omega X)\\cong \\pi_{k+1}(X)$",
  "d": [
   "$\\pi_k(\\Omega X)\\cong \\pi_{k-1}(X)$",
   "$\\pi_k(\\Omega X)\\cong \\pi_k(X)$",
   "No general relation"
  ],
  "why": "This is the standard loop space adjunction fact: $\\pi_k(\\Omega X)\\cong \\pi_{k+1}(X)$ for all $k\\geq 0$.",
  "subj": "homotopy-groups",
  "diff": 2
 },
 {
  "space": "a simply connected CW complex $X$",
  "q": "The Hurewicz theorem says the first nonvanishing $\\pi_n(X)$ (for $n\\geq2$, $X$ simply connected) is isomorphic to what?",
  "a": "$H_n(X;\\mathbb{Z})$, the first nonvanishing homology group",
  "d": [
   "$H_1(X;\\mathbb{Z})$ always",
   "$\\pi_1(X)$",
   "$H_n(X;\\mathbb{Z}/2)$"
  ],
  "why": "The Hurewicz theorem: if $X$ is $(n-1)$-connected ($n\\geq2$), then $\\pi_n(X)\\cong H_n(X;\\mathbb{Z})$ via the Hurewicz map.",
  "subj": "homotopy-groups",
  "diff": 3
 },
 {
  "space": "$\\mathbb{RP}^n$ for $n\\geq2$",
  "q": "What is $\\pi_k(\\mathbb{RP}^n)$ for $2\\leq k\\leq n$, compared to $\\pi_k(S^n)$?",
  "a": "$\\pi_k(\\mathbb{RP}^n)\\cong\\pi_k(S^n)$ for $k\\geq2$",
  "d": [
   "Always $0$",
   "Always $\\mathbb{Z}/2$",
   "No relation to $\\pi_k(S^n)$"
  ],
  "why": "Since $S^n\\to\\mathbb{RP}^n$ is a covering map, it induces isomorphisms on all higher homotopy groups $\\pi_k$ for $k\\geq2$.",
  "subj": "homotopy-groups",
  "diff": 3
 },
 {
  "space": "the long exact sequence of a fibration $F\\to E\\to B$",
  "q": "The long exact homotopy sequence of a fibration relates which groups?",
  "a": "$\\cdots\\to\\pi_k(F)\\to\\pi_k(E)\\to\\pi_k(B)\\to\\pi_{k-1}(F)\\to\\cdots$",
  "d": [
   "$\\cdots\\to\\pi_k(B)\\to\\pi_k(E)\\to\\pi_k(F)\\to\\cdots$ with no connecting map",
   "It only relates $\\pi_1$ groups",
   "It computes $H_k(E)$ instead"
  ],
  "why": "This is the standard long exact sequence in homotopy groups associated to a Serre fibration.",
  "subj": "homotopy-groups",
  "diff": 3
 },
 {
  "space": "stable homotopy groups of spheres $\\pi_k^s$",
  "q": "What is the first stable homotopy group of spheres $\\pi_0^s$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}/24$"
  ],
  "why": "$\\pi_0^s=\\mathbb{Z}$, generated by the identity map (degree), matching $\\pi_n(S^n)=\\mathbb{Z}$ stably.",
  "subj": "homotopy-groups",
  "diff": 4
 },
 {
  "space": "stable homotopy groups of spheres $\\pi_k^s$",
  "q": "What is $\\pi_1^s$, the first stable stem?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$\\mathbb{Z}$",
   "$0$",
   "$\\mathbb{Z}/24$"
  ],
  "why": "$\\pi_1^s\\cong\\mathbb{Z}/2$, generated by the (stable) Hopf map $\\eta$.",
  "subj": "homotopy-groups",
  "diff": 5
 },
 {
  "space": "stable homotopy groups of spheres $\\pi_k^s$",
  "q": "What is $\\pi_3^s$, the third stable stem?",
  "a": "$\\mathbb{Z}/24$",
  "d": [
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}$",
   "$0$"
  ],
  "why": "$\\pi_3^s\\cong\\mathbb{Z}/24$, generated by $\\nu$, with the order $24$ famously linked to the order of the image of the J-homomorphism and to exotic framings.",
  "subj": "homotopy-groups",
  "diff": 5
 },
 {
  "space": "Whitehead's theorem",
  "q": "Whitehead's theorem states that a map inducing isomorphisms on all $\\pi_k$ between which kind of spaces is a homotopy equivalence?",
  "a": "CW complexes",
  "d": [
   "Any topological spaces",
   "Only simply connected spaces",
   "Only compact manifolds"
  ],
  "why": "Whitehead's theorem requires the domain and codomain to have the homotopy type of CW complexes; it fails for general spaces (e.g. the Warsaw circle is a classical counterexample).",
  "subj": "homotopy-groups",
  "diff": 3
 },
 {
  "space": "the cone $CX$ on any space $X$",
  "q": "What is the homotopy type of $CX$, the cone on $X$?",
  "a": "Contractible, for any $X$",
  "d": [
   "Homotopy equivalent to $X$",
   "Homotopy equivalent to $\\Sigma X$",
   "Depends on whether $X$ is connected"
  ],
  "why": "The cone $CX=X\\times[0,1]/(X\\times\\{1\\})$ deformation retracts to the cone point, so it is always contractible.",
  "subj": "homotopy-theory",
  "diff": 1
 },
 {
  "space": "the suspension $\\Sigma S^n$",
  "q": "What is $\\Sigma S^n$ homeomorphic/homotopy equivalent to?",
  "a": "$S^{n+1}$",
  "d": [
   "$S^n\\times S^1$",
   "$S^{n-1}$",
   "$\\mathbb{RP}^{n+1}$"
  ],
  "why": "The suspension of $S^n$ is $S^{n+1}$; this is a basic and frequently-used identity ($\\Sigma S^n\\cong S^{n+1}$).",
  "subj": "homotopy-theory",
  "diff": 2
 },
 {
  "space": "mapping cone $C_f$ of $f:X\\to Y$",
  "q": "The mapping cone $C_f$ fits into which cofiber sequence?",
  "a": "$X\\xrightarrow{f} Y\\to C_f$",
  "d": [
   "$Y\\xrightarrow{f} X\\to C_f$",
   "$C_f\\to X\\to Y$",
   "$X\\to C_f\\to Y$"
  ],
  "why": "By definition $C_f = Y\\cup_f CX$, giving the cofiber sequence $X\\to Y\\to C_f$, extendable to the Puppe sequence.",
  "subj": "homotopy-theory",
  "diff": 3
 },
 {
  "space": "the Puppe sequence",
  "q": "Continuing a cofiber sequence $X\\to Y\\to C_f$, the next term is what?",
  "a": "$\\Sigma X$ (i.e. $X\\to Y\\to C_f\\to \\Sigma X\\to \\Sigma Y\\to\\cdots$)",
  "d": [
   "$\\Omega X$",
   "$C_f$ again",
   "$X\\times Y$"
  ],
  "why": "The Puppe sequence continues with suspensions: $C_f\\to \\Sigma X\\to \\Sigma Y\\to \\Sigma C_f\\to\\cdots$.",
  "subj": "homotopy-theory",
  "diff": 4
 },
 {
  "space": "two homotopy equivalent CW complexes",
  "q": "If $X\\simeq Y$ (homotopy equivalent), what can be said about $H_*(X)$ and $H_*(Y)$?",
  "a": "They are isomorphic in every degree",
  "d": [
   "They may differ",
   "Only $H_0$ must agree",
   "They are isomorphic only if $X,Y$ are simply connected"
  ],
  "why": "Homology is a homotopy invariant: homotopy equivalences induce isomorphisms on all homology groups.",
  "subj": "homotopy-theory",
  "diff": 1
 },
 {
  "space": "a contractible space $X$",
  "q": "What are all the homotopy/homology groups of a contractible space (beyond $\\pi_0,H_0$)?",
  "a": "All trivial: $\\pi_k=0$ for $k\\geq1$ and $\\tilde H_k=0$ for all $k$",
  "d": [
   "$\\pi_1$ can be nontrivial",
   "$H_1$ is always $\\mathbb{Z}$",
   "Depends on the specific contractible space"
  ],
  "why": "Contractibility means homotopy equivalence to a point, so all higher homotopy and reduced homology groups vanish, by homotopy invariance.",
  "subj": "homotopy-theory",
  "diff": 1
 },
 {
  "space": "CW approximation",
  "q": "CW approximation theorem says every space is weakly homotopy equivalent to what?",
  "a": "A CW complex",
  "d": [
   "A manifold",
   "A simplicial complex with the same number of simplices",
   "Itself, trivially"
  ],
  "why": "Every topological space admits a CW approximation: a CW complex $Z$ with a map $Z\\to X$ inducing isomorphisms on all homotopy groups.",
  "subj": "homotopy-theory",
  "diff": 2
 },
 {
  "space": "a homotopy equivalence $f:X\\to Y$",
  "q": "Does a homotopy equivalence need to be a bijection on points?",
  "a": "No",
  "d": [
   "Yes, always",
   "Only if $X,Y$ are compact",
   "Only if $X,Y$ are manifolds"
  ],
  "why": "E.g. $\\mathbb{R}^n\\to \\{0\\}$ is a homotopy equivalence (both are contractible) but certainly not a bijection.",
  "subj": "homotopy-theory",
  "diff": 1
 },
 {
  "space": "the mapping torus of the identity on $X$",
  "q": "The mapping torus of $\\mathrm{id}_X:X\\to X$ is homotopy equivalent / homeomorphic to what?",
  "a": "$X\\times S^1$",
  "d": [
   "$\\Sigma X$",
   "$X$ itself",
   "$X\\vee S^1$"
  ],
  "why": "The mapping torus $M_f=X\\times[0,1]/(x,0)\\sim(f(x),1)$ for $f=\\mathrm{id}$ is exactly $X\\times S^1$.",
  "subj": "homotopy-theory",
  "diff": 3
 },
 {
  "space": "a fibration with contractible base",
  "q": "If $F\\to E\\to B$ is a fibration with $B$ contractible, what is the relation between $E$ and $F$?",
  "a": "$E\\simeq F$ (homotopy equivalent)",
  "d": [
   "$E$ is always contractible",
   "$E\\simeq B$",
   "No relation in general"
  ],
  "why": "A fibration over a contractible base is fiber homotopy equivalent to the trivial fibration $F\\times B\\to B$, hence $E\\simeq F\\times B\\simeq F$.",
  "subj": "homotopy-theory",
  "diff": 4
 },
 {
  "space": "Eilenberg-MacLane spaces $K(G,n)$",
  "q": "A space $K(G,n)$ is characterized by which homotopy groups?",
  "a": "$\\pi_n=G$ and $\\pi_k=0$ for $k\\neq n$",
  "d": [
   "$\\pi_k=G$ for all $k$",
   "$\\pi_1=G$ regardless of $n$",
   "$H_n=G$ but homotopy groups unspecified"
  ],
  "why": "By definition, $K(G,n)$ has a single nonzero homotopy group $\\pi_n\\cong G$ (with $G$ abelian if $n\\geq2$).",
  "subj": "homotopy-theory",
  "diff": 2
 },
 {
  "space": "$K(\\mathbb{Z},1)$",
  "q": "Which familiar space is a $K(\\mathbb{Z},1)$?",
  "a": "$S^1$",
  "d": [
   "$S^2$",
   "$\\mathbb{R}$",
   "$T^2$"
  ],
  "why": "$S^1$ has $\\pi_1=\\mathbb{Z}$ and universal cover $\\mathbb{R}$ contractible, so all higher $\\pi_k=0$, making it a $K(\\mathbb{Z},1)$.",
  "subj": "homotopy-theory",
  "diff": 2
 },
 {
  "space": "$K^0$ of a point",
  "q": "What is $K^0(\\mathrm{pt})$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$"
  ],
  "why": "$K^0(\\mathrm{pt})$ is the Grothendieck group of vector bundles over a point, i.e. of finite-dim vector spaces, which is $\\mathbb{Z}$ (rank).",
  "subj": "k-theory",
  "diff": 2
 },
 {
  "space": "Bott periodicity (complex)",
  "q": "Complex topological K-theory is periodic with what period?",
  "a": "$2$: $KU^n\\cong KU^{n+2}$",
  "d": [
   "$8$",
   "$1$",
   "Not periodic"
  ],
  "why": "Bott periodicity for complex K-theory gives period $2$, reflecting $\\Omega^2 U\\simeq U$ (or $BU\\times\\mathbb{Z}\\simeq \\Omega U$ shifted).",
  "subj": "k-theory",
  "diff": 3
 },
 {
  "space": "Bott periodicity (real)",
  "q": "Real topological K-theory $KO$ is periodic with what period?",
  "a": "$8$",
  "d": [
   "$2$",
   "$4$",
   "$1$"
  ],
  "why": "Real K-theory has period $8$ (the famous Bott song / Clifford algebra periodicity), reflected in the 8-fold pattern of $\\pi_i(O)$.",
  "subj": "k-theory",
  "diff": 4
 },
 {
  "space": "$\\tilde K^0(S^n)$",
  "q": "What is $\\tilde K^0(S^{2n})$ (reduced complex K-theory of an even sphere)?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}^n$"
  ],
  "why": "$\\tilde K^0(S^{2n})\\cong\\mathbb{Z}$, generated by a Bott class; this follows from the Atiyah–Hirzebruch spectral sequence collapsing for spheres.",
  "subj": "k-theory",
  "diff": 4
 },
 {
  "space": "$\\tilde K^0(S^n)$ odd case",
  "q": "What is $\\tilde K^0(S^{2n+1})$ (reduced complex K-theory of an odd sphere)?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}/(2n+1)$"
  ],
  "why": "Every complex vector bundle over an odd sphere is stably trivial, since $S^{2n+1}\\wedge S^1\\simeq S^{2n+2}$ reduces the computation to $\\tilde K^0(S^1)=0$ (no nontrivial complex bundles over $S^1$), and Bott periodicity propagates this vanishing to all odd spheres.",
  "subj": "k-theory",
  "diff": 4
 },
 {
  "space": "the Chern character",
  "q": "The Chern character provides a natural map from K-theory to which cohomology theory (rationally)?",
  "a": "Ordinary (rational) cohomology $H^*(-;\\mathbb{Q})$",
  "d": [
   "Integral cohomology, with no need to rationalize",
   "de Rham cohomology of a different manifold",
   "Stable homotopy groups of spheres"
  ],
  "why": "The Chern character $\\mathrm{ch}:K^0(X)\\to H^{even}(X;\\mathbb{Q})$ is a ring isomorphism after tensoring K-theory with $\\mathbb{Q}$ (for finite CW $X$).",
  "subj": "k-theory",
  "diff": 3
 },
 {
  "space": "algebraic K-theory $K_0$ of a ring",
  "q": "$K_0(R)$ for a ring $R$ is the Grothendieck group of which category?",
  "a": "Finitely generated projective $R$-modules",
  "d": [
   "All $R$-modules",
   "Finitely generated free $R$-modules only, with no group completion",
   "Ideals of $R$"
  ],
  "why": "$K_0(R)$ is defined as the group completion of the monoid of isomorphism classes of finitely generated projective modules under direct sum.",
  "subj": "k-theory",
  "diff": 3
 },
 {
  "space": "$K_0$ of a field",
  "q": "What is $K_0(F)$ for a field $F$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$F^*$",
   "Depends on $F$"
  ],
  "why": "Every finitely generated projective module over a field is free, classified by dimension, so $K_0(F)=\\mathbb{Z}$ for any field $F$.",
  "subj": "k-theory",
  "diff": 2
 },
 {
  "space": "the Atiyah–Hirzebruch spectral sequence",
  "q": "The AHSS computes generalized cohomology $E^*(X)$ starting from which input?",
  "a": "Ordinary cohomology $H^*(X;E^*(\\mathrm{pt}))$, converging to $E^*(X)$",
  "d": [
   "Only $\\pi_*(X)$",
   "Only the Euler characteristic of $X$",
   "Directly $E^*(X)$, with no spectral sequence needed"
  ],
  "why": "The AHSS has $E_2$-page built from ordinary cohomology of $X$ with coefficients in the coefficient groups of the generalized theory $E$, converging to $E^*(X)$.",
  "subj": "k-theory",
  "diff": 4
 },
 {
  "space": "the Adams operations $\\psi^k$",
  "q": "Adams operations $\\psi^k$ on $K^0(X)$ satisfy which composition law?",
  "a": "$\\psi^k\\circ\\psi^l=\\psi^{kl}$",
  "d": [
   "$\\psi^k\\circ\\psi^l=\\psi^{k+l}$",
   "$\\psi^k\\circ\\psi^l=\\psi^k+\\psi^l$",
   "No general composition law"
  ],
  "why": "Adams operations form a commutative family of ring endomorphisms with $\\psi^k\\psi^l=\\psi^{kl}$, derived from the $\\lambda$-ring structure via Newton's identities.",
  "subj": "k-theory",
  "diff": 4
 },
 {
  "space": "the unknot",
  "q": "What is the genus of the unknot (minimal genus of a Seifert surface)?",
  "a": "$0$",
  "d": [
   "$1$",
   "Undefined",
   "Depends on the diagram"
  ],
  "why": "The unknot bounds a disk, which has genus $0$, and this is the minimal possible Seifert surface genus.",
  "subj": "knot-theory",
  "diff": 2
 },
 {
  "space": "the trefoil knot",
  "q": "What is the crossing number of the trefoil knot?",
  "a": "$3$",
  "d": [
   "$1$",
   "$4$",
   "$0$"
  ],
  "why": "The trefoil is the simplest nontrivial knot, with minimal crossing number $3$ (it cannot be drawn with fewer crossings without becoming the unknot).",
  "subj": "knot-theory",
  "diff": 1
 },
 {
  "space": "the Alexander polynomial",
  "q": "The Alexander polynomial of the unknot is what?",
  "a": "$1$",
  "d": [
   "$0$",
   "$t-1$",
   "$t^2+1$"
  ],
  "why": "By convention/normalization, the unknot has trivial Alexander polynomial $\\Delta(t)=1$.",
  "subj": "knot-theory",
  "diff": 3
 },
 {
  "space": "the Jones polynomial",
  "q": "The Jones polynomial can distinguish the trefoil from its mirror image, illustrating that the Jones polynomial detects what?",
  "a": "Chirality (the trefoil is not amphichiral)",
  "d": [
   "Nothing beyond the Alexander polynomial",
   "Only the crossing number",
   "Only whether the knot is the unknot"
  ],
  "why": "Unlike the Alexander polynomial (which cannot distinguish a knot from its mirror), the Jones polynomial of the trefoil differs from that of its mirror image, showing the trefoil is chiral.",
  "subj": "knot-theory",
  "diff": 4
 },
 {
  "space": "connected sum of knots",
  "q": "Is the connected sum operation on knots commutative?",
  "a": "Yes",
  "d": [
   "No",
   "Only for the unknot",
   "Only for prime knots"
  ],
  "why": "Knot connected sum is both commutative and associative, making the set of knots under $\\#$ a commutative monoid with the unknot as identity.",
  "subj": "knot-theory",
  "diff": 2
 },
 {
  "space": "prime knots",
  "q": "A knot is called prime if it cannot be expressed as what?",
  "a": "A nontrivial connected sum of two knots",
  "d": [
   "A connected sum with the unknot",
   "A link with more than one component",
   "Any sum at all, including with the unknot"
  ],
  "why": "Prime knots are the \"irreducible\" building blocks under connected sum, analogous to prime numbers under multiplication.",
  "subj": "knot-theory",
  "diff": 2
 },
 {
  "space": "the figure-eight knot",
  "q": "Is the figure-eight knot amphichiral (equivalent to its mirror image)?",
  "a": "Yes",
  "d": [
   "No",
   "This is unknown/open",
   "Only up to concordance, not isotopy"
  ],
  "why": "The figure-eight knot is a classical example of an amphichiral knot — it is isotopic to its own mirror image.",
  "subj": "knot-theory",
  "diff": 4
 },
 {
  "space": "linking number",
  "q": "The linking number of two disjoint unknotted, unlinked circles in $\\mathbb{R}^3$ is what?",
  "a": "$0$",
  "d": [
   "$1$",
   "Undefined",
   "Depends on orientation only, never $0$"
  ],
  "why": "Unlinked circles bound disjoint disks, giving signed crossing count $0$ for the linking number.",
  "subj": "knot-theory",
  "diff": 2
 },
 {
  "space": "knot complements and the Gordon–Luecke theorem",
  "q": "The Gordon–Luecke theorem states that knots are determined (up to mirror image) by what?",
  "a": "Their complements in $S^3$",
  "d": [
   "Their Alexander polynomial",
   "Their crossing number",
   "Their genus alone"
  ],
  "why": "Gordon–Luecke (1989) proved that two knots in $S^3$ with homeomorphic complements are equivalent (up to taking mirror images) — knots are determined by their complements.",
  "subj": "knot-theory",
  "diff": 5
 },
 {
  "space": "$U(1)$",
  "q": "What familiar space is the Lie group $U(1)$?",
  "a": "$S^1$",
  "d": [
   "$\\mathbb{R}$",
   "$S^3$",
   "A point"
  ],
  "why": "$U(1)$ consists of unit complex numbers, which as a topological space is exactly the circle $S^1$.",
  "subj": "lie-groups",
  "diff": 1
 },
 {
  "space": "$SU(2)$",
  "q": "What familiar space is the Lie group $SU(2)$?",
  "a": "$S^3$",
  "d": [
   "$S^2$",
   "$\\mathbb{RP}^3$",
   "$T^3$"
  ],
  "why": "$SU(2)$ consists of unit quaternions, identifying it with $S^3\\subset\\mathbb{H}$.",
  "subj": "lie-groups",
  "diff": 2
 },
 {
  "space": "$SO(3)$ vs $SU(2)$",
  "q": "What is the relationship between $SO(3)$ and $SU(2)$?",
  "a": "$SU(2)$ is the universal double cover of $SO(3)$",
  "d": [
   "They are isomorphic as Lie groups",
   "$SO(3)$ double covers $SU(2)$",
   "They have no relation"
  ],
  "why": "There is a surjective 2-to-1 homomorphism $SU(2)\\to SO(3)$ with kernel $\\{\\pm I\\}$, and since $SU(2)\\cong S^3$ is simply connected, it is the universal cover.",
  "subj": "lie-groups",
  "diff": 3
 },
 {
  "space": "$\\pi_1$ of compact Lie groups",
  "q": "What is $\\pi_1(SO(n))$ for $n\\geq3$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$0$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/n$"
  ],
  "why": "For $n\\geq3$, $SO(n)$ has fundamental group $\\mathbb{Z}/2$, with universal cover the spin group $\\mathrm{Spin}(n)$.",
  "subj": "lie-groups",
  "diff": 3
 },
 {
  "space": "the maximal torus",
  "q": "Every compact connected Lie group $G$ has which key structural feature used in representation theory?",
  "a": "A maximal torus $T\\subset G$, unique up to conjugation",
  "d": [
   "A unique minimal torus",
   "No subgroup isomorphic to a torus in general",
   "A unique normal abelian subgroup equal to $G$ itself"
  ],
  "why": "The maximal torus theorem states every compact connected Lie group has a maximal torus, and all maximal tori are conjugate.",
  "subj": "lie-groups",
  "diff": 3
 },
 {
  "space": "$\\pi_3$ of compact simple Lie groups",
  "q": "For any compact simple Lie group $G$, what is $\\pi_3(G)$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "Depends heavily on $G$, with no uniform answer"
  ],
  "why": "A standard fact: $\\pi_3(G)\\cong\\mathbb{Z}$ for every compact simple Lie group, related to the generator detected by the Killing form / level in WZW models.",
  "subj": "lie-groups",
  "diff": 4
 },
 {
  "space": "$\\pi_2$ of compact Lie groups",
  "q": "What is $\\pi_2(G)$ for any Lie group $G$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "Depends on $G$",
   "$\\mathbb{Z}/2$"
  ],
  "why": "A theorem (using that $G$ is an H-space, hence its universal cover is too, plus Lie group structure) shows $\\pi_2(G)=0$ for every Lie group $G$.",
  "subj": "lie-groups",
  "diff": 4
 },
 {
  "space": "$SO(n)$ vs $O(n)$",
  "q": "How many connected components does $O(n)$ have, for $n\\geq1$?",
  "a": "$2$",
  "d": [
   "$1$",
   "$n$",
   "Infinitely many"
  ],
  "why": "$O(n)$ has exactly two components distinguished by determinant $\\pm1$; $SO(n)$ is the identity component.",
  "subj": "lie-groups",
  "diff": 1
 },
 {
  "space": "the Lie algebra of a Lie group",
  "q": "The tangent space at the identity of a Lie group $G$ carries which extra structure?",
  "a": "A Lie bracket, making it the Lie algebra $\\mathfrak{g}$",
  "d": [
   "A ring structure with no bracket",
   "Nothing beyond a vector space structure",
   "A metric uniquely determined by $G$"
  ],
  "why": "$T_eG$ inherits a Lie bracket from the commutator structure of $G$ (via left-invariant vector fields), defining the Lie algebra.",
  "subj": "lie-groups",
  "diff": 2
 },
 {
  "space": "the tangent bundle of $S^n$",
  "q": "For which $n$ is $TS^n$ trivial (i.e. $S^n$ parallelizable)?",
  "a": "$n=1,3,7$ only",
  "d": [
   "Only $n=1$",
   "All odd $n$",
   "All $n$"
  ],
  "why": "By a famous theorem (related to division algebras $\\mathbb{C},\\mathbb{H},\\mathbb{O}$), $S^n$ is parallelizable exactly for $n=1,3,7$.",
  "subj": "manifolds",
  "diff": 5
 },
 {
  "space": "the hairy ball theorem",
  "q": "For which even-dimensional spheres does a nonvanishing continuous vector field exist?",
  "a": "None: every even sphere $S^{2n}$ has no nonvanishing vector field",
  "d": [
   "All even spheres admit one",
   "Only $S^2$ fails to admit one",
   "It depends on the embedding"
  ],
  "why": "This generalizes the classical hairy ball theorem ($S^2$): $\\chi(S^{2n})=2\\neq0$ obstructs existence of a nonvanishing vector field via Poincaré–Hopf.",
  "subj": "manifolds",
  "diff": 3
 },
 {
  "space": "Poincaré–Hopf theorem",
  "q": "The Poincaré–Hopf theorem relates the sum of indices of a vector field's zeros to what?",
  "a": "The Euler characteristic of the manifold",
  "d": [
   "The genus of the manifold",
   "The fundamental group order",
   "The dimension of the manifold"
  ],
  "why": "Poincaré–Hopf: for a vector field with isolated zeros on a closed manifold $M$, the sum of indices equals $\\chi(M)$.",
  "subj": "manifolds",
  "diff": 3
 },
 {
  "space": "smooth structures on $S^7$",
  "q": "How many distinct smooth structures (up to orientation-preserving diffeomorphism) does Milnor's work show exist on the topological $7$-sphere?",
  "a": "More than one (28 oriented smooth structures total, by Milnor and Kervaire–Milnor)",
  "d": [
   "Exactly one",
   "Infinitely many",
   "The question is open"
  ],
  "why": "Milnor's discovery of exotic 7-spheres showed $S^7$ admits multiple non-diffeomorphic smooth structures; Kervaire–Milnor later computed there are exactly 28 (15 up to orientation-reversing diffeomorphism, but 28 oriented ones).",
  "subj": "manifolds",
  "diff": 5
 },
 {
  "space": "the Whitney embedding theorem",
  "q": "The (strong) Whitney embedding theorem says every smooth $n$-manifold embeds in $\\mathbb{R}^N$ for which $N$?",
  "a": "$N=2n$",
  "d": [
   "$N=n+1$",
   "$N=2n+1$",
   "$N=n^2$"
  ],
  "why": "Whitney's strong embedding theorem gives embeddings into $\\mathbb{R}^{2n}$ for $n>1$ (the easy/weak version gives $\\mathbb{R}^{2n+1}$).",
  "subj": "manifolds",
  "diff": 4
 },
 {
  "space": "orientability and $H^n$",
  "q": "A closed connected $n$-manifold $M$ is orientable iff what about $H_n(M;\\mathbb{Z})$?",
  "a": "$H_n(M;\\mathbb{Z})\\cong\\mathbb{Z}$ (rather than $0$)",
  "d": [
   "$H_n(M;\\mathbb{Z})=0$",
   "$H_n(M;\\mathbb{Z})\\cong\\mathbb{Z}/2$",
   "Always true regardless of orientability"
  ],
  "why": "For a closed connected $n$-manifold, $H_n(M;\\mathbb{Z})\\cong\\mathbb{Z}$ if orientable and $0$ if not — this characterizes orientability homologically.",
  "subj": "manifolds",
  "diff": 3
 },
 {
  "space": "the $h$-cobordism theorem",
  "q": "The $h$-cobordism theorem (Smale) requires the manifolds involved to have dimension at least what, for the standard proof (Whitney trick) to apply?",
  "a": "$5$",
  "d": [
   "$3$",
   "$4$",
   "$7$"
  ],
  "why": "Smale's $h$-cobordism theorem requires dimension $\\geq5$, because the Whitney trick for removing intersections needs enough room (codimension considerations fail in dimensions 3 and 4).",
  "subj": "manifolds",
  "diff": 5
 },
 {
  "space": "connected sums and dimension",
  "q": "Connected sum $M\\#N$ of two $n$-manifolds is performed by removing a disk from each and gluing along what?",
  "a": "The boundary sphere $S^{n-1}$",
  "d": [
   "A point",
   "The whole manifold boundary, if any",
   "A disk $D^{n-1}$"
  ],
  "why": "Each removed open $n$-disk has boundary $S^{n-1}$; gluing two such boundaries via an orientation-reversing diffeomorphism defines the connected sum.",
  "subj": "manifolds",
  "diff": 2
 },
 {
  "space": "the Serre spectral sequence",
  "q": "For a fibration $F\\to E\\to B$ with $B$ simply connected, the Serre spectral sequence has $E_2$ page given by what?",
  "a": "$E_2^{p,q}=H^p(B;H^q(F))$",
  "d": [
   "$E_2^{p,q}=H^p(F;H^q(B))$",
   "$E_2^{p,q}=H^{p+q}(E)$ directly",
   "$E_2^{p,q}=H_p(B)\\otimes H_q(F)$ always, regardless of coefficients"
  ],
  "why": "The Serre spectral sequence (cohomological version) has $E_2^{p,q}=H^p(B;H^q(F))$, converging to $H^{p+q}(E)$.",
  "subj": "spectral-sequences",
  "diff": 4
 },
 {
  "space": "the Serre SS for the Hopf fibration $S^1\\to S^3\\to S^2$",
  "q": "In the Serre SS for $S^1\\to S^3\\to S^2$, which differential must be nonzero to correctly compute $H^*(S^3)$?",
  "a": "$d_2:E_2^{0,1}\\to E_2^{2,0}$",
  "d": [
   "$d_3:E_3^{0,1}\\to E_3^{3,0}$",
   "No differentials are needed; the sequence already collapses",
   "$d_2:E_2^{2,0}\\to E_2^{0,1}$ (wrong direction)"
  ],
  "why": "Since $H^*(S^3)$ vanishes in degree 2, the class in $E_2^{2,0}=H^2(S^2)$ must be killed by $d_2$ from $E_2^{0,1}=H^0(S^2;H^1(S^1))$, the only possible nonzero differential by bidegree.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "the Atiyah-Hirzebruch spectral sequence (AHSS)",
  "q": "What happens to the AHSS for computing $E^*(X)$ when $E=H\\mathbb{Z}$, ordinary cohomology itself?",
  "a": "It degenerates trivially, since the $E_2$ page already equals $H^*(X)$",
  "d": [
   "It becomes the Serre spectral sequence instead",
   "It still has many nontrivial higher differentials in general",
   "It computes $K^*(X)$ instead"
  ],
  "why": "The AHSS has $E_2^{p,q}=H^p(X;E^q(\\mathrm{pt}))$; for $E=H\\mathbb{Z}$ this is concentrated in $q=0$ and already equals $H^*(X;\\mathbb{Z})$, so there is nothing left for differentials to do.",
  "subj": "spectral-sequences",
  "diff": 4
 },
 {
  "space": "the Mayer-Vietoris sequence",
  "q": "Is the Mayer–Vietoris sequence a special case of a spectral sequence, or a separate tool?",
  "a": "It can be derived as (or seen as a shadow of) a spectral sequence associated to a cover, but is most often used as a standalone long exact sequence",
  "d": [
   "It has no relation to spectral sequences whatsoever",
   "It is literally the Serre spectral sequence",
   "It only applies to simplicial complexes, unlike spectral sequences"
  ],
  "why": "Mayer–Vietoris arises from a short exact sequence of chain complexes (from a cover), and can be subsumed by a spectral sequence for more general covers (e.g. the spectral sequence of a cover / Čech-to-derived-functor SS), though it's typically taught and used independently.",
  "subj": "spectral-sequences",
  "diff": 3
 },
 {
  "space": "convergence of a spectral sequence",
  "q": "A spectral sequence $E_r^{p,q}$ \"converges\" to $H^n$ typically means what?",
  "a": "The associated graded of a filtration on $H^n$ is given by $\\bigoplus_{p+q=n} E_\\infty^{p,q}$",
  "d": [
   "$E_r^{p,q}=H^n$ for all $r$",
   "$E_\\infty^{p,q}=H^n$ for every fixed $(p,q)$",
   "The spectral sequence has only finitely many nonzero terms, with no filtration involved"
  ],
  "why": "Convergence means the $E_\\infty$ page recovers $H^n$ only up to associated graded of a filtration, not $H^n$ itself directly (extension problems can remain).",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "the Leray-Hirsch theorem",
  "q": "The Leray–Hirsch theorem gives a simple criterion for when the Serre SS collapses (no nontrivial differentials), based on what?",
  "a": "Existence of classes in $H^*(E)$ restricting to a basis of $H^*(F)$ on each fiber",
  "d": [
   "The base $B$ being simply connected, with no further hypothesis",
   "The fiber $F$ being a point",
   "The total space $E$ being compact"
  ],
  "why": "Leray–Hirsch requires the cohomology of the fiber to be \"generated by classes pulled back from the total space,\" ensuring the SS collapses and $H^*(E)\\cong H^*(B)\\otimes H^*(F)$ as modules.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "the bar spectral sequence / Eilenberg-Moore",
  "q": "The Eilenberg–Moore spectral sequence is typically used to compute the cohomology of what kind of space?",
  "a": "A pullback / homotopy fiber product, e.g. the fiber of a map",
  "d": [
   "Only products $X\\times Y$, same as Künneth",
   "Only quotient spaces $X/G$",
   "Free loop spaces exclusively, with no other applications"
  ],
  "why": "The Eilenberg–Moore SS computes $H^*$ of a homotopy pullback (in particular fibers of maps) using $\\mathrm{Tor}$/$\\mathrm{Cotor}$ over the cohomology of the base.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "classification of closed surfaces",
  "q": "Every closed connected orientable surface is homeomorphic to which model?",
  "a": "A genus-$g$ surface $\\Sigma_g$ for some $g\\geq0$",
  "d": [
   "Always $S^2$",
   "A connected sum of $\\mathbb{RP}^2$'s only",
   "A torus, always"
  ],
  "why": "The classification theorem for closed surfaces: orientable ones are exactly the $\\Sigma_g$ (sphere with $g$ handles), distinguished by genus.",
  "subj": "surfaces",
  "diff": 2
 },
 {
  "space": "classification of closed surfaces",
  "q": "Every closed connected non-orientable surface is homeomorphic to which model?",
  "a": "A connected sum of $k\\geq1$ copies of $\\mathbb{RP}^2$",
  "d": [
   "A genus-$g$ surface for some $g$",
   "Always the Klein bottle",
   "There are no closed non-orientable surfaces"
  ],
  "why": "The non-orientable closed surfaces are classified by the number of crosscaps $k\\geq1$, i.e. connected sums $\\mathbb{RP}^2\\#\\cdots\\#\\mathbb{RP}^2$.",
  "subj": "surfaces",
  "diff": 2
 },
 {
  "space": "the Klein bottle as a connected sum",
  "q": "The Klein bottle is homeomorphic to which connected sum?",
  "a": "$\\mathbb{RP}^2\\#\\mathbb{RP}^2$",
  "d": [
   "$T^2\\#T^2$",
   "$\\mathbb{RP}^2\\#T^2$",
   "$S^2\\#\\mathbb{RP}^2$"
  ],
  "why": "This is a classical fact in surface classification: the Klein bottle equals the connected sum of two projective planes.",
  "subj": "surfaces",
  "diff": 3
 },
 {
  "space": "a Möbius band",
  "q": "Is the Möbius band orientable?",
  "a": "No",
  "d": [
   "Yes",
   "Orientability is undefined for surfaces with boundary",
   "It depends on the embedding in $\\mathbb{R}^3$"
  ],
  "why": "The Möbius band is the standard example of a non-orientable surface (with boundary); traversing its core circle reverses orientation.",
  "subj": "surfaces",
  "diff": 1
 },
 {
  "space": "a surface's orientation double cover",
  "q": "Every non-orientable surface $N$ has what kind of orientable double cover?",
  "a": "A connected orientable surface $\\tilde N\\to N$, the orientation double cover",
  "d": [
   "A disconnected cover",
   "No orientable double cover exists",
   "A double cover that is also non-orientable"
  ],
  "why": "The orientation double cover construction always produces a connected orientable double cover for a connected non-orientable manifold.",
  "subj": "surfaces",
  "diff": 3
 },
 {
  "space": "the classification theorem's invariant",
  "q": "Which complete invariant distinguishes closed surfaces up to homeomorphism (besides orientability)?",
  "a": "The Euler characteristic",
  "d": [
   "The fundamental group alone, with no other data needed",
   "The number of triangles in a triangulation",
   "The first homology group with $\\mathbb{Z}/2$ coefficients"
  ],
  "why": "Orientability plus $\\chi$ (equivalently genus or crosscap number) completely classifies closed surfaces up to homeomorphism.",
  "subj": "surfaces",
  "diff": 3
 },
 {
  "space": "surfaces with boundary",
  "q": "A connected compact surface with boundary deformation retracts onto what, if it is not closed?",
  "a": "A wedge of circles (a graph), if it has nonempty boundary and is not a disk/sphere piece",
  "d": [
   "Always a single point",
   "Always a torus",
   "Always $S^2$"
  ],
  "why": "Removing one or more open disks from a closed surface (to create boundary) yields a space homotopy equivalent to a wedge of circles, since the resulting space deformation retracts onto its 1-skeleton.",
  "subj": "surfaces",
  "diff": 4
 },
 {
  "space": "genus and crosscap relation",
  "q": "A genus-$g$ orientable surface has the same $\\chi$ as a non-orientable surface with how many crosscaps?",
  "a": "$2g$ crosscaps",
  "d": [
   "$g$ crosscaps",
   "$g+1$ crosscaps",
   "$4g$ crosscaps"
  ],
  "why": "$\\chi(\\Sigma_g)=2-2g$ and $\\chi(N_k)=2-k$; setting these equal gives $k=2g$.",
  "subj": "surfaces",
  "diff": 4
 }
];


// Generator 1: spheres S^n, varying n, asking about pi_k, H_k, or chi.
function genSpheres() {
  const out = [];
  for (let n = 1; n <= 6; n++) {
    // H_n(S^n) = Z
    out.push({
      space: `the sphere $S^{${n}}$`,
      q: x`What is $H_{${n}}(S^{${n}};\mathbb{Z})$?`,
      a: x`$\mathbb{Z}$`,
      d: [x`$0$`, x`$\mathbb{Z}/2$`, x`$\mathbb{Z}\oplus\mathbb{Z}$`],
      why: x`$S^{${n}}$ has a CW structure with one $0$-cell and one ${n}$-cell, giving $H_{${n}}(S^{${n}})=\mathbb{Z}$.`,
      subj: "homology", diff: n <= 2 ? 1 : 2, gen: "spheres"
    });
    // chi(S^n)
    const chi = n % 2 === 0 ? 2 : 0;
    const wrongChi = chi === 2 ? [0, 1, -2] : [2, 1, -2];
    out.push({
      space: `the sphere $S^{${n}}$`,
      q: x`What is $\chi(S^{${n}})$?`,
      a: x`$${chi}$`,
      d: wrongChi.map(w => x`$${w}$`),
      why: x`$\chi(S^n)=2$ for even $n$ and $0$ for odd $n$; here $n=${n}$ is ${n % 2 === 0 ? "even" : "odd"}$.`,
      subj: "euler-characteristic", diff: 1, gen: "spheres"
    });
    // pi_k(S^n) = 0 for k < n
    if (n >= 2) {
      const k = n - 1;
      out.push({
        space: `the sphere $S^{${n}}$`,
        q: x`What is $\pi_{${k}}(S^{${n}})$ (note $${k}<${n}$)?`,
        a: x`$0$`,
        d: [x`$\mathbb{Z}$`, x`$\mathbb{Z}/2$`, x`$\mathbb{Z}^{${k}}$`],
        why: x`$\pi_k(S^n)=0$ whenever $k<n$, by cellular approximation.`,
        subj: "homotopy-groups", diff: 2, gen: "spheres"
      });
    }
  }
  return out;
}

// Generator 2: CP^n, varying n, asking about H_{2k}, H_{odd}, or chi.
function genCPn() {
  const out = [];
  for (let n = 1; n <= 5; n++) {
    out.push({
      space: `complex projective space $\\mathbb{CP}^{${n}}$`,
      q: x`What is $H_{2}(\mathbb{CP}^{${n}};\mathbb{Z})$?`,
      a: x`$\mathbb{Z}$`,
      d: [x`$0$`, x`$\mathbb{Z}/2$`, x`$\mathbb{Z}\oplus\mathbb{Z}$`],
      why: x`$\mathbb{CP}^{${n}}$ has one cell in each even dimension $0,2,\dots,2\cdot${n}$, so $H_2=\mathbb{Z}$ as long as $n\geq1$.`,
      subj: "homology", diff: 2, gen: "cpn"
    });
    {
      const ans = n + 1;
      const candidates = [n, 2*n, 2*n+1, 2*n+2, n+2, n-1, n+3].filter(v => v !== ans && v >= 0);
      const distractors = [...new Set(candidates)].slice(0,3);
      out.push({
        space: `complex projective space $\\mathbb{CP}^{${n}}$`,
        q: x`What is $\chi(\mathbb{CP}^{${n}})$?`,
        a: x`$${ans}$`,
        d: distractors.map(v => x`$${v}$`),
        why: x`$\mathbb{CP}^{${n}}$ has exactly one cell in each even dimension $0,2,\dots,2${n}$, i.e. $${ans}$ cells total, all contributing $+1$ to $\chi$.`,
        subj: "euler-characteristic", diff: 2, gen: "cpn"
      });
    }
    out.push({
      space: `complex projective space $\\mathbb{CP}^{${n}}$`,
      q: x`What is $H_{3}(\mathbb{CP}^{${n}};\mathbb{Z})$ (an odd-degree group)?`,
      a: x`$0$`,
      d: [x`$\mathbb{Z}$`, x`$\mathbb{Z}/2$`, x`$\mathbb{Z}/3$`],
      why: x`$\mathbb{CP}^{${n}}$ has no odd-dimensional cells, so all odd-degree homology vanishes, including $H_3$.`,
      subj: "homology", diff: 2, gen: "cpn"
    });
  }
  return out;
}

// Generator 3: wedge sums of spheres S^a v S^b, asking about H_k.
function genWedges() {
  const out = [];
  const pairs = [[1,1],[1,2],[2,2],[1,3],[2,3],[3,3]];
  for (const [a,b] of pairs) {
    // H_a and H_b are both Z (or Z+Z if a==b), everything else 0 (for a,b>=1, a!=b distinct degrees considered separately below)
    if (a !== b) {
      out.push({
        space: `the wedge $S^{${a}}\\vee S^{${b}}$`,
        q: x`What is $H_{${a}}(S^{${a}}\vee S^{${b}};\mathbb{Z})$?`,
        a: x`$\mathbb{Z}$`,
        d: [x`$0$`, x`$\mathbb{Z}\oplus\mathbb{Z}$`, x`$\mathbb{Z}/2$`],
        why: x`Reduced homology of a wedge splits as a direct sum: $\tilde H_{${a}}(S^{${a}}\vee S^{${b}})=\tilde H_{${a}}(S^{${a}})\oplus\tilde H_{${a}}(S^{${b}})=\mathbb{Z}\oplus0=\mathbb{Z}$ (using $${a}\\neq${b}$).`,
        subj: "homology", diff: 2, gen: "wedges"
      });
    } else {
      out.push({
        space: `the wedge $S^{${a}}\\vee S^{${a}}$`,
        q: x`What is $H_{${a}}(S^{${a}}\vee S^{${a}};\mathbb{Z})$ (two equal-dimensional spheres)?`,
        a: x`$\mathbb{Z}\oplus\mathbb{Z}$`,
        d: [x`$\mathbb{Z}$`, x`$0$`, x`$\mathbb{Z}/2\oplus\mathbb{Z}/2$`],
        why: x`$\tilde H_{${a}}(S^{${a}}\vee S^{${a}})=\tilde H_{${a}}(S^{${a}})\oplus\tilde H_{${a}}(S^{${a}})=\mathbb{Z}\oplus\mathbb{Z}$.`,
        subj: "homology", diff: 2, gen: "wedges"
      });
    }
    // chi
    const chiA = a % 2 === 0 ? 2 : 0;
    const chiB = b % 2 === 0 ? 2 : 0;
    const chiWedge = chiA + chiB - 1; // chi(X v Y) = chi(X)+chi(Y)-1
    {
      const candidates = [chiA + chiB, chiWedge - 1, chiWedge + 1, chiWedge - 2, chiWedge + 2, 0, 1]
        .filter(v => v !== chiWedge);
      const distractors = [...new Set(candidates)].slice(0, 3);
      out.push({
        space: `the wedge $S^{${a}}\\vee S^{${b}}$`,
        q: x`What is $\chi(S^{${a}}\vee S^{${b}})$?`,
        a: x`$${chiWedge}$`,
        d: distractors.map(v => x`$${v}$`),
        why: x`Wedging at a point identifies one $0$-cell from each summand, so $\chi(X\vee Y)=\chi(X)+\chi(Y)-1$; here $\chi(S^{${a}})=${chiA}$ and $\chi(S^{${b}})=${chiB}$.`,
        subj: "euler-characteristic", diff: 3, gen: "wedges"
      });
    }
  }
  return out;
}



// Instantiate the procedural generators once at load time.
const GENERATED = [...genSpheres(), ...genCPn(), ...genWedges()];

const ALL_QUESTIONS = CURATED.concat(GENERATED);

window.QUIZ = {
  questions: ALL_QUESTIONS,
  subjects: SUBJECTS,
  // Re-expose the raw generator functions in case the engine wants to
  // regenerate or extend the procedural pool independently later.
  generators: { genSpheres, genCPn, genWedges }
};
