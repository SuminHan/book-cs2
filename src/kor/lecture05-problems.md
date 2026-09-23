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

  \\[
  \begin{pmatrix}
  a[0][0] & a[0][1] & \cdots & a[0][n-1] \\\\
  a[1][0] & a[1][1] & \cdots & a[1][n-1] \\\\
  \vdots & \vdots & \ddots & \vdots \\\\
  a[n-1][0] & a[n-1][1] & \cdots & a[n-1][n-1]
  \end{pmatrix}
  \cdot
  \begin{pmatrix}
  x[0] \\\\ x[1] \\\\ \vdots \\\\ x[n-1]
  \end{pmatrix}
  =
  \begin{pmatrix}
  b[0] \\\\ b[1] \\\\ \vdots \\\\ b[n-1]
  \end{pmatrix}
  \\]

  - return `None` if the system has no solution or infinitely many
    solutions

```python
def gaussian_elimination(a, b):
    assert len(a) == len(a[0]) == len(b)
    n = len(b)
    # ADD ADDITIONAL CODE HERE!


##################################################################
# 부동소수점 계산은 오차가 생길 수 있어, 결과를 정답과 비교하기 전에
# 소수점 l자리로 반올림해서 보여준다
def truncate(x, l):
    for i in range(len(x)):
        if x[i] >= 0:
            sign = 1
        else:
            sign = -1
            x[i] = -x[i]
        x[i] = (int(x[i] * (10**l) + 0.5) / float(10**l)) * sign
    return x

a = [[1, 0, 1, 4], [2, -1, 1, 7], [-2, 1, 0, -6], [1, 1, 1, 9]]
b = [1, 2, 3, 4]
x = gaussian_elimination(a, b)
print(truncate(x, 1))  # [-8.8, -5.0, 3.4, 1.6]
print(a)  # gaussian_elimination은 modifier! a가 그대로인지 확인해보자

a = [[0, 1, 1], [2, 4, -2], [0, 3, 15]]
b = [4, 2, 36]
x = gaussian_elimination(a, b)
print(truncate(x, 1))  # [-1.0, 2.0, 2.0]

a = [[0, 1, 1], [2, 4, -2], [2, 5, -1]]
b = [4, 2, 36]
print(gaussian_elimination(a, b))  # None
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**2.** (수학 수업시간에 다루었을 **matrix product**의 정의를 상기.) \\(A\\)와
\\(B\\)를 각각 \\(m \times p\\) 행렬, \\(p \times n\\) 행렬이라 하자:

\\[
A =
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1p} \\\\
a_{21} & a_{22} & \cdots & a_{2p} \\\\
\vdots & \vdots & \ddots & \vdots \\\\
a_{m1} & a_{m2} & \cdots & a_{mp}
\end{pmatrix}
,\quad
B =
\begin{pmatrix}
b_{11} & b_{12} & \cdots & b_{1n} \\\\
b_{21} & b_{22} & \cdots & b_{2n} \\\\
\vdots & \vdots & \ddots & \vdots \\\\
b_{p1} & b_{p2} & \cdots & b_{pn}
\end{pmatrix}
.
\\]

`A`와 `B`의 곱 \\(A \cdot B\\)는 다음과 같이 정의되는 \\(m \times n\\)
행렬이다:

\\[
\begin{pmatrix}
c_{11} & c_{12} & \cdots & c_{1n} \\\\
c_{21} & c_{22} & \cdots & c_{2n} \\\\
\vdots & \vdots & \ddots & \vdots \\\\
c_{m1} & c_{m2} & \cdots & c_{mn}
\end{pmatrix}
\quad\text{where}\quad
c_{ij} = \sum_{k=1}^{p} a_{ik}b_{kj} \quad (1 \le i \le m,\ 1 \le j \le n).
\\]

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
    assert len(a) == len(a[0])
    n = len(a)
    # ADD ADDITIONAL CODE HERE!


#######################################################
# a를 통째로 복사한 새로운 2차원 리스트를 리턴 (gaussian_elimination이
# 입력 a를 변경해버리므로, 여러 번 호출하려면 매번 복사본을 넘겨야 한다)
def copy2DList(a):
    m = [[0] * len(a[0]) for i in range(len(a))]
    for i in range(len(a)):
        for j in range(len(a[0])):
            m[i][j] = a[i][j]
    return m

#######################################################
# truncate의 2차원 리스트 버전 (1번 문제의 truncate와 이름이 겹치므로 구분)
def truncate2D(b, l=3):
    for i in range(len(b)):
        for j in range(len(b[0])):
            if b[i][j] >= 0:
                sign = 1
            else:
                sign = -1
                b[i][j] = -b[i][j]
            b[i][j] = (int(b[i][j] * (10**l) + 0.5) / float(10**l)) * sign
    return b

print(truncate2D(inverse([[0, 1, 1], [2, 4, -2], [0, 3, 15]])))
# [[-2.75, 0.5, 0.25], [1.25, 0.0, -0.083], [-0.25, 0.0, 0.083]]

print(truncate2D(inverse([[1, 0, 1, 4], [2, -1, 1, 7], [-2, 1, 0, -6], [1, 1, 1, 9]])))
# [[2.8, -2.2, -1.6, -0.6], [2.0, -2.0, -1.0, 0.0],
#  [0.6, 0.6, 0.8, -0.2], [-0.6, 0.4, 0.2, 0.2]]

print(inverse([[0, 1, 1], [2, 4, -2], [2, 5, -1]]))  # None
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
    n = len(L)
    # ADD ADDITIONAL CODE HERE!


print(poly([3, 5]))      # 7.0
print(poly([2, 6, 12]))  # 20.0
print(poly([2, -12, -760, -5302, 4254, 206672, 1369508, 5817030, 19270778]))  # 53976044.0
print(poly([-9, -7, -201, -1797, -8089, -25539, -64857]))  # None
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
  row는 증가시키지 않고 column만 증가시켜 다음 pivot을 찾음). 아래는
  \\(5 \times 5\\) 행렬을 예로, pivot(색칠된 칸)이 왼쪽 위에서
  오른쪽 아래로 이동해가는 과정을 보여준다(`*`는 임의의 값):

  \\[
  \begin{bmatrix}
  \boxed{*} & * & * & * & * \\\\
  * & * & * & * & * \\\\
  * & * & * & * & * \\\\
  * & * & * & * & * \\\\
  * & * & * & * & *
  \end{bmatrix}
  \Rightarrow
  \begin{bmatrix}
  * & * & * & * & * \\\\
  0 & \boxed{*} & * & * & * \\\\
  0 & * & * & * & * \\\\
  0 & * & * & * & * \\\\
  0 & * & * & * & *
  \end{bmatrix}
  \Rightarrow
  \begin{bmatrix}
  * & * & * & * & * \\\\
  0 & * & * & * & * \\\\
  0 & 0 & 0 & 0 & \boxed{*} \\\\
  0 & 0 & 0 & 0 & * \\\\
  0 & 0 & 0 & 0 & *
  \end{bmatrix}
  \Rightarrow
  \begin{bmatrix}
  * & * & * & * & * \\\\
  0 & * & * & * & * \\\\
  0 & 0 & 0 & 0 & * \\\\
  0 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 0
  \end{bmatrix}
  \\]

  두 번째에서 세 번째 단계로 넘어갈 때, 3번째 행의 대각선 자리(2열)가
  0이라서 pivot 후보가 될 수 없다. 이때 row는 그대로 두고(다음 행으로
  넘어가지 않고) column만 오른쪽으로 옮겨가며 0이 아닌 값을 찾는다 —
  이 예시에서는 4열에서 찾았다. 그 결과 마지막 두 행은 (거의) 전부 0인
  채로 남게 된다.
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


print(classify([[1, 1, 0], [1, 1, 1], [0, 1, 1]], [1, 1, 1]))       # 0
print(classify([[0, 1, 1], [2, 4, -2], [2, -5, -1]], [4, 2, 36]))   # 0
print(classify([[1, -3, 1], [2, -1, -2], [1, 2, -3]], [1, 2, -2]))  # 1
print(classify([[1, 1, 1], [0, 0, 1], [0, 0, 1]], [1, 1, 2]))       # 1
print(classify([[1, 1, -3], [0, 1, -1], [-1, 2, 0]], [-1, 0, 1]))   # 2
print(classify([[1, 1, 1], [0, 0, 1], [0, 0, 1]], [1, 1, 1]))       # 2
print(classify([[1, 1, 1, 1], [0, 0, 1, 0], [0, 0, 1, 1], [0, 0, 0, 1]], [1, 1, 2, 1]))  # 2
```
