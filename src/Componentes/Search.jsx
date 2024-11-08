import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';



export default function Search() {

    const [filtro, setFiltro] = useState('')
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Paper
      component="form"
      sx={{ p: '0px 1px', display: 'flex', alignItems: 'center', width: 700 }}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">

      <Tooltip title="Filtros">
            <TuneIcon
            onClick={handleClick}
            size="small"
            // sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}/>
        </Tooltip>

        
      </IconButton>
      {filtro}
      <Divider sx={{ height: 28, m: 2 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'Buscar' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
    </Paper>

<Menu
anchorEl={anchorEl}
id="account-menu"
open={open}
onClose={handleClose}
onClick={handleClose}
slotProps={{
  paper: {
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  },
}}
transformOrigin={{ horizontal: 'right', vertical: 'top' }}
anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
<MenuItem onClick={()=>{
    setFiltro('Nombre o ID de cliente')
    handleClose
}}>
  Nombre o ID de cliente
</MenuItem>
<MenuItem onClick={()=>{
    setFiltro('ID de factura')
    handleClose
}}>
  ID de factura
</MenuItem>
<MenuItem onClick={()=>{
    setFiltro('Estado de pago')
    handleClose
}}>
  Estado de pago
</MenuItem>
<MenuItem onClick={()=>{
    setFiltro('Metodo de pago')
    handleClose
}}>
  Metodo de pago
</MenuItem>
</Menu>
</>
  );
}