import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

}));

export default function Work() {
  const classes = useStyles();

  return (
    <div>
      <Typography>TreasureRun</Typography>
      <Typography>2020.06（開発中）</Typography>
      <Typography>
        UE4, C++を使用して制作したアクションゲーム。Boothにて公開中です。<br />
        プレイヤーはマップ内に落ちているアイテムを拾いつつゴールへ向かいます。<br />
        ゴールへの最短ルートを探すも良し、全てのアイテムを探しコンプリートを目指すも良し。
        プレイヤーの腕前に応じた遊び方が出来ます。<br /><br />
      </Typography>

      <Typography>ShootingGame-2D</Typography>
      <Typography>2020.06（開発中）</Typography>
      <Typography>
        C++（GLEW, SDL2, SOIL）を使用して制作した2Dシューティングゲーム。<br />
        WASDキーによる移動、スペースキーによる攻撃を用いて敵機を撃つゲームです。<br /><br />
      </Typography>

      <Typography>MazeGenerator</Typography>
      <Typography>制作時間：2時間</Typography>
      <Typography>
        C++を使用したプログラム。<br />
        縦横の長さを指定するとその大きさの迷路が生成されるプログラムです。<br /><br />
      </Typography>

      <Typography>三目並べ（C++）</Typography>
      <Typography>制作時間：1時間</Typography>
      <Typography>
        C++を使用した三目並べのコンソールプログラム。<br />
        CUI上で動作する三目並べ（対コンピュータ）のプログラムです。<br /><br />
      </Typography>
      
      <Typography>三目並べ（React）</Typography>
      <Typography>制作時間：2時間</Typography>
      <Typography>
        JavaScript（React）を使用した三目並べ。<br />
        <a href="https://nkue-yst.github.io/TicTacToe-React/">TicTacToe-React </a>二人対戦用の三目並べです。<br /><br />
      </Typography>

      <Typography>ポートフォリオ</Typography>
      <Typography>制作時間：5時間</Typography>
      <Typography>
        JavaScropt（React, Material-UI）を使用したポートフォリオサイト。<br />
        UIライブラリにMaterial-UIを使用しています。github-pagesを用いて公開しています。
      </Typography>

    </div>
  );
}
