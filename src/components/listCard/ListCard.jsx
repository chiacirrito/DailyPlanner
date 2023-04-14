import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDate, editDate } from "../../redux/actions";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { BsCalendar3, BsClock, BsXCircle } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import styles from "./index.module.scss";

const ListCard = () => {
  const datesList = useSelector((state) => state.dailyReducer.datesList);
  const dispatch = useDispatch();

  const actionClick = (item) => {
    if (item && item?.type === "edit") {
      dispatch(editDate(item?.date?.id));
    } else if (item && item?.type === "delete") {
      dispatch(deleteDate(item?.date?.id));
    }
  };

  return (
    <div className={styles.List}>
      {datesList &&
        datesList.map((date) => (
          <Card className={styles.Card} key={date.id}>
            <CardBody>
              <CardTitle className={styles.text}>{date?.what}</CardTitle>
              <CardSubtitle className={styles.text}>
                <p>
                  <CiLocationOn />
                  {date?.where}
                </p>
              </CardSubtitle>
              <CardSubtitle className={styles.text}>
                <p>
                  <BsCalendar3 />
                  {date?.day}
                </p>
              </CardSubtitle>
              <CardSubtitle className={styles.text}>
                <p>
                  <BsClock />
                  {date?.time}
                </p>
              </CardSubtitle>
              <CardFooter className={styles.footer}>
                <Button>
                  <BsXCircle
                    className={styles.icon}
                    onClick={() => actionClick({ date: date, type: "delete" })}
                  />
                </Button>
                <Button>
                  <FiEdit2
                    className={styles.icon}
                    onClick={() => actionClick({ date: date, type: "edit" })}
                  />
                </Button>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default ListCard;
