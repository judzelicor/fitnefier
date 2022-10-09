import "./FormErrorMessage.css";

function InputErrorMessage({ message }: { message: string }) {
    return (
        <div>
            <div className={ "formInputErrorWrapper__Llm9" }>
                <div className={ "formInputErrorIcon__Llm9" }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path fill="#f87171" d="M16 1C7.72 1 1 7.72 1 16s6.72 15 15 15 15-6.72 15-15S24.28 1 16 1zm0 24c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2.29-15.51-.67 8.02c-.07.84-.77 1.49-1.62 1.49s-1.55-.65-1.62-1.49l-.67-8.02C13.6 8.15 14.65 7 16 7a2.3 2.3 0 0 1 2.3 2.3c0 .06 0 .13-.01.19z" data-original="#ff6174" />
                    </svg>
                </div>
                <div>
                    <p className={ "formInputErrorMessage__Llm9" }>{ message }</p>
                </div>
            </div>
        </div>
    )
}

export default InputErrorMessage;