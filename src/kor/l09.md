# Stable Matching I


- `Person` 객체: `gender`, `name`, `prefList`(선호도 리스트), `partner`(현재
  파트너, 없으면 `None`)
- `engage(self, p)` / `breakUp(self)` (modifier) — 파트너 관계를 맺거나 끊기
- `prefer(self, p)` (pure function) — `self`가 현재 파트너보다 `p`를 더
  선호하는지 (`.index(·)`로 선호도 리스트에서의 순위 비교)
- Stable matching: unstable pair(서로 바람나고 싶어하는 쌍)가 하나도 없는 매칭
