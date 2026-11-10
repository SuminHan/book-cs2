# Problem Set


[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture12.ipynb)

노트북의 **Setup** 셀을 먼저 실행하면 게임의 레벨, 랜덤 맵, 그리기 함수가 들어 있는 `L13_game.py`가 만들어진다. 무기와 엔진은 직접 만든다. 위에서부터 순서대로 실행해야 앞에서 만든 함수를 뒤 문제에서 쓸 수 있다.

### 필수 문제

**1.** (Weapons from Deep Learning) `relu`, `leakyRelu`, `sigmoid`, `tanh`(공식으로)를 작성하고 그래프를 그린다. 이 함수들이 뒤 문제의 무기가 된다.

**2.** (Collision) `insideCircle`, `countInside`를 작성한다.

**3.** (The Shooting Engine) 완성된 발사 엔진 `shoot`을 읽고 실행해서 OUT, BLOCKED, HIT, MISS를 확인한다.

**4.** (Mission: Clear the Levels) 레벨 1~5를 한 판씩 깬다. 처음에는 `return 0 * x`로 그대로 실행하고, 그림을 보며 고쳐 간다.

**5.** (Random Maps) `SEED`에 숫자를 넣어 랜덤 맵을 만들고 깬다. 같은 숫자면 같은 맵, 깰 수 있는 맵만 나온다.

### Optional

**6.** (More Weapons and Bonus Levels) `step`, `elu`, `softplus`, `swish`, `myAbs`를 만들고, 새 무기로 보너스 레벨 6~8(Valley, Elevator, Ramp)을 깬다.
