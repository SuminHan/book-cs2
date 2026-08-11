# Problem Set

### 필수 문제

**1.** Write a function `deleteThree`:
- input parameter: a list `L`
- return value: the list obtained by removing all occurrences of `3`
  (L에서 3을 모두 제거하여 얻은 list)

새로운 list를 만들 때는 `[]`로 초기화한 후, `M.append(·)`로 하나씩 붙여나가면
된다.

```python
M = []
for i in range(len(L)):
    if some_condition_on(L[i]):
        M.append(??)

return M
```

이 문제의 경우 위의 `some_condition`과 `??`을 뭘로 채우면 될까?

```python
def deleteThree(L):
    # ADD ADDITIONAL CODE HERE!

print(deleteThree([2,5,7,3,2,8,3,3]))  # [2,5,7,2,8]
print(deleteThree([2,3,7,3,2,8,3,3]))  # [2,7,2,8]
print(deleteThree([3,3,7,3,2,8,3,3]))  # [7,2,8]
```

**2.** Write a function `delete`:
- input parameter: a list `L` and an integer `e`
- return value: the list obtained by removing all occurrences of `e`
  (L에서 e를 모두 제거하여 얻은 list)

```python
def delete(L, e):
    # ADD ADDITIONAL CODE HERE!

print(delete([2,5,7,3,2,8,3,3], 3))  # [2,5,7,2,8]
print(delete([2,3,7,3,2,8,3,3], 2))  # [3,7,3,8,3,3]
print(delete([2,2,7,2,2,2,2,2], 2))  # [7]
```

**3.** Write a function `kthSmallest`:
- input parameter: an integer list `L` and an integer `k` s.t.
  `1 <= k <= len(L)`
- return value: the k-th smallest integer in `L`

`L.sort()`를 사용하여 정렬. `M = L.sort()`로 하면 `L`은 정렬된 list이고
`M`은 `None`임에 유의. `L`의 k번째 원소는 `L[k]`인가? `L[k-1]`인가?

```python
def kthSmallest(L, k):
    # ADD ADDITIONAL CODE HERE!

print(kthSmallest([3,4,2,8,8], 1))  # 2
print(kthSmallest([3,4,2,8,8], 2))  # 3
print(kthSmallest([3,4,2,8,8], 3))  # 4
print(kthSmallest([3,4,2,8,8], 4))  # 8
```

**4.** Write a function `same`:
- input parameter: two lists `L1`, `L2`
- return value: `True` if `L1`과 `L2`가 같은 원소를 같은 개수만큼 가지면,
  `False` otherwise

`L1 == L2`는 list `L1, L2`의 내용이 똑같으면 `True`, 아님 `False`. List의
원소들을 정렬해서 비교해보면 어떨까?

```python
def same(L1, L2):
    # ADD ADDITIONAL CODE HERE!

print(same([2,3,2,7], [2,7,2,3]))  # True
print(same([2,5,7,8], [2,3,4,5]))  # False
print(same([1,1,2,3], [1,2,1,3]))  # True
print(same([2,3,5,5], [2,2,5,3]))  # False
```

**5.** Write a function `makeSet`:
- input parameter: a list `L`
- return value: the new sorted list which contains every element of `L`
  exactly once (L의 원소들을 중복없이 정확히 하나씩만 포함한, 정렬된 list)

1, 2번 문제의 코드 형태와 유사. `L[i]`가 지금까지 만들어둔 `M`에 포함되지
않을 때만 `append`하면 됨. `x in L`은 list `L`에 `x`가 포함되어 있으면
`True`. `x not in L`이나 `not (x in L)`은 반대.

```python
def makeSet(L):
    # ADD ADDITIONAL CODE HERE!

print(makeSet([1,1,3,5]))        # [1,3,5]
print(makeSet([2,1,2,8,8]))      # [1,2,8]
print(makeSet([3,4,5,6,7,3,4]))  # [3,4,5,6,7]
```

**6.** Write a function `sortId`:
- input parameter: a list `L` of strings in which ID and names of students
  appear alternately
- return value: the sorted list of `L` according to students' ID

기본적인 형태는 1, 2번과 같이 `M = []`로 초기화하고 하나씩 더해가면서
return할 list를 만들면 됨. `ID = L[::2]`로 하면 ID는 뭘까? (Python shell에서
test해보길 추천) `y = L.index(x)`로 하면 `y`값은 `L`에 등장하는 첫번째 `x`의
index (L에 `x`가 없으면 error뜨니 `x`가 `L`에 확실히 존재할 경우에만
`.index(·)` 사용).

```python
def sortId(L):
    # ADD ADDITIONAL CODE HERE!

print(sortId(["14-002","Kim","13-009","Lee","16-005","Na","15-003","Kim"]))
# ['13-009','Lee','14-002','Kim','15-003','Kim','16-005','Na']
```

**7.** Write a function `countA`:
- input parameter: a string `s`
- return value: the number of `"A"` in the string `s`

다음을 이용: Counter pattern의 for loop —

```python
counter = 0
for i in range(len(s)):
    if some_condition_on(s[i]):
        counter += 1

return counter
```

String comparison operation `==`를 이용하여 boolean expression 만들기:
`s[i] == "A"`.

```python
def countA(s):
    # ADD ADDITIONAL CODE HERE!

print(countA("AbAA"))        # 3
print(countA("bcdAAAdfAA"))  # 5
print(countA("abc"))         # 0
```

**8.** Write a function `countChar`:
- input parameter: a string `s` and a character `c` (character는 길이가 1인
  문자열, e.g. `"a"`)
- return value: the number of `c` in the string `s`

```python
def countChar(s, c):
    # ADD ADDITIONAL CODE HERE!

print(countChar("AbAA","b"))        # 1
print(countChar("AbAA","A"))        # 3
print(countChar("DbDD","D"))        # 3
print(countChar("bcdAAAdfAA","A"))  # 5
print(countChar("abc","A"))         # 0
```

**9.** Write a function `reverse`:
- input parameter: a string `s`
- return value: the reversed string of `s` (s를 뒤집어서 얻은 string)

`""`로 초기화한 후 `+`로 문자를 하나씩 붙여나가면서 새로운 string을 만드는
패턴:

```python
r = ""
for i in range(len(s)):
    r = r + ??

return r
```

`s`의 문자들을 가장 뒤에서부터 `r`에 붙여나가면 됨.

```python
def reverse(s):
    # ADD ADDITIONAL CODE HERE!

print(reverse("abc"))    # cba
print(reverse("abcDF"))  # FDcba
print(reverse("abcd"))   # dcba
```

**10.** Write a function `delete`:
- input parameter: a string `s` and a character `c`
- return value: the string obtained by removing all occurrences of `c` in
  `s` (s에서 c를 모두 제거하여 얻은 string)

앞 문제와 유사한 코드 형태로 만들면 됨. `s`의 문자들을 앞에서부터 `r`에
붙여나가되 `s[i] != c`일 때만 붙이면 됨 (for 루프 내부에 if 구문 필요).

```python
def delete(s, c):
    # ADD ADDITIONAL CODE HERE!

print(delete("abc","a"))       # bc
print(delete("abcDFabc","c"))  # abDFab
print(delete("abcdddd","d"))   # abc
```

**11.** Write a function `replace`:
- input parameter: a string `s`, a character `c`, and a string `to`
- return value: the string obtained by replacing all occurrences of `c` in
  `s` with `to` (s에서 c를 모두 to로 교체하여 얻은 string)

`s`의 문자들을 앞에서부터 `r`에 붙여나가되 `s[i] == c`일 때는 `s[i]` 대신에
`to`를 붙이고 아니면 `s[i]`를 그대로 붙이면 됨 (for 루프 내부에 if-else
구문 필요).

```python
def replace(s, c, to):
    # ADD ADDITIONAL CODE HERE!

print(replace("abc","a","b"))        # bbc
print(replace("abcDFabc","c","DD"))  # abDDDFabDD
print(replace("abcdddd","d","fg"))   # abcfgfgfgfg
```

**12.** Write a function `firstStr`:
- input parameter: three strings `s1, s2, s3`
- return value: the lexicographically smallest of the three strings (사전
  순서로 가장 먼저 나오는 string)

String에 대한 비교연산자 `<`의 의미는 무엇? `"abcde" < "acbde"`는 boolean
expression으로 값은 `True`. `"acbde" < "abcde"`는 boolean expression으로 값은
`False`.

```python
def firstStr(s1, s2, s3):
    # ADD ADDITIONAL CODE HERE!

print(firstStr("abcde","deabc","abc"))  # abc
print(firstStr("bcde","ebcd","bedc"))   # bcde
print(firstStr("abcde","bcd","abcd"))   # abcd
print(firstStr("cde","abced","bcd"))    # abced
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**13.** Write a function `factorize`:
- input parameter: a positive integer `n` (`n >= 2`)
- return value: the list of prime factors of `n` sorted in increasing
  order — e.g. `factorize(504)` returns `[2,3,7]` since \\(504 = 2^3 \cdot
  3^2 \cdot 7\\)

```python
print(factorize(504))  # [2, 3, 7]
```

**14.** *(1학기 Week07 P25.py에서 다루었던 문제로, `n` 값을 알려주지 않아
리스트의 길이를 미리 알 수 없도록 변경)*

A finite continued fraction is an expression of the form
\\[a_1 + \cfrac{1}{a_2 + \cfrac{1}{a_3 + \cfrac{1}{\ddots + \cfrac{1}{a_n}}}}\\]
where \\(a_1,a_2,\ldots,a_n\\) are integers satisfying \\(a_2,\ldots,a_{n-1}
\ge 1\\) and \\(a_n \ge 2\\). We express this continued fraction as the
list `[a1,a2,...,an]`. Every rational number has a unique such
representation — e.g. \\(\frac{415}{93} = 4 + \cfrac{1}{2+\cfrac{1}{6+
\frac17}}\\), i.e. `[4,2,6,7]`.

Write a function `fraction`:
- input parameter: two positive integers `numer` and `denom`
- return value: the list `[a1,a2,...,an]` representing the unique continued
  fraction of `numer/denom` — e.g. if `numer=415`, `denom=93`, the list
  `[4,2,6,7]` is returned

```python
print(fraction(415, 93))  # [4, 2, 6, 7]
```

**15.** Define a function \\(f: \mathbb{N} \to \mathbb{N}\\) by: `f(n)` = n의
각 digit를 제곱하여 더한 값. 이 문제에서는 주어진 임의의 `n`에 대해
\\(f^k(n) = \underbrace{f(f(\cdots f(n)))}_{k \text{ times}} = 1\\)이 되는 최소의
양의 정수 `k`를 찾는 것을 목표로 하는데, 예를 들어 `n=19`인 경우:
`f(19)=1²+9²=82`, `f(82)=8²+2²=68`, `f(68)=6²+8²=100`, `f(100)=1²+0²+0²=1`이므로
`k=4`가 된다.

Write a function `composition`:
- input: 정수 `n` (`2 <= n <= 1,000,000,000`)
- return value: \\(f^k(n) = 1\\)이 되는 최소의 양의 정수 `k` (이런 `k`가
  존재하지 않으면 `None`)
  - 힌트: 수열 `n, f(n), f²(n), f³(n), ...`이 무한히 증가할 수 없음을 쉽게
    보일 수 있다 (자세한 논증은 원본 문제지 참고).

**16.** 다음과 같이 `n`명의 학생 `S1,S2,...,Sn`을 `k`(`≤n`)개의 조로
분할하려고 한다: 각 학생 `Si`의 키는 `hi`이며 `h1 <= h2 <= ... <= hn`이다.
이들을 `k`개의 조로 분할하고 각 조마다 동일한 규격의 교복을 맞추려고 한다.
학생 `Si1,...,Sip`(`i1<...<ip`)로 구성된 조의 교복 제작 비용은
`(sum of h_ij) + (h_ip - h_i1)`이다(키의 총합에 키의 최댓값-최솟값 차이를
더한 값). 전체 학생들의 교복 제작 총 비용은 각 조에 대한 비용을 단순히
합한 것과 같다. 학교는 전체 교복 제작 비용을 최소화하도록 `k`개의 조로
분할하려고 한다. 각 조는 인접해 있는 학생들로 구성된다.

Write a function `minCost`:
- 입력: 리스트 `[h1,h2,...,hn]`와 양의 정수 `k` (`≤ n`)
- 리턴값: 전체 교복 제작 비용의 최솟값

```python
print(minCost([1,3,5,6,10], 3))  # 28
```
