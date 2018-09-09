// nodemodule_ts は izmhr が npm にあげたモジュール。
import { findEmojis } from 'nodemodule_ts';
const foundEmojis: string[] = findEmojis(`Hello 🐵! What's up? ✌️`);

console.log(foundEmojis);
console.log(foundEmojis[0]);

import {Hoge} from './onlyts';
console.log(Hoge("hiroko"));

// 型定義が無い状態でとりあえず書いた。（実行OK）
// var T = require('./funcs');
// console.log(T.test("hoge"));

import * as Funcs from 'Funcs';
console.log(Funcs.test("hohoho"));