# Topics Covered

*원본 강의자료: [lecture00-slides.pdf](lecture00-slides.pdf)*

## Functions

대부분의 경우 `return`으로 값을 돌려주는 함수를 만들게 된다:

```python
def distance(x1,y1,x2,y2):
    u, v = (x2-x1)**2, (y2-y1)**2
    return math.sqrt(u+v)

print(distance(0,0,3,4))    # 화면에 5를 뿌림
```

가끔은 `return`값이 없는 함수도 필요하다 — 이 경우엔 함수 내부에서
`print`를 하게 되고, 별도로 `return`을 쓰지 않으면 자동으로 `None`이
반환된다:

```python
def distance(x1,y1,x2,y2):
    u, v = (x2-x1)**2, (y2-y1)**2
    print(math.sqrt(u+v))    # 여기서 화면에 5를 뿌림

distance(0,0,3,4)             # return value가 없음
print(distance(0,0,3,4))      # 화면에 None을 출력
```

## Conditionals

**`if`-`else` 문법**: `else` 블록은 생략 가능하다.

```python
def f(x,y):
    if x > 0:
        print("positive")
    else:
        print("zero/negative")

    if x > 0 and y > 0:
        print("both positive")
```

**Chained `if`-`elif`-`else`**: `elif b2`는 `b1`이 `False`이고 `b2`가
`True`일 때 실행되고, 그다음 `elif b3`는 `b1`도 `b2`도 아니고 `b3`가
`True`일 때 실행된다 — 즉 위에서부터 순서대로 하나만 걸린다.

```python
def f(x):
    if x > 0:
        print("positive")
    elif x < 0:
        print("negative")
    else:
        print("zero")
```

**Nested vs. flat(pruning)**: 중첩된 `if`를 상황에 따라 펼치거나 반대로
가지치기(pruning)해서 단순화할 수 있다 — 둘은 동치다:

```python
def absoluteValue(x):
    if x < 0:
        return -x
    else:
        return x

# 위와 동치: else 블록 안에만 return이 있다면 else: 자체를 생략 가능
def absoluteValue(x):
    if x < 0:
        return -x
    return x
```

**Boolean 함수**: 복잡한 조건을 `if` 안에 감추고 싶을 때 유용하다.

```python
def onePositive(x,y,z):
    if x > 0 and y <= 0 and z <= 0:
        return True
    if x <= 0 and y > 0 and z <= 0:
        return True
    if x <= 0 and y <= 0 and z > 0:
        return True
    return False

if onePositive(x,y,z):
    print("Exactly one number is positive.")
```

Boolean 표현식은 그 자체로 이미 값이므로, `if ... : return True / else:
return False` 형태는 `return boolean_expr`로 줄일 수 있다:

```python
def lessThan(x,y):
    if x < y:
        return True
    else:
        return False

# 위와 동치
def lessThan(x,y):
    return x < y
```

같은 이유로 `b == True`는 `b`와, `b == False`는 `not b`와 같다 — `==
True`/`== False`는 지우는 게 좋다(특히 `=`와 `==`를 헷갈리는 실수를
피하기 위해서도).

```python
def singleDigit(x):
    return 0 <= x < 10

# singleDigit(a) == True and singleDigit(b) == False 대신
if singleDigit(a) and not singleDigit(b):
    ...
```

## Loops

**`for` + `range(·)`**: `range(m,n)`은 `range(m,n,1)`과 같고, `range(n)`은
`range(0,n,1)`과 같다.

```python
for k in range(n):
    print(k)              # 0 1 ... n-1

for k in range(1, n+1):
    print(k)              # 1 2 ... n

for k in range(10, 21, 2):
    print(k)              # 10 12 14 16 18 20

for k in range(n, 0, -1):
    print(k)              # n n-1 ... 2 1
```

**합/곱 누적**:

```python
def sum(n):
    x = 0          # 덧셈에 대한 항등원은 0
    for i in range(1,n+1):
        x += i
    return x

def factorial(n):
    x = 1          # 곱셈에 대한 항등원은 1
    for i in range(1,n+1):
        x *= i
    return x
```

**중첩 `for`문**으로 구구단표 같은 2차원 출력을 만들 수 있다:

```python
for i in range(1, 10):
    for j in range(1, 10):
        print(i*j, end=" ")
    print()
```

**`while`문**: `boolean_expression`이 참인 동안 반복한다.

```python
def countDigits(n):
    counter = 0
    while n > 0:
        counter += 1
        n = n // 10
    return counter

print(countDigits(713))   # 3
```

## Lists

**생성**: 초기값을 주면서 만들거나, `[None]*n`으로 빈 자리를 만든 뒤 나중에
채운다.

```python
number = [2, 5, 8, 11, 14]

number = [None] * 5   # [None, None, None, None, None]
number[0] = 2
```

**`len(·)`과 `[i]`로 읽기/쓰기**: index는 `0`부터 `len(·)-1`까지다(`1`부터가
아님).

```python
for i in range(len(number)):
    number[i] = 3*i + 2
```

**함수의 입력/출력으로 쓰이는 list**:

```python
def func(b):
    a = [None] * len(b)
    for i in range(len(a)):
        a[i] = b[i] + 1
    return a

num = [2, 4, 3, 1, 7, 2, 5, 6]
c = func(num)
print(c)    # [3, 5, 4, 2, 8, 3, 6, 7]
```

## Loop Patterns

대부분의 `for` 루프는 아래 패턴들의 조합으로 만들어질 수 있다.

**1. 최댓값/최솟값 패턴** — 값 자체가 아니라 그 값의 **index**가 필요할
수도 있다는 점에 유의:

```python
def findMin(numbers):
    min = numbers[0]
    for i in range(len(numbers)):
        if numbers[i] < min:
            min = numbers[i]
    return min

def findMinIndex(numbers):
    minIndex = 0
    for i in range(len(numbers)):
        if numbers[i] < numbers[minIndex]:
            minIndex = i
    return minIndex
```

**2. Counter 패턴** — 어떤 조건을 만족하는 원소의 개수를 센다:

```python
def countPrime(numbers):
    counter = 0
    for i in range(len(numbers)):
        if isPrime(numbers[i]):    # boolean function
            counter += 1
    return counter
```

**3. Quantifier 패턴("for some" / "for all")** — 드모르간 법칙(De Morgan's
laws) \\(\forall x, p(x) \equiv \neg(\exists x, \neg p(x))\\)에 따라, "for
all" 패턴은 "for some" 패턴의 부정으로 만들 수 있다:

```python
def somePositive(numbers):
    for i in range(len(numbers)):
        if numbers[i] > 0:
            return True
    return False

def allPositive(numbers):
    for i in range(len(numbers)):
        if not (numbers[i] > 0):   # numbers[i] <= 0
            return False
    return True
```

이번 학기에 자주 쓰이는 "for all" 패턴의 예시로, 소수 판별("p is prime"
≡ "p%i != 0 for all i")이 있다:

```python
def isPrime(p):
    if p < 2:
        return False
    for i in range(2, p//2+1):
        if not (p%i != 0):    # p%i == 0
            return False
    return True
```
