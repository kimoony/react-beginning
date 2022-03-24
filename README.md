# Movie-Web

nomadcoders 에서 Movie-Web 클론코딩

# 링크

[Movie-Web](https://kimoony.github.io/react-movie-web/)

# 기능사항

- Movie 리스트 보기
- Movie 상세 페이지에서 평점, 좋아요, Movie 설명 보기

# 기술스택

- HTML, CSS, JavaScript
- React

# 배포

- `package.json` scripts 부분 수정
```js
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "deploy": "gh-pages -d build",
  "predeploy": "npm run build"
},
```
- 배포 작업 준비를 위해 `npm i gh-pages --save-dev` 설치
- GitHub Repository 에 `gh-pages` branch 생성
- `npm run deploy` 입력
- Git-Hub에 gs-pages를 통해 [Movie-Web](https://kimoony.github.io/react-movie-web/) 을 볼 수 있다.


# 작성자
👨‍💻 **김 훈**
- GitHub: [@kimoony](https://github.com/kimoony/)
