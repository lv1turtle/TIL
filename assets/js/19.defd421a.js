(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{467:function(l,t,e){"use strict";e.r(t);var a=e(65),r=Object(a.a)({},(function(){var l=this,t=l.$createElement,e=l._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[e("h1",{attrs:{id:"recursive-higher-order-programming-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recursive-higher-order-programming-2"}},[l._v("#")]),l._v(" Recursive / Higher-Order Programming(2)")]),l._v(" "),e("h2",{attrs:{id:"higher-order-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#higher-order-functions"}},[l._v("#")]),l._v(" Higher-Order Functions")]),l._v(" "),e("ul",[e("li",[e("p",[l._v("함수를 다루는 함수로 세부사항을 추상화하여 함수로 제공한다. (요구사항에 유연하게 대응)")])]),l._v(" "),e("li",[e("p",[l._v("좋은 programming languages는 powerful한 abstraction mechanism을 제공한다.\n"),e("br"),l._v("이는 작은 아이디어들을 합쳐 더 복잡한 아이디어를 구성하는 방식을 의미")]),l._v(" "),e("ul",[e("li",[l._v("variables : value를 참조하기 위해 사용한 이름")]),l._v(" "),e("li",[l._v("functions : compound operations를 참조하기 위해 사용한 이름")])])]),l._v(" "),e("li",[e("p",[l._v("Example 1: map")]),l._v(" "),e("div",{staticClass:"language-<python> extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[l._v("  let rec inc_all l = match l with | [] -> [] | hd::tl -> (hd+1)::(inc_all tl)\n")])])]),e("div",{staticClass:"language-<python> extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[l._v("  let rec <B>map</B> f l = match l with | [] -> [] | hd::tl -> (f hd) :: (map f tl)\n")])])]),e("ul",[e("li",[l._v("let inc x = x + 1"),e("br"),l._v("\nlet inc_all l = map inc 1"),e("br"),l._v("\nlet inc_all l = map (fun x -> x + 1) l /* same mean */")])])]),l._v(" "),e("li",[e("p",[l._v("Example 2 : fold")]),l._v(" "),e("ul",[e("li",[e("p",[l._v("let rec fold f l a = match l with | [] -> a | hd::tl -> f hd (hold f tl a)"),e("br"),l._v("\nf가 함수, l이 list, a는 초기값, f hd (fold f tl a)에서 f가 함수고 hd와 (...)이 함수에 대한 인자")])]),l._v(" "),e("li",[e("p",[l._v("let sum lst = fold (fun x y -> x + y) lst 0")])])])]),l._v(" "),e("li",[e("p",[l._v("Exercises\nlet rec is_all_pos l = match l with | [] -> true | hd::tl -> (hd > 0) && (is_all_pos tl)")]),l._v(" "),e("p",[l._v("Re-write using fold :")]),l._v(" "),e("p",[l._v("Ans) let is_all_pos list = fold (fun x y -> (x>0) && y) list true")])])]),l._v(" "),e("h2",{attrs:{id:"functions-as-returned-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions-as-returned-values"}},[l._v("#")]),l._v(" Functions as Returned Values")]),l._v(" "),e("ul",[e("li",[e("p",[l._v("OCaml에서는 x -> f(g(x))도 표현가능\nlet "),e("B",[l._v("compose")]),l._v(" f g = fun x -> f(g(x))")],1),l._v(" "),e("p",[l._v("Q) ((compose square inc) 6)"),e("br"),l._v(" Ans) 49")])]),l._v(" "),e("li",[e("p",[l._v("Map으로 function composition 사용 가능 "),e("B",[l._v("(이 부분 헷갈림)")])],1),l._v(" "),e("p",[l._v("let empty_map = fun x -> raise (Failure);;"),e("br"),l._v("\nlet add_map (k,v) map = fun x -> if (k = x) then v else (map x);;"),e("br"),l._v('\nlet m = (compose (add_map (1, "one")) (add_map(2,"two"))) empty_map ;;'),e("br")]),l._v(" "),e("p",[l._v("m 1 ;; "),e("br"),l._v(' string = "one"')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);