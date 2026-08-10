# Problem Set


이미 주어진 클래스와 헬퍼 함수:

```python
class Card:
    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank

class Hand:
    def __init__(self, cards):
        self.cards = cards
        assert len(cards) == 5

    def getNumCardsByRank(self):
        numCardsByRank = [0] * 13
        for i in range(len(self.cards)):
            j = self.cards[i].rank
            assert 1 <= j <= 13
            numCardsByRank[j - 1] += 1
        return numCardsByRank

    def getNumCardsBySuit(self):
        numCardsBySuit = [0] * 4
        # ADD ADDITIONAL CODE HERE!

# atLeastStraight에서 사용할 헬퍼: L을 원형으로 봤을 때 k개 연속으로 1 이상인
# 구간이 있는지
def hasConsecutivePositive(L, k):
    n = len(L)
    assert k <= n
    counter = 0
    for i in range(n + 1):  # +1: wrap-around 처리
        if L[i % n] >= 1:
            counter += 1
            if counter == k:
                return True
        else:
            counter = 0
    return False
```

### 필수 문제

**1. `Hand.getNumCardsBySuit(self)`** — 5장 카드의 suit별(0~3) 개수를 리스트로
반환.

**2. `atLeastStraight` / `atLeastFlush` / `straightFlush` / `flush` / `straight`**
— straight/flush 계열 판정.

```python
def atLeastStraight(hand):   # straight 또는 straight flush
    L = hand.getNumCardsByRank()
    # ADD ADDITIONAL CODE HERE! (hasConsecutivePositive(L, 5) 활용)

def atLeastFlush(hand):      # flush 또는 straight flush, "for some" 패턴
    L = hand.getNumCardsBySuit()
    # ADD ADDITIONAL CODE HERE!

def straightFlush(hand):
    # ADD ADDITIONAL CODE HERE!

def flush(hand):
    # ADD ADDITIONAL CODE HERE!

def straight(hand):
    # ADD ADDITIONAL CODE HERE!
```

**3. `hasMultipleCardsWithSameRank` / `quadruple` / `fullHouse` / `triple` /
`twoPair` / `pair`**

```python
def hasMultipleCardsWithSameRank(hand, num):  # "for some" 패턴
    L = hand.getNumCardsByRank()
    # ADD ADDITIONAL CODE HERE! (어떤 rank의 카드가 정확히 num장 있는가)

def quadruple(hand):
    return hasMultipleCardsWithSameRank(hand, 4)

def fullHouse(hand):
    # ADD ADDITIONAL CODE HERE!

def triple(hand):
    # ADD ADDITIONAL CODE HERE!

def twoPair(hand):   # counter 패턴으로 변형
    L = hand.getNumCardsByRank()
    # ADD ADDITIONAL CODE HERE!

def pair(hand):
    # ADD ADDITIONAL CODE HERE!
```

**4. `countPokerHands(hands)`** — `Hand` 객체 리스트(무작위로 생성된 대량의
핸드)를 straight flush/quadruple/full house/flush/straight/triple/two pair/pair
순서로 분류해 각 개수를 담은 리스트를 반환 (counter 패턴).

```python
def countPokerHands(hands):
    nStraightFlush = nQuadruple = nFullHouse = nFlush = 0
    nStraight = nTriple = nTwoPair = nPair = 0
    for i in range(len(hands)):
        hand = hands[i]
        # ADD ADDITIONAL CODE HERE!
    return [nStraightFlush, nQuadruple, nFullHouse, nFlush,
            nStraight, nTriple, nTwoPair, nPair]

def randomHand(numCards):
    cards = []
    for suit in range(4):
        for rank in range(1, 14):
            cards.append(Card(suit, rank))
    random.shuffle(cards)
    return Hand(cards[:numCards])

def test():
    hands = [randomHand(5) for _ in range(100000)]
    L = countPokerHands(hands)
    labels = ["Straight Flush", "Quadruple", "Full House", "Flush",
              "Straight", "Triple", "TwoPair", "Pair"]
    for label, count in zip(labels, L):
        print(label + ":" + str(1.0 * count / len(hands) * 100))
test()
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만 도움이 되므로 시간이 남으면
시도해볼 것을 권장 (대부분 기출문제).*

**5. `nDistinct(hand)`** — 카드 개수가 5가 아닐 수도 있는 `hand`에서, (suit,rank)
가 서로 다른 카드의 개수를 반환.

**6. `k_flush(k, hand)`** — 중복 카드가 없는 `hand`에 카드를 몇 장 추가해야
"k-flush"(같은 suit가 k장 이상)를 만들 수 있는지, 최소 추가 장수를 반환.

**7. `k_straight(k, hand)`** — 마찬가지로, 카드를 몇 장 추가해야 "k-straight"
(연속된 rank가 k개 이상, wrap-around 허용)를 만들 수 있는지 최소 추가 장수를
반환. 예: Jack-Queen-King-Ace, Queen-King-Ace-2, King-Ace-2-3 모두 4-straight로
인정(수업에서 다룬 straight보다 넓은 정의).

**8. `k_straight_flush(k, hand)`** — 6, 7번을 결합한 일반화. 같은 suit이면서
k-straight인 부분집합을 만들기 위한 최소 추가 장수(단순히 6, 7번 조건의 AND가
아님에 유의).

**9. `full_house(hand)`(변형 규칙)** — rank 2인 카드를 임의의 suit/rank로
자유롭게 바꿀 수 있다는 규칙 하에서, 5장 핸드가 (그렇게 바꿔서) full house가
될 수 있으면 `True`.

**10. `flush(hand)`(카드 개수 3~12장으로 일반화)** — straight/flush/straight
flush를 카드 개수가 5장이 아닌 경우로 재정의(모든 카드의 rank가 연속이면
straight, 모든 카드가 같은 suit면 flush, 둘 다면 straight flush로만 분류).
straight flush가 아니면서 flush인 경우에만 `1`, 아니면 `0`을 반환.

**11. `k_score(hand, k)`** — `hand`에서 카드 3장을 골라 rank 합이 `k` 이하이면서
최대가 되는 값("k-점수")을 반환(불가능하면 0).
