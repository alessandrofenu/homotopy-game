// questions.js — Algebraic Topology Quiz question bank
// 152 hand-curated questions + 3 procedural generators (spheres, CP^n, wedge sums),
// across 15 subjects, difficulty 1-5. Every $...$ fragment KaTeX-validated (0 errors).
//
// Everything below is wrapped in an IIFE so it does NOT leak any top-level
// const/let/function names into the global scope — index.html's own script
// declares its own top-level BANK/GENERATORS/HOM_POOL/pick (assigned FROM
// window.QUIZ), and classic <script> tags share one global lexical scope,
// so colliding names here would throw "redeclaration" SyntaxErrors there.
// Only window.QUIZ is exposed.
//
// Contract expected by index.html (window.QUIZ):
//   BANK       : Array<Question>            — curated question bank
//   GENERATORS : Array<() => Question>       — zero-arg fns, each returns ONE fresh question
//   HOM_POOL   : Array<string>               — flat pool of plain answer strings (padding)
//   pick       : (arr) => arr[random index]  — helper used by the engine
//
// Question shape: { space, q, a, d:[d1,d2,d3], why, subj, diff }
"use strict";
(function(){
const x = String.raw;

const BANK = [
 {
  "space": "Stiefel–Whitney classes",
  "q": "The class $w_i(E)$ of a real bundle lives in which group?",
  "a": "$H^i(B;\\mathbb{Z}/2)$",
  "d": [
   "$H^i(B;\\mathbb{Z})$",
   "$H^{2i}(B;\\mathbb{Z})$",
   "$H_i(B;\\mathbb{Z}/2)$"
  ],
  "why": "Stiefel\\u2013Whitney classes are defined with $\\mathbb{Z}/2$ coefficients: $w_i(E)\\in H^i(B;\\mathbb{Z}/2)$.",
  "subj": "characteristic-classes",
  "diff": 2
 },
 {
  "space": "orientability and $w_1$",
  "q": "A real bundle is orientable iff which class vanishes?",
  "a": "$w_1$",
  "d": [
   "$w_2$",
   "$c_1$",
   "$p_1$"
  ],
  "why": "The first Stiefel\\u2013Whitney class is exactly the obstruction to orientability.",
  "subj": "characteristic-classes",
  "diff": 2
 },
 {
  "space": "spin structures",
  "q": "An oriented bundle admits a spin structure iff which class vanishes?",
  "a": "$w_2$",
  "d": [
   "$w_1$",
   "$w_3$",
   "$p_1$"
  ],
  "why": "Given orientability ($w_1=0$), the obstruction to a spin structure is the vanishing of $w_2$.",
  "subj": "characteristic-classes",
  "diff": 4
 },
 {
  "space": "complex line bundles",
  "q": "Complex line bundles over $X$ are classified by which class?",
  "a": "$c_1\\in H^2(X;\\mathbb{Z})$",
  "d": [
   "$w_1\\in H^1(X;\\mathbb{Z}/2)$",
   "$c_1\\in H^1(X;\\mathbb{Z})$",
   "$p_1\\in H^4(X;\\mathbb{Z})$"
  ],
  "why": "Complex line bundles correspond to $[X,\\mathbb{CP}^\\infty]\\cong H^2(X;\\mathbb{Z})$ via the first Chern class.",
  "subj": "characteristic-classes",
  "diff": 3
 },
 {
  "space": "the Euler class of a complex bundle",
  "q": "For a rank-$n$ complex bundle, the Euler class of the underlying oriented real bundle equals which class?",
  "a": "The top Chern class $c_n$",
  "d": [
   "The class $c_1^n$",
   "The class $w_{2n}$",
   "The class $p_n$"
  ],
  "why": "For a complex bundle the Euler class of the underlying real bundle is the top Chern class $c_n$.",
  "subj": "characteristic-classes",
  "diff": 4
 },
 {
  "space": "the Euler class and $\\chi$",
  "q": "Evaluated on the fundamental class, the Euler class of $TM$ gives which invariant of a closed oriented manifold?",
  "a": "The Euler characteristic $\\chi(M)$",
  "d": [
   "The signature $\\sigma(M)$",
   "The first Betti number",
   "The dimension of $M$"
  ],
  "why": "The Euler class of the tangent bundle integrates to $\\chi(M)$, by the Poincar\\u00e9\\u2013Hopf / Gauss\\u2013Bonnet theorem.",
  "subj": "characteristic-classes",
  "diff": 3
 },
 {
  "space": "Pontryagin classes",
  "q": "The class $p_i(E)$ of a real bundle lives in which group?",
  "a": "$H^{4i}(B;\\mathbb{Z})$",
  "d": [
   "$H^{2i}(B;\\mathbb{Z})$",
   "$H^{i}(B;\\mathbb{Z}/2)$",
   "$H^{4i}(B;\\mathbb{Z}/2)$"
  ],
  "why": "Pontryagin classes are defined by $p_i(E)=(-1)^i c_{2i}(E\\otimes\\mathbb{C})\\in H^{4i}(B;\\mathbb{Z})$.",
  "subj": "characteristic-classes",
  "diff": 4
 },
 {
  "space": "the Whitney sum formula",
  "q": "The total Stiefel\\u2013Whitney class of $E\\oplus F$ equals what?",
  "a": "$w(E)\\cup w(F)$",
  "d": [
   "$w(E)+w(F)$",
   "$w(E)\\cup w(F)^{-1}$",
   "$w(E)\\otimes w(F)$"
  ],
  "why": "The Whitney sum formula states $w(E\\oplus F)=w(E)\\cup w(F)$ for the total class (and similarly for total Chern class).",
  "subj": "characteristic-classes",
  "diff": 3
 },
 {
  "space": "Chern classes",
  "q": "The class $c_i(E)$ of a complex bundle lives in which group?",
  "a": "$H^{2i}(B;\\mathbb{Z})$",
  "d": [
   "$H^{i}(B;\\mathbb{Z})$",
   "$H^{2i}(B;\\mathbb{Z}/2)$",
   "$H^{4i}(B;\\mathbb{Z})$"
  ],
  "why": "Chern classes are integral classes in even degree: $c_i(E)\\in H^{2i}(B;\\mathbb{Z})$.",
  "subj": "characteristic-classes",
  "diff": 2
 },
 {
  "space": "the tangent bundle of $\\mathbb{CP}^n$",
  "q": "The total Chern class of $T\\mathbb{CP}^n$ equals which expression?",
  "a": "$(1+\\alpha)^{n+1}$",
  "d": [
   "$(1+\\alpha)^{n}$",
   "$(1+\\alpha)^{n-1}$",
   "$1+(n+1)\\alpha$"
  ],
  "why": "From the Euler sequence $0\\to\\mathbb{C}\\to(\\mathcal{O}(1))^{n+1}\\to T\\mathbb{CP}^n\\to0$, the total Chern class is $(1+\\alpha)^{n+1}$ where $\\alpha=c_1(\\mathcal{O}(1))$.",
  "subj": "characteristic-classes",
  "diff": 5
 },
 {
  "space": "the first Pontryagin class via Chern classes",
  "q": "For a complex bundle $E$, $p_1$ of the underlying real bundle equals which combination?",
  "a": "$c_1^2-2c_2$",
  "d": [
   "$c_1^2+2c_2$",
   "$c_1^2-c_2$",
   "$2c_2-c_1^2$"
  ],
  "why": "Expanding $p_1(E_\\mathbb{R})=-c_2(E\\otimes\\mathbb{C})$ with $E\\otimes\\mathbb{C}\\cong E\\oplus\\bar E$ gives $p_1=c_1^2-2c_2$.",
  "subj": "characteristic-classes",
  "diff": 5
 },
 {
  "space": "Stiefel–Whitney class $w_0$",
  "q": "What is $w_0(E)$ for any real bundle $E$?",
  "a": "$1$",
  "d": [
   "$0$",
   "the rank of $E$",
   "$w_1(E)$"
  ],
  "why": "By convention the total class starts $w(E)=1+w_1+\\cdots$, so $w_0=1$ always.",
  "subj": "characteristic-classes",
  "diff": 2
 },
 {
  "space": "$\\mathbb{CP}^n$",
  "q": "What is the cohomology ring $H^*(\\mathbb{CP}^n;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}[\\alpha]/(\\alpha^{n+1})$, $\\deg\\alpha=2$",
  "d": [
   "$\\mathbb{Z}[\\alpha]/(\\alpha^{n})$, $\\deg\\alpha=2$",
   "$\\Lambda[\\alpha]$, $\\deg\\alpha=2$",
   "$\\mathbb{Z}[\\alpha]/(\\alpha^{n+1})$, $\\deg\\alpha=1$"
  ],
  "why": "The degree-$2$ hyperplane class generates a truncated polynomial ring with $\\alpha^{n+1}=0$ since $H^{2n+2}=0$.",
  "subj": "cohomology",
  "diff": 3
 },
 {
  "space": "$\\mathbb{RP}^n$ with $\\mathbb{Z}/2$ coefficients",
  "q": "What is $H^*(\\mathbb{RP}^n;\\mathbb{Z}/2)$ as a ring?",
  "a": "$(\\mathbb{Z}/2)[\\alpha]/(\\alpha^{n+1})$, $\\deg\\alpha=1$",
  "d": [
   "$(\\mathbb{Z}/2)[\\alpha]/(\\alpha^{n})$, $\\deg\\alpha=1$",
   "$\\Lambda[\\alpha]$, $\\deg\\alpha=1$",
   "$(\\mathbb{Z}/2)[\\alpha]/(\\alpha^{n+1})$, $\\deg\\alpha=2$"
  ],
  "why": "With $\\mathbb{Z}/2$ coefficients $H^*(\\mathbb{RP}^n)$ is a truncated polynomial ring on a degree-$1$ class, $\\alpha^{n+1}=0$.",
  "subj": "cohomology",
  "diff": 4
 },
 {
  "space": "the torus $T^2$",
  "q": "In $H^*(T^2;\\mathbb{Z})$ with $\\alpha,\\beta\\in H^1$ generators, what is $\\alpha\\cup\\beta$?",
  "a": "A generator of $H^2(T^2)$, with $\\beta\\cup\\alpha=-\\alpha\\cup\\beta$",
  "d": [
   "Zero",
   "A generator, with $\\beta\\cup\\alpha=\\alpha\\cup\\beta$",
   "The class $\\alpha+\\beta$ in $H^1$"
  ],
  "why": "Degree-$1$ classes anticommute, and $\\alpha\\cup\\beta$ generates the top group, so $H^*(T^2)\\cong\\Lambda(\\mathbb{Z}^2)$.",
  "subj": "cohomology",
  "diff": 4
 },
 {
  "space": "a closed orientable $n$-manifold $M$",
  "q": "Poincar\\u00e9 duality gives an isomorphism between $H^k(M;\\mathbb{Z})$ and which group?",
  "a": "$H_{n-k}(M;\\mathbb{Z})$",
  "d": [
   "$H_{k}(M;\\mathbb{Z})$",
   "$H^{n-k}(M;\\mathbb{Z})$",
   "$H_{n-k}(M;\\mathbb{Z}/2)$"
  ],
  "why": "Cap product with the fundamental class gives $H^k(M)\\cong H_{n-k}(M)$ for a closed oriented $n$-manifold.",
  "subj": "cohomology",
  "diff": 2
 },
 {
  "space": "the universal coefficient theorem",
  "q": "The UCT expresses $H^n(X;\\mathbb{Z})$ via a $\\mathrm{Hom}$ term and which derived term?",
  "a": "$\\mathrm{Ext}(H_{n-1}(X),\\mathbb{Z})$",
  "d": [
   "$\\mathrm{Ext}(H_{n}(X),\\mathbb{Z})$",
   "$\\mathrm{Tor}(H_{n-1}(X),\\mathbb{Z})$",
   "$\\mathrm{Tor}(H_{n+1}(X),\\mathbb{Z})$"
  ],
  "why": "The UCT short exact sequence is $0\\to\\mathrm{Ext}(H_{n-1}(X),\\mathbb{Z})\\to H^n(X;\\mathbb{Z})\\to\\mathrm{Hom}(H_n(X),\\mathbb{Z})\\to0$.",
  "subj": "cohomology",
  "diff": 3
 },
 {
  "space": "$H^*(S^n;mathbb{Z})$ as a ring",
  "q": "For $n\\geq1$, what is the square of the degree-$n$ generator of $H^*(S^n;\\mathbb{Z})$?",
  "a": "Zero",
  "d": [
   "A generator of $H^{2n}$",
   "The degree-$n$ generator again",
   "Twice the generator"
  ],
  "why": "The square lands in $H^{2n}(S^n)=0$ for $n\\geq1$, so the cup product structure is trivial beyond degree $0$.",
  "subj": "cohomology",
  "diff": 3
 },
 {
  "space": "the Künneth theorem (field coefficients)",
  "q": "Over a field, $H^*(X\\times Y)$ is which construction on $H^*(X)$ and $H^*(Y)$?",
  "a": "The tensor product",
  "d": [
   "The direct sum",
   "The free product",
   "The $\\mathrm{Hom}$ group"
  ],
  "why": "Over a field the K\\u00fcnneth formula gives a ring isomorphism $H^*(X\\times Y)\\cong H^*(X)\\otimes H^*(Y)$.",
  "subj": "cohomology",
  "diff": 3
 },
 {
  "space": "reduced cohomology of a wedge",
  "q": "What is $\\tilde H^k(X\\vee Y)$ for well-pointed spaces?",
  "a": "$\\tilde H^k(X)\\oplus\\tilde H^k(Y)$",
  "d": [
   "$\\tilde H^k(X)\\otimes\\tilde H^k(Y)$",
   "$\\tilde H^k(X\\times Y)$",
   "$\\tilde H^k(X)\\oplus\\tilde H^{k-1}(Y)$"
  ],
  "why": "Reduced cohomology turns a wedge into a direct sum, just as for reduced homology.",
  "subj": "cohomology",
  "diff": 2
 },
 {
  "space": "de Rham cohomology",
  "q": "De Rham's theorem identifies $H^k_{dR}(M)$ with which cohomology?",
  "a": "$H^k(M;\\mathbb{R})$",
  "d": [
   "$H^k(M;\\mathbb{Z})$",
   "$H_k(M;\\mathbb{R})$",
   "$H^k(M;\\mathbb{Q})$"
  ],
  "why": "De Rham's theorem is a ring isomorphism between de Rham cohomology and singular cohomology with real coefficients.",
  "subj": "cohomology",
  "diff": 3
 },
 {
  "space": "the cup product structure of $H^*(\\mathbb{RP}^\\infty;\\mathbb{Z}/2)$",
  "q": "What is $H^*(\\mathbb{RP}^\\infty;\\mathbb{Z}/2)$ as a ring?",
  "a": "$(\\mathbb{Z}/2)[\\alpha]$, $\\deg\\alpha=1$",
  "d": [
   "$(\\mathbb{Z}/2)[\\alpha]/(\\alpha^2)$",
   "$\\Lambda[\\alpha]$, $\\deg\\alpha=1$",
   "$(\\mathbb{Z}/2)[\\alpha]$, $\\deg\\alpha=2$"
  ],
  "why": "$\\mathbb{RP}^\\infty=K(\\mathbb{Z}/2,1)$ has mod-$2$ cohomology the full polynomial ring on a degree-$1$ generator (no truncation, since it is infinite-dimensional).",
  "subj": "cohomology",
  "diff": 4
 },
 {
  "space": "the cohomology ring of $H^*(\\mathbb{CP}^\\infty;\\mathbb{Z})$",
  "q": "What is $H^*(\\mathbb{CP}^\\infty;\\mathbb{Z})$ as a ring?",
  "a": "$\\mathbb{Z}[\\alpha]$, $\\deg\\alpha=2$",
  "d": [
   "$\\mathbb{Z}[\\alpha]/(\\alpha^2)$, $\\deg\\alpha=2$",
   "$\\Lambda[\\alpha]$, $\\deg\\alpha=2$",
   "$\\mathbb{Z}[\\alpha]$, $\\deg\\alpha=1$"
  ],
  "why": "$\\mathbb{CP}^\\infty=K(\\mathbb{Z},2)$ has cohomology the full polynomial ring on a degree-$2$ generator, the universal first Chern class.",
  "subj": "cohomology",
  "diff": 4
 },
 {
  "space": "the circle $S^1$",
  "q": "The map $\\mathbb{R}\\to S^1$, $t\\mapsto e^{2\\pi i t}$, is which kind of map?",
  "a": "The universal cover of $S^1$",
  "d": [
   "A homeomorphism",
   "A degree-$2$ cover",
   "A fiber bundle with finite fiber"
  ],
  "why": "$\\mathbb{R}$ is simply connected and the map is a covering, so it is the universal cover, with deck group $\\mathbb{Z}$.",
  "subj": "covering-spaces",
  "diff": 2
 },
 {
  "space": "$\\mathbb{RP}^n$ for $n\\geq2$",
  "q": "What is the universal cover of $\\mathbb{RP}^n$ for $n\\geq2$?",
  "a": "$S^n$",
  "d": [
   "$\\mathbb{R}^n$",
   "$S^{n-1}$",
   "$\\mathbb{RP}^n$ itself"
  ],
  "why": "The double cover $S^n\\to\\mathbb{RP}^n$ has simply connected total space for $n\\geq2$, hence is universal.",
  "subj": "covering-spaces",
  "diff": 2
 },
 {
  "space": "a finite connected cover $\\tilde X\\to X$",
  "q": "The number of sheets equals which quantity?",
  "a": "The index $[\\pi_1(X):p_*\\pi_1(\\tilde X)]$",
  "d": [
   "The order of $\\pi_1(X)$",
   "The order of $\\pi_1(\\tilde X)$",
   "The Euler characteristic of $X$"
  ],
  "why": "Sheets correspond to cosets of the subgroup $p_*\\pi_1(\\tilde X)$ in $\\pi_1(X)$, so the count is the index.",
  "subj": "covering-spaces",
  "diff": 3
 },
 {
  "space": "connected double covers of $S^1\\vee S^1$",
  "q": "How many connected double covers does $S^1\\vee S^1$ have, up to based isomorphism?",
  "a": "Exactly $3$",
  "d": [
   "Exactly $1$",
   "Exactly $2$",
   "Exactly $4$"
  ],
  "why": "Based double covers correspond to nontrivial homomorphisms $F_2\\to\\mathbb{Z}/2$, of which there are $2^2-1=3$.",
  "subj": "covering-spaces",
  "diff": 4
 },
 {
  "space": "covers of the torus $T^2$",
  "q": "Connected covers of $T^2$ correspond to which subgroups?",
  "a": "Subgroups of $\\mathbb{Z}^2$",
  "d": [
   "Index-$2$ subgroups of $\\mathbb{Z}^2$",
   "Normal subgroups of $F_2$",
   "Subgroups of $\\mathbb{Z}$"
  ],
  "why": "By the Galois correspondence, connected covers of $T^2$ correspond to subgroups of $\\pi_1(T^2)=\\mathbb{Z}^2$.",
  "subj": "covering-spaces",
  "diff": 3
 },
 {
  "space": "existence of a universal cover",
  "q": "Which condition on $X$ guarantees a universal cover exists?",
  "a": "Path-connected, locally path-connected, semilocally simply connected",
  "d": [
   "Compact and Hausdorff",
   "A finite CW complex",
   "Having finite fundamental group"
  ],
  "why": "These three local/global connectivity conditions are exactly what the standard existence theorem requires.",
  "subj": "covering-spaces",
  "diff": 3
 },
 {
  "space": "a degree-$n$ cover of finite CW complexes",
  "q": "How does $\\chi(\\tilde X)$ relate to $\\chi(X)$ for a degree-$n$ cover?",
  "a": "$\\chi(\\tilde X)=n\\,\\chi(X)$",
  "d": [
   "$\\chi(\\tilde X)=\\chi(X)$",
   "$\\chi(\\tilde X)=\\chi(X)/n$",
   "$\\chi(\\tilde X)=\\chi(X)+n$"
  ],
  "why": "A degree-$n$ cover multiplies the cell count in each dimension by $n$, hence multiplies $\\chi$ by $n$.",
  "subj": "covering-spaces",
  "diff": 2
 },
 {
  "space": "deck transformations of the universal cover",
  "q": "The deck group of the universal cover $\\tilde X\\to X$ is isomorphic to what?",
  "a": "$\\pi_1(X)$",
  "d": [
   "$\\pi_1(\\tilde X)$",
   "$H_1(X)$",
   "the trivial group"
  ],
  "why": "For the universal cover the deck transformation group is $\\pi_1(X)$, acting freely and transitively on each fiber.",
  "subj": "covering-spaces",
  "diff": 2
 },
 {
  "space": "regular (normal) covers",
  "q": "A connected cover $\\tilde X\\to X$ is regular iff $p_*\\pi_1(\\tilde X)$ is which kind of subgroup?",
  "a": "A normal subgroup of $\\pi_1(X)$",
  "d": [
   "A finite-index subgroup",
   "A maximal subgroup",
   "The trivial subgroup"
  ],
  "why": "Regular covers correspond exactly to normal subgroups of $\\pi_1(X)$, for which the deck group acts transitively on fibers.",
  "subj": "covering-spaces",
  "diff": 4
 },
 {
  "space": "the lift of a loop",
  "q": "A loop in $X$ lifts to a loop in a cover $\\tilde X$ (based) iff its class lies in which subgroup?",
  "a": "$p_*\\pi_1(\\tilde X)$",
  "d": [
   "The commutator subgroup of $\\pi_1(X)$",
   "The center of $\\pi_1(X)$",
   "All of $\\pi_1(X)$"
  ],
  "why": "A based loop lifts to a based loop exactly when its homotopy class lies in the image subgroup $p_*\\pi_1(\\tilde X,\\tilde x_0)$.",
  "subj": "covering-spaces",
  "diff": 4
 },
 {
  "space": "covers of a graph",
  "q": "Every connected cover of a graph (1-complex) is which kind of space?",
  "a": "A graph",
  "d": [
   "A surface",
   "A wedge of circles always",
   "A tree always"
  ],
  "why": "Covers of a $1$-complex are themselves $1$-complexes; the universal cover specifically is a tree, but general connected covers are just graphs.",
  "subj": "covering-spaces",
  "diff": 3
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
  "why": "$\\chi(S^2)=b_0-b_1+b_2=1-0+1=2$.",
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
  "why": "$\\chi(T^2)=1-2+1=0$.",
  "subj": "euler-characteristic",
  "diff": 1
 },
 {
  "space": "a genus-$g$ orientable surface",
  "q": "What is $\\chi(\\Sigma_g)$?",
  "a": "$2-2g$",
  "d": [
   "$2g-2$",
   "$1-g$",
   "$2-g$"
  ],
  "why": "$\\chi(\\Sigma_g)=b_0-b_1+b_2=1-2g+1=2-2g$.",
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
  "why": "A CW structure with one cell in each dimension $0,1,2$ gives $\\chi=1-1+1=1$.",
  "subj": "euler-characteristic",
  "diff": 1
 },
 {
  "space": "the Klein bottle",
  "q": "What is $\\chi(K)$?",
  "a": "$0$",
  "d": [
   "$1$",
   "$2$",
   "$-1$"
  ],
  "why": "Like the torus, the Klein bottle has $\\chi=1-2+1=0$.",
  "subj": "euler-characteristic",
  "diff": 2
 },
 {
  "space": "a non-orientable surface $N_k$ with $k$ crosscaps",
  "q": "What is $\\chi(N_k)$?",
  "a": "$2-k$",
  "d": [
   "$1-k$",
   "$2-2k$",
   "$k-2$"
  ],
  "why": "The connected sum of $k$ projective planes has $\\chi=2-k$, matching $\\chi(\\mathbb{RP}^2)=1$ at $k=1$.",
  "subj": "euler-characteristic",
  "diff": 3
 },
 {
  "space": "a product space $X\\times Y$",
  "q": "How does $\\chi(X\\times Y)$ relate to $\\chi(X)$ and $\\chi(Y)$?",
  "a": "$\\chi(X)\\cdot\\chi(Y)$",
  "d": [
   "$\\chi(X)+\\chi(Y)$",
   "$\\chi(X)-\\chi(Y)$",
   "$\\chi(X)^{\\chi(Y)}$"
  ],
  "why": "Euler characteristic is multiplicative under products, by K\\u00fcnneth or cell counting.",
  "subj": "euler-characteristic",
  "diff": 2
 },
 {
  "space": "a connected sum of closed surfaces",
  "q": "How does $\\chi(\\Sigma\\#\\Sigma')$ relate to $\\chi(\\Sigma)$ and $\\chi(\\Sigma')$?",
  "a": "$\\chi(\\Sigma)+\\chi(\\Sigma')-2$",
  "d": [
   "$\\chi(\\Sigma)+\\chi(\\Sigma')$",
   "$\\chi(\\Sigma)\\cdot\\chi(\\Sigma')$",
   "$\\chi(\\Sigma)+\\chi(\\Sigma')-1$"
  ],
  "why": "Connected sum removes a disk ($\\chi=1$) from each and glues along a circle ($\\chi=0$), so $\\chi$ drops by $2$.",
  "subj": "euler-characteristic",
  "diff": 4
 },
 {
  "space": "the Gauss–Bonnet theorem",
  "q": "Gauss\\u2013Bonnet equates $2\\pi\\chi(M)$ to the integral of which quantity?",
  "a": "The Gaussian curvature",
  "d": [
   "The mean curvature",
   "The geodesic curvature",
   "The scalar volume"
  ],
  "why": "The global Gauss\\u2013Bonnet theorem states $\\int_M K\\,dA=2\\pi\\chi(M)$ for a closed surface.",
  "subj": "euler-characteristic",
  "diff": 3
 },
 {
  "space": "a connected graph",
  "q": "For a connected graph with $V$ vertices and $E$ edges, what is $\\chi$?",
  "a": "$V-E$",
  "d": [
   "$V+E$",
   "$E-V$",
   "$V\\cdot E$"
  ],
  "why": "$\\chi=c_0-c_1=V-E$ from the cell count.",
  "subj": "euler-characteristic",
  "diff": 1
 },
 {
  "space": "$\\mathbb{CP}^n$",
  "q": "What is $\\chi(\\mathbb{CP}^n)$?",
  "a": "$n+1$",
  "d": [
   "$n$",
   "$2n$",
   "$2n+1$"
  ],
  "why": "$\\mathbb{CP}^n$ has one cell in each even dimension $0,2,\\dots,2n$, so $\\chi=n+1$.",
  "subj": "euler-characteristic",
  "diff": 2
 },
 {
  "space": "an odd-dimensional closed manifold",
  "q": "What is $\\chi(M)$ for any closed odd-dimensional manifold?",
  "a": "$0$",
  "d": [
   "$1$",
   "$2$",
   "depends on $M$"
  ],
  "why": "Poincar\\u00e9 duality forces $\\chi=0$ for any closed odd-dimensional manifold.",
  "subj": "euler-characteristic",
  "diff": 4
 },
 {
  "space": "the wedge $X\\vee Y$",
  "q": "How does $\\chi(X\\vee Y)$ relate to $\\chi(X)$ and $\\chi(Y)$?",
  "a": "$\\chi(X)+\\chi(Y)-1$",
  "d": [
   "$\\chi(X)+\\chi(Y)$",
   "$\\chi(X)\\cdot\\chi(Y)$",
   "$\\chi(X)+\\chi(Y)+1$"
  ],
  "why": "Wedging identifies one point from each, so $\\chi(X\\vee Y)=\\chi(X)+\\chi(Y)-1$.",
  "subj": "euler-characteristic",
  "diff": 3
 },
 {
  "space": "the Hopf fibration",
  "q": "What is the fiber of the Hopf fibration $S^3\\to S^2$?",
  "a": "$S^1$",
  "d": [
   "$S^2$",
   "$S^3$",
   "$S^0$"
  ],
  "why": "The Hopf map $S^3\\to S^2$ comes from the circle action of unit complex scalars on $S^3\\subset\\mathbb{C}^2$, so each fiber is $S^1$.",
  "subj": "fiber-bundles",
  "diff": 2
 },
 {
  "space": "the Hopf fibration",
  "q": "What is the total space of the Hopf fibration with base $S^2$ and fiber $S^1$?",
  "a": "$S^3$",
  "d": [
   "$S^2\\times S^1$",
   "$\\mathbb{RP}^3$",
   "$T^2$"
  ],
  "why": "The Hopf fibration is $S^1\\to S^3\\to S^2$; the total space is $S^3$, which is not the trivial product $S^2\\times S^1$.",
  "subj": "fiber-bundles",
  "diff": 3
 },
 {
  "space": "the tangent bundle of an orientable surface",
  "q": "To which group does the structure group of $T\\Sigma$ reduce for $\\Sigma$ orientable with a metric?",
  "a": "$SO(2)$",
  "d": [
   "$O(2)$",
   "$GL_2(\\mathbb{R})$",
   "$U(2)$"
  ],
  "why": "A metric reduces $GL_2(\\mathbb{R})$ to $O(2)$, and an orientation further reduces it to $SO(2)$.",
  "subj": "fiber-bundles",
  "diff": 3
 },
 {
  "space": "vector bundles over a contractible CW base",
  "q": "Every vector bundle over a contractible CW complex is which kind of bundle?",
  "a": "Trivial",
  "d": [
   "Nontrivial of rank $\\geq2$",
   "A nontrivial line bundle",
   "Stably nontrivial"
  ],
  "why": "Bundles are classified by homotopy classes of maps to a classifying space; from a contractible base every such map is nullhomotopic, giving the trivial bundle.",
  "subj": "fiber-bundles",
  "diff": 3
 },
 {
  "space": "classifying spaces",
  "q": "Rank-$n$ real vector bundles over $X$ are classified by homotopy classes of maps into which space?",
  "a": "$BO(n)$",
  "d": [
   "$BU(n)$",
   "$BSO(n)$",
   "$O(n)$"
  ],
  "why": "Isomorphism classes of rank-$n$ real bundles over $X$ are in bijection with $[X,BO(n)]$, the homotopy classes of maps to the classifying space of $O(n)$.",
  "subj": "fiber-bundles",
  "diff": 3
 },
 {
  "space": "the Möbius line bundle over $S^1$",
  "q": "The M\\u00f6bius line bundle over $S^1$ is which type of bundle?",
  "a": "A nontrivial real line bundle",
  "d": [
   "A trivial real line bundle",
   "A nontrivial complex line bundle",
   "A rank-2 real bundle"
  ],
  "why": "The M\\u00f6bius bundle is the canonical nontrivial real line bundle over $S^1$, detected by the nonzero class $w_1\\in H^1(S^1;\\mathbb{Z}/2)$.",
  "subj": "fiber-bundles",
  "diff": 2
 },
 {
  "space": "a principal $G$-bundle $P\to B$",
  "q": "How does the structure group $G$ act on each fiber of a principal $G$-bundle?",
  "a": "Freely and transitively",
  "d": [
   "Trivially on each fiber",
   "Freely but not transitively",
   "Transitively but not freely"
  ],
  "why": "Fibers of a principal bundle are $G$-torsors, so $G$ acts simply transitively (both freely and transitively).",
  "subj": "fiber-bundles",
  "diff": 3
 },
 {
  "space": "an associated bundle",
  "q": "Given a principal $G$-bundle $P$ and a representation on $V$, the associated bundle is which quotient?",
  "a": "$P\\times_G V$",
  "d": [
   "$P\\times V$, no quotient",
   "$P\\oplus V$",
   "$\\mathrm{Hom}(P,V)$"
  ],
  "why": "The associated bundle $P\\times_G V$ is the quotient of $P\\times V$ by the diagonal $G$-action $(p,v)\\sim(pg,g^{-1}v)$.",
  "subj": "fiber-bundles",
  "diff": 4
 },
 {
  "space": "complex line bundles over $X$",
  "q": "Complex line bundles over $X$ are classified by which cohomology group?",
  "a": "$H^2(X;\\mathbb{Z})$",
  "d": [
   "$H^1(X;\\mathbb{Z})$",
   "$H^1(X;\\mathbb{Z}/2)$",
   "$H^2(X;\\mathbb{Z}/2)$"
  ],
  "why": "Complex line bundles correspond to $[X,\\mathbb{CP}^\\infty]\\cong H^2(X;\\mathbb{Z})$, the bijection given by the first Chern class.",
  "subj": "fiber-bundles",
  "diff": 3
 },
 {
  "space": "the clutching construction over $S^n$",
  "q": "Rank-$k$ vector bundles over $S^n$ are classified by homotopy classes of clutching functions valued in which group's homotopy?",
  "a": "$\\pi_{n-1}(GL_k)$",
  "d": [
   "$\\pi_n(GL_k)$",
   "$\\pi_{n-1}(O(n))$",
   "$\\pi_{n}(S^{k-1})$"
  ],
  "why": "Gluing two trivial bundles over the hemispheres along the equator $S^{n-1}$ gives a clutching function $S^{n-1}\\to GL_k$, so bundles correspond to $\\pi_{n-1}(GL_k)$.",
  "subj": "fiber-bundles",
  "diff": 5
 },
 {
  "space": "a fibration $F\to E\to B$ with $B$ contractible",
  "q": "Over a contractible base, the fibration is fiber-homotopy equivalent to which bundle?",
  "a": "The trivial bundle $F\\times B$",
  "d": [
   "A nontrivial bundle with fiber $F$",
   "The bundle $E\\times B$",
   "A bundle with fiber $\\Omega F$"
  ],
  "why": "A fibration over a contractible base is fiber-homotopy trivial, so $E\\simeq F\\times B\\simeq F$.",
  "subj": "fiber-bundles",
  "diff": 4
 },
 {
  "space": "the unit tangent bundle of $S^2$",
  "q": "The unit tangent bundle of $S^2$ is homeomorphic to which space?",
  "a": "$\\mathbb{RP}^3$",
  "d": [
   "$S^2\\times S^1$",
   "$S^3$",
   "$T^3$"
  ],
  "why": "The unit tangent bundle of $S^2$ is $SO(3)\\cong\\mathbb{RP}^3$; it is nontrivial precisely because $S^2$ admits no nonvanishing vector field.",
  "subj": "fiber-bundles",
  "diff": 5
 },
 {
  "space": "the Euler class of an oriented rank-$2$ bundle",
  "q": "The Euler class of an oriented rank-$2$ real bundle lives in which group?",
  "a": "$H^2(B;\\mathbb{Z})$",
  "d": [
   "$H^1(B;\\mathbb{Z})$",
   "$H^2(B;\\mathbb{Z}/2)$",
   "$H^4(B;\\mathbb{Z})$"
  ],
  "why": "The Euler class of an oriented rank-$n$ bundle lies in $H^n(B;\\mathbb{Z})$; for $n=2$ that is $H^2(B;\\mathbb{Z})$.",
  "subj": "fiber-bundles",
  "diff": 3
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
  "why": "$S^1$ is a $K(\\mathbb{Z},1)$; its universal cover $\\mathbb{R}$ has $\\mathbb{Z}$ acting by translation.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "the torus $T^2$",
  "q": "What is $\\pi_1(T^2)$?",
  "a": "$\\mathbb{Z}\\times\\mathbb{Z}$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}*\\mathbb{Z}$",
   "$0$"
  ],
  "why": "$\\pi_1$ of a product is the product of $\\pi_1$'s, giving $\\mathbb{Z}\\times\\mathbb{Z}$.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "the figure-eight $S^1\\vee S^1$",
  "q": "What is $\\pi_1(S^1\\vee S^1)$?",
  "a": "$\\mathbb{Z}*\\mathbb{Z}$",
  "d": [
   "$\\mathbb{Z}\\times\\mathbb{Z}$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2*\\mathbb{Z}/2$"
  ],
  "why": "By van Kampen, $\\pi_1$ of a wedge of two circles is the free group of rank $2$.",
  "subj": "fundamental-group",
  "diff": 2
 },
 {
  "space": "the projective plane $\\mathbb{RP}^2$",
  "q": "What is $\\pi_1(\\mathbb{RP}^2)$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$\\mathbb{Z}$",
   "$0$",
   "$\\mathbb{Z}/4$"
  ],
  "why": "$S^2\\to\\mathbb{RP}^2$ is the universal double cover, so $\\pi_1=\\mathbb{Z}/2$.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "the Klein bottle $K$",
  "q": "Which presentation gives $\\pi_1(K)$?",
  "a": "$\\langle a,b\\mid abab^{-1}\\rangle$",
  "d": [
   "$\\langle a,b\\mid aba^{-1}b^{-1}\\rangle$",
   "$\\langle a,b\\mid a^2b^2\\rangle$",
   "$\\langle a,b\\mid a^2=b^2\\rangle$"
  ],
  "why": "The Klein bottle's relator is $abab^{-1}$; the commutator relator would instead give $\\mathbb{Z}^2$.",
  "subj": "fundamental-group",
  "diff": 3
 },
 {
  "space": "a genus-$2$ surface $\\Sigma_2$",
  "q": "Which presentation gives $\\pi_1(\\Sigma_2)$?",
  "a": "$\\langle a_1,b_1,a_2,b_2\\mid[a_1,b_1][a_2,b_2]\\rangle$",
  "d": [
   "$\\langle a_1,b_1,a_2,b_2\\mid a_1b_1a_2b_2\\rangle$",
   "$\\langle a_1,b_1,a_2,b_2\\mid[a_1,a_2][b_1,b_2]\\rangle$",
   "$\\mathbb{Z}^4$"
  ],
  "why": "A genus-$g$ surface has $2g$ generators and one relator, the product of $g$ commutators.",
  "subj": "fundamental-group",
  "diff": 3
 },
 {
  "space": "$S^2$",
  "q": "What is $\\pi_1(S^2)$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\times\\mathbb{Z}$"
  ],
  "why": "Spheres $S^n$ with $n\\geq2$ are simply connected.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "the unknot complement",
  "q": "What is $\\pi_1$ of the complement of an unknot in $\\mathbb{R}^3$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}*\\mathbb{Z}$",
   "$\\mathbb{Z}\\times\\mathbb{Z}$"
  ],
  "why": "The unknot complement deformation retracts onto a linking circle, so $\\pi_1=\\mathbb{Z}$.",
  "subj": "fundamental-group",
  "diff": 3
 },
 {
  "space": "the trefoil complement",
  "q": "Which presentation gives $\\pi_1$ of the trefoil complement?",
  "a": "$\\langle a,b\\mid a^2=b^3\\rangle$",
  "d": [
   "$\\langle a,b\\mid a^3=b^2=1\\rangle$",
   "$\\mathbb{Z}\\times\\mathbb{Z}$",
   "$\\mathbb{Z}$"
  ],
  "why": "The trefoil is the $(2,3)$-torus knot, with group $\\langle a,b\\mid a^2=b^3\\rangle$, nonabelian and infinite.",
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
  "why": "$SO(3)\\cong\\mathbb{RP}^3$ with universal double cover $SU(2)\\cong S^3$, so $\\pi_1=\\mathbb{Z}/2$.",
  "subj": "fundamental-group",
  "diff": 3
 },
 {
  "space": "the lens space $L(p,q)$",
  "q": "What is $\\pi_1(L(p,q))$?",
  "a": "$\\mathbb{Z}/p$",
  "d": [
   "$\\mathbb{Z}/q$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/p\\times\\mathbb{Z}/q$"
  ],
  "why": "$L(p,q)=S^3/(\\mathbb{Z}/p)$ with $S^3$ as universal cover, so $\\pi_1=\\mathbb{Z}/p$ independent of $q$.",
  "subj": "fundamental-group",
  "diff": 4
 },
 {
  "space": "$\\mathbb{RP}^2\\vee\\mathbb{RP}^2$",
  "q": "What is $\\pi_1(\\mathbb{RP}^2\\vee\\mathbb{RP}^2)$?",
  "a": "$\\mathbb{Z}/2*\\mathbb{Z}/2$",
  "d": [
   "$\\mathbb{Z}/2\\times\\mathbb{Z}/2$",
   "$\\mathbb{Z}/4$",
   "$\\mathbb{Z}*\\mathbb{Z}$"
  ],
  "why": "Van Kampen gives the free product of the factors' groups, here $\\mathbb{Z}/2*\\mathbb{Z}/2$, the infinite dihedral group.",
  "subj": "fundamental-group",
  "diff": 3
 },
 {
  "space": "$\\mathbb{C}\\setminus\\{0\\}$",
  "q": "What is $\\pi_1(\\mathbb{C}\\setminus\\{0\\})$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\times\\mathbb{Z}$"
  ],
  "why": "$\\mathbb{C}^\\times$ deformation retracts onto the unit circle, so $\\pi_1=\\mathbb{Z}$.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "a path-connected topological group",
  "q": "The fundamental group of a topological group is always which kind of group?",
  "a": "Abelian",
  "d": [
   "Free",
   "Finite",
   "Trivial"
  ],
  "why": "The group multiplication makes $\\pi_1$ of an H-space abelian (Eckmann\\u2013Hilton), so $\\pi_1$ of a topological group is abelian.",
  "subj": "fundamental-group",
  "diff": 4
 },
 {
  "space": "$\\mathbb{R}^n$",
  "q": "What is $\\pi_1(\\mathbb{R}^n)$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}^n$",
   "depends on $n$"
  ],
  "why": "$\\mathbb{R}^n$ is convex, hence contractible, hence simply connected.",
  "subj": "fundamental-group",
  "diff": 1
 },
 {
  "space": "$S^n$ in middle degrees",
  "q": "What is $H_k(S^n;\\mathbb{Z})$ for $0<k<n$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}^k$"
  ],
  "why": "Reduced homology of $S^n$ is concentrated in degree $n$; intermediate groups vanish.",
  "subj": "homology",
  "diff": 1
 },
 {
  "space": "$S^n$ in top degree",
  "q": "What is $H_n(S^n;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$"
  ],
  "why": "$S^n$ has one $n$-cell, giving $H_n=\\mathbb{Z}$, the fundamental class.",
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
  "why": "$H_1$ is the abelianization of $\\pi_1(T^2)=\\mathbb{Z}^2$, already abelian.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "$\\mathbb{RP}^2$ in degree $1$",
  "q": "What is $H_1(\\mathbb{RP}^2;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$0$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/4$"
  ],
  "why": "$H_1=\\pi_1^{ab}=\\mathbb{Z}/2$.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "$\\mathbb{RP}^2$ in degree $2$",
  "q": "What is $H_2(\\mathbb{RP}^2;\\mathbb{Z})$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$"
  ],
  "why": "$\\mathbb{RP}^2$ is non-orientable, so its top integral homology vanishes.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "$\\mathbb{RP}^3$ in top degree",
  "q": "What is $H_3(\\mathbb{RP}^3;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$"
  ],
  "why": "$\\mathbb{RP}^3$ is orientable (odd projective spaces are), so it has a $\\mathbb{Z}$ fundamental class.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "$\\mathbb{RP}^n$ in odd middle degree",
  "q": "For $0<k<n$ odd, what is $H_k(\\mathbb{RP}^n;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$0$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$"
  ],
  "why": "Integral homology of $\\mathbb{RP}^n$ is $\\mathbb{Z}/2$ in odd degrees $0<k<n$ and $0$ in even ones.",
  "subj": "homology",
  "diff": 4
 },
 {
  "space": "the Klein bottle in degree $1$",
  "q": "What is $H_1(K;\\mathbb{Z})$ for the Klein bottle?",
  "a": "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$",
  "d": [
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$",
   "$\\mathbb{Z}/2\\oplus\\mathbb{Z}/2$",
   "$\\mathbb{Z}$"
  ],
  "why": "Abelianizing $\\langle a,b\\mid abab^{-1}\\rangle$ gives $2a=0$, so $H_1=\\mathbb{Z}\\oplus\\mathbb{Z}/2$.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "the Klein bottle in degree $2$",
  "q": "What is $H_2(K;\\mathbb{Z})$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$"
  ],
  "why": "The Klein bottle is non-orientable, so top integral homology vanishes.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "a genus-$g$ surface",
  "q": "What is $H_1(\\Sigma_g;\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}^{2g}$",
  "d": [
   "$\\mathbb{Z}^{g}$",
   "$\\mathbb{Z}^{2g}\\oplus\\mathbb{Z}/2$",
   "$\\mathbb{Z}^{g}\\oplus\\mathbb{Z}/2$"
  ],
  "why": "Abelianizing the surface group kills the single commutator relator, leaving $\\mathbb{Z}^{2g}$.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "$\\mathbb{CP}^n$ in even degree",
  "q": "What is $H_{2k}(\\mathbb{CP}^n;\\mathbb{Z})$ for $0\\leq k\\leq n$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$"
  ],
  "why": "$\\mathbb{CP}^n$ has one cell in each even dimension, so $H_{2k}=\\mathbb{Z}$.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "$\\mathbb{CP}^n$ in odd degree",
  "q": "What is $H_{\\mathrm{odd}}(\\mathbb{CP}^n;\\mathbb{Z})$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "depends on $n$"
  ],
  "why": "$\\mathbb{CP}^n$ has no odd-dimensional cells, so odd homology vanishes.",
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
  "why": "Reduced homology of a wedge is the direct sum: $\\tilde H_2=0\\oplus\\mathbb{Z}=\\mathbb{Z}$.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "the lens space $L(p,1)$",
  "q": "What is $H_1(L(p,1);\\mathbb{Z})$?",
  "a": "$\\mathbb{Z}/p$",
  "d": [
   "$\\mathbb{Z}$",
   "$0$",
   "$\\mathbb{Z}/p\\oplus\\mathbb{Z}/p$"
  ],
  "why": "$H_1=\\pi_1^{ab}=\\mathbb{Z}/p$ since $\\pi_1=\\mathbb{Z}/p$ is abelian.",
  "subj": "homology",
  "diff": 4
 },
 {
  "space": "a finite CW complex",
  "q": "The rank of the free part of $H_n(X;\\mathbb{Z})$ is called what?",
  "a": "The $n$-th Betti number",
  "d": [
   "The Euler characteristic",
   "The $n$-th torsion coefficient",
   "The fundamental class"
  ],
  "why": "The $n$-th Betti number is $\\mathrm{rank}\\,H_n(X;\\mathbb{Z})=\\dim_\\mathbb{Q}H_n(X;\\mathbb{Q})$.",
  "subj": "homology",
  "diff": 2
 },
 {
  "space": "a short exact sequence of chain complexes",
  "q": "A short exact sequence of chain complexes induces which structure on homology?",
  "a": "A long exact sequence",
  "d": [
   "A short exact sequence",
   "An isomorphism",
   "A split direct sum"
  ],
  "why": "The zig-zag lemma yields a long exact sequence with connecting homomorphisms.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "the degree of a map $S^n\\to S^n$",
  "q": "The degree of a map $f:S^n\\to S^n$ is the integer by which $f_*$ acts on which group?",
  "a": "$H_n(S^n;\\mathbb{Z})=\\mathbb{Z}$",
  "d": [
   "$H_0(S^n;\\mathbb{Z})$",
   "$\\pi_1(S^n)$",
   "$H^0(S^n;\\mathbb{Z})$"
  ],
  "why": "The degree is the integer $f_*$ acts by on $H_n(S^n)=\\mathbb{Z}$.",
  "subj": "homology",
  "diff": 3
 },
 {
  "space": "$S^n$ in low degrees",
  "q": "What is $\\pi_k(S^n)$ for $0<k<n$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}^k$"
  ],
  "why": "By cellular approximation any map $S^k\\to S^n$ with $k<n$ is nullhomotopic.",
  "subj": "homotopy-groups",
  "diff": 2
 },
 {
  "space": "$S^n$ in degree $n$",
  "q": "What is $\\pi_n(S^n)$ for $n\\geq1$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$"
  ],
  "why": "$\\pi_n(S^n)\\cong\\mathbb{Z}$, generated by the identity, detected by degree.",
  "subj": "homotopy-groups",
  "diff": 1
 },
 {
  "space": "$\\pi_3(S^2)$",
  "q": "What is $\\pi_3(S^2)$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}/12$"
  ],
  "why": "$\\pi_3(S^2)\\cong\\mathbb{Z}$, generated by the Hopf map $S^3\\to S^2$.",
  "subj": "homotopy-groups",
  "diff": 3
 },
 {
  "space": "$\\pi_4(S^3)$",
  "q": "What is $\\pi_4(S^3)$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$\\mathbb{Z}$",
   "$0$",
   "$\\mathbb{Z}/12$"
  ],
  "why": "$\\pi_4(S^3)\\cong\\mathbb{Z}/2$, generated by the suspension of the Hopf map $\\eta$.",
  "subj": "homotopy-groups",
  "diff": 4
 },
 {
  "space": "loop space homotopy",
  "q": "How does $\\pi_k(\\Omega X)$ relate to the homotopy of $X$?",
  "a": "$\\pi_k(\\Omega X)\\cong\\pi_{k+1}(X)$",
  "d": [
   "$\\pi_k(\\Omega X)\\cong\\pi_{k-1}(X)$",
   "$\\pi_k(\\Omega X)\\cong\\pi_{k}(X)$",
   "$\\pi_k(\\Omega X)\\cong\\pi_{2k}(X)$"
  ],
  "why": "The loop-space relation $\\pi_k(\\Omega X)\\cong\\pi_{k+1}(X)$ holds for all $k\\geq0$.",
  "subj": "homotopy-groups",
  "diff": 2
 },
 {
  "space": "the Hurewicz theorem",
  "q": "For an $(n-1)$-connected space ($n\\geq2$), the first nonzero $\\pi_n$ is isomorphic to what?",
  "a": "$H_n(X;\\mathbb{Z})$",
  "d": [
   "$H_1(X;\\mathbb{Z})$",
   "$H_{n-1}(X;\\mathbb{Z})$",
   "$H^n(X;\\mathbb{Z})$"
  ],
  "why": "The Hurewicz map gives $\\pi_n(X)\\cong H_n(X;\\mathbb{Z})$ for an $(n-1)$-connected space with $n\\geq2$.",
  "subj": "homotopy-groups",
  "diff": 3
 },
 {
  "space": "higher homotopy of $\\mathbb{RP}^n$",
  "q": "How does $\\pi_k(\\mathbb{RP}^n)$ compare to $\\pi_k(S^n)$ for $k\\geq2$?",
  "a": "They are isomorphic",
  "d": [
   "$\\pi_k(\\mathbb{RP}^n)=0$",
   "$\\pi_k(\\mathbb{RP}^n)=\\mathbb{Z}/2$",
   "They differ by a factor of $\\mathbb{Z}$"
  ],
  "why": "The covering $S^n\\to\\mathbb{RP}^n$ induces isomorphisms on $\\pi_k$ for all $k\\geq2$.",
  "subj": "homotopy-groups",
  "diff": 3
 },
 {
  "space": "the fibration long exact sequence",
  "q": "The long exact sequence of a fibration $F\\to E\\to B$ connects $\\pi_k(B)$ to which group?",
  "a": "$\\pi_{k-1}(F)$",
  "d": [
   "$\\pi_{k+1}(F)$",
   "$\\pi_{k}(F)$",
   "$\\pi_{k-1}(E)$"
  ],
  "why": "The connecting map sends $\\pi_k(B)\\to\\pi_{k-1}(F)$ in the long exact homotopy sequence.",
  "subj": "homotopy-groups",
  "diff": 3
 },
 {
  "space": "the first stable stem",
  "q": "What is the stable homotopy group $\\pi_1^s$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$\\mathbb{Z}$",
   "$0$",
   "$\\mathbb{Z}/24$"
  ],
  "why": "$\\pi_1^s\\cong\\mathbb{Z}/2$, generated by the stable Hopf map $\\eta$.",
  "subj": "homotopy-groups",
  "diff": 5
 },
 {
  "space": "the third stable stem",
  "q": "What is the stable homotopy group $\\pi_3^s$?",
  "a": "$\\mathbb{Z}/24$",
  "d": [
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}/12$",
   "$0$"
  ],
  "why": "$\\pi_3^s\\cong\\mathbb{Z}/24$, generated by $\\nu$, the order $24$ tied to the image of $J$.",
  "subj": "homotopy-groups",
  "diff": 5
 },
 {
  "space": "Whitehead's theorem",
  "q": "A map between which spaces, inducing isomorphisms on all $\\pi_k$, is a homotopy equivalence?",
  "a": "CW complexes",
  "d": [
   "arbitrary spaces",
   "simply connected spaces",
   "compact manifolds"
  ],
  "why": "Whitehead's theorem needs the CW hypothesis; it fails for general spaces such as the Warsaw circle.",
  "subj": "homotopy-groups",
  "diff": 3
 },
 {
  "space": "$\\pi_2$ of a Lie group",
  "q": "What is $\\pi_2(G)$ for any Lie group $G$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "depends on $G$"
  ],
  "why": "Every Lie group has $\\pi_2(G)=0$, a classical fact (true for all compact connected Lie groups and beyond).",
  "subj": "homotopy-groups",
  "diff": 4
 },
 {
  "space": "Serre finiteness",
  "q": "For $k>n$, the groups $\\pi_k(S^n)$ are which, apart from one infinite exception?",
  "a": "Finite",
  "d": [
   "Always infinite cyclic",
   "Always trivial",
   "Always $2$-torsion"
  ],
  "why": "Serre proved $\\pi_k(S^n)$ is finite for $k>n$, except $n$ even and $k=2n-1$, where a $\\mathbb{Z}$ appears.",
  "subj": "homotopy-groups",
  "diff": 5
 },
 {
  "space": "the cone $CX$",
  "q": "What is the homotopy type of the cone $CX$?",
  "a": "Contractible",
  "d": [
   "Homotopy equivalent to $X$",
   "Homotopy equivalent to $\\Sigma X$",
   "Homotopy equivalent to $\\Omega X$"
  ],
  "why": "The cone deformation retracts to its apex, so $CX$ is contractible for any $X$.",
  "subj": "homotopy-theory",
  "diff": 1
 },
 {
  "space": "the suspension $\\Sigma S^n$",
  "q": "What is $\\Sigma S^n$?",
  "a": "$S^{n+1}$",
  "d": [
   "$S^{n-1}$",
   "$S^n\\times S^1$",
   "$\\mathbb{RP}^{n+1}$"
  ],
  "why": "Suspension raises the sphere dimension by one: $\\Sigma S^n\\cong S^{n+1}$.",
  "subj": "homotopy-theory",
  "diff": 2
 },
 {
  "space": "the mapping cone of $f:X\\to Y$",
  "q": "The mapping cone $C_f$ fits into which cofiber sequence?",
  "a": "$X\\to Y\\to C_f$",
  "d": [
   "$Y\\to X\\to C_f$",
   "$C_f\\to X\\to Y$",
   "$X\\to C_f\\to Y$"
  ],
  "why": "By definition $C_f=Y\\cup_f CX$, giving the cofiber sequence $X\\to Y\\to C_f$.",
  "subj": "homotopy-theory",
  "diff": 3
 },
 {
  "space": "the Puppe sequence",
  "q": "Continuing $X\\to Y\\to C_f$, what is the next term in the Puppe sequence?",
  "a": "$\\Sigma X$",
  "d": [
   "$\\Omega X$",
   "$\\Sigma Y$",
   "$X\\times Y$"
  ],
  "why": "The Puppe sequence continues $C_f\\to\\Sigma X\\to\\Sigma Y\\to\\Sigma C_f\\to\\cdots$.",
  "subj": "homotopy-theory",
  "diff": 4
 },
 {
  "space": "homotopy equivalence and homology",
  "q": "If $X\\simeq Y$ are homotopy equivalent, how do their homology groups compare?",
  "a": "Isomorphic in every degree",
  "d": [
   "Equal only in degree $0$",
   "Possibly different",
   "Isomorphic only if simply connected"
  ],
  "why": "Homology is a homotopy invariant, so a homotopy equivalence induces isomorphisms in all degrees.",
  "subj": "homotopy-theory",
  "diff": 1
 },
 {
  "space": "CW approximation",
  "q": "Every space is weakly homotopy equivalent to which kind of space?",
  "a": "A CW complex",
  "d": [
   "A smooth manifold",
   "A simplicial complex of the same dimension",
   "A compact space"
  ],
  "why": "CW approximation provides, for any space, a CW complex and a map inducing isomorphisms on all homotopy groups.",
  "subj": "homotopy-theory",
  "diff": 2
 },
 {
  "space": "Eilenberg–MacLane spaces",
  "q": "A space $K(G,n)$ is characterized by which homotopy groups?",
  "a": "$\\pi_n=G$, all others zero",
  "d": [
   "$\\pi_k=G$ for all $k$",
   "$\\pi_1=G$, all others zero",
   "$\\pi_n=G$ and $\\pi_{n+1}=G$"
  ],
  "why": "By definition $K(G,n)$ has a single nonzero homotopy group $\\pi_n\\cong G$.",
  "subj": "homotopy-theory",
  "diff": 2
 },
 {
  "space": "$K(\\mathbb{Z},1)$",
  "q": "Which familiar space is a $K(\\mathbb{Z},1)$?",
  "a": "$S^1$",
  "d": [
   "$S^2$",
   "$\\mathbb{RP}^\\infty$",
   "$T^2$"
  ],
  "why": "$S^1$ has $\\pi_1=\\mathbb{Z}$ and contractible universal cover $\\mathbb{R}$, so all higher $\\pi_k$ vanish.",
  "subj": "homotopy-theory",
  "diff": 2
 },
 {
  "space": "$K(\\mathbb{Z}/2,1)$",
  "q": "Which space is a $K(\\mathbb{Z}/2,1)$?",
  "a": "$\\mathbb{RP}^\\infty$",
  "d": [
   "$\\mathbb{RP}^2$",
   "$S^1$",
   "$\\mathbb{CP}^\\infty$"
  ],
  "why": "$\\mathbb{RP}^\\infty=S^\\infty/(\\mathbb{Z}/2)$ has $\\pi_1=\\mathbb{Z}/2$ and contractible universal cover $S^\\infty$, so it is a $K(\\mathbb{Z}/2,1)$.",
  "subj": "homotopy-theory",
  "diff": 3
 },
 {
  "space": "the mapping torus of $\\mathrm{id}_X$",
  "q": "The mapping torus of the identity map on $X$ is which space?",
  "a": "$X\\times S^1$",
  "d": [
   "$\\Sigma X$",
   "$X$ itself",
   "$X\\vee S^1$"
  ],
  "why": "The mapping torus of $\\mathrm{id}_X$ glues $X\\times[0,1]$ end to end without twisting, giving $X\\times S^1$.",
  "subj": "homotopy-theory",
  "diff": 3
 },
 {
  "space": "Whitehead's theorem",
  "q": "Whitehead's theorem upgrades a weak equivalence to a homotopy equivalence between which spaces?",
  "a": "CW complexes",
  "d": [
   "Arbitrary topological spaces",
   "Simply connected spaces",
   "Compact manifolds"
  ],
  "why": "A map of CW complexes inducing isomorphisms on all $\\pi_k$ is a homotopy equivalence; the CW hypothesis is essential.",
  "subj": "homotopy-theory",
  "diff": 3
 },
 {
  "space": "loop space and suspension adjunction",
  "q": "The functors $\\Sigma$ and $\\Omega$ form an adjunction in which order?",
  "a": "$\\Sigma$ is left adjoint to $\\Omega$",
  "d": [
   "$\\Omega$ is left adjoint to $\\Sigma$",
   "They are inverse equivalences",
   "Neither is adjoint to the other"
  ],
  "why": "There is a natural bijection $[\\Sigma X,Y]\\cong[X,\\Omega Y]$, so $\\Sigma\\dashv\\Omega$.",
  "subj": "homotopy-theory",
  "diff": 4
 },
 {
  "space": "a fibration with contractible total space",
  "q": "If $F\\to E\\to B$ is a fibration with $E$ contractible, then $\\Omega B$ is weakly equivalent to what?",
  "a": "$F$",
  "d": [
   "$B$",
   "$\\Sigma F$",
   "a point"
  ],
  "why": "The long exact sequence gives $\\pi_k(F)\\cong\\pi_{k+1}(B)\\cong\\pi_k(\\Omega B)$, so $F\\simeq\\Omega B$ when $E$ is contractible (the path-loop fibration).",
  "subj": "homotopy-theory",
  "diff": 5
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
  "why": "$K^0(\\mathrm{pt})$ is the Grothendieck group of vector spaces over a point, classified by dimension, giving $\\mathbb{Z}$.",
  "subj": "k-theory",
  "diff": 2
 },
 {
  "space": "complex Bott periodicity",
  "q": "Complex topological K-theory $KU$ is periodic with which period?",
  "a": "$2$",
  "d": [
   "$8$",
   "$4$",
   "$1$"
  ],
  "why": "Bott periodicity gives $KU^n\\cong KU^{n+2}$, period $2$, reflecting $\\Omega^2(\\mathbb{Z}\\times BU)\\simeq\\mathbb{Z}\\times BU$.",
  "subj": "k-theory",
  "diff": 3
 },
 {
  "space": "real Bott periodicity",
  "q": "Real topological K-theory $KO$ is periodic with which period?",
  "a": "$8$",
  "d": [
   "$2$",
   "$4$",
   "$1$"
  ],
  "why": "Real K-theory has period $8$, the Clifford-algebra periodicity reflected in $\\pi_i(O)$.",
  "subj": "k-theory",
  "diff": 4
 },
 {
  "space": "reduced K-theory of even spheres",
  "q": "What is $\\tilde K^0(S^{2n})$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}^n$"
  ],
  "why": "$\\tilde K^0(S^{2n})\\cong\\mathbb{Z}$, generated by the $n$-fold product of the Bott class $(H-1)$.",
  "subj": "k-theory",
  "diff": 4
 },
 {
  "space": "reduced K-theory of odd spheres",
  "q": "What is $\\tilde K^0(S^{2n+1})$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}/(2n+1)$"
  ],
  "why": "Every complex bundle over an odd sphere is stably trivial; Bott periodicity reduces this to $\\tilde K^0(S^1)=0$.",
  "subj": "k-theory",
  "diff": 4
 },
 {
  "space": "the Chern character",
  "q": "The Chern character maps K-theory isomorphically (rationally) onto which theory?",
  "a": "Rational cohomology $H^{even}(X;\\mathbb{Q})$",
  "d": [
   "Integral cohomology $H^{even}(X;\\mathbb{Z})$",
   "Rational homology $H_{even}(X;\\mathbb{Q})$",
   "Stable cohomotopy of $X$"
  ],
  "why": "The Chern character $\\mathrm{ch}:K^0(X)\\otimes\\mathbb{Q}\\to H^{even}(X;\\mathbb{Q})$ is a ring isomorphism for finite CW complexes.",
  "subj": "k-theory",
  "diff": 3
 },
 {
  "space": "algebraic $K_0$ of a ring",
  "q": "$K_0(R)$ is the Grothendieck group of which class of modules?",
  "a": "Finitely generated projective modules",
  "d": [
   "All finitely generated modules",
   "Finitely generated free modules",
   "Simple modules"
  ],
  "why": "$K_0(R)$ group-completes the monoid of f.g. projective modules under direct sum.",
  "subj": "k-theory",
  "diff": 3
 },
 {
  "space": "$K_0$ of a field",
  "q": "What is $K_0(F)$ for a field $F$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$F^\\times$",
   "$\\mathbb{Z}\\oplus F^\\times$"
  ],
  "why": "Every f.g. projective module over a field is free, classified by dimension, so $K_0(F)=\\mathbb{Z}$.",
  "subj": "k-theory",
  "diff": 2
 },
 {
  "space": "the Atiyah–Hirzebruch SS in K-theory",
  "q": "For computing $K^*(X)$, the AHSS has $E_2$ page equal to what?",
  "a": "$H^p(X;K^q(\\mathrm{pt}))$",
  "d": [
   "$K^p(X;H^q(\\mathrm{pt}))$",
   "$H^p(X;H^q(\\mathrm{pt}))$",
   "$K^p(\\mathrm{pt};H^q(X))$"
  ],
  "why": "The AHSS for $K$-theory has $E_2^{p,q}=H^p(X;K^q(\\mathrm{pt}))$, with $K^q(\\mathrm{pt})=\\mathbb{Z}$ for $q$ even and $0$ for $q$ odd.",
  "subj": "k-theory",
  "diff": 4
 },
 {
  "space": "Adams operations $\\psi^k$",
  "q": "Adams operations satisfy which composition law on $K^0(X)$?",
  "a": "$\\psi^k\\circ\\psi^l=\\psi^{kl}$",
  "d": [
   "$\\psi^k\\circ\\psi^l=\\psi^{k+l}$",
   "$\\psi^k\\circ\\psi^l=\\psi^{k}+\\psi^{l}$",
   "$\\psi^k\\circ\\psi^l=\\psi^{\\gcd(k,l)}$"
  ],
  "why": "Adams operations form a commuting family of ring endomorphisms with $\\psi^k\\psi^l=\\psi^{kl}$, from the $\\lambda$-ring structure.",
  "subj": "k-theory",
  "diff": 4
 },
 {
  "space": "$K_1$ of a field",
  "q": "What is $K_1(F)$ for a field $F$?",
  "a": "$F^\\times$",
  "d": [
   "$\\mathbb{Z}$",
   "$0$",
   "$F$ additively"
  ],
  "why": "$K_1(F)=GL(F)^{ab}=F^\\times$ by the determinant, since elementary matrices generate $SL$.",
  "subj": "k-theory",
  "diff": 5
 },
 {
  "space": "the $J$-homomorphism",
  "q": "The image of the $J$-homomorphism in $\\pi_3^s=\\mathbb{Z}/24$ has which order?",
  "a": "$24$",
  "d": [
   "$2$",
   "$12$",
   "$1$"
  ],
  "why": "In stem $3$ the $J$-homomorphism is surjective onto $\\pi_3^s=\\mathbb{Z}/24$, so its image has order $24$; the denominators of $B_{2k}/4k$ govern these orders.",
  "subj": "k-theory",
  "diff": 5
 },
 {
  "space": "the unknot",
  "q": "What is the Seifert genus of the unknot?",
  "a": "$0$",
  "d": [
   "$1$",
   "$2$",
   "$3$"
  ],
  "why": "The unknot bounds a disk, a genus-$0$ Seifert surface, and this is minimal.",
  "subj": "knot-theory",
  "diff": 2
 },
 {
  "space": "the trefoil knot",
  "q": "What is the crossing number of the trefoil?",
  "a": "$3$",
  "d": [
   "$1$",
   "$4$",
   "$5$"
  ],
  "why": "The trefoil is the simplest nontrivial knot, with minimal crossing number $3$.",
  "subj": "knot-theory",
  "diff": 1
 },
 {
  "space": "the Alexander polynomial of the unknot",
  "q": "What is the Alexander polynomial of the unknot?",
  "a": "$1$",
  "d": [
   "$0$",
   "$t-1$",
   "$t+1$"
  ],
  "why": "By the standard normalization the unknot has Alexander polynomial $\\Delta(t)=1$.",
  "subj": "knot-theory",
  "diff": 3
 },
 {
  "space": "the trefoil and its mirror",
  "q": "The Jones polynomial distinguishes the trefoil from its mirror, showing the trefoil has which property?",
  "a": "It is chiral",
  "d": [
   "It is amphichiral",
   "It is the unknot",
   "It is a torus link"
  ],
  "why": "The Jones polynomial of the trefoil differs from its mirror's, so the trefoil is not equivalent to its mirror image (chiral).",
  "subj": "knot-theory",
  "diff": 4
 },
 {
  "space": "connected sum of knots",
  "q": "Which algebraic structure do knots form under connected sum?",
  "a": "A commutative monoid",
  "d": [
   "A group",
   "A non-commutative monoid",
   "A field"
  ],
  "why": "Connected sum is commutative and associative with the unknot as identity, but knots have no inverses, so it is a commutative monoid.",
  "subj": "knot-theory",
  "diff": 2
 },
 {
  "space": "prime knots",
  "q": "A knot is prime if it is not a connected sum of which kind?",
  "a": "Two nontrivial knots",
  "d": [
   "A knot with the unknot",
   "A knot with itself",
   "Two links"
  ],
  "why": "Prime knots are those not expressible as a connected sum of two nontrivial knots, analogous to prime numbers.",
  "subj": "knot-theory",
  "diff": 2
 },
 {
  "space": "the figure-eight knot",
  "q": "Which property does the figure-eight knot have?",
  "a": "It is amphichiral",
  "d": [
   "It is chiral",
   "It is a torus knot",
   "It has crossing number $3$"
  ],
  "why": "The figure-eight knot is the simplest amphichiral knot, equivalent to its mirror image; its crossing number is $4$.",
  "subj": "knot-theory",
  "diff": 4
 },
 {
  "space": "two unlinked circles",
  "q": "What is the linking number of two unknotted, unlinked circles?",
  "a": "$0$",
  "d": [
   "$1$",
   "$2$",
   "$-1$"
  ],
  "why": "Unlinked circles bound disjoint disks, so their signed crossing count, the linking number, is $0$.",
  "subj": "knot-theory",
  "diff": 2
 },
 {
  "space": "the Gordon–Luecke theorem",
  "q": "Knots in $S^3$ are determined (up to mirror image) by which data?",
  "a": "Their complement",
  "d": [
   "Their Alexander polynomial",
   "Their crossing number",
   "Their genus"
  ],
  "why": "Gordon\\u2013Luecke proved that two knots with homeomorphic complements are equivalent up to mirror image.",
  "subj": "knot-theory",
  "diff": 5
 },
 {
  "space": "torus knots",
  "q": "The $(p,q)$-torus knot is nontrivial precisely when both $p,q$ satisfy what?",
  "a": "$|p|,|q|\\geq2$ and coprime",
  "d": [
   "$p=q$",
   "$p,q$ both even",
   "$pq$ is prime"
  ],
  "why": "A $(p,q)$ curve on the torus is a nontrivial knot exactly when $p,q$ are coprime with $|p|,|q|\\geq2$ (otherwise it is an unknot).",
  "subj": "knot-theory",
  "diff": 4
 },
 {
  "space": "the genus of a connected sum",
  "q": "How does Seifert genus behave under connected sum of knots?",
  "a": "It is additive",
  "d": [
   "It is multiplicative",
   "It is the maximum",
   "It can decrease"
  ],
  "why": "Seifert genus is additive: $g(K_1\\#K_2)=g(K_1)+g(K_2)$, a theorem of Schubert.",
  "subj": "knot-theory",
  "diff": 5
 },
 {
  "space": "the bridge number of the unknot",
  "q": "What is the bridge number of the unknot?",
  "a": "$1$",
  "d": [
   "$0$",
   "$2$",
   "$3$"
  ],
  "why": "The unknot has bridge number $1$; bridge number $1$ knots are exactly the unknot.",
  "subj": "knot-theory",
  "diff": 3
 },
 {
  "space": "$U(1)$",
  "q": "The Lie group $U(1)$ is homeomorphic to which space?",
  "a": "$S^1$",
  "d": [
   "$\\mathbb{R}$",
   "$S^3$",
   "$S^2$"
  ],
  "why": "$U(1)$ is the unit complex numbers, i.e. the circle $S^1$.",
  "subj": "lie-groups",
  "diff": 1
 },
 {
  "space": "$SU(2)$",
  "q": "The Lie group $SU(2)$ is homeomorphic to which space?",
  "a": "$S^3$",
  "d": [
   "$S^2$",
   "$\\mathbb{RP}^3$",
   "$T^3$"
  ],
  "why": "$SU(2)$ is the unit quaternions, identified with $S^3\\subset\\mathbb{H}$.",
  "subj": "lie-groups",
  "diff": 2
 },
 {
  "space": "$SU(2)$ and $SO(3)$",
  "q": "What is the relationship between $SU(2)$ and $SO(3)$?",
  "a": "$SU(2)$ double covers $SO(3)$",
  "d": [
   "$SO(3)$ double covers $SU(2)$",
   "They are isomorphic",
   "They are unrelated"
  ],
  "why": "There is a $2$-to-$1$ homomorphism $SU(2)\\to SO(3)$ with kernel $\\{\\pm I\\}$, and $SU(2)\\cong S^3$ is the universal cover.",
  "subj": "lie-groups",
  "diff": 3
 },
 {
  "space": "$SO(n)$ for $n\\geq3$",
  "q": "What is $\\pi_1(SO(n))$ for $n\\geq3$?",
  "a": "$\\mathbb{Z}/2$",
  "d": [
   "$0$",
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/n$"
  ],
  "why": "For $n\\geq3$, $SO(n)$ has fundamental group $\\mathbb{Z}/2$, with universal cover $\\mathrm{Spin}(n)$.",
  "subj": "lie-groups",
  "diff": 3
 },
 {
  "space": "compact connected Lie groups",
  "q": "Every compact connected Lie group contains a maximal torus that is unique up to what?",
  "a": "Conjugation",
  "d": [
   "Isomorphism only",
   "Translation",
   "Nothing; it is literally unique"
  ],
  "why": "The maximal torus theorem: maximal tori exist and any two are conjugate.",
  "subj": "lie-groups",
  "diff": 3
 },
 {
  "space": "compact simple Lie groups",
  "q": "What is $\\pi_3(G)$ for any compact simple Lie group $G$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$"
  ],
  "why": "Every compact simple Lie group has $\\pi_3(G)\\cong\\mathbb{Z}$, the level detected by the Killing form.",
  "subj": "lie-groups",
  "diff": 4
 },
 {
  "space": "any Lie group",
  "q": "What is $\\pi_2(G)$ for any Lie group $G$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "depends on $G$"
  ],
  "why": "$\\pi_2$ of any Lie group vanishes, a classical theorem.",
  "subj": "lie-groups",
  "diff": 4
 },
 {
  "space": "$O(n)$",
  "q": "How many connected components does $O(n)$ have?",
  "a": "$2$",
  "d": [
   "$1$",
   "$n$",
   "infinitely many"
  ],
  "why": "$O(n)$ splits by determinant $\\pm1$ into two components; $SO(n)$ is the identity component.",
  "subj": "lie-groups",
  "diff": 1
 },
 {
  "space": "the Lie algebra of $G$",
  "q": "The tangent space at the identity of a Lie group carries which structure?",
  "a": "A Lie bracket",
  "d": [
   "An associative product",
   "A field structure",
   "Only a vector space structure"
  ],
  "why": "$T_eG$ inherits the Lie bracket from commutators of left-invariant vector fields, forming the Lie algebra.",
  "subj": "lie-groups",
  "diff": 2
 },
 {
  "space": "$U(n)$",
  "q": "What is $\\pi_1(U(n))$ for $n\\geq1$?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}^n$"
  ],
  "why": "The determinant $U(n)\\to U(1)=S^1$ induces an isomorphism on $\\pi_1$, giving $\\pi_1(U(n))=\\mathbb{Z}$.",
  "subj": "lie-groups",
  "diff": 4
 },
 {
  "space": "$SU(n)$",
  "q": "What is $\\pi_1(SU(n))$ for $n\\geq2$?",
  "a": "$0$",
  "d": [
   "$\\mathbb{Z}$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}/n$"
  ],
  "why": "$SU(n)$ is simply connected for all $n\\geq2$.",
  "subj": "lie-groups",
  "diff": 3
 },
 {
  "space": "the exponential map",
  "q": "For a compact connected Lie group, the exponential map $\\mathfrak{g}\\to G$ is which kind of map?",
  "a": "Surjective",
  "d": [
   "Injective",
   "A diffeomorphism",
   "Never surjective"
  ],
  "why": "For compact connected Lie groups the exponential map is surjective, though generally neither injective nor a global diffeomorphism.",
  "subj": "lie-groups",
  "diff": 5
 },
 {
  "space": "parallelizable spheres",
  "q": "For which $n$ is $S^n$ parallelizable (tangent bundle trivial)?",
  "a": "$n=1,3,7$",
  "d": [
   "all odd $n$",
   "only $n=1$",
   "all $n$"
  ],
  "why": "By the Hopf-invariant-one / division-algebra theorem, $S^n$ is parallelizable exactly for $n=1,3,7$, tied to $\\mathbb{C},\\mathbb{H},\\mathbb{O}$.",
  "subj": "manifolds",
  "diff": 5
 },
 {
  "space": "vector fields on spheres",
  "q": "On which spheres does a nowhere-vanishing continuous vector field exist?",
  "a": "Exactly the odd-dimensional spheres",
  "d": [
   "Exactly the even-dimensional spheres",
   "All spheres of dimension $\\geq2$",
   "Only $S^1$ and $S^3$"
  ],
  "why": "$\\chi(S^n)=0$ iff $n$ is odd; by Poincar\\u00e9\\u2013Hopf a nowhere-zero field exists exactly when $\\chi=0$, i.e. on odd spheres.",
  "subj": "manifolds",
  "diff": 3
 },
 {
  "space": "the Poincaré–Hopf theorem",
  "q": "The sum of indices of a vector field's zeros on a closed manifold equals which invariant?",
  "a": "The Euler characteristic",
  "d": [
   "The signature",
   "The Betti number $b_1$",
   "The dimension"
  ],
  "why": "Poincar\\u00e9\\u2013Hopf: for a vector field with isolated zeros on a closed manifold, the signed index sum equals $\\chi(M)$.",
  "subj": "manifolds",
  "diff": 3
 },
 {
  "space": "smooth structures on $S^7$",
  "q": "How many oriented smooth structures does the topological $7$-sphere carry?",
  "a": "$28$",
  "d": [
   "$1$",
   "$7$",
   "infinitely many"
  ],
  "why": "Kervaire\\u2013Milnor showed the group of homotopy $7$-spheres is $\\mathbb{Z}/28$, so $S^7$ has $28$ oriented smooth structures, the first exotic spheres found by Milnor.",
  "subj": "manifolds",
  "diff": 5
 },
 {
  "space": "the Whitney embedding theorem",
  "q": "The strong Whitney theorem embeds every smooth $n$-manifold into which Euclidean space?",
  "a": "$\\mathbb{R}^{2n}$",
  "d": [
   "$\\mathbb{R}^{2n+1}$",
   "$\\mathbb{R}^{n+1}$",
   "$\\mathbb{R}^{n^2}$"
  ],
  "why": "The strong Whitney embedding theorem gives an embedding into $\\mathbb{R}^{2n}$ for $n>0$; the easy version gives $\\mathbb{R}^{2n+1}$.",
  "subj": "manifolds",
  "diff": 4
 },
 {
  "space": "orientability via homology",
  "q": "A closed connected $n$-manifold is orientable iff $H_n(M;\\mathbb{Z})$ equals what?",
  "a": "$\\mathbb{Z}$",
  "d": [
   "$0$",
   "$\\mathbb{Z}/2$",
   "$\\mathbb{Z}\\oplus\\mathbb{Z}$"
  ],
  "why": "For a closed connected $n$-manifold $H_n(M;\\mathbb{Z})$ is $\\mathbb{Z}$ when orientable and $0$ when not, so it detects orientability.",
  "subj": "manifolds",
  "diff": 3
 },
 {
  "space": "the $h$-cobordism theorem",
  "q": "The $h$-cobordism theorem (Smale) holds for manifolds of dimension at least what?",
  "a": "$5$",
  "d": [
   "$3$",
   "$4$",
   "$7$"
  ],
  "why": "The Whitney trick needs dimension $\\geq5$ to remove intersections, so Smale's $h$-cobordism theorem applies for $\\dim\\geq5$ (and fails in dimension $4$).",
  "subj": "manifolds",
  "diff": 5
 },
 {
  "space": "connected sum of $n$-manifolds",
  "q": "Connected sum glues two $n$-manifolds along which submanifold?",
  "a": "A sphere $S^{n-1}$",
  "d": [
   "A disk $D^{n-1}$",
   "A point",
   "A torus $T^{n-1}$"
  ],
  "why": "Each removed open $n$-disk has boundary $S^{n-1}$; the two boundary spheres are glued by an orientation-reversing diffeomorphism.",
  "subj": "manifolds",
  "diff": 2
 },
 {
  "space": "a closed manifold bounding",
  "q": "A closed $n$-manifold is null-cobordant iff all of which numbers vanish?",
  "a": "Its Stiefel\\u2013Whitney numbers",
  "d": [
   "Its Betti numbers",
   "Its Pontryagin numbers alone",
   "Its Euler characteristic only"
  ],
  "why": "Thom's theorem: a closed manifold bounds (unoriented) iff all its Stiefel\\u2013Whitney numbers vanish.",
  "subj": "manifolds",
  "diff": 5
 },
 {
  "space": "the boundary of a manifold-with-boundary",
  "q": "The boundary $\\partial M$ of a compact $n$-manifold-with-boundary is which kind of manifold?",
  "a": "A closed $(n-1)$-manifold",
  "d": [
   "A closed $n$-manifold",
   "An $(n-1)$-manifold with boundary",
   "An open $(n-1)$-manifold"
  ],
  "why": "The boundary of a compact manifold-with-boundary is itself a closed (compact, boundaryless) manifold of dimension $n-1$.",
  "subj": "manifolds",
  "diff": 2
 },
 {
  "space": "the signature of a $4k$-manifold",
  "q": "The signature of a closed oriented $4k$-manifold is defined from the intersection form on which group?",
  "a": "$H^{2k}(M;\\mathbb{R})$",
  "d": [
   "$H^{k}(M;\\mathbb{R})$",
   "$H^{4k}(M;\\mathbb{R})$",
   "$H_1(M;\\mathbb{R})$"
  ],
  "why": "The signature is the signature of the symmetric intersection pairing on middle cohomology $H^{2k}(M;\\mathbb{R})$.",
  "subj": "manifolds",
  "diff": 5
 },
 {
  "space": "exotic $\\mathbb{R}^n$",
  "q": "For which dimension $n$ does $\\mathbb{R}^n$ admit exotic smooth structures?",
  "a": "$n=4$",
  "d": [
   "$n=3$",
   "$n=7$",
   "every $n\\geq4$"
  ],
  "why": "$\\mathbb{R}^n$ has a unique smooth structure for all $n\\neq4$; only $\\mathbb{R}^4$ admits exotic (indeed uncountably many) smooth structures.",
  "subj": "manifolds",
  "diff": 5
 },
 {
  "space": "a simply connected closed $3$-manifold",
  "q": "By the Poincar\\u00e9 conjecture, a simply connected closed $3$-manifold is homeomorphic to what?",
  "a": "$S^3$",
  "d": [
   "$\\mathbb{RP}^3$",
   "$S^2\\times S^1$",
   "$T^3$"
  ],
  "why": "Perelman's proof of the Poincar\\u00e9 conjecture shows every simply connected closed $3$-manifold is homeomorphic to $S^3$.",
  "subj": "manifolds",
  "diff": 4
 },
 {
  "space": "the Serre spectral sequence of $F\\to E\\to B$",
  "q": "For $B$ simply connected, the $E_2$ page of the (cohomology) Serre SS is what?",
  "a": "$E_2^{p,q}=H^p(B;H^q(F))$",
  "d": [
   "$E_2^{p,q}=H^p(F;H^q(B))$",
   "$E_2^{p,q}=H^q(B;H^p(F))$",
   "$E_2^{p,q}=H^p(E;H^q(F))$"
  ],
  "why": "The cohomology Serre SS has $E_2^{p,q}=H^p(B;H^q(F))$, converging to $H^{p+q}(E)$; the base contributes the $p$ index and the fiber the $q$ index.",
  "subj": "spectral-sequences",
  "diff": 4
 },
 {
  "space": "the Serre SS",
  "q": "The Serre spectral sequence of a fibration converges to which graded group?",
  "a": "$H^{p+q}(E)$",
  "d": [
   "$H^{p+q}(B)$",
   "$H^{p+q}(F)$",
   "$H^p(B)\\otimes H^q(F)$"
  ],
  "why": "The Serre SS computes the cohomology of the total space $E$ from that of the base and fiber.",
  "subj": "spectral-sequences",
  "diff": 3
 },
 {
  "space": "the Serre SS for $S^1\\to S^3\\to S^2$",
  "q": "Which differential is nonzero in the Serre SS computing $H^*(S^3)$ from this fibration?",
  "a": "$d_2:E_2^{0,1}\\to E_2^{2,0}$",
  "d": [
   "$d_2:E_2^{2,0}\\to E_2^{0,1}$",
   "$d_3:E_3^{0,1}\\to E_3^{3,0}$",
   "$d_2:E_2^{1,0}\\to E_2^{0,2}$"
  ],
  "why": "A class in $E_2^{2,0}=H^2(S^2)$ would give $H^2(S^3)\\neq0$ unless killed; the only differential of correct bidegree is $d_2:E_2^{0,1}\\to E_2^{2,0}$, which must be an isomorphism.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "a first-quadrant spectral sequence",
  "q": "The differential $d_r$ on the $E_r$ page has which bidegree (cohomological convention)?",
  "a": "$(r,1-r)$",
  "d": [
   "$(1-r,r)$",
   "$(r,r-1)$",
   "$(r-1,r)$"
  ],
  "why": "In the cohomological convention $d_r:E_r^{p,q}\\to E_r^{p+r,q-r+1}$, i.e. bidegree $(r,1-r)$, moving $r$ right and $r-1$ down.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "convergence of a spectral sequence to $H^n$",
  "q": "What does the $E_\\infty$ page recover when a SS converges to $H^n$?",
  "a": "The associated graded of a filtration on $H^n$",
  "d": [
   "The group $H^n$ itself, on the nose",
   "A single summand equal to $H^n$",
   "A canonical splitting of $H^n$"
  ],
  "why": "Convergence recovers $H^n$ only up to associated graded: $\\bigoplus_{p+q=n}E_\\infty^{p,q}$ is the graded of a filtration on $H^n$, leaving possible extension problems.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "the Atiyah–Hirzebruch SS for $E^*(X)$",
  "q": "The $E_2$ page of the AHSS for a generalized theory $E^*$ is built from what?",
  "a": "$H^p(X;E^q(\\mathrm{pt}))$",
  "d": [
   "$E^p(X;H^q(\\mathrm{pt}))$",
   "$H^p(X;H^q(\\mathrm{pt}))$",
   "$E^p(\\mathrm{pt};H^q(X))$"
  ],
  "why": "The AHSS has $E_2^{p,q}=H^p(X;E^q(\\mathrm{pt}))$, ordinary cohomology of $X$ with coefficients in the theory's coefficient groups, converging to $E^{p+q}(X)$.",
  "subj": "spectral-sequences",
  "diff": 4
 },
 {
  "space": "the Leray–Hirsch theorem",
  "q": "Leray\\u2013Hirsch gives $H^*(E)\\cong H^*(B)\\otimes H^*(F)$ as modules under which hypothesis?",
  "a": "Global classes in $H^*(E)$ restrict to a fiber basis",
  "d": [
   "The base $B$ is simply connected",
   "The fiber $F$ has finite cohomology",
   "The total space $E$ is compact"
  ],
  "why": "Leray\\u2013Hirsch requires fiber cohomology to be spanned by classes pulled back from $E$; this forces the Serre SS to collapse at $E_2$.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "the Eilenberg–Moore spectral sequence",
  "q": "The Eilenberg\\u2013Moore SS computes the cohomology of which construction?",
  "a": "A homotopy pullback (e.g. fiber of a map)",
  "d": [
   "A product $X\\times Y$ of spaces",
   "A quotient $X/G$ by a group action",
   "A mapping cone of a map"
  ],
  "why": "The Eilenberg\\u2013Moore SS computes $H^*$ of a homotopy pullback via $\\mathrm{Tor}$ over $H^*$ of the base, with the fiber of a map as the key case.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "a spectral sequence collapsing at $E_2$",
  "q": "\"Collapses at $E_2$\" means which condition on the differentials?",
  "a": "All differentials $d_r$ vanish for $r\\geq2$",
  "d": [
   "All differentials $d_r$ vanish for $r\\geq3$",
   "Only the differential $d_2$ is nonzero",
   "The $E_2$ page lies in a single row"
  ],
  "why": "Collapse at $E_2$ means $E_2=E_\\infty$: every differential $d_r$ with $r\\geq2$ is zero, so $E_2$ already gives the associated graded.",
  "subj": "spectral-sequences",
  "diff": 4
 },
 {
  "space": "the Künneth spectral sequence",
  "q": "Over a general ring, the K\\u00fcnneth SS for $H_*(X\\times Y)$ has $E_2$ involving which functor?",
  "a": "$\\mathrm{Tor}$ of $H_*(X)$ and $H_*(Y)$",
  "d": [
   "$\\mathrm{Ext}$ of $H_*(X)$ and $H_*(Y)$",
   "$\\mathrm{Hom}$ of $H_*(X)$ and $H_*(Y)$",
   "the tensor product, with no derived terms"
  ],
  "why": "Over a general ground ring the K\\u00fcnneth formula picks up $\\mathrm{Tor}$ corrections; the SS has $E_2^{p,q}$ given by $\\mathrm{Tor}_p(H_*(X),H_*(Y))$ in total degree $q$.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "the transgression in the Serre SS",
  "q": "Transgression relates a fiber class in degree $n$ to a base class in which degree?",
  "a": "Degree $n+1$",
  "d": [
   "Degree $n-1$",
   "Degree $n$",
   "Degree $2n$"
  ],
  "why": "The transgression $d_{n+1}:E_{n+1}^{0,n}\\to E_{n+1}^{n+1,0}$ sends a degree-$n$ fiber class to a degree-$(n+1)$ base class.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "the five-term exact sequence",
  "q": "The five-term exact sequence of a first-quadrant SS features which differential?",
  "a": "$d_2:E_2^{0,1}\\to E_2^{2,0}$",
  "d": [
   "$d_2:E_2^{2,0}\\to E_2^{0,1}$",
   "$d_3:E_3^{0,2}\\to E_3^{3,0}$",
   "$d_2:E_2^{1,1}\\to E_2^{3,0}$"
  ],
  "why": "The five-term sequence $0\\to E_2^{1,0}\\to H^1\\to E_2^{0,1}\\xrightarrow{d_2}E_2^{2,0}\\to H^2$ uses the transgression $d_2:E_2^{0,1}\\to E_2^{2,0}$.",
  "subj": "spectral-sequences",
  "diff": 5
 },
 {
  "space": "closed orientable surfaces",
  "q": "Every closed connected orientable surface is homeomorphic to which model?",
  "a": "A genus-$g$ surface $\\Sigma_g$",
  "d": [
   "A sphere $S^2$ only",
   "A connected sum of $\\mathbb{RP}^2$'s",
   "A torus $T^2$ only"
  ],
  "why": "The classification theorem: closed orientable surfaces are exactly the $\\Sigma_g$, a sphere with $g$ handles, classified by genus.",
  "subj": "surfaces",
  "diff": 2
 },
 {
  "space": "closed non-orientable surfaces",
  "q": "Every closed connected non-orientable surface is homeomorphic to which model?",
  "a": "A connected sum of copies of $\\mathbb{RP}^2$",
  "d": [
   "A genus-$g$ surface $\\Sigma_g$",
   "The Klein bottle only",
   "A connected sum of tori"
  ],
  "why": "Non-orientable closed surfaces are classified by crosscap number $k\\geq1$: connected sums $\\mathbb{RP}^2\\#\\cdots\\#\\mathbb{RP}^2$.",
  "subj": "surfaces",
  "diff": 2
 },
 {
  "space": "the Klein bottle",
  "q": "The Klein bottle is homeomorphic to which connected sum?",
  "a": "$\\mathbb{RP}^2\\#\\mathbb{RP}^2$",
  "d": [
   "$T^2\\#T^2$",
   "$\\mathbb{RP}^2\\#T^2$",
   "$S^2\\#\\mathbb{RP}^2$"
  ],
  "why": "A classical identity in surface classification: the Klein bottle equals the connected sum of two projective planes.",
  "subj": "surfaces",
  "diff": 3
 },
 {
  "space": "the Möbius band",
  "q": "Which property does the M\\u00f6bius band have?",
  "a": "It is non-orientable",
  "d": [
   "It is orientable",
   "It is closed",
   "It has two boundary circles"
  ],
  "why": "The M\\u00f6bius band is the standard non-orientable surface-with-boundary; traversing its core circle reverses orientation, and it has a single boundary circle.",
  "subj": "surfaces",
  "diff": 1
 },
 {
  "space": "the orientation double cover",
  "q": "The orientation double cover of a non-orientable surface is which kind of cover?",
  "a": "A connected orientable double cover",
  "d": [
   "A disconnected double cover",
   "A non-orientable double cover",
   "A trivial double cover"
  ],
  "why": "Every connected non-orientable manifold has a connected orientable double cover, its orientation cover.",
  "subj": "surfaces",
  "diff": 3
 },
 {
  "space": "invariants of closed surfaces",
  "q": "Together with orientability, which invariant classifies closed surfaces?",
  "a": "The Euler characteristic",
  "d": [
   "The fundamental group's order",
   "The number of triangles in a triangulation",
   "The first Betti number with $\\mathbb{Z}/2$ coefficients"
  ],
  "why": "Orientability plus $\\chi$ (equivalently genus or crosscap number) completely classifies closed surfaces up to homeomorphism.",
  "subj": "surfaces",
  "diff": 3
 },
 {
  "space": "genus and crosscaps",
  "q": "A genus-$g$ orientable surface has the same $\\chi$ as how many crosscaps?",
  "a": "$2g$ crosscaps",
  "d": [
   "$g$ crosscaps",
   "$g+1$ crosscaps",
   "$4g$ crosscaps"
  ],
  "why": "$\\chi(\\Sigma_g)=2-2g$ and $\\chi(N_k)=2-k$; equating gives $k=2g$.",
  "subj": "surfaces",
  "diff": 4
 },
 {
  "space": "a once-punctured torus",
  "q": "A torus with one open disk removed is homotopy equivalent to what?",
  "a": "A wedge of two circles",
  "d": [
   "A single circle",
   "A wedge of three circles",
   "A torus"
  ],
  "why": "Removing a disk from $\\Sigma_1$ leaves a space that deformation retracts onto its $1$-skeleton, the wedge $S^1\\vee S^1$.",
  "subj": "surfaces",
  "diff": 4
 },
 {
  "space": "triangulations of surfaces",
  "q": "Does every compact surface admit a finite triangulation?",
  "a": "Yes, every compact surface does",
  "d": [
   "No, only orientable ones do",
   "No, only the sphere does",
   "Only smooth surfaces do"
  ],
  "why": "Rad\\u00f3's theorem: every compact surface admits a finite triangulation (a fact that fails in higher dimensions).",
  "subj": "surfaces",
  "diff": 4
 },
 {
  "space": "the sphere among surfaces",
  "q": "Which closed surface is the unique one that is simply connected?",
  "a": "The sphere $S^2$",
  "d": [
   "The torus $T^2$",
   "The projective plane $\\mathbb{RP}^2$",
   "The Klein bottle"
  ],
  "why": "Among closed surfaces only $S^2$ is simply connected; all others have nontrivial $\\pi_1$.",
  "subj": "surfaces",
  "diff": 2
 },
 {
  "space": "the mapping class group of the torus",
  "q": "The mapping class group of $T^2$ is isomorphic to which group?",
  "a": "$SL_2(\\mathbb{Z})$",
  "d": [
   "$GL_2(\\mathbb{Z})$",
   "$\\mathbb{Z}^2$",
   "$S_3$"
  ],
  "why": "Orientation-preserving mapping classes of $T^2$ act on $H_1(T^2)=\\mathbb{Z}^2$ preserving the intersection form, giving $SL_2(\\mathbb{Z})$.",
  "subj": "surfaces",
  "diff": 5
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
      why: x`$S^{${n}}$ has a CW structure with one $0$-cell and one $${n}$-cell, giving $H_{${n}}(S^{${n}})=\mathbb{Z}$.`,
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
      why: x`$\chi(S^n)=2$ for even $n$ and $0$ for odd $n$; here $n=${n}$ is ${n % 2 === 0 ? "even" : "odd"}.`,
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
        why: x`$\mathbb{CP}^{${n}}$ has exactly one cell in each even dimension $0,2,\dots,2\cdot${n}$, i.e. $${ans}$ cells total, all contributing $+1$ to $\chi$.`,
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



function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

// Each generator below is a single zero-arg function returning ONE freshly
// generated question (random parameters each call), as required by the engine.
function genSphereQuestion(){
  return pick(genSpheres());
}
function genCPnQuestion(){
  return pick(genCPn());
}
function genWedgeQuestion(){
  return pick(genWedges());
}

const GENERATORS = [genSphereQuestion, genCPnQuestion, genWedgeQuestion];

const HOM_POOL = [
 "$H^i(B;\\mathbb{Z}/2)$",
 "$w_1$",
 "$w_2$",
 "$c_1\\in H^2(X;\\mathbb{Z})$",
 "The top Chern class $c_n$",
 "The Euler characteristic $\\chi(M)$",
 "$H^{4i}(B;\\mathbb{Z})$",
 "$w(E)\\cup w(F)$",
 "$H^{2i}(B;\\mathbb{Z})$",
 "$(1+\\alpha)^{n+1}$",
 "$c_1^2-2c_2$",
 "$1$",
 "$\\mathbb{Z}[\\alpha]/(\\alpha^{n+1})$, $\\deg\\alpha=2$",
 "$(\\mathbb{Z}/2)[\\alpha]/(\\alpha^{n+1})$, $\\deg\\alpha=1$",
 "A generator of $H^2(T^2)$, with $\\beta\\cup\\alpha=-\\alpha\\cup\\beta$",
 "$H_{n-k}(M;\\mathbb{Z})$",
 "$\\mathrm{Ext}(H_{n-1}(X),\\mathbb{Z})$",
 "Zero",
 "The tensor product",
 "$\\tilde H^k(X)\\oplus\\tilde H^k(Y)$",
 "$H^k(M;\\mathbb{R})$",
 "$(\\mathbb{Z}/2)[\\alpha]$, $\\deg\\alpha=1$",
 "$\\mathbb{Z}[\\alpha]$, $\\deg\\alpha=2$",
 "The universal cover of $S^1$",
 "$S^n$",
 "The index $[\\pi_1(X):p_*\\pi_1(\\tilde X)]$",
 "Exactly $3$",
 "Subgroups of $\\mathbb{Z}^2$",
 "Path-connected, locally path-connected, semilocally simply connected",
 "$\\chi(\\tilde X)=n\\,\\chi(X)$",
 "$\\pi_1(X)$",
 "A normal subgroup of $\\pi_1(X)$",
 "$p_*\\pi_1(\\tilde X)$",
 "A graph",
 "$2$",
 "$0$",
 "$2-2g$",
 "$2-k$",
 "$\\chi(X)\\cdot\\chi(Y)$",
 "$\\chi(\\Sigma)+\\chi(\\Sigma')-2$",
 "The Gaussian curvature",
 "$V-E$",
 "$n+1$",
 "$\\chi(X)+\\chi(Y)-1$",
 "$S^1$",
 "$S^3$",
 "$SO(2)$",
 "Trivial",
 "$BO(n)$",
 "A nontrivial real line bundle",
 "Freely and transitively",
 "$P\\times_G V$",
 "$H^2(X;\\mathbb{Z})$",
 "$\\pi_{n-1}(GL_k)$",
 "The trivial bundle $F\\times B$",
 "$\\mathbb{RP}^3$",
 "$H^2(B;\\mathbb{Z})$",
 "$\\mathbb{Z}$",
 "$\\mathbb{Z}\\times\\mathbb{Z}$",
 "$\\mathbb{Z}*\\mathbb{Z}$",
 "$\\mathbb{Z}/2$",
 "$\\langle a,b\\mid abab^{-1}\\rangle$",
 "$\\langle a_1,b_1,a_2,b_2\\mid[a_1,b_1][a_2,b_2]\\rangle$",
 "$\\langle a,b\\mid a^2=b^3\\rangle$",
 "$\\mathbb{Z}/p$",
 "$\\mathbb{Z}/2*\\mathbb{Z}/2$",
 "Abelian",
 "$\\mathbb{Z}\\oplus\\mathbb{Z}$",
 "$\\mathbb{Z}\\oplus\\mathbb{Z}/2$",
 "$\\mathbb{Z}^{2g}$",
 "The $n$-th Betti number",
 "A long exact sequence",
 "$H_n(S^n;\\mathbb{Z})=\\mathbb{Z}$",
 "$\\pi_k(\\Omega X)\\cong\\pi_{k+1}(X)$",
 "$H_n(X;\\mathbb{Z})$",
 "They are isomorphic",
 "$\\pi_{k-1}(F)$",
 "$\\mathbb{Z}/24$",
 "CW complexes",
 "Finite",
 "Contractible",
 "$S^{n+1}$",
 "$X\\to Y\\to C_f$",
 "$\\Sigma X$",
 "Isomorphic in every degree",
 "A CW complex",
 "$\\pi_n=G$, all others zero",
 "$\\mathbb{RP}^\\infty$",
 "$X\\times S^1$",
 "$\\Sigma$ is left adjoint to $\\Omega$",
 "$F$",
 "$8$",
 "Rational cohomology $H^{even}(X;\\mathbb{Q})$",
 "Finitely generated projective modules",
 "$H^p(X;K^q(\\mathrm{pt}))$",
 "$\\psi^k\\circ\\psi^l=\\psi^{kl}$",
 "$F^\\times$",
 "$24$",
 "$3$",
 "It is chiral",
 "A commutative monoid",
 "Two nontrivial knots",
 "It is amphichiral",
 "Their complement",
 "$|p|,|q|\\geq2$ and coprime",
 "It is additive",
 "$SU(2)$ double covers $SO(3)$",
 "Conjugation",
 "A Lie bracket",
 "Surjective",
 "$n=1,3,7$",
 "Exactly the odd-dimensional spheres",
 "The Euler characteristic",
 "$28$",
 "$\\mathbb{R}^{2n}$",
 "$5$",
 "A sphere $S^{n-1}$",
 "Its Stiefel\\u2013Whitney numbers",
 "A closed $(n-1)$-manifold",
 "$H^{2k}(M;\\mathbb{R})$",
 "$n=4$",
 "$E_2^{p,q}=H^p(B;H^q(F))$",
 "$H^{p+q}(E)$",
 "$d_2:E_2^{0,1}\\to E_2^{2,0}$",
 "$(r,1-r)$",
 "The associated graded of a filtration on $H^n$",
 "$H^p(X;E^q(\\mathrm{pt}))$",
 "Global classes in $H^*(E)$ restrict to a fiber basis",
 "A homotopy pullback (e.g. fiber of a map)",
 "All differentials $d_r$ vanish for $r\\geq2$",
 "$\\mathrm{Tor}$ of $H_*(X)$ and $H_*(Y)$",
 "Degree $n+1$",
 "A genus-$g$ surface $\\Sigma_g$",
 "A connected sum of copies of $\\mathbb{RP}^2$",
 "$\\mathbb{RP}^2\\#\\mathbb{RP}^2$",
 "It is non-orientable",
 "A connected orientable double cover",
 "$2g$ crosscaps",
 "A wedge of two circles",
 "Yes, every compact surface does",
 "The sphere $S^2$",
 "$SL_2(\\mathbb{Z})$"
];

window.QUIZ = { BANK, GENERATORS, HOM_POOL, pick };
})();
