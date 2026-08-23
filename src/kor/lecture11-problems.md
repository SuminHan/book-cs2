# Problem Set


[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture11.ipynb)

### 필수 문제

**1.** (Orientations of Rectilinear Polygons) Write a function
`orientation`:
- input parameter: a list of `Point` objects that represents a
  rectilinear polygon (수직선과 수평선으로만 이루어진 다각형)
- return value: `"CW"`(if `Point` object들이 시계방향(clockwise)으로
  돌때), `"CCW"`(if `Point` object들이 반시계방향(counter-clockwise)으로
  돌때)

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

def orientation(polygon):
    n = len(polygon)
    top = polygon[0].y
    # ADD ADDITIONAL CODE HERE!!

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

**2.** (Surveillability of Rectilinear Polygons)

1. Write a function `__str__` for the `Rectangle` class:
   - input parameter: `self`
   - return value: the string for the `print` command in the following
     format: `"(x1,y1)-(x2,y2)"` where `(x1,y1)`은 bottom-left, `(x2,y2)`는
     top-right point of the rectangle `self`, e.g., `"(2,2)-(3,3)"`
2. Write a function `surveillableRegion`:
   - input parameter: a list of `Point` objects that represents a
     rectilinear polygon (1번 문제와 같은 형태. 단, **반시계방향**으로
     돌아가는 입력만 주어짐)
   - return value: 하나의 CCTV로 전체 지역이 감시가능하면 CCTV
     설치가능지역을 나타내는 `Rectangle` object, 하나의 CCTV로 전체
     지역이 감시불가능하면 `None`
   - *반시계방향으로 polygon을 돌아가면서 CCTV 설치가능지역을 나타내는
     4개의 변수 `leftMax, rightMin, bottomMax, topMin`을 적당히
     조절해나가면 된다. 반시계방향으로 돌때 현재 선분의 방향(상/하/좌/우)을
     파악하기 위해서는 주어진 함수 `direction`을 이용하면 된다.*

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Rectangle:
    def __init__(self, left, right, bottom, top):
        self.left = left
        self.right = right
        self.bottom = bottom
        self.top = top

    def __str__(self):
        # ADD ADDITIONAL CODE HERE!!

        return None  # remove it after completing your code

def direction(fr, to):
    if fr.x == to.x:
        if fr.y < to.y:
            return "UP"
        elif fr.y > to.y:
            return "DOWN"
    elif fr.y == to.y:
        if fr.x < to.x:
            return "RIGHT"
        elif fr.x > to.x:
            return "LEFT"
    else:
        print("Input polygon is not rectlinear!")
        assert False

def surveillableRegion(polygon):
    # assume the orientation of the polygon is counterclockwise
    leftMax = -sys.maxint
    rightMin = sys.maxint
    bottomMax = -sys.maxint
    topMin = sys.maxint
    n = len(polygon)

    # ADD ADDITIONAL CODE HERE!!

    return -1  # remove it after completing your code

polygon1 = [Point(0,1), Point(2,1), Point(2,0), Point(4,0),
            Point(4,2), Point(5,2), Point(5,4), Point(3,4),
            Point(3,5), Point(1,5), Point(1,3), Point(0,3)]

polygon2 = [Point(0,0), Point(2,0), Point(2,3), Point(0,3),
            Point(0,2), Point(1,2), Point(1,1), Point(0,1)]

print(surveillableRegion(polygon1))  # (2,2)-(3,3)
print(surveillableRegion(polygon2))  # None
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**3.** 2번 문제에서는 직각 다각형을 표현하는 점들이 반시계 방향으로만
입력으로 주어진 경우를 고려하였다. 이 문제에서는 이를 확장하여 직각
다각형을 표현하는 점들의 방향이 시계 방향일 수도 있고 반시계 방향일
수도 있는 일반적인 경우를 고려한다.

다음과 같이 정의된 함수 `surveillableRegion`를 완성하라:
- 입력: rectilinear polygon을 표현하는 `Point` object들의 리스트
  - 2번 문제와 달리 반시계 방향일 수도 있고 시계 방향일 수도 있다.
- 리턴값: 하나의 CCTV로 전체 지역이 감시가능하면 CCTV 설치가능지역을
  나타내는 `Rectangle` object, 하나의 CCTV로 전체 지역이 감시불가능하면
  `None`

*1번 문제의 `orientation` 함수를 이용하여 반시계/시계 방향을 판단하고,
반시계 방향이면 2번 문제의 그대로 사용하고 시계 방향인 경우 "UP"/"DOWN"과
"LEFT"/"RIGHT"의 역할을 바꾸어서 비슷하게 처리하면 된다.*

**4.** 2번 문제에서는 다각형 내부 및 경계선(다각형을 이루는 선분들의)
임의의 위치에 설치할 수 있는 경우를 고려하였다. 이 문제에서는 다각형의
**경계선**에만 CCTV를 설치할 수 있는 경우를 다룬다.

다음과 같이 정의된 함수 `surveillableLength`를 완성하라:
- 입력: rectilinear polygon을 표현하는 `Point` object들의 리스트(수업
  문제와 마찬가지로 반시계 방향 순서로 주어짐)
- 리턴값: polygon 내부의 모든 점들을 모두 감시할 수 있는 CCTV 설치 가능
  구간 길이의 총 합

*수업때 만들었던 `surveillableRegion` 함수를 이용하여 설치 가능
직사각형을 먼저 계산한 후, 이 직사각형과 polygon의 경계선이 겹치는
구간을 찾으면서 더하면 된다.*

**5.** 2번 문제에서는 다각형 내부 및 경계선의 임의의 위치에 CCTV를 설치할
수 있는 경우를 고려하였고, 4번 문제에서는 다각형의 경계선에만 CCTV를
설치할 수 있는 경우를 다루었다. 이 문제에서는 다각형의 **꼭짓점**(즉,
polygon을 표현하는 `Point`들)에만 CCTV를 설치할 수 있는 경우를 고려한다.

다음과 같이 정의된 함수 `surveillablePoint`를 완성하라:
- 입력: rectilinear polygon을 표현하는 `Point` object들의 리스트(수업
  문제와 마찬가지로 반시계 방향 순서로 주어짐)
  - 수업 문제에서와 마찬가지로 polygon의 경계를 이루는 선분들이
    교차하는 입력은 주어지지 않음(즉, polygon 내부는 하나의 연결된
    영역)
- 리턴값: (수업 문제에서와 마찬가지로 CCTV를 1대만 설치했을 때) polygon
  내부의 모든 점들을 감시할 수 있는 CCTV 설치 가능 꼭지점들의 갯수
  - 예: 입력이 (경계가 겹쳐지는 부분이 있는 ㄴ자 모양) 그림과 같이
    주어진 경우 설치 가능 꼭지점은 2개

*두개의 `Point` object `p1`과 `p2`가 같은 지점을 나타내는 지를 판단하기
위해 `p1 == p2`를 사용하면 의도와 다르게 작동한다. `Point` class 내부에
정의된 `equal` 함수를 사용하여 `p1.equal(p2)`로 이를 판단하면 된다.*
