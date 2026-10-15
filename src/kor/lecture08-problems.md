# Problem Set


[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture08.ipynb)

**이번 시간과 다음 시간의 연결**

이번 시간에는 stable matching을 *찾는* 알고리즘이 아니라, 그 알고리즘이 쓸 재료와 검사 도구를 만든다.
- `engage` / `breakUp` / `prefer`: 다음 시간에 구현할 Propose-Reject(Gale-Shapley) 알고리즘 `findMatch`에서
  청혼을 받아들일 때(`engage`), 더 나은 상대가 나타나 기존 짝과 헤어질 때(`breakUp`),
  새 청혼자가 지금 짝보다 나은지 판단할 때(`prefer`) 그대로 쓰인다.
- `isPerfectMatch` / `isStableMatch`: `findMatch`가 만든 매칭이 정말 perfect하고 stable한지 검증하는 데 쓴다.

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
        # self와 p를 서로의 파트너로 연결한다. 리턴값은 없다.
        # 실행 후 상태: self.partner는 p, p.partner는 self
        # 예: a.engage(b) 실행 후 a.isFree()와 b.isFree()는 모두 False
        # ADD ADDITIONAL CODE HERE!!

    def breakUp(self):            # modifier
        assert not self.isFree()
        assert self.partner.partner == self
        # self와 현재 파트너의 관계를 양쪽 모두에서 끊는다. 리턴값은 없다.
        # 예: a와 b가 파트너일 때 a.breakUp() 실행 후
        #     a.partner와 b.partner가 모두 None (a.isFree(), b.isFree() 모두 True)
        # ADD ADDITIONAL CODE HERE!!

    def prefer(self, p):          # pure function
        assert type(p) == Person
        assert not self.isFree()
        # self.prefList는 선호 순서 리스트 (앞에 있을수록 더 선호한다)
        # prefList에서 p가 현재 파트너(self.partner)보다 앞에 있으면 True,
        # 그렇지 않으면 False를 리턴한다. self와 p는 바꾸지 않는다.
        # 예: a.prefList = [x, y, z], a.partner = y 일 때
        #     a.prefer(x) → True,  a.prefer(z) → False,  a.prefer(y) → False
        # List에 대해 정의된 .index(·) 함수를 이용 (예: [x, y, z].index(y) → 1)
        # ADD ADDITIONAL CODE HERE!!
```

```python
# 문제 1 확인용 (위 셀을 먼저 실행)
a = Person("A", "female")
x, y, z = Person("X", "male"), Person("Y", "male"), Person("Z", "male")
a.prefList = [x, y, z]

a.engage(y)
print(a.partner.name, y.partner.name, a.isFree(), y.isFree())   # Y A False False
print(a.prefer(x), a.prefer(z), a.prefer(y))                     # True False False
a.breakUp()
print(a.partner, y.partner, a.isFree(), y.isFree())              # None None True True
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
    # 매칭 정보는 각 사람의 partner 변수에 들어 있다.
    # 모든 남자와 모든 여자에게 파트너가 있고(partner가 None이 아님),
    # 짝끼리 서로를 가리키면(a.partner.partner == a) True,
    # 한 명이라도 그렇지 않으면 False를 리턴한다.
    # ADD ADDITIONAL CODE HERE!!
```

```python
# 문제 2 확인용 (문제 1, 2 셀을 먼저 실행)
men = [Person(name, "male") for name in ["Xavier", "Yancey", "Zeus"]]
women = [Person(name, "female") for name in ["Amy", "Bertha", "Clare"]]
print(isPerfectMatch(men, women))  # False  (아직 아무도 짝이 없음)

men[0].engage(women[2])
men[1].engage(women[1])
print(isPerfectMatch(men, women))  # False  (Zeus, Amy는 짝이 없음)

men[2].engage(women[0])
print(isPerfectMatch(men, women))  # True

men[1].breakUp()
print(isPerfectMatch(men, women))  # False  (Yancey, Bertha가 헤어짐)
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
    # 서로 짝이 아닌 man과 woman이
    #   - man은 현재 파트너보다 woman을 더 선호하고,
    #   - woman도 현재 파트너보다 man을 더 선호하면
    # unstable pair이므로 True, 그렇지 않으면 False를 리턴한다.
    # 서로 짝인 경우는 unstable pair가 아니다. (문제 1의 prefer 사용 가능)
    # ADD ADDITIONAL CODE HERE!!

def isStableMatch(men, women):  # for all pattern
    assert len(men) == len(women)
    n = len(men)
    # 모든 (man, woman) 조합 중 unstable pair가 하나도 없으면 True,
    # 하나라도 있으면 False를 리턴한다. (isUnstablePair 사용)
    # ADD ADDITIONAL CODE HERE!!
```

```python
# 문제 3 확인용 (문제 1~3 셀을 먼저 실행)
men = [Person(name, "male") for name in ["Xavier", "Yancey", "Zeus"]]
women = [Person(name, "female") for name in ["Amy", "Bertha", "Clare"]]
men[0].prefList = [women[0], women[1], women[2]]  # Xavier: Amy > Bertha > Clare
men[1].prefList = [women[1], women[0], women[2]]  # Yancey: Bertha > Amy > Clare
men[2].prefList = [women[0], women[1], women[2]]  # Zeus:   Amy > Bertha > Clare
women[0].prefList = [men[1], men[0], men[2]]      # Amy:    Yancey > Xavier > Zeus
women[1].prefList = [men[0], men[1], men[2]]      # Bertha: Xavier > Yancey > Zeus
women[2].prefList = [men[0], men[1], men[2]]      # Clare:  Xavier > Yancey > Zeus

men[0].engage(women[2])  # Xavier - Clare
men[1].engage(women[1])  # Yancey - Bertha
men[2].engage(women[0])  # Zeus   - Amy
print(isUnstablePair(men[0], women[0]))  # True   (Xavier, Amy)
print(isUnstablePair(men[1], women[0]))  # False  (Yancey, Amy)
print(isUnstablePair(men[0], women[2]))  # False  (서로 짝)
print(isStableMatch(men, women))         # False

for m in men:
    m.breakUp()
men[0].engage(women[0])  # Xavier - Amy
men[1].engage(women[1])  # Yancey - Bertha
men[2].engage(women[2])  # Zeus   - Clare
print(isStableMatch(men, women))         # True
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

각 문제에는 코드 틀과 테스트 케이스가 있습니다. `# ADD ADDITIONAL CODE HERE!!`
자리를 채운 뒤 실행해서, 출력이 주석(`# 2` 등)과 같은지 확인하세요.

**4. `nUnstablePair` (남녀 1:1 매칭)**

Propose-Reject 알고리즘을 끝까지 돌리지 않고 임의로 짝을 지어 놓은 매칭에는
unstable pair가 여러 개 있을 수 있다. 주어진 매칭에 존재하는 unstable pair의
개수를 세는 함수 `nUnstablePair`를 작성하라.

- 입력: 매칭 정보(`partner`)가 모두 채워진 리스트 `men`, `women`
  (길이 `n`인 perfect matching)
- 리턴값: unstable pair `(man, woman)`의 개수
  - unstable pair의 정의는 문제 3과 같다 — 서로 짝이 **아닌** `(man, woman)`에
    대해, `man`이 현재 파트너보다 `woman`을 더 선호하고, **동시에** `woman`도
    현재 파트너보다 `man`을 더 선호하는 경우.
  - 서로 짝인 `(man, woman)`은 unstable pair가 아니다.
- 문제 1의 `Person` 클래스와 문제 3의 `isUnstablePair`를 그대로 사용한다.
  문제 1~3의 셀을 먼저 실행해 둘 것.

**예시** (아래 테스트 케이스의 선호 순서와 매칭):

| 사람 | 1순위 | 2순위 | 3순위 | 현재 파트너 |
|---|---|---|---|---|
| Xavier | Amy | Bertha | Clare | Clare |
| Yancey | Bertha | Amy | Clare | Bertha |
| Zeus | Amy | Bertha | Clare | Amy |
| Amy | Yancey | Xavier | Zeus | Zeus |
| Bertha | Xavier | Yancey | Zeus | Yancey |
| Clare | Xavier | Yancey | Zeus | Xavier |

`(Xavier, Amy)`: Xavier는 Clare보다 Amy를, Amy는 Zeus보다 Xavier를 선호 →
unstable. `(Xavier, Bertha)`도 같은 이유로 unstable. 나머지 쌍은 그렇지 않으므로
답은 `2`.

```python
# 문제 1의 Person 클래스와 문제 3의 isUnstablePair를 사용한다
# (문제 1~3의 셀을 먼저 실행할 것)

def nUnstablePair(men, women):
    assert len(men) == len(women)
    n = len(men)
    count = 0
    # isUnstablePair를 이용
    # ADD ADDITIONAL CODE HERE!!
    return count


men = [None] * 3
women = [None] * 3
men[0] = Person("Xavier", "male")
men[1] = Person("Yancey", "male")
men[2] = Person("Zeus", "male")
women[0] = Person("Amy", "female")
women[1] = Person("Bertha", "female")
women[2] = Person("Clare", "female")
men[0].prefList = [women[0], women[1], women[2]]
men[1].prefList = [women[1], women[0], women[2]]
men[2].prefList = [women[0], women[1], women[2]]
women[0].prefList = [men[1], men[0], men[2]]
women[1].prefList = [men[0], men[1], men[2]]
women[2].prefList = [men[0], men[1], men[2]]
men[0].engage(women[2])
men[1].engage(women[1])
men[2].engage(women[0])

print(nUnstablePair(men, women))  # 2
```

**5~8 공통 설정: 교사-학생 일대다 매칭**

숙제 "#9-10: Stable Matching"에서 다룬 일대다(one-to-many) 매칭 확장 문제이다.
`n`명의 교사 \\(T_1,\ldots,T_n\\)과 `m`명의 학생 \\(S_1,\ldots,S_m\\) 사이에 연구활동
지도를 위한 매칭을 만든다 — 각 학생 \\(S_j\\)는 정확히 한 명의 교사에게 지도받고,
각 교사 \\(T_i\\)는 정확히 \\(\ell_i(>0)\\)명의 학생을 지도한다
(\\(\ell_1+\cdots+\ell_n=m\\)).

매칭 정보는 두 곳에 **나눠서** 저장된다.

| 클래스 | 변수 / 메서드 | 의미 |
|---|---|---|
| `Teacher` | `prefList` | `Student` 객체들의 선호 순서 리스트 (앞일수록 더 선호) |
| | `quota` | 지도해야 하는 학생 수 \\(\ell_i\\) |
| | `apprentice` | 이 교사가 맡은 `Student` 객체들의 리스트 |
| | `prefer(p, q)` | 이 교사가 학생 `q`보다 학생 `p`를 더 선호하면 `True` |
| `Student` | `prefList` | `Teacher` 객체들의 선호 순서 리스트 (앞일수록 더 선호) |
| | `advisor` | 이 학생을 맡은 `Teacher` 객체 (아직 없으면 `None`) |
| | `id` | 출력/디버깅용 번호 |
| | `prefer(p)` | 이 학생이 현재 `advisor`보다 교사 `p`를 더 선호하면 `True` |

아래 셀을 먼저 실행한 뒤 문제 5~8을 푼다. 클래스는 수정하지 말고, 필요한
함수는 클래스 밖에 따로 정의하라.

```python
# Do not modify class Teacher & Student

class Teacher(object):
    def __init__(self, quota):
        self.prefList = None  # preference list (of Student objects)
        self.quota = quota    # number of students to supervise
        self.apprentice = []  # list of students to supervise

    def prefer(self, p, q):   # whether or not self prefers p to q
        i = self.prefList.index(q)
        j = self.prefList.index(p)
        return j < i


class Student(object):
    def __init__(self, id):
        self.prefList = None  # preference list (of Teacher objects)
        self.advisor = None   # teacher who will supervise self's research
        self.id = id          # for printing/debugging

    def prefer(self, p):      # whether or not self prefers p to current advisor
        i = self.prefList.index(self.advisor)
        j = self.prefList.index(p)
        return j < i
```

**5. `isPerfect`**

임의로 구성한 매칭이 **perfect**한지 판단하는 함수 `isPerfect`를 작성하라.
perfect 매칭은 다음 네 조건을 모두 만족한다.

1. 모든 학생이 지도교사를 배정받았다 (`advisor`가 `None`이 아니다).
2. 학생 쪽 기록과 교사 쪽 기록이 일치한다 — `s.advisor`가 `t`이면 `s`가
   `t.apprentice`에 들어 있고, `t.apprentice`에 있는 학생의 `advisor`는 `t`이다.
3. 각 교사가 맡은 학생 수가 정원과 같다 (`len(t.apprentice) == t.quota`).
4. 한 학생이 두 교사의 `apprentice`에 동시에 들어 있지 않다.

- 입력: `Teacher` 객체들의 리스트 `teachers`와 `Student` 객체들의 리스트
  `students` (숙제의 `findMatch` 함수 입력과 같은 형태)
- 리턴값: `1`(perfect한 경우), `0`(그렇지 않은 경우)

테스트 케이스의 주석에 각 경우가 어느 조건을 위배하는지 적어 두었다.

```python
def isPerfect(teachers, students):
    n = len(teachers)
    m = len(students)
    # 조건 1~4를 확인해서, 하나라도 위배되면 0을 리턴
    # ADD ADDITIONAL CODE HERE!!
    return 1


teachers = [Teacher(3), Teacher(2)]
students = [Student(j) for j in range(5)]
for i in range(2): teachers[i].prefList = students[:]
for j in range(5): students[j].prefList = teachers[:]
teachers[0].apprentice = [students[0], students[1], students[2]]
teachers[1].apprentice = [students[3], students[4]]
students[0].advisor = students[1].advisor = students[2].advisor = teachers[0]
students[3].advisor = students[4].advisor = teachers[1]
print(isPerfect(teachers, students))  # 1

students[4].advisor = None
print(isPerfect(teachers, students))  # 0  (S4에게 지도교사 없음: 조건 1)

students[4].advisor = teachers[1]
print(isPerfect(teachers, students))  # 1

students[4].advisor = teachers[0]
print(isPerfect(teachers, students))  # 0  (S4는 T0라고 하지만 T0 명단에 없음: 조건 2)

students[4].advisor = teachers[1]
print(isPerfect(teachers, students))  # 1

teachers[1].apprentice = [students[3]]
print(isPerfect(teachers, students))  # 0  (T1 명단에서 S4가 빠짐: 조건 2, 3)

teachers[1].apprentice = [students[3], students[4], students[0]]
print(isPerfect(teachers, students))  # 0  (S0이 T0, T1 양쪽에 있음: 조건 2, 3, 4)

teachers[0].apprentice = [students[0], students[1]]
teachers[1].apprentice = [students[3], students[4], students[2]]
students[0].advisor = students[1].advisor = teachers[0]
students[3].advisor = students[4].advisor = students[2].advisor = teachers[1]
print(isPerfect(teachers, students))  # 0  (기록은 일치하지만 정원이 3/2가 아님: 조건 3)
```

**6. `isStable`**

perfect 조건을 만족하는 매칭이 **stable**한지 판단하는 함수 `isStable`을
작성하라.

stable matching은 다음 조건을 만족하는 \\((T_i,T_{i'},S_j,S_{j'})\\)가 하나도 없는
perfect matching이다.

- \\(i \ne i'\\)이고 \\(j \ne j'\\)
- 학생 \\(S_{j'}\\)는 교사 \\(T_i\\)에게, 학생 \\(S_j\\)는 교사 \\(T_{i'}\\)에게 배정되어 있다.
- 교사 \\(T_i\\)는 자기 학생 \\(S_{j'}\\)보다 학생 \\(S_j\\)를 더 선호한다.
- 학생 \\(S_j\\)는 자기 지도교사 \\(T_{i'}\\)보다 교사 \\(T_i\\)를 더 선호한다.

즉 \\(T_i\\)와 \\(S_j\\)가 지금 매칭을 깨고 서로에게 옮겨가고 싶어 하는 상황이다
(문제 3의 unstable pair를 일대다로 확장한 것).

- 입력: `teachers`, `students` (perfect 조건을 만족하는 매칭만 주어짐)
- 리턴값: `1`(stable한 경우), `0`(그렇지 않은 경우)

**예시**: 두 번째 테스트 케이스의 매칭은 \\(T_0=\\{S_0,S_1,S_4\\}\\),
\\(T_1=\\{S_3,S_2\\}\\)이다. 모든 교사의 선호 순서는 \\(S_0,S_1,\ldots,S_4\\)이고,
모든 학생은 \\(T_0\\)를 \\(T_1\\)보다 선호한다. \\(T_0\\)는 자기 학생 \\(S_4\\)보다 \\(S_2\\)를
선호하고, \\(S_2\\)는 현재 지도교사 \\(T_1\\)보다 \\(T_0\\)를 선호하므로 unstable이다 →
`0`.

```python
def isUnstablePair(t, s):
    # t: Teacher, s: Student (s의 지도교사는 t가 아님)
    # 위 조건을 만족하는 t의 학생 s_가 하나라도 있으면 True, 아니면 False
    # ADD ADDITIONAL CODE HERE!!
    pass


def isStable(teachers, students):
    n = len(teachers)
    m = len(students)
    # isUnstablePair를 이용
    # ADD ADDITIONAL CODE HERE!!
    pass


teachers = [Teacher(3), Teacher(2)]
students = [Student(j) for j in range(5)]
for i in range(2): teachers[i].prefList = students[:]
for j in range(5): students[j].prefList = teachers[:]
teachers[0].apprentice = [students[0], students[1], students[2]]
teachers[1].apprentice = [students[3], students[4]]
students[0].advisor = students[1].advisor = students[2].advisor = teachers[0]
students[3].advisor = students[4].advisor = teachers[1]
print(isStable(teachers, students))  # 1

teachers[0].apprentice[2] = students[4]
teachers[1].apprentice[1] = students[2]
students[4].advisor = teachers[0]
students[2].advisor = teachers[1]
print(isStable(teachers, students))  # 0
```

**7. `nUnstablePair` (교사-학생 버전)**

Propose-Reject 알고리즘 없이 임의로 구성한 교사-학생 매칭에는 unstable pair가
여러 개 있을 수 있다. 주어진 매칭에 존재하는 unstable pair의 개수를 세는 함수
`nUnstablePair`를 작성하라.

- 교사 \\(T_i\\)와 학생 \\(S_j\\)(\\(S_j\\)의 지도교사가 \\(T_i\\)가 아님)에 대해, 문제 6의
  조건을 만족하는 \\(S_{j'}\\)(\\(T_i\\)의 학생)가 **한 명이라도** 있으면
  \\((T_i, S_j)\\)를 unstable pair라고 한다.
- 세는 단위는 **교사-학생 쌍** \\((T_i, S_j)\\)이다. 같은 \\((T_i, S_j)\\)에 대해
  조건을 만족하는 \\(S_{j'}\\)가 여러 명이어도 1개로 센다.
- 입력: 매칭 정보가 채워진 `teachers`, `students` (perfect matching)
- 리턴값: unstable pair \\((T_i, S_j)\\)의 개수

**예시**: 두 번째 테스트 케이스의 매칭은 \\(T_0=\\{S_1,S_3,S_4\\}\\),
\\(T_1=\\{S_0,S_2\\}\\)이다(선호 순서는 문제 6 예시와 같다). \\(S_0\\), \\(S_2\\)는 둘 다
\\(T_1\\)보다 \\(T_0\\)를 선호하고, \\(T_0\\)는 자기 학생 \\(S_3\\), \\(S_4\\)보다 이 둘을 선호한다.
따라서 \\((T_0,S_0)\\), \\((T_0,S_2)\\) → `2`.

```python
# 문제 6의 isUnstablePair를 사용한다 (문제 6 셀을 먼저 실행할 것)

def nUnstablePair(teachers, students):
    n = len(teachers)
    m = len(students)
    count = 0
    # ADD ADDITIONAL CODE HERE!!
    return count


teachers = [Teacher(3), Teacher(2)]
students = [Student(j) for j in range(5)]
for i in range(2): teachers[i].prefList = students[:]
for j in range(5): students[j].prefList = teachers[:]
teachers[0].apprentice = [students[0], students[1], students[2]]
teachers[1].apprentice = [students[3], students[4]]
students[0].advisor = students[1].advisor = students[2].advisor = teachers[0]
students[3].advisor = students[4].advisor = teachers[1]
print(nUnstablePair(teachers, students))  # 0

teachers[0].apprentice = [students[1], students[3], students[4]]
teachers[1].apprentice = [students[0], students[2]]
students[1].advisor = students[3].advisor = students[4].advisor = teachers[0]
students[0].advisor = students[2].advisor = teachers[1]
print(nUnstablePair(teachers, students))  # 2
```

**8. `nUnstablePair` (teacher-unstable pair 변형)**

이번에는 다른 형태의 unstability를 생각한다. 매칭 `M`에서 교사 \\(T_i\\)에게 배정된
어떤 학생 \\(S_k\\)와 교사 \\(T_j\\)에게 배정된 어떤 학생 \\(S_\ell\\)에 대해

- \\(T_i\\)는 자기 학생 \\(S_k\\)보다 \\(S_\ell\\)을 더 선호하고,
- \\(T_j\\)는 자기 학생 \\(S_\ell\\)보다 \\(S_k\\)를 더 선호하면,

교사 쌍 \\((T_i,T_j)\\)를 **teacher-unstable pair**라고 한다. 이런 두 교사는 학생
선호도를 잠시 무시하고 서로의 학생을 맞바꾸고 싶어 할 것이다.

teacher-unstable pair의 개수를 세는 함수 `nUnstablePair`를 작성하라.

- 입력: 매칭 정보가 채워진 `teachers`, `students` (stable matching만 주어지지만,
  이 성질을 문제 풀이에 사용할 필요는 없다)
- 리턴값: teacher-unstable pair의 개수
  - \\((T_i,T_j)\\)와 \\((T_j,T_i)\\)는 같은 쌍이다. 2개로 세지 않는다.
  - 학생까지 포함한 \\((T_i,T_j,S_k,S_\ell)\\)을 세는 것이 아니라 교사 쌍
    \\((T_i,T_j)\\)만 센다. 두 교사 사이에 조건을 만족하는 학생 쌍이 여러 개
    있어도 1개로 센다.

**예시**: 테스트 케이스의 매칭은 \\(T_0=\\{S_0,S_1\\}\\), \\(T_1=\\{S_2,S_3,S_4\\}\\),
\\(T_2=\\{S_5,S_6\\}\\)이다. \\(T_1\\), \\(T_2\\)의 선호 순서는 \\(S_0,S_1,\ldots,S_6\\)이고,
\\(T_0\\)만 \\(S_0\\)와 \\(S_6\\)의 자리를 바꿔 \\(S_6\\)을 가장 좋아하고 \\(S_0\\)을 가장 싫어한다.
\\((T_0,T_1)\\)과 \\((T_0,T_2)\\)는 teacher-unstable pair이고 \\((T_1,T_2)\\)는 아니다 →
`2`.

```python
def isUnstableTeacherPair(t1, t2):
    # (t1, t2)가 teacher-unstable pair이면 True, 아니면 False
    # ADD ADDITIONAL CODE HERE!!
    pass


def nUnstablePair(teachers, students):
    n = len(teachers)
    count = 0
    # isUnstableTeacherPair를 이용
    # (Ti, Tj)와 (Tj, Ti)를 두 번 세지 않도록 주의
    # ADD ADDITIONAL CODE HERE!!
    return count


teachers = [Teacher(2), Teacher(3), Teacher(2)]
students = [Student(j) for j in range(7)]
for i in range(3): teachers[i].prefList = students[:]
for j in range(7): students[j].prefList = teachers[:]
teachers[0].prefList[0] = students[6]
teachers[0].prefList[6] = students[0]
teachers[0].apprentice = [students[0], students[1]]
teachers[1].apprentice = [students[2], students[3], students[4]]
teachers[2].apprentice = [students[5], students[6]]
students[0].advisor = students[1].advisor = teachers[0]
students[2].advisor = students[3].advisor = students[4].advisor = teachers[1]
students[5].advisor = students[6].advisor = teachers[2]
print(nUnstablePair(teachers, students))  # 2
```
