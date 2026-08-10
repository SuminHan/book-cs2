# Problem Set

*큐브 더미와 투영도의 좌표 규칙은 [Topics Covered](lecture04-topics.md) 참고.*

### 필수 문제

**1.** Write a function `topView`:
- input parameter: a 3-dimensional \\(N \times N \times N\\) list `P` of
  0/1 that represents a pile of cubes (`P[i][j][k] == 1`이면 위치
  `(i,j,k)`에 큐브가 있다는 뜻)
- return value: a 2-dimensional 0/1 list that represents the top view of
  the input

Write a function `frontView`:
- input parameter: the same as in `topView`
- return value: a 2-dimensional 0/1 list that represents the front view of
  the input

Write a function `rightView`:
- input parameter: the same as in `topView`
- return value: a 2-dimensional 0/1 list that represents the right view of
  the input
  - *j-좌표의 방향에 주의: 반환값은 `[[1,0,0],[1,0,1],[1,1,1]]`이 아니다 —
    이 규칙이 프로그래밍을 더 쉽게 만들어준다.*

```python
def topView(P):
    # ADD ADDITIONAL CODE HERE!

def frontView(P):
    # ADD ADDITIONAL CODE HERE!

def rightView(P):
    # ADD ADDITIONAL CODE HERE!

P1 = [[[0,0,0], [0,0,0], [1,0,0]],
      [[1,0,1], [0,0,0], [1,0,1]],
      [[1,0,1], [1,1,1], [1,1,1]]]
print(topView(P1))    # [[1,0,1], [1,1,1], [1,1,1]]
print(frontView(P1))  # [[1,0,0], [1,0,1], [1,1,1]]
print(rightView(P1))  # [[0,0,1], [1,0,1], [1,1,1]]

P2 = [[[1,0,0], [0,0,0], [1,0,0]],
      [[0,0,1], [1,1,0], [1,0,1]],
      [[0,1,0], [0,0,0], [1,0,0]]]
print(topView(P2))    # [[1,1,1], [1,1,0], [1,0,1]]
print(frontView(P2))  # [[1,0,0], [1,1,1], [1,1,0]]
print(rightView(P2))  # [[1,0,1], [1,1,1], [1,0,1]]
```

**2.** Consider the problem of finding a 3D pile of cubes from its
top/front/right views (which is roughly an "inverse" mapping of those in
problem 1). Some input views may be realized by *several* different piles
of cubes; other input views may not be realized by *any* pile of cubes at
all.

Write a function `countCubes`:
- input parameter: three 2-dimensional 0/1 lists that represent top,
  front, right views, respectively
  - There can be several piles of cubes that realize the input views.
  - The input views may not be realized by any pile of cubes.
- return value: the maximum possible number of cubes that realize the
  input views
  - returns `None` if the input is not realized by any pile of cubes
  - *`==`도 다차원 리스트에 대해 (deep) equality로 작동한다(1차원
    리스트와 마찬가지).*

```python
def countCubes(top, front, right):
    n = len(top)
    count = 0
    P = [[[None]*n for i in range(n)] for j in range(n)]
    # for each (i,j,k), try to fill in P[i][j][k] and count cubes

    # then, check feasibility for each view

    # ADD ADDITIONAL CODE HERE!
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**3.** The goal of this problem is to complete the correctness proof of
the algorithm in problem 2. For notational convenience, we define
functions `build` and `check`:

```python
def build(top, front, right):
    n = len(top)
    P = [[[0]*n for i in range(n)] for j in range(n)]
    for i in range(n):
        for j in range(n):
            for k in range(n):
                if top[j][k] == front[i][k] == right[i][j] == 1:
                    P[i][j][k] = 1
    return P

def check(P, top, front, right):
    return topView(P)==top and frontView(P)==front and rightView(P)==right
```

(`topView`, `frontView`, `rightView`는 앞서 구현한 함수들.) 다음 사실을
상기하자: 주어진 top/front/right에 대해 `check(Q,top,front,right)==True`인
`Q`가 존재 ⟺ `check(build(top,front,right), top,front,right)==True`.

"if" 방향은 쉽다(그냥 `Q = build(top,front,right)`로 두면 됨). 반대로
"only if" 방향은 다소 복잡한데, 강의 슬라이드에서는 증명의 스케치만
주어졌다. 임의의(그러나 고정된) `n×n` 리스트 top/front/right가 아래를
만족한다고 하자:

> (♣) `check(build(top,front,right), top,front,right) == False`

다음은 "그렇다면 `check(Q,top,front,right)==True`인 `Q`가 존재하지 않는다"는
명제의 증명 스케치다(강의 슬라이드와 동일):

1. 반대로, `check(Q,top,front,right)==True`인 \\(n \times n \times n\\) 0/1
   리스트 `Q`가 존재한다고 가정하자.
   1. `check(Q,top,front,right) == True`, 이고
   2. `check(R,top,front,right)==True`인 임의의 `R`에 대해 `Q`의 1의
      개수가 `R`의 1의 개수 이상이다 (즉 `Q`는 top/front/right 투영을
      만족하는 큐브 더미 중 "최대"인 것).
2. `P = build(top,front,right)`라 하자.
3. 모든 `0<=i,j,k<n`에 대해, `P[i][j][k]`가 `0`이면 `Q[i][j][k]`도 반드시
   `0`이어야 한다 (강의 슬라이드 애니메이션의 "hole-drilling" 논증에 의해).
4. 모든 `0<=i,j,k<n`에 대해, `P[i][j][k]`가 `1`이면 `Q[i][j][k]`도 반드시
   `1`이어야 한다.
5. 3, 4에 의해 `Q`는 `P`와 같다. 따라서 `check(Q,top,front,right)`는
   `check(P,top,front,right)`와 같은데, 이는 가정(♣)에 의해 `False`다.
6. 따라서 `check(Q,top,front,right)`는 `False`인데, 이는 (1.1)과 모순.

**Prove the proposition in the step (4)** to complete the correctness
proof.

**4.** 수업시간에 다루었던 문제에서는 중력의 영향을 받지 않는 상황을
고려하였는데, 이 문제에서는 중력 영향을 받는 상황을 고려한다.

주어진 pile of cubes가 허공에 떠다니는 cube가 없다는 조건을 만족하면
**중력조건**을 만족한다고 정의하자.

다음과 같이 정의된 함수 `gravity`를 완성하라:
- 입력: pile of cube를 나타내는 3차원 \\(n \times n \times n\\) 정수 리스트
- 리턴값: `True`(입력이 중력조건을 만족할 때), `False`(입력이 중력조건을
  만족하지 않을 때)

**5.** 4번 문제와 마찬가지로 중력 영향을 받는 상황을 고려하는데, 허공에
떠있는 cube들의 개수를 계산하려고 한다.

어떤 cube가 허공에 떠있다는 것은 중력이 작용하면 떨어짐을 의미한다.

다음과 같이 정의된 함수 `floating`을 완성하라:
- 입력: pile of cube를 나타내는 3차원 \\(n \times n \times n\\) 0/1 리스트
- 리턴값: 허공에 떠있는 cube들의 개수 (하나도 없으면 `0`)

**6.** 이 문제에서는 (2번 문제를 일반화하여) \\(D \times H \times W\\)
형태로 3개의 axis에 대응되는 길이가 동일하지 않은 일반적인 경우를
다룬다. (2번 문제와 마찬가지로 중력의 영향은 고려하지 않는다.)

다음과 같이 정의된 함수 `countCubes`를 완성하라:
- 입력: 3개의 2차원 0/1-리스트 `top, front, right`
- 리턴값: `top, front, right`를 정사영으로 가지는 'maximum pile of
  cubes'에 포함된 cube 갯수
  - 주어진 정사영을 가지는 'pile of cubes'가 존재하지 않으면(2번
    문제에서와 마찬가지로) `None`을 리턴

```python
top = [[0,0,0,0],[0,0,0,1],[1,1,0,0]]
front = [[1,1,0,1],[1,1,0,0]]
right = [[0,1,1],[0,0,1]]
print(countCubes(top, front, right))  # 5
```
