---
title: 'hexoでブロガーになった話'
excerpt: '最初から覇権にしておけばよかった.'
coverImage: '/assets/blog/_DSC1745.JPG'
date: '2021-04-19T05:35:07.322Z'
author:
  name: DocteuMan
  picture: '/assets/blog/authors/job_it_dokata.png'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---
このブログですが,Node.jsのフレームワークである[「hexo」](https://hexo.io/)を用いて作成してみました.※2022/06/21　Next.js製に鞘替えしました

Webページ作る系のアプリケーションはWordPressしか知りませんでしたが,生憎GithubPagesでは動的なコンテンツを動かすことが出来ないのでWordPressは使えませんでした.

そんなことで小洒落た静的ファイルを生成しつつ楽にWebページを作れる代物を探していたところhexoなるものが.大学院の研究でNode.jsを使っていたのもありとっつきやすかったのですが,マークダウンで記述が簡単,Githubにdeployするのも簡単でGithubPagesでブログを書くために用意された物なんじゃないかと思うほど.備忘録がてらインストールからWebページ公開までの手順を載せてみます.無料で自分好みのページが作れちゃうので皆さんもレッツトライです.Windowsを想定しているのでMacの方はgitのインストール方法がちょっと違う気がするので調べてみてください.

***

## 1.Node.jsのインストール
既にインストールしていれば飛ばしてOKです.
[Node.js公式](https://nodejs.org/ja/)からLTS版をインストールします.案の定.exeファイルがインストールされますので,はいはい押していけばインストールが終わります.もし,ファイアーウォールの警告が出たら,プライベートなネットワークでの接続を許可し,パブリックなネットワークでは接続を許可しないにチェックを入れましょう.何も出てこなければ気にしなくて大丈夫です.

## 2.GitHubの登録
ここも既に登録していれば飛ばしてOKです.
[GitHub公式](https://github.com/)のSign upから登録を行います.登録が終わったらサインインしてRepositories横のNewボタンを押してリポジトリを作りましょう！![](/source/about-page/github.png)

## 3.gitの登録
[git公式](https://git-scm.com/)のDownloadボタンを押しましょう.例にもれず.exeファイルがダウンロードされえると思いますのでYesマンになりインストールを終わらせます.

## 4.hexoをインストール
これで布陣が揃いました.Windowsキーを押し検索窓からpower shellを検索し起動します.
`npm install hexo-cli -g`を入力するとNode.jsのパッケージマネージャーであるnpmがhexoをインストールしてくれます.

## 5.初期化,ブログ作成
power shellで現在の自分のディレクトリが記載されているので,hexoのプロジェクトファイルを置きたいところに移動します.僕は何も考えずにユーザー直下に作っちゃいました.ディレクトリを決めましたら`hexo init blog`とコマンドを叩きましょう.blogのプロジェクト名は任意に変更できます.
`cd blog`でblogディレクトリに入れますので,`hexo server`と叩きます.ローカルサーバーがlocalhost:4000で開きますので[localhost:4000](https://localhost:4000)をブラウザで検索し,ブログの雛形を表示しましょう.ちなみにctrl+cでロ－カルサーバーを落とせます.

また,source/_postsに.mdファイルがあるのでこれを消すと先程のHello Worldの投稿が消えます.増やしていく際は.mdファイルを書き足して記事を投稿していくことになります.記事を増やす際は`hexo new first-contents`とするとfirst-contentsという記事が_postsディレクトリに生成されますので,first-contents.mdをマークダウン形式で記述していきます.

力尽きたのでインターネットにアップロードするのは近々加筆します(´･･｀)