# Environment Variables(1.5)

## Attacks via Dynamic Linker

- Linking은 프로그램이 참조하는 외부 라이브러리 코드를 찾는 기능을 한다.

- Linking은 runtime이나 compile time에 작동한다.
    - Dynamic Linking : 환경 변수를 사용, attack surface의 일부분이 됨
    - Static Linking

ex)
~~~<python>
    #include <stdio.h>
    int main(){
        printf("hello world");
        return 0;
    }
~~~

- Static Linking :
    - Linker는 프로그램의 코드와 printf()함수가 속한 library의 코드를 결합한다.
    - 이를 컴파일 해보면 static으로 컴파일된 program이 dynamic program보다 100배 더 크다는 것을 확인할 수 있다.
    - ex) gcc -static -o hello_static hello.c

- Dynamic Linking :
    - Linking이 runtime동안에 끝난다.
    - dynamic linking으로 프로그램을 컴파일하기전에 메모리에 먼저 load합니다.

    - <B>ldd</B> 명령어를 사용하면 program에 연결된 공유 라이브러리를 볼 수 있다.(dynamic executable만 가능)
        - ex) ldd hello_dynamic<br> linux-gate.so.1 => (0xb774b000)
        <br> libc.so.6 => /lib/i386-linux-gnu/libc.so.6 (0xb768e000)
        <br> /lib/ld-linux.so.2 (0xb774c000)
        <br> 여기서 0xb774b000는 systeam calls이다.
        <br> libc.so.6은 printf()함수가 들어있는 libc library이다.
        <br> ld-linux.so.2는 dynamic linker가 들어있는 shared libarary이다. 이것은 메인함수에서 불러오기도 전에 먼저 불러온다.

## the Risk
    - Dynamic linker는 메모리를 아낄 수 있다.
    - 이것은 프로그램의 코드의 일부분은 컴파일 시간 내에 결정되지 않는 것을 의미한다.(undecided code -> missing code)
    - 만약 사용자가 이 missing code에 영향을 줄 수 있다면 프로그램의 integrity(무결성)을 compromise(손상)시킬 수 있습니다.

- Case Study1
    - <B>LD_PRELOAD</B>는 linker에 의해 첫번째로 검색된 shared library의 list를 포함한다.
    - 만약 모든 함수가 발견되지 않았다면, linker는 <B>LD_LIBRARY_PATH</B>에 지정된 폴더 list를 포함하여 여러 폴더 list를 검색한다.
    - 위의 두 변수를 사용자가 설정할 수 있기에 이것으로 사용자는 linking process의 결과를 조작할 수 있는 기회를 얻는다.
    - 만약 프로그램이 Set-UID 프로그램이라면 security breaches로 이어질 수 있다.

    - 예를 들어, sleep함수의 정의를 바꾼 프로그램을 libmylib.so.1.0.1로 이름짓고 LD_PRELOAD에 경로를 넣으면<br>
    바뀐 sleep함수가 실행이 된다.

    - 만약 이 실행 프로그램이 Set-UID프로그램이라면 security breaches로 이어질 수 있지만<br>
    dynamic linker에 의해 실행되는 countermeasure(보호 정책)이 있기에 LD_PRELOAD의 환경 변수들이<br>
    EUID와 RUID가 다르다면 실행을 무시해버린다. 그렇기에 security breaches로 이어지지는 않는다.

## 정리

- env : shell에 child process를 생성
    - 그 child process는 parent가 초기에 copy한 환경 변수들을 상속 / parent가 export한 user-defined variables를 상속

- dynamic linker의 컴파일 방법 : 우리가 평소하던 gcc -o test test.c
- static linker의 컴파일 방법 : -static을 추가, gcc -static test -o test.c

- linking은 프로그램이 참조한 외부 라이브러리 코드를 찾는 기능을 함

- linking은 일반적으로 runtime, compile time안에 동작하지만 dynamic은 runtime동안에 끝남
    - 대신 dynamic의 경우 missing code가 발생

- dynamic은 static에 비해 크기가 작고 메모리를 아낄 수 있으나, 프로그램의 무결성을 손상시킬 수 있다.
    - 단, dynaimc linker에는 countermeasure가 존재하여 보완