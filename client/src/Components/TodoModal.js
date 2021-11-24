import classes from "../Css/Todo.module.css";
import moment from "moment";

function TodoModal(props) {
  return (
    <div className={classes.todoCard}>
      <div align="right">
        <i className="fas fa-thumbtack fa-lg" />
      </div>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>{moment(props.date).format("DD-MM-YYYY")}</div>
      <br />
      <div className={classes.handWriting}>
        <h4>{props.text}</h4>
      </div>
    </div>
  );
}

export default TodoModal;
