import "../../public/Styles/TopBar.css"
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

function TopBar() {
  return (
    <>
    <div className="topbarcontainer">
        <div className="topBarContent">
            <h1>Business Name</h1>
            <Avatar
            alt="Daviel"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 50, height: 50, bgcolor: blue[600], color: blue[0]  }}
            >DS</Avatar>
        </div>
    </div>
    </>
  )
}

export default TopBar