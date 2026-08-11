# Topics Covered

## `range(·)`는 사실 list

`range(n)`은 `list(range(n))`이 곧 `[0,1,...,n-1]`인 것처럼, 사실 하나의
list다(수학의 "for each \\(i \in \{0,1,\ldots,n-1\}\\)"와 비슷하되, Python은
순서가 명시적으로 정해져 있다는 차이가 있음).

```python
range(n)      # [0, 1, ..., n-1]
range(m, n)   # [m, m+1, ..., n-1]
range(m, n, k)  # [m, m+k, m+2k, ...]  (n을 넘기 직전까지)

for i in range(10, 21, 3):
    total += i   # 10+13+16+19
```

루프 변수 `i`를 루프 안에서 직접 바꾸는 것은 에러는 아니지만, 매 iteration마다
`range(·)`가 준 값으로 다시 초기화되므로 원하는 효과를 내지 못한다 — 지양할 것.

## List Traversal: Index 방식 vs. 직접 방식

리스트를 훑는 두 가지 방법이 있다.

```python
S = [2, 4, 2, 9, 5]

# ① index로 간접적으로 훑기
total = 0
for i in range(len(S)):
    total += S[i]

# ② 원소를 직접 건드리며 훑기
total = 0
for x in S:
    total += x
```

두 방식 다 존재 이유가 있다: **순서/위치 정보가 필요 없다면(예: 합 계산)
직접 방식(`for x in S`)이 훨씬 간결**하다. 반대로 **이웃한 원소를 비교하는
등 인덱스가 필요하다면(예: 단조증가 판정, `S[i]`와 `S[i+1]` 비교) index
방식**을 써야 한다.

## `break` / `continue`

`break`는 루프를 즉시 빠져나가고, `continue`는 현재 iteration만 건너뛰고
루프는 계속된다. 다중 루프에서는 **가장 안쪽 루프만** 영향을 받는다.
코드 구조가 복잡해지므로 boolean function 등으로 대체 가능하면 가능한 한
피하는 것이 좋다.

```python
for i in range(8):
    if i == 5:
        break
    print(i)
# 0 1 2 3 4

for i in range(8):
    if i in [3, 5]:
        continue
    print(i)
# 0 1 2 4 6 7
```

## `for` 루프의 3가지 기본 패턴

거의 모든 `for` 루프는 아래 세 패턴의 조합으로 만들어진다.

**① Maximum/Minimum** — 최솟값(또는 최댓값)뿐 아니라 그 **인덱스**가
필요한 경우도 있다는 점에 유의:

```python
def findMin(numbers):
    m = numbers[0]
    for i in range(len(numbers)):
        if numbers[i] < m:
            m = numbers[i]
    return m

def findMinIndex(numbers):
    minIndex = 0
    for i in range(len(numbers)):
        if numbers[i] < numbers[minIndex]:
            minIndex = i
    return minIndex
```

**② Counter** — 조건을 만족하는 원소의 개수. 조건이 복잡하면 boolean
function으로 분리해 넣으면 코드가 그대로 재사용된다:

```python
def countPrime(numbers):
    counter = 0
    for i in range(len(numbers)):
        if isPrime(numbers[i]):   # boolean function
            counter += 1
    return counter
```

**③ Quantifier ("for some" / "for all")** — "어떤 원소가 조건을
만족하는가"(∃)와 "모든 원소가 조건을 만족하는가"(∀)는 사실 De Morgan's
law로 연결된 짝이다: \\(\forall x,\, p(x) \equiv \neg\big(\exists x,\, \neg
p(x)\big)\\).

```python
def somePositive(numbers):        # "for some" — 찾으면 즉시 True
    for i in range(len(numbers)):
        if numbers[i] > 0:
            return True
    return False

def allPositive(numbers):         # "for all" — 반례를 찾으면 즉시 False
    for i in range(len(numbers)):
        if not (numbers[i] > 0):
            return False
    return True
```

이번 학기 자주 쓰이는 함수인 소수 판별 `isPrime(p)`도 사실 "for all"
패턴이다: "`p`가 소수" ≡ "모든 `i`에 대해 `p % i != 0`":

```python
def isPrime(p):
    if p < 2:
        return False
    for i in range(2, p//2 + 1):
        if not (p % i != 0):   # p % i == 0 — 반례(약수) 발견
            return False
    return True
```

## Example: File I/O

파일을 읽어 단어 리스트로 만드는 표준 패턴:

```python
words = open("input.txt", "r").read().split()
```

`open(filename, "r")`로 읽기 전용으로 열고, `.read()`로 전체 내용을
하나의 string으로 읽은 뒤, `.split()`으로 공백 기준으로 쪼개 단어들의
list를 만든다. 이 세 단계를 한 줄로 이어 쓴 것이 바로 위 코드다.

이 패턴과 Maximum 패턴을 합치면, 파일에서 가장 긴 단어를 찾을 수 있다.
**길이가 아니라 단어 자체**를 반환해야 하므로, `maxLen`뿐 아니라 그 길이를
가진 단어 `maxWord`도 함께 유지해야 한다:

```python
def longestWord(filename):
    words = open(filename, "r").read().split()
    n = len(words)
    maxWord = ""
    maxLen = 0
    for i in range(n):
        s = words[i]
        if maxLen < len(s):
            maxWord = s
            maxLen = len(s)
    return maxWord
```

(Problem Set의 `maxPalindrome`도 구조는 똑같지만, "가장 긴 단어"가 아니라
"가장 긴 palindrome"을 찾아야 하므로 `isPalindrome`으로 걸러내는 조건이
하나 더 필요하다.)
