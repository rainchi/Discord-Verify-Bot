# Discord Verify Bot
A bot prevent spamming by using verify system

# 指令
!auth 產生序號
!authkey [序號] 驗證序號

# 安裝
1. Github端
    1. 登入現有帳號或註冊一個
    2. 按此專案右上角的Fork
  
2. Heroku端
    1. 前往Heroku官方網站並註冊一個新帳號,或使用現有帳號登入
    2. 前往Heroku控制台[點我](https://dashboard.heroku.com) -> 右上角New -> 選擇Create new app
    3. 切換到下個畫面後,填入App Name(自己取),完成後按Create app 
    4. 接著會進入到App的Deploy子畫面 -> Deployment method選Github -> 按Connect to GitHub -> 跳出視窗點Authorize heroku
    5. 連結後在repo-name那個打專案名後按Search -> 選搜尋結果裡剛剛Github Fork的專案按Connect
    6. 接著先切換到Settings分頁 -> 按Reveal Config Vars,接著填入各項資訊,
        格式 KEY:VALUE 不要複製貼上
        1. BOT_TOKEN:請看下面的教學,可以順便邀機器人進群
        2. VERIFIYED_ROLE_ID:請去Discord伺服器設定在要拿來當已驗證的身分組上面按右鍵然後複製ID
        3. MESSAGE_ALREADY_VERIFYED:設定已驗證的使用者再次輸入指令時的提示訊息
        4. MESSAGE_AUTH_KEY:設定當使用者輸入!auth時的訊息,以 \<key\> 代替產生的序號(執行時會自動轉成序號)
        5. MESSAGE_AUTH_SUCCESS:設定當使用者驗證後產生的訊息
        6. MESSAGE_AUTH_ERRORKEY:設定當使用者驗證時序號錯誤的訊息
        7. MESSAGE_AUTH_NOTFOUNDKEY:設定當使用者驗證時找不到序號的訊息
        8. MESSAGE_CMD_ERROR:設定當使用者驗證時未提供序號的訊息
    7. 完成後切換回Deploy拉到下面按Manual deploy旁邊的Deploy
    8. 切換到Resources分頁並重新整理頁面,會看到下面的Free Dynos有Web和Worker選項,按右邊的編輯把Web關掉、Worker打開
    9. 請把Discord伺服器設定身分組裡BOT名子的身分組盡量向上移
    10. 完成,若還是不能用請來聯絡我,Discord:rainchi#0948

# BOT_TOKEN獲取和邀請機器人進群
1. 請參考 https://home.gamer.com.tw/creationDetail.php?sn=4303952 文章的第一步
2. 在最後的畫面上點Token底下的Copy,就能得到Token去填入
3. 填入完後回到最後的畫面切換到OAuth2到下面的SCOPES裡勾bot然後BOT PERMISSIONS勾Administrator
4. 把SCOPES下面的連結複製並用瀏覽器打開,就能邀請了

