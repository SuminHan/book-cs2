# 32-bit vs 64-bit

A short animated walkthrough of what "32-bit" and "64-bit" actually mean:
register width, why a fixed number of bits caps how many values you can
represent, and how that same idea determines the maximum addressable memory
(exactly 4GB for 32-bit vs ~16EB for 64-bit). It closes with a look at how a
running process's Code/Data/Heap/Stack regions are addressed, and how the
`RIP`/`RSP`/`RBP` registers track that live through a function call.

### English

<video controls width="100%">
  <source src="assets/bit-width-en.mp4" type="video/mp4">
</video>

### 한국어

<video controls width="100%">
  <source src="assets/bit-width-kr.mp4" type="video/mp4">
</video>
