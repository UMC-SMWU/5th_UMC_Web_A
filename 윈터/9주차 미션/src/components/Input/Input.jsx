import * as S from "./Input.style";

const Input = ({ type, name, label, errorMessage = "", isError = false, value, onChange }) => {
	return (
		<S.Container>
			<S.Label htmlFor={name}>{label}</S.Label>
			<S.Input type={type} id={name} name={name} value={value} onChange={onChange} />
			{isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
		</S.Container>
	);
};

export default Input;
