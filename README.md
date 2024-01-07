# DTT(Digital Twin Table) 🏩
* 실제 매장의 환경을 3D 모델링을 통해 디지털 환경에서 재현한 뒤 실시간으로 매장의 사용 상황을 파악하고 예약을 진행하며 예측을 통해 디지털 트윈을 실현하는 프로젝트
* 기존 예약 시스템은 실제 매장의 환경을 직접 볼 수 없으므로 디지털 트윈 기술을 도입하여 실제 매장의 내부를 3D 객체를 통해 매장 상황을 실시간으로 확인
* 예약 및 예측 서비스 제공
* 향후 식당 뿐만 아니라 은행, 주차장, 등 다양한 장소에 활용 가능
* 백엔드 서버 개발을 맡아 Spring Boot를 통해 RESTful API를 구성
* DB 설계 및 예측 모델 담당. 예측 모델은 더미 데이터와 날씨 데이터 등을 이용하여 RandomForestClassifier 알고리즘을 통해 예측을 진행
* 3D 모델링을 도와주는 Three.js를 통해 UI 구성 및 Spring 서버와 React 서버와 연결 후 예약 시스템 구성

![image](https://github.com/hjYoon66/Studypang/assets/101798354/249e22ed-8f3b-43da-ae3c-f6ccc463ea30)

## 개요 🚀
### 📆 개발 기간 : 2023.01.17 ~ 2023.12.7  
### 🏆 수상 : 교내 캡스톤 디자인 경진 대회 - 우수상 🏅<br>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 교내 공학 작품 경진 대회 - 우수상 🏅

### 👪 팀원  

|이름|직책|역할|Git|
|---|---|---|---|
|손지노|팀장|프론트엔드 개발 및 총괄|https://github.com/onjix|
|윤형준|팀원|백엔드&프론트엔드 개발 및 예측 모델 개발 |https://github.com/hjYoon66|
|박주성|팀원|POS기 개발 및 하드웨어 개발|https://github.com/zoodung|

### 🔍개발 언어
##### 프론트 엔드

<img src="https://img.shields.io/badge/Intellij IDEA-000000?style=for-the-badge&logo=Intellij IDEA&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white">  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=Three.js&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> 

#### 백엔드 
<img src="https://img.shields.io/badge/Intellij IDEA-000000?style=for-the-badge&logo=Intellij IDEA&logoColor=white"> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"> <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white"> <img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white"> <img src="https://img.shields.io/badge/scikit learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white"> 

#### 하드웨어
<img src="https://img.shields.io/badge/Android Studio-3DDC84?style=for-the-badge&logo=Android Studio&logoColor=white"> <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=C++&logoColor=white"> <img src="https://img.shields.io/badge/Android-34A853?style=for-the-badge&logo=Android&logoColor=white"> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"> 

## 시스템 구성도 📁
<img src = "https://github.com/hjYoon66/Studypang/assets/101798354/060d67f5-ca87-47ce-91f0-efd4ffe26959" width="70%" height="70%">

## 실행 화면 👓
### 실시간으로 확인할 수 있는 테이블 상태 ⚠️
<img src = "https://github.com/hjYoon66/Studypang/assets/101798354/171c2f64-7520-4b79-afd4-3d7391a277a1" width = "70%" height = "70%">
<img src = "https://github.com/hjYoon66/Studypang/assets/101798354/fcc41cce-7d48-442e-af20-682f1f899bf8" width = "70%" height = "70%">

### 디지털 트윈을 이용하기 위한 예측 🤖
<img src = "https://github.com/hjYoon66/Studypang/assets/101798354/c915dd9a-7cae-4a07-bcdc-4bb138516fda" width = "50%" height = "50%">
<img src = "https://github.com/hjYoon66/Studypang/assets/101798354/43973574-db12-49d9-8a2d-6d1f4151fc1d" width = "70%" height = "70%">

### 예약 시간 확인 및 예약 진행 📅
<img src = "https://github.com/hjYoon66/Studypang/assets/101798354/9988a2d0-5a60-4fcb-9c00-af958e7b202e" width = "50%" height = "50%">
<img src = "https://github.com/hjYoon66/Studypang/assets/101798354/f3f8175a-e32b-4734-8e87-5fdcb40aceb3" width = "50%" height = "50%">   


## 느낀점 🎤
* Git을 통해 역할 분배와 협업을 진행. 백엔드 개발 부분을 맡아 Spring Framework를 더욱 자세히 배울 수 있었고 몰랐던 부분들을 서로 협업하여 개발을 진행. 클라이언트 측과 프록시 문제가 있었지만 해결. 서버에서 계속해서 DB를 조회하는 문제가 있었지만 SSE 기술을 공부하고 적용하여 문제를 해결.





