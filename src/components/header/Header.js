import style from "./header.module.css";

const Header = (props) => {
  return (
    <ul className={style.title}>
      <li>{props.content.name}</li>
      <li>{props.content.age}</li>
    </ul>
  );
};

export default Header;
