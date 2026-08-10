# Problem Set


### 필수 문제

**1. `orientation(polygon)`** — 다각형을 이루는 `Point` 리스트가 시계방향이면
`"CW"`, 반시계방향이면 `"CCW"`를 반환.

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

def orientation(polygon):
    n = len(polygon)
    top = polygon[0].y
    # ADD ADDITIONAL CODE HERE!

polygon1 = [Point(30,10), Point(30,20), Point(50,20), Point(50,40),
            Point(40,40), Point(40,30), Point(30,30), Point(30,40),
            Point(20,40), Point(20,20), Point(10,20), Point(10,10)]
polygon2 = [Point(30,10), Point(30,30), Point(10,30), Point(10,10)]
polygon3 = [Point(10,30), Point(10,10), Point(30,10), Point(30,30)]
polygon4 = [Point(30,30), Point(30,10), Point(10,10), Point(10,30)]
print(orientation(polygon1))  # CCW
print(orientation(polygon2))  # CCW
print(orientation(polygon3))  # CCW
print(orientation(polygon4))  # CW
```

**2. `Rectangle.__str__` / `surveillableRegion(polygon)`** — 반시계방향으로
주어진 rectilinear polygon에 대해, CCTV 1대로 내부 전체를 감시할 수 있는
설치 가능 영역을 `Rectangle`로 반환(불가능하면 `None`).

```python
class Rectangle:
    def __init__(self, left, right, bottom, top):
        self.left = left
        self.right = right
        self.bottom = bottom
        self.top = top

    def __str__(self):
        # "(x1,y1)-(x2,y2)" 형태, 예: "(2,2)-(3,3)"
        # ADD ADDITIONAL CODE HERE!

def direction(fr, to):
    if fr.x == to.x:
        if fr.y < to.y: return "UP"
        elif fr.y > to.y: return "DOWN"
    elif fr.y == to.y:
        if fr.x < to.x: return "RIGHT"
        elif fr.x > to.x: return "LEFT"
    print("Input polygon is not rectilinear!")
    assert False

def surveillableRegion(polygon):
    # 반시계방향이라고 가정
    leftMax = -sys.maxint
    rightMin = sys.maxint
    bottomMax = -sys.maxint
    topMin = sys.maxint
    n = len(polygon)
    # ADD ADDITIONAL CODE HERE!

polygon1 = [Point(0,1), Point(2,1), Point(2,0), Point(4,0),
            Point(4,2), Point(5,2), Point(5,4), Point(3,4),
            Point(3,5), Point(1,5), Point(1,3), Point(0,3)]
polygon2 = [Point(0,0), Point(2,0), Point(2,3), Point(0,3),
            Point(0,2), Point(1,2), Point(1,1), Point(0,1)]
print(surveillableRegion(polygon1))  # (2,2)-(3,3)
print(surveillableRegion(polygon2))  # None
```
> 반시계방향으로 다각형을 순회하면서, 각 변의 방향(`direction` 함수)에 따라
> `leftMax`/`rightMin`/`bottomMax`/`topMin`을 적절히 갱신해나가면 된다.

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만 도움이 되므로 시간이 남으면
시도해볼 것을 권장 (대부분 기출문제).*

**3. `surveillableRegion(polygon)`(방향 무관 버전)** — 2번 문제를 일반화해,
입력 다각형이 시계/반시계 어느 방향이든 처리.
> 1번의 `orientation`으로 방향을 먼저 판별하고, 시계방향이면 UP/DOWN과
> LEFT/RIGHT의 역할을 바꿔서 2번과 동일하게 처리.

**4. `surveillableLength(polygon)`** — CCTV를 다각형의 **경계선 위**에만 설치할
수 있다고 할 때, 내부 전체를 감시 가능한 설치 구간 길이의 총합을 반환.
> 2번의 `surveillableRegion`으로 설치 가능 직사각형을 먼저 구한 뒤, 그 직사각형과
> 다각형 경계선이 겹치는 구간들을 찾아 합산.

**5. `surveillablePoint(polygon)`** — CCTV를 다각형의 **꼭짓점**에만 설치할 수
있다고 할 때, 내부 전체를 감시 가능한 꼭짓점의 개수를 반환.
> 두 `Point`가 같은 위치인지 비교할 때 `==` 대신 `p1.equal(p2)`를 사용해야
> 의도대로 동작함.

---
*원본: `CS2(2026-2)_all/CS2/CS2/problem_set/P12.pdf`. 표현/코드는 정리하며 일부
재구성함.*
