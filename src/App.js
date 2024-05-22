import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const showAlert = (message, type) => {
    if (type === "success") {
      setSuccess(message);
    } else {
      setError(message);
    }
    setTimeout(() => {
      setSuccess(null);
      setError(null);
    }, 1000);
  };

  const handleUppercase = () => {
    if (text.length <= 0) {
      showAlert("Please Write Something...", "error");
    } else if (text === text.toUpperCase()) {
      showAlert("Already Uppercase", "error");
    } else {
      setText(text.toUpperCase());
      showAlert("Converted to Uppercase", "success");
    }
  };

  const handleLowercase = () => {
    if (text.length <= 0) {
      showAlert("Please Write Something...", "error");
    } else if (text === text.toLowerCase()) {
      showAlert("Already Lowercase", "error");
    } else {
      setText(text.toLowerCase());
      showAlert("Converted to Lowercase", "success");
    }
  };

  const handleCopy = () => {
    if (text.length <= 0) {
      showAlert("Please Write Something", "error");
    } else {
      navigator.clipboard.writeText(text);
      showAlert("Copied", "success");
    }
  };

  const handleRemoveExtraSpace = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    if (text.length <= 0) {
      showAlert("Please Write Something", "error");
    } else if (text === newText) {
      showAlert("Already Removed Extra Space", "error");
    } else {
      setText(newText);
      showAlert("Removed Extra Space", "success");
    }
  };

  const handleClearText = () => {
    if (text.length <= 0) {
      showAlert("Please Write Something", "error");
    } else {
      setText("");
      showAlert("Clear Text", "success");
    }
  };

  return (
    <>
      <div className="text-white flex flex-col min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        {error && (
          <div
            role="alert"
            className="alert alert-warning mx-auto rounded-none flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div
            role="alert"
            className="alert justify-center rounded-none items-center flex alert-success"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{success}</span>
          </div>
        )}
        <h1 className="text-4xl text-white font-bold text-center p-10">
          Text Analysis and Converter
        </h1>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          name=""
          id=""
          rows="8"
          cols="100"
          className="p-3 outline-none mx-auto rounded-lg bg-transparent border border-black w-11/12 md:w-3/4 lg:w-1/2"
          placeholder="Write Anything..."
        ></textarea>
        <div className="mx-auto flex flex-wrap gap-4 m-5 justify-center">
          <button
            className="bg-blue-500 p-2 rounded-lg font-semibold text-black"
            onClick={handleUppercase}
          >
            Convert Uppercase
          </button>
          <button
            className="bg-blue-500 p-2 rounded-lg font-semibold text-black"
            onClick={handleLowercase}
          >
            Convert Lowercase
          </button>
          <button
            className="bg-blue-500 p-2 rounded-lg font-semibold text-black"
            onClick={handleCopy}
          >
            Copy To Clipboard
          </button>
          <button
            className="bg-blue-500 p-2 rounded-lg font-semibold text-black"
            onClick={handleRemoveExtraSpace}
          >
            Remove Extra Space
          </button>
          <button
            className="bg-red-500 p-2 rounded-lg font-semibold text-black"
            onClick={handleClearText}
          >
            Clear Text
          </button>
        </div>
        <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto mt-5 text-white">
          <h1 className="text-2xl font-semibold">Text Summary</h1>
          <div className="pl-4 pt-2">
            <p>
              Number of words:{" "}
              {text.length <= 0 ? 0 : text.trim().split(/\s+/).length}
            </p>
            <p>Number of characters: {text.length}</p>
            <p>{(text.length * 0.0008).toFixed(2)} minutes read</p>
          </div>
          <h1 className="text-2xl font-semibold mt-4">Preview</h1>
          <div className="pl-4 pt-2 mb-10 bg-white text-black p-4 rounded-lg">
            <p className="whitespace-pre-wrap">{text}</p>
          </div>
        </div>
      </div>
      <footer className="bg-white text-black text-center p-4">
        ©️ 2024 copyright: Shyam
      </footer>
    </>
  );
}

export default App;
