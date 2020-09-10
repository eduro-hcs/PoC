## Analyze
#### Request
1. loginwithschool (JWT Token)
2. checkpw
3. secondlogin
4. selectGroupList (user info, user's JWT Token)
5. userrefresh
6. registerSurvey

#### 파라미터
* JWT(Json Web Token): loginwithschool 및 selectGroupList에서 발급 가능
    > Request 2~5에 Header로 필요
* userPNo(유저 고유 번호?): selectGroupList에서 가져올 수 있음
    > Request 5에 Parameter로 필요
* registerSurvey.js에 "rspns"는 증상에 대한 응답
    > 현재는 코로나19 증상 없음 기준으로 작성됨.<br>
    > (자세한 아는 분은 PR 부탁드릡니다.)