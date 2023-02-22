import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import editCardsInputSchema from "../validation/editBizCards.validation";
import validate from "../validation/validation";

const EditMyBizCards = () => {
  const [myBizCardsData, setMyBizCardsData] = useState({
    title: "",
    subTitle: "",
    description: "",
    address: "",
    phone: "",
    url: "",
  });
  let { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`/cards/card/${id}`);
        setMyBizCardsData({
          title: data.title,
          subTitle: data.subTitle,
          description: data.description,
          address: data.address,
          phone: data.phone,
          url: data.image.url,
        });
      } catch (err) {
        console.log("axios error", err);
      }
    })();
  }, []);

  const handleMyBizCardsInputChange = (ev) => {
    let newCardsInput = JSON.parse(JSON.stringify(myBizCardsData));
    if (newCardsInput.hasOwnProperty(ev.target.id)) {
      newCardsInput[ev.target.id] = ev.target.value;
      setMyBizCardsData(newCardsInput);
    }
  };

  const handleFormSubmitEdit = async (ev) => {
    ev.preventDefault();
    const { error } = validate(myBizCardsData, editCardsInputSchema);
    console.log("error validation", error);

    try {
      let { data } = await axios.put(`/cards/${id}`, {
        ...myBizCardsData,
        alt: myBizCardsData.title,
      });
      setMyBizCardsData();
    } catch (err) {
      console.log("err from axios put", err);
    }
  };

  return (
    <div>
      <h1> Edit my cards {id}</h1>
      <form onSubmit={handleFormSubmitEdit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={myBizCardsData.title}
            onChange={handleMyBizCardsInputChange}
          />
          <label htmlFor="subTitle" className="form-label">
            Sub Title
          </label>
          <input
            type="text"
            className="form-control"
            id="subTitle"
            value={myBizCardsData.subTitle}
            onChange={handleMyBizCardsInputChange}
          />

          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={myBizCardsData.description}
            onChange={handleMyBizCardsInputChange}
          />

          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={myBizCardsData.address}
            onChange={handleMyBizCardsInputChange}
          />

          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={myBizCardsData.phone}
            onChange={handleMyBizCardsInputChange}
          />

          <label htmlFor="url" className="form-label">
            URL
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            value={myBizCardsData.url}
            onChange={handleMyBizCardsInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditMyBizCards;
