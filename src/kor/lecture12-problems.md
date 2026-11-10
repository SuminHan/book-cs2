# Problem Set


[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture12.ipynb)

노트북의 **Setup** 셀을 먼저 실행하면 게임의 레벨, 대결 맵, 그리기 함수가 들어 있는 `L13_game.py`가 만들어진다. 무기와 엔진은 직접 만든다. 위에서부터 순서대로 실행해야 앞에서 만든 함수를 뒤 문제에서 쓸 수 있다.

### 필수 문제

**1.** (Weapons from Deep Learning) `relu`, `leakyRelu`, `sigmoid`, `tanh`(공식으로)를 작성하고 그래프를 그린다. 이 함수들이 뒤 문제의 무기가 된다.

**2.** (Collision) `insideCircle`, `firstTrue`, `drawPoints`를 작성한다.

**3.** (The Shooting Engine) 발사 엔진 `shoot`의 빈칸 2개를 채운다.

**4.** (Mission: Clear the Levels) 레벨 1~5의 과녁을 맞히는 함수 `f1` ~ `f5`를 작성한다. 과녁에 맞기만 하면 어떤 함수든 정답.

**5.** (Battle!) 짝꿍과 같은 맵에서 `playerA`, `playerB`로 동시에 쏴서 상대를 맞힌다. 엔진은 3번에서 만든 `shoot`.

### Optional

**6.** (More Weapons) `step`, `elu`, `softplus`, `swish`, `myAbs`를 만들어 무기를 늘린다.
