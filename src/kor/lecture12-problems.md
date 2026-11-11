# Problem Set


[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SuminHan/book-cs2/blob/main/notebooks/kor/lecture12.ipynb)

노트북의 **게임 준비** 셀을 먼저 실행하면 게임의 레벨, 랜덤 맵, 그리기 함수가 준비된다. 위에서부터 순서대로 실행해야 앞에서 만든 함수를 뒤 문제에서 쓸 수 있다.

### 필수 문제

**1.** (Plotting Practice) 좌표 list로 점을 찍어 잇고(`"o-"`), `np.linspace`로 sin, cos 그래프를 그린다. 함수 몸통을 직접 작성한다.

**2.** (Weapons from Deep Learning) `relu`, `leakyRelu`, `sigmoid`, `tanh`(공식으로)를 작성하고, `drawFunctions`의 몸통을 직접 써서 그래프를 그린다. 이 함수들이 뒤 문제의 무기가 된다.

**3.** (Collision) `insideCircle`, `countInside`를 작성한다.

**4.** (The Shooting Engine) 완성된 발사 엔진 `shoot`을 읽고 실행해서 OUT, BLOCKED, HIT, MISS를 확인한다.

**5.** (Mission: Clear the Levels) 조준경 `aim(f)`를 직접 작성하고, 레벨 1~5를 한 판씩 깬다. 처음에는 `return 0 * x`로 그대로 실행하고, 그림을 보며 고쳐 간다.

**6.** (Random Maps) `SEED`에 숫자를 넣어 랜덤 맵을 만들고 깬다. 같은 숫자면 같은 맵, 깰 수 있는 맵만 나온다.

### Optional

**7.** (More Weapons and Bonus Levels) `step`, `elu`, `softplus`, `swish`, `myAbs`를 만들고, 새 무기로 보너스 레벨 6~8(Valley, Elevator, Ramp)을 깬다.

### Bonus Demo

**AI가 대신 쏘기** (노트북 맨 끝 셀, 실행만) — sigmoid 뉴런 6개를 더한 작은 신경망이 loss(빗나간 거리 + 장애물 + 화면 밖)를 줄이는 방향으로 숫자를 조금씩 고치며(경사하강법) 스스로 과녁을 맞힌다. 여러분이 손으로 하던 "고치고 다시 쏘기"를 컴퓨터가 대신 하는 것이 바로 학습이다. 학습할수록 궤적이 어떻게 고쳐지는지 한 그림에 겹쳐 보여 주고, 맵 12개(레벨 1–8, 랜덤 맵 4개)에서 테스트한다. 뉴런 수 `N`, 뉴런에 쓸 무기 `ACT`(sigmoid, relu, tanh), 학습률 `LR`을 바꿔 보자.
