import React ,{useState} from "react";
// function capitalize(str){
//     const ln= str.split('')
//     for(let i=0;i<=ln.length;i++){
//       ln[i]=ln[i][0].toUpperCase()+ln[i].slice(1);

//     }
//     return ln.join('');
// }
// let word="hello world";
// console.log(capitalize(word));
export default function TextForm(props) {
  const handleupclick = () => {
    console.log("you clicked handleupclick");
    let newtext = text.toUpperCase();
    setText(newtext);
     props.showAlert("this is a uppercase text","success");
  };
  const handleloclick = () => {
    console.log("you clicked handleupclick");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("this is a lower text","success");
  };
  const handleclearclick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("clear text","success");
  };
  const handlecapitalclick = () => {
    const words = text.split(" ");
    const converted = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
      
    });
    const convertedstring = converted.join(" ");
    setText(convertedstring);
    props.showAlert(" all first alphabet capital","success");
  };

  const handlefirstclick = () => {
    const newtext = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newtext);
    props.showAlert("first letter capital","success");
  };

  const handleonchnage = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{color:props.mode==='dark'?'white':'#042743'
    }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchnage}
            style={{
              backgroundColor: props.mode === 'dark'?'#2c5273':'white',color:props.mode==='dark'?'white':'#042743'
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button  disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleupclick}>
          Convert to uppercase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>
          Convert to lower case
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>
          Clear
        </button>
        <button  disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handlecapitalclick}>
          lettercapital
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlefirstclick}>
          first lettercapital
        </button>
      </div>

      <div className="my-2"     style={{color:props.mode==='dark'?'white':'#042743'
    }}>
        <p>
          {/* /\s/ = ye split krega line line and space ke sath bhi */}
          {text.split(/\s+/).filter((a2)=>{return a2.length!==0}).length} words {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").filter((a2)=>{return a2.length!==0}).length}</p>
      </div>
    </>
  );
}
