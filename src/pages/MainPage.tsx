import { Box, Button, Container, makeStyles, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
  desc: {
    fontWeight: 100,
    maxWidth: "800px",
    marginTop: "80px"
  },

  btnWrapper: {
    minWidth: "300px",
    marginTop: "60px",
  },

  noUnderline: {
    textDecoration: "none !important"
  }
})

export const MainPage = () => {
  const classes = useStyles()


  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" marginTop="100px">
        <Typography variant="h2">Questionnaire</Typography>
        <Typography variant="h5" className={classes.desc}>
          Web Application designed to create tests and surveys.
          You can create your own quiz in a convenient constructor.
          The application will provide you with easy-to-analyze results
        </Typography>
        <Box display="flex" justifyContent="space-between" className={classes.btnWrapper}>
          <NavLink className={classes.noUnderline} to="/my-forms/new">
            <Button color="primary" variant="contained">Create Quiz</Button>
          </NavLink>
          <NavLink className={classes.noUnderline} to="/my-forms">
            <Button color="secondary" variant="outlined">All Quizes</Button>
          </NavLink>
        </Box>
      </Box>
    </Container>
  )
}
