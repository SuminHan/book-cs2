# Problem Set


[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture07.ipynb)

이미 완성된 `Point` 클래스를 참고해서 작성:

```python
class Point:
    def __init__(self, px, py):        # modifier
        self.x = px
        self.y = py

    def __str__(self):                 # pure function
        return "(" + str(self.x) + ',' + str(self.y) + ")"

    def getX(self):                    # pure function
        return self.x

    def getY(self):                    # pure function
        return self.y

    def setX(self, v):                 # modifier
        self.x = v

    def setY(self, v):                 # modifier
        self.y = v

    def distance(self, p):             # pure function
        dx = self.x - p.x
        dy = self.y - p.y
        return (dx*dx + dy*dy) ** 0.5

    def add(self, p):                  # pure function
        x = self.x + p.x
        y = self.y + p.y
        return Point(x, y)
```

### 필수 문제

**1.** Write an object type `Circle` for circles and some functions that
work on `Circle`.

1. Write a function `__init__` (**modifier**) that creates an object of
   `Circle` class:
   - input parameter: `self`, a `Point` object `c`, and an integer `r`
   - action: create state variables `center`(원의 중심) and
     `radius`(반지름)이고 initialize them to `c`와 `r`, respectively
   - return value: 없음
2. Write a function `__str__` (**pure function**) that returns a string
   for the `print` command:
   - input parameter: `self`
   - return value: the string in the following format:
     `"(center,radius)"`, e.g. `"((0,1) , 5)"`
3. Write a function `area` (**pure function**):
   - input parameter: `self`
   - return value: the area of `self` (use `math.pi` for \\(\pi\\))
4. Write a function `getRadius` (**pure function**):
   - input parameter: `self`
   - return value: the radius of `self`
5. Write a function `getCenter` (**pure function**):
   - input parameter: `self`
   - return value: the center of `self` (as `Point` object)
6. Write a function `setRadius` (**modifier**):
   - input parameter: `self` and an integer `r`
   - action: change the radius of `self` to `r`
   - return value: 없음
7. Write a function `moveTo` (**modifier**):
   - input parameter: `self` and two integers `x, y`
   - action: move the center of `self` to `Point(x,y)`
   - return value: 없음
8. Write a function `move` (**modifier**):
   - input parameter: `self` and two integers `dx, dy`
   - action: move the center of `self` by the amount of `(dx,dy)` (원중심의
     x/y 좌표를 `dx,dy`만큼 이동)
   - return value: 없음

```python
class Circle:
    def __init__(self, c, r):
        # ADD ADDITIONAL CODE HERE!

    def __str__(self):
        # ADD ADDITIONAL CODE HERE!

    def area(self):
        # ADD ADDITIONAL CODE HERE!

    def getRadius(self):
        # ADD ADDITIONAL CODE HERE!

    def getCenter(self):
        # ADD ADDITIONAL CODE HERE!

    def setRadius(self, v):
        # ADD ADDITIONAL CODE HERE!

    def moveTo(self, x, y):
        # ADD ADDITIONAL CODE HERE!

    def move(self, dx, dy):
        # ADD ADDITIONAL CODE HERE!

def test():
    p0 = Point(0, 0)
    c1 = Circle(p0, 3)
    print(c1)              # ((0,0) , 3)
    print(c1.area())       # 28.274333882308138
    print(c1.getRadius())  # 3
    print(c1.getCenter())  # (0,0)
    c1.setRadius(5)
    print(c1)              # ((0,0) , 5)
    print(c1.area())       # 78.53981633974483
    c1.moveTo(3, 4)
    print(c1)              # ((3,4) , 5)
    c1.move(1, 1)
    print(c1)              # ((4,5) , 5)

test()
```

**2.** A rational number is a number that can be represented as the ratio
of two integers. For example, `2/3` is a rational number, where `2` is a
**numerator**(분자) and `3` is a **denominator**(분모). (`7`은 분모가
암묵적으로 1인 rational number로 간주.)

Write an object type `Rational` for rational numbers and some functions
that work on the class `Rational`.

1. Write a function `__init__` (**modifier**) that creates an object of
   `Rational` class:
   - input parameter: `self` and two integers `n` and `d`
   - action: create state variables `numerator`(분자) and
     `denominator`(분모) and initialize them to `n`과 `d`, respectively
   - return value: 없음
2. Write a function `__str__` (**pure function**) that returns a string
   for the `print` command:
   - input parameter: `self`
   - return value: the string in the following format: `"7/24"`
3. Write a function `toFloat` (**pure function**):
   - input parameter: `self`
   - return value: the float value of `self` (e.g. `0.29166666`)
4. Write a function `negate` (**modifier**):
   - input parameter: `self`
   - action: reverse the sign of `self` (hint: reverse the sign of the
     numerator)
   - return value: 없음
5. Write a function `invert` (**modifier**):
   - input parameter: `self`
   - action: invert `self` (hint: swap the numerator and denominator)
   - return value: 없음
6. Write a function `reduce` (**modifier**):
   - input parameter: `self`
   - action: convert `self` to the irreducible fraction(최대공약수로
     약분) (hint: make use of the provided function `gcd`)
   - return value: 없음
7. Write a function `add` (**pure function**):
   - input parameter: `self` and `r` (both are `Rational` objects)
   - return value: a new `Rational` object that represents the sum of
     `self` and `r` (in the form of irreducible fraction)
     - 반드시 덧셈 결과를 최대공약수로 약분
     - **Pure function** 형태로 만들어야 하므로 `self`와 `r`은
       변경하면 안됨
8. Write a function `mul` (**pure function**):
   - input parameter: `self` and `r` (both are `Rational` objects)
   - return value: a new `Rational` object that represents the product of
     `self` and `r` (in the form of irreducible fraction)
     - 반드시 곱셈 결과를 최대공약수로 약분
     - **Pure function** 형태로 만들어야 하므로 `self`와 `r`은
       변경하면 안됨

```python
def gcd(a, b):
    if b > a:
        a, b = b, a
    while b > 0:
        a, b = b, a % b
    return a

class Rational:
    def __init__(self, n, d):
        # ADD ADDITIONAL CODE HERE!

    def __str__(self):
        # ADD ADDITIONAL CODE HERE!

    def toFloat(self):
        # ADD ADDITIONAL CODE HERE!

    def negate(self):
        # ADD ADDITIONAL CODE HERE!

    def invert(self):
        # ADD ADDITIONAL CODE HERE!

    def reduce(self):
        # ADD ADDITIONAL CODE HERE!

    def add(self, r):
        # ADD ADDITIONAL CODE HERE!

    def mul(self, r):
        # ADD ADDITIONAL CODE HERE!

def test():
    r1 = Rational(12, 16)
    r2 = Rational(9, 6)
    print(r1, r2)   # 12/16 9/6
    r1.reduce(); r2.reduce()
    print(r1, r2)   # 3/4 3/2
    r1.negate()
    print(r1)       # -3/4
    r1.negate()
    print(r1)       # 3/4
    r1.invert()
    print(r1)       # 4/3
    r3 = r1.add(r2)
    r4 = r1.mul(r2)
    print(r3)             # 17/6
    print(r4)             # 2/1
    print(r3.toFloat())   # 2.8333333333333335
    print(r4.toFloat())   # 2.0

test()
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**3.** Write a class `Rectangle` for representing rectangles:
- Each `Rectangle` object is made up of two `Point` objects `point1` and
  `point2` (생성되는 직사각형은 가로, 세로가 각각 x축, y축에 평행하고,
  `point1`과 `point2`는 직사각형의 대각에 위치하는 두 꼭짓점이라 가정).
  `Point` class is already defined.
- Fill the body of each function in the class `Rectangle`. The exact
  requirement of each function is given as comment.
  - `min(a,b)`와 `max(a,b)`를 사용하여 두 수중 최대/최소값을 구하면 됨

```python
class Rectangle:
    def __init__(self, point1, point2):
        # Set two instance variables --> already completed.
        # We assume that all parameters are valid.
        # (point1, point2는 항상 직사각형을 생성할 수 있는 대각에 있는
        #  두 꼭짓점으로 주어진다고 가정한다.)
        self.point1 = point1
        self.point2 = point2

    def __str__(self):
        # make a string format as "[(1,1),(4,5)]" style
        # Use the function in the Point class
        # ADD ADDITIONAL CODE HERE!

    def get_min_x(self):
        # return the minimum x-value among points of the rectangle
        # ADD ADDITIONAL CODE HERE!

    def get_min_y(self):
        # return the minimum y-value among points of the rectangle
        # ADD ADDITIONAL CODE HERE!

    def get_max_x(self):
        # return the maximum x-value among points of the rectangle
        # ADD ADDITIONAL CODE HERE!

    def get_max_y(self):
        # return the maximum y-value among points of the rectangle
        # ADD ADDITIONAL CODE HERE!

    def contains(self, point3):
        # return True if the rectangle contains point3, otherwise False
        # if the point3 is on the edge of the rectangle, return True
        # ADD ADDITIONAL CODE HERE!

    def area(self):
        # return the area of rectangle
        # ADD ADDITIONAL CODE HERE!

    def isEqual(self, other):
        # return True when the rectangle is the same as other
        # r1 = Rectangle(Point(5,0), Point(2,3))
        # r2 = Rectangle(Point(2,0), Point(5,3))
        # r1.isEqual(r2) will return True
        # 즉 두 사각형이 같은 좌표 상에 위치하면 True를 return 한다.
        # ADD ADDITIONAL CODE HERE!

def test():
    p1, p2, p3, p4 = Point(1,1), Point(4,5), Point(5,0), Point(2,3)
    p5, p6, p7, p8 = Point(4,3), Point(0,0), Point(2,0), Point(5,3)
    r1, r2, r3 = Rectangle(p1,p2), Rectangle(p3,p4), Rectangle(p7,p8)

    print(r1, r2, r3)     # [(1,1),(4,5)] [(5,0),(2,3)] [(2,0),(5,3)]
    print(r1.area())      # 12
    print(r2.area())      # 9
    print(r3.area())      # 9
    print(r1.contains(p4))  # True
    print(r1.contains(p5))  # True
    print(r2.contains(p6))  # False
    print(r1.isEqual(r3))   # False
    print(r2.isEqual(r3))   # True
    print(r1.isEqual(r1))   # True

test()
```

**4.** 위와 같이 벨트 \\(B_0, B_1, \ldots, B_{n-2}\\)들로 연결된 원기둥
\\(C_0, C_1, \ldots, C_{n-1}\\)들을 고려하자(\\(n \ge 2\\)):
- 원기둥 \\(C_0, C_1, \ldots, C_{n-1}\\)는 왼쪽부터 오른쪽으로 차례대로
  배치되어 있는데, 중심이 축으로 고정되어 자유롭게 회전할 수 있다.
- 각 벨트 \\(B_i\\)는 원기둥 \\(C_i\\)와 \\(C_{i+1}\\)을 연결한다.
- 한쪽 원기둥이 회전하게 되면 벨트로 연결된 다른 원기둥도 회전하게 된다.
- 두 원기둥의 반지름의 차이에 따라 두 원기둥의 회전수가 서로 다를 수
  있다.
- 벨트가 꼬이지 않고 0자 형태로 연결될 수 있고, 8자 형태로 한번 꼬여서
  연결될 수도 있다. 이 형태에 따라 두 원기둥의 회전방향은 같을 수도 있고
  반대 방향일 수도 있다.

위 그림의 예에서 \\(C_0,C_1,C_2,C_3\\)의 반지름이 각각 10,5,1,2라고
가정하자: \\(C_0\\)을 시계방향으로 1회전시키면 \\(C_1\\)은 시계방향으로
`10/5 = 2`회전하게 된다. \\(C_1\\)을 시계방향으로 1회전시키면 \\(C_2\\)는
반시계방향으로 `5/1 = 5`회전하게 된다(\\(B_1\\)이 8자 형태로 꼬여서
\\(C_1\\)과 \\(C_2\\)를 연결하므로 두 원기둥의 회전방향은 서로 반대).
\\(C_2\\)를 시계방향으로 1회전시키면 \\(C_3\\)는 시계방향으로
`1/2`회전하게 된다.

이 문제에서는 \\(C_0\\)을 시계방향으로 1회전시켰을 때, \\(C_1, C_2,
\ldots, C_{n-1}\\)의 회전수의 총합을 계산하는 것을 목표로 한다.

다음과 같이 정의된 함수 `belt`를 완성하라:
- 입력: 원기둥 \\(C_0,C_1,\ldots,C_{n-1}\\)의 반지름을 나타내는 정수
  리스트 `L`과 벨트 \\(B_0,B_1,\ldots,B_{n-2}\\)의 연결 형태를 나타내는
  정수 리스트 `M`
  - `L[i]`는 원기둥 \\(C_i\\)의 반지름을 나타냄
  - `M[i] = 1`(벨트 \\(B_i\\)가 꼬이지 않고 0자 형태로 연결된 경우),
    `M[i] = -1`(벨트 \\(B_i\\)가 한번 꼬여서 8자 형태로 연결된 경우)
  - 위 예의 경우 `L=[10,5,1,2]`이고 `M=[1,-1,1]`
- 리턴값: \\(C_0\\)을 시계방향으로 1회전시켰을 때, \\(C_1,C_2,\ldots,
  C_{n-1}\\)의 회전수의 총합을 나타내는 `Rational` object
  - \\(C_i\\)가 반시계방향으로 회전하는 경우 회전수의 부호를 음으로
    하고, 시계방향으로 회전하면 양으로 한다. 위 예의 경우 \\(C_1, C_2,
    C_3\\)의 회전 수는 각각 `2, -10, -5`이다.
  - 위 예의 경우 `2-10-5 = -13`을 나타내는 `Rational(-13,1)`을 리턴

*본 문제의 의도는 class/object를 제대로 사용할 수 있는 지를 평가하는
것으로, 주어진 `Rational` class를 변경/추가없이 사용하고, 반드시
`Rational` object를 return해야 하며 `float`나 임의로 정의한 object를
return하면 안된다.*

```python
print(belt([10,5,1,2], [1,-1,1]))  # Rational(-13,1)
```

**5.** 6주차에 다루었던 Gaussian elimination을 사용하여 일차연립방정식의
해를 계산할 때, 해가 정수값일 경우에도 `1.9999..`나 `2.00001..`과 같이
정확하게 계산되지 않음을 경험했을 것이다. 특히, 7주차 3번 문제를
시도해봤다면 거대한 규모의 방정식을 다룰 때 오차가 매우 심하게 발생함을
경험했을 것이다.

이런 문제점이 야기되는 이유는:
- Gaussian elimination을 수행하는 과정에서 나눗셈 연산이 적용되어
  `float` 값이 발생하는데,
- `float` 값에 대한 사칙연산은 오차가 있으며 연산을 여러 번 거치면서
  오차가 매우 큰 수준으로 누적되기 때문이다.

연립방정식의 계수가 정수로 주어진 경우 계산과정을 유리수에서 수행하여
오차없이 정확한 값을 계산할 수 있는데, Gaussian elimination에서 `float`
값으로 다루어지는 `a[i][j], b[i], x[i]`들을 8주차에 다루었던 `Rational`
object로 표현하고, 이들 값에 대한 연산들을 `Rational` class 내부에
정의된 함수들을 사용하여 수행함으로써 `a[i][j], b[i], x[i]`들을
`Rational` object로 유지하고, 최종적으로 `x`도 `Rational` object의
리스트로 계산하여 리턴할 수 있고 이렇게 하면 오차가 발생하지 않는다.
예를 들어,
- Gaussian elimination을 수행하기 직전에 정수값인 `a[i][j]`와 `b[i]`들을
  `Rational` object로 바꿔주고(템플릿 코드에 이미 구현되어 있음)
- `c = a[i][p]/a[p][p]`는 `c = a[i][p].div(a[p][p])`로 변경하고
- `a[p][p] == 0`은 `a[p][p].equal(Rational(0,1))`로 변경하는

등 `Rational` class 내부의 함수들을 이용하면 유리수에 대한 Gaussian
elimination을 간단히 구현할 수 있을 것이다.

다음과 같이 정의된 함수 `gaussian_rational`을 완성하라:
- 입력: 6주차 1번 문제와 같은 형태 — `a[i][j]`와 `b[i]`는 정수로
  주어지는데, 템플릿 코드에 주어진 함수의 입구에서 이 값들을 바로
  `Rational` object로 변경함
- 리턴값: 6주차 1번 문제와 같은 리스트 `x`를 계산하되 `float` 값 대신
  `Rational` object들로 이루어진 리스트
  - 6주차 1번 문제와 마찬가지로 연립방정식의 해가 없거나 해가 무한히
    많이 존재하면 `None`을 리턴한다.
  - 분모가 1인 `Rational`의 경우 `print`하면 정수처럼 출력되는데, 이는
    `__str__` 함수에서 그렇게 되도록 정의했기 때문이다.
  - 분모가 1이라고 해서 이를 `toInt` 함수를 사용하여 정수로 변환하면
    안되고 `Rational` object 그대로 놔둬야 한다(`toInt` 함수는 이 문제가
    아니고 7주차 3번 문제에서 사용하기 위해 정의된 것이다).

*8주차에 다룬 `Rational` class 내부의 함수들이 약간 바뀌고, 새로운
함수들이 여러개 추가되었는데, 이들의 의미를 정확히 이해하고 이용하는
것이 관건이다. 예를 들어, 4번 문제에서와 마찬가지로 두개의 `Rational`
object `r1`과 `r2`가 같은 값을 나타내는 지를 판단하기 위해 `r1 == r2`를
사용하면 의도와 다르게 작동하는데, `r1.equal(r2)`를 사용해야 한다.*

```python
def gaussian_rational(a, b):
    # ADD ADDITIONAL CODE HERE!
```
