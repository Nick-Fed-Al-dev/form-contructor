import { CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  loader: {
    marginTop: "40px"
  }
})

export const Loader = () => {
  const classes = useStyles()

  return (
    <CircularProgress size="80px" className={classes.loader} />
  )
}
