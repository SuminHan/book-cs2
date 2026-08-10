# Poker Hands


- `Card(suit, rank)`, `Hand(cards)`(카드 5장) 클래스
- `getNumCardsByRank()` / `getNumCardsBySuit()` — rank(1~13)별/suit(0~3)별 카드
  개수를 세어 리스트로 반환 (이후 모든 판정 함수의 기반)
- 포커 핸드 종류 간 포함관계에 유의 — 예: full house를 판정할 땐 quadruple을
  제외해야 하고, flush를 판정할 땐 straight flush를 제외해야 함(tie-breaking rule)
- Monte Carlo 시뮬레이션: 무작위 핸드를 대량 생성해 각 핸드 종류의 등장 확률을
  통계적으로 추정
