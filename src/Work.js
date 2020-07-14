import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import YouTubeIcon from '@material-ui/icons/YouTube';

import img1 from './image/treasurerun_title.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  img: {
    borderRadius: 10,
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
    fontWeight: 300,
  },
}));

export default function Work() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title} style={{ marginBottom: 40 }}>~Works~</Typography>

      <img src={img1} width="50%" className={classes.img} />
      <Typography variant="h5" className={classes.title}>TreasureRun</Typography>
      <Typography className={classes.period}>2020.06（開発中）</Typography>
      <a href="https://github.com/nkue-yst/UE4src-TreasureRun" target="_blank" style={{ marginRight: 10 }}><GitHubIcon /></a>
      <a href="https://yossyi.booth.pm/items/2127894" target="_blank" style={{ marginRight: 10 }}><LinkIcon /></a>
      <a href="https://youtu.be/1jP5hKf6bCY" target="_blank"><YouTubeIcon /></a>
      <Typography className={classes.context}>
        UE4, C++を使用して制作したアクションゲーム。BOOTHにて公開中です。<br />
        プレイヤーはマップ内に落ちているアイテムを拾いつつゴールへ向かいます。<br />
        ゴールへの最短ルートを探すも良し、全てのアイテムを探しコンプリートを目指すも良し。
        プレイヤーの腕前に応じた遊び方が出来ます。<br /><br />
      </Typography>

      <Typography variant="h5" className={classes.title}>ShootingGame-2D</Typography>
      <Typography className={classes.period}>2020.06（開発中）</Typography>
      <Typography className={classes.context}>
        C++（GLEW, SDL2, SOIL）を使用して制作した2Dシューティングゲーム。<br />
        WASDキーによる移動、スペースキーによる攻撃を用いて敵機を撃つゲームです。<br /><br />
      </Typography>

      <Typography variant="h5" className={classes.title}>MazeGenerator</Typography>
      <Typography className={classes.period}>制作時間：2時間</Typography>
      <Typography className={classes.context}>
        C++を使用した迷路生成プログラム。<br />
        縦横の長さを指定するとその大きさの迷路が生成されるプログラムです。<br /><br />
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
        JavaScropt（React, Material-UI）を使用したポートフォリオサイト。<br />
        UIライブラリにMaterial-UIを使用しています。github-pagesを用いて公開しています。
      </Typography>

    </div>
  );
}
