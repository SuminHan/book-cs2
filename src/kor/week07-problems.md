# Problem Set

### 필수 문제

**1. `equilibrium(n, S1, S2)`** — 자유 물체 \\(n\\)개, 자유-자유 스프링 리스트 `S1`,
자유-고정 스프링 리스트 `S2`가 주어질 때, 각 자유 물체의 평형 위치
`[[x1,y1], ..., [xn,yn]]`을 반환.

- `S1[i] = [elastic_coeff, free_idx_a, free_idx_b]` — 두 자유 물체를 잇는 스프링
- `S2[i] = [elastic_coeff, free_idx, fixed_x, fixed_y]` — 자유 물체와 고정 물체를
  잇는 스프링

```python
# copy the function gaussian_elimination from L06 here
def equilibrium(n, S1, S2):
    ax = [[0] * n for i in range(n)]
    bx = [0] * n
    ay = [[0] * n for i in range(n)]
    by = [0] * n
    # ADD ADDITIONAL CODE HERE!

S1 = [[1,0,1]]
S2 = [[4,0,-2,7], [3,0,-6,2], [2,1,6,-1], [5,1,2,-5]]
print(equilibrium(2, S1, S2))
# [[-2.95, 3.89], [2.38, -2.89]]
```

### Optional Problems

*필수 문제와 달리 제출/검사 대상은 아니지만 도움이 되므로 시간이 남으면
시도해볼 것을 권장 (대부분 기출문제).*

**2. `dice(n, m, A)`** — \\(1 \times n\\) 격자 위에서, \\(m\\)면체 주사위를 굴려 나온
수만큼 동전을 오른쪽으로 옮기고(단, 화살표 `A`를 만나면 도착점으로 순간이동)
\\(n\\)번 칸에 도달하면 끝나는 게임에서, 게임이 끝날 때까지 주사위를 굴리는
횟수의 기댓값을 정확히(오차 \\(10^{-10}\\) 이내) 계산.

```python
def dice(n, m, A):
    # ADD ADDITIONAL CODE HERE!
```

**3. `secret(n, t, T, x, s)`** — 다항함수를 이용한 비밀 분산(secret sharing) 문제.
딜러가 정수 비밀 \\(S\\)를, \\(\ell\\)개의 그룹으로 나뉜 \\(N\\)명에게 각각 정보 조각을
나눠준다. 조건을 만족하는 인원(전체 \\(T\\)명 이상, 각 그룹에서 \\(t_i\\)명 이상)이
모이면 다항식 값들로부터 \\(S\\)를 유일하게 복구할 수 있고, 조건을 만족하지 못하면
복구할 수 없다. 모인 사람들의 정보 `s`(모이지 않은 사람은 `None`)와 공개된
좌표 `x`로부터 비밀 `S`를 복구하는 함수를 작성.

```python
def secret(n, t, T, x, s):
    # ADD ADDITIONAL CODE HERE!
```
