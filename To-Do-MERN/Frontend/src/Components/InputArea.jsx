function InputArea({ onChange, text, onSubmit }) {
  return (
    <div className="form">
      <input onChange={onChange} type="text" value={text} />
      <button onClick={onSubmit}>
        <span>Add</span>
      </button>
    </div>
  );
}


export default InputArea;