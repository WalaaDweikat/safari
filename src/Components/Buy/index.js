import "./buy.css";
import a from "../../images/gustavo-spindula-l7wrlsKDmCE-unsplash.png";
import b from "../../images/engin-akyurt-5raPrOhbKQo-unsplash .png";
import Pagination from "@material-ui/lab/Pagination";

import BItem from "../BItem/index.js";

import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  pagination: {
    "& .Mui-selected": {
      backgroundColor: "transparent",
      color: "black",
      borderBottom: "2px solid  #ED165F",
      borderRadius: "0px",
    },
    "& .MuiPaginationItem-root": {
      fontFamily: "'Mulish', sans-serif",
      fontWeight: " 300",
      fontSize: "14px",
      lineHeight: "14px",
    },
    borderBottom: "1px solid  #D2D2D2",
    width: "190px",
    marginBottom: "50px",
    marginTop: "50px",
    alignSelf: "center",
  },
}));
export default function Buy() {
  const classes = useStyles();
  const [src, setSrc] = useState(a);
  const [page, setPage] = useState(1);
  const handleChange = () => {
    let v = page + 1;
    if (page > 3) v = 1;
    setPage(v);

    if (src === a) setSrc(b);
    else setSrc(a);
  };
  return (
    <div className="bb">
      <div className="buy">
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
        <BItem src={src} name="High heels ladies shoes" price="10,000" />
      </div>
      <Pagination
        count={3}
        page={page}
        onChange={handleChange}
        className={classes.pagination}
      />
    </div>
  );
}
