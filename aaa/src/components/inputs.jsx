function Input(props) {
    return (
        <div className="flex content-center justify-center flex-col w-[310px]">
            <label className="w-[130px] h-[20px] mb-1 ml-1">{props.label}</label>
            <input
                value={props.value}
                onChange={props.onChange}
                type="text"
                placeholder={props.placeholder}
                className="bg-gray-300 border border-gray-950 px-5 py-2 w-[310px] h-[40px] rounded-md"
            />
        </div>
    );
}

export default Input;
