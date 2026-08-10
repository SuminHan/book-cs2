# Topics Covered

## 2차원 리스트

행렬(matrix)을 표현할 때 유용하다(순서도 "행"/"열"로 같다고 생각하면 됨).
`table[i]`는 `i`-행에 대응되는 리스트(길이 `width`), `table[i][j]`는 그
행의 `j`번째 원소다. `len(table)`은 `height`(행 개수), `len(table[0])`은
`width`(열 개수)가 된다.

```python
height = 3   # 행 개수 = 열의 크기
width = 4    # 열 개수 = 행의 크기
table = [[None]*width for i in range(height)]

for i in range(height):
    for j in range(width):
        table[i][j] = (i + 2*j + 1)
```

`[None]*width for i in range(height)`처럼 **list comprehension**으로 각
행을 독립적으로 새로 생성해야 한다 — `[[None]*width] * height`처럼 쓰면
모든 행이 **같은 리스트를 가리키는 alias**가 되어, 한 행을 고치면 다른
모든 행도 같이 바뀌는 버그가 생긴다.

## 3차원 리스트

한 단계 더 중첩하면 된다. `table[i]`는 `i`-층에 대응되는 2D array,
`table[i][j]`는 그 층의 `j`-행에 대응되는 1D array다.

```python
height = 3   # 행 개수
width = 4    # 열 개수
depth = 2    # 층 개수
table = [[[None]*width for j in range(height)] for i in range(depth)]

for i in range(depth):
    for j in range(height):
        for k in range(width):
            table[i][j][k] = (i + 2*j + 1 + k)
```

## Boundary 체크 패턴

다차원 배열에서 인접 칸을 볼 때(예: 지뢰찾기), 인덱스가 배열 범위를
벗어나지 않는지 매번 확인해야 한다. 이 체크를 별도 함수로 분리해두면
코드가 훨씬 깔끔해진다:

```python
def withinBoundary(height, width, i, j):
    return 0 <= i < height and 0 <= j < width
```

1차원의 경우:

```python
def withinBoundary(size, i):
    return 0 <= i < size
```

이 패턴은 "자기 자신 + 인접 칸들"을 순회하며 무언가를 세거나 판정하는
모든 문제(지뢰밭 인접 지뢰 수 세기, 0으로만 이루어진 최대 직사각형 찾기
등)의 뼈대가 된다: 후보 인접 칸들을 나열하고, 그중 boundary 안에 있는
것만 실제로 확인한다.
