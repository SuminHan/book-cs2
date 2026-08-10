# Problem Set

### 필수 문제

**1. `countZero(a)`** — 2차원 배열 `a`에서 0의 개수.

```python
def countZero(a):
    height = len(a)
    width = len(a[0])
    # ADD ADDITIONAL CODE HERE!

print(countZero([[1,2,3],[0,0,5],[0,3,0],[0,0,0]]))  # 7
print(countZero([[0,2,3],[0,0,5],[0,3,0]]))          # 5
```

**2. `countZero(a)`(3차원 버전)** — 3차원 배열에서 0의 개수.

```python
def countZero(a):
    depth = len(a)
    height = len(a[0])
    width = len(a[0][0])
    # ADD ADDITIONAL CODE HERE!

print(countZero([[[1,2],[0,0]],[[0,0],[0,0]]]))                  # 6
print(countZero([[[1,2],[0,0]],[[0,0],[0,0]],[[0,0],[0,0]]]))    # 10
```

**3. `maxPrime(a)`** — 3차원 배열에서 가장 큰 소수(없으면 0).

```python
def maxPrime(a):
    # ADD ADDITIONAL CODE HERE!

print(maxPrime([[[2,3],[3,9]],[[17,3],[3,19]]]))   # 19
print(maxPrime([[[29,3],[3,9]],[[17,3],[3,19]]]))  # 29
```

**4. `sorted(a)`** — 2차원 배열의 모든 행과 모든 열이 각각 비감소 순서인지 여부.

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

**5. `countMines(mineField)`(1차원)** — 1차원 지뢰밭(boolean 리스트)에서, 각
칸(자기 자신 + 좌우 인접 칸)의 지뢰 개수를 리스트로 반환.

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

**6. `countMines(mineField)`(2차원)** — 2차원 지뢰밭에서, 각 칸(자기 자신 + 8방향
인접 칸)의 지뢰 개수를 2차원 리스트로 반환.

```python
def withinBoundary(height, width, i, j):
    return 0 <= i < height and 0 <= j < width

def countMines(mineField):
    height = len(mineField)
    width = len(mineField[0])
    # ADD ADDITIONAL CODE HERE!
```

**7. `maxZeroRect(M)`** — 0/1 행렬 `M`에서, 0으로만 이루어진 가장 큰 직사각형의
넓이를 반환.

```python
def zeroRect(M, i1, i2, j1, j2):
    # returns True iff M[i][j] == 0 for all i1<=i<=i2, j1<=j<=j2
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

*필수 문제와 달리 제출/검사 대상은 아니지만 도움이 되므로 시간이 남으면
시도해볼 것을 권장 (대부분 기출문제).*

**8. `product(A, B)`** — 두 행렬(2차원 리스트) `A`(m×p), `B`(p×n)의 행렬곱을
반환. 차원이 안 맞아 곱이 정의되지 않으면 `None`.

**9. `rotate(M)`** — 2차원 리스트 `M`을 시계방향으로 90° 회전시킨 리스트를 반환.

**10. `check(M)`** — 2차원 리스트 `M`의 각 행에 음수가 존재하면 `True`.

**11. `findMines(C)`** — 5번 문제의 역연산. `C[i]`가 `M[i-1]+M[i]+M[i+1]`(경계
밖은 무시)의 합일 때, 그런 `M`을 하나 찾아 반환(없으면 `None`).

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
