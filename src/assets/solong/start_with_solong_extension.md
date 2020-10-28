# Start with Solong Extension

Solong Extension is like Metamask to Solana, where you can manage all your Solana
crypro assets and interact with Solana dapps.

## Install（preview version）

The official version of Solong extension will be avaiable in chrome extension store
soon, now you try it by directly loading the [Extention package](https://drive.google.com/file/d/1o45GptDiN1-4RaIOAw72h-Mq6YhcLOnw/view?usp=sharing),
the file structure looks like this:

    x solong_v0.1.0_preview/
    x solong_v0.1.0_preview/icon-16.png
    x solong_v0.1.0_preview/js/
    x solong_v0.1.0_preview/popup.html
    x solong_v0.1.0_preview/icon-48.png
    x solong_v0.1.0_preview/manifest.json
    x solong_v0.1.0_preview/icon-128.png
    x solong_v0.1.0_preview/js/popup.js
    x solong_v0.1.0_preview/js/backgroundPage.js
    x solong_v0.1.0_preview/js/inpage.js
    x solong_v0.1.0_preview/js/content.js

Open Chrome explorer，input： chrome://extensions in the address bar

![](https://res.cloudinary.com/schoour/image/upload/v1603476769/chrome_extensions_jpff5b.jpg)

Click "Developer mode" to enable developer mode：

![](https://res.cloudinary.com/schoour/image/upload/v1603476676/chrome_extensions_dev_hggstk.jpg)

There will be three buttons showing on the top left。Click "Load Unpacked"，and choose our extension
folder in the file selector, then you will see Solong in the extension list.

![](https://res.cloudinary.com/schoour/image/upload/v1603476803/solong_extension_aushsr.jpg)

For convenience，you can pin Solong extension from the list for futher use：

![](https://res.cloudinary.com/schoour/image/upload/v1603476837/solong_popup_icon_vquny6.jpg)

Click "pin"，then it will always show in the extension bar：

![](https://res.cloudinary.com/schoour/image/upload/v1603476860/solong_popup_btn_uf6iay.jpg)

## Create account

After installation，Click the slong extension to pop it up, you will see this page

![](https://res.cloudinary.com/schoour/image/upload/v1603476883/solong_passwd_izx7i6.jpg)

After set your password，you will need to choose create an account or import an existed one.
If you choose to create an account，Solong will generate the mnemonic words and you should
note them down and keep in safe place

![](https://res.cloudinary.com/schoour/image/upload/v1603476915/solong_words_uyyukh.jpg)

You can also import your account by input the mnemonic words：  
![](https://res.cloudinary.com/schoour/image/upload/v1603476939/solong_import_wab8ig.jpg)
![](https://res.cloudinary.com/schoour/image/upload/v1603476954/solong_account_bfndlg.jpg)

Now you are done with initializing your account.

## Transfer

For assets transfer，if SOL，you can just click "Send" button in the main page，
for other SPL tokens，you click the token in the assets list and click "Send":

![](https://res.cloudinary.com/schoour/image/upload/v1603476976/solong_send_bxdjx0.jpg)
![](https://res.cloudinary.com/schoour/image/upload/v1603476992/solong_send2_mfdxhn.jpg)

then input the receiver's address and the amount you wanna transfer

If you want to receive assets，Click "Recived" and choose the assets you want to receive：

![](https://res.cloudinary.com/schoour/image/upload/v1603477021/solong_recv_ge6qjh.jpg)
![](https://res.cloudinary.com/schoour/image/upload/v1603477040/solong_recv2_mqqkq1.jpg)

Then you can either use the QR code or copy the depoist address

## Play with dapps

With Solong Extension，we can use it to interact with any Solana dapps smoothly.
Let's take [Serum.today](http://serum.today/) for example to explore how we use it.

Once you have done with the install，open[Serum.today](http://serum.today/) then click
"Connect" button on the top right corner, then you authorize your current account：

![](https://res.cloudinary.com/schoour/image/upload/v1603482649/authorize_et15jb.jpg)

Now you have authorized/logged with your account

then we try to place an order，after you click "BUY" or "SELL"，a pop up will ask for your
confirmation to sign these transactions：

![](https://res.cloudinary.com/schoour/image/upload/v1603477079/solong_place_h0i6ku.jpg)

Click "Confirm" to confirm or reject to deny

The same process apply to other actions like cancel, settle, etc.
