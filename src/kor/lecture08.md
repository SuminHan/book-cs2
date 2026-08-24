# Stable Matching I

<a href="https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture08.ipynb" target="_blank" rel="noopener" style="display:inline-block;padding:7px 16px;margin:2px 0 14px;background:#F37626;color:#ffffff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.92em;">📓 Jupyter Notebook 열기</a>



1900년대 초, 미국의 병원들은 의대생을 레지던트로 뽑을 때 서로
경쟁하듯 점점 더 이른 시점에 채용을 제안했다. 1940년대 말에는 학생이
아직 학교를 2년이나 더 다녀야 하는 시점에 이미 제안을 받는 일까지
벌어졌다 — 학생도 병원도 상대를 제대로 알지 못한 채 성급하게 결정을
내려야 했고, 나중에 더 나은 제안이 오면 이미 한 약속을 깨는 일도
잦았다.

이 혼란을 해결하기 위해 1952년, 미국의 병원과 의대생을 짝짓는 중앙
매칭 시스템(NRMP)이 도입됐다. 흥미로운 건 이 시스템이 쓰던 알고리즘이,
10년 뒤인 1962년 수학자 데이비드 게일과 로이드 섀플리가 발표한 이론
— 오늘 배우는 stable matching — 과 사실상 동일한 방식이었다는 점이다.
현장에서 먼저 문제를 실용적으로 풀어냈고, 이론이 나중에 그것을
수학적으로 설명해낸 셈이다.

## Stable Matching이 막는 것

배정된 짝이 있는데도, 서로가 서로를 지금 짝보다 더 선호하는 다른
쌍(unstable pair)이 남아있다면 그 매칭은 오래가지 못한다 — 둘 다
기존 매칭을 깨고 새로 짝지어질 동기가 있기 때문이다. NRMP가 막으려던
것이 정확히 이것이었다: 매칭이 발표된 뒤에 "사실 이쪽이 서로 더
낫다"며 뒤집히는 상황.

## 오늘 배우는 것과의 연결

이 개념은 학문적으로도 인정받아, 게일-섀플리 이론을 발전시킨 로이드
섀플리와 앨빈 로스가 2012년 노벨 경제학상을 받았다.[^nobel] 오늘은
이 개념을 정확히 정의하고, 주어진 매칭이 stable한지 판정하는 코드를
만든다 — 실제로 매칭을 찾아내는 알고리즘은 다음 주에 다룬다.

[^nobel]: [The Sveriges Riksbank Prize in Economic Sciences in Memory of
    Alfred Nobel 2012](https://www.nobelprize.org/prizes/economic-sciences/2012/summary/),
    Lloyd Shapley & Alvin Roth.

**70년 전 병원과 의대생 사이의 혼란이, 오늘 배우는 정의 하나로 정확히
설명된다.**
