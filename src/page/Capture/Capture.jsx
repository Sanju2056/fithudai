import { useState, useRef, useEffect } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function BodyCheckCameraCarousel() {
  const [cameraVisible, setCameraVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Load saved images from localStorage
  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("bodyCheckImages")) || [];
    setImages(savedImages);
  }, []);

  // Handle camera stream
  useEffect(() => {
    let stream;
    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Camera access denied", err);
      }
    }

    if (cameraVisible) startCamera();
    else {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    }

    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, [cameraVisible]);

  // Capture photo
  const capturePhoto = () => {
    if (images.length >= 3) {
      alert("You can only save 3 body check images.");
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imgURL = canvas.toDataURL("image/png");
    const newImages = [...images, imgURL];
    setImages(newImages);
    localStorage.setItem("bodyCheckImages", JSON.stringify(newImages));
  };

  const deleteImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    localStorage.setItem("bodyCheckImages", JSON.stringify(updated));
    if (current >= updated.length && updated.length > 0) {
      setCurrent(updated.length - 1);
    } else if (updated.length === 0) {
      setCurrent(0);
    }
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="">
      <h1 className="text-xl font-semibold mb-4">Body Check Images</h1>

      {/* Camera toggle */}
      <button
        onClick={() => setCameraVisible(!cameraVisible)}
        className="flex items-center px-4 py-2 mb-4 bg-gray-900 text-white rounded-lg"
      >
        {cameraVisible ? <X className="mr-2" /> : <Camera className="mr-2" />}
        {cameraVisible ? "Hide Camera" : "Show Camera"}
      </button>

      {/* Live camera */}
      {cameraVisible && (
        <div className="mb-4">
          <video ref={videoRef} autoPlay className="w-full rounded-lg border mb-2" />
          <canvas ref={canvasRef} className="hidden" />
          <button
            onClick={capturePhoto}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg w-full"
          >
            Capture Photo
          </button>
        </div>
      )}

      {/* Carousel */}
      {images.length > 0 && (
        <div className="relative h-full w-full overflow-hidden rounded-xl border shadow-lg">
          <img
            src={images[current]}
            alt={`Body Check ${current + 1}`}
            className="w-full h-full object-cover transition duration-500"
          />

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>

          {/* Delete button */}
          <button
            onClick={() => deleteImage(current)}
            className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800 bg-white rounded-full p-1"
          >
            X
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-2 gap-2 absolute bottom-2 left-0 right-0">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  index === current ? "bg-gray-900" : "bg-gray-400"
                }`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      )}

      {images.length === 0 && <p className="text-center text-gray-500">No images yet</p>}
    </div>
  );
}