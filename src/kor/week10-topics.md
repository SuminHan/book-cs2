# Topics Covered

## Propose-Reject (Gale-Shapley) 알고리즘

Stable matching을 **실제로 계산**하는 알고리즘이다. 아이디어는 흔한
연애 시뮬레이션과 비슷하다: 남자는 자기 선호 순서대로 계속 프로포즈하고,
여자는 프로포즈를 받을 때마다 "지금까지 받은 것 중 최선"과 잠정적으로
맺어지되, 더 나은 프로포즈가 오면 갈아탄다.

```
모든 남자/여자를 free(솔로)로 초기화

while 아직 프로포즈 안 한 여자가 있는 free한 남자 m이 존재:
    그런 m을 아무나 선택   # 선택 순서는 최종 결과에 영향 없음
    w = m이 아직 프로포즈 안 한 여자 중 가장 선호하는 여자

    if w가 free:
        m과 w를 잠정적으로 engage
    elif w가 자신의 현재 파트너보다 m을 선호:
        w의 기존 파트너와 breakUp, m과 engage
    else:
        아무 일도 없음 (w가 m을 거절)
```

**직관적으로 그럴듯해 보이지만, 이 알고리즘이 실제로 stable matching을
계산해준다는 것은 증명이 필요하다** — 종료된다는 것도, 종료됐을 때
perfect하다는 것도, 종료됐을 때 stable하다는 것도 각각 별도로 증명해야
한다(자세한 증명은 생략하되, 결론만 정리하면 아래와 같다).

- **항상 종료**: 각 남자는 최대 `n`번만 프로포즈할 수 있으므로, `while`
  루프는 최대 \\(n^2\\)번 반복 후 끝난다.
- **결과는 항상 perfect matching**: 만약 어떤 남자가 솔로로 남았다면,
  그는 모든 여자에게 거절당했다는 뜻인데 — 여자는 한 번 맺어지면 절대
  다시 솔로가 되지 않으므로 모든 여자도 이미 다 맺어져 있어야 하고, 이는
  모순이다.
- **결과는 항상 stable**: 만약 unstable pair `(m, w)`가 있었다면, `m`이
  `w`에게 프로포즈했든 안 했든 둘 다 모순이 발생한다(자세한 논증은 부록
  참고).

## Python 구현

`Person`에 두 필드를 추가한다: `numProposal`(이 남자가 지금까지 몇 번
프로포즈했는지 — 남자에게만 의미 있음), 그리고 다음에 프로포즈할 여자를
알려주는 메소드:

```python
class Person:
    def __init__(self, name, gender):
        ...
        self.numProposal = 0    # 남자인 경우에만 사용

    def womanToPropose(self):   # 남자인 경우에만 사용, modifier
        w = self.prefList[self.numProposal]
        self.numProposal += 1
        return w
```

`findMatch`는 free한 남자가 없을 때까지 위 알고리즘을 그대로 코드로
옮긴 것이다 — `isFree()`, `womanToPropose()`, `prefer()`(Week 9)로
상황을 파악하고, `engage()`/`breakUp()`(Week 9)로 실제 상태를 바꾼다:

```python
def findMatch(men, women):
    n = len(men)
    numFreeMen = n
    while numFreeMen > 0:
        m = free한 남자 아무나
        w = m.womanToPropose()
        if w가 free:
            m.engage(w)
            numFreeMen -= 1
        elif w.prefer(m):              # w가 m을 현재 파트너보다 선호
            w.partner.breakUp()        # (breakUp 후 numFreeMen 다시 +1 필요)
            m.engage(w)
        # else: w가 m을 거절 — 할 일 없음, m은 계속 free 상태로 다음 루프에서
        #       또 프로포즈하게 됨
```

## Man-Optimal / Woman-Pessimal

같은 입력에 대해 stable matching이 여러 개 존재할 수 있는데(유일하지
않음), propose-reject 알고리즘이 찾아내는 결과는 항상 **남자 각각에게
가능한 stable matching 중 최선의 파트너를, 여자 각각에게는 최악의
파트너를** 준다는 놀라운 성질이 있다(남자가 먼저 프로포즈하기
때문). 남녀 역할을 바꿔 여자가 프로포즈하게 하면 반대로
woman-optimal/man-pessimal 결과가 나온다.

이로부터 실전 교훈도 나온다: **프로포즈하는 쪽이 유리하다** — 솔직하게
좋아하는 순서대로 적극적으로 프로포즈하는 것이 전략적으로 손해가 없는
반면(남자), 수동적으로 프로포즈를 기다리며 어장관리만 하는 쪽(여자)은
불리하다.
