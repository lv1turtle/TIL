# SetUID_01

## Access Control and Permission

- Access Control : user 혹은 group이 resource에 접근할 수 있는 지 유무<br> linux에서는 Access Control list를 만들어 관리

- UID : User ID , GID : Group ID

- Root의 경우 일반적으로 UID=0

- Linux permission(folder)
    - r (read) : 폴더 내용을 list로 볼 권한
    - w (write) : 폴더 내부의 파일 혹은 폴더 생성 권한
    - x (execute) : 폴더에 들어갈 수 있는 권한
    2진수화 되어있기에 rwxrwxrwx를 777로도 표현 가능

- commands
    • id : print real and effective user and group IDs
    • pwd : print name of current/working directory
    • ls : list directory contents
    • ls -l : use a long listing format (directory contents)
    • ls -a : do not ignore entries starting with
    • mkdir : make directories
    • cd : move current/working directory to other directory
    • cat : concatenate files and print on the standard output
    • chown : change file owner and group
    • chmod : change file mode bits
    • sudo : execute a command as another user
    • sudo -u : run the command as a user other than the default target user
    • su : run a command with substitute user and group ID
    • whoami : print effective user id
    • man : an interface to the system reference manuals

- files
    - /etc/sudoers : sudo 권한을 사용할 수 있는 user 혹은 group이 기록되어 있음.

    - /etc/passwd : 시스템에 등록된 사용자 정보가 담겨있음

    - /etc/shadow : 암호화된 password가 담겨있음.(root권한만 접근 가능)

## Need for Privileged Programs

- Password Dilemma
    -rw-r----- 권한으로 불러오게되면 owner에게만 write권한이 있기에 아래와 같은 딜레마에 빠지게된다.
    - 사용자에게 요청을 받았을 때 그 사용자의 절반만 일을 수행하게 된다.
    - 즉, 절반은 남아있는 상태이나 백그라운드 프로세스에서는 사용자의 요청을 또 기다린다.
    - 이가 반복되어 오랜 시간이 지나면 memory가 점점 쌓여 expensive하게 된다.
    -> 이를 방지하기 위해 <B>Set-UID</B>라는 mechanism이 개발됨 

- Set-UID란
    - Set-UID가 적용된 프로그램을 사용할때 일시적으로 owner's의 권한을 얻게해주는 것
    - ex) ls -l /usr/bin/passwd하면 root권한이 일시적으로 부여된다.

    - 모든 process는 2가지 User ID를 가진다.
        - <B>Real UID (RUID)</B> : process의 실 소유주(owner)
        - <B>Effective UID (EUID) </B> : process의 권한을 받은 사람 <br> Access control은 EUID에 기반함.

        - 일반적인 프로그램이 실행되는 경우에는 RUID = EUID, 두 ID를 실행할때 동일하게 여김
        - Set-UID가 실행되는 경우에는 RUID /= EUID, RUID는 user의 ID와 동일하게 EUID는 프로그램 소유주(owner)의 ID와 동일하게 여겨짐

    - Set-UID의 bit는 맨 앞 ex)ㅁㅁㅁ(4:Set-UID)rwx(owner)r-x(group)r-x(other), 100(Set-UID)111101101, 4(Set-UID)755<br>
    sudo chmod 4755 mycat( mycat에 Set-UID 권한 부여 )