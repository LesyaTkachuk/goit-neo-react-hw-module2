import { IoIosCafe } from "react-icons/io";
import { VscActivateBreakpoints } from "react-icons/vsc";
import css from "./Description.module.css";

const Description = () => {
  return (
    <div>
      <div className={css.container}>
        <div className={css.box}>
          <VscActivateBreakpoints className={css.logo} />
          <IoIosCafe size={50} />
        </div>
        <h1>Sip Happens Café</h1>
      </div>

      <h3 className={css.subtitle}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h3>
    </div>
  );
};

export default Description;
