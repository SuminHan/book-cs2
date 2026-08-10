# Topics Covered

## Object와 Class

**Object**는 데이터(state 변수)와 함수(메소드)의 묶음이고, **class**는
그 object의 "틀"(type)이다. 이미 Week 8 이전에 써온 Toy Robot의
`Robot` class가 좋은 예다 — `hubo`, `amy` 같은 각 로봇이 object이고,
`Robot`이 그 class다.

```python
class Robot(object):
    def __init__(self, beepers, ...):
        self._beeper_bag = beepers
        self._x = avenue
        self._y = street
        ...

    def move(self):            # state 변수를 수정 — return 값 없음
        xx, yy = _directions[self._dir]
        self._x += xx
        self._y += yy
        ...

    def carries_beepers(self):  # state 변수를 읽기만 — return 값 있음
        return self._beeper_bag > 0
```

`hubo = Robot(beepers=6)`은 `__init__(hubo, 6)`이 호출되는 것으로 이해하면
된다 — **모든 메소드의 첫 번째 파라미터는 자기 자신을 가리키는
`self`이고, 호출할 때는 명시하지 않아도 자동으로 넘어간다.**

## 직접 Class 만들기: `Point`

2차원 평면의 점을 나타내는 `Point` class를 만들어보자.

```python
class Point:
    def __init__(self, px, py):   # 생성자 — 항상 modifier
        self.x = px
        self.y = py
```

`p1 = Point(1, 2)`는 `__init__(p1, 1, 2)`를 호출하는 것과 같다. state
변수는 항상 `self.x`처럼 `self.`을 붙여 나타낸다.

## `__str__`: 프린트되는 모양 정의

`__str__`을 정의하지 않으면 `print(p1)`은 `(1,2)`가 아니라
`0xb69b5a0c` 같은 메모리 주소가 찍힌다. 원하는 형태의 string을 만들어
`return`하면 해결된다(**`__str__`은 항상 pure function**):

```python
def __str__(self):
    return "(" + str(self.x) + "," + str(self.y) + ")"
```

## Pure Function vs. Modifier

- **Pure function**: state 변수를 수정하지 않고, 계산 결과만 `return`한다.
- **Modifier**: state 변수를 직접 수정하고, 보통 `return` 값이 없다
  (`None`).

```python
def setX(self, v):     # modifier — x를 수정, return 없음
    self.x = v

def getX(self):         # pure function — 읽기만, x는 self.x
    return self.x

def distance(self, p):  # pure function — 다른 object를 입력받아 계산만
    dx = self.x - p.x
    dy = self.y - p.y
    return (dx**2 + dy**2)**0.5
```

**`__init__`은 항상 modifier, `__str__`은 항상 pure function** — 이
둘은 예외 없이 고정이다. `dx`, `dy`처럼 계산 도중에만 쓰이는 임시
변수에는 `self.`를 붙이지 않는다(state 변수가 아니므로).

## Object를 반환하는 함수: 같은 연산, 두 가지 스타일

`add`처럼 다른 object와 결합해 **새로운** object를 만드는 함수는, pure
function으로도 modifier로도 만들 수 있다 — 어느 쪽인지에 따라 호출
결과가 완전히 달라진다:

```python
# pure function 버전: 새 Point를 만들어 반환, p1/p2는 그대로
def add(self, p):
    x = self.x + p.x
    y = self.y + p.y
    return Point(x, y)

p3 = p1.add(p2)
print(p3)   # (5,8) — 새로 만들어진 object
print(p1)   # (1,2) — 변경 없음

# modifier 버전: self 자신을 직접 수정, return 없음
def add_as_modifier(self, p):
    self.x += p.x
    self.y += p.y

p3 = p1.add_as_modifier(p2)
print(p3)   # None — modifier는 return 값이 없음
print(p1)   # (5,8) — p1 자신이 바뀜
```

`List`의 `.sort()`, `.append()`도 전형적인 modifier다(Week 2). **연습
문제를 풀 때 그 함수가 pure function인지 modifier인지부터 구분하고
시작할 것** — 문제(예: `Circle`의 `getRadius`/`getCenter`/`area`는 pure
function, `setRadius`/`move`/`moveTo`는 modifier)마다 명시적으로
요구하는 형태가 다르다.
