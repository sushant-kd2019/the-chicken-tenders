import React from 'react'
import TextField from '@material-ui/core/TextField';
import "./AddComp.css"
import { Button } from '@material-ui/core';
import List from '../List/List'

function AddComp() {

    const inputProps = {
        step: 300,
    };



    return (

        <div className="add-app">
            <h1>Add a new Roadmap and devote to social cause!</h1>

            <TextField
                variant="outlined"
                margin="normal"
                required

                id="name_project"
                label="Name of Roadmap"
                name="text"
                autoComplete="name"
                autoFocus
            />

            <Button
                style={{
                    borderRadius: 35,
                    backgroundColor: "#21b6ae",
                    padding: "9px 15px",
                    fontSize: "18px"
                }}
                variant="contained"
            >
                Add Check-List
            </Button>
            <Button
                style={{
                    borderRadius: 35,
                    backgroundColor: "#21b6ae",
                    padding: "9px 15px",
                    fontSize: "18px"
                }}
                variant="contained"
            >
                Add course
            </Button>

            <List></List>

        </div>



    )
}

export default AddComp
