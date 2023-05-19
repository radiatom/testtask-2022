import React, { useState } from "react";
import "./Request.scss";

const Request = () => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
    };
    return (
        <div className="Request">
            <div className="Request__title Title">
                Working with POST request
            </div>
            <form>
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <p>+38 (XXX) XXX - XX - XX</p>
                <h5>Select your position</h5>
                <div>
                    <input
                        name="position"
                        type="radio"
                        value="Frontend developer"
                    />
                    Frontend developer
                </div>
                <div>
                    <input
                        name="position"
                        type="radio"
                        value="Backend developer"
                    />
                    Backend developer
                </div>
                <div>
                    <input name="position" type="radio" value="Designer" />
                    Designer
                </div>
                <div className="qa">
                    <input name="position" type="radio" value="QA" />
                    QA
                </div>

                <div className="file-input-container">
                    <input
                        type="file"
                        className="file-input"
                        onChange={handleFileChange}
                    />
                    <label className="file-input-label">Upload</label>
                    <label className={fileName===''?"file-input-name":"file-input-name ok"}>{fileName===''?"Upload your photo":`${fileName}`}</label>
                </div>

                <button className="Request__btn btn">Sign up</button>
            </form>
        </div>
    );
};

export default Request;
