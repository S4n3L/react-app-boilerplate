import React from "react"
import { ThemeProvider } from "@mui/material/styles"

import Button from "@mui/material/Button"

import style from "./LandingPage.scss"
import { Chip } from "@mui/material"
import incubetaLight from "@src/styles/themes"

const LandingPage: React.FunctionComponent = () => {
  return (
    <div className={`${style.landingPage} ${style.flexible}`}>
      Hello World
      <div>a</div>
      <div>b</div>
      <ThemeProvider theme={incubetaLight}>
        <Button
          sx={{
            width: "24rem",
            height: "3rem"
          }}
          variant="contained"
          color="secondary"
        >
          Hello World
        </Button>
        <Chip
          className={style.chip}
          label="primary"
          color="primary"
        />
      </ThemeProvider>
    </div>
  )
}

export default LandingPage

