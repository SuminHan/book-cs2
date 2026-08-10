# Art Gallery Problem


- Rectilinear polygon(수직선/수평선으로만 이루어진 다각형)의 방향(시계/
  반시계) 판별
- 하나의 CCTV(감시 카메라)로 다각형 내부 전체를 감시할 수 있는 "설치 가능
  영역"을 leftMax/rightMin/bottomMax/topMin 네 값으로 좁혀나가며 계산
- 인접한 두 점의 방향(상/하/좌/우)을 판별하는 `direction(fr, to)` 헬퍼
