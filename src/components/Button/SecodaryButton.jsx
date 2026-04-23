
function Button({ type, lable, click }) {
  return (
    <div>

      <div>

        <button
          type={type}
          onClick={click}
          className="py-3 w-24 border border-purple-500 text-purple-500 rounded-xl hover:shadow-xl hover:bg-purple-100">

          {lable}

        </button>

      </div>


    </div>
  )
}

export default Button