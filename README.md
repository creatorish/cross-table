jQuery CrossTable Plugin
======================
テーブルを十字にフォーカスさせるためのjQueryプラグインです。  
フォーカスの色はCSSで自由にカスタマイズすることができます。

デモ
------
<a href="http://dev.creatorish.com/demo/cross-table/" target="_blank">http://dev.creatorish.com/demo/cross-table/</a>

使い方
------
jQueryとjquery.crossTable.jsを読み込みます。

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.crossTable.js"></script>

十字フォーカスさせたい要素を以下のように指定します。

    $("#table1").crossTable();
    
    //オプションをつける場合
    $("#table2").crossTable({
         option名: プロパティ
    });

CSSでテーブルを装飾します。

    th.hover {
        background: #ccff66;
    }
    .odd td {
        background:#f6f6f6;
    }
    .even td {
        background:#fff;
    }
    td.hover {
        background: #ffffcc;
    }
    td.active {
        background: #ff6600;
        color: #fff;
    }

### 付与されるクラス名 ###

<table border="0">
<tbody>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>hover</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>hover</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>hover</td>
<td>hover</td>
<td>active</td>
<td>hover</td>
<td>hover</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>hover</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>hover</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### オプション ###

+    oddClass: "odd" : テーブルの奇数列に付与されるクラス名(trに付与されます)
+    evenClass: "even" : テーブルの偶数列に付与されるクラス名(trに付与されます)
+    hoverClass: "hover" : マウスオーバーした列と行のセル(td)に付与されるクラス名
+    activeClass: "active" : マウスオーバーしているセルに付与されるクラス名
+    thHover: false : th要素にマウスオーバーしたときにもクラス名を付与するかどうか
+    noHoverClass: "noHover" : このクラス名を付けられたセルにはマウスオーバーイベントが発生しません
+    direction: "both" : "both" - 縦横にhoverクラスを付与します。  
"vertical" - 縦にのみhoverクラスを付与します。  
"horizon" - 横にのみhoverクラスを付与します。

ライセンス
--------
[MIT]: http://www.opensource.org/licenses/mit-license.php
Copyright &copy; 2012 creatorish.com
Distributed under the [MIT License][mit].

作者
--------
creatorish yuu  
Weblog: <http://creatorish.com>  
Facebook: <http://facebook.com/creatorish>  
Twitter: <http://twitter.jp/creatorish>