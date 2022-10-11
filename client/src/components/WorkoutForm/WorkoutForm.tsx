import { useForm } from "../../hooks";

function WorkoutForm() {
    const form = useForm({
        exercise: "",
        repititions: "",
        duration: "",
        weight: ""
    });

    return (
        <>
            <form>
                <div></div>
                <div>
                    <button>Create</button>
                </div>
            </form>
        </>
    )
}

export default WorkoutForm;