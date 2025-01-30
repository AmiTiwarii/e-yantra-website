function ImageCorousal1() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="flex flex-col animate-loopingUp will-change-transform">
        {[11, 5, 8, 4, 10, 11, 5, 8, 14, 10].map((num, index) => (
          <img
            key={index}
            className="w-full h-[30vh] md:h-[35vh] lg:h-[40vh] object-cover rounded-[30px] mb-4"
            src={`/images/eyantra ${num}.jpeg`}
            alt={`image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCorousal1

