import { useState } from "react";
function Calculator() {
    const [result, setResult] = useState("");

    const clickHandle = (e) => {
        console.log(e.target.value);
        setResult(result.concat(e.target.value));
    }

    const clearScreen = () => {
        setResult("");
    }

    const calculate = () => {
        setResult(eval(result).toString());
    }
    return (

        <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
            <div className="main w-64 h-autobg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100">
                {/* Screen*/}
                <div className="screen p-2">
                    <input value={result} type="text" className="text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] 
                    placeholder-black px-1 bg-gray-100 text-2xl pt-10 rounded-lg outline-none text-right" placeholder="0" />
                </div>

                {/*App name*/}
                <div className="brand bg-gray-200 bg-opacity-90">
                    <h1 className="text-gray-900 text-xs font-bold text-center mb-2">Calculator</h1>
                </div>
                {/*Keyboard*/}
                <div className="keyword">
                    <div className="flex justify-between m-2">
                        <input type="button" value="C" className="bg-red-300 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clearScreen} />
                        <input type="button" value="<" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="%" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="/" className="bg-pink-300 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                    </div>

                    <div className="flex justify-between m-2">
                        <input type="button" value="7" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="8" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="9" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="*" className="bg-green-300 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                    </div>

                    <div className="flex justify-between m-2">
                        <input type="button" value="4" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="5" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="6" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="-" className="bg-indigo-300 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                    </div>

                    <div className="flex justify-between m-2">
                        <input type="button" value="1" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="2" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="3" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="+" className="bg-purple-300 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                    </div>

                    <div className="flex justify-between m-2">
                        <input type="button" value="0" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="00" className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="." className="bg-gray-200 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={clickHandle} />
                        <input type="button" value="=" className="bg-orange-300 shadow-md w-12 h-12
                        rounded-lg text-center text-black font-medium" onClick={calculate} />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Calculator;