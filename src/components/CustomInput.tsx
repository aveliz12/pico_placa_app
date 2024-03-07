type Props = {
  id: string;
  type: string;
  text: string;
  onChange?: any;
};

//INPUT PERSONALIZADO
const CustomInput = ({ id, type, text, onChange }: Props) => {
  return (
    <>
      <div className="form-floating mb-3">
        <input
          type={type}
          className="form-control"
          id={id}
          onChange={onChange}
        />
        <label htmlFor={id}>{text}</label>
      </div>
    </>
  );
};

export default CustomInput;
