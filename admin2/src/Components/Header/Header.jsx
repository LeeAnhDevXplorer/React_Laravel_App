import { Divider, Menu, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { TiHome } from 'react-icons/ti';
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <header className="border-gray-400 grid items-center justify-between sticky top-4 py-4 grid-cols-5 gap-4 bor bg-white/80 backdrop-blur-sm saturate-200 shadow-xl h-20 rounded-3xl">
      <div className="flex-col items-center space-x-2 ml-3">
        <div className="flex items-center text-">
          <TiHome className="text-xl text-gray-500" />
          <span className="text-gray-500">/ Dashboard</span>
        </div>
        <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
      </div>

      <div className="col-start-5 flex items-center space-x-4">
        <div className="grid items-center grid-cols-2 grid-rows-1 gap-4">
          <TextField
            className="flex items-center header__btn-search"
            id="outlined-basic"
            label="Search here"
            variant="outlined"
          />
          <div className="flex gap-4 text-xl text-gray-500">
            <div className="icon1 cursor-pointer">
              <FaUserCircle />
            </div>
            <div className="icon2 cursor-pointer">
              <IoMdSettings />
            </div>
            <div className="icon3 cursor-pointer">
              <FaBell onClick={handleClick} />
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose} className="flex items-center">
                  <MdEmail className="text-2xl text-gray-600 mr-3 relative" />
                  <span className="absolute bg-[#CC2B52]  px-1 top-0 right-0 text-xs text-white rounded-2xl">
                    2
                  </span>
                  Check new messages
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
