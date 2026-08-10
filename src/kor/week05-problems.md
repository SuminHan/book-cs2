# Problem Set

*큐브 더미와 투영도의 좌표 규칙은 [Topics Covered](week05-topics.md) 참고.*

### 필수 문제

**1. `topView(P)` / `frontView(P)` / `rightView(P)`** — \\(N \times N \times N\\)
0/1 리스트로 주어진 큐브 더미 `P`에서, 위/앞/오른쪽 방향으로 본 \\(N \times N\\)
0/1 투영도를 반환.

```python
def topView(P):
    # ADD ADDITIONAL CODE HERE!

def frontView(P):
    # ADD ADDITIONAL CODE HERE!

def rightView(P):
    # ADD ADDITIONAL CODE HERE!

P1 = [[[0,0,0],[0,0,0],[1,0,0]],
      [[1,0,1],[0,0,0],[1,0,1]],
      [[1,0,1],[1,1,1],[1,1,1]]]

print(topView(P1))    # [[1,0,1],[1,1,1],[1,1,1]]
print(frontView(P1))  # [[1,0,0],[1,0,1],[1,1,1]]
print(rightView(P1))  # [[0,0,1],[1,0,1],[1,1,1]]
```

**2. `countCubes(top, front, right)`** — 세 투영도가 주어졌을 때, 그 투영도를
만족하는(존재한다면 여러 개일 수 있는) 큐브 더미 중 **최대** 큐브 개수를 반환.
만족하는 더미가 하나도 없으면 `None`.

```python
def countCubes(top, front, right):
    n = len(top)
    # ADD ADDITIONAL CODE HERE!
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만 도움이 되므로 시간이 남으면
시도해볼 것을 권장 (대부분 기출문제).*

**3.** 2번 문제 알고리즘의 정당성 증명을 완성하는 문제. 보조 함수:

```python
def build(top, front, right):
    n = len(top)
    P = [[[0] * n for i in range(n)] for j in range(n)]
    for i in range(n):
        for j in range(n):
            for k in range(n):
                if top[j][k] == front[i][k] == right[i][j] == 1:
                    P[i][j][k] = 1
    return P

def check(P, top, front, right):
    return topView(P) == top and frontView(P) == front and rightView(P) == right
```
어떤 투영도 조합에 대해 `check(build(top,front,right), ...) == False`라면,
그 투영도를 만족하는 `Q`가 아예 존재하지 않음을 증명하는 논증에서, 마지막
단계("`P[i][j][k]`가 1이면 `Q[i][j][k]`도 반드시 1이어야 한다")를 증명할 것.

**4. `gravity(P)`** — 큐브 더미 `P`가 "중력 조건"(허공에 떠 있는 큐브가 없음)을
만족하면 `True`.

**5. `floating(P)`** — 중력 조건을 만족하지 않을 때, 허공에 떠 있는 큐브의 개수를
반환.

**6. `countCubes(top, front, right)`(일반화 버전)** — 2번 문제를 \\(D \times H
\times W\\)(세 축의 길이가 다를 수 있는) 형태로 일반화. 세 투영도가 주어졌을 때
그것을 만족하는 최대 큐브 개수를 반환(없으면 `None`).

```python
top = [[0,0,0,0],[0,0,0,1],[1,1,0,0]]
front = [[1,1,0,1],[1,1,0,0]]
right = [[0,1,1],[0,0,1]]
print(countCubes(top, front, right))  # 5
```
