## Statement and expressions:
- statement oriented : C, C++, etc (imperative languages)
- expression oriented : ML, Scala, etc (functional languages)

## Boolean Expression :
-  헷갈릴 만한 요소<br> a <> b : true if <B>a</B> and <B>b</B> are not equal (a = b의 반대)

## Static Types and Dynamic Types
- Statically typed languages : C, C++, java, ML, Scala, etc<br><br> <B>type checking</B>을 컴파일 시에 진행한다.<br> 일반적으로 변수 생성 시에 자료형을 지정해주고 고정이 되므로 컴파일 시간에 자료형 검사가 가능하다.<br>
  - type-safe langauages : ML, Haskell, Scala<br> 모든 type error가 컴파일 시간에 검출이 되므로 Compile이 실패하지않음.
  - Unsafe langauages : C, C++<br> guarantee가 보장되지않음, type에 따라 run-time까지 error가 남아있는 경우가 있음.

- Dynamically typed languages : Python, JavaScript, Ruby, etc<br><br> <B>type checking</B>을 run-time시에 진행한다.<br> 변수가 모든 자료형을 다 가질 수 있으므로 run-time에서 변수에 대한 자료형을 결정하므로 run-time시에 자료형 검사를 하는 것이 적합하다.

- 단점 : 
  - Statically typed languages : less flexible(상대적으로 유연하지 못함)
  - Dynamically typed languages : Type error가 run-time시에 검출된다는 것

## Conversion between Different Types
- OCaml에서 3 + 2.0과 같이 다른 type끼리의 연산은 error

- OCaml은 6개의 primitive values를 제공 : integers, booleans, floating point number, characters, strings, unit

## Conditional Expressions

- If <B>be</B> then <B>e1</B> else <B>e2</B>
  - be는 boolean expression이여야만 한다. (1,0 불가능)
  - e1, e2의 type은 반드시 동일해야한다. (int, boolean 불가능)

## Names and Functions

- (input)# let x = 3 + 4;;<br>(output) val x : int = 7 <br> 이를 A variable x is <B>bound to value</B> 7이라 한다.

- let x = e1 in e2
  - 여기서 x는 x is bound to the value of e1 (즉, x의 값은 e1)

  - 여기서 e2는 이 표현식 전체의 value를 의미 (즉, e2의 결과가 output이 됨)

  - ex) # let d = let a = 1 in let be = a + a in let c = b + b in c + c;;<br> val d : int = 8

## Functions

- let square x = x * x;; (이런 식으로 함수를 만들 수 있음)<br> val square : int -> int = < fun ><br> # square 2;; -> (int 4)

- let neg x = if x < 0 then true else false;; (함수의 표현은 자유로운 편) <br> val neg : int -> bool = < fun >

- let sum_of_squares x y = (square x) + (square y);; (multiple argument도 가능)

- let rec factorical a = if a = 1 then 1 else a * factorial (a-1);;<br> <B>let rec</B>을 사용하여 recursive 가능

- 함수에 이름 지정하지 않아도 생성 가능 # (fun x -> x * x) 2;;

- let square = fun x -> x * x (이런 식으로 function에 bound 가능)

## Functions are First-Class in OCaml

- 아래 조건들을 만족하면 그 value는 first class에 속한다고 한다.
  - <B>stored in a variable </B>
    - let square = fun x -> x * x;; (만족)

  - <B>passed as an argument of a function</B>
    - let sum_if_true test first second = (if test first then first else 0) + (if test second then second else 0);;
    - val sum_if_true : (int -> bool) -> int -> int -> int = < fun >
    - let even x = x mod 2 = 0;; (int -> bool, 즉 test에는 int를 입력받아서 bool값을 출력하는 함수가 들어감)
    - sum_if_true even 3 4;; (이로써 functions can be passed to other functions을 확인)

  - <B>ruturned from other functions</B>
    - let plus_a a = fun b -> a + b;;<br># let f = plus_a 3;;<br> # f 1;;
    - 다른 함수(f)에 의해 plus_a(함수)가 return 되었으므로 만족

  이런 manipulate function을 <B>higher-order functions</B>이라 한다.

- 따라서 OCaml에서 function은 First class에 속하며, 이런 language를 <B>functional</B>이라 한다.
  - e,g.) ML, Scala, Python, etc


## Pattern Matching

- match <B>x</B> with (x는 variable)을 사용하여 pattern matching 기법 사용

- let rec factorial a = if a = 1 then 1 else a * factorial (a - 1)을 아래와 같이 elegant한 방법으로 쓸 수 있음<br>
<B>let factorial a = match a with 1 -> 1 | _ -> a * factorial (a - 1)</B>

- ##### e.g.) let isabc c = match c with 'a' | 'b' | 'c' -> true | _ -> false

## Type Inference

- C나 Java와 다르게 type 선언을 할 필요가 없음 (OCaml은 알아서 유추함)

- 원하면 type 선언도 가능
  - let sum_if_true (test : int -> bool) (x : int) (y : int) : int = (if test x then x else 0) + (if test y then y else 0);;


## Polymorphic Types

- let id x = x;;를 하면 입력한 value의 type을 알 수 있음
  - val id : 'a -> 'a = < fun >
  - e.g.) id "abc";; -> string = "abc"

-  이러한 function을 <B>polymorphic</B>이라 하며 여기서 <B>'a</B>는 type variable이다.

- Quiz) let first_if_true test x y = if test x then x else y;;
  - Answer) val first_if_true : ('a -> bool) -> 'a -> 'a -> 'a = < fun >

## Tuples

- let x = (1, "one");;<br> val x : int * string = (1,"one")

- let fst p = match p with (x,_) -> x;;<br> val fst : 'a * 'b -> 'a = < fun >

- 이런 것도 가능 # let p  = (1,true);;<br>#let (x,y) = p;;<br>val x : int = 1 val y : bool = true

## Lists

- list의 elements들은 모두 같은 type이여야만 한다.
- elements 간의 순서가 있다. e.g. [1; 2; 3] <> [2; 3; 1]
- first element : head, last element : tail이라 부른다.

- Quiz
  - [] : the empty list, what are head and tail of []?<br> NULL
  - [5] : head and tail<br>5

- ex) # [[1; 2; 3]; [2; 3; 4]];;<br> int list list = [[1; 2; 3]; [2; 3; 4]]

- :: (cons), 일명 cons라 불리는 "::"기호는 list에 single element를 더해주는 operator.
  - 1::[2; 3];; => [1; 2; 3]
  - 1::2::3::[];; => [1; 2; 3]

- @ (append), "@" operator는 두 list를 결합한다.
  - [1; 2] @ [3; 4; 5];; => [1; 2; 3; 4; 5]

- Pattern matching에도 가능<br>
  let isnil l = <B>match l with []</B> -> true | _ -> false ;;
  - val isnil : 'a list -> bool = < fun >
  - isnil [1];; => false, isnil [];; => true (list가 비어있을때 true를 반환)

  이렇게도 가능<br>
  let rec length l = match l with [] -> 0 | h::t -> 1 + length t;;<br>
  let rec length l = match l with [] -> 0 | _::t -> 1 + length t;;(same)
  - length [1; 2; 3];; => int = 3

## Data Types

- OCaml에서는 data type을 선언할 수도 있다.
  types days = Mon | Tue | Wed | Thu | Fri;; (days라는 타입과 그 element들이 선언되었다.)
  - Mon;; => days = Mon

  let nextday d = match d with | Mon -> Tue | Tue -> Wed | Wed -> Thu | Thu -> Fri | Fri -> Mon ;;
  - nextday Mon;; => days = Tue

  #### type shape = Rect of int * int | Circle of int;; ( type 내부에 type을 선언 가능 )

  let area s = match s with Rect (w,h) -> w * h | Circle r -> r * r * 3;;
    - area (Rect (2,3));; => int = 6
    - area (Circle 5);; => int = 75

  type mylist = Nil | List of int * mylist;;
    - List (1, List (2, Nil));;

  (재귀)<br>
  let rec mylength l = match l with Nil -> 0 | List (_,l') -> 1 + mylength l';;
    - mylength (List (1, List (2, Nil)));;<br> int = 2

## Exceptions

- exception은 run-time error를 의미한다.
  - ex) let div a b = a / b;; <br> div 10 0;;<br>(Exception: Division_by_zero)

- 이를 다룰 수 있음.
  - let div a b = <B>try a/b with Division_by_zero -> 0;;</B>
  - div 10 0;; (int = 0)

- 직접 exception problem을 정의 가능
  - let div a b = if b = 0 then <B>raise Problem</B> else a / b;;
  - div 10 0;; (Exception: Problem)