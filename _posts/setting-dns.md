---
title: 'GitHubPagesにClouflareのDNSを設定してみた'
excerpt: 'DNSの覇権らしいです'
coverImage: '/assets/blog/_DSC1775.JPG'
date: '2021-04-20T05:35:07.322Z'
author:
  name: DocteuMan
  picture: '/assets/blog/authors/job_it_dokata.png'
ogImage:
  url: '/assets/blog/hello-world/DSC00446.jpg'
---
タイトル通りにこのブログはGitHubPagesの提供でお送りしている訳ですが、これにDNSの設定をする際にちょっと沼ったので備忘録に書いてみます。

# 使ったものたち
- ドメイン購入先 ムームドメイン
- サーバー GitHubPages
- DNS Cloudflare DNS
- 使用環境 hexo及びhexo-deployer

***

## ムームードメインの設定
Cloudflareから2つDNSサーバーのドメインが紹介されるので、コントロールパネルにログインした後にネームサーバー設定変更、取得したドメインで使用するのDNS欄に貼り付けます。

## Cloudflareの設定
開発者登録を行い取得した独自ドメインを入力するとDNSサーバーのドメインが2つ提示されるので、ドメインを購入したサイト(ムームードメイン)で貼り付けします。設定後にhttps化するかなどを聞かれるので任意に設定していきます。これが終わると次からDNSのレコードを作っていきます。

※ちなみに独自ドメインがWhois(ドメイン管理の団体)に登録されるまで若干のラグがあるので、ドメインが承認されていませんのエラーが出ても待ちましょう。僕はムームードメインからの認証メールのリンクを踏んでから1、2時間後ぐらいに設定できました。Webサーバー回りの設定って大体ちょっと若干ラグがあるので不安になりますよね。

本題に戻りレコードの設定ですが、こいつが曲者でした。何やらレコードを作れとのことなので調べてみると、AタイプはIPv4用のレコード、AAAAタイプはIPv6用のレコードらしいです。

GitHubPagesのIPアドレスを調べたところ、[公式ページ曰く](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)Github指定の4つのIPアドレスに対して設定を行えば良さそう。レコードタイプをA、コンテンツに上記の4つのアドレスを入力。残るはユーザー名ですが、これは「@」の一文字のみ入力しました。意味不明ですね。溢れ出るワザップ感。ちなみに余計な文字を入れた時は動かなかったので謎が残っちゃいましたがいつか分かる時が来ると信じて今は放置することにします。

- タイプ A
- 名前 @
- コンテンツ 185.199.1XX.153
上記の公式ページを見つつ、コンテンツの3Byte目を変更して計4つ登録。

ちなみにGithubPagesのサーバーでIPv6のアドレスは見つけられなかったのでAAAAタイプのレコードは設定しないことにしました。

また、Aタイプのレコードを設定したものの、GithubのPagesの設定上でサブドメインの設定をオススメするという警告が出たので、CNAMEタイプのレコードを作る羽目に…。(´･･｀)ﾜｶﾗﾝﾁ

- タイプ CNAME
- 名前 www
- コンテンツ XXXXXXXX.github.io
コンテンツはGitHubPagesを有効化した際の初期ドメインです。"Githubユーザー名".github.io。

## GitHubPagesの設定

Pagesの設定欄に行きCustom domainに自分の購入したドメインを入力するだけです。ここでエラーを吐かれるとDNSレコードの設定が上手くいっていないため名前解決が出来てない状態ということが分かります。

## hexoを使う上で困ったこと

上記で多分GitHubPagesにClouflareのDNSを設定するのは完結するのですが、hexoを使ってデプロイするとPagesの設定がリセットされて、いちいちGithubPagesの設定から独自ドメインを打ちなおさなくてはならない状態に陥ってしまいました。

対策として、カスタムドメインを入力した際にGithubリポジトリ上に生成されるCNAMEというファイルをダウンロードし、自分のローカルのhexoプロジェクトのpublicディレクトリ直下に置くと、デプロイしても設定が維持されるようになりました。

## 懺悔

初見殺しなシーンが沢山ありましたが、なんとか設定が終わってこれでようやくカリスマブロガーと言いたいところですが、トラブルシューティングがてらGithubPagesとCloudflareで調べていると、CloudflareがCloudflarePagesなるものを出しているようで、最初からこっち使えばよかったんじゃないかと思うと何ともやり切れない気持ちに……(´･･｀)

いつか絶対CloudflarePagesに移行するんだ……

……🤮

追記
CloudFlareのDNSはこれで設定完了した訳ですが、これをやっているとCloudFlarePagesの設定は秒で終わりました。Githubにコミットした瞬間GithubPagesにデプロイしてくれるのでおすすめです。