# Topics Covered

## 선형 연립방정식

많은 과학/공학 문제가 \\(a \cdot x = b\\) 형태의 선형 연립방정식으로
귀결된다. 행렬 역원(determinant/cofactor 기반)으로 직접 풀면 시간이
\\(n!\\)에 비례해 순식간에 감당 못 할 정도로 커진다. **Gaussian
elimination**은 같은 문제를 \\(n^3\\)에 비례하는 시간에 푼다(부수적으로
행렬의 determinant, rank, basis, inverse 계산에도 쓸 수 있다).

## Upper Triangular Form과 Back Substitution

`i > j`인 모든 자리에서 `a[i][j] == 0`인 형태를 **upper triangular
form**(row echelon form)이라 한다. 이 형태는 아래 행부터 위로 하나씩
**대입**해서 쉽게 풀 수 있다(뒤에서부터 풀어나간다는 뜻에서 back
substitution):

```python
for i in range(n-1, -1, -1):
    total = 0
    for j in range(i+1, n):
        total += a[i][j] * x[j]
    x[i] = (b[i] - total) / a[i][i]
```

## Forward Elimination: 두 가지 Row Operation

Gaussian elimination은 두 단계로 이루어진다: **① forward elimination** —
row operation을 반복 적용해 시스템을 upper triangular 형태로 만들고,
**② back substitution** — 그 형태를 위 방식대로 푼다.

row operation은 두 종류뿐이다:

- 행 `p`와 `q`를 통째로 교환
- 행 `p`의 배수를 행 `q`에 더하기

두 연산 모두 **해를 바꾸지 않는다**(방정식의 성질을 그대로 보존). 그리고
어떤 연립방정식이든 이 두 연산만으로 upper triangular 형태로 만들 수
있다는 것이 증명되어 있다.

forward elimination은, 각 pivot `a[p][p]`에 대해 그 **아래**에 있는
모든 행의 `p`번째 항을 0으로 지운다:

```python
for p in range(n):
    for i in range(p+1, n):
        c = a[i][p] / a[p][p]
        for j in range(p, n):
            a[i][j] -= c * a[p][j]
        b[i] -= c * b[p]
```

행 `i`에서 "행 `p`의 `c`배를 빼기"만 하면 `a[i][p]`가 정확히 0이 된다
(`c = a[i][p] / a[p][p]`이므로).

## Partial Pivoting

위 코드는 `a[p][p] == 0`이면(0으로 나누게 되어) 작동하지 않는다. **Partial
pivoting**: 행 `p`를, `p` 아래 행 중 `p`번째 값의 절댓값이 가장 큰 행
`q`와 미리 교환해둔다(수치적으로도 더 안정적).

```python
q = p
for i in range(p+1, n):
    if abs(a[i][p]) > abs(a[q][p]):
        q = i
a[p], a[q] = a[q], a[p]
b[p], b[q] = b[q], b[p]

if a[p][p] == 0:
    return None   # 해가 없거나 무수히 많음
```

pivoting까지 마친 뒤에도 `a[p][p] == 0`이라면 — 즉 `p` 아래 모든 행의
`p`번째 값이 전부 0이라면 — 그 시스템은 해가 없거나 무수히 많다(증명은
선형대수 교재 참고).

## 전체 구조

```python
def gaussian_elimination(a, b):
    n = len(a)
    # forward elimination
    for p in range(n):
        # partial pivoting: a[p][p]가 0이 아니도록 가장 큰 절댓값의 행과 교환
        # a[p] 아래 모든 행의 p번째 항을 0으로 소거
        ...
    # 이제 a는 upper triangular

    # back substitution으로 x 계산
    ...
    return x
```
