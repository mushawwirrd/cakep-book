
function Button({ type, lable, click }) {
  return (
    <div>

      <div>

        <button
          type={type}
          onClick={click}
          className="py-3 w-24 border border-primary text-primary rounded-full hover:shadow-xl hover:bg-black-100">

          {lable}

        </button>

      </div>


    </div>
  )
}

export default Button