# Loops

<a href="https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture02.ipynb" target="_blank" rel="noopener" style="display:inline-block;padding:7px 16px;margin:2px 0 14px;background:#2e3192;color:#ffffff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.92em;">📓 Jupyter Notebook 열기</a>


2016년, 국제탐사보도언론인협회(ICIJ)는 파나마의 로펌 모색 폰세카에서
유출된 문서 1,150만 건, 총 2.6테라바이트를 넘겨받았다. 사람이 한 장씩
읽는다면 평생이 걸릴 분량이었다.

기자 수백 명이 협업한 끝에 한 일은, 결국 문서 하나하나를 훑으며 같은
질문을 반복해서 던지는 것이었다 — 특정 이름이 등장하는 문서가 있는가
(for some), 조건을 만족하는 문서가 몇 건인가(counter). 이번 주에
배우는 패턴 그대로다.

## `for` 루프가 실제로 하는 일

```python
words = open("input.txt", "r").read().split()

count = 0
for w in words:
    if w == "Gunnlaugsson":
        count += 1
```

`for w in words:`가 하는 일은 정확히 이거다 — `words`의 원소를 앞에서
부터 순서대로 하나씩 `w`에 꺼내 담고, 그때마다 몸통(`if w ==
"Gunnlaugsson": count += 1`)을 한 번씩 실행한다. `words`의 길이가
5든 1,150만이든 코드는 단 한 글자도 바뀌지 않는다 — 몸통이 실행되는
*횟수*만 다를 뿐이다. 사람이 눈으로 1,150만 건을 읽을 수는 없어도,
컴퓨터는 이 루프 하나로 초당 수만 건을 검사할 수 있다.

(참고: `.split()`은 공백 기준으로 쪼개므로 `words`의 원소는 `"Mossack"`,
`"Fonseca"`처럼 한 단어씩이다 — 그래서 두 단어로 된 이름을 통째로
비교하려 하면(`w == "Mossack Fonseca"`) `words` 안에 그 형태 그대로인
원소가 없어서 절대 True가 되지 않는다. 위 코드가 성(姓) 하나만,
`"Gunnlaugsson"`으로 비교하는 이유다.)

## 오늘 배우는 것과의 연결

`"Gunnlaugsson"`은 실제로 유출 문서에 등장했던 이름이다 — 아이슬란드
총리 시그뮌뒤르 귄로이그손의 아내 명의로 등록된 역외회사 Wintris가
문서에서 발견됐고, 은행 채권자와의 협상 당사자였던 총리가 그 회사를
신고하지 않은 사실이 드러나면서 대규모 시위 끝에 그는 2016년 4월
사임했다.[^panama] 시작은 별다를 것 없는 "파일 열기 → 한 줄씩 훑기 →
이름 확인하기"였는데, 그 결과가 총리 사임이었다.

[^panama]: ICIJ, [*Iceland Prime Minister Tenders Resignation Following
    Panama Papers Revelations*](https://www.icij.org/investigations/panama-papers/20160405-iceland-pm-resignation/)
    (2016).

**오늘 배우는 for all / counter / max-min 패턴은 데이터가 5줄이든
1,150만 건이든 똑같이 적용된다 — 다른 건 오직 컴퓨터가 대신 훑어준다는
사실뿐이다.**
