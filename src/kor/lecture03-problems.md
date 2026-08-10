# Problem Set

### 필수 문제

**1.** Write a function `inOrder`:
- input parameter: a string `filename` that represents the name of the
  input file
- return value: `True` if all the words in the file is in dictionary
  order, `False` otherwise

힌트:
- `words = open(filename,"r").read().split()`는 이름이 `filename`인 파일의
  내용을 모두 읽어들인 후 단어단위로 조개서 단어들의 list를 `words`로 대입
  (즉, `words[0], words[1], words[2], ...`는 파일에 포함된 단어들)
- 두 단어간의 dictionary order는 `<`, `>`로 판단
- "for all" 패턴의 for 루프를 사용
- for 루프를 `range(n)`와 써야 할까, `range(n-1)`와 써야 할까?

```python
def inOrder(filename):
    words = open(filename, "r").read().split()
    n = len(words)
    # ADD ADDITIONAL CODE HERE!

print(inOrder("dictionary.txt"))   # True
print(inOrder("dictionary2.txt"))  # False
```

**2.** Write a function `isPalindrome`:
- input parameter: a string `s`
- return value: `True` if `s` is a palindrome, `False` otherwise
  (단어가 앞으로 읽으나 뒤로 읽으나 같으면 palindrome, 예: `"deified"`,
  `"malayalam"`, `"abccba"`)

Write a function `maxPalindrome` using the function `isPalindrome`:
- input parameter: a string `filename`
- return value: the longest palindrome in the file; if there is a tie,
  return the *first* occurrence (가장 긴 palindrome이 두개 이상 있으면 가장
  먼저 나타나는 것)

힌트:
- `isPalindrome`은 "for all" 패턴의 for 루프를 사용 (`s[i]`와 `s[n-1-i]`를
  쭉 비교)
- `maxPalindrome`은 max/min 패턴의 for 루프를 사용 ("최대 길이"를 찾는
  것이 아니고 "최대 길이" palindrome을 찾는 것이므로 `maxLen`뿐만 아니라
  `maxWord`도 유지해야 함)

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

**3.** Write a function `isAbecedarian`:
- input parameter: a string `s`
- return value: `True` if `s` is an abecedarian, `False` otherwise — a
  word is called an "abecedarian" if all the letters in the word appear in
  alphabetical order (e.g. `"aaabb"`, `"acknow"`, `"acorsy"`, `"adempt"`,
  `"beknow"`)

Write a function `countAbecedarian`:
- input parameter: a string `filename`
- return value: the number of abecedarians in the file

힌트:
- `isAbecedarian`은 "for all" 패턴의 for 루프를 사용
- `countAbecedarian`은 counter 패턴의 for 루프를 사용

```python
def isAbecedarian(s):
    # ADD ADDITIONAL CODE HERE!

def countAbecedarian(filename):
    # ADD ADDITIONAL CODE HERE!

print(countAbecedarian("dictionary.txt"))   # 582
print(countAbecedarian("dictionary2.txt"))  # 10
```

**4.** Write a function `disjoint`:
- input parameter: two strings `s1, s2`
- return value: `True` if `s1` and `s2` do not have any same character,
  `False` otherwise

힌트:
- "for all" 패턴의 for 루프를 사용
- `s1`의 각 글자가 `s2`에 포함되는 지를 `s1[i] in s2`와 같은 boolean expr로
  체크

```python
def disjoint(s1, s2):
    # ADD ADDITIONAL CODE HERE!

print(disjoint("ace", "a"))          # False
print(disjoint("aurora", "steel"))   # True
print(disjoint("elephant", "long"))  # False
```

**5.** Write a function `countWordWithE`:
- input parameter: a string `filename`
- return value: the number of words that contain the alphabet "e" in the
  file

Counter 패턴의 for 루프를 사용.

```python
def countWordWithE(filename):
    # ADD ADDITIONAL CODE HERE!

print(countWordWithE("dictionary.txt"))   # 75473
print(countWordWithE("dictionary2.txt"))  # 23
```

**6.** Write a function `countPrime`:
- input parameter: a string `filename`
- return value: the number of words with prime length in the file (소수
  길이를 갖는 단어의 갯수)

`isPrime`을 사용한 counter 패턴의 for 루프를 사용.

```python
def countPrime(filename):
    # ADD ADDITIONAL CODE HERE!

print(countPrime("dictionary.txt"))   # 37114
print(countPrime("dictionary2.txt"))  # 72
```

**7.** Write a function `istcdl`:
- input parameter: a string `s`
- return value: `True` if `s` has three consecutive double letters, `False`
  otherwise (같은 글자가 두개 연속으로 나오는 경우가 세번 연속으로 있는
  단어면 `True`. e.g. `"bookkeeper"`, `"Missiippi"`, `"aaaabb"`)

Write a function `tcdl` using the function `istcdl`:
- input parameter: a string `filename`
- return value: the list of all the words with three consecutive double
  letters

힌트:
- `istcdl`은 "for all" 패턴의 for 루프를 사용 (`s[i:i+5:2]`의 의미는?
  `s[i+1:i+6:2]`는?)
- `tcdl`에서 새로운 list를 만들어야 하는데, 지난주처럼 다음 형태의 코드를
  사용:
  ```python
  L = []
  for i in range(n):
      if some_condition_on(words[i]):
          L.append(words[i])
  return L
  ```

```python
def istcdl(s):
    # ADD ADDITIONAL CODE HERE!

def tcdl(filename):
    words = open(filename, "r").read().split()
    n = len(words)
    # ADD ADDITIONAL CODE HERE!

print(tcdl("dictionary.txt"))  # ['bookkeeper','bookkeepers','bookkeeping']
```

**8.** Write a function `meter`:
- input parameter: none
- return value: 다음 조건을 만족하는 모든 정수 `i`의 list
  - `100000 <= i <= 999996`
  - `i`의 마지막 네자리는 palindrome
  - `i+1`의 마지막 다섯자리는 palindrome
  - `i+2`의 중간 네자리는 palindrome
  - `i+3`의 여섯자리 전체는 palindrome

힌트:
- `meter`에서 새로운 list를 만들어야 하는데, 다음 형태의 코드 사용:
  ```python
  L = []
  for i in range(100000, ??):
      if some_condition_on(i):
          L.append(i)
  return L
  ```
- 위 코드의 `some_condition`을 체크해주는 boolean 함수 `check`를 따로
  만들어 이용
  - 함수 `check`에서 `isPalindrome`을 이용
- 정수 `i`를 string으로 바꾸려면 `str(i)`
- `str(i+1)[1:]`와 같이 slicing을 이용하여 원하는 자리만큼 잘라내고 이를
  `isPalindrome`으로 체크

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

**9.** 다음과 같은 상황을 생각하자: 길이가 같은 성냥개비들이 주어지고, 이
성냥개비들로 삼각형을 만들려고 한다. 삼각형의 각 변은 하나 이상의
성냥개비로 이루어지며, 성냥개비를 부러뜨려 여러 조각으로 나누는 것은
허용되지 않는다. 주어진 성냥개비를 모두 사용해야 한다. 그렇다면, 주어진
개수의 성냥개비로 몇 개의 삼각형을 만들 수 있을까? 예를 들어, 9개의
성냥개비로 만들 수 있는 삼각형의 개수는 **합동(congruence)** 관계 하에서
3개다(즉, 합동인 여러개의 삼각형들은 하나의 삼각형으로 count).

Write a function `triangle`:
- input parameter: a positive integer `n`
- return value: the number of triangles that can be formed with `n`
  matchsticks under the above constraints and the congruence relation
  - 합동인 여러개의 삼각형들은 하나의 삼각형으로 count
  - 하나의 삼각형도 형성할 수 없으면 `0`을 return

```python
def triangle(n):
    # ADD ADDITIONAL CODE HERE!

print(triangle(9))    # 3
print(triangle(30))   # 19
print(triangle(70))   # 102
print(triangle(400))  # 3333
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**10.** 두 소수 `p1, p2`가 `p2 - p1 = 2`를 만족하면 **twin primes**라고
부른다. 다음과 같이 정의된 함수 `maxTwinPrimes`를 완성하라:
- 입력: 정수 `n >= 5`
- 리턴값: 리스트 `[p1,p2]`; `p1, p2`는 `p1 < p2 <= n`인 가장 큰 twin
  primes
  - 예: `maxTwinPrimes(5)`는 `[3,5]`를 리턴

```python
print(maxTwinPrimes(5))  # [3, 5]
```

**11.** 주어진 두개의 정수 리스트 `L, M`에 대해, 다음 조건을 만족하는
리스트 `D`를 `L`과 `M`의 **symmetric difference**로 부르자:
- `D`는 `L`과 `M` 중 정확히 하나의 리스트에 포함된 숫자들로 구성된다
  (D, L, M에 대응되는 집합을 D, L, M로 나타내면 \\(D = (L \cup M)
  \setminus (L \cap M)\\))
- `D`에는 같은 숫자들이 중복되어 나타나지 않는다
- `D`의 숫자들은 증가하는 순서로 나열되어 있다

예를 들어, `[1,2,3,5,6]`은 `[3,4,7,6,5,3,4]`와 `[4,7,4,7,1,2,1]`의
(유일한) symmetric difference이다.

다음과 같이 정의된 함수 `sym_diff`를 완성하라:
- 입력: 정수 리스트 `L`와 `M`
- 리턴값: `L`과 `M`의 symmetric difference

```python
print(sym_diff([3,4,7,6,5,3,4], [4,7,4,7,1,2,1]))  # [1,2,3,5,6]
```

**12.** 다음과 같이 정의된 함수 `multiple`을 완성하라:
- 입력: 두 정수 리스트 `L1, L2`
- 리턴값: `L1`에 속한 각 숫자들이 `L2`에 속한 어떤 숫자의 배수이면
  `True`, 아니면 `False` (\\(\forall x \in L_1,\, \exists y \in L_2,\ x
  \text{ is a multiple of } y\\))
  - 예: `multiple([14,24,18,35,39], [6,13,7])`는 `True`를 리턴해야 하는데
    `14, 35`는 `7`의 배수, `24, 18`은 `6`의 배수, `39`는 `13`의 배수므로

```python
print(multiple([14,24,18,35,39], [6,13,7]))  # True
```
