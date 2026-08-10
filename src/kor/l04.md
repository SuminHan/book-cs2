# Multi-Dimensional Lists


- 2차원 배열: `table[i]`는 `i`행에 대응하는 리스트. `height = len(table)`,
  `width = len(table[0])`
- 3차원 배열: `table[i]`는 `i`층에 대응하는 2D 배열. `depth = len(table)`,
  `height = len(table[0])`, `width = len(table[0][0])`
- 다중 for 루프로 모든 칸 순회: counter, max/min, "for all" 패턴이 그대로 확장됨
- 경계 체크 함수(`withinBoundary`)로 인접 칸을 안전하게 순회
