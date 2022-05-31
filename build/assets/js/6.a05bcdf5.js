(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{424:function(e,t,n){e.exports=n.p+"assets/img/top-down.95b45ddb.png"},425:function(e,t,n){e.exports=n.p+"assets/img/bottom-up.d34afe97.png"},426:function(e,t,n){e.exports=n.p+"assets/img/exercise1.3b2ce6ff.png"},427:function(e,t,n){e.exports=n.p+"assets/img/exercise2.806c41d1.png"},428:function(e,t,n){e.exports=n.p+"assets/img/exercise3.1f7d9350.png"},429:function(e,t,n){e.exports=n.p+"assets/img/exercise4.d1c6892c.png"},469:function(e,t,n){"use strict";n.r(t);var s=n(65),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"inductive-definition-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inductive-definition-1"}},[e._v("#")]),e._v(" Inductive Definition(1)")]),e._v(" "),s("h2",{attrs:{id:"inductive-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inductive-definition"}},[e._v("#")]),e._v(" Inductive definition :")]),e._v(" "),s("ul",[s("li",[e._v("Top-down")]),e._v(" "),s("li",[e._v("Bottom-up")]),e._v(" "),s("li",[e._v("Rules of inference")])]),e._v(" "),s("h2",{attrs:{id:"top-down"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#top-down"}},[e._v("#")]),e._v(" Top-down")]),e._v(" "),s("ul",[s("li",[e._v("Example (Top-down)\n"),s("img",{attrs:{src:n(424),alt:"image"}})])]),e._v(" "),s("div",{staticClass:"language-<python> extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("def check(n):\n  if n = 0 : return True\n  else : return check(n-3)\n")])])]),s("h2",{attrs:{id:"bottom-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bottom-up"}},[e._v("#")]),e._v(" Bottom-up")]),e._v(" "),s("ul",[s("li",[e._v("Dynamic programming\n"),s("img",{attrs:{src:n(425),alt:"image"}}),e._v("\nBottom-up : 직관적으로 구할 수 있는 작은 해를 구한 후 이를 이용하여 더 큰 문제를 해결하는 방식")]),e._v(" "),s("li",[e._v("Example"),s("br"),e._v("\n정수 n이 주어졌을 때 1,2,3의 합으로 방법의 수를 구한다고 가정하면")])]),e._v(" "),s("div",{staticClass:"language-<python> extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("n=1 -> 1가지\nn=2 -> 2가지\nn=3 -> 4가지\nn=4 -> 7가지\nn=5 -> 13가지\n...\n")])])]),s("p",[e._v("여기서 d[n] = d[n-3] + d[n-2] + d[n-1] 라는 점화식을 도출할 수 있다."),s("br")]),s("hr"),e._v("\n반대로 top-down방식이라면"),s("br"),e._v("\n예를 들어 d[7]를 구하기 위해 d[6],d[5],d[4]를 구하고"),s("br"),e._v("\n그 d[6]을 구하기 위해 d[5],d[4],d[3]를 구해야한다."),s("br"),e._v("\n..."),s("br"),e._v("\n중복된 해를 구하는 일이 많아져 낭비 발생."),s("br"),s("p"),e._v(" "),s("h2",{attrs:{id:"rules-of-inference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules-of-inference"}},[e._v("#")]),e._v(" Rules of Inference")]),e._v(" "),s("p",[e._v("An inference rule is of the form :")]),e._v(" "),s("p",[e._v("$$\\frac{A}{B}$$")]),e._v(" "),s("p",[e._v("$${A}$$ : hypothesis(가정)"),s("br"),e._v("\n$${B}$$ : conclusion(결론)"),s("br"),e._v("\n$$\\overline{B}$$ : axiom(명제)"),s("br"),e._v("\n$$\\frac{A \\ B}{C}$$ : A 와 B 모두 참일때 C도 참"),s("br")]),e._v(" "),s("h2",{attrs:{id:"exercises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exercises"}},[e._v("#")]),e._v(" Exercises")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("What set is defined by the following inductive rules?\n"),s("img",{attrs:{src:n(426),alt:"image"}}),e._v("\nS = { 3, 6, 9, 12, ... }")])]),e._v(" "),s("li",[s("p",[e._v("What set is defined by the following inductvie rules?\n"),s("img",{attrs:{src:n(427),alt:"image"}}),e._v("\nS = { (), (()), ()(), (())(()), ... }")])]),e._v(" "),s("li",[s("p",[e._v("Define the following set as rules of inference :\n"),s("img",{attrs:{src:n(428),alt:"image"}})])])]),e._v(" "),s("p",[e._v("$$ \\overline{a} \\quad \\overline{b} \\quad \\frac{a \\ b}{ab} $$")]),e._v(" "),s("ul",[s("li",[e._v("Define the following set as rules of inference :\n"),s("img",{attrs:{src:n(429),alt:"image"}})])]),e._v(" "),s("p",[e._v("$$ \\overline{b} \\quad \\frac{x}{axb} $$")])])}),[],!1,null,null,null);t.default=i.exports}}]);