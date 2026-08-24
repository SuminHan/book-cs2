# Pile of Cubes

<a href="https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture04.ipynb" target="_blank" rel="noopener" style="display:inline-block;padding:7px 16px;margin:2px 0 14px;background:#2e3192;color:#ffffff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.92em;">📓 Jupyter Notebook 열기</a>


몸 안을 째지 않고 들여다보려면 어떻게 해야 할까? 1970년대, 고드프리
하운스필드는 이 질문에 답을 내놨다 — 몸의 여러 각도에서 X선 사진을
찍고, 그 여러 장의 2차원 사진들로부터 몸속의 3차원 구조를 역으로
계산해내는 것. 이것이 CT(컴퓨터 단층촬영)의 원리이고, 하운스필드는
이 업적으로 1979년 노벨 생리의학상을 받았다.[^ct]

이번 주 다루는 "Pile of Cubes" 문제는 이 아이디어를 아주 단순화한
버전이다: 큐브 더미를 위/앞/오른쪽, 딱 세 방향에서 본 그림자(2차원
투영)만 가지고, 원래 3차원 구조를 역으로 알아낸다.

## 왜 유일하지 않은가

CT 스캐너가 수백 장의 각도에서 사진을 찍는 이유가 여기 있다 — 투영이
적을수록 같은 그림자를 만드는 3차원 구조가 여러 개 있을 수 있다.
이번 문제도 마찬가지다: 세 방향의 투영만으로는 원래 큐브 더미를
유일하게 복원할 수 없는 경우가 있다. 그래서 문제는 "정확히 복원하라"
대신 "그 투영을 만들 수 있는 것 중 큐브 개수가 최대인 것을 찾아라"로
바뀐다.

## 오늘 배우는 것과의 연결

세 방향의 그림자만으로 가장 그럴듯한 3차원 구조를 논리적으로 구성해
내는 방식은, 의료 영상부터 이번 주 3중 for 루프 코드까지 똑같이
적용된다.

[^ct]: [The Nobel Prize in Physiology or Medicine
    1979](https://www.nobelprize.org/prizes/medicine/1979/summary/),
    Godfrey N. Hounsfield & Allan M. Cormack.

**세 장의 그림자에서 입체를 복원하는 이번 주 퍼즐은, 그 자체로 노벨상을
받은 아이디어의 축소판이다.**
