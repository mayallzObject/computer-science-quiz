import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { Button } from "@material-ui/core";




export default function AddPizzaForm() {
    const [name, set_name] = useState("");
    const [description, set_description] = useState("");

    const dispatch = useDispatch();

    const submit = (event: any): void => {
        // to make sure that the form does not redirect (which is normal browser behavior)
        event.preventDefault();

        console.log("new pizza:", name, description);

        const action = {
            type: "ADD_PIZZA",
            payload: {
                id: Math.random(),
                name: name,
                description: description,
            },
        };
        dispatch(action);
    };

    return (
        <form onSubmit={submit}>
            <h2>Add a new pizza</h2>
            <p>
                <label>
                    Name:{" "}
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => set_name(e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Description:{" "}
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => set_description(e.target.value)}
                    />
                </label>
            </p>
            <p>
                <Button>
                    Add this pizza!
        </Button>
            </p>
        </form>
    );
}
