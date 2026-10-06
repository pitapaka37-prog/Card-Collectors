# CARD COLLECTORS

アメコミ風のオリジナルヒーローを引いて集めるカードガチャのウェブアプリです。

通常ガチャのヒーローたちは、架空のアメコミ「スターライト・コミックス（STARLIGHT COMICS）」の登場人物という設定です。

- 単発・十連ガチャ（十連は SR 以上 1 枚確定、80 回で天井）
- ガチャ演出：パックの色と揺れ方でレア度を予告、SSR/UR はカットイン、UR は金から虹への昇格演出、効果音つき（SOUND で切り替え）
- コインの貯め方：毎日のログインボーナス（7 日目は特大）、放置ボーナス（集めたカードが多いほど速い）
- ガチャごとに分かれた図鑑
- ダブったカードを売るとスターがたまり、スターショップでガチャでは出ない限定カードと交換できる
- 自分の画像からカードを作り、名前をつけた自作ガチャをいくつでも作れる
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
| `rubber-duck.jpg`, `atlas-prime.jpg`, `nova-mae.jpg`, `skyline-sentinel.jpg`, `queen-quasar.jpg`, `thunder-hound.jpg`, `atomic-bee.jpg`, `radio-ranger.jpg`, `mirror-max.jpg`, `velvet-comet.jpg`, `doctor-fuse.jpg`, `neon-noodle.jpg`, `jukebox-jane.jpg` | 画像を使うカードの絵 |

## 更新するとき

`sw.js` の `VERSION`（いまは `cc-v29`）を `cc-v30` のように上げると、利用者の端末の古いキャッシュが入れ替わります。

## データについて

所持カード・コイン・自作カードは各端末のブラウザ（localStorage）に保存されます。サーバーには送られません。

機種変更やデータ削除に備えて、図鑑（FILES）画面の「データを書き出す」でバックアップを JSON ファイルに保存できます。「データを読み込む」で別の端末に移せます。
