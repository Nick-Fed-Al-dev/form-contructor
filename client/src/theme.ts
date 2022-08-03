import { createTheme, Theme } from "@material-ui/core"


export function getTheme(windowWidth : number) : Theme{
  return createTheme({
    palette: {
      primary: {
        main: '#4287f5'
      },
    },
    typography: {
      h2: {
        fontSize: (windowWidth > 400) ? '3.5rem' : '3.2rem'
      },
      h3: {
        fontSize: (windowWidth > 400) ? '2.25rem' : '1.8rem'
      },
      h4: {
        fontSize: (windowWidth > 400) ? '1.2rem' : '1rem'
      },
      h5: {
        fontSize: (windowWidth > 400) ? '1.4rem !important' : '1rem !important'
      },
      h6: {
        fontSize: (windowWidth > 400) ? '1rem' : '0.845rem'
      }
    }
  })
}

