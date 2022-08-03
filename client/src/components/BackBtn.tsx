import { Button, makeStyles } from "@material-ui/core"
import { ArrowBack } from "@material-ui/icons"
import { NavLink } from "react-router-dom"


const useStyles = makeStyles({
  backBtn: {
    position: "fixed",
    margin: "15px",
    zIndex: 1,
  }
})

export const BackBtn = () => {

  const classes = useStyles()
  
  return (
    <NavLink to="/my-forms">
      <Button
        className={classes.backBtn}
        variant="outlined" 
        color="secondary"
      >
        <ArrowBack fontSize="small" />
        Back
      </Button>
    </NavLink>
  )
}
