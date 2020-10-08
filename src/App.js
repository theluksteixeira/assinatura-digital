import React from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import './index.css';

function App() {
    const [state, setState] = React.useState({ trimmedDataURL: null });
    let sigPad = {};
    const clear = () => {
        sigPad.clear();
    };
    const trim = () => {
        setState({ trimmedDataURL: sigPad.getTrimmedCanvas().toDataURL("image/png") });
        console.log(sigPad.getTrimmedCanvas().toDataURL("image/png"));
    };
    return (
        <div className="App">
            <ReactSignatureCanvas
                backgroundColor="white"
                penColor="black"
                ref={(ref) => {
                    sigPad = ref;
                }}
                canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
            />
            <button onClick={clear}>Limpar</button>
            <button onClick={trim}>Copiar Assinatura</button>
            {state.trimmedDataURL ? <img alt="assinatura" src={state.trimmedDataURL} /> : null}
        </div>
    );
}

export default App;
