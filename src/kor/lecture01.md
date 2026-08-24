# Lists / Strings

<a href="https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture01.ipynb" target="_blank" rel="noopener" style="display:inline-block;padding:7px 16px;margin:2px 0 14px;background:#2e3192;color:#ffffff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.92em;">📓 Jupyter Notebook 열기</a>


"서버가 요청받은 길이만큼, 확인도 없이 메모리를 그대로 잘라 돌려준다면?"

2014년 4월, 암호화 라이브러리 OpenSSL에서 하트블리드(Heartbleed)라는
취약점이 발견됐다. 원인은 단순했다: 서버는 클라이언트가 "이만큼의
데이터를 돌려달라"고 요청하면, 실제로 받은 데이터의 길이는 확인하지
않고 요청한 길이만큼 그대로 메모리에서 잘라 돌려줬다. 클라이언트가
"나는 1바이트를 보냈지만, 6만 4천 바이트를 돌려달라"고 요청하면, 서버는
그 1바이트 뒤에 있는 — 전혀 상관없는 — 메모리 6만 4천 바이트를 그대로
잘라서 돌려줬다. 거기엔 다른 사용자의 비밀번호나 서버의 개인키가 들어
있을 수도 있었다.

## `L[i:j]`가 실제로 하는 일

이번 주 배우는 slicing 연산자 `L[i:j]`는 "리스트의 실제 길이"와
무관하게 인덱스 `i`부터 `j-1`까지를 잘라낸다. `L`이 정말 그 길이를
갖고 있는지는 프로그래머가 확인해야 하는 몫이다. Python은 리스트
경계를 넘어가면 에러를 내주지만, 하트블리드가 발생한 C 언어의 메모리
조작에는 그런 보호장치가 없었다. "요청한 길이"와 "실제 있는 길이"를
혼동하면, 있어서는 안 될 데이터까지 함께 잘려 나온다.

## 오늘 배우는 것과의 연결

전 세계 웹 서버의 상당수가 이 취약점에 노출되어 있었고, 복구에는
수개월이 걸렸다.[^heartbleed] `len(·)`으로 실제 길이를 확인하고 그
범위 안에서만 인덱싱/슬라이싱하는 습관은 사소해 보이지만, 이 사고가
벌어진 근본 원인과 정확히 같은 지점을 다룬다.

[^heartbleed]: Codenomicon, [*Heartbleed Bug*](https://heartbleed.com/)
    (2014); [CVE-2014-0160](https://nvd.nist.gov/vuln/detail/CVE-2014-0160).

**어떤 인덱스가 유효한지 항상 정확히 알고 있을 것 — 이번 주 배우는
List/String 연산은 모두 그 위에 세워진다.**
