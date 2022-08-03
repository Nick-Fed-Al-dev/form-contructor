import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  typo: {
    marginTop: "40px"
  }
})

export const NoForms = () => {
  const classes = useStyles()

  return (
    <Typography className={classes.typo} variant="h4">No Forms</Typography>
  )
}
