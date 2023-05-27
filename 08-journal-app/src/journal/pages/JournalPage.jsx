import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import AddOutlined from '@mui/icons-material/AddOutlined'

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium officia illum perferendis quos quas doloribus nemo sed voluptatibus qui. Atque animi esse, officia voluptatibus corrupti eligendi consequuntur quis maxime?</Typography> */}

            {/* <NothingSelectedView /> */}

            <NoteView />

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>


        </JournalLayout>
    )
}
