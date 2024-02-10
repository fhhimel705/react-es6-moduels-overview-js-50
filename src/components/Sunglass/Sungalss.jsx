import "./Sunglass.css";
import { add, multiply, minus, divide } from "../../Utilis/calculate";
const Sungalss = () => {
  const num01 = 11;
  const num02 = 14;
  const sum = add(num01, num02);
  const multi = multiply(num01, num02);
  const min = minus(num01, num02);
  const divider = divide(num01, num02);

  return (
    <div>
      <h2>Sunglass</h2>
      <h3>sunglass price : {sum}</h3>
      <h3>sunglass price : {multi}</h3>
      <h3>sunglass price : {min}</h3>
      <h3>sunglass price : {divider}</h3>
    </div>
  );
};

export default Sungalss;
