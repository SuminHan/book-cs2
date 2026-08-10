# Topics Covered

## 포커 패의 종류

카드 한 장은 suit(무늬) 4종류(♣♦♥♠) × rank(숫자) 13종류(A,2,...,10,J,Q,K —
A/J/Q/K는 각각 1/11/12/13으로 취급)로 이루어진다. 5장의 hand로 아래
9가지 족보를 판정한다(낮은 것부터):

- **pair**: 같은 rank 2장
- **two pair**: rank가 다른 pair 두 쌍
- **triple**: 같은 rank 3장
- **full house**: triple + pair (rank는 서로 다름)
- **straight**: rank가 연속 5장 (10,J,Q,K,A 포함)
- **flush**: 같은 suit 5장
- **quadruple**: 같은 rank 4장
- **straight flush**: straight이면서 flush

## 포함관계(Inclusion-Exclusion)와 우선순위

이 족보들은 서로 **포함관계**를 가진다: `straight_flush = flush ∩
straight`, `quadruple ⊂ triple ⊂ pair`, `full_house = triple ∩
two_pair`. 즉 한 hand가 여러 족보를 동시에 만족할 수 있다(예: quadruple인
hand는 자동으로 triple이기도, pair이기도 하다).

따라서 hand를 하나의 등급으로 분류할 때는 **가장 높은 순위의 것으로만**
분류해야 한다(순위: straight flush > quadruple > full house > flush >
straight > triple > two pair > pair). 판정 함수를 짤 때도 이 포함관계를
그대로 활용할 수 있다 — 예를 들어 `atLeastStraight`(straight 또는
straight flush)와 `atLeastFlush`(flush 또는 straight flush)를 먼저
만들면, `straightFlush = atLeastStraight and atLeastFlush`처럼 조합해서
구할 수 있다.

## `Card` / `Hand` Class

```python
class Card:
    def __init__(self, suit, rank):
        self.suit = suit    # 0,1,2,3  (♣,♦,♥,♠)
        self.rank = rank    # 1~13     (A,2,...,K)

class Hand:
    def __init__(self, cards):
        self.cards = cards  # Card object 5개의 list
```

## Rank별/Suit별 개수 세기

straight/flush 계열 판정 대부분은 "각 rank(또는 suit)의 카드가 몇 장씩
있는가"를 세는 것에서 시작한다 — 전형적인 **counter 패턴**의 응용:

```python
class Hand:
    ...
    def getNumCardsByRank(self):
        numCardsByRank = [0]*13
        for i in range(5):
            j = self.cards[i].rank         # 1 <= j <= 13
            numCardsByRank[j-1] += 1
        return numCardsByRank

    def getNumCardsBySuit(self):
        numCardsBySuit = [0]*4
        for i in range(5):
            j = self.cards[i].suit          # 0 <= j <= 3
            numCardsBySuit[j] += 1
        return numCardsBySuit
```

이 두 리스트만 있으면 대부분의 족보를 판정할 수 있다:

- **flush**: `getNumCardsBySuit()`의 원소 중 하나가 5인가? ("for some" 패턴)
- **quadruple/triple/pair**: `getNumCardsByRank()`의 원소 중 원하는 값(4, 3, 2)이
  있는가?
- **two pair**: `getNumCardsByRank()`에 2가 정확히 두 번 등장하는가?
  (counter 패턴)
- **straight**: `getNumCardsByRank()`에서 1이 5번 연속 등장하는가(원형으로
  봐서 A,K도 이어질 수 있음에 유의) — Week 11 Problem Set에 주어지는
  `hasConsecutivePositive`가 이 판정을 돕는 헬퍼 함수다.

## Monte Carlo Simulation으로 확률 추정

각 족보가 등장할 정확한 확률은 조합론으로 계산 가능하지만(예: straight
flush는 \\(40/2598960 \approx 0.0015\%\\)), 카드 수가 늘어나면(예: hand당
7장) 손으로 계산하기 매우 힘들어진다. 대신 **무작위로 대량의 hand를
생성해 각 족보의 등장 비율을 세는 것**으로 확률을 근사할 수 있다 — 이런
실험 방식을 **Monte Carlo simulation**이라 부른다. 실험 횟수 `n`이
많을수록 측정치가 이론적 확률에 더 가까워진다(통계학의 신뢰구간 이론으로
필요한 `n`을 정할 수 있다).

```python
def randomHand(numCards):
    cards = []
    for suit in range(4):
        for rank in range(1, 14):
            cards.append(Card(suit, rank))
    random.shuffle(cards)
    return Hand(cards[:numCards])
```
