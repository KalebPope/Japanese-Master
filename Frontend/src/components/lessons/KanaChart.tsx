export const hiragana = [
["あ a","い i","う u","え e","お o"],
["か ka","き ki","く ku","け ke","こ ko"],
["さ sa","し shi","す su","せ se","そ so"],
["た ta ","ち chi","つ tsu","て te","と to"],
["な na","に ni","ぬ nu","ね ne","の no"],
["ま ma","み mi","む mu","め me","も mo"],
["や ya"," ","ゆ yu"," ","よ yo"],
["ら ra","り ri","る ru","れ re","ろ ro"],
["わ wa"," "," "," ","を wo"],
["ん n"],
];

export const katakana = [
["ア a","イ i","ウ u","エ e","オ o"],
["カ ka","キ ki","ク ku","ケ ke","コ ko"],
["サ sa","シ shi","ス su","セ se","ソ so"],
["タ ta ","チ chi","ツ tsu","テ te","ト to"],
["ナ na","ニ ni","ヌ nu","ネ ne","ノ no"],
["マ ma","ミ mi","ム mu","メ me","モ mo"],
["ヤ ya"," ","ユ yu"," ","ヨ yo"],
["ラ ra","リ ri","ル ru","レ re","ロ ro"],
["ワ wa"," "," "," ","ヲ wo"],
["ン n"],
];



type KanaChartType = {
    kanaData: string[][];
    title:string;
}

export default function KanaChart({kanaData, title}:KanaChartType) {
    return(
        <div className="w-100 h-200">
            <h2 className="text-3xl font-bold text-red-500 mb-5">{title}</h2>
            <div className="grid grid-cols-5 gap-1 w-100 h-200 pb-10">
                {kanaData.flat().map((kana:string, index:number) => (
                    <div key={index} className="text-2xl border flex justify-center items-center">{kana}</div>
                ))}
            </div>
        </div>
    )
}