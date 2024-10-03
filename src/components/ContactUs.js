const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">This is contact us page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="messege"
        />
        <button className="border border-black m-2 p-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactUs;
