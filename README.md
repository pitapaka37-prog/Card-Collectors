# STAR LIGHT COMICS CARD

アメコミ風のオリジナルヒーローを引いて集めるカードガチャのウェブアプリです。

通常ガチャのヒーローたちは、架空のアメコミ「スター・ライト・コミックス（STAR LIGHT COMICS）」の登場人物という設定です。

- 画面ごとのオリジナル BGM（タイトル・ガチャ・図鑑・ショップ・カード作成・ガチャ演出）。音源ファイルは使わず、その場でシンセ演奏。BGM ボタンで切り替え
- ミニゲーム「VELVET COMET MISSION」：スター・ヴェルベット号で隕石を撃ち落とすインベーダー風シューティング（全 50 ウェーブ、クリアごとにハート1回復、各ウェーブの★1個目でそのウェーブ中3連射・2個目からは5秒無敵シールド）。ウェーブ1つクリアごとにコイン 10 枚（全クリアで 500 枚）。全 50 ウェーブクリアのノーマルミッション報酬が SSR「スター・ヴェルベット号」
- ホーム画面：今の状況（コイン・スター・図鑑・放置ボーナス・ログイン日数）と、各機能への入口
- ミッション：画面上部の MISSION ボタンから。デイリー（毎日リセット）とノーマル（一度きりの目標。全50ウェーブクリアで SSR「スター・ヴェルベット号」）
- 起動時のタイトル画面（持っているカードがランダムに並ぶ。何も持っていないときはレア度の高いカード）
- ガチャごとの「LINEUP」ボタンで、出るカードの名前と確率を一覧表示
- 単発・十連ガチャ（十連は SR 以上 1 枚確定、80 回で天井）
- ガチャ演出：パックの色と揺れ方でレア度を予告、パックから1枚ずつ登場、SSR/UR はカットイン、最後に結果一覧、パックやカードの裏面が段階的にランクアップする昇格演出、タップで進行、効果音つき（SOUND で切り替え）
- コインの貯め方：毎日のログインボーナス（7 日目は特大）、放置ボーナス（集めたカードが多いほど速い）
- ガチャごとに分かれた図鑑
- ダブったカードを売るとスターがたまり、スターショップでガチャでは出ない限定カードと交換できる
- 自分の画像からカードを作り、名前をつけた自作ガチャをいくつでも作れる（自作ガチャは1回 1 コイン。自作カードは売ると 1 コイン、スターはなし）
- ホーム画面に追加してアプリのように使え、一度開けばオフラインでも遊べる

## 公開のしかた（GitHub Pages）

1. このリポジトリの **Settings → Pages** を開く
2. **Source** を「Deploy from a branch」、ブランチを `main`、フォルダを `/ (root)` にして保存
3. 数分後に `https://pitapaka37-prog.github.io/Card-Collectors/` で開けるようになる

## ホーム画面に追加

- iPhone：Safari で開き、共有ボタン →「ホーム画面に追加」
- Android：Chrome で開き、メニュー →「アプリをインストール」

## ファイル

| ファイル | 役割 |
| --- | --- |
| `index.html` | ゲーム本体（HTML・CSS・JavaScript を 1 ファイルに収録） |
| `manifest.webmanifest` | アプリ名・アイコン・テーマ色 |
| `sw.js` | オフライン用のキャッシュ（Service Worker） |
| `icon-*.png` | アプリのアイコン |
| `rubber-duck.jpg`, `atlas-prime.jpg`, `nova-mae.jpg`, `skyline-sentinel.jpg`, `queen-quasar.jpg`, `thunder-hound.jpg`, `atomic-bee.jpg`, `radio-ranger.jpg`, `mirror-max.jpg`, `velvet-comet.jpg`, `doctor-fuse.jpg`, `neon-noodle.jpg`, `jukebox-jane.jpg`, `skate-saint.jpg`, `diner-dynamo.jpg`, `tornado-tess.jpg`, `captain-cactus.jpg`, `glitter-gator.jpg`, `gumball-kid.jpg`, `traffic-cone.jpg`, `lunchbox-larry.jpg`, `static-sally.jpg`, `paper-boy.jpg`, `star-velvet.jpg`, `night-janitor.jpg`, `hot-dog-man.jpg`, `mailbox-mike.jpg`, `coin-op.jpg`, `solar-sovereign.jpg`, `omega-paragon.jpg`, `echo-valkyrie.jpg`, `professor-prism.jpg`, `crimson-kite.jpg`, `granite-grizzly.jpg` | 画像を使うカードの絵 |

## 更新するとき

`sw.js` の `VERSION`（いまは `cc-v95`）を `cc-v96` のように上げると、利用者の端末の古いキャッシュが入れ替わります。

## データについて

所持カード・コイン・自作カードは各端末のブラウザ（localStorage）に保存されます。サーバーには送られません。

機種変更やデータ削除に備えて、図鑑（FILES）画面の「データを書き出す」でバックアップを JSON ファイルに保存できます。「データを読み込む」で別の端末に移せます。
