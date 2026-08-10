# book-cs2 (국내반)

KSA 정보과학2(CS2) 국내반 보충자료 mdBook.

**Live:** https://smhanlab.com/book-cs2/
(개인 계정 커스텀 도메인 하위로 자동 서빙됨 — 대소문자까지 저장소 이름과 정확히 일치해야 함)

국제반(영어) 자료는 별도 저장소 [book-cs2-intl](https://github.com/SuminHan/book-cs2-intl)
(https://smhanlab.com/book-cs2-intl/)에서 관리한다.

이 저장소는 수업을 대체하지 않는 보충 노트다. 원 강의자료의 원저작자는
각각 다르며(김호숙 선생님 원작 포함), 여기서는 정리·보완만 담당한다.
진단용 pretest·답안지처럼 배포 금지 표시가 있는 자료는 싣지 않는다.

## 구조

```
book.toml       — mdBook 설정 (build-dir = "docs", GitHub Pages가 이 폴더를 서빙)
src/
  SUMMARY.md    — 목차 (국내반 / 일반 CS 개념 2부)
  kor/          — L00~L12 (국내반)
  general/      — 과목 무관 일반 CS 개념 (예: 32비트 vs 64비트, Manim 영상 포함, 한글 버전만)
docs/           — mdbook build 결과물. 커밋 대상 (Pages가 직접 서빙하므로 gitignore 금지).
```

## 로컬에서 빌드

```bash
mdbook build        # docs/ 에 정적 사이트 생성
mdbook serve         # 로컬 미리보기 (기본 http://localhost:3000)
```

## 배포

GitHub Pages: **Settings → Pages → Deploy from a branch → `main` / `/docs`**.
`docs/`를 커밋하고 `main`에 push하면 몇 분 안에 반영된다. 별도 GitHub Action 없음.

## ⚠️ 주의

- 이 저장소(`SuminHan/book-cs2`)와 개인 홈페이지 저장소
  (`suminhan/suminhan.github.io`, Hugo 기반 실제 블로그)는 **완전히 별개**다.
  절대 혼동해서 개인 홈페이지 저장소에 push하지 말 것.
- 새 챕터를 채울 땐 `src/kor/*.md`만 수정 → `mdbook build`로 `docs/` 재생성 →
  `docs/`도 같이 커밋. `docs/`를 손으로 직접 고치지 말 것 (다음 build 때 덮어써짐).
