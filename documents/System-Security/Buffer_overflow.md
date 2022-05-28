# Buffer_overflow

## Program Memory Stack

- Text segment : executable code this program

- Data segment : 초기화한(initialize) static(정적) and global variables 저장 ex) int x = 100;<br>
    수식이나 함수에 의해 초기화된 변수의 경우 BSS에 들어감

- BSS segment : 초기화되지않은(unintialize) static variables and global variables를 저장,<br>
    모든 값은 0으로 초기화 됨 ex) main(){ static int y; }

- Heap : dynamic allocation(동적 할당)을 사용 ex) malloc

- Stack : 함수에 저장된 local variables을 사용

## Order of the function arguments in stack

- Buffer overflow : heap, stack 둘 다에서 발생할 수 있음

