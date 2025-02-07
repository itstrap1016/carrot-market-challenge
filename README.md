# Carrot Market Reloaded

- Zod, 서버 액션, 미들웨어, 테일윈드, 프리즈마, iron-session 및 bcrypt를 사용하여 유저 인증을 구현합니다.
- 3가지 페이지를 구현합니다: /create-account, /log-in, /profile.
- /create-account 및 /log-in양식은 Zod를 사용하여 유효성을 검사하고 오류를 표시해야 합니다.
- 유저는 로그인한 후에만 /profile을 볼 수 있어야 합니다.
- /profile 페이지에는 유저 프로필이 표시되어야 합니다.
- / 페이지를 구현합니다.
- 로그인한 유저만 / 페이지로 이동할 수 있습니다.
- / 페이지에는 데이터베이스에 있는 모든 트윗의 목록이 표시되어야 합니다.
- 유저가 다음 페이지로 이동하거나 이전 페이지로 돌아갈 수 있도록 화살표를 표시하는 페이지네이션(pagination)을 구현합니다.
- 유저가 트윗을 클릭하면 /tweets/[id] 페이지로 이동하여 해당 트윗의 상세 보기를 볼 수 있어야 합니다(나중에 여기에 답글을 표시할 예정임).
