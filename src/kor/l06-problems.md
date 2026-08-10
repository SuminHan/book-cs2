# Problem Set


### 필수 문제

**1. `gaussian_elimination(a, b)`** — $n \times n$ 행렬 `a`와 길이 $n$ 리스트 `b`가
주어질 때, $a \cdot x = b$의 유일한 해 `x`(길이 $n$의 float 리스트)를 반환. 해가
없거나 무한히 많으면 `None`.

```python
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

**2. `inverse(a)`** — $n \times n$ 정수 행렬 `a`의 역행렬(float 행렬 `b`, $a \cdot b
= I$)을 반환. 존재하지 않으면 `None`.
> `b`의 각 열을 `gaussian_elimination`으로 하나씩 구하는 과정을 $n$번 반복.
> `gaussian_elimination(a, b)`는 입력 리스트 `a` 자체를 변경하는 modifier이므로,
> 여러 번 호출할 땐 매번 `a`를 복사(`copy2DList(a)`)해서 넘겨야 한다.

**3. `poly(L)`** — 길이 $n$인 정수 리스트 `L`이 어떤 $n-1$차 다항함수 $f$에 대해
$L = [f(0), f(1), \ldots, f(n-1)]$을 나타낼 때, $f(n)$을 반환. 그런 $f$가 존재하지
않거나 여러 개면 `None`.
> `gaussian_elimination`을 이용해 다항식의 계수를 구할 수 있다.

**4. `classify(a, b)`** — 1번 문제와 같은 입력에 대해, 해가 유일하면 `0`, 해가
없으면 `1`, 해가 무한히 많으면 `2`를 반환 (`0`을 반환할 때 실제 해 `x` 대신
정수 `0`을 리턴하는 것에 주의).
> Forward elimination 중 pivot 값이 0이 되면 row는 그대로 두고 column만
> 넘어가서 다음 pivot을 찾도록 살짝 수정하면 된다. 예를 들어 아래처럼 마지막
> 두 행이 전부 0인 상삼각형태가 나왔을 때, 대응하는 $b_4, b_5$가 둘 다 0이면
> 해가 무한히 많고, 하나라도 0이 아니면 해가 없다.
> ```
> [1 1 1 1 1]   [x1]   [b1]
> [0 1 1 1 1]   [x2]   [b2]
> [0 0 0 0 1] · [x3] = [b3]
> [0 0 0 0 0]   [x4]   [b4]
> [0 0 0 0 0]   [x5]   [b5]
> ```

---
*원본: `CS2(2026-2)_all/CS2/CS2/problem_set/P06.pdf`. 표현/코드는 정리하며 일부
재구성함.*
