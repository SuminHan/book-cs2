# Topics Covered

## Rectilinear Polygon의 방향(Orientation) 판정

모든 변이 수평/수직인 다각형을 **rectilinear polygon**이라 한다. 이
다각형이 시계방향(CW)으로 주어졌는지 반시계방향(CCW)으로 주어졌는지는,
**맨 위쪽 변**(top edge — `y`좌표가 최댓값인 변)의 방향만 보면 바로 알 수
있다: 그 변이 **왼쪽**을 향하면 CCW, **오른쪽**을 향하면 CW.

```python
def orientation(polygon):
    n = len(polygon)
    top = polygon[0].y
    topIndex = 0
    for i in range(n):
        if polygon[i].y > top:
            top = polygon[i].y
            topIndex = i
    # polygon[topIndex] -> polygon[(topIndex+1) % n] 방향을 보면 됨
    if polygon[(topIndex+1) % n].x < polygon[topIndex].x:
        return "CCW"   # top edge가 왼쪽을 향함
    else:
        return "CW"    # top edge가 오른쪽을 향함
```

## CCTV 한 대로 감시 가능한 영역 (Surveillability)

**문제**: 반시계방향으로 주어진 rectilinear polygon 내부 전체를 CCTV
한 대로 감시할 수 있는 설치 가능 영역을 구하라(불가능하면 없음).

**핵심 관찰**: 다각형의 각 변은, CCTV가 그 변 안쪽에서 **바깥으로 튀어나온
부분들을 모두 볼 수 있으려면 있어야 할 위치**를 제약한다. 반시계방향
기준으로 각 변의 방향에 따라:

- 변이 **아래(DOWN)**를 향함(다각형 위쪽 경계) → CCTV는 그 변의 `y`
  **이하**에 있어야 함 → `topMin` 갱신
- 변이 **위(UP)**를 향함(다각형 아래쪽 경계) → CCTV는 그 변의 `y`
  **이상**에 있어야 함 → `bottomMax` 갱신
- 변이 **왼쪽(LEFT)**을 향함(다각형 오른쪽 경계) → CCTV는 그 변의 `x`
  **이하**에 있어야 함 → `rightMin` 갱신
- 변이 **오른쪽(RIGHT)**을 향함(다각형 왼쪽 경계) → CCTV는 그 변의 `x`
  **이상**에 있어야 함 → `leftMax` 갱신

즉 각 변이 허용 영역을 반평면(half-plane)으로 하나씩 제한하고, 그
반평면들의 **교집합**이 곧 설치 가능 영역이다 — 다각형과 마찬가지로
axis-aligned 사각형 `(leftMax, bottomMax)`–`(rightMin, topMin)`이 된다
(`leftMax > rightMin`이거나 `bottomMax > topMin`이면 교집합이 비어
있다는 뜻 — 설치 가능한 곳이 없다).

```python
def direction(fr, to):
    if fr.x == to.x:
        return "UP" if fr.y < to.y else "DOWN"
    elif fr.y == to.y:
        return "RIGHT" if fr.x < to.x else "LEFT"

def surveillableRegion(polygon):
    # polygon이 반시계방향이라고 가정
    leftMax, rightMin = -INF, INF
    bottomMax, topMin = -INF, INF
    n = len(polygon)
    for i in range(n):
        fr, to = polygon[i], polygon[(i+1) % n]
        d = direction(fr, to)
        if d == "UP":
            bottomMax = max(bottomMax, fr.y)
        elif d == "DOWN":
            topMin = min(topMin, fr.y)
        elif d == "RIGHT":
            leftMax = max(leftMax, fr.x)
        elif d == "LEFT":
            rightMin = min(rightMin, fr.x)
    if leftMax > rightMin or bottomMax > topMin:
        return None
    return Rectangle(leftMax, rightMin, bottomMax, topMin)
```

**정당성**: "실제로 전체를 감시할 수 있는 위치들의 집합" `A`와 "위
계산으로 나온 사각형" `B`가 정확히 같은 집합임을 양방향 포함으로
보인다 — `A ⊆ B`(감시 가능한 위치라면 각 변의 제약을 반드시 만족해야
하므로), `B ⊆ A`(그 사각형 안의 어떤 점이든, 다각형 경계의 모든 점을
직접 볼 수 있고, 경계를 볼 수 있으면 내부 전체도 볼 수 있으므로).

## Art Gallery Problem 일반화

이 문제는 "카메라 한 대, rectilinear polygon" 특수한 경우였다. 일반화
방향은 여러 갈래다:

- 카메라를 **꼭짓점/변 위에만** 설치할 수 있다면? (Optional 문제
  `surveillablePoint`, `surveillableLength`)
- 카메라가 **여러 대**라면 몇 대가 필요한가(최소화), 또는 주어진 `k`대로
  충분한가(결정 문제)?
- 다각형이 rectilinear가 아니라 **임의의 모양**이라면?
- **3차원**(건물 한 층이 아니라 건물 전체)이라면?

이런 일반화들은 계산기하학(computational geometry)의 고전적인 연구
주제로, "Art Gallery Problem"이라는 이름으로 불린다.
