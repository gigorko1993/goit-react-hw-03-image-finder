import s from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    // onClick={() => onClick()}
    <Button type="button" className={s.Button} onClick={onClick}>
      Load more
    </Button>
  );
};

export default Button;
