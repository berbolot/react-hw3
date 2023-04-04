import style from "./footer.module.css";

const Footer = (props) => {
  return (
    <ul className={style.title}>
      <li>{props.content.name}</li>
      <li>{props.content.age}</li>
    </ul>
  );
};

export default Footer;
