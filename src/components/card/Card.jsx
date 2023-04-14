import { useContext, useEffect } from "react";
import { ApplicationCtx, initialState } from "../../store";
import { BsCalendar3, BsClock, BsXCircle } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import styles from "./index.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const CardBu = ({ data }) => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleDelete = () => {
    dispatch({ type: "DELETE_DATE", payload: data.id });
  };

  const onHandleEdit = () => {
    setValue({ what: "", where: "", day: "", time: "" });
    document.getElementById("formDate").requestFullscreen();
  };

  return (
    <div id="card" className={styles.Card}>
      <div>
        <Card>
          <CardHeader>
            <AiOutlineCheckCircle />
          </CardHeader>
          <CardBody>
            <CardTitle>
              <h5>{data.what}</h5>
            </CardTitle>
            <CardSubtitle>
              <p>
                <CiLocationOn />
                {data.where}
              </p>
            </CardSubtitle>
            <CardSubtitle>
              <p>
                <BsCalendar3 />
                {data.day}
              </p>
            </CardSubtitle>
            <CardSubtitle>
              <p>
                <BsClock />
                {data.time}
              </p>
            </CardSubtitle>
            <CardFooter className={styles.footer}>
              <Button color="danger">
                <BsXCircle onClick={onHandleDelete} />
              </Button>
              <Button color="danger">
                <FiEdit2 onClick={onHandleEdit} />
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CardBu;
