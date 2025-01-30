function ImageCorousal2() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="flex flex-col animate-loopingDown will-change-transform">
        {[2, 17, 18, 13, 12, 2, 13, 17, 9, 18].map((num, index) => (
          <img
            key={index}
            className="w-full h-[30vh] md:h-[35vh] lg:h-[40vh] object-cover rounded-[30px] mb-4"
            src={`/images/eyantra ${num}.jpeg`}
            alt={`image ${index + 6}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCorousal2

