// thesis-questions.js — INVARIANTS "Thesis mode" bank for Alessandro's thesis
// (Configuration spaces of manifolds like projective planes).
//
// Loaded AFTER questions.js. Exposes window.THESIS = { BANK, pick } — a SEPARATE
// bank, not mixed into window.QUIZ.BANK. index.html plays it when Thesis mode is
// selected on the start screen.
//
// Two card shapes:
//   MCQ   : { space, q, a, d:[d1,d2,d3], why, subj, diff, ch }
//   OPEN  : { space, q, reveal, subj, diff, ch, open:true }   // self-graded
//
// Every $...$ fragment is KaTeX-validated (see build check). IIFE-wrapped.
(function () {
  "use strict";
  var x = String.raw;

  var BANK = [

  // ================= CHAPTER 1 — homotopy invariance fails =================
  { space:x`Ch 1 · Longoni–Salvatore`, subj:"counterexample", diff:2, ch:1,
    q:x`$L(7,1)$ and $L(7,2)$ are homotopy equivalent closed 3-manifolds. What is true of their ordered 2-point configuration spaces?`,
    a:x`$F_2(L(7,1))\not\simeq F_2(L(7,2))$ — they are not homotopy equivalent`,
    d:[x`They are homotopy equivalent but not homeomorphic`,
       x`They are homeomorphic`,
       x`They are rationally equivalent but not integrally`],
    why:x`This is Theorem 1.1.1 (Longoni–Salvatore, 2005): the first counterexample to the homotopy-invariance conjecture. The lens spaces are homotopy equivalent but the $F_2$'s are not.` },

  { space:x`Ch 1 · Longoni–Salvatore`, subj:"counterexample", diff:3, ch:1,
    q:x`What algebraic invariant distinguishes the two configuration spaces?`,
    a:x`A nontrivial triple Massey product on the universal cover of the deleted square (present for $q=2$, killed by formality for $q=1$)`,
    d:[x`A nonzero Steenrod square $Sq^2$ in $\mathbb{Z}/2$ cohomology`,
       x`A difference in rational Betti numbers`,
       x`A nonvanishing first Pontryagin class`],
    why:x`For $q=1$ the universal cover of the deleted square is formal so all Massey products vanish; for $q=2$ a triple Massey product is nonzero. The distinction is invisible to cohomology alone.` },

  { space:x`Ch 1 · scope`, subj:"counterexample", diff:3, ch:1,
    q:x`Why does the Longoni–Salvatore counterexample leave the simply connected question open?`,
    a:x`The argument depends essentially on $\pi_1$ (it lives on the universal cover of the deleted square)`,
    d:[x`It only works in dimension 3`,
       x`It only works with $\mathbb{Z}/2$ coefficients`,
       x`It requires the manifolds to be non-orientable`],
    why:x`Once $\pi_1$ is removed the mechanism disappears — this is the gap through which the positive (simply connected) results of the thesis enter.` },

  { space:x`Ch 1 · lens spaces`, subj:"lens", diff:3, ch:1,
    q:x`When are two 3-dimensional lens spaces $L(p,q_1)$ and $L(p,q_2)$ homotopy equivalent?`,
    a:x`Iff $q_1 q_2 \equiv \pm n^2 \pmod p$ for some integer $n$`,
    d:[x`Iff $q_1 \equiv \pm q_2^{\pm 1}\pmod p$`,
       x`Iff $q_1 \equiv q_2 \pmod p$`,
       x`Always, since $\pi_1 \cong \mathbb{Z}/p$ in both cases`],
    why:x`Homotopy classification (Whitehead) uses the quadratic-residue condition; the sharper homeomorphism condition $q_1\equiv\pm q_2^{\pm1}$ (Reidemeister) is what fails for $(7,1)$ vs $(7,2)$.` },

  // ================= CHAPTER 3 — Idrissi's theorem =================
  { space:x`Ch 3 · Idrissi`, subj:"idrissi", diff:3, ch:3,
    q:x`Idrissi's theorem: for a smooth simply connected closed manifold with Poincaré-duality model $A$, what models $\mathrm{Conf}_r(M)$ over $\mathbb{R}$?`,
    a:x`The Lambrechts–Stanley CDGA $G_A(r)$`,
    d:[x`The Chevalley–Eilenberg complex $\Omega^*(r)$`,
       x`The singular cochains $C^*(M^r;\mathbb{R})$`,
       x`Knudsen's factorization-homology complex`],
    why:x`Theorem 3.1.1: $G_A(r)$ is a real model for $\mathrm{Conf}_r(M)$, so the real homotopy type of $F_r(M)$ depends only on that of $M$.` },

  { space:x`Ch 3 · Idrissi`, subj:"idrissi", diff:4, ch:3,
    q:x`The proof connects the Lambrechts–Stanley model to PA-forms on the Fulton–MacPherson compactification through which intermediate object?`,
    a:x`A labelled graph complex $\mathrm{Graphs}_{\mathbb{R}}(r)$, via a zigzag of quasi-isomorphisms`,
    d:[x`A Serre spectral sequence of the projection $F_2(M)\to M$`,
       x`The bar construction on $H^*(M;\mathbb{R})$`,
       x`A Postnikov tower of $\mathrm{Conf}_r(M)$`],
    why:x`The graph complex interpolates between the small algebraic model and the geometric PA-forms; the whole argument turns on the vanishing of a partition function of vacuum graphs.` },

  { space:x`Ch 3 · Idrissi`, subj:"idrissi", diff:4, ch:3,
    q:x`The crux of Idrissi's proof is the vanishing of what?`,
    a:x`The partition function of vacuum graphs`,
    d:[x`All higher Massey products of $M$`,
       x`The Euler class of the tangent bundle`,
       x`The rational homotopy groups above the dimension`],
    why:x`That vanishing is exactly what makes the graph-complex zigzag a chain of quasi-isomorphisms.` },

  // ================= CHAPTER 4 — B2, B3 of HP^2 =================
  { space:x`Ch 4 · $B_2(\mathbb{HP}^2)$`, subj:"ch4", diff:3, ch:4,
    q:x`What is the rational Poincaré polynomial of $B_2(\mathbb{HP}^2)$?`,
    a:x`$1 + t^4 + t^8$`,
    d:[x`$1 + t^4 + t^8 + t^{15} + t^{19}$`,
       x`$1 + t^4 + t^8 + t^{15} + t^{19} + t^{23}$`,
       x`$1 + t^4 + 2t^8 + t^{12}$`],
    why:x`For $k=1,2$ the cohomology of $B_k$ of a homology projective plane is still just that of $M$; here concentrated in even degrees $0,4,8$.` },

  { space:x`Ch 4 · $B_3(\mathbb{HP}^2)$`, subj:"ch4", diff:4, ch:4,
    q:x`Passing from $B_2$ to $B_3(\mathbb{HP}^2)$, which new classes appear?`,
    a:x`Odd-degree classes in degrees $15$ and $19$`,
    d:[x`A second even class in degree $8$`,
       x`Odd classes in degrees $7$ and $11$`,
       x`A single class in degree $23$`],
    why:x`$P_{B_3}(t)=1+t^4+t^8+t^{15}+t^{19}$. The odd classes come from the mixed (weight-1, weight-2) terms $a_\alpha b_\gamma$; degree $23$ only appears from $k\ge 4$.` },

  { space:x`Ch 4 · method`, subj:"ch4", diff:3, ch:4,
    q:x`Which model does Chapter 4 use to compute $H_*(B_k(\mathbb{HP}^2);\mathbb{Q})$?`,
    a:x`Knudsen's factorization-homology model for unordered configuration spaces`,
    d:[x`The Lambrechts–Stanley CDGA of Chapter 3`,
       x`The Fulton–MacPherson PA-forms directly`,
       x`The Serre spectral sequence of $F_2(M)\to M$`],
    why:x`Chapter 4 cross-checks the $B_2$ answer against the Chapter-3 Lambrechts–Stanley computation, confirming both routes agree.` },

  { space:x`Ch 4 · Pontryagin`, subj:"ch4", diff:4, ch:4,
    q:x`Why is the first Pontryagin class $p_1$ invisible to the configuration spaces of the Eells–Kuiper family of $\mathbb{HP}^2$?`,
    a:x`Knudsen's input is only the rational cohomology ring and Poincaré-duality structure, which $p_1$ does not enter`,
    d:[x`Because $p_1 = 0$ for every member of the family`,
       x`Because configuration spaces forget all characteristic classes`,
       x`Because $p_1$ is a rational homotopy invariant`],
    why:x`Every member has ring $\mathbb{Q}[u]/(u^3)$, $|u|=4$; the input to Knudsen's formula is identical, so the output is. A simply connected counterexample must therefore use invariants beyond ring + PD structure.` },

  // ================= CHAPTER 5 — ordered/unordered, CE model =================
  { space:x`Ch 5 · $B_k$`, subj:"ce", diff:1, ch:5,
    q:x`How is the unordered configuration space $B_k(M)$ defined?`,
    a:x`As the quotient $F_k(M)/\Sigma_k$ by the coordinate-permutation action`,
    d:[x`As the $\Sigma_k$-homotopy fixed points of $F_k(M)$`,
       x`As $F_k(M)\times_{\Sigma_k} E\Sigma_k$`,
       x`As the $k$-fold symmetric product $\mathrm{Sym}^k M$`],
    why:x`On a manifold without boundary $\Sigma_k$ acts freely, so $B_k(M)$ is a manifold of dimension $k\dim M$ and $F_k\to B_k$ is a regular $\Sigma_k$-covering.` },

  { space:x`Ch 5 · transfer`, subj:"ce", diff:3, ch:5,
    q:x`Proposition 5.2.2 gives $H^*(B_k(M);\mathbb{Q})\cong H^*(F_k(M);\mathbb{Q})^{\Sigma_k}$. What makes the argument work over $\mathbb{Q}$?`,
    a:x`$|\Sigma_k| = k!$ is invertible in $\mathbb{Q}$, so the transfer / averaging map exists`,
    d:[x`$F_k(M)$ is formal`,
       x`The covering $F_k\to B_k$ is trivial`,
       x`$\Sigma_k$ acts trivially on cohomology`],
    why:x`Transfer satisfies $\mathrm{tr}\circ\pi^* = k!\cdot\mathrm{id}$, forcing $\pi^*$ injective with image the invariants — a characteristic-zero phenomenon.` },

  { space:x`Ch 5 · CE model`, subj:"ce", diff:4, ch:5,
    q:x`In the Félix–Thomas–Knudsen model of a closed oriented $M^{2m}$, what are the two generating spaces and their lengths?`,
    a:x`$V^*=H^*(M;\mathbb{Q})$ of length $1$, and $W^*=H^*(M;\mathbb{Q})[2m-1]$ of length $2$`,
    d:[x`$V^*=H^*(M)$ length $2$ and $W^*=H_*(M)$ length $1$`,
       x`$V^*=\pi_*(M)\otimes\mathbb{Q}$ and $W^*=V^*[1]$`,
       x`$V^*=H^*(M)[1]$ and $W^*=H^*(M)[2m]$`],
    why:x`Definition 5.3.1: $\partial:W^*\to\mathrm{Sym}^2 V^*$ is the linear dual of the cup product (via Poincaré duality). The weight-$k$ subcomplex is $\mathrm{Sym}^k(V^*\oplus W^*)$ with $|V|=1$, $|W|=2$.` },

  { space:x`Ch 5 · CE model`, subj:"ce", diff:3, ch:5,
    q:x`The Félix–Thomas–Knudsen theorem 5.3.3 states an isomorphism of graded vector spaces. Which one?`,
    a:x`$H^*(B_k(M);\mathbb{Q})\cong H^*\big(\Omega^*(k)(V^*,W^*),\partial\big)$`,
    d:[x`$H^*(B_k(M);\mathbb{Q})\cong \mathrm{Sym}^k H^*(M;\mathbb{Q})$`,
       x`$H^*(F_k(M);\mathbb{Q})\cong \Lambda^k H^*(M;\mathbb{Q})$`,
       x`$H^*(B_k(M);\mathbb{Q})\cong H^*(M;\mathbb{Q})^{\otimes k}$`],
    why:x`The weight-$k$ CE complex computes the rational cohomology of $B_k(M)$ for every closed oriented even-dimensional $M$.` },

  { space:x`Ch 5 · block grading`, subj:"ce", diff:4, ch:5,
    q:x`The weight-$k$ complex splits as $\Omega^*(k)=\bigoplus_{q}\ {}_q\Omega^*(k)$ by the number $q$ of $w$-generators. What is the $q$-th summand and how does $\partial$ act on $q$?`,
    a:x`$ {}_q\Omega^*(k)=\mathrm{Sym}^{k-2q}(V^*)\otimes\Lambda^q(W^*)$, and $\partial$ lowers $q$ by $1$`,
    d:[x`$\Lambda^{k-2q}(V^*)\otimes\mathrm{Sym}^q(W^*)$, with $\partial$ raising $q$ by $1$`,
       x`$\mathrm{Sym}^{k}(V^*)\otimes\Lambda^{q}(W^*)$, with $\partial=0$`,
       x`$\mathrm{Sym}^{q}(V^*)\otimes\Lambda^{k-2q}(W^*)$, with $\partial$ preserving $q$`],
    why:x`Since $|W|=2$, a $w$-generator costs two units of weight, so $q$ ranges $0\le q\le\lfloor k/2\rfloor$ and $\partial:{}_q\Omega\to{}_{q-1}\Omega$.` },

  { space:x`Ch 5 · def`, subj:"stability", diff:2, ch:5,
    q:x`A closed manifold $M^{4m}$ is a (rational) homology projective plane when its Poincaré polynomial is:`,
    a:x`$1 + t^{2m} + t^{4m}$`,
    d:[x`$1 + t^{2m} + t^{4m} + t^{6m}$`,
       x`$(1+t^{2m})^2$`,
       x`$1 + t^{m} + t^{2m}$`],
    why:x`Definition 5.4.2. The classical examples are $\mathbb{CP}^2$ ($m=1$), $\mathbb{HP}^2$ ($m=2$), and $\mathbb{OP}^2$ ($m=4$).` },

  { space:x`Ch 5 · Adams`, subj:"stability", diff:3, ch:5,
    q:x`By a theorem of Adams, in which dimensions $4m$ can a smooth rational homology projective plane occur (as a Hopf-fibration base)?`,
    a:x`$4m \in \{4, 8, 16\}$, i.e. $m\in\{1,2,4\}$`,
    d:[x`Every $4m$ with $m\ge 1$`,
       x`$4m\in\{4,8,16,32\}$`,
       x`Only $4m = 8$`],
    why:x`The Hopf-invariant-one restriction forces $m\in\{1,2,4\}$. Eells–Kuiper showed each dimension contains infinitely many distinct smooth such manifolds, separated by the $\mu$-invariant.` },

  { space:x`Ch 5 · Berceanu–Yameen`, subj:"stability", diff:4, ch:5,
    q:x`Berceanu–Yameen: a closed oriented even-dimensional manifold has the strong stability property (eventually constant $H^*(B_k)$) iff it is which kind of manifold?`,
    a:x`A rational homology sphere or a rational homology projective plane`,
    d:[x`Any simply connected manifold`,
       x`A rational homology sphere only`,
       x`A formal manifold`],
    why:x`Theorem 5.4.4, with stability ranges $3$ and $4$ respectively. This dichotomy is exactly why $\mathbb{HP}^2$ and $\mathbb{OP}^2$ sit on the stable side.` },

  { space:x`Ch 5 · stable poly`, subj:"stability", diff:4, ch:5,
    q:x`For a rational homology projective plane $M^{4m}$ and every $k\ge 4$, the stable Poincaré polynomial of $B_k(M)$ is:`,
    a:x`$1+t^{2m}+t^{4m}+t^{8m-1}+t^{10m-1}+t^{12m-1}$`,
    d:[x`$1+t^{2m}+t^{4m}+t^{6m}+t^{8m}+t^{10m}$`,
       x`$1+t^{2m}+t^{4m}+t^{8m}+t^{10m}+t^{12m}$`,
       x`$(1+t^{2m}+t^{4m})^2$`],
    why:x`Lemma 5.4.5. All six nonzero Betti numbers equal $1$; the three high classes sit in odd degrees $8m-1,\,10m-1,\,12m-1$.` },

  { space:x`Ch 5 · $\mathbb{HP}^2$`, subj:"hp2", diff:3, ch:5,
    q:x`In which degrees is $H^*(B_k(\mathbb{HP}^2);\mathbb{Q})$ concentrated for $k\ge 4$?`,
    a:x`$\{0, 4, 8, 15, 19, 23\}$, one dimension each`,
    d:[x`$\{0, 4, 8, 12, 16, 20\}$`,
       x`$\{0, 4, 8, 16, 20, 24\}$`,
       x`$\{0, 4, 8, 15, 19, 23, 27\}$`],
    why:x`Theorem 5.5.2: with $m=2$, the degrees $2m,4m,8m-1,10m-1,12m-1$ become $4,8,15,19,23$.` },

  { space:x`Ch 5 · $\mathbb{OP}^2$`, subj:"op2", diff:3, ch:5,
    q:x`For the Cayley plane $\mathbb{OP}^2$ (dimension 16, $m=4$), the stable degrees for $k\ge 4$ are:`,
    a:x`$\{0, 8, 16, 31, 39, 47\}$`,
    d:[x`$\{0, 8, 16, 24, 32, 40\}$`,
       x`$\{0, 8, 16, 32, 40, 48\}$`,
       x`$\{0, 4, 8, 15, 19, 23\}$`],
    why:x`Theorem 5.6.2: substitute $m=4$ into $\{0,2m,4m,8m-1,10m-1,12m-1\}$.` },

  { space:x`Ch 5 · $\mathbb{HP}^2$ generators`, subj:"hp2", diff:4, ch:5,
    q:x`For $\mathbb{HP}^2$, the CE generators $a_j$ (length 1) and $b_j$ (length 2) carry which degrees?`,
    a:x`$|a_j|\in\{8,4,0\}$ and $|b_j|\in\{15,11,7\}$`,
    d:[x`$|a_j|\in\{0,4,8\}$ and $|b_j|\in\{7,11,15\}$ with $\partial(a_j)=b_j$`,
       x`$|a_j|\in\{16,8,0\}$ and $|b_j|\in\{31,23,15\}$`,
       x`$|a_j|\in\{4,2,0\}$ and $|b_j|\in\{3,5,7\}$`],
    why:x`Proposition 5.7.1: $|a_j|=4(2-j)$ and $|b_j|=4(2-j)+7$. ($\{16,8,0\}/\{31,23,15\}$ is $\mathbb{OP}^2$; $\{4,2,0\}/\{3,5,7\}$ is $\mathbb{CP}^2$.)` },

  { space:x`Ch 5 · differential`, subj:"hp2", diff:3, ch:5,
    q:x`What is the differential of the CE model on generators?`,
    a:x`$\partial(a_i)=0$ and $\partial(b_\ell)=\sum_{i+j=\ell} a_i a_j$ (with $b_\ell=0$ for $\ell>2$)`,
    d:[x`$\partial(a_i)=b_i$ and $\partial(b_\ell)=0$`,
       x`$\partial(a_i)=\sum_j a_j$ and $\partial(b_\ell)=a_\ell$`,
       x`$\partial(b_\ell)=\sum_{i+j=\ell} b_i b_j$`],
    why:x`$\partial(b_\ell)$ is dual to the cup product $u^i\cdot u^j = u^{i+j}$ (zero if $i+j>2$). It encodes only the ring $\mathbb{Q}[u]/(u^3)$ — identical combinatorics for $\mathbb{HP}^2$ and $\mathbb{OP}^2$.` },

  { space:x`Ch 5 · modular blocks`, subj:"modular", diff:5, ch:5,
    q:x`For $\mathbb{HP}^2$, every monomial in block $ {}_q\Omega^*(k)$ has homological degree congruent to what?`,
    a:x`$3q \pmod 4$ — so the four blocks occupy four distinct residue classes`,
    d:[x`$2q \pmod 4$`,
       x`$q \pmod 2$`,
       x`$0 \pmod 4$ for every $q$`],
    why:x`Proposition 5.8.2: $a$-generators have degree $\equiv 0$, $b$-generators $\equiv 3 \pmod 4$, so $q$ of them give $\equiv 3q$. Each degree then meets a single block — the computation reduces to one rank per degree.` },

  { space:x`Ch 5 · why not $\mathbb{CP}^2$`, subj:"modular", diff:5, ch:5,
    q:x`Why does the modular block separation work for $\mathbb{HP}^2,\mathbb{OP}^2$ but fail for $\mathbb{CP}^2$?`,
    a:x`It needs $2m\ge 4$ ($m\ge2$); for $\mathbb{CP}^2$ ($m=1$) $a$-generators are even and $b$-generators odd, giving only two parities so blocks $q=0,2$ collide (and $q=1,3$)`,
    d:[x`$\mathbb{CP}^2$ is not formal`,
       x`$\mathbb{CP}^2$ is not a rational homology projective plane`,
       x`$\mathbb{CP}^2$ has torsion in its cohomology`],
    why:x`Remark 5.8.5 / 5.8.6: four distinct residues mod $2m$ require $2m\ge 4$. This is precisely the feature separating the higher projective planes from $\mathbb{CP}^2$.` },

  { space:x`Ch 5 · $k=6$`, subj:"k6", diff:4, ch:5,
    q:x`At weight $k=6$ for $\mathbb{HP}^2$, the four blocks $ {}_0\Omega,{}_1\Omega,{}_2\Omega,{}_3\Omega$ have dimensions:`,
    a:x`$(28, 45, 18, 1)$, total $92$`,
    d:[x`$(28, 44, 18, 2)$, total $92$`,
       x`$(21, 35, 15, 1)$, total $72$`,
       x`$(36, 45, 18, 1)$, total $100$`],
    why:x`$\binom{8}{6}=28$, $\binom{6}{4}\cdot3=45$, $\binom{4}{2}\cdot3=18$, $\binom{3}{3}=1$. Euler characteristic $28-45+18-1=0$, matching $\sum_k\chi(B_k)t^k=(1+t)^{\chi(\mathbb{HP}^2)}=(1+t)^3$.` },

  { space:x`Ch 5 · Betti`, subj:"stability", diff:2, ch:5,
    q:x`What is every nonzero rational Betti number of $B_k(\mathbb{HP}^2)$ and $B_k(\mathbb{OP}^2)$?`,
    a:x`Equal to $1$`,
    d:[x`Equal to $2$`,
       x`Growing linearly in $k$`,
       x`Equal to $\binom{k}{2}$`],
    why:x`All six stable classes are one-dimensional; for $k\ge4$ the cohomology is independent of $k$.` },

  { space:x`Ch 5 · rigidity`, subj:"eells-kuiper", diff:4, ch:5,
    q:x`Corollary 5.5.3 says the Betti numbers of $B_k$ detect only which datum of an 8-manifold?`,
    a:x`Its rational cohomology ring $\mathbb{Q}[u]/(u^3)$, $|u|=4$ — not its smooth or homeomorphism type`,
    d:[x`Its diffeomorphism type`,
       x`Its Eells–Kuiper $\mu$-invariant`,
       x`Its first Pontryagin class`],
    why:x`Every member of the Eells–Kuiper family of $\mathbb{HP}^2$ shares these Betti numbers, so the $\mu$-invariant — like $p_1$ before it — is invisible to the configuration spaces.` },

  { space:x`Ch 5 · $\mathbb{HP}^n$`, subj:"higher", diff:4, ch:5,
    q:x`Why does $\mathbb{HP}^n$ for $n\ge 3$ fail strong stability?`,
    a:x`Its Poincaré polynomial $1+t^4+\dots+t^{4n}$ has more than $3$ nonzero Betti numbers, so it isn't a rational homology projective plane`,
    d:[x`It is not orientable`,
       x`It is not simply connected`,
       x`Its dimension is not a multiple of 4`],
    why:x`By Berceanu–Yameen the cohomology of $B_k(\mathbb{HP}^n)$ is then not eventually constant; e.g. $v_4^{2k}$ is a permanent cocycle of unbounded degree $8k$.` },

  // ================= OPEN — reconstruction (blank page) =================
  { space:x`Ch 5 · reconstruct`, subj:"reconstruction", diff:4, ch:5, open:true,
    q:x`Blank page: state the Félix–Thomas–Knudsen model of a closed oriented $M^{2m}$ in full — generators, degrees and lengths, the differential, and the isomorphism it computes.`,
    reveal:x`Generators (Def 5.3.1):
$V^* = H^*(M;\mathbb{Q})$, elements of length $1$ in their own degree.
$W^* = H^*(M;\mathbb{Q})[2m-1]$, length $2$, degrees shifted up by $2m-1$.
Differential $\partial : W^* \to \mathrm{Sym}^2 V^*$ is the linear dual of the cup product $H^*(M)\otimes H^*(M)\to H^*(M)$ (identifying $H^*$ with its dual via Poincaré duality); $\partial|_{V^*}=0$.
Weight-$k$ subcomplex: $\Omega^*(k)=\mathrm{Sym}^k(V^*\oplus W^*)$ with $|V|=1,|W|=2$, i.e. $\Omega^*(k)=\bigoplus_{q=0}^{\lfloor k/2\rfloor}\mathrm{Sym}^{k-2q}(V^*)\otimes\Lambda^q(W^*)$; $\partial$ has weight degree $-1$.
Theorem 5.3.3: $H^*(B_k(M);\mathbb{Q})\cong H^*\big(\Omega^*(k),\partial\big)$.` },

  { space:x`Ch 5 · reconstruct`, subj:"reconstruction", diff:3, ch:5, open:true,
    q:x`Blank page: prove $H^*(B_k(M);\mathbb{Q})\cong H^*(F_k(M);\mathbb{Q})^{\Sigma_k}$ for $M$ a manifold.`,
    reveal:x`$\pi:F_k(M)\to B_k(M)$ is a regular $\Sigma_k$-covering (free action, no boundary).
Over $\mathbb{Q}$, $|\Sigma_k|=k!$ is invertible, so the transfer $\mathrm{tr}:H^*(F_k)\to H^*(B_k)$ exists with $\pi^*\mathrm{tr}(\alpha)=\sum_{\sigma\in\Sigma_k}\sigma^*\alpha$ and $\mathrm{tr}\circ\pi^* = k!\cdot\mathrm{id}$.
Hence $\pi^*$ is injective. For $\sigma\in\Sigma_k$, $\sigma^*\pi^*=\pi^*$, so $\mathrm{im}\,\pi^*\subseteq H^*(F_k)^{\Sigma_k}$.
Conversely if $\alpha$ is invariant, set $\beta=\tfrac{1}{k!}\mathrm{tr}(\alpha)$; then $\pi^*\beta=\tfrac{1}{k!}\sum_\sigma\sigma^*\alpha=\alpha$. So $\pi^*$ surjects onto the invariants, giving the isomorphism.` },

  { space:x`Ch 5 · reconstruct`, subj:"reconstruction", diff:4, ch:5, open:true,
    q:x`Blank page: for $\mathbb{HP}^2$, write out the generators $a_0,a_1,a_2$, $b_0,b_1,b_2$ with degrees, and the differential.`,
    reveal:x`From $H^*(\mathbb{HP}^2;\mathbb{Q})=\mathbb{Q}[u]/(u^3)$, $|u|=4$, basis $\{1,u,u^2\}$. Set $a_2=1,\ a_1=u,\ a_0=u^2$ (lower index = higher degree):
$|a_j| = 4(2-j)\in\{8,4,0\}$, length $1$.
$b_j$ dual to $u^{2-j}$ in $W^*=H^*[2m-1]=H^*[7]$: $|b_j| = 4(2-j)+7\in\{15,11,7\}$, length $2$.
Differential: $\partial(a_i)=0$, and $\partial(b_\ell)=\sum_{i+j=\ell} a_i a_j$ with $b_\ell:=0$ for $\ell>2$. Explicitly $\partial(b_0)=a_0^2,\ \partial(b_1)=2a_0a_1,\ \partial(b_2)=2a_0a_2+a_1^2$.` },

  { space:x`Ch 5 · reconstruct`, subj:"reconstruction", diff:5, ch:5, open:true,
    q:x`Blank page: prove the modular congruence $\deg\equiv 3q\pmod 4$ for $\mathbb{HP}^2$ and explain why the separation fails for $\mathbb{CP}^2$.`,
    reveal:x`For $\mathbb{HP}^2$: $|a_j|\in\{0,4,8\}\equiv 0$ and $|b_j|\in\{7,11,15\}\equiv 3\pmod 4$. A monomial $a^{p}\,b_{j_1}\wedge\dots\wedge b_{j_q}$ has degree $(\text{multiple of }4)+\sum_{r}|b_{j_r}|\equiv 3q\pmod 4$. For $q=0,1,2,3$ the residues $3q$ are $0,3,2,1$ — distinct, so each degree lies in one block and $\partial:{}_q\Omega_d\to{}_{q-1}\Omega_{d-1}$ is a single linear map (Cor 5.8.4).
For $\mathbb{CP}^2$ ($m=1$): $|a_j|\in\{0,2,4\}$ even, $|b_j|\in\{3,5,7\}$ odd. Only two parities exist; blocks $q=0,2$ both hit even degrees and $q=1,3$ both odd. Two blocks can contribute to one degree, so the reduction to a single rank fails. The separation needs $2m\ge4$.` },

  { space:x`Ch 5 · reconstruct`, subj:"reconstruction", diff:5, ch:5, open:true,
    q:x`Blank page ($k=6$): compute $\dim H_{23}(B_6(\mathbb{HP}^2))$ by reconstructing thread $T_{24}$, and give a cocycle representative.`,
    reveal:x`Thread $T_{24}$: $0\to {}_0\Omega_{24}\xrightarrow{\partial_1}{}_1\Omega_{23}\xrightarrow{\partial_2}{}_2\Omega_{22}\to 0$, dimensions $(4,7,2)$.
$\partial_1$ on $\{a_1^6,\,a_0a_1^4a_2,\,a_0^2a_1^2a_2^2,\,a_0^3a_2^3\}$ is injective, so $\rho_1=4$ (the monomials $a_1^2a_2^2b_0,\ a_0a_2^3b_0,\ a_1^3a_2b_1$ each occur once).
$\partial_2:{}_1\Omega_{23}\to{}_2\Omega_{22}=\langle a_2^2b_0b_2,\ a_1a_2b_1b_2\rangle$ is onto, so $\rho_2=2$.
Then $\dim H_{23} = (7-2)-4 = 1$. Representative: $[(a_0a_2^3 - 3a_1^2a_2^2)\,b_0]$ — a $\partial_2$-cocycle ($-3a_2^2b_0b_2 -3(-a_2^2b_0b_2)=0$) that is not a $\partial_1$-boundary.` },

  { space:x`Ch 5 · reconstruct`, subj:"reconstruction", diff:4, ch:5, open:true,
    q:x`Blank page: give the explicit polynomial cocycle representatives for the six stable classes of $B_k(M)$ ($k\ge4$, $M$ a homology projective plane).`,
    reveal:x`With generators $a_0,a_1,a_2$ and $b_0,b_1,b_2$ (Prop 5.6.4 / Rem 5.9.2):
$H^{0}: [a_2^{k}]$
$H^{2m}: [a_1 a_2^{k-1}]$
$H^{4m}: [a_0 a_2^{k-1} - (k-1)\,a_1^2 a_2^{k-2}]$
$H^{8m-1}: [a_1 a_2^{k-3} b_1]$
$H^{10m-1}: [a_1 a_2^{k-3} b_0]$
$H^{12m-1}: [(a_0 a_2^{k-3} - (k-3)\,a_1^2 a_2^{k-4})\,b_0]$
Identical polynomials for $\mathbb{HP}^2$ and $\mathbb{OP}^2$; only generator degrees differ ($m=2$ vs $m=4$), since $\partial$ encodes only $\mathbb{Q}[u]/(u^3)$.` },

  { space:x`Ch 5 · reconstruct`, subj:"reconstruction", diff:3, ch:5, open:true,
    q:x`Blank page: derive the six stable degrees $\{0,2m,4m,8m-1,10m-1,12m-1\}$ from Lemma 5.4.5 and specialise to $\mathbb{HP}^2$ and $\mathbb{OP}^2$.`,
    reveal:x`Lemma 5.4.5: for $k\ge4$, $P_{B_k(M)}(t)=1+t^{2m}+t^{4m}+t^{8m-1}+t^{10m-1}+t^{12m-1}$, so the degrees are $0,\,2m,\,4m,\,8m-1,\,10m-1,\,12m-1$.
$\mathbb{HP}^2$, $m=2$: $\{0,4,8,15,19,23\}$.
$\mathbb{OP}^2$, $m=4$: $\{0,8,16,31,39,47\}$.
$\mathbb{CP}^2$, $m=1$: $\{0,2,4,7,9,11\}$ (Félix–Tanré).` },

  // ================= OPEN — defense (say it out loud) =================
  { space:x`Defense · novelty`, subj:"defense", diff:5, ch:5, open:true,
    q:x`A referee asks: separate exactly what is new in your Chapter 5 from what you inherit. Answer out loud.`,
    reveal:x`Inherited: the strong-stability dichotomy and the stable polynomial are Berceanu–Yameen (Thm 5.4.4, Lemma 5.4.5); the CE model is Félix–Thomas–Knudsen; real invariance is Idrissi.
New (to my knowledge, absent from the literature):
(1) explicit polynomial cocycle representatives for the six stable classes of $B_k(\mathbb{HP}^2)$ and $B_k(\mathbb{OP}^2)$;
(2) the modular block decomposition special to $m\ge2$ (failing for $\mathbb{CP}^2$), collapsing each degree to one rank computation;
(3) a fully explicit hand computation at $k=6$;
(4) the observation that the Eells–Kuiper families agree on all these Betti numbers, so the $\mu$-invariant is washed out.
Honest line: the theorem is not new; the explicit machinery and the rigidity observation are the contribution.` },

  { space:x`Defense · why these`, subj:"defense", diff:4, ch:5, open:true,
    q:x`Why $\mathbb{HP}^2$ and $\mathbb{OP}^2$ specifically, and not $\mathbb{CP}^2$ or $\mathbb{HP}^n$?`,
    reveal:x`They are rational homology projective planes with $m\ge 2$: on the stable side of Berceanu–Yameen, and with the modular separation ($2m\ge4$) that collapses the computation to one rank per degree.
$\mathbb{CP}^2$ ($m=1$) is stable too but lacks the separation (only two parities) — that case was already known (Félix–Tanré).
$\mathbb{HP}^n$, $n\ge3$, has $>3$ Betti numbers, so it is not a homology projective plane and fails strong stability outright.
$\mathbb{OP}^2$ is the top case: octonionic projective spaces exist only for $n\le2$ (non-associativity), so the family ends there.` },

  { space:x`Defense · rigidity`, subj:"defense", diff:4, ch:5, open:true,
    q:x`Explain precisely why $p_1$ and the Eells–Kuiper $\mu$-invariant are invisible to these configuration spaces.`,
    reveal:x`The input to the Knudsen / CE formula is only the rational cohomology ring together with the Poincaré-duality structure. Every member of the Eells–Kuiper family of $\mathbb{HP}^2$ has ring $\mathbb{Q}[u]/(u^3)$, $|u|=4$, and is closed oriented of dimension $8$ — identical input, hence identical $H^*(B_k;\mathbb{Q})$ for all $k$.
$p_1$ (distinguishing smooth structures) and $\mu$ (distinguishing finitely many homeomorphism types) never enter that input, so they cannot be seen.
Consequence (Rem 4.3.9): any simply connected counterexample to homotopy-invariance must use invariants beyond ring + PD structure.` },

  { space:x`Defense · weakest step`, subj:"defense", diff:5, ch:5, open:true,
    q:x`Where is the most conditional / load-bearing step of Chapter 5, and what rests on it?`,
    reveal:x`The load-bearing input is Berceanu–Yameen's strong-stability theorem (Thm 5.4.4) and their stable-polynomial Lemma 5.4.5: the complete Betti numbers of $B_k(\mathbb{HP}^2)$ for all $k$ are a consequence of that theorem, not reproved from scratch.
What is genuinely mine and self-contained is downstream and verifiable by hand: the explicit cocycles, the modular block argument, and the $k=6$ computation (which cross-checks the abstract answer).
If pressed: the novelty is not the stability but the explicit, checkable representatives and the structural simplification — and I can reconstruct $k=6$ live as evidence.` },

  { space:x`Defense · three shifts`, subj:"defense", diff:3, ch:5, open:true,
    q:x`In one breath: how does Chapter 5 differ in viewpoint from Chapters 1–4?`,
    reveal:x`Three simultaneous shifts:
(1) ordered $\to$ unordered: $F_k \rightsquigarrow B_k = F_k/\Sigma_k$;
(2) homotopy type $\to$ rational Betti numbers (over $\mathbb{Q}$, not $\mathbb{R}$);
(3) invariance $\to$ homological stability as $k\to\infty$.
Chapters 1–3 ask which manifolds have configuration spaces of the same homotopy type (Idrissi: real invariance; Longoni–Salvatore: failure with $\pi_1$). Chapter 4 widens the class. Chapter 5 asks which have Betti numbers that stabilise completely — and the same elementary examples (spheres, projective planes) reappear.` },

  // ================= CHAPTER 1 — deeper: deleted square machinery =================
  { space:x`Ch 1 · deleted square`, subj:"counterexample", diff:3, ch:1,
    q:x`For $X_0=F_2(L(p,q))$, why is $\pi_1(X_0)\cong\pi_1(L\times L)\cong\mathbb{Z}/p\oplus\mathbb{Z}/p$?`,
    a:x`The diagonal has codimension $3$ in the 6-manifold $L\times L$, and removing a submanifold of codimension $\ge 3$ does not change $\pi_1$`,
    d:[x`Because $F_2$ always has the $\pi_1$ of the ambient square`,
       x`Because the diagonal is simply connected`,
       x`Because $L$ is parallelizable`],
    why:x`Codimension $\ge 3$ removal leaves both $\pi_0$ and $\pi_1$ untouched (general position for disks of dimension $\le 2$).` },

  { space:x`Ch 1 · fibration`, subj:"counterexample", diff:3, ch:1,
    q:x`The projection $p_1:X_0\to L$ is a fiber bundle with fiber $L\setminus\{*\}$. Why does it admit a section?`,
    a:x`$L$ is parallelizable: push off the diagonal along a nowhere-vanishing vector field, $s(x)=(x,\exp_x(\varepsilon v(x)))$`,
    d:[x`Every fiber bundle over a 3-manifold admits a section`,
       x`Because the fiber is contractible`,
       x`Because $\pi_2(L)=0$`],
    why:x`Orientable 3-manifolds are parallelizable; the nonvanishing field gives a canonical nearby second point. The section later splits the Serre spectral sequence of the universal cover.` },

  { space:x`Ch 1 · universal cover`, subj:"counterexample", diff:4, ch:1,
    q:x`The universal cover $\widetilde{X}_0\to S^3$ fibers with which fiber?`,
    a:x`$S^3\setminus\{p\text{ points}\}\simeq\bigvee_{p-1}S^2$`,
    d:[x`$S^3\setminus\{1\text{ point}\}\simeq\mathbb{R}^3$`,
       x`$S^2\times(0,1)$`,
       x`$\bigvee_{p}S^2$`],
    why:x`The diagonal lifts to $p$ disjoint copies $\Delta_k\subset S^3\times S^3$; over a point the fiber misses the $p$ points $(\zeta^k z_1,\zeta^{qk}z_2)$. A 3-sphere minus $p$ points is a wedge of $p-1$ two-spheres.` },

  { space:x`Ch 1 · universal cover`, subj:"counterexample", diff:4, ch:1,
    q:x`The nontrivial reduced cohomology of $\widetilde{X}_0$ is:`,
    a:x`$H^2=\mathbb{Z}^{p-1}$, $H^3=\mathbb{Z}$, $H^5=\mathbb{Z}^{p-1}$, with $-\cup\alpha: H^2\xrightarrow{\ \sim\ }H^5$ for $\alpha$ generating $H^3$`,
    d:[x`$H^2=\mathbb{Z}^{p}$, $H^4=\mathbb{Z}$, $H^6=\mathbb{Z}^{p}$`,
       x`$H^2=\mathbb{Z}/p$, $H^3=\mathbb{Z}$, $H^5=\mathbb{Z}/p$`,
       x`$H^3=\mathbb{Z}^{p-1}$ only`],
    why:x`Serre SS of $\bigvee_{p-1}S^2\hookrightarrow\widetilde{X}_0\to S^3$: entries $E_2^{0,0},E_2^{0,2},E_2^{3,0},E_2^{3,2}$; the section splits the sequence, so $E_2=E_\infty$ and the ring is $H^*(S^3)\otimes H^*(\bigvee S^2)$. $H^4=0$ is why all the Massey products are defined.` },

  { space:x`Ch 1 · Massey`, subj:"massey", diff:3, ch:1,
    q:x`Given $x\cup y=0$ and $y\cup z=0$ with bounding cochains $dZ=\bar x\cup\bar y$, $dX=\bar y\cup\bar z$, the triple Massey product $\langle x,y,z\rangle$ is the class of:`,
    a:x`$Z\cup\bar z-(-1)^{|x|}\,\bar x\cup X$`,
    d:[x`$Z\cup X$`,
       x`$\bar x\cup Z-(-1)^{|z|}\,X\cup\bar z$`,
       x`$dZ\cup X + Z\cup dX$`],
    why:x`Definition 1.5.1. It is well-defined only modulo the indeterminacy $x\cup H^*+H^*\cup z$, since changing $Z,X$ shifts the cocycle by $x\cup\alpha+\beta\cup z$.` },

  { space:x`Ch 1 · Massey`, subj:"massey", diff:4, ch:1,
    q:x`Why is every triple Massey product of degree-2 classes on $\widetilde{X}_0$ automatically defined?`,
    a:x`$H^4(\widetilde{X}_0)=0$, so all cup products $H^2\otimes H^2\to H^4$ vanish`,
    d:[x`Because $\widetilde{X}_0$ is simply connected`,
       x`Because the classes are torsion`,
       x`Because the cup product is graded-commutative`],
    why:x`The products land in $H^5(\widetilde{X}_0)\cong\mathbb{Z}^{p-1}$ (or $(\mathbb{Z}/2)^{p-1}$), and the whole counterexample is the assertion that for $q=2$ some of them are nonzero mod indeterminacy.` },

  { space:x`Ch 1 · $q=2$`, subj:"massey", diff:5, ch:1,
    q:x`Theorem 1.7.5 (Longoni–Salvatore): over $\mathbb{Z}/2$, the Massey product $\langle a_{k+3},a_k,a_{k+1}+a_{k+5}\rangle$ on $\widetilde{X}_0(L(7,2))$ contains which nonzero class?`,
    a:x`$a_{k+1}\cup\alpha\in H^5$`,
    d:[x`$a_{k+3}\cup\alpha$`,
       x`$\alpha\cup\alpha$`,
       x`$a_k\cup a_{k+1}$`],
    why:x`Poincaré duality converts the bounding cochains into intersections of the submanifolds $D_{k,k+3}$ and $A_j$; the surviving term is $a_{k+1}\cup\alpha$, nonzero since $-\cup\alpha:H^2\to H^5$ is an isomorphism.` },

  { space:x`Ch 1 · indeterminacy`, subj:"massey", diff:5, ch:1,
    q:x`The non-membership of $a_{k+1}\cup\alpha$ in the indeterminacy is checked in which algebraic structure?`,
    a:x`The cyclotomic ring $(\mathbb{Z}/2)[t]/(1+t+\dots+t^6)$, with $a_{j+1}\leftrightarrow t^j$: show $t^{k+1}\notin\mathrm{span}\{t^{k+2},\,t^k+t^{k+4}\}$ for all $k$`,
    d:[x`The Steenrod algebra $\mathcal{A}_2$`,
       x`The group ring $\mathbb{Z}[\mathbb{Z}/7\oplus\mathbb{Z}/7]$`,
       x`The exterior algebra $\Lambda(\alpha)$`],
    why:x`The relation $\sum_{k=0}^{6}a_k\cup\alpha=0$ turns $H^5$ into that 6-dimensional ring; a finite check over the seven $k$'s shows linear independence. Equivariance $\langle t^nx,t^ny,t^nz\rangle=t^n\langle x,y,z\rangle$ then propagates one computation to all.` },

  { space:x`Ch 1 · $q=1$`, subj:"massey", diff:3, ch:1,
    q:x`Theorem 1.6.4: for $L(p,1)$, what happens to Massey products on $\widetilde{X}_0$?`,
    a:x`They all vanish, for any coefficient ring — the universal cover is formal`,
    d:[x`They vanish only over $\mathbb{Q}$`,
       x`They are nonzero but equal for all $k$`,
       x`They are undefined because cup products are nonzero`],
    why:x`Formality of $\widetilde{X}_0(L(p,1))$ kills every Massey product; a homotopy equivalence $F_2(L(7,1))\simeq F_2(L(7,2))$ would transport nonzero products onto zero ones — contradiction.` },

  // ================= CHAPTER 2 — CDGAs, Sullivan, formality =================
  { space:x`Ch 2 · CDGA`, subj:"cdga", diff:1, ch:2,
    q:x`The differential of a CDGA satisfies the graded Leibniz rule:`,
    a:x`$d(a\cdot b)=(da)\cdot b+(-1)^{|a|}a\cdot(db)$`,
    d:[x`$d(a\cdot b)=(da)\cdot b+a\cdot(db)$`,
       x`$d(a\cdot b)=(da)\cdot(db)$`,
       x`$d(a\cdot b)=(-1)^{|a||b|}\big((da)\cdot b+a\cdot(db)\big)$`],
    why:x`$d$ is a degree $+1$ derivation with $d^2=0$; the sign is $(-1)^{|a|}$ because $d$ moves past $a$.` },

  { space:x`Ch 2 · free CDGA`, subj:"cdga", diff:2, ch:2,
    q:x`For a graded space $V=V^{\mathrm{even}}\oplus V^{\mathrm{odd}}$, the free graded-commutative algebra $\Lambda V$ is:`,
    a:x`$k[V^{\mathrm{even}}]\otimes\textstyle\bigwedge V^{\mathrm{odd}}$ — polynomial on even, exterior on odd generators`,
    d:[x`Exterior on even, polynomial on odd generators`,
       x`Polynomial on all generators`,
       x`The tensor algebra $T(V)$`],
    why:x`Koszul: for odd $v$, $v^2=(-1)^{|v|^2}v^2=-v^2$ forces $v^2=0$; even generators commute freely.` },

  { space:x`Ch 2 · Sullivan`, subj:"sullivan", diff:3, ch:2,
    q:x`A Sullivan algebra is $(\Lambda V,d)$ with $V$ in positive degrees and a filtration $V(0)\subset V(1)\subset\cdots$ such that:`,
    a:x`$d(V(0))=0$ and $d(V(k))\subset\Lambda(V(k-1))$ — and it is minimal if moreover $d(V)\subset\Lambda^{\ge2}V$`,
    d:[x`$d(V(k))\subset\Lambda(V(k))$, minimal if $d=0$`,
       x`$d(V(k))\subset V(k+1)$, minimal if $d$ is injective`,
       x`No condition on $d$; minimal if $V$ is finite-dimensional`],
    why:x`The nilpotence filtration makes Sullivan algebras the cofibrant objects; the decomposability condition $d(V)\subset\Lambda^{\ge2}V$ is the normalization making minimal models unique up to isomorphism, not just quasi-isomorphism.` },

  { space:x`Ch 2 · minimal models`, subj:"sullivan", diff:3, ch:2,
    q:x`Theorem 2.5.4: for a connected CDGA of finite type, minimal models exist and are unique in what sense?`,
    a:x`Unique up to isomorphism of CDGAs (built by induction on generator degree)`,
    d:[x`Unique up to quasi-isomorphism only`,
       x`Unique on the nose (a canonical construction)`,
       x`Unique only when the CDGA is formal`],
    why:x`Any Sullivan model is unique up to quasi-isomorphism; minimality upgrades this to isomorphism — that's the whole point of the decomposability normalization.` },

  { space:x`Ch 2 · Bousfield–Gugenheim`, subj:"cdga", diff:4, ch:2,
    q:x`In the Bousfield–Gugenheim model structure on $\mathrm{CDGA}^{\ge0}_k$ (char $0$), the three classes are:`,
    a:x`Weak equivalences = quasi-isos; fibrations = degreewise surjections; cofibrations by lifting — and every object is fibrant`,
    d:[x`Weak equivalences = isomorphisms on $\pi_*$; fibrations = injections; every object cofibrant`,
       x`Weak equivalences = quasi-isos; fibrations = degreewise injections; every object fibrant`,
       x`Weak equivalences = homotopy equivalences; fibrations = surjections in positive degrees; every object cofibrant`],
    why:x`Theorem 2.4.2. Everything fibrant means cofibrant replacement (Sullivan resolution) is the only resolution ever needed; the cofibrant objects are exactly the retracts of Sullivan algebras.` },

  { space:x`Ch 2 · sphere models`, subj:"sullivan", diff:3, ch:2,
    q:x`The minimal Sullivan models of odd and even spheres are:`,
    a:x`$S^{2k+1}$: $(\Lambda(x),0)$, $|x|=2k{+}1$; $S^{2k}$: $(\Lambda(x,y),\,dy=x^2)$, $|x|=2k$, $|y|=4k{-}1$`,
    d:[x`$S^{2k+1}$: $(\Lambda(x,y),dy=x^2)$; $S^{2k}$: $(\Lambda(x),0)$`,
       x`Both: $(\Lambda(x),0)$ with $|x|=n$`,
       x`$S^{2k}$: $(\Lambda(x,y),\,dy=x^{k+1})$, $|y|=2k^2$`],
    why:x`For even spheres $x^2\ne0$ in $\Lambda(x)$ must be killed by a $y$ in degree $4k-1$ — the algebraic shadow of the Hopf map ($\pi_{4k-1}(S^{2k})\otimes\mathbb{Q}\ne0$). The analogous model for $\mathbb{CP}^n$ is $(\Lambda(x,y),dy=x^{n+1})$, $|x|=2$, $|y|=2n{+}1$.` },

  { space:x`Ch 2 · formality`, subj:"formality", diff:2, ch:2,
    q:x`A space $X$ is formal (over $k$) when:`,
    a:x`$A_{PL}(X)$ is connected to $(H^*(X;k),0)$ by a zigzag of quasi-isomorphisms — the cohomology ring determines the rational homotopy type`,
    d:[x`$H^*(X;k)$ is a free algebra`,
       x`The minimal model of $X$ has zero differential`,
       x`All homotopy groups of $X$ are finitely generated`],
    why:x`Zero differential on the *minimal model* would force $X$ rationally equivalent to a product of Eilenberg–MacLanes; formality is weaker and only asks the model be built from the cohomology ring.` },

  { space:x`Ch 2 · formal spaces`, subj:"formality", diff:3, ch:2,
    q:x`Which of these is the DGMS theorem (Deligne–Griffiths–Morgan–Sullivan)?`,
    a:x`Compact Kähler manifolds are formal — via the $dd^c$-lemma from Hodge theory`,
    d:[x`All simply connected 6-manifolds are formal`,
       x`H-spaces are formal`,
       x`Products of formal spaces are formal`],
    why:x`The $dd^c$-lemma connects $\Omega^*(M)$ to $H^*(M;\mathbb{R})$ through the $d^c$-closed forms. Spheres, $\mathbb{CP}^n$, symmetric spaces, H-spaces, products and wedges are formal by separate (easier) arguments.` },

  { space:x`Ch 2 · formality ⇒ Massey`, subj:"formality", diff:3, ch:2,
    q:x`Proposition 2.8.5: formality implies all Massey products vanish. Does the converse hold?`,
    a:x`No — vanishing of all triple Massey products does not imply formality in general`,
    d:[x`Yes, that's exactly the definition of formality`,
       x`Yes, for simply connected spaces`,
       x`The converse holds over $\mathbb{R}$ but not $\mathbb{Q}$`],
    why:x`In $(H^*,0)$ one can take zero bounding cochains, so products vanish and quasi-isos preserve them. The converse fails because higher operations (quadruple products, $A_\infty$ structure) can obstruct formality even when triples vanish.` },

  { space:x`Ch 2 · PD-CDGA`, subj:"pdcdga", diff:3, ch:2,
    q:x`A Poincaré duality CDGA of formal dimension $n$ is $(A,d,\varepsilon)$ where $\varepsilon:A^n\to k$ satisfies:`,
    a:x`$\varepsilon\circ d=0$ and the pairing $a\otimes b\mapsto\varepsilon(ab)$ on $A^k\otimes A^{n-k}$ is non-degenerate for all $k$`,
    d:[x`$\varepsilon$ is an algebra map and $A$ is formal`,
       x`$\varepsilon\circ d=0$ and $A^k=0$ for $k$ odd`,
       x`The pairing is non-degenerate on cohomology only`],
    why:x`Non-degeneracy at the cochain level is the whole difficulty: it holds on $H^*$ automatically for a closed oriented $M$, but realizing it on the model is the Lambrechts–Stanley theorem.` },

  { space:x`Ch 2/3 · orphans`, subj:"pdcdga", diff:5, ch:3,
    q:x`In the Lambrechts–Stanley proof that every simply connected closed $M$ has a PD model, the obstruction to non-degeneracy is measured by:`,
    a:x`The orphan ideal $O=\{a\in A:\varepsilon(ab)=0\ \forall b\}$ — one enlarges $A$ until $O$ is acyclic, then quotients by it`,
    d:[x`The torsion in $H^*(M;\mathbb{Z})$`,
       x`The failure of the $dd^c$-lemma`,
       x`The Euler class of $M$`],
    why:x`$A/O$ is always a PD algebra, but the projection is a quasi-iso only when $H^*(O)=0$; the induction on half-acyclicity adds generators to kill $H^*(O)$. For $n\le 6$ no enlargement is needed: Miller–Neisendorfer formality lets one take $A=H^*(M;\mathbb{R})$.` },

  { space:x`Ch 3 · diagonal class`, subj:"lsmodel", diff:3, ch:3,
    q:x`The diagonal class of a PD-CDGA is $\Delta_A=\sum_\alpha(-1)^{|e_\alpha|}e_\alpha\otimes e^\alpha$. Its key properties:`,
    a:x`Basis-independent; represents the Poincaré dual of $\Delta\subset M\times M$; satisfies $\tau(\Delta_A)=(-1)^n\Delta_A$`,
    d:[x`Depends on the basis up to sign; always symmetric`,
       x`Represents the Euler class; $\tau(\Delta_A)=\Delta_A$`,
       x`Is a cocycle only when $M$ is formal`],
    why:x`Lemma 3.2.6. $\{e^\alpha\}$ is the Poincaré-dual basis, $\varepsilon(e_\alpha e^\beta)=\delta_{\alpha\beta}$. The symmetry sign $(-1)^n$ under the graded swap is what makes relation (R1) $\omega_{ji}=(-1)^n\omega_{ij}$ compatible with $d$.` },

  { space:x`Ch 3 · $G_A(r)$`, subj:"lsmodel", diff:4, ch:3,
    q:x`The four relations defining $G_A(r)$ are graded symmetry, $\omega_{ij}^2=0$, the diagonal relation $\iota_i(a)\omega_{ij}=\iota_j(a)\omega_{ij}$, and:`,
    a:x`The Arnold relation $\omega_{ij}\omega_{jk}+\omega_{jk}\omega_{ki}+\omega_{ki}\omega_{ij}=0$`,
    d:[x`The Jacobi relation $[\omega_{ij},[\omega_{jk},\omega_{ki}]]=0$`,
       x`$\omega_{ij}\omega_{kl}=0$ for disjoint pairs`,
       x`$\sum_j\omega_{ij}=0$ for each $i$`],
    why:x`(R3), from the Arnold–Cohen presentation of $H^*(\mathrm{Conf}_r(\mathbb{R}^n))$; it reflects $\Delta_{ij}\cap\Delta_{jk}=\Delta_{jk}\cap\Delta_{ki}=\Delta_{ki}\cap\Delta_{ij}$ in $M^3$.` },

  { space:x`Ch 3 · $G_A(r)$ differential`, subj:"lsmodel", diff:3, ch:3,
    q:x`The differential of $G_A(r)$ acts on the propagator generators by:`,
    a:x`$d(\omega_{ij})=\iota_{ij}(\Delta_A)=\sum_\alpha(-1)^{|e_\alpha|}\iota_i(e_\alpha)\iota_j(e^\alpha)$`,
    d:[x`$d(\omega_{ij})=0$`,
       x`$d(\omega_{ij})=\omega_{ij}\cdot\iota_i(\chi(M))$`,
       x`$d(\omega_{ij})=\sum_k\omega_{ik}\omega_{kj}$`],
    why:x`The diagonal class becomes exact once the diagonal is removed; $\omega_{ij}$ is its primitive. For $M=\mathbb{R}^n$: $A=\mathbb{R}$, $\Delta_A=0$, $d=0$, and $G_{\mathbb{R}}(r)$ is the Arnold–Cohen algebra.` },

  { space:x`Ch 3 · propagator`, subj:"idrissi", diff:4, ch:3,
    q:x`A propagator $\varphi\in\Omega^{n-1}_{PA}(\mathrm{FM}_M(2))$ satisfies three conditions. Which triple is correct?`,
    a:x`$d\varphi=\pi_{12}^*(\rho(\Delta_R))$; $\sigma^*\varphi=(-1)^n\varphi$; fiberwise it restricts on the collision boundary to the normalized volume form of $S^{n-1}$`,
    d:[x`$d\varphi=0$; $\sigma^*\varphi=\varphi$; $\int\varphi=\chi(M)$`,
       x`$d\varphi=\pi_{12}^*(\rho(\Delta_R))$; $\sigma^*\varphi=-\varphi$; $\varphi$ vanishes on the boundary`,
       x`$\varphi$ closed; supported near the diagonal; integrates to $1$ over $M$`],
    why:x`(P1)–(P3), Definition 3.5.3. It's the algebraic version of Kontsevich's propagator; its existence uses the long exact sequence of $(M\times M,\mathrm{Conf}_2)$ plus corrections at the boundary.` },

  { space:x`Ch 3 · partition function`, subj:"idrissi", diff:5, ch:3,
    q:x`Idrissi's partition function is $Z=\sum_\Gamma I(\Gamma)/|\mathrm{Aut}(\Gamma)|$ over connected vacuum graphs. Theorem 3.8.3 says $Z=0$ when:`,
    a:x`$M$ is simply connected, closed, of dimension $n\ge4$ — by degree counting using $R^0=\mathbb{R}$, $R^1=0$`,
    d:[x`$M$ is formal of any dimension`,
       x`$M$ is odd-dimensional`,
       x`$M$ has vanishing Euler characteristic`],
    why:x`$I(\Gamma)$ is a number only if $\sum_v|\ell(v)|=ns-(n-1)e$; simple connectivity forces label degrees $0$ or $\ge2$, and the count fails for every graph when $n\ge4$. $Z=0$ means no Maurer–Cartan twist $d+[Z,-]$ is needed and the quotient $p$ is a quasi-iso.` },

  { space:x`Ch 3 · proof architecture`, subj:"idrissi", diff:5, ch:3,
    q:x`The integration map $I:\mathrm{Graphs}_R(r)\to\Omega^*_{PA}(\mathrm{FM}_M(r))$ is shown to be a quasi-isomorphism by:`,
    a:x`Comparing two spectral sequences — filtration by number of edges vs. the Cohen–Taylor–Bendersky–Gitler filtration by codimension of diagonals — matched at $E^1$ by the quotient $p$`,
    d:[x`A direct computation of both cohomologies`,
       x`Poincaré duality on $\mathrm{FM}_M(r)$`,
       x`The fact that both sides are formal`],
    why:x`The comparison theorem for spectral sequences then finishes the zigzag $G_A(r)\xleftarrow{p}\mathrm{Graphs}_R(r)\xrightarrow{I}\Omega^*_{PA}(\mathrm{FM}_M(r))$.` },

  { space:x`Ch 3 · $F_2(\mathbb{HP}^2)$`, subj:"f2hp2", diff:4, ch:3,
    q:x`The LS model $G_A(2)$ for $\mathbb{HP}^2$ has total dimension:`,
    a:x`$12=\dim(A\otimes A)+\dim A=9+3$ — the diagonal relation collapses the odd part to $A\cdot\omega=\langle\omega,u\omega,u^2\omega\rangle$ in degrees $7,11,15$`,
    d:[x`$18=9+9$: two full copies of $A\otimes A$`,
       x`$9$: the odd part is zero`,
       x`$27=\dim(A\otimes A\otimes A)$`],
    why:x`$(a\otimes 1)\omega=(1\otimes a)\omega$ makes the $\omega$-part factor through the multiplication $A\otimes A\to A$. Then $\chi(G_A(2))=9-3=6=\chi(M)^2-\chi(M)$.` },

  { space:x`Ch 3 · $F_2(\mathbb{HP}^2)$`, subj:"f2hp2", diff:4, ch:3,
    q:x`Theorem 3.11.2: $H^*(F_2(\mathbb{HP}^2);\mathbb{Q})$ is concentrated in degrees $0,4,8,12$ with ranks:`,
    a:x`$(1,2,2,1)$`,
    d:[x`$(1,1,1,1)$`,
       x`$(1,2,3,2)$`,
       x`$(1,2,2,2)$ in degrees $0,4,8,16$`],
    why:x`From $d\omega=u_1^2+u_1u_2+u_2^2$, $d(u\omega)=u_1^2u_2+u_1u_2^2$, $d(u^2\omega)=u_1^2u_2^2$: each odd generator kills one even class. Note the ordered $F_2$ answer $(1,2,2,1)$ vs. the unordered $B_2$ answer $1+t^4+t^8$ — the $\Sigma_2$-invariants.` },

  { space:x`Ch 3 · $F_2(\mathbb{HP}^2)$ formal`, subj:"f2hp2", diff:4, ch:3,
    q:x`Why do all rational Massey products on $F_2(\mathbb{HP}^2)$ vanish?`,
    a:x`Cohomology sits in even degrees only; a triple product of even classes lives in odd degree $|a|+|b|+|c|-1$, which is zero`,
    d:[x`Because $F_2$ of a formal space is formal`,
       x`Because $\mathbb{HP}^2$ is Kähler`,
       x`They don't — that's the counterexample mechanism`],
    why:x`Corollary 3.11.5. Contrast with Chapter 1: there the deleted square had odd-degree room ($H^5$ of the universal cover) for a nonzero product. Even concentration is a cheap but effective formality criterion.` },

  { space:x`Ch 3 · $\mathbb{HP}^2$ facts`, subj:"f2hp2", diff:3, ch:3,
    q:x`Which invariants package for $\mathbb{HP}^2$ is correct?`,
    a:x`3-connected, $\pi_4=\mathbb{Z}$, $p_1=2u$, $w_2=0$ (spin)`,
    d:[x`2-connected, $\pi_3=\mathbb{Z}$, $p_1=u$, $w_2\ne0$`,
       x`Simply connected with $\pi_2=\mathbb{Z}$, $p_1=2u$, spin`,
       x`3-connected, $\pi_4=\mathbb{Z}/2$, $p_1=24u$`],
    why:x`3-connectedness is why Levitt's theorem already gives homotopy invariance of $F_2$ here — making the family an ideal test case rather than a counterexample candidate. The Eells–Kuiper manifolds $M_k$ have $p_1=(2+24k)\,u$.` },

  // ================= CHAPTER 4 — the obstruction landscape =================
  { space:x`Ch 4 · landscape`, subj:"landscape", diff:4, ch:4,
    q:x`Levitt's two invariance theorems say:`,
    a:x`$\Omega F_r(M)$ is a homotopy invariant of $M$ for all $r$; and $F_2(M)$ itself is invariant when $M$ is 2-connected`,
    d:[x`$F_r(M)$ is invariant for all $r$ when $M$ is simply connected`,
       x`$\Sigma F_r(M)$ is invariant for all $r$; $F_2$ invariant when $M$ is spin`,
       x`$\Omega F_2(M)$ is invariant only for parallelizable $M$`],
    why:x`The $F_2$ result is general position: the diagonal has codimension $n$ and 2-connectedness gives room to make a homotopy equivalence transverse to it. The argument fails for $r\ge3$.` },

  { space:x`Ch 4 · landscape`, subj:"landscape", diff:4, ch:4,
    q:x`Aouina–Klein (with later refinements): for homotopy equivalent simply connected closed $M\simeq N$, what is invariant?`,
    a:x`Some finite suspension: $\Sigma^j F_r(M)\simeq\Sigma^j F_r(N)$, hence equivalent suspension spectra $\Sigma^\infty_+ F_r$`,
    d:[x`The full homotopy type of $F_r$`,
       x`Only the rational homology of $F_r$`,
       x`The loop space $\Omega^\infty F_r$`],
    why:x`$j$ depends on $r$, $\dim M$, and connectivity. So a counterexample must be unstable: it must die after finitely many suspensions — exactly like the Massey products of Chapter 1.` },

  { space:x`Ch 4 · landscape`, subj:"landscape", diff:4, ch:4,
    q:x`The rational results of Lambrechts–Stanley and Cordova Bulens say the rational homotopy type of configuration spaces depends only on that of $M$ when:`,
    a:x`$M$ is 2-connected (all $r$), or $M$ is simply connected of even dimension (for $F_2$)`,
    d:[x`$M$ is simply connected (all $r$) — this is exactly Idrissi's theorem over $\mathbb{Q}$`,
       x`$M$ is formal (all $r$)`,
       x`$M$ is a rational homology sphere ($r\le3$)`],
    why:x`Over $\mathbb{Q}$ the known results are genuinely more restrictive than Idrissi's real statement — the $\mathbb{Q}$ vs. $\mathbb{R}$ gap for simply connected $M$ of odd dimension is still open territory.` },

  { space:x`Ch 4 · Knudsen`, subj:"landscape", diff:5, ch:4,
    q:x`Knudsen's theorem computes $H_*(B_k(M);\mathbb{Q})$ as:`,
    a:x`Lie algebra homology $H^{\mathrm{Lie}}_*$ of the graded Lie algebra $H^*_c(M;\mathbb{Q}^w)\otimes L(\mathbb{Q}^w[n-1])$, depending only on the ring $H^*(M)$ with its PD structure`,
    d:[x`Hochschild homology of $C^*(M)$`,
       x`The $\Sigma_k$-coinvariants of $H_*(M)^{\otimes k}$`,
       x`Topological cyclic homology of $\Sigma^\infty_+ M$`],
    why:x`Theorem 4.1.7, via factorization homology; $\mathbb{Q}^w$ is the orientation local system. This is why $p_1$ and the $\mu$-invariant never enter: the input simply does not contain them.` },

  { space:x`Ch 4 · $k=3$ differential`, subj:"ch4", diff:5, ch:4,
    q:x`In the weight-3 CE complex for $\mathbb{HP}^2$, the differential on a triple product of weight-1 generators is:`,
    a:x`$D(a_\alpha a_\beta a_\gamma)=a_\gamma b_{\alpha\cdot\beta}+a_\beta b_{\alpha\cdot\gamma}+a_\alpha b_{\beta\cdot\gamma}$, with $b_\delta=0$ if $\delta=0$ in $H^*(\mathbb{HP}^2)$; $D=0$ on mixed terms $a_\alpha b_\gamma$`,
    d:[x`$D(a_\alpha a_\beta a_\gamma)=b_{\alpha\cdot\beta\cdot\gamma}$`,
       x`$D(a_\alpha b_\gamma)=a_\alpha a_\gamma$ and $D=0$ on triples`,
       x`$D$ is zero everywhere at weight $3$`],
    why:x`Sum over pairings of two factors, each producing a weight-2 generator via the cup product. E.g. $D(a_1a_u a_{u^2})=a_{u^2}b_u+a_u b_{u^2}$ and $D(a_{u^2}^3)=0$.` },

  { space:x`Ch 4 · $B_3$ generators`, subj:"ch4", diff:5, ch:4,
    q:x`Concrete generators for the odd classes of $H_*(B_3(\mathbb{HP}^2);\mathbb{Q})$ can be taken as:`,
    a:x`$H_{19}$: $a_u b_1$ (mod image); $H_{15}$: $a_u b_u-2\,a_{u^2}b_1$`,
    d:[x`$H_{19}$: $a_1 b_1$; $H_{15}$: $a_1 b_{u^2}$`,
       x`$H_{19}$: $b_1 b_u$; $H_{15}$: $b_u b_{u^2}$`,
       x`$H_{19}$: $a_u^2 b_u$; $H_{15}$: $a_{u^2}^2 b_1$`],
    why:x`Degree 19 has cycles $a_1b_u,a_ub_1$ with a rank-1 image $2a_1b_u+a_ub_1$; degree 15 has three cycles and a rank-2 image. ($a_1b_1$ in degree 23 is killed: $D(a_1^3)=3a_1b_1$ — degree 23 only survives from $k\ge4$.)` },

  // ================= CHAPTER 5 — computational depth =================
  { space:x`Ch 5 · $\partial(b_2)$`, subj:"hp2", diff:4, ch:5,
    q:x`Written out on the $\mathbb{HP}^2$ generators, the differential is $\partial(b_0)=a_0^2$, $\partial(b_1)=2a_0a_1$, and $\partial(b_2)=\,$?`,
    a:x`$2a_0a_2+a_1^2$`,
    d:[x`$2a_1a_2$`,
       x`$a_2^2$`,
       x`$2a_0a_2$`],
    why:x`$\partial(b_\ell)=\sum_{i+j=\ell}a_ia_j$; for $\ell=2$ the pairs are $(0,2),(1,1),(2,0)$, giving $2a_0a_2+a_1^2$. The pairs $(1,2)$ and $(2,2)$ would produce the nonexistent $b_3,b_4$ and contribute nothing.` },

  { space:x`Ch 5 · formula (5.1)`, subj:"k6", diff:5, ch:5,
    q:x`In the monomial formula for $\partial(a^P\beta)$, the coefficient of the $b_0$-term is:`,
    a:x`$\binom{p_0}{2}$ — two $a_0$-factors merge into $b_0$; similarly $p_0p_1$ for $b_1$ and $p_0p_2+\binom{p_1}{2}$ for $b_2$`,
    d:[x`$p_0$`,
       x`$p_0!$`,
       x`$\binom{p_0+p_1}{2}$`],
    why:x`Each unordered pair of $a$-factors with indices summing to $\ell$ collapses into $b_\ell$, with Koszul signs from reordering $b_\ell$ into $\beta$. Sanity check at $k=6$: $\partial(a_0a_2^5)=5a_2^4b_2$ (that is $p_0p_2=5$), $\partial(a_1^2a_2^4)=a_2^4b_2$ (that is $\binom{2}{2}=1$).` },

  { space:x`Ch 5 · thread formula`, subj:"k6", diff:5, ch:5,
    q:x`For a thread $T_D:{}^{}\ _0\Omega_D\to{}_1\Omega_{D-1}\to{}_2\Omega_{D-2}\to{}_3\Omega_{D-3}$ with ranks $\rho_i=\operatorname{rank}\partial_i$, the middle cohomology dimensions are:`,
    a:x`$\dim H_{D-1}=\dim{}_1\Omega_{D-1}-\rho_1-\rho_2$ and $\dim H_{D-2}=\dim{}_2\Omega_{D-2}-\rho_2-\rho_3$`,
    d:[x`$\dim H_{D-1}=\rho_1-\rho_2$`,
       x`$\dim H_{D-1}=\dim{}_1\Omega_{D-1}-\rho_1+\rho_2$`,
       x`$\dim H_{D-1}=\dim{}_0\Omega_{D}-\rho_1-\rho_2$`],
    why:x`Formula (5.2): kernel minus image. The modular separation is what makes each degree a single 4-term thread, so thirteen small rank computations ($T_0,\dots,T_{48}$) settle all 92 dimensions of $\Omega^*(6)$.` },

  { space:x`Ch 5 · $T_8$`, subj:"k6", diff:4, ch:5,
    q:x`Thread $T_8$ at $k=6$: $ {}_0\Omega_8=\langle a_1^2a_2^4,\,a_0a_2^5\rangle\to{}_1\Omega_7=\langle a_2^4b_2\rangle$. The differential matrix and outcome:`,
    a:x`$(1\ \ 5)$, rank $1$; $\dim H_8=1$ with $H_8=\langle[a_0a_2^5-5a_1^2a_2^4]\rangle$, $\dim H_7=0$`,
    d:[x`$(1\ \ 1)$, rank $1$; $H_8=\langle[a_0a_2^5-a_1^2a_2^4]\rangle$`,
       x`$(2\ \ 5)$, rank $1$; $\dim H_8=0$, $\dim H_7=1$`,
       x`$(0\ \ 0)$, rank $0$; $\dim H_8=2$`],
    why:x`$\partial_1(a_1^2a_2^4)=a_2^4b_2$ and $\partial_1(a_0a_2^5)=5a_2^4b_2$; the kernel is spanned by $a_0a_2^5-5a_1^2a_2^4$ — the $k=6$ instance of the stable class $a_0a_2^{k-1}-(k-1)a_1^2a_2^{k-2}$.` },

  { space:x`Ch 5 · $b_0$ vs $b_1$`, subj:"k6", diff:5, ch:5,
    q:x`Among the stable representatives of $B_k(\mathbb{HP}^2)$, the degree-15 and degree-19 classes are distinguished by their $b$-factor:`,
    a:x`$H_{15}=[a_1a_2^{k-3}b_1]$ and $H_{19}=[a_1a_2^{k-3}b_0]$ — same $a$-part, $b_1$ vs $b_0$`,
    d:[x`$H_{15}=[a_1a_2^{k-3}b_0]$ and $H_{19}=[a_1a_2^{k-3}b_1]$`,
       x`$H_{15}=[a_2^{k-2}b_2]$ and $H_{19}=[a_2^{k-2}b_1]$`,
       x`Both use $b_2$, with different $a$-parts`],
    why:x`$|b_1|=11$ and $|a_1a_2^{k-3}|$ contributes $4$, giving $15$; $|b_0|=15$ gives $19$. (A monomial with $b_2$ in these degrees is a boundary target, not a surviving class.)` },

  { space:x`Ch 5 · coefficients`, subj:"k6", diff:5, ch:5,
    q:x`The integer coefficients in the stable classes $a_0a_2^{k-1}-c_1\,a_1^2a_2^{k-2}$ and $(a_0a_2^{k-3}-c_2\,a_1^2a_2^{k-4})b_0$ are:`,
    a:x`$c_1=k-1$ and $c_2=k-3$, forced by the cycle condition`,
    d:[x`$c_1=k$ and $c_2=k-2$`,
       x`$c_1=c_2=2$ independent of $k$`,
       x`$c_1=k-1$ and $c_2=k-1$`],
    why:x`Remark 5.9.2: $\partial(a_0a_2^{k-1})=(k-1)a_2^{k-2}b_2$ while $\partial(a_1^2a_2^{k-2})=a_2^{k-2}b_2$, so the kernel is the stated combination; same computation shifted by the $b_0$-factor for $c_2$. Verified directly for $k\in\{4,5,6,7\}$.` },

  { space:x`Ch 5 · $T_{36}$`, subj:"k6", diff:5, ch:5,
    q:x`The single generator of $ {}_3\Omega(6)$, namely $b_0b_1b_2$ in degree $33$, contributes what to cohomology?`,
    a:x`Nothing: it is a boundary, e.g. $\partial_3(a_0^2b_1b_2)=b_0b_1b_2$, and thread $T_{36}$ is exact`,
    d:[x`A one-dimensional class $H_{33}=\mathbb{Q}$`,
       x`It is a permanent cocycle contributing to $H_{23}$`,
       x`It cancels the class in degree $23$`],
    why:x`$\partial_3$ has coordinate vector $(1,-1,1,1)$ on the basis of $ {}_2\Omega_{34}$, rank $1$, so $\dim H_{33}=1-1=0$. $T_{36}$ is the only thread reaching the $q=3$ block.` },

  { space:x`Ch 5 · generating function`, subj:"k6", diff:4, ch:5,
    q:x`The Euler characteristics of all the $B_k(M)$ assemble into the Félix–Thomas generating function:`,
    a:x`$\sum_{k\ge0}\chi(B_k(M))\,t^k=(1+t)^{\chi(M)}$ — for $\mathbb{HP}^2$, $(1+t)^3$, so $\chi(B_6)=\binom{3}{6}=0=28-45+18-1$`,
    d:[x`$\sum_k\chi(B_k)t^k=e^{\chi(M)t}$`,
       x`$\sum_k\chi(B_k)t^k=(1-t)^{-\chi(M)}$`,
       x`$\chi(B_k)=\chi(M)^k$`],
    why:x`A clean global check on the $k=6$ block dimensions before computing a single differential.` },

  { space:x`Ch 5 · ranges`, subj:"stability", diff:3, ch:5,
    q:x`The strong stability ranges in Berceanu–Yameen are:`,
    a:x`$3$ for rational homology spheres, $4$ for rational homology projective planes`,
    d:[x`$4$ for spheres, $3$ for projective planes`,
       x`$2$ for both`,
       x`$\dim M/2$ in both cases`],
    why:x`For $\mathbb{HP}^2$ this is why $B_3$ (degrees up to $19$) differs from the $k\ge4$ answer (degree $23$ appears) — stabilization completes exactly at $k=4$.` },

  // ================= OPEN — new reconstruction cards =================
  { space:x`Ch 3 · reconstruct`, subj:"reconstruction", diff:4, ch:3, open:true,
    q:x`Blank page: present the Lambrechts–Stanley CDGA $G_A(r)$ — generators with degrees, all four relations, and the differential.`,
    reveal:x`Generators: $\iota_i(a)$ of degree $|a|$ for $a\in A$, $1\le i\le r$ (with $\iota_i$ an algebra map), and $\omega_{ij}$ of degree $n-1$ for $i\ne j$.
Relations:
(R1) $\omega_{ji}=(-1)^n\omega_{ij}$;
(R2) $\omega_{ij}^2=0$;
(R3) Arnold: $\omega_{ij}\omega_{jk}+\omega_{jk}\omega_{ki}+\omega_{ki}\omega_{ij}=0$;
(R4) diagonal: $\iota_i(a)\,\omega_{ij}=\iota_j(a)\,\omega_{ij}$.
Differential: $d\iota_i(a)=\iota_i(d_Aa)$ and $d\omega_{ij}=\iota_{ij}(\Delta_A)=\sum_\alpha(-1)^{|e_\alpha|}\iota_i(e_\alpha)\iota_j(e^\alpha)$.
Idrissi: $G_A(r)\simeq\Omega^*_{dR}(\mathrm{Conf}_r(M))$ for smooth simply connected closed $M$ with PD model $A$.
Sanity check $M=\mathbb{R}^n$: $\Delta_A=0$, $d=0$, and one recovers the Arnold–Cohen algebra.` },

  { space:x`Ch 3 · reconstruct`, subj:"reconstruction", diff:5, ch:3, open:true,
    q:x`Blank page: run the full $F_2(\mathbb{HP}^2)$ computation in $G_A(2)$ — the complex, the three differentials, and the Betti numbers.`,
    reveal:x`$A=\mathbb{Q}[u]/(u^3)$, $\Delta_A=1\otimes u^2+u\otimes u+u^2\otimes1$. Even part $A\otimes A$ ($\dim 9$: monomials $u_1^iu_2^j$); odd part collapses by (R4) to $A\cdot\omega=\langle\omega,u\omega,u^2\omega\rangle$ in degrees $7,11,15$. Total $\dim=12$, $\chi=9-3=6=\chi(F_2)$.
Differentials:
$d\omega=u_1^2+u_1u_2+u_2^2$;
$d(u\omega)=u_1^2u_2+u_1u_2^2$;
$d(u^2\omega)=u_1^2u_2^2$.
Each is nonzero, so $H^7=H^{11}=H^{15}=0$ and each image kills one even class:
$H^0=\mathbb{Q}$, $H^4=\mathbb{Q}^2$ ($u_1,u_2$), $H^8=\mathbb{Q}^3/\langle d\omega\rangle=\mathbb{Q}^2$, $H^{12}=\mathbb{Q}^2/\langle d(u\omega)\rangle=\mathbb{Q}$, $H^{16}=\mathbb{Q}/\langle u_1^2u_2^2\rangle=0$.
Ranks $(1,2,2,1)$ in degrees $0,4,8,12$. Even concentration $\Rightarrow$ all Massey products vanish $\Rightarrow$ $F_2(\mathbb{HP}^2)$ formal. Identical for every Eells–Kuiper $M_k$: $p_1$ invisible.` },

  { space:x`Ch 1 · reconstruct`, subj:"reconstruction", diff:4, ch:1, open:true,
    q:x`Blank page: define the triple Massey product with its indeterminacy, and state exactly how it distinguishes $F_2(L(7,1))$ from $F_2(L(7,2))$.`,
    reveal:x`Given $x\cup y=0=y\cup z$, choose $dZ=\bar x\cup\bar y$ and $dX=\bar y\cup\bar z$; then $\langle x,y,z\rangle=[\,Z\cup\bar z-(-1)^{|x|}\bar x\cup X\,]$, a coset modulo $x\cup H^*+H^*\cup z$.
On $\widetilde{X}_0$ all $H^2\otimes H^2$ products vanish ($H^4=0$), so triple products of degree-2 classes are always defined, landing in $H^5\cong(\mathbb{Z}/2)^{p-1}$.
$q=1$: $\widetilde{X}_0$ is formal (Thm 1.6.4), all products vanish, any coefficients.
$q=2$: $\langle a_{k+3},a_k,a_{k+1}+a_{k+5}\rangle\ni a_{k+1}\cup\alpha\ne0$ mod indeterminacy (Thm 1.7.5), checked in $(\mathbb{Z}/2)[t]/(1+\dots+t^6)$.
A homotopy equivalence $F_2(L(7,1))\simeq F_2(L(7,2))$ would lift to the universal covers respecting $\pi_1$-actions and transport nonzero Massey products to zero ones. Contradiction. The mechanism lives on the universal cover — hence dies without $\pi_1$.` },

  { space:x`Ch 3 · reconstruct`, subj:"reconstruction", diff:5, ch:3, open:true,
    q:x`Blank page: sketch the architecture of Idrissi's proof — the zigzag, the two maps, and what makes each a quasi-isomorphism.`,
    reveal:x`Zigzag: $G_A(r)\xleftarrow{\ p\ }\mathrm{Graphs}_R(r)\xrightarrow{\ I\ }\Omega^*_{PA}(\mathrm{FM}_M(r))$.
$\mathrm{Graphs}_R(r)$: labelled graphs, external vertices $1,\dots,r$, internal vertices labelled by a cofibrant model $R\simeq\Omega^*_{PA}(M)$; edges carry the propagator.
$I$ integrates the propagator form over positions of internal vertices in the Fulton–MacPherson compactification; the propagator $\varphi$ satisfies (P1) $d\varphi=\pi_{12}^*\rho(\Delta_R)$, (P2) $\sigma^*\varphi=(-1)^n\varphi$, (P3) fiberwise volume $1$ on the collision boundary.
$p$ quotients away graphs with internal vertices. It is a quasi-iso iff no Maurer–Cartan twist is needed, i.e. iff the partition function $Z=\sum_\Gamma I(\Gamma)/|\mathrm{Aut}\,\Gamma|$ over connected vacuum graphs vanishes — Theorem 3.8.3: true for $M$ simply connected, closed, $n\ge4$, by degree counting ($R^0=\mathbb{R}$, $R^1=0$).
$I$ is a quasi-iso by comparing the edge-count filtration with the Cohen–Taylor–Bendersky–Gitler filtration by codimension of diagonals; the $E^1$-pages are matched by $p$ and the comparison theorem concludes.` },

  // ================= OPEN — new defense cards =================
  { space:x`Defense · open question`, subj:"defense", diff:5, ch:4, open:true,
    q:x`"Is the integral homotopy invariance conjecture still open? Where could a counterexample live?" — answer with the constraint list.`,
    reveal:x`Yes, open (Conjecture 4.1.1) for simply connected closed manifolds. A counterexample must thread every known positive result:
— unstable: some $\Sigma^jF_r(M)\simeq\Sigma^jF_r(N)$ always holds (Aouina–Klein), so the difference must die under finitely many suspensions;
— invisible over $\mathbb{R}$: Idrissi kills any real-homotopy invariant;
— invisible to loops: $\Omega F_r$ is invariant (Levitt);
— not detected by $F_2$ if $M$ is 2-connected (Levitt), so either $r\ge3$ or connectivity exactly $1$ or torsion phenomena;
— by Remark 4.3.9, it must use invariants beyond the rational cohomology ring + Poincaré duality structure — torsion, integral Massey-type operations, or genuinely unstable structure.
The Longoni–Salvatore mechanism (Massey products on covers) is the template, but it needs $\pi_1$; the simply connected analogue is exactly what is missing.` },

  { space:x`Defense · $\mathbb{Q}$ vs $\mathbb{R}$`, subj:"defense", diff:4, ch:5, open:true,
    q:x`"Your Chapter 5 works over $\mathbb{Q}$, Idrissi over $\mathbb{R}$. Why do the coefficients differ, and does anything change?"`,
    reveal:x`Idrissi's proof needs $\mathbb{R}$: it runs through piecewise semi-algebraic forms on the Fulton–MacPherson compactification and an $\mathbb{R}$-valued propagator — the known rational statements (Lambrechts–Stanley: 2-connected; Cordova Bulens: $F_2$, even dimension) are strictly narrower.
Chapter 5 is different: the Félix–Thomas–Knudsen CE complex is defined over $\mathbb{Q}$ from the start (its differential is the dual of the cup product on $H^*(M;\mathbb{Q})$), and Betti numbers over $\mathbb{Q}$ and $\mathbb{R}$ agree anyway.
So: for homotopy types the $\mathbb{Q}$/$\mathbb{R}$ distinction is a real open gap; for my Betti-number computations it is immaterial. The transfer argument (Prop 5.2.2) needs only $k!$ invertible — any characteristic-zero field.` },

  { space:x`Defense · stability vs invariance`, subj:"defense", diff:4, ch:5, open:true,
    q:x`"Strong stability vs classical homological stability — what exactly is the difference, and where does your work sit?"`,
    reveal:x`Classical stability (Church, Randal-Williams, Knudsen): each fixed Betti number $\beta_i(B_k(M))$ is eventually constant in $k$. The top of the cohomology can still grow.
Strong stability (Berceanu–Yameen, Def 1.3): the entire ring $H^*(B_k;\mathbb{Q})$, including its top degree, is constant from some range on. Much rarer: exactly rational homology spheres (range 3) and rational homology projective planes (range 4).
My work sits on the strong side: $\mathbb{HP}^2$ and $\mathbb{OP}^2$ stabilize completely at $k=4$, and I make the stable ring explicit — six one-dimensional classes with polynomial cocycle representatives. For contrast, $\mathbb{HP}^n$ with $n\ge3$ fails strong stability outright: $v_4^{2k}$ is a permanent cocycle of degree $8k\to\infty$; only the classical, degree-by-degree stability survives there.` },

  ];

  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  window.THESIS = { BANK: BANK, pick: pick };
})();
