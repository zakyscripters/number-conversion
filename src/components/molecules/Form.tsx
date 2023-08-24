import Button from "../atoms/Button";
import Input from "../atoms/Input";

const Form = ({ handleSubmit, placeholder }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-center my-3 mb-4"
    >
      <Input placeholder={placeholder} />
      <Button />
    </form>
  );
};

export default Form;
