import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import "./CreatePost.css";

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, date: Date.now() }),
    })
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="createpost">
      <h1>Create a new post</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={titleChange}
          />
          <br />
          <br />
          <Editor
            apiKey="your-api-key"
            onEditorChange={(editorContent) => setContent(editorContent)}
            initialValue=""
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "codesample",
              ],
              toolbar:
                "undo redo | blocks " +
                "bold italic forecolor codesample image link | bullist numlist outdent indent | " +
                "removeformat | code | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:18px }",
            }}
          />
          <br />
          <button>Create</button>
        </form>
      </section>
    </div>
  );
}

export default CreatePost;
