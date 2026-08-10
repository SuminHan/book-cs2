# Problem Set


### 필수 문제

**1. `Person.womanToPropose(self)`** — (`self`가 남자일 때만 사용) `prefList`
순서대로 다음 차례에 프로포즈할 여자를 반환하고, `numProposal`을 갱신.

```python
class Person(object):
    def __init__(self, name, gender):
        ...
        self.prefList = None    # preference list (of Person objects)
        self.numProposal = 0    # used only if self is man
        ...

    def womanToPropose(self):   # used only if self is man
        assert self.gender == "male"
        assert self.numProposal < len(self.prefList)
        # ADD ADDITIONAL CODE HERE!
```

**2. `findMatch(men, women)`** — 파트너 정보가 전혀 채워지지 않은 `men`, `women`
에 대해, propose-reject 알고리즘으로 stable matching이 되도록 파트너 정보를
채우는 modifier (반환값 없음).

```python
def findMatch(men, women):
    assert len(men) == len(women)
    n = len(men)
    numFreeMen = n  # initially, every man has no partner
    while numFreeMen > 0:
        # 자유로운 남자를 하나 찾는다
        # (자유로운 남자를 고르는 순서는 알고리즘의 정확성/결과에 영향을 주지
        #  않음이 이미 증명되어 있음)
        # womanToPropose()로 이 남자가 이번에 프로포즈할 여자를 찾는다
        # 그 여자가 free하면 -> engage하고 numFreeMen 감소
        # 그 여자가 free하지 않지만 현재 파트너보다 이 남자를 선호하면
        #   -> 기존 커플 breakUp 후 이 남자와 engage
        # 그 외의 경우 -> 여자가 거절 (코드에서 딱히 할 일 없음)
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만 도움이 되므로 시간이 남으면
시도해볼 것을 권장 (대부분 기출문제).*

**3. `compute_schedule(schedule)`** — $n$척의 배 $S_0, \ldots, S_{n-1}$과 $n$개의
항구 $P_0, \ldots, P_{n-1}$가 있고, 각 배는 $m$일($m>n$) 동안의 스케줄(각 날짜에
어느 항구에 있는지, 또는 바다 위에 있는지)을 가진다. 각 배는 기간 중 각 항구를
정확히 하루씩 방문하며, 어떤 두 배도 같은 날 같은 항구에 있지 않는다는 조건(†)을
만족한다.

이제 회사는 각 배가 "어느 날짜부터 도착한 항구에 계속 머무르며(수리를 위해)
남은 스케줄을 취소"하도록 스케줄을 단축하려 한다 — 단, 단축된 스케줄에서도
조건(†)이 계속 성립해야 한다.

```python
# 입력: 원본 스케줄을 나타내는 2차원 n×m 리스트
# (None = 바다 위, 정수 = 항구 번호)
schedule = [[0, None, 1, None], [None, 0, None, 1]]

# 반환: 각 배가 "멈추는" 항구를 나타내는 리스트(조건(†)을 만족하는 것 아무거나),
# 그런 스케줄이 없으면 None
print(compute_schedule(schedule))  # [1, 0]
```
> 힌트: 이 문제와 stable matching 문제 사이의 연결고리를 찾아, stable matching
> 코드를 그대로 활용할 것. `L.reverse()`로 리스트를 뒤집을 수 있음. 답뿐 아니라
> 알고리즘의 정당성 증명도 필요.

---
*원본: `CS2(2026-2)_all/CS2/CS2/problem_set/P10.pdf`. 표현/코드는 정리하며 일부
재구성함.*
