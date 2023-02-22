const EditMyBizCardsComponent = ({
  title,
  subTitle,
  description,
  address,
  phone,
}) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="textEditPage" className="form-label">
          Email address
        </label>
        <input type="text" className="form-control" id="text-editpage" />
      </div>
    </form>
  );
};
export default EditMyBizCardsComponent;
