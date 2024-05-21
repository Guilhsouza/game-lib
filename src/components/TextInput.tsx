interface inputFunc {
    label: string
    value: string;
    setValue: Function;
}

export default function TextInput(inputFunc: inputFunc) {
    return (
        <div>
            <label htmlFor='title'>{inputFunc.label}</label>
            <input
                type='text'
                name='title'
                id='title'
                value={inputFunc.value}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                    inputFunc.setValue(ev.target.value)
                }}
            />
        </div>
    )
}