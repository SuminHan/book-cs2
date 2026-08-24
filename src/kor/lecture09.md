# Stable Matching II

<a href="https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture09.ipynb" target="_blank" rel="noopener" style="display:inline-block;padding:7px 16px;margin:2px 0 14px;background:#2e3192;color:#ffffff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.92em;">📓 Jupyter Notebook 열기</a>


2003년 이전, 뉴욕시 고등학교 배정 시스템은 매년 수만 명의 학생을
제대로 배정하지 못한 채 남겼다. 학생들은 여러 학교에 원서를 내고,
학교는 합격자를 발표하고, 학생은 그중 하나를 고르고 — 이 과정을 여러
차례 반복하는 동안 정보가 뒤엉켰고, 정작 빈자리와 갈 곳 없는 학생이
동시에 존재하는 비효율이 반복됐다.

2003년, 경제학자 아트만 압둘카디로글루, 파라그 파탁, 앨빈 로스가
게일-섀플리 알고리즘을 이 시스템에 도입했다.[^nyc] 결과는 확실했다 —
배정받지 못한 학생 수가 크게 줄었고, 이 방식은 이후 보스턴 등 다른
도시의 학교 배정 시스템에도 그대로 채택됐다.

## 오늘 배우는 알고리즘이 실제로 하는 일

핵심 아이디어는 단순하다: 자유로운 쪽(예: 남자, 또는 학생)이 자기
선호 순서대로 계속 지원하고, 받는 쪽(예: 여자, 또는 학교)은 지금까지
받은 것 중 최선을 잠정적으로 붙잡아두되, 더 나은 지원이 오면 그쪽으로
바꾼다. 이 과정이 끝나면 항상 — 예외 없이 — stable matching이
만들어진다는 것이 게일과 섀플리가 증명한 정리다.

## 오늘 배우는 것과의 연결

이번 주는 지난주에 정의한 stable matching을 실제로 **찾아내는**
propose-reject 알고리즘을 코드로 구현한다. 뉴욕시가 실제로 도입한
것과 원리적으로 동일한 절차다.

[^nyc]: Abdulkadiroğlu, Pathak, Roth, [*The New York City High School
    Match*](https://www.aeaweb.org/articles?id=10.1257/000282805774670167),
    American Economic Review, Vol. 95, No. 2 (2005).

**뉴욕시 수만 명의 학생을 구했던 알고리즘을, 오늘 직접 코드로
구현한다.**
