# Problem Set

### 필수 문제

**1. `deleteThree(L)`** — 리스트 `L`에서 3을 모두 제거한 리스트를 반환.

```python
def deleteThree(L):
    # ADD ADDITIONAL CODE HERE!

print(deleteThree([2,5,7,3,2,8,3,3]))  # [2,5,7,2,8]
print(deleteThree([2,3,7,3,2,8,3,3]))  # [2,7,2,8]
print(deleteThree([3,3,7,3,2,8,3,3]))  # [7,2,8]
```

**2. `delete(L, e)`** — 리스트 `L`에서 정수 `e`를 모두 제거한 리스트를 반환.

```python
def delete(L, e):
    # ADD ADDITIONAL CODE HERE!

print(delete([2,5,7,3,2,8,3,3], 3))  # [2,5,7,2,8]
print(delete([2,3,7,3,2,8,3,3], 2))  # [3,7,3,8,3,3]
print(delete([2,2,7,2,2,2,2,2], 2))  # [7]
```

**3. `kthSmallest(L, k)`** — 정수 리스트 `L`에서 `k`번째로 작은 값을 반환
(`1 ≤ k ≤ len(L)`).

```python
def kthSmallest(L, k):
    # ADD ADDITIONAL CODE HERE!

print(kthSmallest([3,4,2,8,8], 1))  # 2
print(kthSmallest([3,4,2,8,8], 2))  # 3
print(kthSmallest([3,4,2,8,8], 3))  # 4
print(kthSmallest([3,4,2,8,8], 4))  # 8
```

**4. `same(L1, L2)`** — 두 리스트가 (순서 상관없이) 같은 원소를 같은 개수만큼
가지면 `True`.

```python
def same(L1, L2):
    # ADD ADDITIONAL CODE HERE!

print(same([2,3,2,7], [2,7,2,3]))  # True
print(same([2,5,7,8], [2,3,4,5]))  # False
print(same([1,1,2,3], [1,2,1,3]))  # True
print(same([2,3,5,5], [2,2,5,3]))  # False
```

**5. `makeSet(L)`** — 리스트 `L`의 원소를 중복 없이 정확히 하나씩만 포함한, 정렬된
리스트를 반환.

```python
def makeSet(L):
    # ADD ADDITIONAL CODE HERE!

print(makeSet([1,1,3,5]))         # [1,3,5]
print(makeSet([2,1,2,8,8]))       # [1,2,8]
print(makeSet([3,4,5,6,7,3,4]))   # [3,4,5,6,7]
```

**6. `sortId(L)`** — `ID`와 이름이 번갈아 나오는 문자열 리스트 `L`을, 학생 ID
기준으로 정렬해서 반환.

```python
def sortId(L):
    # ADD ADDITIONAL CODE HERE!

print(sortId(["14-002","Kim","13-009","Lee","16-005","Na","15-003","Kim"]))
# ['13-009','Lee','14-002','Kim','15-003','Kim','16-005','Na']
```

**7. `countA(s)`** — 문자열 `s`에서 `"A"`의 개수를 반환.

```python
def countA(s):
    # ADD ADDITIONAL CODE HERE!

print(countA("AbAA"))          # 3
print(countA("bcdAAAdfAA"))    # 5
print(countA("abc"))           # 0
```

**8. `countChar(s, c)`** — 문자열 `s`에서 문자 `c`(길이 1인 문자열)의 개수를 반환.

```python
def countChar(s, c):
    # ADD ADDITIONAL CODE HERE!

print(countChar("AbAA","b"))          # 1
print(countChar("AbAA","A"))          # 3
print(countChar("DbDD","D"))          # 3
print(countChar("bcdAAAdfAA","A"))    # 5
print(countChar("abc","A"))           # 0
```

**9. `reverse(s)`** — 문자열 `s`를 뒤집은 문자열을 반환.

```python
def reverse(s):
    # ADD ADDITIONAL CODE HERE!

print(reverse("abc"))     # cba
print(reverse("abcDF"))   # FDcba
print(reverse("abcd"))    # dcba
```

**10. `delete(s, c)`** — 문자열 `s`에서 문자 `c`를 모두 제거한 문자열을 반환.

```python
def delete(s, c):
    # ADD ADDITIONAL CODE HERE!

print(delete("abc","a"))          # bc
print(delete("abcDFabc","c"))     # abDFab
print(delete("abcdddd","d"))      # abc
```

**11. `replace(s, c, to)`** — 문자열 `s`에서 문자 `c`를 전부 `to`로 교체한 문자열을
반환.

```python
def replace(s, c, to):
    # ADD ADDITIONAL CODE HERE!

print(replace("abc","a","b"))          # bbc
print(replace("abcDFabc","c","DD"))    # abDDDFabDD
print(replace("abcdddd","d","fg"))     # abcfgfgfgfg
```

**12. `firstStr(s1, s2, s3)`** — 세 문자열 중 사전순으로 가장 앞서는 문자열을
반환.

```python
def firstStr(s1, s2, s3):
    # ADD ADDITIONAL CODE HERE!

print(firstStr("abcde","deabc","abc"))    # abc
print(firstStr("bcde","ebcd","bedc"))     # bcde
print(firstStr("abcde","bcd","abcd"))     # abcd
print(firstStr("cde","abced","bcd"))      # abced
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만 도움이 되므로 시간이 남으면
시도해볼 것을 권장 (대부분 기출문제).*

**13. `factorize(n)`** — 2 이상의 정수 `n`의 소인수를 오름차순으로 정렬한 리스트를
반환.

```python
print(factorize(504))  # [2, 3, 7]
```

**14. `fraction(numer, denom)`** — 두 양의 정수 `numer`, `denom`이 주어질 때, 유리수
`numer/denom`의 연분수(continued fraction) 표현 `[a1, a2, ..., an]`을 반환.

```python
print(fraction(415, 93))  # [4, 2, 6, 7]
```

**15. `composition(n)`** — 함수 f(n)을 "n의 각 자릿수를 제곱해서 더한 값"으로 정의할
때, 주어진 정수 `n`(2 ≤ n ≤ 10억)에 대해 f를 k번 반복 적용한 값이 1이 되는 최소의
양의 정수 `k`를 반환 (그런 `k`가 없으면 `None`).

**16. `minCost(heights, k)`** — 키가 정렬된 리스트 `heights`를 인접한 `k`개 조로
나눌 때, 각 조의 비용(키의 합 + 그 조 내 키의 최댓값−최솟값)의 총합을 최소화한
값을 반환.

```python
print(minCost([1,3,5,6,10], 3))  # 28
```
