import * as React from "react";
import { sp } from "@pnp/sp/presets/all";

const Textreader = () => {
  const [name, setName] = React.useState([]);

  const getData = () => {
    let nameval = [];
    sp.web.lists
      .getByTitle("TextRead")
      .items.get()
      .then((Res) => {
        Res.forEach((val) => {
          nameval.push({ Name: val.Name });
        });
        setName([...nameval]);
      })
      .catch((err) => {
        console.log(err, "getData");
      });
  };
  const readFunc = () => {
    name.forEach((val) => {
      const textToSpeak = val.Name;
      const speechSynthesis = window.speechSynthesis;
      if (speechSynthesis && speechSynthesis.speak) {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        speechSynthesis.speak(utterance);
      }
    });
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {name.map((val) => {
        return <p>{val.Name}</p>;
      })}
      <button onClick={readFunc}>Read</button>
    </>
  );
};

export default Textreader;
