# Graph Shooter (NumPy, Matplotlib)

<a href="https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture12.ipynb" target="_blank" rel="noopener" style="display:inline-block;padding:7px 16px;margin:2px 0 14px;background:#F37626;color:#ffffff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.92em;">📓 Jupyter Notebook 열기</a>



화면 왼쪽에 발사대, 가운데에 장애물, 오른쪽에 과녁이 있다. 총알은
직선으로 날아가지 않고, 우리가 고른 **함수의 그래프**를 따라 날아간다.
`y = x / 3`을 쏘면 비스듬한 직선, `y = -(x + 10) * (x - 8) / 20`을
쏘면 장애물을 넘어가는 포물선이 된다. 어떤 함수를 골라야 장애물을 피해
과녁에 맞을까?

## 이번 주 도구: NumPy와 Matplotlib

그래프 하나는 점 수천 개다. **NumPy**는 그 점들의 값을 `for`문 없이 한
번에 계산하고, **Matplotlib**은 그 점들을 그림으로 그려 준다. 총알이
장애물에 닿았는지도 점 수천 개를 한 번에 검사하는 **mask** 한 줄로
판정한다.

## 딥러닝 함수들

ChatGPT 같은 딥러닝 모델 안의 뉴런은 ReLU, sigmoid, tanh 같은 함수로
출력을 만든다. 이번 주에는 이 함수들을 직접 만들고, 게임의 "총알"로도
써 본다. ReLU는 어느 지점부터 꺾여 올라가고, sigmoid는 계단처럼
부드럽게 올라간다.

## 레벨과 랜덤 맵

정해진 레벨 다섯 개를 한 판씩 깬 뒤, 숫자(seed) 하나로 만들어지는 랜덤 맵에
도전한다. 총알이 날아가는 계산은 여러분이 직접 만든 엔진이 한다.

**함수 하나를 고르고, 쏘고, 결과를 보고, 다시 고친다 — 이 반복이
이번 주의 전부다.**
