import { useState } from "react"

const Forms = () => {

    const INITVALUES = { title: "", body: "" }
    const [postData, setPostData] = useState(INITVALUES)
    const [message, setMessage] = useState("")

    function handleChange(e: any) {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        console.log("submitted values", postData)

        const restCall = {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }

        fetch('https://jsonplaceholder.typicode.com/posts', restCall)
            .then((response) => {
                if (response.ok) {
                    response.json().then(console.log)
                    setMessage("Success!")
                } else {
                    setMessage("Failure :-(")
                }
            });

        setPostData(INITVALUES)
    }


    return (
        <div>
            <h2>Formular</h2>

            {message} <br /><br />

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label><br />
                <input
                    id="title"
                    value={postData.title}
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange} /><br />
                <label htmlFor="description">Description</label><br />
                <textarea
                    id="description"
                    value={postData.body}
                    name="body"
                    placeholder="Description"
                    onChange={handleChange} /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Forms