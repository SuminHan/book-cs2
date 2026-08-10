# Problem Set

### 필수 문제

**1.** Write a function `womanToPropose` that work on the class `Person`.
- input parameter: `self` (`self`가 남자일때만 사용됨)
- action:
  1. `self`는 `prefList` 순서대로 여자들에게 propose하는데 이번 차례에
     propose할 여자를 return.
  2. 다음 차례에 propose할 여자를 기록해두기 위해 `numProposal`도
     적절히 수정해줘야 함

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
        # ADD ADDITIONAL CODE HERE!!
```

**2.** Write a function `findMatch`:
- input parameter: Two lists `men`/`women` of `Person` objects
  - `men` represents the list of `Person` objects each of which
    represents a man
  - `women` represents the list of `Person` objects each of which
    represents a woman
  - 지난주 문제에서는 `men`/`women`의 파트너 정보(즉, matching)이 이미
    주어진 상태에서 stability를 check만 하는 것이었고, 이 문제는 파트너
    정보(matching)이 전혀 채워지지 않은 상태로 `men`/`women`이 넘어옴
- action: stable matching이 되도록 파트너 정보를 채움
- return value: 없음 (**modifier**)

```python
def findMatch(men, women):
    assert len(men) == len(women)
    n = len(men)

    numFreeMen = n  # initially, every man has no partner
    while numFreeMen > 0:
        # search for a free man
        # (it is already proved that the order of selecting free men
        #  does not affect the correctness/output of the algorithm)

        # find the woman that this man is about to propose to
        # by using womanToPropose()

        # if the woman is free, then engage these man/woman,
        # and decrement numFreemen

        # elif the woman prefer the man to her current partner,
        # then break up the current couple and engage these man & woman

        # else the woman rejects the man
        # (is there anything to do in program?)

        # ADD ADDITIONAL CODE HERE!!
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**3.** Consider the following situation: a shipping company owns `n`
ships \\(S_0,\ldots,S_{n-1}\\) and `n` ports \\(P_0,\ldots,P_{n-1}\\).
Each ship has a **schedule** that says, for each day of the period, which
of the ports it's visiting, or whether it's out at sea (기간은 `m`일,
`m>n`이라고 가정). Each ship visits each port for exactly one day during
the period. For safety reasons, the following condition is imposed on
schedules of ships:

> (†) No two ships can be in the same port on the same day.

For example, `n=2, m=4`이고, 배 \\(S_0\\)의 스케줄이
`[port0, sea, port1, sea]`, 배 \\(S_1\\)의 스케줄이
`[sea, port0, sea, port1]`이면 위 조건을 만족한다.

Now, the company wants to **truncate**(단축하다) each ship's schedule
(for repairing): 각 배 \\(S_i\\)에 대해, 예정된 항구에 도착하는 어떤
날짜가 있어 그 날부터 기간이 끝날 때까지 그 항구에 계속 머무른다(그
기간동안 남은 항구들은 방문하지 않음). 예를 들어, 회사는 \\(S_0\\)의
단축된 스케줄을 `[port0, sea, port1, port1]`로, \\(S_1\\)의 단축된
스케줄을 `[sea, port0, port0, port0]`로 정할 수 있다 (즉 \\(S_0\\)은 3일째
`port1`에 멈추고, \\(S_1\\)은 2일째 `port0`에 멈춤). 이 단축은 조건(†)을
위배하면 안 된다(즉, 단축된 스케줄 하에서도 어떤 두 배도 같은 날 같은
항구에 있으면 안 된다). 위 단축 예시는 이 조건을 만족한다. 하지만 만약
\\(S_0\\)의 단축된 스케줄을 `[port0, port0, port0, port0]`(1일째 멈춤)로,
\\(S_1\\)의 것을 `[sea, port0, sea, port1]`(원본 그대로)로 정하면, 두 배
모두 2일째 `port0`에 있게 되어 조건(†)을 위배한다.

Write a function `compute_schedule`:
- input parameter: a 2D `n×m` list that represents original schedules of
  ships (위 예시의 경우 `[[0,None,1,None],[None,0,None,1]]`)
  - `None` represents "at sea" and an integer represents the port index
- return value: any truncated schedule that satisfies the condition (†),
  represented by a list of "stopping" ports of ships
  \\(S_0,S_1,\ldots,S_{n-1}\\). `None` if no such one exists
  - 위 예시의 경우 `[1,0]` (\\(S_0\\)는 `port1`에, \\(S_1\\)은 `port0`에
    멈춤)

Also, **prove the correctness** of your algorithm. (Without the
correctness proof, you will not get a point.)

Hint:
- Find a link between this problem and the stable matching problem and
  make use of the code for stable matching.
- Use the modifier `L.reverse()` to reverse a list `L`.

```python
def compute_schedule(schedule):
    # ADD ADDITIONAL CODE HERE!

schedule = [[0, None, 1, None], [None, 0, None, 1]]
print(compute_schedule(schedule))  # [1, 0]
```
