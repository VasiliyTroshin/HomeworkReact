import React,{useState} from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import CommentIcon from '@mui/icons-material/Comment'
import IconButton from '@mui/material/IconButton'
import './App.scss'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

const ChatList = () => {

    return (
      <div className='chatls'>
    <List sx={{ width: '100px', maxWidth: 200, bgcolor: 'gbackground.paper' }}>
            {[1, 2, 3].map((value) => (
              <ListItem
                
                key={value}
                disableGutters
                secondaryAction={
                  <IconButton>
                    <CommentIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={`ЧАТ ${value}`} />
              </ListItem>
            ))}
          </List>
          <Fab  color="primary" aria-label="add">
            <AddIcon />
            
        </Fab>
        <Fab  color="primary" aria-label="add">
        <DeleteIcon/>
            
        </Fab>
        
</div>
  )
}

export default ChatList