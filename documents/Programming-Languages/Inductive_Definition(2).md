# Inductive Definition(2)

## Natural Numbers
N = {0,1,2,3, ... }

inference rules :

$$ \overline{0} \quad \frac{n}{n+1} $$

grammar : $$ {n} \rightarrow {0} \mid {n+1} $$


## Strings
inference rules :

$$ \overline{ \epsilon } \quad \frac{ \alpha }{x \alpha} \ {x} \in \{ {a, ... , z} \} $$

In grammar : $$ { \alpha } \rightarrow { \epsilon } \mid {x \alpha} \ ( {x} \in \{ {a, ... , z} \} ) $$

## Lists
inference rules :

$$ \overline{nil} \quad \frac{l}{n*l} \ {n} \in {Z} $$

In grammar : $$ {l} \rightarrow {nil} \mid {n*l} \ ({n} \in {Z}) $$

The proof tree :

$$ \frac{\frac{\frac{nil}{14*nil} {14} \in {Z} }{3*14*nil} {3} \in {Z} }{-7*3*14*nil} {-7} \in {Z} $$

이 proof tree를 derivation tree 혹은 deduction tree라 한다.<br>
( proof tree = derivation tree = deduction tree )

## Binary trees
inference rules :

$$ \overline{n} \quad {n} \in {Z} \quad \frac{t}{(t,nil)} \quad \frac{t}{(nil,t)} \quad \frac{t1 \ t2}{(t1,t2)} $$

In grammer : $$ {t} \rightarrow {n} \mid {(t,nil)} \mid {(nil,t)} \mid {(t,t)} $$

A proof that ((1,2),(3,nil)) is a binary tree :

$$ \frac{\frac{\overline{1} \quad \overline{2}}{(1,2)} \quad \frac{\overline{3}}{(3,nil)}}{((1,2),(3,nil))} $$

## Propositional Logic
Examples:
  - $$ {T}, {F} $$<br>
  - $$ {T} \land {F} $$<br>
  - $$ {T} \implies {F} $$<br>

- cf)
  $$ {A} \implies {B} $$
  ~~~<python>
   T  T   T
   T  F   F
   F  T   T
   F  F   T
  ~~~

## *** Structural Induction ***
To prove that a proposition(명제) 'P(s)' is true for all structures 's'<br>
1. (Base case) : <B>'P'</B> is true on simple structures
2. (Inductive case) : If <B>'P'</B> is true on the substructures of <B>'s'</B>, then it is true <B>'s'</B> itself.<br> The assumption : <B>induction hypothesis</B> (I.H.)

- Example<br>
  Let T be the set of binary trees:

  $$ \overline{leaf} \quad \frac{t1 \ t2}{(n,t1,t2)} \quad {n} \in {Z} $$

  Proof : If $$ {t} \in {T} \quad then \quad {l(t)} = {i(t)} + {1} $$<br>

  where $${l(t)}$$ and $${i(t)}$$ denote the number of leaves<br>
  $${l(leaf)} = {1} \quad {i(leaf)}={0}$$<br>
  $${l(n,t1,t2)}={l(t1)}+{l(t2)} \quad {i(n,t1,t2)} = {i(t1)} + {i(t2)} + {1} $$<br><br>

  1. Base case : when t = leaf, where $${l(t)}=1 \quad {i(t)}={0}$$
  2. Inductive case :<br> <B>The inductive hepothesis(I.H.)</B><br><br>
  $${l(t1)}={i(t1)}+{1}, \quad {l(t2)}={i(t2)} + {1}$$<br><br>
  prove : $${l(n,t1,t2)}={i(n,t1,t2)}+{1}$$<br><br>
  $${l(n,t1,t2)}={l(t1)}+{l(t2)}$$<br>
  $$={i(t1)}+{1}+{i(t2)} +{1}$$<br>
  $$={i(t1)}+{i(t2)}+{1}+{1}$$<br>
  $$={i(n,t1,t2)}+{1}$$