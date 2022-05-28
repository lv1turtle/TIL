# Design and implementation

## Designing a Programming Language

- Syntax : how to write programs
    - 언어의 문법과 구조에 관해 유효한지

- Semantics : the meaning of the programs
    - 문장이 타당한 의미를 지니는지 판별

## Values and Environments

- (Value) set of values는 integers와 booleans을 포함(v)

- (Env) an enviornment는 변수들에서 value값들로의 함수(p)


- Z + Bool
    <br> ex) A+B = $${A}\cup{B}$$ (if $${A}\cap{B}=\emptyset$$)

- Var -> Val
    <br> ex) A->B = see of functions from A to B

- Notations :
    <br>ex) ([x |-> 3][])(x) = 3<br>([y|->2][x|->3][])(x)=
    <br> ([y|->2][x|->3][])(Z) = [](Z) = fail

## Example : Arithmetic Expressions

- $$ \frac{\frac{e \vdash x \implies 10 \quad e \vdash 3 \implies 3}{e \vdash (x-3) \implies 7} \quad \frac{e \vdash v \implies 5 \quad e \vdash i \implies 1}{e \vdash (v-i) \implies 4}}{p \vdash (x-3) - {(v-i) \implies 3} } $$
