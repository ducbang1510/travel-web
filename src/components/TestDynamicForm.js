import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: theme.spacing(1),
    }
}))

function DynamicForm() {
    const [childs, setChilds] = useState(0)
    const [adults, setAdults] = useState(1)
    const [count, setCount] = useState(1)

    const classes = useStyles()
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), firstName: '', lastName: '' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        for(let i = 0; i < count; i++) {
            for (let field in inputFields[i])
                console.log(field, inputFields[i][field]);
        }
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setInputFields(newInputFields);
    }

    // const handleAddFields = () => {
    //     setInputFields([...inputFields, { id: uuidv4(), firstName: '', lastName: '' }])
    // }

    // const handleRemoveFields = id => {
    //     const values = [...inputFields];
    //     values.splice(values.findIndex(value => value.id === id), 1);
    //     setInputFields(values);
    // }

    useEffect(() => {
        let newInPut = []
        setCount(Number(adults) + Number(childs))

        if (count !== Number(adults) + Number(childs)) {
            for (let i = 0; i < (Number(adults) + Number(childs)); i++) {
                newInPut = [...newInPut, { id: uuidv4(), firstName: '', lastName: '' }]
            }

            let v = []
            if (newInPut.length) {
                newInPut.forEach(n => {
                    v.push(n)
                    console.log(n)
                })
                setInputFields(v)
            }
            console.log(Number(adults) + Number(childs))
        }

    }, [adults, childs, count])

    return (
        <Container>
            <h1>Add New Member</h1>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField
                    id="filled-number"
                    label="Adults"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    // inputProps={{
                    //     onKeyDown: (event) => {
                    //         event.preventDefault();
                    //     },
                    // }}
                    variant="filled"
                    value={adults}
                    onChange={(event) => setAdults(event.target.value)}
                />
                <TextField
                    id="filled-number"
                    label="Childs"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    // inputProps={{
                    //     onKeyDown: (event) => {
                    //         event.preventDefault();
                    //     },
                    // }}
                    variant="filled"
                    value={childs}
                    onChange={(event) => setChilds(event.target.value)}
                />
                {inputFields.map(inputField => (
                    <div key={inputField.id}>
                        <TextField
                            name="firstName"
                            label="First Name"
                            variant="filled"
                            value={inputField.firstName}
                            onChange={event => handleChangeInput(inputField.id, event)}
                        />
                        <TextField
                            name="lastName"
                            label="Last Name"
                            variant="filled"
                            value={inputField.lastName}
                            onChange={event => handleChangeInput(inputField.id, event)}
                        />
                    </div>
                ))}
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                    endIcon={<Icon>send</Icon>}
                    onClick={handleSubmit}
                >Send</Button>
            </form>
        </Container>
    );
}

export default DynamicForm;