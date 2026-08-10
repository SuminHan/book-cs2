# Problem Set

### 필수 문제

**1. `gaussian_elimination(a, b)`** — \\(n \times n\\) 행렬 `a`와 길이 \\(n\\) 리스트 `b`가
주어질 때, \\(a \cdot x = b\\)의 유일한 해 `x`(길이 \\(n\\)의 float 리스트)를 반환. 해가
없거나 무한히 많으면 `None`.

```python
def gaussian_elimination(a, b):
    # ADD ADDITIONAL CODE HERE!

a = [[0, 1, 1], [2, 4, -2], [0, 3, 15]]
b = [4, 2, 36]
print(gaussian_elimination(a, b))  # [-1.0, 2.0, 2.0]

a = [[1, 0, 1, 4], [2, -1, 1, 7], [-2, 1, 0, -6], [1, 1, 1, 9]]
b = [1, 2, 3, 4]
print(gaussian_elimination(a, b))  # [-8.8, -5.0, 3.4, 1.6]

a = [[0, 1, 1], [2, 4, -2], [2, 5, -1]]
b = [4, 2, 36]
print(gaussian_elimination(a, b))  # None
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만 도움이 되므로 시간이 남으면
시도해볼 것을 권장 (대부분 기출문제).*

**2. `inverse(a)`** — \\(n \times n\\) 정수 행렬 `a`의 역행렬(float 행렬 `b`,
\\(a \cdot b = I\\))을 반환. 존재하지 않으면 `None`.

```python
def inverse(a):
    # ADD ADDITIONAL CODE HERE!
```

**3. `poly(L)`** — 길이 \\(n\\)인 정수 리스트 `L`이 어떤 \\(n-1\\)차 다항함수 \\(f\\)에 대해
\\(L = [f(0), f(1), \ldots, f(n-1)]\\)을 나타낼 때, \\(f(n)\\)을 반환. 그런 \\(f\\)가 존재하지
않거나 여러 개면 `None`.

```python
def poly(L):
    # ADD ADDITIONAL CODE HERE!
```

**4. `classify(a, b)`** — 1번 문제와 같은 입력에 대해, 해가 유일하면 `0`, 해가
없으면 `1`, 해가 무한히 많으면 `2`를 반환.

```python
def classify(a, b):
    # ADD ADDITIONAL CODE HERE!
```
