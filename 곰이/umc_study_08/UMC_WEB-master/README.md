# UMC_WEB
5th UMC Web 6주차 및 8, 9주차 서버 자료

안녕하세용, 혹시 실행 과정 등에서 오류가 생긴다면 회장단 통해서 **섀넌/한상은(중앙 서버 파트장)** 에게 문의해주세요!

여러분들이 일단은 로컬 환경에서 구동해주시면 됩니다!
그러기엔 Node.js를 설치하셔야 하는데 아래 따라만 해주시면 되니까 참고해주세용

## Node.js 설치
[Node.js 설치 참고 블로그](https://offbyone.tistory.com/441)

- git clone or 깃허브 파일 다운
그리고 깃허브에서 다운받으시던, git clone을 진행하시던 해당 깃허브 파일을 받아주세요.
아래 사진과 같이 다운받아주시면 됩니다 (node_modules는 없는 것이 맞아요!)

  ![image](https://github.com/silvarge/UMC_WEB/assets/140832682/41cd5fb0-f8c9-45ad-9542-3ec642014929)

- 그리고 vscode 등의 터미널 혹은 cmd 창에서 아래 경로처럼 프로젝트 메인 실행 파일이 열려 있는 장소 (index.js)에 가있어야 합니다! 또한, 아래 사진처럼 디렉토리 파일 확인 시 index.js 파일이 있어야 합니다!!!
  
![image](https://github.com/silvarge/UMC_WEB/assets/140832682/53d4091b-b8dd-4324-96f7-02318680deea)

![image](https://github.com/silvarge/UMC_WEB/assets/140832682/1d2b2aad-d46a-4437-aae2-11eeafaa92ce)


- node_modules 설치 - 터미널 명령어 입력 - 아래 명령어 중 하나로 하면 됩니다! (yarn은 yarn을 따로 다운받아 줘야해요!)
   - npm i
   - npm install
   - yarn install
   
- node.js 실행 - 터미널 명령어 입력 - 아래 명령어 중 하나로 하면 됩니다! (yarn은 yarn을 따로 다운받아 줘야해요!)
   아래 사진처럼 실행되면 성공적으로 실행된 것입니다! (아래 접속 및 연결은 서버가 실행된 상태에서 진행해야 서버 사용이 가능합니다!)
   - npm run start
   - yarn start

  ![image](https://github.com/silvarge/UMC_WEB/assets/140832682/6906f5e6-8487-4658-bba9-b5e67f2ba1dd)

## 접속 방법
```
url: localhost:8000/user/login
method: 'post',
data: {
  id: 'umcweb',
  pw: '1234'
}
```

## API 확인하고자 할 때
브라우저에서 **localhost:8000/api-docs** 치기!
어떻게 값을 넣으면 어떤 오류가 나오는지 등 확인할 수 있어용
response 값 또한 확인하실 수 있습니다.
