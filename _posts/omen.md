---
title: 'OMEN30Lで発生する暗転や再起動してしまう問題'
excerpt: '時代はOMEN'
coverImage: '/assets/blog/FPS-intai/job_pro_gamer.png'
date: '2021-11-12T05:35:07.322Z'
author:
  name: DocteuMan
  picture: '/assets/blog/authors/job_it_dokata.png'
ogImage:
  url: '/assets/blog/hello-world/DSC00446.jpg'
---

スタバMacもいいですが自宅OMENも中々粋ですね。
と言うことでゲーミングPCを買いました。
hp(ヒューレットパッカード)社のOMEN30Lです。GithubPagesなので画像は載せられませんが超かっこいいのです。

そしてこのOMEN30L、なんと驚きRTX3090入りグラボのハイスペックモデルで約35万円！！楽天のhp公式で購入したのでここから10%程ポイント還元です。恐るべき楽天。
これでAPEXもプレデターやなぁ(ﾆﾁｬｱ)とほくそ笑むのも束の間、電源は付いているのに画面がつかなくなったり、勝手に再起動されたりと何やらゴキゲンナナメです。
カスタマセンターの対応通りBIOSからハードウェアの診断ツールで診断してみたものの異常無し。マイクロソフトのページからisoファイルでWindowsのインストールもしましたが一向に改善せず。

そもそも画面が付かなくなる次点でグラボ周りの故障では?ということでデバイスのログを見るとやはりグラボのIDでエラーを吐いて再起動をしている模様。
RTX3090のスパイク電流問題があったり、OMEN30Lに乗ってる電源も750Wとスペックの割に大きくない、ということで電源周りを疑ってみると、Windowsの電源オプション(コントロールパネル->ハードウェアとサウンド->電源オプション)にて電源がバランスモードになっていました。追加プランの表示というタブをクリックすると、高パフォーマンスというオプションがあるのでこれに設定します。

あら不思議。今まで頻繁に起こっていた現象が一週間ほど再発していません。
まあ、ゲームなど負荷の強い作業はしていませんので、負荷次第では電源の交換なども必要になるのかもしれませんが、取り敢えず一件落着ということで。もし電源の設定がでデフォルトのままで同じ症状が出ている方はやってみていただければと思います。

🤔「ダイヤ・マスターみたいな雰囲気出してるけど今の戦績どれくらいなんです？」

### プレデターにオレはなる！！！