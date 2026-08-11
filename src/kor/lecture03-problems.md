# Problem Set

### 필수 문제

**1.** Write a function `countZero`:
- input parameter: a list `a` that represents a 2-dimensional array
- return value: the number of `0`s in the array

counter 패턴의 2중 for 루프. `height`는 행의 갯수이고 `width`는 열의 갯수.

```python
def countZero(a):
    height = len(a)
    width = len(a[0])
    # ADD ADDITIONAL CODE HERE!

print(countZero([[1,2,3],[0,0,5],[0,3,0],[0,0,0]]))  # 7
print(countZero([[0,2,3],[0,0,5],[0,3,0]]))          # 5
```

**2.** Write a function `countZero`:
- input parameter: a list `a` that represents a 3-dimensional array
- return value: the number of `0`s in the array

```python
def countZero(a):
    depth = len(a)
    height = len(a[0])
    width = len(a[0][0])
    # ADD ADDITIONAL CODE HERE!

print(countZero([[[1,2],[0,0]],[[0,0],[0,0]]]))                # 6
print(countZero([[[1,2],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]]))  # 10
```

**3.** Write a function `maxPrime`:
- input parameter: a list `a` that represents a 3-dimensional array
- return value: the largest prime number in the array; if no prime exists,
  `0` is returned

max/min 패턴의 for 루프. 주어진 boolean 함수 `isPrime`을 이용.

```python
def isPrime(p):
    ...

def maxPrime(a):
    best = 0
    # ADD ADDITIONAL CODE HERE!

print(maxPrime([[[2,3],[3,9]],[[17,3],[3,19]]]))   # 19
print(maxPrime([[[29,3],[3,9]],[[17,3],[3,19]]]))  # 29
```

**4.** Write a function `sorted`:
- input parameter: a list `a` that represents a 2-dimensional array
- return value: `True` if each row/column is in non-decreasing order,
  `False` otherwise

- "for all" 패턴의 2중 for 루프를 2개 이용
- 루프 하나는 각 행에 대해 가로 방향으로 체크. 다음 루프는 각 열에 대해
  세로 방향으로 체크
- range의 파라미터로 `height, width`가 그대로 들어가야 하는지, `-1`을
  해서 들어가야 하는지 꼼꼼히 따져봐야 함

```python
def sorted(a):
    # ADD ADDITIONAL CODE HERE!

test1 = [
    [2,3,7,9,11,12],
    [5,6,8,10,12,15],
    [7,7,8,10,12,15],
    [8,9,10,10,13,17],

]
test2 = [
    [2,3,7,9,11,12],
    [5,6,8,10,12,15],
    [7,7,8,10,12,18],
    [8,9,10,10,13,17],

]
print(sorted(test1))  # True
print(sorted(test2))  # False
```

**5.** Write a function `countMines`:
- input parameter: a list of boolean values that represents a
  1-dimensional minefield
- return value: the list of integers storing the count of bombs in each
  neighborhood
  - The neighborhood for a location includes the location itself and its
    two adjacent locations

2차원 리스트를 만드는 법은 슬라이드 그림/코드 참조. 리스트의 각 자리는
`None` 대신 `0`으로 초기화 해놓고 카운팅하면 됨.

```python
def withinBoundary(size, i):
    return i >= 0 and i < size

def countMines(mineField):
    size = len(mineField)
    mines = [0] * size
    # ADD ADDITIONAL CODE HERE!

T, F = True, False
mineField1 = [T, F, F, T, T, T, T, F, T, F]
mineField2 = [T, F, T, T, T, F, F]
print(countMines(mineField1))  # [1,1,1,2,3,3,2,2,1,1]
print(countMines(mineField2))  # [1,2,2,3,2,1,0]
```

**6.** Write a function `countMines`:
- input parameter: a list that represents a 2-dimensional minefield
- return value: the list that represents the 2-dimensional array of
  integers storing the count of bombs in each neighborhood
  - The neighborhood for a location includes the location itself and its
    eight adjacent locations

```python
def withinBoundary(height, width, i, j):
    return i >= 0 and i < height and j >= 0 and j < width

def countMines(mineField):
    height = len(mineField)
    width = len(mineField[0])
    # ADD ADDITIONAL CODE HERE!

T = True
F = False
mineField = [
    [T, F, F, F, F, T],
    [F, F, F, F, F, T],
    [T, T, F, T, F, T],
    [T, F, F, F, F, F],
    [F, F, T, F, F, F],
    [F, F, F, F, F, F]]

mines = countMines(mineField)
for i in range(len(mines)):
    print(mines[i])

# [1, 1, 0, 0, 2, 2]
# [3, 3, 2, 1, 4, 3]
# [3, 3, 2, 1, 3, 2]
# [3, 4, 3, 2, 2, 1]
# [1, 2, 1, 1, 0, 0]
# [0, 1, 1, 1, 0, 0]
```

**7.** Write a function `maxZeroRect`:
- input parameter: a 2-dimensional list `M` that represents a 0/1 matrix
- return value: the area of a largest rectangle with only `0`s

*Hint: write an auxiliary boolean function `zeroRect(M, i1, i2, j1, j2)`
that returns `True` if and only if `M[i][j] == 0` for all `i1<=i<=i2` and
`j1<=j<=j2`, and use it in `maxZeroRect`.*

```python
def zeroRect(M, i1, i2, j1, j2):
    # ADD ADDITIONAL CODE HERE!

def maxZeroRect(M):
    # ADD ADDITIONAL CODE HERE!

M = [[1,1,0,1,0,0,1],
     [0,0,0,0,0,1,1],
     [0,0,0,0,0,1,1],
     [0,0,0,0,0,1,1],
     [1,0,0,0,0,0,1],
     [1,0,0,0,0,1,0],
     [1,0,1,0,0,1,0],
     [1,0,1,0,0,1,0]]

print(maxZeroRect(M))  # 20
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**8.** Let `A`와 `B`를 각각 \\(m \times p\\) 행렬과 \\(p \times n\\) 행렬이라
하자. `A`와 `B`의 곱 \\(A \cdot B\\)는 다음과 같이 정의되는 \\(m \times
n\\) 행렬이다: \\(c_{ij} = \sum_{k=1}^{p} a_{ik}b_{kj}\\) (\\(1 \le i \le
m,\ 1 \le j \le n\\)).

Write a function `product`:
- input parameter: two matrices `A` and `B` that are represented by
  2-dimensional lists
- return value: the 2-dimensional list that represents the matrix product
  \\(A \cdot B\\)
  - 행렬곱 \\(A \cdot B\\)가 well-defined하지 않으면(차원이 안 맞으면)
    `None`을 return

*위의 행렬 표현에서의 인덱스는 1부터 시작하지만 list에서 인덱스는 0부터
시작함에 유의.*

**9.** 다음과 같이 정의된 함수 `rotate`를 완성하라:
- 입력: 2차원 리스트 `M`
- 리턴값: `M`을 시계방향으로 90° 회전시킨 형태의 2차원 리스트 (샘플 입력
  참조)

**10.** 다음과 같이 정의된 함수 `check`를 완성하라:
- 입력: 2차원 리스트 `M`
- 리턴값: `M`의 각 row에 음수가 존재하면 `True`, 아니면 `False`

**11.** 5번 문제를 일반화하여 각 칸에 여러개의 지뢰가 놓일 수 있는
상황을 고려하자. 예를 들어, 아래 왼쪽 그림의 격자의 각 칸에 표시된
숫자만큼 지뢰가 놓여있다고 하면 이에 대응되는 counting 결과는 오른쪽
그림과 같다: `M = [0,2,2,0,1,2,1]` → `C = [2,4,4,3,3,4,3]`.

이 문제에서는 다음과 같이 `countMines`의 반대 방향의 계산을 하는 것을
목표로 한다: `C = [2,4,4,3,3,4,3]` → `M = [0,2,2,0,1,2,1]`.

다음과 같이 정의된 함수 `findMines`를 완성하라:
- 입력: 리스트 `C` — `C`의 각 원소는 0 이상 30 이하인 정수(30이 작은
  크기의 값임을 이용)
- 리턴값: 다음 조건을 만족하는 리스트 `M` — `M`의 각 원소는 0 이상의
  정수이고, `countMines(M) == C`
  - 이를 만족하는 리스트 `M`이 존재하지 않으면 `None`을 리턴한다.
  - 이를 만족하는 리스트가 여러개 존재하면 그 중 아무거나 하나 리턴한다.

힌트:
- `M[0],M[1],...,M[n-1]`을 변수로 두면 `n`개의 연립방정식을 얻을 수 있어
  이를 (6주차에 다룰) Gaussian elimination으로 해결할 수도 있는데, 어떤
  `n`에 대해서는 대응되는 matrix가 singular일 수 있어서 적절한 방식이
  아니다.
- `M[0]`의 각 후보값(0부터 `max(C)`까지의 정수)에 대해
  `M[1],M[2],...,M[n-1]`는 다음과 같은 `n-1`개의 등식으로 유일하게
  결정된다: `M[0]+M[1]=C[0]`, `M[0]+M[1]+M[2]=C[1]`, ...,
  `M[n-3]+M[n-2]+M[n-1]=C[n-2]`
- 이들에 대해 다음이 모두 성립되면 답(중 하나)로 리턴하면 된다:
  `M[n-2]+M[n-1]=C[n-1]`, 그리고 모든 `M[i]`가 0 이상

```python
def countMines(M):
    n = len(M)
    C = [0] * n
    for i in range(n):
        for j in range(i - 1, i + 2):
            if 0 <= j < n:
                C[i] += M[j]
    return C

def findMines(C):
    # ADD ADDITIONAL CODE HERE!
```
