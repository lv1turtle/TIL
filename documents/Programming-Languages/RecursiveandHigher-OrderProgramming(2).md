# Recursive / Higher-Order Programming(2)

## Higher-Order Functions
  - 함수를 다루는 함수로 세부사항을 추상화하여 함수로 제공한다. (요구사항에 유연하게 대응)
  - 좋은 programming languages는 powerful한 abstraction mechanism을 제공한다.
  <br>이는 작은 아이디어들을 합쳐 더 복잡한 아이디어를 구성하는 방식을 의미
    - variables : value를 참조하기 위해 사용한 이름
    - functions : compound operations를 참조하기 위해 사용한 이름 

  - Example 1: map
    ~~~<python>
      let rec inc_all l = match l with | [] -> [] | hd::tl -> (hd+1)::(inc_all tl)
    ~~~

    ~~~<python>
      let rec <B>map</B> f l = match l with | [] -> [] | hd::tl -> (f hd) :: (map f tl)
    ~~~

    - let inc x = x + 1<br>
    let inc_all l = map inc 1<br>
    let inc_all l = map (fun x -> x + 1) l /* same mean */

  - Example 2 : fold
    - let rec fold f l a = match l with | [] -> a | hd::tl -> f hd (hold f tl a)<br>
    f가 함수, l이 list, a는 초기값, f hd (fold f tl a)에서 f가 함수고 hd와 (...)이 함수에 대한 인자

    - let sum lst = fold (fun x y -> x + y) lst 0

  - Exercises
    let rec is_all_pos l = match l with | [] -> true | hd::tl -> (hd > 0) && (is_all_pos tl)

    Re-write using fold :

    Ans) let is_all_pos list = fold (fun x y -> (x>0) && y) list true

## Functions as Returned Values

- OCaml에서는 x -> f(g(x))도 표현가능
  let <B>compose</B> f g = fun x -> f(g(x))

  Q) ((compose square inc) 6)<br> Ans) 49

- Map으로 function composition 사용 가능 <B>(이 부분 헷갈림)</B>

  let empty_map = fun x -> raise (Failure);;<br>
  let add_map (k,v) map = fun x -> if (k = x) then v else (map x);;<br>
  let m = (compose (add_map (1, "one")) (add_map(2,"two"))) empty_map ;;<br>

  m 1 ;; <br> string = "one"
