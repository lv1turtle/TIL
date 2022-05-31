# Return-to-libc Attacks

## Non-executable stack countermeasure

- setup : non executable stack countermeasure is switched on,
    StackGuard protection is switched off and address randomization is turned off

- Task A : Find address of system()
    -> return address를 system()'s address로 바꾸기 위함

- Task B : Find address of the '/bin/sh' string
    -> system()으로 /bin/sh를 실행시키기 위함

- Task C : Construct arguments for system()
    -> stack에 /bin/sh 주소를 놓을 곳을 찾기 위함
