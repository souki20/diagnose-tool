import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { push } from "connected-react-router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { backPageTop, initDataset } from "./Redux/actions";


// const styles = {
//   result: css`
//   text-align: center;
//   `
// }

const useStyles = makeStyles(() => (
  createStyles({
    "resultTitle": {
      textAlign: 'center',
      margin: '50px 0',
      fontSize: '2rem',
    },
    "resultContents": {
      minHeight: '70vh',
      backgroundColor: '#F1F5B9'
    },
    "resultText": {
      textAlign: 'center',
    },
    "button": {
      margin: '30px'
    },
  })
));


const Result = () => {
  
  const selector = useSelector(state => state.contents);
  const dispatch = useDispatch();
  const classes = useStyles();
  
  // const backTop = () => {
  //     dispatch(backPageTop());
  //     dispatch(push("/"));
  // }

  if(selector.question === "") {
    // dispatch(initDataset(selector));
    dispatch(push("/diagnose"));
  }

  const renderResultText = () => {

    if(selector.loveCount == 0) {
      return(
        <div>あなたは彼（彼女）のことを愛していません。</div>
        // <div>{selector.textData[bottom]}</div>
      )
    } else if(selector.loveCount < 5) {
      return(
        <div>あなたは彼（彼女）のことを「まあまあ好き」な状態です。</div>
      )
    } else if(selector.loveCount < 9) {
      return(
        <div>あなたは彼（彼女）のことが好きです。</div>
      )
    } else if(selector.loveCount < 13) {
      return(
        <div>あなたは彼（彼女）のことが大好きです。</div>
      )
    } else if(selector.loveCount == 13) {
      return(
        <div>あなたは彼（彼女）のことが超大好きです。</div>
      )
    }
  }


  return(
    <div className="">
      <div className={classes.resultTitle}>診断結果は...</div>
      <div className={classes.resultContents}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {dispatch(push("/"))}}
          >
          ＜トップページに戻る
        </Button>
        <div className={classes.resultText}>
          {renderResultText()}
        </div>
        </div>
    </div>
  );
}

export default Result;