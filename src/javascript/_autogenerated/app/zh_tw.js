const texts_json = {};
texts_json['ZH_TW'] = {"Real":"真實","Investment":"投資","Gaming":"遊戲","Virtual":"虛擬","Bitcoin":"比特幣","Bitcoin_Cash":"比特幣現金","Ether":"以太幣","Ether_Classic":"古典以太幣","Litecoin":"萊特幣","Binary_Coin":"Binary 硬幣","Online":"線上","Offline":"離線","Connecting_to_server":"連接伺服器","Day":"天","Days":"日","Target":"目標","Barrier":"障礙","Open_Positions":"空缺","Duration":"期限","tick":"跳動點","ticks":"跳動點","Entry_spot":"入市現價","Exit_spot":"退市現價","Start_time":"開始時間","Hour":"小時","Minute":"分鐘","Deposit":"存款","Log_in":"登入","Sign_up":"註冊","Contract_Details":"合約詳細資料","Portfolio":"投資組合","Profit_Table":"利潤表","Statement":"帳單","Trade":"交易","Personal_Details":"個人資料","Financial_Assessment":"金融評估","Account_Password":"帳戶密碼","Cashier_Password":"收銀台密碼","Self_Exclusion":"自我禁止","Account_Limits":"帳戶限額","Login_History":"登入歷史","API_Token":"API代幣","Log_out":"登出","No":"否","Yes":"是的","OK":"確定","Ends_Outside":"區間之外結束","Ends_Between":"區間之內結束","Stays_Between":"位於區間之內","Goes_Outside":"處於區間之外","Reset_Call":"重設買權","Reset_Put":"重設賣權","High_Tick":"高跳動點","Low_Tick":"低跳動點","Asian_Up":"亞洲上漲","Asian_Down":"亞洲下跌","Close-Low":"收盤-低","High-Close":"最高值-收盤值","High-Low":"最高值-最低值","Call_Spread":"買權價差","Put_Spread":"賣權價差","Only_Ups":"只會持續上漲","Only_Downs":"只會持續下跌","Higher":"高於","Lower":"低於","Jan":"一月","Feb":"二月","Mar":"三月","Apr":"四月","May":"五月","Jun":"六月","Jul":"七月","Aug":"八月","Sep":"九月","Oct":"十月","Nov":"十一月","Dec":"十二月","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六","Sunday":"星期日","Contract_Information":"合約確認","Profit/Loss":"利潤/虧損","Purchase_Price":"買入價格","Remaining_Time":"剩餘時間","Contract_will_be_sold_at_the_prevailing_market_price_when_the_request_is_received_by_our_servers__This_price_may_differ_from_the_indicated_price_":"合約將在我們伺服器收到要求時以當時的市場價格賣出。此價格可能會與報價有差異。","Sell":"賣出","Your_transaction_reference_number_is_[_1]":"您的交易號是 [_1]","Close":"收盤","The_page_you_requested_could_not_be_found__Either_it_no_longer_exists_or_the_address_is_wrong__Please_check_for_any_typos_":"找不到您要求的頁面。它不再存在或輸入網址出錯。請檢查是否輸入錯誤。","Resale_not_offered":"不提供轉售","Total":"總計","Contract_Type":"合約類型","Potential_Payout":"可能的賠付額","Purchase":"買入","Indicative":"指示性","Transaction":"交易","Credit/Debit":"借記/貸記","Balance":"餘額","Buy_price":"買入價","Open_positions":"空缺","Your_account_has_no_trading_activity_":"您的帳號沒有交易活動。","Trade_now":"即刻交易","Date":"日期","Ref_":"參考","Description":"描述","Action":"操作","Allow_equals":"允許等值","Win_payout_if_exit_spot_is_also_equal_to_entry_spot_":"如果退市現貨價與入市現貨價相同, 則將贏得賠付。","Last_Digit_Prediction":"最後數字的預測","Now":"現在","Profile":"詳細資料","View_your_personal_information_":"查看您的個人信息。","Security_&_Limits":"安全&限制","Change_your_main_login_password_":"更改主要登入密碼。","Facility_that_allows_you_to_set_limits_on_your_account_":"可讓您對帳戶設定限制的設施。","Limits":"限額","Set_Currency":"設定貨幣","Deposits_and_withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"您的帳戶已被禁存款和提款。請檢查您的電子郵件, 以瞭解更多詳情。","Withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"您的帳戶已被禁提款。請檢查您的電子郵件, 以瞭解更多詳情。","MT5_withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"您的MT5帳戶已被禁提款。請檢查您的電子郵件, 以瞭解更多詳情。","Start_Time":"開始時間","Entry_Spot":"入市現價","End_Time":"結束時間","Exit_Spot":"退市現價","Exit_Spot_Time":"退市現價時間","Payout":"賠付","days":"天","day":"天","hours":"小時","hour":"小時","minutes":"分鐘","minute":"分鐘","seconds":"秒","Purchase_Time":"買入時間","Stake":"投注資金","Multiplier":"倍數值","Rise/Fall":"「上漲/下跌」合約","Higher/Lower":"「高於/低於」","Touch/No_Touch":"觸及/未觸及","Ends_Between/Ends_Outside":"到期時價格處於範圍之內/之外","Stays_Between/Goes_Outside":"「保持在範圍之內/超出範圍之外」","Asians":"亞洲期權","Matches/Differs":"相符/差異","Even/Odd":"偶/奇","Over/Under":"大於/小於","Up/Down":"漲/跌","In/Out":"「範圍之內/之外」","Digits":"數字期權","Crypto":"加密","Trading_is_unavailable_at_this_time_":"此時無法交易。","Should_be_a_valid_number_":"必須是有效號碼。","Up_to_[_1]_decimal_places_are_allowed_":"允許小數點后%位。","Should_be_[_1]":"必須為[_1]","Should_be_between_[_1]_and_[_2]":"須在[_1] 與 [_2]之間","Should_be_more_than_[_1]":"必須大於[_1]","Should_be_less_than_[_1]":"必須大於[_1]","Only_letters,_numbers,_space,_and_these_special_characters_are_allowed:_[_1]":"僅允許字母、數字、空格和這些特殊字元: [_1]","The_two_passwords_that_you_entered_do_not_match_":"兩次輸入的密碼不相符。","Invalid_email_address_":"無效的電子郵件地址.","Only_letters,_numbers,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"只允許使用字母、數字、空格、連字號、句號和所有格號。","You_should_enter_[_1]_characters_":"您必須輸入[_1]個字元。","Only_letters,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"只允許字母、空格、連字號、句號和所有格號。","Minimum_of_[_1]_characters_required_":"需至少[_1] 個字元。","[_1]_and_[_2]_cannot_be_the_same_":"[_1] 和 [_2] 不可相同。","Password_should_have_lower_and_uppercase_letters_with_numbers_":"密碼須包含大小寫字母與數字。","Only_letters,_numbers,_space,_and_hyphen_are_allowed_":"僅允許字母、數字、空格和連字符。","Should_start_with_letter_or_number,_and_may_contain_hyphen_and_underscore_":"應以字母或數位開始，可包含連字號和底線。"};