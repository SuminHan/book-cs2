# Topics Covered

## Stable Matching이란?

`n`명의 남자와 `n`명의 여자가 있고, 각자 상대편 전원에 대한 선호 순위를
가지고 있다고 하자. 목표는 **모든 사람이 정확히 한 명과 짝지어지는**
매칭(perfect matching)을 찾되, **아무도 배정된 상대를 버리고 눈이 맞을
동기가 없는** 매칭을 찾는 것이다.

**Unstable pair**: 매칭 `M`에서 짝지어진 남녀가 아닌 쌍 `(x, y)`가, 다음
두 조건을 모두 만족하면 unstable하다고 한다 — `x`가 자신의 현재 배정
상대보다 `y`를 더 선호하고, **동시에** `y`도 자신의 현재 배정 상대보다
`x`를 더 선호. 이런 쌍이 있으면 둘이 야반도주(elope)할 동기가 생긴다.

**Stable matching** = unstable pair가 하나도 없는 perfect matching.

이 개념은 실제로 미국의 고교-학교 배정, 레지던트-수련병원 배정, 신장이식
배정 등에 쓰이고, KSA에서도 룸메이트/수강신청/서클 배정 등에 응용될 수
있다. 학문적·실용적 중요성을 인정받아 2012년 노벨 경제학상까지 수여됐다.

## `Person` Class로 자료구조 만들기

각 사람을 `Person` object로 표현한다. 선호 리스트(`prefList`)는
**Person object들의 리스트**로 저장한다는 점이 핵심이다(이름이나 인덱스가
아니라):

```python
class Person:
    def __init__(self, name, gender):
        self.gender = gender      # "male" 또는 "female"
        self.name = name
        self.prefList = None      # Person object들의 리스트
        self.partner = None       # 현재 배정된 상대 Person object. 없으면 None

men = [None]*3
women = [None]*3
men[0] = Person("Victor", "male")
women[0] = Person("Amy", "female")
...
men[0].prefList = [women[0], women[1], women[2]]   # 선호순
```

`prefList`가 Person object들의 리스트이기 때문에, `men[0].prefList[0]`은
바로 `women[0]`(Person object) 자체를 가리킨다 — 이름 문자열이나 인덱스를
따로 조회할 필요가 없다.

## 매칭을 표현하는 함수: `engage` / `breakUp`

현재 매칭 상태는 각 `Person`의 `partner` 필드들로 표현된다 — **양쪽 다
연결/해제**해야 한다는 점이 중요(둘 다 modifier):

```python
def engage(self, p):    # modifier
    self.partner = p
    p.partner = self

def breakUp(self):      # modifier
    self.partner.partner = None
    self.partner = None
```

`m.engage(w)`와 `w.engage(m)`은 같은 효과이고, `m.breakUp()`과
`m.partner.breakUp()`도 같은 효과다(양방향 관계이므로).

## 선호도 비교: `prefer(·)`

`self.prefList.index(p)`로 `p`의 선호 순위(인덱스가 작을수록 선호)를 알
수 있다. 이를 이용해 "이 사람이 `p`를 지금 파트너보다 더 선호하는가?"를
판정하는 boolean function을 만들 수 있다:

```python
def prefer(self, p):   # pure function (boolean)
    if self.partner is None:
        return True
    return self.prefList.index(p) < self.prefList.index(self.partner)
```

## Perfect / Stable 여부 검사

**Perfect matching 검사** — 모든 사람의 `partner`가 `None`이 아닌지만
확인하면 된다(`engage`/`breakUp`을 통해서만 파트너가 바뀌므로, 한쪽만
연결되고 반대쪽은 안 되는 상황은 애초에 생기지 않는다):

```python
def isPerfectMatch(men, women):   # "for all" 패턴
    n = len(men)
    for i in range(n):
        if men[i].partner is None:
            return False
    for i in range(n):
        if women[i].partner is None:
            return False
    return True
```

**Stable matching 검사** — 정의 그대로, 모든 남녀 쌍에 대해 unstable
pair인지 확인한다(`prefer`를 이용):

```python
def isStableMatch(men, women):    # "for all" 패턴
    n = len(men)
    for i in range(n):
        for j in range(n):
            m, w = men[i], women[j]
            if m.prefer(w) and w.prefer(m):
                return False   # (m, w)가 unstable pair
    return True
```

이번 주는 여기까지 — "주어진 매칭이 stable한지 판정"할 수 있는
자료구조와 함수를 갖췄다. 다음 주(Stable Matching II)에서는 이런 매칭을
**직접 찾아내는** propose-reject(Gale-Shapley) 알고리즘을 다룬다.
