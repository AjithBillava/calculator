export type buttonType = "operator" | "number"
export type calculatorButtonType = {
  text:string,
  setResult:(React.Dispatch<React.SetStateAction<string>>),
  result:string,
  type:buttonType}

export const CalculatorButtons = ({text,setResult,result,type}:calculatorButtonType)=>{
   
        return(
          <button className={`border flex justify-center items-center font-bold ${type==="operator"?`bg-primaryColor text-white`:`bg-white`} border-primaryColor-dark text-4xl h-16 w-16 md:h-20 md:w-20`} 
          onClick={()=>setResult(result.concat(text==="÷"?"/":text))}>
            {text}
          </button>
          
        )
    
}