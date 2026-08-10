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
```

### 필수 문제

**1.** Write functions that work on the class `Person`.

1. Write a function `engage` (**modifier**):
   - input parameter: `self` and `p` (both are `Person` objects)
   - action: `self`와 `p`가 서로 파트너 관계가 되도록 `self.partner`와
     `p.partner`를 적당히 설정
   - return value: 없음
   - *`assert boolean_expression`은 `boolean_expression`이 `True`이면
     그냥 넘어가고, `False`이면 코드 위치가 출력되고 프로그램이 종료됨.
     에러가 멀리 퍼지기 전에 미리 감지하기 위해 사용. 함수 입구에서
     type checking 등으로 사용.*
2. Write a function `breakUp` (**modifier**):
   - input parameter: `self`
   - action: `self`와 `self.partner`의 파트너 관계를 서로 끊음
   - return value: 없음
3. Write a function `prefer` (**pure function**):
   - input parameter: `self` and `p` (both are `Person` objects)
   - return value: `True`(self가 p를 현재 파트너인 `self.partner`보다
     선호), `False`(otherwise)
   - *List에 대해 정의된 `.index(·)` 함수를 이용*

```python
class Person(object):
    def __init__(self, name, gender):
        self.gender = gender
        self.name = name
        self.prefList = None
        self.partner = None

    def isFree(self):
        return self.partner == None

    def engage(self, p):          # modifier
        assert type(p) == Person
        assert self.isFree() and p.isFree()
        # ADD ADDITIONAL CODE HERE!!

    def breakUp(self):            # modifier
        assert not self.isFree()
        assert self.partner.partner == self
        # ADD ADDITIONAL CODE HERE!!

    def prefer(self, p):          # pure function
        assert type(p) == Person
        assert not self.isFree()
        # ADD ADDITIONAL CODE HERE!!
```

**2.** Write a function `isPerfectMatch`:
- input parameter: Two lists `men`/`women` of `Person` objects
  - `men` represents the list of `Person` objects each of which
    represents a man
  - `women` represents the list of `Person` objects each of which
    represents a woman
- return value: `True`(if every man/woman has exactly one partner),
  `False`(otherwise)
  - *`men`/`women`에 파트너 정보가 모두 포함되어 있음.*

```python
def isPerfectMatch(men, women):  # for all pattern
    assert len(men) == len(women)
    n = len(men)
    # ADD ADDITIONAL CODE HERE!!
```

**3.** Write a function `isUnstablePair`:
- input parameter: Two `Person` objects `man, woman`
- return value: `True`(if `(man,woman)` is an unstable pair), `False`
  (otherwise)
  - *unstable pair의 정의와 힌트는 Topics Covered 참고.*

Write a function `isStableMatch` using the function `isUnstablePair`:
- input parameter: Two lists `men`/`women` of `Person` objects (the same
  as in problem 2)
  - `men` (resp. `women`) represents the list of `Person` objects each of
    which represents a man (resp. woman)
- return value: `True`(if the matching in `men`/`women` is stable),
  `False`(otherwise)
  - *`men`/`women`에 파트너 정보가 모두 포함되어 있음.*

```python
def isUnstablePair(man, woman):
    assert type(man) == Person and type(woman) == Person
    assert man.gender == "male" and woman.gender == "female"
    # ADD ADDITIONAL CODE HERE!!

def isStableMatch(men, women):  # for all pattern
    assert len(men) == len(women)
    n = len(men)
    # ADD ADDITIONAL CODE HERE!!
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**4.** 어느 정도 배정이 진행된 상황에서, 지금까지 형성된 매칭에 얼마나
많은 unstable pair가 여러개 발생할 수 있는데, 이 문제에서는 이러한
매칭을 입력으로 받아서 이 매칭에 존재하는 unstable pair의 갯수를
계산하는 것을 목표로 한다.

다음과 같이 정의된 함수 `nUnstablePair`를 완성하라:
- 입력: 매칭 정보가 채워진 `men`과 `women`
- 리턴값: unstable pair들의 갯수

**5-8.** (숙제 "#9-10: Stable Matching"에서 다룬 일대다(one-to-many)
매칭 확장 문제.) 숙제에서는 `n`명의 교사 \\(T_1,\ldots,T_n\\)과 `m`명의
학생 \\(S_1,\ldots,S_m\\) 간에 연구활동 지도를 위한 일대다 매칭을
다뤘다 — 각 학생 \\(S_j\\)는 정확히 한 명의 교사에게 지도받아야 하고,
각 교사 \\(T_i\\)는 정확히 \\(\ell_i(>0)\\)명의 학생들을 지도해야 한다
(\\(\ell_1+\cdots+\ell_n=m\\)). 매칭 정보는 `Teacher`의 `apprentice`
리스트(그 교사가 맡은 `Student` 객체들의 리스트)와 `Student`의 `advisor`
변수(그 학생을 맡은 `Teacher` 객체, 또는 아직 없으면 `None`)에 나눠서
저장된다.

**5. `isPerfect`** — 임의로 구성된 매칭이 perfect 조건(모든 학생이
지도교사를 배정받고, 교사-학생 상호 참조가 일관되며, 각 교사가 정확히
자기 정원 \\(\ell_i\\)만큼 학생을 지도)을 만족하는지 판단.

다음과 같이 정의된 함수 `isPerfect`를 완성하라:
- 입력: `Teacher` object들의 리스트와 `Student` object들의 리스트
  (과제의 `findMatch` 함수의 입력 형태와 동일)
- 리턴값: `1`(주어진 매칭이 perfect한 경우), `0`(그렇지 않은 경우)

perfection 조건을 위배하는 경우로는 다음이 있을 수 있다: 어떤 학생이
지도교사를 배정받지 못한 경우, 어떤 학생이 지도교사를 배정받은 것으로
`advisor` 변수에 나타나 있으나 그 교사의 `apprentice` 리스트에는 그
학생이 없는 경우, 어떤 교사에게 배정된 학생의 수가 그 교사에게 할당된
정원(`quota` 변수의 값)보다 적거나 많은 경우, 어떤 두 교사가 같은
학생을 배정받은 경우, 어떤 교사의 `apprentice` 리스트에 있는 학생의
지도교사가 자신이 아닌 경우.

**6. `isStable`** — perfect 조건을 만족하는 매칭이 stability 조건까지
만족하는지 판단. stable matching은 perfection 조건에 더해, 다음 조건을
만족하는 \\((T_i,T_{i'},S_j,S_{j'})\\)가 존재하지 않는 matching으로
정의된다: `i≠i'`이고 `j≠j'`이며, 학생 \\(S_{j'}\\)는 교사 \\(T_i\\)에게,
학생 \\(S_j\\)는 교사 \\(T_{i'}\\)에게 매칭되어 있고, 교사 \\(T_i\\)는
학생 \\(S_{j'}\\)보다 학생 \\(S_j\\)를 선호하며, 학생 \\(S_j\\)는 교사
\\(T_{i'}\\)보다 교사 \\(T_i\\)를 선호한다.

다음과 같이 정의된 함수 `isStable`을 완성하라:
- 입력: `Teacher` object들의 리스트와 `Student` object들의 리스트
  (perfection 조건을 만족하는 matching만 입력으로 주어짐)
- 리턴값: `1`(주어진 매칭이 stable한 경우), `0`(그렇지 않은 경우)

**7. `nUnstablePair`(교사-학생 4-튜플 버전)** — Propose-Reject 알고리즘
없이 임의로 구성한 매칭에는 unstable pair가 여러개 발생할 수 있는데, 이
문제에서는 주어진 교사-학생 matching에 존재하는 unstable pair
(문제 6에서 정의된 형태)의 갯수를 계산한다.

다음과 같이 정의된 함수 `nUnstablePair`를 완성하라:
- 입력: 매칭 정보가 채워진 `teachers`, `students`
- 리턴값: unstable pair(즉, 조건을 만족하는 `(Ti,Ti',Sj,Sj')`)의 갯수

**8. `nUnstablePair`("teacher-unstable pair" 변형)** — 다른 형태의
unstability를 고려한다: 주어진 교사-학생 matching `M`하에서, 교사
\\(T_i\\)에게 배정된 어떤 학생 \\(S_k\\)와 교사 \\(T_j\\)에게 배정된 어떤
학생 \\(S_\ell\\)에 대해, \\(T_i\\)는 \\(S_k\\)보다 \\(S_\ell\\)을
선호하고 \\(T_j\\)는 \\(S_\ell\\)보다 \\(S_k\\)를 선호하면, 교사의 pair
\\((T_i,T_j)\\)를 'teacher-unstable pair'라고 정의한다(이런 조건을
만족하는 교사가 존재한다면, 학생 선호도를 잠시 무시하고 서로 배정된
학생을 맞교환하는 시도를 하고 싶어할 것이다).

다음과 같이 정의된 함수 `nUnstablePair`를 완성하라:
- 입력: 매칭 정보가 채워진 `teachers`, `students` (stable matching만
  입력으로 주어짐 — 문제를 해결하는 과정에서 이 성질을 고려할 필요는
  없음)
- 리턴값: 'teacher-unstable pair'의 갯수
  - \\((T_i,T_j)\\)와 \\((T_j,T_i)\\)는 동일한 pair로 취급하고 중복해서
    2개로 count하지 않도록 한다.
  - 학생까지 포함한 quadruple \\((T_i,T_j,S_k,S_\ell)\\)을 count하는
    게 아니고 교사 pair \\((T_i,T_j)\\)만 count한다 — 즉, `Ti`와 `Tj`
    사이에 조건을 만족하는 학생 pair가 `(Sk,Sl)` 외에도 여러 개
    존재한다 하더라도 여러개로 count하지 않고 1개로 count해야 한다.
