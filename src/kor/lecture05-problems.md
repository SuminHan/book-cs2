# Problem Set


[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture05.ipynb)

### 필수 문제

**1.** Write a function `gaussian_elimination`:
- input parameter: `a`와 `b`
  - `a`: two-dimensional list of integers that represents an `n`-by-`n`
    matrix
  - `b`: list of `n` integers
- return value: a length-`n` list `x` of float numbers where `x`
  represents the unique solution to the linear system of equations
  \\(a \cdot x = b\\)
  - return `None` if the system has no solution or infinitely many
    solutions

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

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**2.** (수학 수업시간에 다루었을 **matrix product**의 정의를 상기: \\(m
\times p\\) 행렬 `A`와 \\(p \times n\\) 행렬 `B`의 곱 \\(A \cdot B\\)는
\\(c_{ij} = \sum_{k=1}^{p} a_{ik}b_{kj}\\)로 정의되는 \\(m \times n\\)
행렬이다.)

다음과 같이 정의된 함수 `inverse`를 완성하라:
- 입력: `n`-by-`n` 행렬을 나타내는 2차원 정수 리스트 `a`
- 리턴값: 다음 방정식을 만족하는 2차원 `n×n` float 리스트 `b`(즉, `a`의
  역행렬): \\(a \cdot b = I\\) (단위행렬)
  - (이와 같은 행렬 `b`가 존재하지 않으면 `None`을 리턴)

Hint:
- `b`의 각 열을 `gaussian_elimination`을 이용해 찾는 과정을 `n`번
  반복하면 된다.
- `gaussian_elimination(a,b)`이 modifier(입력 리스트 자체를 변경하는
  함수, 6주차에 자세히 다룸)임에 유의해야 한다(이 함수의 코드를 잘
  살펴보면 2차원 리스트 `a`의 값을 변경한다). 따라서, `gaussian_
  elimination(a,b)`를 여러번 호출할 경우 템플릿 파일에 제공된
  `copy2DList(a)` 함수를 이용하여 2차원 리스트 `a`를 통째로 복사하여
  새로운 2차원 리스트를 만들고 이를 `gaussian_elimination`으로 넘기는
  방식으로 구현해야 한다.

```python
def inverse(a):
    # ADD ADDITIONAL CODE HERE!
```

**3.** 이 문제에서는 `n-1`차 다항함수 \\(f: \mathbb{Z} \to \mathbb{Z}\\)의
함수값 \\(f(0), f(1), \ldots, f(n-1)\\)들이 주어졌을 때, `f(n)`을 계산하는
것을 목표로 한다.

다음과 같이 정의된 함수 `poly`를 완성하라:
- 입력: 정수 리스트 `L`
  - `n = len(L)`로 둘 때, 어떤 `n-1`차 다항함수 `f`가 존재하여, 각
    `L[i]`는 `f(i)`를 나타냄. 즉, `L = [f(0), f(1), ..., f(n-1)]`
- 리턴값: `f(n)`
  - 입력 조건을 만족하는 `n-1`차 다항함수 `f`가 존재하지 않거나 여러개
    존재할 경우에는 `None`을 리턴

*`gaussian_elimination`을 이용하여 `f`를 찾을 수 있다.*

```python
def poly(L):
    # ADD ADDITIONAL CODE HERE!
```

**4.** 1번 문제에서 다음 두 경우를 구별하지 않았는데(모두 `None`을
리턴하도록 하였음), 이 문제에서는 이 두 경우도 구별하는 것을 목표로
한다:
- 방정식이 해를 가지지 않는 경우(inconsistent)와
- 무한히 많은 해를 가지는 경우(consistent dependent)

다음과 같이 정의된 함수 `classify`를 완성하라:
- 입력: 1번 문제와 동일한 형태
- 리턴값: `0`(해가 유일한 경우 — `0` 대신 방정식의 해를 리턴하지 않도록
  주의), `1`(해가 존재하지 않는 경우), `2`(해가 무한히 많은 경우)

힌트:
- Forward elimination을 약간만 수정하면 된다(pivot 값이 0이 되는 경우
  row는 증가시키지 않고 column만 증가시켜 다음 pivot을 찾음).
- 아래 형태의 연립 방정식에서 `b4 = b5 = 0`이면 무한히 많은 해를
  가지고, `b4, b5` 중 하나 이상이 non-zero면 해가 존재하지 않음을 수학
  수업시간에 배웠을 것이다:
  ```
  [1 1 1 1 1]   [x1]   [b1]
  [0 1 1 1 1]   [x2]   [b2]
  [0 0 0 0 1] · [x3] = [b3]
  [0 0 0 0 0]   [x4]   [b4]
  [0 0 0 0 0]   [x5]   [b5]
  ```

```python
def classify(a, b):
    # ADD ADDITIONAL CODE HERE!
```
