import "./KanjiCard.css";
import KanjiCharacter from "./KanjiCharacter";
import KanjiCharacterDefinition from "./KanjiCharacterDefinition";

const KanjiCard = ({ kanjiName, eachKanjiData }) => {

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(kanjiName);
    alert("Copied " + kanjiName + " !");
  };

  return (
    <article className="kanji-card" onClick={copyToClipboard} >
      
      <div className="kanji-name">
        {eachKanjiData.map((kanji) => (
          <KanjiCharacter
            character={kanji.character}
            hiragana={kanji.hiragana}
            romaji={kanji.romaji}
          />
        ))}
      </div>

      <div className="kanji-name-info">
        {eachKanjiData.map((kanji) => (
          <KanjiCharacterDefinition
            character={kanji.character}
            definition={kanji.definition}
          />
        ))}
      </div>

    </article>
  );
};

export default KanjiCard;
