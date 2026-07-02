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

  ];

  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  window.THESIS = { BANK: BANK, pick: pick };
})();
