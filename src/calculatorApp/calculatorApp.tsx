import { useEffect, useRef, useState } from "react"
import {CalculatorButtons} from "../components/calculatorBtn"

export const CalculatorApp = () =>{
    const numberArray = ['7','8','9','4','5','6','1','2','3']
    const operators = ['÷','-','+']

    const [result,setResult] = useState("")
    const inputFocused = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        if(inputFocused.current!==null){
            inputFocused.current.focus()
        }
    })

    const clearOnClick =() =>{
        setResult("")
    }

    const calculate = () =>{
        try {
            result?setResult(eval(result).toString()):setResult("")  
        } catch (error) {
            alert(error)
        }
    }

    return (
            <form onSubmit={(e)=>e.preventDefault()} className="otrigin-center transform border border-primaryColor-dark translate-y-1/2 md:text-4xl flex flex-col font-mono " >
                
                <input ref={inputFocused} 
                 onChange={(e)=>setResult(e.target.value)}
                 className="h-20 font-bold text-xl md:text-2xl border border-primaryColor-dark px-2 bg-secondaryColor-dark text-white text-right font-slab outline-none" value={result} type="text" />
            
                <div className="flex flex-rows ">
                    
                    <div className="grid grid-cols-3">
                        <button onClick={clearOnClick} className="col-span-3 text-secondaryColor border border-primaryColor-dark text-xl font-bold md:text-4xl h-16 md:h-20 ">clear</button>
                        {
                            numberArray.map(number=>(
                                <div key={number}>
                                    <CalculatorButtons type="number" setResult={setResult} result={result} text={number} />
                                </div>
                            ))
                        }
                    
                    </div>
                    <div className="grid grid-rows-4">
                        {
                        operators.map(operator=>(
                            <div key={operator}>
                                <CalculatorButtons type="operator" setResult={setResult} result={result} text={operator} />
                            </div>
                        ))
                        }
                        <button type="submit" className={`border flex justify-center items-center bg-primaryColor text-white border-primaryColor-dark text-4xl h-16 w-16 md:h-20 md:w-20`} onClick={calculate}>
                            =
                        </button>
                    </div>
                </div>
            

            </form>
    )
}