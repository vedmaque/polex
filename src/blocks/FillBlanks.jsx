import React, { useState } from "react";
import BlankInput from "./BlankInput";

export default function FillBlanks({ words }) {

    let blanksCount = 0

    const [filledBlanksCount, setFilledBlanksCount] = useState(0);

    function increaseFilledBlanksCount() {
        setFilledBlanksCount(filledBlanksCount + 1);
    }

    function decreaseFilledBlanksCount() {
        setFilledBlanksCount(filledBlanksCount - 1);
    }

    const createTrainingWord = (trainWord, rightWord) =>
        trainWord.split('').map((v, i) => {
            if (v === '_') {
                blanksCount += 1;
                const valueFromWord = rightWord[i];
                return (
                    <BlankInput
                        key={`${i}input`}
                        correctValue={valueFromWord}
                        decreaseFilledBlanksCount={decreaseFilledBlanksCount}
                        increaseFilledBlanksCount={increaseFilledBlanksCount}
                    />
                );
            }
            return <span key={`${i}rightWord`}>{v}</span>;
        });

    const renderWords = () =>
        words.map(el => (
            <div className="FilledBlanks__trainingWord" key={el.id}>
                {createTrainingWord(el.trainWord, el.rightWord)}
            </div>
        ));

    return (
        <div className="FilledBlanks">
            <div className="tip">Заполните пропущенные буквы</div>

            <section>
                {renderWords()}
            </section>

            <div className="FilledBlanks__showingFinish">
                всего {blanksCount}
                заполнено {filledBlanksCount}
            </div>
        </div>
    )
}