(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{479:function(e,r,t){"use strict";t.r(r);var s=t(65),n=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"setuid-01"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setuid-01"}},[e._v("#")]),e._v(" SetUID_01")]),e._v(" "),t("h2",{attrs:{id:"access-control-and-permission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-control-and-permission"}},[e._v("#")]),e._v(" Access Control and Permission")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Access Control : user 혹은 group이 resource에 접근할 수 있는 지 유무"),t("br"),e._v(" linux에서는 Access Control list를 만들어 관리")])]),e._v(" "),t("li",[t("p",[e._v("UID : User ID , GID : Group ID")])]),e._v(" "),t("li",[t("p",[e._v("Root의 경우 일반적으로 UID=0")])]),e._v(" "),t("li",[t("p",[e._v("Linux permission(folder)")]),e._v(" "),t("ul",[t("li",[e._v("r (read) : 폴더 내용을 list로 볼 권한")]),e._v(" "),t("li",[e._v("w (write) : 폴더 내부의 파일 혹은 폴더 생성 권한")]),e._v(" "),t("li",[e._v("x (execute) : 폴더에 들어갈 수 있는 권한\n2진수화 되어있기에 rwxrwxrwx를 777로도 표현 가능")])])]),e._v(" "),t("li",[t("p",[e._v("commands\n• id : print real and effective user and group IDs\n• pwd : print name of current/working directory\n• ls : list directory contents\n• ls -l : use a long listing format (directory contents)\n• ls -a : do not ignore entries starting with\n• mkdir : make directories\n• cd : move current/working directory to other directory\n• cat : concatenate files and print on the standard output\n• chown : change file owner and group\n• chmod : change file mode bits\n• sudo : execute a command as another user\n• sudo -u : run the command as a user other than the default target user\n• su : run a command with substitute user and group ID\n• whoami : print effective user id\n• man : an interface to the system reference manuals")])]),e._v(" "),t("li",[t("p",[e._v("files")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("/etc/sudoers : sudo 권한을 사용할 수 있는 user 혹은 group이 기록되어 있음.")])]),e._v(" "),t("li",[t("p",[e._v("/etc/passwd : 시스템에 등록된 사용자 정보가 담겨있음")])]),e._v(" "),t("li",[t("p",[e._v("/etc/shadow : 암호화된 password가 담겨있음.(root권한만 접근 가능)")])])])])]),e._v(" "),t("h2",{attrs:{id:"need-for-privileged-programs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#need-for-privileged-programs"}},[e._v("#")]),e._v(" Need for Privileged Programs")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Password Dilemma\n-rw-r----- 권한으로 불러오게되면 owner에게만 write권한이 있기에 아래와 같은 딜레마에 빠지게된다.")]),e._v(" "),t("ul",[t("li",[e._v("사용자에게 요청을 받았을 때 그 사용자의 절반만 일을 수행하게 된다.")]),e._v(" "),t("li",[e._v("즉, 절반은 남아있는 상태이나 백그라운드 프로세스에서는 사용자의 요청을 또 기다린다.")]),e._v(" "),t("li",[e._v("이가 반복되어 오랜 시간이 지나면 memory가 점점 쌓여 expensive하게 된다.\n-> 이를 방지하기 위해 "),t("B",[e._v("Set-UID")]),e._v("라는 mechanism이 개발됨")],1)])]),e._v(" "),t("li",[t("p",[e._v("Set-UID란")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Set-UID가 적용된 프로그램을 사용할때 일시적으로 owner's의 권한을 얻게해주는 것")])]),e._v(" "),t("li",[t("p",[e._v("ex) ls -l /usr/bin/passwd하면 root권한이 일시적으로 부여된다.")])]),e._v(" "),t("li",[t("p",[e._v("모든 process는 2가지 User ID를 가진다.")]),e._v(" "),t("ul",[t("li",[t("B",[e._v("Real UID (RUID)")]),e._v(" : process의 실 소유주(owner)\n")],1),e._v(" "),t("li",[t("B",[e._v("Effective UID (EUID) ")]),e._v(" : process의 권한을 받은 사람 "),t("br"),e._v(" Access control은 EUID에 기반함.\n")],1),e._v(" "),t("li",[t("p",[e._v("일반적인 프로그램이 실행되는 경우에는 RUID = EUID, 두 ID를 실행할때 동일하게 여김")])]),e._v(" "),t("li",[t("p",[e._v("Set-UID가 실행되는 경우에는 RUID /= EUID, RUID는 user의 ID와 동일하게 EUID는 프로그램 소유주(owner)의 ID와 동일하게 여겨짐")])])])]),e._v(" "),t("li",[t("p",[e._v("Set-UID의 bit는 맨 앞 ex)ㅁㅁㅁ(4:Set-UID)rwx(owner)r-x(group)r-x(other), 100(Set-UID)111101101, 4(Set-UID)755"),t("br"),e._v("\nsudo chmod 4755 mycat( mycat에 Set-UID 권한 부여 )")])])])])])])}),[],!1,null,null,null);r.default=n.exports}}]);