import { Box, Button, Container, makeStyles, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FormListMember } from '../components/FormListMember'
import { Loader } from '../components/Loader'
import { LogoutBtn } from '../components/LogoutBtn'
import { NoForms } from '../components/NoForms'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const useStyles = makeStyles({
  newBtn: {
    marginTop: "40px",
    marginBottom: "20px"
  },
  title: {
    marginTop: "50px"
  },
  noLinkStyle: {
    textDecoration: "none",
    color: "primary",
    width: "100%"
  }
})

export const MyFormsPage = () => {
  const { form, user } = useTypedSelector(store => store)
  const {checkForms, getForms} = useActions()
  const classes = useStyles()
  useEffect(() => {
    checkForms()
    if(!form.forms.length){
      
      getForms(user.user?.id as string)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const forms = 
    form.forms.length ?
      form.forms.map((form, index) => <FormListMember form={form} index={index} key={index} />)
      :
      form.loading ? 
        <Loader />
        :
        <>
          <NoForms />
        </>
  return (
    <Box>
      <LogoutBtn />
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography className={classes.title} variant="h3">Your Quiz List</Typography>
          {forms}
          <NavLink className={classes.noLinkStyle} to="/my-forms/new">
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.newBtn}
            >

                Create New Quiz
            </Button>
            </NavLink>

        </Box>
      </Container>
    </Box>
  )
}
