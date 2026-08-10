# Problem Set

### 필수 문제

**1. `inOrder(filename)`** — 파일의 모든 단어가 사전순으로 정렬되어 있는지 여부.

```python
def inOrder(filename):
    words = open(filename, "r").read().split()
    n = len(words)
    # ADD ADDITIONAL CODE HERE!

print(inOrder("dictionary.txt"))   # True
print(inOrder("dictionary2.txt"))  # False
```

**2. `isPalindrome(s)` / `maxPalindrome(filename)`** — `isPalindrome`은 문자열이
회문(앞뒤로 읽어도 같음, 예: `"deified"`)인지 판정. `maxPalindrome`은 파일에서
가장 긴 회문을 반환(동점이면 먼저 나온 것).

```python
def isPalindrome(s):
    # ADD ADDITIONAL CODE HERE!

def maxPalindrome(filename):
    words = open(filename, "r").read().split()
    n = len(words)
    # ADD ADDITIONAL CODE HERE!

print(maxPalindrome("dictionary.txt"))   # malayalam
print(maxPalindrome("dictionary2.txt"))  # deified
```

**3. `isAbecedarian(s)` / `countAbecedarian(filename)`** — abecedarian은 모든
글자가 알파벳 순서로 나타나는 단어(예: `"aaabb"`, `"acorsy"`). `isAbecedarian`은
판정 함수, `countAbecedarian`은 파일에서 그 개수를 센다.

```python
def isAbecedarian(s):
    # ADD ADDITIONAL CODE HERE!

def countAbecedarian(filename):
    # ADD ADDITIONAL CODE HERE!

print(countAbecedarian("dictionary.txt"))   # 582
print(countAbecedarian("dictionary2.txt"))  # 10
```

**4. `disjoint(s1, s2)`** — 두 문자열이 겹치는 글자가 하나도 없으면 `True`.

```python
def disjoint(s1, s2):
    # ADD ADDITIONAL CODE HERE!

print(disjoint("ace", "a"))          # False
print(disjoint("aurora", "steel"))   # True
print(disjoint("elephant", "long"))  # False
```

**5. `countWordWithE(filename)`** — 파일에서 알파벳 `"e"`를 포함한 단어의 개수.

```python
def countWordWithE(filename):
    # ADD ADDITIONAL CODE HERE!

print(countWordWithE("dictionary.txt"))   # 75473
print(countWordWithE("dictionary2.txt"))  # 23
```

**6. `countPrime(filename)`** — 파일에서 길이가 소수인 단어의 개수.

```python
def countPrime(filename):
    # ADD ADDITIONAL CODE HERE!

print(countPrime("dictionary.txt"))   # 37114
print(countPrime("dictionary2.txt"))  # 72
```

**7. `istcdl(s)` / `tcdl(filename)`** — "3연속 이중 글자"(예: `"bookkeeper"`)를
가졌는지 판정하고, 파일에서 그런 단어를 모두 모아 리스트로 반환.

```python
def istcdl(s):
    # ADD ADDITIONAL CODE HERE!

def tcdl(filename):
    words = open(filename, "r").read().split()
    n = len(words)
    # ADD ADDITIONAL CODE HERE!

print(tcdl("dictionary.txt"))  # ['bookkeeper','bookkeepers','bookkeeping']
```

**8. `meter()`** — 인자 없이, 100000 ≤ i ≤ 999996 범위에서 아래 네 조건을 모두
만족하는 정수 `i`를 전부 찾아 리스트로 반환:
- `i`의 마지막 네 자리가 회문
- `i+1`의 마지막 다섯 자리가 회문
- `i+2`의 중간 네 자리가 회문
- `i+3`의 여섯 자리 전체가 회문

```python
def isPalindrome(s):
    n = len(s)
    for i in range(n // 2):
        if s[i] != s[n - 1 - i]:
            return False
    return True

def check(i):
    # ADD ADDITIONAL CODE HERE!

def meter():
    # ADD ADDITIONAL CODE HERE!

print(meter())  # [198888, 199999]
```

**9. `triangle(n)`** — 길이가 같은 성냥개비 `n`개로, (부러뜨리지 않고 전부 사용해)
만들 수 있는 서로 합동이 아닌 삼각형의 개수를 반환.

```python
def triangle(n):
    # ADD ADDITIONAL CODE HERE!

print(triangle(9))    # 3
print(triangle(30))   # 19
print(triangle(70))   # 102
print(triangle(400))  # 3333
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만 도움이 되므로 시간이 남으면
시도해볼 것을 권장 (대부분 기출문제).*

**10. `maxTwinPrimes(n)`** — 두 소수 \\(p_1, p_2\\)가 \\(p_2-p_1=2\\)를 만족하면
twin primes. `n` 이하에서 \\(p_1 < p_2\\)가 가장 큰 쌍 `[p1, p2]`를 반환.

```python
print(maxTwinPrimes(5))  # [3, 5]
```

**11. `sym_diff(L, M)`** — 두 정수 리스트 `L`, `M`의 symmetric difference(정확히
한쪽에만 속한 숫자들, 중복 없이 오름차순)를 반환.

```python
print(sym_diff([3,4,7,6,5,3,4], [4,7,4,7,1,2,1]))  # [1,2,3,5,6]
```

**12. `multiple(L1, L2)`** — `L1`의 모든 숫자가 `L2`의 어떤 숫자의 배수이면
`True`.

```python
print(multiple([14,24,18,35,39], [6,13,7]))  # True
```
