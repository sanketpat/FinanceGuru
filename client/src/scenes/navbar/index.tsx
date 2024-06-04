import FlexBetween from "@/components/FlexBetween"
import { Box, Typography, useTheme } from "@mui/material"
import PixIcon from "@mui/icons-material/Pix"
import { useState } from "react"
import { Link } from "react-router-dom"

type Props = {}

const Navbar = (props: Props) => {
    const {palette} = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return ( 
        <FlexBetween mb="0.25rem" p="0.5rem, 1rem" color={palette.grey[300]}>
            {/*leftSide*/}
            <FlexBetween gap="0.75rem">
                <PixIcon sx={{fontSize:"28px"}}></PixIcon>
                <Typography variant="h4" fontSize="16px">
                    FinanceGuru
                </Typography>
            </FlexBetween>

            {/*RightSide*/}
            <FlexBetween gap="0.75rem">
                <Box sx={{"&:hover": {color:palette.primary[100]}}}>
                    <Link to="/"
                        onClick={()=> setSelected("dashboard")}
                        style={{
                            color: selected === "dashboard" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit"
                        }}> DASHBOARD </Link>
                </Box>
                <Box sx={{"&:hover": {color:palette.primary[100]}}}>
                    <Link to="/predictions"
                        onClick={()=> setSelected("predictions")}
                        style={{
                            color: selected === "predictions" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit"
                        }}> PREDICTIONS </Link>
                </Box>
            </FlexBetween>
        
        </FlexBetween>
    )
}

export default Navbar