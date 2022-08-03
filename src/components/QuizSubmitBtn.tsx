import { Button, makeStyles } from "@material-ui/core"
import { MouseEventHandler } from "react"


interface p{
  onSubmit: MouseEventHandler
}

const useStyles = makeStyles({
  submitBtn: {
    position: "fixed",
    bottom: "0px",
    alignSelf: 'center',
    height: "50px",
  }
})

export const QuizSubmitBtn = (props : p) => {
  const classes = useStyles()
  return (
    <Button
      fullWidth
      color="primary"
      variant="contained"
      className={classes.submitBtn}
      onClick={props.onSubmit}
    >
      Create Quiz
    </Button>
  )
}
