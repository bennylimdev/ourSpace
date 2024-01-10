import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CommentMenu = ({ deleteComment, commentId }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        deleteComment(commentId);
        setAnchorEl(null);
    };

    return (
    <div>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <MenuIcon />
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
    </div>
    );
};

export default CommentMenu;