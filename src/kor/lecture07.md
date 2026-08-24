# Classes & Objects

<a href="https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture07.ipynb" target="_blank" rel="noopener" style="display:inline-block;padding:7px 16px;margin:2px 0 14px;background:#2e3192;color:#ffffff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.92em;">📓 Jupyter Notebook 열기</a>


1985년부터 1987년 사이, 방사선 치료기 Therac-25가 적어도 6건의 심각한
방사선 과다 노출 사고를 일으켰고, 그중 일부 환자는 목숨을 잃었다.
[^therac] 원인은 하드웨어 결함이 아니라 소프트웨어였다 — 여러 화면
(모드)이 같은 전역 변수들을 공유하며 상태를 주고받았는데, 특정 순서로
빠르게 키를 입력하면 한 화면이 남긴 상태값을 다른 화면이 미처 정리하지
못한 채로 읽어버리는 경우가 있었다.

이전 모델은 이런 소프트웨어 오류가 나더라도 하드웨어 안전장치가
최종적으로 막아줬다. Therac-25는 비용 절감을 위해 그 하드웨어
안전장치를 없애고 "소프트웨어가 알아서 안전을 보장할 것"이라고
가정했다. 문제는 그 소프트웨어의 상태가 여러 곳에 흩어진 전역 변수로
관리되고 있어서, 정확히 누가 언제 그 값을 바꾸는지 아무도 장담할 수
없었다는 데 있었다.

## 상태를 한곳에 가두기

이번 주 배우는 `class`는 정확히 이 문제를 겨냥한다: 관련된 상태 변수
(state 변수)들을 하나의 object 안에 가두고, 그 상태를 건드리는 함수도
그 object에 딸린 메소드로만 제한한다. `self.x`처럼 상태가 어디에
속하는지 항상 명시적이고, 상태를 바꾸는 쪽(modifier)과 읽기만 하는 쪽
(pure function)을 구분해서 부르는 습관도 여기서 나온다.

## 오늘 배우는 것과의 연결

`class` 하나로 이런 사고가 전부 방지되는 것은 아니다. 하지만 "이
데이터는 정확히 누가, 어떤 함수를 통해서만 바꿀 수 있는가"를 코드
구조로 분명히 하는 습관은, Therac-25 사고 이후 소프트웨어 공학
교육에서 빠짐없이 강조하는 원칙이 됐다.

[^therac]: Nancy Leveson & Clark Turner, [*An Investigation of the
    Therac-25 Accidents*](http://sunnyday.mit.edu/papers/therac.pdf),
    IEEE Computer, Vol. 26, No. 7 (1993).

**상태를 아무 데서나 건드릴 수 있게 흩어놓지 않는 것 — 오늘 배우는
`class`의 가장 근본적인 이유다.**
