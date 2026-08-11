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
```

**1.** Write a function `getNumCardsBySuit` that work on the class `Hand`:
- input parameter: `self`
- return value: list `self.cards`에 포함된 5개의 `Card` object들의
  suit값(0,1,2,3)의 등장 횟수를 기록한 새로운 list
  - 수업 슬라이드에서 세로축으로 그려진 list `numCardsBySuit`로 ♣ 모양의
    카드의 갯수는 `numCardsBySuit[0]`, ..., ♠ 모양의 카드의 갯수는
    `numCardsBySuit[3]`
  - `numCardsBySuit`의 index는 각 `Card` object의 suit 값에 대응됨

**2.** Write functions for determining "straight flush"/"straight"/"flush":

1. Write a function `atLeastStraight`:
   - input parameter: a `Hand` object `hand`
   - return value: `True`(if hand is "straight" or "straight flush"),
     `False`(otherwise)
   - *suit가 모두 같은지 여부는 따질 필요 없고 rank 값만 따져보면 되므로
     `L = hand.getNumCardsByRank()`로 얻은 `L` 정보만으로 충분. 주어진
     함수 `hasConsecutivePositive`를 이용하면 코드가 매우 간단해짐.*
2. Write a function `atLeastFlush`:
   - input parameter: a `Hand` object `hand`
   - return value: `True`(if hand is "flush" or "straight flush"),
     `False`(otherwise)
   - *rank 정보는 필요없고 suit 값만 따져보면 되므로 `L =
     hand.getNumCardsBySuit()`로 얻은 `L` 정보만으로 충분*
3. Write a function `straightFlush`:
   - input parameter: a `Hand` object `hand`
   - return value: `True`(if hand is "straight flush"), `False`(otherwise)
   - *함수 `atLeastStraight`와 `atLeastFlush`를 이용하면 매우 간단하게
     해결됨*
4. Write a function `flush`:
   - input parameter: a `Hand` object `hand`
   - return value: `True`(if hand is "flush"), `False`(otherwise)
   - *tie-breaking rule에 의해 "straight flush" 경우는 제외해줘야 함. 위의
     함수들을 이용하면 쉽게 해결됨*
5. Write a function `straight`:
   - input parameter: a `Hand` object `hand`
   - return value: `True`(if hand is "straight"), `False`(otherwise)
   - *마찬가지로 "straight flush" 경우는 제외해줘야 함*

```python
# use this function for atLeastStraight()
def hasConsecutivePositive(L, k):
    n = len(L)
    assert k <= n
    counter = 0
    for i in range(n + 1):  # +1: account for wrapping
        if L[i % n] >= 1:
            counter += 1
            if counter == k:
                return True
        else:
            counter = 0  # reset
    return False

def atLeastStraight(hand):
    L = hand.getNumCardsByRank()
    # ADD ADDITIONAL CODE HERE!!

def atLeastFlush(hand):  # for some pattern
    L = hand.getNumCardsBySuit()
    # ADD ADDITIONAL CODE HERE!!

def straightFlush(hand):
    # ADD ADDITIONAL CODE HERE!!

def flush(hand):
    # ADD ADDITIONAL CODE HERE!!

def straight(hand):
    # ADD ADDITIONAL CODE HERE!!
```

**3.** Write functions for determining "quadruple"/"full house"/"triple"/
"two pair"/"pair":

1. Write a function `hasMultipleCardsWithSameRank`:
   - input parameter: a `Hand` object `hand` and an integer `num`
   - return value: `True`(if hand contains **exactly** `num` cards of a
     certain rank), `False`(otherwise)
   - *예를 들어, `hasMultipleCardsWithSameRank(hand,4)`는 `hand`가
     "quadruple"일 때 `True`이며 그 역도 성립한다.*
2. Write a function `fullHouse`:
   - input parameter: a `Hand` object `hand`
   - return value: `True`(if hand is "full house"), `False`(otherwise)
   - *`hasMultipleCardsWithSameRank`를 이용하면 간단하게 해결됨*
3. Write a function `triple`:
   - input parameter: a `Hand` object `hand`
   - return value: `True`(if hand is "triple"), `False`(otherwise)
   - *함수 `hasMultipleCardsWithSameRank`를 이용하면 간단하게 해결됨*
   - *tie-breaking rule에 의해 "full house"와 "quadruple" 경우는
     제외해줘야 함*
4. Write a function `twoPair`:
   - input parameter: a `Hand` object `hand`
   - return value: `True`(if hand is "two pair"), `False`(otherwise)
   - *`hasMultipleCardsWithSameRank`는 "for some" 패턴으로 만들어졌는데,
     이와 유사하게 counter 패턴으로 변형*
   - *tie-breaking rule에 의해 "full house" 경우는 제외해야*
5. Write a function `pair`:
   - input parameter: a `Hand` object `hand`
   - return value: `True`(if hand is "pair"), `False`(otherwise)
   - *`hasMultipleCardsWithSameRank`를 이용*
   - *tie-breaking rule에 의해 "full house", "two pair", "quadruple",
     "triple" 경우는 제외해야*

```python
def hasMultipleCardsWithSameRank(hand, num):  # for some pattern
    L = hand.getNumCardsByRank()
    # ADD ADDITIONAL CODE HERE!!

def quadruple(hand):
    return hasMultipleCardsWithSameRank(hand, 4)

def fullHouse(hand):
    # ADD ADDITIONAL CODE HERE!!

def triple(hand):
    # ADD ADDITIONAL CODE HERE!!

def twoPair(hand):  # counter pattern
    L = hand.getNumCardsByRank()
    # ADD ADDITIONAL CODE HERE!!

def pair(hand):
    # ADD ADDITIONAL CODE HERE!!
```

**4.** Write a function `countPokerHands`:
- input parameter: a list of `Hand` objects (함수 `randomHand`로
  랜덤하게 생성한 수십만~수천만 개의 `Hand` object들의 list)
- return value: `Hand` object들을 "straight flush", "quadruple", "full
  house", "flush", "straight", "triple", "two pair", "pair"로
  분류했을때 각 포커패에 속하는 것들의 갯수를 세어서 이 순서대로 나열한
  list

```python
# counter pattern
def countPokerHands(hands):
    nStraightFlush = 0
    nQuadruple = 0
    nFullHouse = 0
    nFlush = 0
    nStraight = 0
    nTriple = 0
    nTwoPair = 0
    nPair = 0

    for i in range(len(hands)):
        hand = hands[i]
        # ADD ADDITIONAL CODE HERE!!

    return [nStraightFlush, nQuadruple, nFullHouse, nFlush,
            nStraight, nTriple, nTwoPair, nPair]

def randomHand(numCards):
    cards = []
    for suit in range(4):
        for rank in range(1, 13+1):
            cards.append(Card(suit, rank))
    random.shuffle(cards)
    return Hand(cards[:numCards])

def test():
    print("\nWait for your program to estimate probabilities with 5-card hand...")

    hands = []
    nTrials = 100000  # 26000000
    for i in range(nTrials):
        hands.append(randomHand(5))
    L = countPokerHands(hands)

    print("Straight Flush:" + str(1.0*L[0]/nTrials*100))
    print("Quadruple:" + str(1.0*L[1]/nTrials*100))
    print("Full House:" + str(1.0*L[2]/nTrials*100))
    print("Flush:" + str(1.0*L[3]/nTrials*100))
    print("Straight:" + str(1.0*L[4]/nTrials*100))
    print("Triple:" + str(1.0*L[5]/nTrials*100))
    print("TwoPair:" + str(1.0*L[6]/nTrials*100))
    print("Pair:" + str(1.0*L[7]/nTrials*100))

test()
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만, 큰 도움이 되므로 시간이 남으면
모두 시도해보는 것을 권합니다 (대부분 기출문제입니다).*

**5.** 다음과 같이 정의된 함수 `nDistinct`를 완성하라:
- 입력: `Hand` object인 `hand`
  - `hand`에 포함된 카드의 갯수는 5가 아닐 수 있다
  - `hand`에 포함된 카드들 중 동일한 suit/rank를 가진 카드들도 있다
- 리턴값: `hand`에 포함된 카드들 중 다른 것들의 갯수

**6.** 다음과 같이 정의된 함수 `k_flush`를 완성하라:
- 입력: 정수 `k >= 0`와 `Hand` object인 `hand`
  - `hand`에 포함된 카드의 갯수는 5가 아닐 수 있다
  - `hand`에 포함된 카드들 중 동일한 suit/rank를 가진 카드는 없다
- 리턴값: `hand`에 `ℓ`장의 카드를 추가해서 `k`-flush로 만들 수 있는 `ℓ`중
  최소값
  - `k`개 이상의 동일한 suit를 포함한 `hand`를 `k`-flush로 부른다

**7.** 다음과 같이 정의된 함수 `k_straight`를 완성하라:
- 입력: 양의 정수 `k <= 13`과 `Hand` object인 `hand` (`hand`의 조건은
  6번 문제와 동일)
- 리턴값: `hand`에 `ℓ`장의 카드를 추가해서 `k`-straight로 만들 수 있는
  `ℓ`중 최소값
  - `k`개 이상의 consecutive rank를 포함한 `hand`를 `k`-straight로
    부른다
  - 이 문제에서의 `k`-straight는 모든 "wrap-around"를 허용한다. 예를
    들어, Jack-Queen-King-Ace, Queen-King-Ace-2, King-Ace-2-3는 모두
    4-straight이다. (수업시간에 다루었던 straight는 마지막이 Ace인
    경우까지만 허용)

**8.** 다음과 같이 정의된 함수 `k_straight_flush`를 완성하라:
- 입력: 양의 정수 `k <= 13`과 `Hand` object인 `hand`
  - `hand`에 포함된 카드의 갯수는 5가 아닐 수 있다
  - `hand`에 포함된 카드들 중 동일한 suit/rank를 가진 카드는 없다
- 리턴값: `hand`에 `ℓ`(≥0)장의 카드를 추가해서 `k`-straight-flush로 만들
  수 있는 `ℓ`중 최소값
  - `hand`에 포함된 어떤 `k`개의 카드들이 존재하여, 이들이 모두 같은
    suit를 가지고 rank들이 "`k`-straight"하면 `hand`가
    `k`-straight-flush라고 부른다
  - 이 문제에서의 `k`-straight는 (7번 문제와 마찬가지로) 모든
    "wrap-around"를 허용한다.
  - *6, 7번 문제를 일반화시킨 것으로 `k`-straight-flush는
    `k`-straight와 `k`-flush를 단순히 and로 연결한 것이 아님에 유의.*

**9.** 포커 규칙을 다음과 같이 약간 변형한 상황을 고려하자: rank가 2인
카드는 임의의 suit/rank로 변환할 수 있다(변환하지 않아도 됨). 예를 들어,
hand `(♣2, ♡3, ♣3, ♠3, ♡4)`는 다음 중 임의로 변환해도 된다:
`(◇3, ♡3, ♣3, ♠3, ♡4)`(quadruple), `(♣4, ♡3, ♣3, ♠3, ♡4)`(full house),
`(♣2, ♡3, ♣3, ♠3, ♡4)`(triple, as it is without being changed).

다음과 같이 정의된 함수 `full_house`를 완성하라:
- 입력: 5개의 `Card`로 구성된 `Hand` object (11주차 문제와 같은 형태)
- 리턴값: `True`(주어진 입력을 위 규칙에 따라 변환하면 full house가 될
  수 있을 때), `False`(otherwise)
  - 예: 입력이 `(♣2, ♡3, ♣3, ♠3, ♡4)`면 `♣2`를 `♣4`로 변환하여 full
    house로 만들 수 있으므로 `True`를 리턴

**10.** 이 문제에서는 "#11: Poker Hands"에서 hand에 포함된 카드의
개수가 5가 아닌 경우를 고려한다(6개 이상의 카드들로 hand가 구성될 수도
있고, 4개 이하의 카드들로 구성될 수도 있다). 이러한 상황에서 straight,
flush, straight flush를 다음과 같이 재정의하자:
1. **straight**: 모든 카드들의 rank들을 연속되게 나열할 수 있을 경우
   - 7, 8번 문제에서와 같이 모든 "wrap-arounds"를 허용한다.
   - 예를 들어, 6장의 카드 `(♣King), (♠Ace), (♡2), (◇3), (♣4), (♣5)`로
     구성된 hand는 straight이다
2. **flush**: 모든 카드들이 같은 suit를 가지는 경우
3. **straight flush**: 위 두 조건을 모두 만족하는 경우

위 정의에 따르면 straight flush인 hand는 straight일 수도 있고 flush일
수도 있는데, 이러한 hand는 straight flush로만 분류하고 straight나
flush로는 분류하지 않는다. 즉:
- **straight**: 조건 1은 만족하되 조건 2는 만족하지 않는 경우
- **flush**: 조건 2는 만족하되 조건 1은 만족하지 않는 경우

로 분류한다.

다음과 같이 정의된 함수 `flush`를 완성하라:
- 입력: `Hand` object인 `hand`
  - `hand`에 포함된 카드의 개수는 3 이상 12 이하
  - `hand`에 포함된 카드들 중 동일한(suit와 rank가 모두 일치하는)
    카드는 없음
- 리턴값: `1`(hand가 flush인 경우), `0`(그렇지 않은 경우)
  - 상술한 바와 같이 hand가 straight flush이면 이는 flush로 분류하지
    않으므로 `0`을 리턴해야 한다.

**11.** 주어진 hand에 포함된 카드들 중 세개를 적절히 선택하여 세개의
rank를 더한 값을 최대화하되 주어진 자연수 `k` 값은 넘지 않도록 하려고
한다. 즉, 세개의 rank를 더한 값들 중 `k` 이하인 것들만 골라내고 이들 중
최대값을 hand의 "`k`-점수"로 정의하자.

다음과 같이 정의된 함수 `k_score`를 완성하라:
- 입력: `Hand` object인 `hand`와 정수 `k`
  - `hand`에 포함된 카드의 갯수는 5가 아닐 수 있다.
  - `hand`에 포함된 카드들 중 suit와 rank 모두 동일한 카드는 없다.
    하지만 suit만 동일하거나 rank만 동일한 카드는 있을 수 있다.
- 리턴값: `hand`의 "`k`-점수"
  - 세개의 카드의 rank를 더한 값이 모두 `k`보다 크면 `0`을 리턴
