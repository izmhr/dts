// ts だけで export するモジュールを作って、main.ts で import するパタン

export function Hoge(str: string):string {
  return str + ", " + str;
}