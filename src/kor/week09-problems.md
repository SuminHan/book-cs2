# Problem Set


이미 정의된 `Person` 클래스:

```python
class Person(object):
    def __init__(self, name, gender):
        self.gender = gender      # "male" or "female"
        self.name = name
        self.prefList = None      # preference list (of Person objects)
        self.partner = None       # Person object. None if free

    def isFree(self):             # pure function
        return self.partner == None

    def engage(self, p):          # modifier
        assert type(p) == Person
        assert self.isFree() and p.isFree()
        # ADD ADDITIONAL CODE HERE!

    def breakUp(self):            # modifier
        assert not self.isFree()
        assert self.partner.partner == self
        # ADD ADDITIONAL CODE HERE!

    def prefer(self, p):          # pure function -- self가 현재 partner보다 p를 선호?
        assert type(p) == Person
        assert not self.isFree()
        # ADD ADDITIONAL CODE HERE!
```

### 필수 문제

**1. `Person.engage(self, p)` / `Person.breakUp(self)` / `Person.prefer(self, p)`**
위 세 메서드를 완성.
> `engage`: `self.partner`와 `p.partner`를 서로로 설정. `breakUp`: `self`와
> `self.partner`의 관계를 서로 끊어 둘 다 `None`으로. `prefer`: 선호도 리스트의
> `.index(·)`를 이용해 `p`의 순위가 현재 파트너보다 앞서는지 비교.

**2. `isPerfectMatch(men, women)`** — `men`, `women`(둘 다 `Person` 리스트)의 모든
사람이 정확히 한 명의 파트너를 가지고 있으면 `True`.

```python
def isPerfectMatch(men, women):  # for all pattern
    assert len(men) == len(women)
    n = len(men)
    # ADD ADDITIONAL CODE HERE!
```

**3. `isUnstablePair(man, woman)` / `isStableMatch(men, women)`** —
`isUnstablePair`는 `(man, woman)`이 unstable pair인지 판정(서로 각자의 현재
파트너보다 상대를 선호하면 unstable). `isStableMatch`는 전체 매칭에 unstable
pair가 하나도 없으면 `True`.

```python
def isUnstablePair(man, woman):
    assert type(man) == Person and type(woman) == Person
    assert man.gender == "male" and woman.gender == "female"
    # ADD ADDITIONAL CODE HERE!

def isStableMatch(men, women):  # for all pattern
    assert len(men) == len(women)
    n = len(men)
    # ADD ADDITIONAL CODE HERE!
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만 도움이 되므로 시간이 남으면
시도해볼 것을 권장 (대부분 기출문제).*

**4. `nUnstablePair(men, women)`** — 매칭 정보가 채워진 `men`, `women`에서
unstable pair의 개수를 반환.

**5~8.** (10주차 과제의 일대다(one-to-many) stable matching 확장 — 교사
`Teacher`(`apprentice` 리스트, `quota`)와 학생 `Student`(`advisor`)를 이용)
- `isPerfect(teachers, students)` — 주어진 매칭이 "perfect"(모든 학생이 배정되고,
  교사-학생 상호 참조가 일관되고, 각 교사가 정확히 자기 정원만큼 배정됨) 조건을
  만족하면 `1`, 아니면 `0`.
- `isStable(teachers, students)` — perfect한 매칭이 stability 조건까지 만족하면
  `1`, 아니면 `0`. (두 교사가 서로의 학생을 교환하고 싶어하는 상황이 없어야 함)
- `nUnstablePair(teachers, students)` — 위 stable 조건을 위배하는 (교사,교사,학생,학생)
  쌍의 개수, 단 교사 쌍 `(Ti, Tj)` 기준으로 중복 없이 카운트.
- teacher-unstable pair 변형: 학생 쌍이 아니라 "교환하고 싶어하는 교사 쌍"
  자체의 개수를 세는 변형(`(Ti,Tj)`와 `(Tj,Ti)`는 같은 쌍으로 취급).

---
*원본: `CS2(2026-2)_all/CS2/CS2/problem_set/P09.pdf`. 표현/코드는 정리하며 일부
재구성함(4~8번은 이전 과제 맥락에 의존하는 문제라 핵심만 요약).*
