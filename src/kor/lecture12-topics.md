# Topics Covered

## NumPy

- `import numpy as np`, `np.array`: 연산은 원소별로 적용
- `np.linspace(시작, 끝, 개수)`: 일정 간격의 값들 (끝 포함)
- 식을 그대로 쓰면 array 전체에 대해 계산: `0.5 * x + 1`, `x ** 2 / 10`

## Matplotlib

- `plt.plot(x, y, label=...)`, `plt.xlim`, `plt.ylim`, `plt.grid`, `plt.legend`, `plt.show`
- `plt.Circle((cx, cy), r)` + `ax.add_patch`: 원 그리기, `ax.set_aspect("equal")`

## Mask와 충돌 판정

- `y > 3`: 원소마다 True/False인 array (mask)
- `x[mask]`, `np.any(mask)`, `np.argmax(mask)` (처음 True의 위치)
- 원 안 판정: `np.sqrt((x - cx) ** 2 + (y - cy) ** 2) < r`
- `stop | mask`: 원소마다 or

## 딥러닝 함수 (activation functions)

| 이름 | NumPy |
|---|---|
| ReLU | `np.maximum(0, x)` |
| Leaky ReLU | `np.where(x > 0, x, 0.1 * x)` |
| sigmoid | `1 / (1 + np.exp(-x))` |
| tanh | `np.tanh(x)` |
