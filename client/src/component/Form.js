import "./form.css";
import Axios from "axios";
import { useState } from "react";

export default function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const createUser = () => {
        // using axios to connect  to the backend -> db
        Axios.post("http://localhost:3001/get", {
            name,
            email,
            subject,
            message,
        })
            .then((response) => {
                alert("Thank you for your message. Have a great day.");
            })
    }

    return (
        <div className="background">
            <form className="form">
                <h1>Contact Us</h1>
                <h2>Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</h2>
                <label>Full Name  </label>
                <input type="text" placeholder="" onChange={(e) => { setName(e.target.value) }} />
                <label>Email  </label>
                <input type="text" placeholder="" onChange={(e) => { setEmail(e.target.value) }} />
                <label>Subject  </label>
                <input type="text" placeholder="" onChange={(e) => { setSubject(e.target.value) }} />
                <label>Message  </label>
                <textarea type="text" placeholder="" className="message" onChange={(e) => { setMessage(e.target.value) }} />
                <button onClick={createUser} className="submit">Send Message</button>
            </form>
        </div>
    )
}