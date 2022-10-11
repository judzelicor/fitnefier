import { useForm, useUser } from "../../hooks";
import "./WorkoutForm.css";
import axios from "axios";
import { useDispatch } from "react-redux";

function WorkoutForm() {
    const user = useUser();
    const dispatch = useDispatch();

    const form = useForm({
        exercise: "",
        repititions: 0,
        duration: 0,
        weight: 0
    });

    const handleSubmit = (event: Event) => {
        event.preventDefault();

        axios({
            method: "POST",
            url: "/api/v1/workouts",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ user.token }`
            },
            data: {
                ...form.values,
                owner: user.id
            }
        })
        .then(result => {
            dispatch({ type: "ADD_NEW_WORKOUT", payload: result.data })
        })
    }

    return (
        <>
            <form>
                <div>
                    <label>Exercise</label>
                    <input
                        value={ form.values.exercise }
                        type={ "text" }
                        onChange={ (event) => form.handleFormChanges("exercise", event.target.value) }
                        placeholder={ "What will you be doing?" }
                    />
                </div>
                <div>
                    <label>Repititions</label>
                    <input 
                        value={ form.values.repititions }
                        type={ "number" } 
                        onChange={(event) => form.handleFormChanges("repititions", event.target.value)}
                        placeholder={ "How many times?" }
                        step={ 1 }
                    />
                </div>
                <div>
                    <label>Weight</label>
                    <input
                        value={ form.values.weight }
                        type={ "number" }
                        onChange={ (event) => form.handleFormChanges("weight", event.target.value) }
                        placeholder={ "How heavy are the weights should be?" }
                        step={ 1 }
                    />
                </div>
                <div>
                    <label>Duration</label>
                    <input
                        value={ form.values.duration }
                        type={ "number" }
                        onChange={ (event) => form.handleFormChanges("duration", event.target.value) }
                        placeholder={ "How long will you be doing it?" }
                        step={ 0.25 }
                    />
                </div>
                <div>
                    <button 
                        className={ "addNewWorkoutButton__1LR3" }
                        onClick={ handleSubmit }
                    >
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}

export default WorkoutForm;