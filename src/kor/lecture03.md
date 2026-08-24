# Multi-Dimensional Lists

<a href="https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture03.ipynb" target="_blank" rel="noopener" style="display:inline-block;padding:7px 16px;margin:2px 0 14px;background:#2e3192;color:#ffffff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.92em;">📓 Jupyter Notebook 열기</a>


2010년, 경제학자 카르멘 라인하트와 케네스 로고프는 "정부 부채가
GDP의 90%를 넘으면 경제성장률이 급격히 떨어진다"는 연구 결과를
발표했다. 이 논문은 2008년 금융위기 이후 유럽과 미국의 긴축 재정
정책을 정당화하는 핵심 근거로 반복 인용됐다.

2013년, 대학원생 토머스 헌든이 이 논문의 계산을 재현하려다 원본
엑셀 파일을 입수했다. 원인은 **범위 선택 실수**였다: 20개국의 평균
성장률을 구하는 수식이 실제로는 그중 5개국(호주, 오스트리아, 벨기에,
캐나다, 덴마크)이 들어있는 행을 계산 범위에서 빠뜨리고 있었다. 표
(2차원 데이터)에서 몇 개 행을 빼먹은 것 — 그것이 원인의 전부였다.

## `table[i]`가 가리키는 것

2차원 리스트 `table`에서 `table[i]`는 정확히 "몇 번째 행"인지가
전부다. `for i in range(height)`로 도는 루프가 실제로 표의 모든
행을 포함하는지는 코드를 쓰는 사람이 직접 확인해야 한다 — 엑셀
수식이든 Python의 `for` 루프든, "몇 번째 줄부터 몇 번째 줄까지"를
정확히 지정하지 않으면 그만큼의 데이터가 조용히 빠진다.

## 오늘 배우는 것과의 연결

빠진 5개국을 포함시키자 논문의 결론은 뒤집혔고, "90% 부채 한도"라는
정책적 근거는 크게 흔들렸다.[^rr]

[^rr]: Herndon, Ash, Pollin, [*Does High Public Debt Consistently Stifle
    Economic Growth? A Critique of Reinhart and
    Rogoff*](https://academic.oup.com/cje/article-abstract/38/2/257/1714018),
    Cambridge Journal of Economics (2014).

**2차원 리스트를 순회할 때 "내가 정말 모든 행/열을 다 돌고 있는가"를
확인하는 습관 — 오늘 배우는 것 중 가장 사소해 보이지만, 세계 경제
정책을 흔들어놓은 실수도 바로 여기서 났다.**
