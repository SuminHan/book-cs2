# Topics Covered

## List 생성하는 또 다른 방법: `.append(·)`

`[]`로 빈 리스트를 만든 뒤 `.append(x)`로 원소를 하나씩 추가할 수 있다
(`L.append(x)`는 `L = L + [x]`와 같은 효과지만 리스트 자체를 직접 변경한다).
결과를 담을 리스트의 길이를 미리 알 수 없을 때 특히 유용하다.

```python
L = [0,10,20,30,40,50]
n = len(L)
M = []
for i in range(n):
    M.append(L[i]*2)   # 또는 M = M + [L[i]*2]
```

## Slicing: `[i:j]`, `[i:j:k]`

`L[i:j]`는 `L[i]`부터 `L[j-1]`까지 뽑아 만든 새 sublist(`L[j]`는 포함하지
않음). `i`가 생략되면 처음부터, `j`가 생략되면 끝까지, 둘 다 생략되면 전체의
복사본이다. `L[i:j:k]`는 `k`만큼의 step으로 건너뛰며 뽑는다
(`range(i,j,k)`에서 `k`의 역할과 같음).

```python
L = [0,10,20,30,40,50]
print(L[1:4])     # [10,20,30]  ([10,20,30,40] 아님)
print(L[:3])      # [0,10,20]   (L[0:3]과 같음)
print(L[2:])      # [20,30,40,50]
print(L[:])       # [0,10,20,30,40,50]

L2 = [0,10,20,30,40,50,60,70,80,90]
print(L2[1:9:2])  # [10,30,50,70]  (2씩 건너뜀)
print(L2[1::2])   # [10,30,50,70,90]
```

## 비교 / 포함관계 / 연결 연산자

```python
print([1,2,3] == [1,2,3])        # True — 리스트 비교
L = [0,1,2,3,4,5]
print(3 in L)                     # True
print(8 in L)                     # False
print([1,2] in L)                 # False (string의 경우와 다름! 원소 하나가
                                   #        [1,2] 자체여야 True)
print([1,2] in [0,[1,2],3])       # True

L = [0,1] + [2,3,4,5]             # [0,1,2,3,4,5]  연결
M = [0,1] * 3                     # [0,1,0,1,0,1]  반복
```

`==`로 리스트 전체를 비교하는 것과, "∀-pattern" loop으로 원소를 하나씩
비교하는 것은 결과가 같다 — 다만 `==`가 이미 그 루프를 대신 해준다:

```python
# 같은 일을 하는 두 가지 방법
def equal(L1, L2):
    return L1 == L2

def equal_manual(L1, L2):
    if len(L1) != len(L2):
        return False
    for i in range(len(L1)):
        if L1[i] != L2[i]:
            return False
    return True
```

`in`도 마찬가지로 "∃-pattern" loop을 대신한다.

## Built-in 함수

숫자로만 이루어진 리스트에는 `sum(L)`, `max(L)`, `min(L)`을 바로 쓸 수
있다(`L.sum()`처럼 메소드 형태가 아님에 유의). 반면 뒤에 나오는
`L.append(x)`, `L.sort()`는 `L.???()` 형태의 **메소드**이고, `L` 자체를
바꾸면서 반환값은 `None`이다:

```python
L = [1,2,3]
M = L.append(5)
print(M)   # None — L 자체만 바뀌고 M에는 아무 값도 안 감
print(L)   # [1,2,3,5]

L2 = [3,2,7,1,4]
L2.sort()
print(L2)  # [1,2,3,4,7]
```

## String도 List처럼

String(`"Porori"`)은 문자들의 list(`["P","o","r","o","r","i"]`)처럼
다룰 수 있다 — `len(·)`, `[i]`, slicing 모두 리스트와 똑같이 동작한다.
**큰 차이점: string은 `s[i] = ...`로 직접 수정할 수 없다**(변경 불가).

```python
s = "Porori"
counter = 0
for i in range(len(s)):
    if s[i] == "o":
        counter += 1

print(s[1:4])   # "oro"
print(s[-1])    # "i"
```

String 비교(`==`, `!=`, `<`, `>`)는 사전순(lexicographic order)을 따른다.
연결은 `+`, 반복은 `str * int`:

```python
print("abc" < "abde")   # True — 사전에서 먼저 나오는 쪽이 작음

s = "Po" + "rori"       # "Porori"
r = ""
for i in range(len(s)):
    r = r + s[len(s)-1-i]   # s의 문자를 거꾸로 r에 붙임
print(r)                 # "iroroP"

print("Porori".find("ror"))  # 2
```

*int/float가 메모리에 실제로 어떤 비트로 저장되는지, 그리고 그게 왜
`0.1 + 0.2 == 0.3`이 `False`가 되는 원인인지 궁금하다면 참고자료의
[숫자가 메모리에 저장되는 방식](../general/number-representation.md)
참고.*
