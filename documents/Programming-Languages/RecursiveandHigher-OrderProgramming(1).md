# Recursive / Higher-Order Programming(1)

- Recursion : 문제 해결 방법에 강함
- Higher-order functions : 추상적 의미를 표현하는 것에 강함

## Recursive Problem-Solving Strategy

- If 문제가 충분히 작다면, directly 해결
- 그렇지 않다면, 1. 문제를 같은 구조의 작은 문제들로 분해 2. 작은 문제들을 해결 3. 그 결과들을 합쳐 solution을 얻음.

- ex) If list is empty, the length is 0
- Otherwise, 1. head and tail을 split 2. tail의 길이를 구함 3. tail의 길이 + 1을 하여 solution을 구함.

##### let rec length l = match l with | [] -> 0 | hd::tl -> 1 + length tl


- exercise 1 : append [1; 2; 3] [4; 5; 6; 7];;<br>int list = [1; 2; 3; 4; 5; 6; 7]

  - let rec append l1 l2 = <B>( ? )</B> <br>
  Ans) match l1 with | [] -> l2 | hd::tl -> hd :: (append tl l2)

- exercise 2 : reverse [1; 2; 3];; <br> int list = [3; 2; 1]

  - let rec reverse l = <B>( ? )</B> <br>
  Ans) match l with | [] -> [] | hd::tl -> (reverse tl) @ [hd]

- exercise 3 : nth [1; 2; 3] 1;;<br> int = 2

  - let rec nth l n = match l with | [] -> raise (Failure "list is too short") | hd::tl -> <B>(* ... *)</B><br>
  Ans) if (n=0) then hd else nth tl (n-1)

- exercise 4 : remove_first 2 [1; 2; 3; 2];; <br> int list = [1; 3; 2]

  - let rec remove_first a l = match l with | [] -> [] | hd::tl -> <B>(* ... *)</B><br>
  Ans) if(a=hd) then tl else hd :: (remove_first a tl)

- exercise 5 : insert 2 [1; 3];;<br> int list = [1; 2; 3]

  - let rec insert a l = match l with | [] -> [a] | hd::tl -> <B>(* ... *)</B><br>
  Ans) if (hd > a) then a :: hd :: tl else hd :: (insert a tl)

- exercise 6 :
  #### let rec sort l = match l with | [] -> [] | hd::tl -> insert hd (sort tl)
  - 잘 보면 insert hd를 하면서 순서를 맞추고 sort로 재귀를 돌리면서 tl이 빈 공간이 될 때까지 이를 반복

#### Imperative vs Functional Programming

- Imperative programming : 문제를 어떻게 해결하는 지 기술하는데 초점(what보다는 how)
  - 주요 흐름 : 반복문 호출, 작업을 수행하는 방법 및 상태의 변경을 추적하는 방법이 중요!, 실행 순서 중요! 
  - ex) factorial을 for문으로 구현한 것

- Functional programming : 프로그램의 계산과정을 수학 함수의 수행으로 간주(how보다는 what)
  - 주요 흐름 : 재귀문 호출, 그저 원하는 정보와 필요한 변환, 상태 변경 불가, 실행 순서 중요도 낮음.
  - ex) let rec factorial n = if n = 0 then 1 else n * factorial (n-1)

#### Is Recursion Expensive?
  - 일반적으로 C나 java에서 재귀문은 memory를 추가로 사용하기에 계속 돌리면 stack overflow가 발생한다고 알고 있음.
    - void f() { f(); } /* stack overflow */

  - 그러나 functional languages에서는 그렇지 않습니다. 예를 들어 ML에서는 재귀문을 영원히 돌릴 수 있습니다.
    - let rec f () = f () /* stack overflow 발생 안함! */

  즉, functional languages에서는 Recursion이 not expensive하다.<br>
  좀 더 정확하게는 <B>tail-recursive functions</B>이 ML에서 not expensive합니다.


  아무 일도 하지않고 반환만 해 원래 자리 정보를 저장을 해둘 필요가 없는 것을 tail call이라고 한다.<br><br>
  이 tail call로 호출하는 함수가 자기 자신인 경우를 tail recursive function이라고 한다.<br>
  이처럼 tail call을 하는 경우엔 추가적인 메모리 소모가 없다. (functional languages에서)

  - ex) let rec fibonachi n = if n<2 then n else fibonachi (n-2) + fibonachi (n-1);<br>
  이 경우 fibonachi(n-1)을 호출한 후에 바로 리턴하는 것아니라 fibonachi(n-2)을 기다렸다가 더해서 리턴을 해주어야하기에 원래 자리 정보를 저장을 해두어야한다. <br>따라서 tail call이 아니다.

#### Transforing to Tail-Recursive Functions
  - Non tail recursive
    - let rec factorial a = if a = 1 then 1 else a * factorial (a - 1)

  - Tail recursive version
    - let rec fact product counter maxcounter =<br> if counter > maxcounter then product<br>else fact (product * counter) (counter + 1) maxcounter

    - let factorial n = fact 1 1 n
