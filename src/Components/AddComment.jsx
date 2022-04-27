import React, { useState } from 'react';

const AddComment = () => {
  const [state, setState] = useState([]);
  const onButtonClickHandle = (event) => {
    event.preventDefault();
    alert('Hello: ' + event.name + event.rating + event.comments);
  };
  const ChangeHandler = (event) => {
    setState({ [event.target.name]: event.target.value });
    console.log('setState', state);
  };
  return (
    <>
      <h3>Product Of my Choices</h3>
      <div className="container">
        <div className="col-md-3">
          <div className="" style={{ width: '18rem' }}>
            <img
              src="https://rukminim1.flixcart.com/image/1664/1664/shoe/s/h/a/black-boxer-jabra-10-original-imaekau87h9hgrvs.jpeg?q=90"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="" style={{ width: '18rem' }}>
            <img
              src="https://rukminim1.flixcart.com/image/1408/1408/j3xbzww0/kids-shoe/h/k/h/9-bluee-wood-clerk-original-imaeuy5jhzguzk8x.jpeg?q=90"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label
                for="exampleInputEmail1"
                class="form-label"
                onChange={ChangeHandler}
              >
                Enter Rating :
              </label>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="rating"
                onSelect={ChangeHandler}
              >
                <option selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br />
              <label for="exampleInputEmail1" class="form-label">
                Enter Your Name :
              </label>
              <input
                type="email"
                class="form-control"
                name="name"
                aria-describedby="emailHelp"
              />
              <br />
              <label for="exampleInputEmail1" class="form-label">
                Enter Comment Here :
              </label>
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                name="comments"
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onButtonClickHandle}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddComment;
