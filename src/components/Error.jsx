function Error({mensaje}) {
  return (
    <div className="bg-red-700 text-white p-3 uppercase font-bold text-center mb-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  )
}

export default Error
