function Button(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {props.nome}
      </button>
    </div>
  );
}

export default Button;
