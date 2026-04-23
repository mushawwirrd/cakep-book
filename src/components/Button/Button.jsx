
function Button({ type, lable, click }) {
  return (
    <div>
      <div>

        <button
          type={type}
          onClick={click}
          className="py-3 w-24 bg-purple-500 text-white rounded-xl hover:shadow-xl hover:bg-purple-700 ">

          {lable}

        </button>

      </div>


    </div>
  )
}

export default Button