import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import GetAppIcon from '@material-ui/icons/GetApp';
import YouTubeIcon from '@material-ui/icons/YouTube';

import img1 from './image/treasurerun_title.jpg';
import img2 from './image/2DShooting.jpg';
import img3 from './image/maze.png';

const useStyles = makeStyles((theme) => ({
  img: {
    borderRadius: 15,
    maxWidth: 600,
    minWidth: 300,
  },
  title: {
    fontFamily: 'Noto Sans JP',
    fontWeight: 700,
  },
  period: {
    marginBottom: 10,
  },
  context: {
    fontFamily: 'Noto Sans JP',
    textAlign: "left",
    fontWeight: 300,
    margin: 'auto',
    width: '80%',
    maxWidth: 700,
    marginBottom: 50,
  },
}));

export default function Work() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" className={classes.title} style={{ marginBottom: 40 }}>~Works~</Typography>

      <img src={img1} width="50%" className={classes.img} />
      <Typography variant="h5" className={classes.title}>TreasureRun</Typography>
      <Typography className={classes.period}>2020.06（開発中）</Typography>
      <a href="https://github.com/nkue-yst/UE4src-TreasureRun" target="_blank" style={{ marginRight: 10 }}><GitHubIcon /></a>
      <a href="https://yossyi.booth.pm/items/2127894" target="_blank" style={{ marginRight: 10 }}><GetAppIcon /></a>
      <a href="https://youtu.be/1jP5hKf6bCY" target="_blank"><YouTubeIcon /></a>
      <Typography className={classes.context}>
        UE4, C++を使用して制作したアクションゲーム。BOOTHにて公開中です。<br />
        プレイヤーはマップ内に落ちているアイテムを拾いつつゴールへ向かいます。
        ゴールへの最短ルートを探すも良し、全てのアイテムを探しコンプリートを目指すも良し。
        プレイヤーの腕前に応じた遊び方が出来ます。<br />
      </Typography>

      <img src={img2} width="50%" className={classes.img} />
      <Typography variant="h5" className={classes.title}>ShootingGame-2D</Typography>
      <Typography className={classes.period}>2020.06（開発中）</Typography>
      <a href="https://github.com/nkue-yst/ShootingGame-2D" target="_blank"><GitHubIcon /></a>
      <Typography className={classes.context}>
        C++（GLEW, OpenGL, SDL2, SOIL）を使用して制作した2Dシューティングゲーム。<br />
        WASDキーによる移動、スペースキーによる攻撃を用いて敵機を撃つゲームです。
        自作の簡易シェーダーによって2D描画を行っています。
        また、UE4等での構成に習い、アクターに当たり判定用等のコンポーネントを持たせる形式で処理を行っています。<br /><br />
      </Typography>
      
      <img src={img3} width="50%" className={classes.img} />
      <Typography variant="h5" className={classes.title}>MazeGenerator</Typography>
      <Typography className={classes.period}>制作時間：2時間</Typography>
      <a href="https://github.com/nkue-yst/MazeGenerator" target="_blank" style={{ marginRight: 10 }}><GitHubIcon /></a>
      <Typography className={classes.context}>
        C++を使用した迷路生成を行うヘッダーオンリーライブラリ。<br />
        縦横の長さを指定することでその大きさの迷路を生成する関数群をまとめたライブラリです。
        ヘッダーオンリーライブラリとして作成したのでヘッダーファイルをincludeすることで使用することが出来ます。<br /><br />
      </Typography>

      <Typography variant="h5" className={classes.title}>三目並べ（C++）</Typography>
      <Typography className={classes.period}>制作時間：1時間</Typography>
      <Typography className={classes.context}>
        C++を使用した三目並べのコンソールプログラム。<br />
        CUI上で動作する三目並べ（対コンピュータ）のプログラムです。<br /><br />
      </Typography>
      
      <Typography variant="h5" className={classes.title}>三目並べ（React）</Typography>
      <Typography className={classes.period}>制作時間：2時間</Typography>
      <Typography className={classes.context}>
        JavaScript（React）を使用した三目並べ。<br />
        <a href="https://nkue-yst.github.io/TicTacToe-React/">TicTacToe-React </a>二人対戦用の三目並べです。<br /><br />
      </Typography>

      <Typography variant="h5" className={classes.title}>ポートフォリオ</Typography>
      <Typography className={classes.period}>制作時間：5時間</Typography>
      <Typography className={classes.context}>
        JavaScript（React, Material-UI）を使用したポートフォリオサイト。<br />
        UIライブラリにMaterial-UIを使用しています。github-pagesを用いて公開しています。
      </Typography>

    </div>
  );
}
